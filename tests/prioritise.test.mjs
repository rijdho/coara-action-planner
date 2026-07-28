/**
 * prioritiseActions — the algorithm is the product, so its behaviour is pinned here.
 *
 * These assertions double as the parity contract with the server-side engine that
 * powers the hosted sibling: the same inputs must yield the same ordering and the
 * same scores on both sides. A change that moves a number here should be mirrored
 * there, or documented as a deliberate divergence.
 *
 * The algorithm cases use synthetic actions on purpose — recalibrating the real
 * catalog must not be able to break tests that are about the maths. The real
 * catalog is exercised separately at the bottom.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ACTIONS, prioritiseActions } from '../src/data/actions.js'

const act = (over = {}) => ({
  commitment: 'diversity',
  fromLevel: 0,
  toLevel: 3,
  effort: 'low',
  impact: 'medium',
  theme: 'diverse-outputs',
  title: 'synthetic',
  description: 'd',
  planText: 'p',
  ...over,
})

test('recommends only actions whose window contains the current level', () => {
  const a = act({ fromLevel: 2, toLevel: 4 })
  const at = lvl => prioritiseActions([a], { diversity: lvl }).length

  assert.equal(at(1), 0, 'below fromLevel: institution is not ready for it yet')
  assert.equal(at(2), 1, 'at fromLevel: included — the boundary is inclusive')
  assert.equal(at(3), 1, 'inside the window')
  assert.equal(at(4), 0, 'at toLevel: already achieved, nothing left to recommend')
  assert.equal(at(5), 0, 'past toLevel')
})

test('an unanswered commitment counts as level 0 rather than dropping out', () => {
  const a = act({ commitment: 'evidence', fromLevel: 0, toLevel: 2 })
  const unanswered = prioritiseActions([a], {})
  const explicitZero = prioritiseActions([a], { evidence: 0 })
  assert.equal(unanswered.length, 1, 'a partly-filled questionnaire still yields recommendations')
  assert.deepEqual(unanswered.map(x => x.priority), explicitZero.map(x => x.priority),
    'missing and explicit zero are scored identically')
})

test('priority = gap × impact − effort penalty (exact scores)', () => {
  const cases = [
    { impact: 'high', effort: 'low', from: 0, to: 3, current: 0, expected: 9 },     // 3 × 3 − 0
    { impact: 'high', effort: 'high', from: 0, to: 3, current: 0, expected: 8 },    // 3 × 3 − 1
    { impact: 'medium', effort: 'medium', from: 0, to: 2, current: 0, expected: 3.5 }, // 2 × 2 − 0.5
    { impact: 'low', effort: 'low', from: 1, to: 2, current: 1, expected: 1 },      // 1 × 1 − 0
    { impact: 'medium', effort: 'high', from: 2, to: 5, current: 3, expected: 3 },  // 2 × 2 − 1
  ]
  for (const c of cases) {
    const [got] = prioritiseActions(
      [act({ impact: c.impact, effort: c.effort, fromLevel: c.from, toLevel: c.to })],
      { diversity: c.current },
    )
    assert.equal(got.priority, c.expected,
      `impact=${c.impact} effort=${c.effort} ${c.current}→${c.to}`)
  }
})

test('a wider gap outranks a narrower one, all else equal', () => {
  const wide = act({ commitment: 'diversity', fromLevel: 0, toLevel: 5, title: 'wide' })
  const narrow = act({ commitment: 'metrics', fromLevel: 0, toLevel: 2, title: 'narrow' })
  const [first, second] = prioritiseActions([narrow, wide], { diversity: 0, metrics: 0 })
  assert.equal(first.title, 'wide')
  assert.equal(second.title, 'narrow')
})

test('higher impact outranks lower impact, and higher effort is penalised', () => {
  const byImpact = prioritiseActions(
    [act({ impact: 'low', title: 'lo' }), act({ impact: 'high', title: 'hi' }), act({ impact: 'medium', title: 'md' })],
    { diversity: 0 },
  ).map(a => a.title)
  assert.deepEqual(byImpact, ['hi', 'md', 'lo'])

  const byEffort = prioritiseActions(
    [act({ effort: 'high', title: 'hard' }), act({ effort: 'low', title: 'easy' }), act({ effort: 'medium', title: 'mid' })],
    { diversity: 0 },
  ).map(a => a.title)
  assert.deepEqual(byEffort, ['easy', 'mid', 'hard'], 'effort only breaks ties, never dominates')
})

test('results come back sorted by priority, descending', () => {
  const sample = [
    act({ impact: 'low', effort: 'high', toLevel: 2 }),
    act({ impact: 'high', effort: 'low', toLevel: 5 }),
    act({ impact: 'medium', effort: 'medium', toLevel: 3 }),
  ]
  const scores = prioritiseActions(sample, { diversity: 0 }).map(a => a.priority)
  assert.deepEqual(scores, [...scores].sort((x, y) => y - x))
})

test('context boost applies only to a matching, explicitly selected context', () => {
  const a = act({ relevanceContext: ['global-south'] })
  const base = prioritiseActions([a], { diversity: 0 })[0].priority

  assert.equal(prioritiseActions([a], { diversity: 0 }, 'all')[0].priority, base,
    '"all" means no context chosen, so nothing is boosted')
  assert.equal(prioritiseActions([a], { diversity: 0 }, 'rfo')[0].priority, base,
    'a non-matching context does not boost')
  assert.equal(prioritiseActions([a], { diversity: 0 }, 'global-south')[0].priority, base + 2,
    'a matching context adds exactly 2')

  const untagged = act({})
  assert.equal(prioritiseActions([untagged], { diversity: 0 }, 'global-south')[0].priority,
    prioritiseActions([untagged], { diversity: 0 })[0].priority,
    'an action with no relevanceContext is never boosted')
})

test('does not mutate the catalog it is given', () => {
  const input = [act(), act({ commitment: 'metrics' })]
  const before = JSON.parse(JSON.stringify(input))
  const out = prioritiseActions(input, { diversity: 0, metrics: 0 }, 'global-south')
  assert.deepEqual(input, before, 'inputs are untouched')
  assert.ok(!('priority' in input[0]), 'priority is added to copies, not to the source objects')
  assert.ok(out.every(a => 'priority' in a))
})

test('the real catalog produces a sane plan at every maturity level', () => {
  const commitments = [...new Set(ACTIONS.map(a => a.commitment))]
  for (const level of [0, 1, 2, 3, 4, 5]) {
    const levels = Object.fromEntries(commitments.map(c => [c, level]))
    const out = prioritiseActions(ACTIONS, levels)
    assert.ok(out.every(a => Number.isFinite(a.priority)),
      `level ${level}: every score is a real number (a typo'd effort/impact would yield NaN)`)
    assert.deepEqual(out.map(a => a.priority), [...out.map(a => a.priority)].sort((x, y) => y - x))
    if (level === 5) assert.equal(out.length, 0, 'a fully embedded institution has nothing left to do')
    else assert.ok(out.length > 0, `level ${level}: something should be recommended`)
  }
})
