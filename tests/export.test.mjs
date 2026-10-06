/**
 * The JSON export of Results: what an institution copies into its plan.
 *
 * Two fields were easy to misread: the eligibility threshold as the institution's current
 * level, and interface copy in the second person as the institution's own actions. The export
 * now states the target from the current level and carries the institutional text; these
 * tests pin both, and show they would catch the old export.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ACTIONS, prioritiseActions } from '../src/data/actions.js'
import { exportActions } from '../src/lib/exportActions.js'

const levels = { diversity: 2, qualitative: 1, 'no-metrics': 1, 'no-rankings': 1, resources: 4,
  'review-criteria': 1, awareness: 2, exchange: 4, communicate: 2, 'collective-eval': 1 }
const prioritised = prioritiseActions(ACTIONS, levels)

// The export as it was before: description and the calibration band.
const oldExport = (list, lv) => list.map((a) => ({ description: a.description,
  currentLevel: lv[a.commitment] ?? 0, fromLevel: a.fromLevel, toLevel: a.toLevel,
  target: `${a.fromLevel} → ${a.toLevel}` }))

function targetsFromCurrent(rows) {
  return rows.every((r) => r.target === `${r.currentLevel} → ${r.targetLevel ?? r.toLevel}`)
}
function institutionalVoice(rows) {
  return rows.every((r) => r.planText && !/\b(you|your|yourself)\b/i.test(r.planText))
}

test('the target starts from the current level, not the eligibility threshold', () => {
  const rows = exportActions(prioritised, levels)
  assert.ok(rows.length > 0)
  assert.ok(targetsFromCurrent(rows))
  assert.ok(rows.every((r) => !('fromLevel' in r) && 'eligibleFromLevel' in r))
  // Not vacuous: some action starts below the current level, and the old export misstates it.
  assert.ok(prioritised.some((a) => a.fromLevel < levels[a.commitment]))
  assert.equal(targetsFromCurrent(oldExport(prioritised, levels)), false)
})

test('every exported action carries its text in the institution\'s voice', () => {
  assert.ok(institutionalVoice(exportActions(prioritised, levels)))
  // Not vacuous: interface copy addresses the reader, and the check catches it.
  const asDescription = exportActions(prioritised, levels).map((r) => ({ ...r, planText: r.description }))
  assert.equal(institutionalVoice(asDescription), false)
})
