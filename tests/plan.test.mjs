/**
 * applyPlan — the second half of the prioritisation method.
 *
 * prioritiseActions scores an action on its own merits; this stage decides what the
 * Results and Report tabs actually show, by filtering (high effort, the ambition
 * gate) and re-ranking (context affinity, focus, horizon, target, divergence). It
 * can drop an action entirely, so it carries at least as much weight as stage one
 * and belongs in the same parity contract with the hosted engine.
 *
 * Synthetic actions again, for the same reason: recalibrating the real catalog must
 * not break tests that are about the maths. The real catalog is exercised at the end,
 * through both stages in sequence.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ACTIONS, prioritiseActions } from '../src/data/actions.js'
import {
  applyPlan,
  DEFAULT_PLAN,
  CONTEXT_AFFINITY,
  CONTEXT_AFFINITY_BOOST,
  CONTEXT_MAX_COMBINED_BOOST,
  FOCUS_BOOST,
  TARGET_BOOST,
  DIVERGENCE_BOOST,
  DEFAULT_DIVERGENCE_THRESHOLD,
  HORIZON_WEIGHTS,
} from '../src/data/plan.js'

/** A scored action, as it leaves stage one. `priority` is set explicitly so each
 *  case asserts on the delta this stage adds, not on stage one's arithmetic. */
const scored = (over = {}) => ({
  commitment: 'diversity',
  fromLevel: 0,
  toLevel: 3,
  effort: 'low',
  impact: 'medium',
  theme: 'diverse-outputs',
  title: 'synthetic',
  priority: 10,
  ...over,
})

const plan = (over = {}) => ({ ...DEFAULT_PLAN, ...over })

/** Priority of the single surviving action, or null if it was filtered out. */
const only = (list) => (list.length ? list[0].priority : null)

// --- the ambition gate (the only rule here that removes actions) --------------

test('with no target set, the ambition gate is inert', () => {
  const a = scored({ fromLevel: 2, toLevel: 4 })
  assert.equal(only(applyPlan([a], plan(), { diversity: 2 }, {})), 10)
  assert.equal(only(applyPlan([a], plan(), { diversity: 2 }, { diversity: 0 })), 10,
    'target 0 means "not set", not "ambition is zero"')
})

test('a commitment already at or above its target drops out entirely', () => {
  const a = scored({ fromLevel: 0, toLevel: 3 })
  assert.equal(applyPlan([a], plan(), { diversity: 3 }, { diversity: 3 }).length, 0,
    'current == target: we are there')
  assert.equal(applyPlan([a], plan(), { diversity: 4 }, { diversity: 3 }).length, 0,
    'current > target: past it')
  assert.equal(applyPlan([a], plan(), { diversity: 2 }, { diversity: 3 }).length, 1,
    'current < target: still climbing')
})

test('an action that begins beyond the target is overshoot and drops out', () => {
  const beyond = scored({ fromLevel: 3, toLevel: 5, title: 'beyond' })
  const toward = scored({ fromLevel: 1, toLevel: 2, title: 'toward' })
  const out = applyPlan([beyond, toward], plan(), { diversity: 1 }, { diversity: 3 })
  assert.deepEqual(out.map(a => a.title), ['toward'],
    'an action starting at/above the declared ambition is not on the way there')
})

test('an action that lands at or below the target is boosted', () => {
  const lands = scored({ toLevel: 3, title: 'lands' })
  const overshoots = scored({ toLevel: 5, title: 'overshoots' })
  const at = (a) => only(applyPlan([a], plan(), { diversity: 0 }, { diversity: 3 }))
  assert.equal(at(lands), 12, 'closes the gap to the declared target: 10 + 2')
  assert.equal(at(overshoots), 10, 'goes past the target: survives the gate, but no boost')
})

// --- filters and boosts -------------------------------------------------------

test('high-effort actions are hidden when the plan says so', () => {
  const list = [scored({ effort: 'high', title: 'hard' }), scored({ effort: 'low', title: 'easy' })]
  assert.deepEqual(applyPlan(list, plan({ includeHighEffort: true })).map(a => a.title),
    ['hard', 'easy'], 'kept by default')
  assert.deepEqual(applyPlan(list, plan({ includeHighEffort: false })).map(a => a.title),
    ['easy'], 'filtered out, not merely demoted')
})

