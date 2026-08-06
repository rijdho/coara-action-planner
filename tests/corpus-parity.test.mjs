/**
 * The corpus measurements and what the app displays must be the same numbers.
 *
 * `corpus/data/theme-frequency.csv` is where prevalence is measured;
 * `src/data/evidence.js` is the copy the app reads at runtime, hand-transcribed from
 * it at each recount. Two copies of the same figures is exactly the arrangement that
 * drifts in silence: a recount that updates the CSV and forgets evidence.js leaves
 * the tool quoting last year's percentages beside a corpus that no longer says that,
 * and nothing renders differently.
 *
 * So this fails the build instead. It is also the reason the corpus lives in this
 * repository rather than its own: across two repos, no test could see both sides.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { CORPUS_SIZE, THEME_FREQUENCY, evidenceBand } from '../src/data/evidence.js'
import { ACTIONS } from '../src/data/actions.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

/**
 * CSV reader handling the quoting these files actually use — titles and author lists
 * contain commas, so splitting on `,` silently shifts every later column and reads
 * one field's value as another's.
 */
function parseCsvLine(line) {
  const out = []
  let field = ''
  let quoted = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (quoted) {
      if (ch === '"' && line[i + 1] === '"') { field += '"'; i++ }
      else if (ch === '"') quoted = false
      else field += ch
    } else if (ch === '"') quoted = true
    else if (ch === ',') { out.push(field); field = '' }
    else field += ch
  }
  out.push(field)
  return out
}

function readCsv(relPath) {
  const [head, ...rows] = readFileSync(join(ROOT, relPath), 'utf8').trim().split('\n')
  const cols = parseCsvLine(head)
  return rows.map((line) => Object.fromEntries(parseCsvLine(line).map((v, i) => [cols[i], v])))
}

const frequency = readCsv('corpus/data/theme-frequency.csv')

test('every measured theme appears in evidence.js with the same numbers', () => {
  for (const row of frequency) {
    const shown = THEME_FREQUENCY[row.theme]
    assert.ok(shown, `${row.theme} is measured in the corpus but missing from evidence.js`)
    assert.equal(shown.plans, Number(row.plans_matched), `${row.theme}: plans matched`)
    assert.equal(shown.pct, Number(row.pct), `${row.theme}: percentage`)
  }
})

test('evidence.js invents no theme the corpus never measured', () => {
  const measured = new Set(frequency.map((r) => r.theme))
  const extra = Object.keys(THEME_FREQUENCY).filter((t) => !measured.has(t))
  assert.deepEqual(extra, [], 'a percentage with no measurement behind it')
})

test('CORPUS_SIZE matches the denominator every row was counted against', () => {
  const sizes = [...new Set(frequency.map((r) => Number(r.corpus_size)))]
  assert.equal(sizes.length, 1, `rows disagree on the corpus size: ${sizes.join(', ')}`)
  assert.equal(CORPUS_SIZE, sizes[0])

  const manifest = readCsv('corpus/data/plans.csv')
  assert.equal(manifest.length, CORPUS_SIZE,
    'the manifest lists a different number of plans than the figures were computed over')
})

test('the recorded band is the one evidenceBand() derives', () => {
  // The CSV carries a band column for readers who never run the app; if the two
  // ever disagree, the published table and the interface tell different stories.
  for (const row of frequency) {
    assert.equal(evidenceBand(Number(row.pct)).band, row.band, `${row.theme}: band`)
  }
})

test('percentages are consistent with the counts they came from', () => {
  for (const row of frequency) {
    const expected = Math.round((1000 * Number(row.plans_matched)) / Number(row.corpus_size)) / 10
    assert.equal(Number(row.pct), expected, `${row.theme}: ${row.plans_matched}/${row.corpus_size}`)
    assert.ok(Number(row.total_hits) >= Number(row.plans_matched),
      `${row.theme}: fewer hits than plans matched is arithmetically impossible`)
  }
})

test('every theme an action carries is one the corpus measured', () => {
  // The same guarantee calibration.test.mjs makes against evidence.js, made here
  // against the measurement itself — so an action tagged with a theme that was never
  // counted cannot reach Results with a blank evidence band.
  const measured = new Set(frequency.map((r) => r.theme))
  const orphans = [...new Set(ACTIONS.map((a) => a.theme))].filter((t) => t && !measured.has(t))
  assert.deepEqual(orphans, [], 'action themes with no corpus measurement')
})

test('the keyword signatures cover exactly the themes that were counted', () => {
  const keywords = JSON.parse(readFileSync(join(ROOT, 'corpus/data/theme-keywords.json'), 'utf8'))
  const defined = new Set(Object.keys(keywords.themes))
  const measured = new Set(frequency.map((r) => r.theme))
  assert.deepEqual([...measured].filter((t) => !defined.has(t)), [],
    'counted with a signature that is not published — the figure cannot be reproduced')
  assert.deepEqual([...defined].filter((t) => !measured.has(t)), [],
    'a published signature that no figure came from')
})

test('every published signature is a valid regular expression', () => {
  const keywords = JSON.parse(readFileSync(join(ROOT, 'corpus/data/theme-keywords.json'), 'utf8'))
  for (const [theme, pattern] of Object.entries(keywords.themes)) {
    // Python and JS regex dialects differ, but these signatures use the common
    // subset; a pattern that will not compile here is worth knowing about.
    assert.doesNotThrow(() => new RegExp(pattern, 'i'), `${theme} does not compile`)
  }
})

test('the manifest points at real, resolvable Zenodo records', () => {
  const manifest = readCsv('corpus/data/plans.csv')
  for (const row of manifest) {
    assert.match(row.zenodo_id, /^\d+$/, 'Zenodo ids are numeric')
    // Any registrant prefix, not just Zenodo's: three plans were deposited in Zenodo
    // carrying a DOI already minted by their own institutional repository. The record
    // id is what locates the deposit; the DOI is whatever the depositor brought.
    assert.match(row.doi, /^10\.\d{4,9}\/\S+$/, `${row.zenodo_id}: DOI shape`)
    assert.equal(row.zenodo_url, `https://zenodo.org/records/${row.zenodo_id}`,
      `${row.zenodo_id}: the URL and the id must agree, or the record cannot be found`)
    assert.ok(Number(row.extracted_chars) > 0,
      `${row.zenodo_id}: listed as analysed but no text was extracted from it`)
  }
  const ids = manifest.map((r) => r.zenodo_id)
  assert.equal(new Set(ids).size, ids.length, 'a duplicated plan would inflate the denominator')
})

test('the two published copies of the keyword signatures agree', () => {
  // theme-keywords.json is what 04-theme-frequency.py actually compiles; the CSV is a
  // reader-friendly view of the same table. Two copies, so: pin them together.
  const json = JSON.parse(readFileSync(join(ROOT, 'corpus/data/theme-keywords.json'), 'utf8'))
  const rows = readCsv('corpus/data/theme-keywords.csv')
  assert.equal(rows.length, Object.keys(json.themes).length, 'same number of themes')
  for (const row of rows) {
    assert.ok(json.themes[row.theme], `${row.theme} is in the CSV but not the JSON`)
    assert.equal(row.regex, json.themes[row.theme], `${row.theme}: the CSV and JSON signatures differ`)
  }
})
