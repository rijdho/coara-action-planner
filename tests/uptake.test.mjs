/**
 * Per-action uptake from the full reading of every plan. The figure shown on Results comes from
 * src/data/uptake.js; corpus/data/action-uptake.csv is the published copy. They must agree, every
 * action must have one, and the ids must be the actions' own.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { ACTIONS } from '../src/data/actions.js'
import { ACTION_UPTAKE, PLANS_READ } from '../src/data/uptake.js'
import { CORPUS_SIZE, actionEvidence, evidenceBand } from '../src/data/evidence.js'

const csv = readFileSync(new URL('../corpus/data/action-uptake.csv', import.meta.url), 'utf8').trim().split('\n')
const header = csv[0].split(',')
const rows = csv.slice(1).map(line => {
  const cells = line.match(/("([^"]|"")*"|[^,]*)(,|$)/g).map(c => c.replace(/,$/, '').replace(/^"|"$/g, '').replace(/""/g, '"'))
  return Object.fromEntries(header.map((h, i) => [h, cells[i]]))
})

test('every action has a stable, unique id', () => {
  const ids = ACTIONS.map(a => a.id)
  assert.equal(new Set(ids).size, ACTIONS.length)
  for (const id of ids) assert.match(id, /^A\d{2}$/)
})

test('every action has a reading figure, and there is none for a missing action', () => {
  assert.deepEqual(Object.keys(ACTION_UPTAKE).sort(), ACTIONS.map(a => a.id).sort())
})

test('the published CSV and the app agree action by action', () => {
  assert.equal(rows.length, ACTIONS.length)
  for (const r of rows) {
    const a = ACTIONS.find(x => x.id === r.id)
    assert.ok(a, `${r.id} is in the CSV but not in ACTIONS`)
    assert.equal(r.title, a.title, `${r.id}: title`)
    assert.equal(Number(r.plans), ACTION_UPTAKE[r.id].plans, `${r.id}: plans`)
    assert.equal(Number(r.pct), ACTION_UPTAKE[r.id].pct, `${r.id}: pct`)
    assert.equal(Number(r.plans_read), PLANS_READ)
    assert.equal(r.band, evidenceBand(Number(r.pct)).band, `${r.id}: band`)
  }
})

test('counts are consistent with the plans read', () => {
  assert.equal(PLANS_READ, CORPUS_SIZE, 'the reading covered the whole corpus')
  for (const [id, u] of Object.entries(ACTION_UPTAKE)) {
    assert.ok(u.plans >= 0 && u.plans <= PLANS_READ, `${id}: plans within the corpus`)
    assert.ok(Math.abs(u.pct - (100 * u.plans) / PLANS_READ) < 0.06, `${id}: pct matches plans`)
  }
})

test('Results shows the reading figure, not the keyword one', () => {
  const e = actionEvidence(ACTIONS[0])
  assert.equal(e.source, 'reading')
  assert.equal(e.plans, ACTION_UPTAKE[ACTIONS[0].id].plans)
  assert.equal(actionEvidence({ id: 'nope', theme: 'governance' }).source, 'keywords')
})