test('a focus commitment is boosted by exactly FOCUS_BOOST', () => {
  const a = scored({ commitment: 'metrics' })
  assert.equal(only(applyPlan([a], plan({ focusCommitments: ['metrics'] }))), 13, '10 + 3')
  assert.equal(only(applyPlan([a], plan({ focusCommitments: ['exchange'] }))), 10,
    'a different commitment is untouched')
  assert.equal(only(applyPlan([a], plan({ focusCommitments: [] }))), 10)
})

test('horizon re-weights effort (quick wins) or impact (structural)', () => {
  const cases = [
    { horizon: 'quick-wins', effort: 'low', impact: 'medium', expected: 12 },
    { horizon: 'quick-wins', effort: 'medium', impact: 'medium', expected: 10 },
    { horizon: 'quick-wins', effort: 'high', impact: 'medium', expected: 8 },
    { horizon: 'structural', effort: 'high', impact: 'high', expected: 12 },
    { horizon: 'structural', effort: 'low', impact: 'low', expected: 10 },
    { horizon: 'balanced', effort: 'low', impact: 'high', expected: 10 },
  ]
  for (const c of cases) {
    const a = scored({ effort: c.effort, impact: c.impact })
    assert.equal(only(applyPlan([a], plan({ horizon: c.horizon }))), c.expected,
      `${c.horizon}: effort=${c.effort} impact=${c.impact}`)
  }
})

test('an unknown horizon falls back to balanced instead of scoring NaN', () => {
  const a = scored()
  assert.equal(only(applyPlan([a], plan({ horizon: 'not-a-horizon' }))), 10)
})

test('contested commitments are boosted at the threshold, not below it', () => {
  const a = scored()
  const at = (spread, threshold) =>
    only(applyPlan([a], plan(), {}, {}, { diversity: spread }, threshold))

  assert.equal(at(1, DEFAULT_DIVERGENCE_THRESHOLD), 10, 'below the threshold: no boost')
  assert.equal(at(2, DEFAULT_DIVERGENCE_THRESHOLD), 12, 'at the threshold: boosted by 2')
  assert.equal(at(4, DEFAULT_DIVERGENCE_THRESHOLD), 12, 'the boost is flat, not proportional')
  assert.equal(at(1, 1), 12, 'a lowered threshold takes effect')
  assert.equal(at(3, 4), 10, 'a raised threshold takes effect')
  assert.equal(only(applyPlan([a], plan(), {}, {}, {})), 10, 'a single perspective never diverges')
})

// --- the two context layers, and their combined ceiling ------------------------

test('context affinity boosts every action under the affine commitments', () => {
  const affine = CONTEXT_AFFINITY['global-south']
  assert.ok(affine.includes('diversity'), 'fixture assumption: diversity is affine to global-south')

  const a = scored({ commitment: 'diversity' })
  assert.equal(only(applyPlan([a], plan({ context: 'global-south' }))), 12, '10 + 2')
  assert.equal(only(applyPlan([a], plan({ context: 'all' }))), 10, '"all" means no context chosen')
  assert.equal(only(applyPlan([a], plan({ context: 'funder' }))), 10,
    'a context this commitment is not affine to does not boost')
  assert.equal(only(applyPlan([a], plan({ context: 'not-a-context' }))), 10,
    'an unknown context is inert rather than throwing')
})

test('the two context layers stack to exactly CONTEXT_MAX_COMBINED_BOOST', () => {
  // Stage one boosts the per-action `relevanceContext` tag; stage two boosts the
  // commitment's affinity. An action that satisfies both is boosted twice — on
  // purpose, but the ceiling is pinned here so it cannot drift unnoticed.
  const tagged = { commitment: 'diversity', fromLevel: 0, toLevel: 3, effort: 'low', impact: 'medium',
    theme: 'diverse-outputs', title: 'both', relevanceContext: ['global-south'] }
  const levels = { diversity: 0 }

  const neutral = only(applyPlan(prioritiseActions([tagged], levels, 'all'), plan({ context: 'all' })))
  const both = only(applyPlan(
    prioritiseActions([tagged], levels, 'global-south'), plan({ context: 'global-south' })))

  assert.equal(both - neutral, 4,
    'tag (+2) + affinity (+2) is the largest move a context selection can make')
  assert.equal(CONTEXT_MAX_COMBINED_BOOST, both - neutral,
    'the documented ceiling matches what the two stages actually do')
  assert.ok(CONTEXT_MAX_COMBINED_BOOST < 6,
    'the ceiling stays below a full gap step at high impact (3 levels × impact 3 = 9 → a 3-level gap ' +
    'at low impact scores 3), so context re-orders within a band rather than overriding maturity')
})

