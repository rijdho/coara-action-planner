/**
 * Framework tags: which DORA recommendations, Leiden principles and SCOPE stages or principles
 * an action puts into practice. A tag is a claim about a published text, so it must name
 * something that exists, and the set of tags is pinned so a change to it is a visible edit.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ACTIONS } from '../src/data/actions.js'
import { FRAMEWORKS, FRAMEWORK_SOURCES } from '../src/data/frameworks.js'

test('every action carries a frameworks array', () => {
  for (const a of ACTIONS) assert.ok(Array.isArray(a.frameworks), `"${a.title}" has no frameworks array`)
})

test('every tag names a recommendation or principle that exists', () => {
  for (const a of ACTIONS) {
    for (const f of a.frameworks) assert.ok(FRAMEWORKS[f], `"${a.title}" cites unknown framework key "${f}"`)
    assert.equal(new Set(a.frameworks).size, a.frameworks.length, `"${a.title}" repeats a tag`)
  }
})

test('the reference set is the one the sources publish', () => {
  const by = fw => Object.values(FRAMEWORKS).filter(f => f.framework === fw).map(f => f.ref)
  // Leiden has exactly ten principles; SCOPE five stages and three principles.
  assert.deepEqual(by('Leiden'), ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
  assert.deepEqual(by('SCOPE').sort(), ['C', 'E', 'O', 'P', 'P1', 'P2', 'P3', 'S'])
  // DORA has 18 recommendations; only those the catalogue uses are listed, all within range.
  for (const r of by('DORA')) assert.ok(+r >= 1 && +r <= 18, `DORA ${r} is out of range`)
  for (const f of Object.values(FRAMEWORKS)) assert.equal(f.url, FRAMEWORK_SOURCES[f.framework])
})

test('every listed reference is used by at least one action', () => {
  const used = new Set(ACTIONS.flatMap(a => a.frameworks))
  const unusedDora = Object.keys(FRAMEWORKS).filter(k => k.startsWith('DORA') && !used.has(k))
  assert.deepEqual(unusedDora, [], 'a DORA recommendation is listed but no action cites it')
})

test('the tagging is pinned: 61 actions, the counts below', () => {
  assert.equal(ACTIONS.length, 61)
  const count = fw => ACTIONS.filter(a => a.frameworks.some(f => f.startsWith(fw))).length
  assert.equal(count('DORA'), 21)
  assert.equal(count('Leiden'), 21)
  assert.equal(count('SCOPE'), 13)
  assert.equal(ACTIONS.filter(a => a.frameworks.length === 0).length, 22)
})
