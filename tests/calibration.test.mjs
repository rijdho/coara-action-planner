/**
 * The calibration is what this repository publishes and what people cite, so its
 * internal consistency is pinned here rather than left to review.
 *
 * Most of these guard silent failures — a mistyped `theme` still renders, it just
 * quietly loses its corpus-evidence band; a `commitment` that matches nothing means
 * an action that can never be recommended. Neither shows up as an error at runtime.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ACTIONS } from '../src/data/actions.js'
import { QUESTIONS } from '../src/data/questions.js'
import { COMMITMENTS, MATURITY_LEVELS } from '../src/data/commitments.js'
import { CONTEXTS } from '../src/data/context.js'
import { ROLE_IDS, ROLE_WEIGHTS } from '../src/data/perspectives.js'
import { CORPUS_SIZE, THEME_FREQUENCY, evidenceBand, themeEvidence } from '../src/data/evidence.js'

const COMMITMENT_IDS = new Set(COMMITMENTS.map(c => c.id))
const EFFORTS = new Set(['low', 'medium', 'high'])
const IMPACTS = new Set(['low', 'medium', 'high'])

test('commitments and the maturity model have the documented shape', () => {
  assert.equal(COMMITMENTS.length, 10, 'CoARA has ten commitments')
  assert.equal(COMMITMENT_IDS.size, 10, 'commitment ids are unique')
  assert.equal(MATURITY_LEVELS.length, 6, 'levels 0–5: Unaware → Embedded')
  for (const c of COMMITMENTS) {
    assert.ok(c.id && c.title && c.text, `commitment ${c.id} is fully populated`)
  }
})

test('every action is scoreable and reachable', () => {
  for (const [i, a] of ACTIONS.entries()) {
    const at = `action ${i} "${a.title}"`
    assert.ok(COMMITMENT_IDS.has(a.commitment), `${at}: commitment "${a.commitment}" exists`)
    assert.ok(EFFORTS.has(a.effort), `${at}: effort "${a.effort}" is low|medium|high`)
    assert.ok(IMPACTS.has(a.impact), `${at}: impact "${a.impact}" is low|medium|high`)
    assert.ok(Number.isInteger(a.fromLevel) && a.fromLevel >= 0 && a.fromLevel <= 5, `${at}: fromLevel in 0–5`)
    assert.ok(Number.isInteger(a.toLevel) && a.toLevel >= 1 && a.toLevel <= 5, `${at}: toLevel in 1–5`)
    assert.ok(a.fromLevel < a.toLevel, `${at}: fromLevel < toLevel, or it can never be recommended`)
  }
})

test('every commitment can be acted on from level 0', () => {
  // If a commitment has no action starting at 0, an institution that scores lowest
  // on it is told it is its weakest area and then offered nothing to do about it.
  for (const id of COMMITMENT_IDS) {
    const entry = ACTIONS.filter(a => a.commitment === id && a.fromLevel === 0)
    assert.ok(entry.length > 0, `commitment "${id}" has at least one entry-level action`)
  }
})

test('every action theme resolves to a corpus evidence band', () => {
  for (const a of ACTIONS) {
    assert.ok(a.theme, `action "${a.title}" carries a theme`)
    assert.ok(THEME_FREQUENCY[a.theme],
      `theme "${a.theme}" (action "${a.title}") exists in THEME_FREQUENCY — ` +
      'a typo here silently drops the "N% of 314 plans" band in the UI')
  }
})

test('planText is institutional prose, not the reader-facing description', () => {
  // The whole point of planText: a generated action plan must not address its own
  // author in the second person.
  for (const a of ACTIONS) {
    assert.ok(a.planText && a.planText.trim(), `action "${a.title}" has planText`)
    assert.notEqual(a.planText, a.description, `action "${a.title}": planText is not a copy of description`)
    assert.ok(!/\b(you|your|yours)\b/i.test(a.planText),
      `action "${a.title}": planText addresses the reader — "${a.planText.slice(0, 70)}…"`)
  }
})

test('questions cover the commitments with a full 0–5 answer ladder', () => {
  assert.equal(QUESTIONS.length, 24)
  assert.equal(new Set(QUESTIONS.map(q => q.id)).size, 24, 'question ids are unique')
  for (const q of QUESTIONS) {
    assert.ok(COMMITMENT_IDS.has(q.commitment), `question ${q.id}: commitment "${q.commitment}" exists`)
    assert.equal(q.answers.length, 6, `question ${q.id}: one answer per maturity level`)
    assert.deepEqual(q.answers.map(a => a.level), [0, 1, 2, 3, 4, 5],
      `question ${q.id}: answers are in ascending level order, which the UI relies on`)
    for (const a of q.answers) assert.ok(a.text?.trim(), `question ${q.id}: level ${a.level} has text`)
  }
  const covered = new Set(QUESTIONS.map(q => q.commitment))
  assert.equal(covered.size, 10, 'all ten commitments are diagnosed')
})

test('corpus evidence is internally consistent', () => {
  assert.equal(CORPUS_SIZE, 314)
  for (const [theme, { plans, pct }] of Object.entries(THEME_FREQUENCY)) {
    assert.ok(plans >= 0 && plans <= CORPUS_SIZE, `${theme}: plan count within the corpus`)
    assert.ok(Math.abs(pct - (100 * plans) / CORPUS_SIZE) < 0.1,
      `${theme}: pct ${pct} matches ${plans}/${CORPUS_SIZE}`)
  }
})

test('evidence bands split at the documented thresholds', () => {
  assert.equal(evidenceBand(100).band, 'universal')
  assert.equal(evidenceBand(60).band, 'universal', '60 is universal, inclusive')
  assert.equal(evidenceBand(59.9).band, 'common')
  assert.equal(evidenceBand(30).band, 'common')
  assert.equal(evidenceBand(29.9).band, 'emerging')
  assert.equal(evidenceBand(10).band, 'emerging')
  assert.equal(evidenceBand(9.9).band, 'frontier')
  assert.equal(evidenceBand(0).band, 'frontier')
  assert.equal(evidenceBand(null), null)
})

test('themeEvidence returns a full record, or null for an unknown theme', () => {
  const known = Object.keys(THEME_FREQUENCY)[0]
  const e = themeEvidence(known)
  assert.equal(e.theme, known)
  assert.equal(e.corpusSize, CORPUS_SIZE)
  assert.ok(e.band)
  assert.equal(themeEvidence('no-such-theme'), null)
  assert.equal(themeEvidence(null), null)
})

test('contexts and respondent roles are wired up', () => {
  assert.equal(CONTEXTS.length, 6)
  assert.ok(CONTEXTS.every(c => c.id && c.label), 'every context is labelled')

  assert.equal(ROLE_IDS.length, 10)
  for (const id of Object.keys(ROLE_WEIGHTS)) {
    assert.ok(ROLE_IDS.includes(id), `ROLE_WEIGHTS key "${id}" is a real role`)
  }
  for (const w of Object.values(ROLE_WEIGHTS)) {
    assert.ok(typeof w === 'number' && w > 0, 'role weights are positive numbers')
  }
})

test('actions tagged with a context reference a real one', () => {
  const ids = new Set(CONTEXTS.map(c => c.id))
  for (const a of ACTIONS.filter(a => a.relevanceContext)) {
    for (const c of a.relevanceContext) {
      assert.ok(ids.has(c), `action "${a.title}": relevanceContext "${c}" is a real context id`)
    }
  }
})