// --- shape guarantees ---------------------------------------------------------

test('results come back sorted by priority, descending', () => {
  const list = [
    scored({ commitment: 'metrics', priority: 4, title: 'a' }),
    scored({ commitment: 'exchange', priority: 9, title: 'b' }),
    scored({ commitment: 'awareness', priority: 6, title: 'c' }),
  ]
  const out = applyPlan(list, plan({ focusCommitments: ['metrics'] }))
  assert.deepEqual(out.map(a => a.priority), [...out.map(a => a.priority)].sort((x, y) => y - x))
  assert.deepEqual(out.map(a => a.title), ['b', 'a', 'c'], 'the focus boost actually re-orders')
})

test('does not mutate the list it is given', () => {
  const input = [scored(), scored({ commitment: 'metrics' })]
  const before = JSON.parse(JSON.stringify(input))
  applyPlan(input, plan({ focusCommitments: ['diversity', 'metrics'], horizon: 'quick-wins' }),
    { diversity: 0 }, { diversity: 3 }, { diversity: 3 })
  assert.deepEqual(input, before, 'stage one\'s output is not scribbled on')
})

test('every plan setting leaves the real catalog scoreable and non-empty', () => {
  const commitments = [...new Set(ACTIONS.map(a => a.commitment))]
  const contexts = Object.keys(CONTEXT_AFFINITY)
  const horizons = ['quick-wins', 'balanced', 'structural']

  for (const level of [0, 1, 2, 3, 4]) {
    const levels = Object.fromEntries(commitments.map(c => [c, level]))
    for (const context of contexts) {
      for (const horizon of horizons) {
        for (const includeHighEffort of [true, false]) {
          const settings = plan({ context, horizon, includeHighEffort })
          const out = applyPlan(prioritiseActions(ACTIONS, levels, context), settings, levels)
          const label = `level ${level} / ${context} / ${horizon} / high-effort ${includeHighEffort}`
          assert.ok(out.every(a => Number.isFinite(a.priority)), `${label}: every score is a real number`)
          assert.ok(out.length > 0, `${label}: something is still recommended`)
          assert.deepEqual(out.map(a => a.priority), [...out.map(a => a.priority)].sort((x, y) => y - x),
            `${label}: sorted`)
        }
      }
    }
  }
})

test('an institution that declares its current level as its target is told it is done', () => {
  const commitments = [...new Set(ACTIONS.map(a => a.commitment))]
  const levels = Object.fromEntries(commitments.map(c => [c, 2]))
  const targets = Object.fromEntries(commitments.map(c => [c, 2]))
  const out = applyPlan(prioritiseActions(ACTIONS, levels), plan(), levels, targets)
  assert.equal(out.length, 0,
    'ambition met everywhere: the gate empties the list rather than recommending overshoot')
})

test('the published weights are what the README documents', () => {
  // Asserted as literals on purpose: every case above states its expected score as a
  // number too, so changing a constant fails loudly here AND wherever it is applied,
  // rather than sliding through tests written in terms of the constant itself.
  assert.equal(CONTEXT_AFFINITY_BOOST, 2)
  assert.equal(CONTEXT_MAX_COMBINED_BOOST, 4)
  assert.equal(FOCUS_BOOST, 3)
  assert.equal(TARGET_BOOST, 2)
  assert.equal(DIVERGENCE_BOOST, 2)
  assert.equal(DEFAULT_DIVERGENCE_THRESHOLD, 2)
  assert.deepEqual(HORIZON_WEIGHTS['quick-wins'].effort, { low: 2, medium: 0, high: -2 })
  assert.deepEqual(HORIZON_WEIGHTS.structural.impact, { low: 0, medium: 0, high: 2 })
  assert.deepEqual(HORIZON_WEIGHTS.balanced, { effort: {}, impact: {} })
})
