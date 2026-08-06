/**
 * The Spanish, French and German overlays align with the source data BY ARRAY INDEX.
 * That is the most fragile contract in this repository: inserting an action in the
 * middle of ACTIONS without inserting one at the same position in all three overlays
 * silently shifts every later translation onto the wrong action. Nothing throws; the
 * app just shows the wrong text in three languages.
 *
 * Keyed sets (questions, commitments, contexts, roles) fail more loudly but are
 * checked here too, so a renamed id cannot quietly fall back to English forever.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import es from '../src/data/i18n/es.js'
import fr from '../src/data/i18n/fr.js'
import de from '../src/data/i18n/de.js'
import { ACTIONS } from '../src/data/actions.js'
import { QUESTIONS } from '../src/data/questions.js'
import { COMMITMENTS, MATURITY_LEVELS } from '../src/data/commitments.js'
import { CONTEXTS } from '../src/data/context.js'
import { REPORT_EN } from '../src/i18n/report.en.js'
import { UI_EN } from '../src/i18n/ui.en.js'
import { ROLE_IDS } from '../src/data/perspectives.js'

const LOCALES = { es, fr, de }

test('every locale exposes the same top-level sections', () => {
  const expected = ['ui', 'report', 'roles', 'questions', 'commitments', 'actions', 'contexts', 'maturity']
  for (const [code, L] of Object.entries(LOCALES)) {
    for (const section of expected) {
      assert.ok(L[section], `${code} is missing the "${section}" section`)
    }
  }
})

test('action overlays align with ACTIONS by index', () => {
  for (const [code, L] of Object.entries(LOCALES)) {
    assert.ok(Array.isArray(L.actions), `${code}.actions is an array`)
    assert.equal(L.actions.length, ACTIONS.length,
      `${code} has ${L.actions.length} action translations for ${ACTIONS.length} actions — ` +
      'index alignment is broken and every later translation is on the wrong action')
    for (const [i, a] of L.actions.entries()) {
      assert.ok(a.title?.trim(), `${code} action ${i}: title is present`)
      assert.ok(a.description?.trim(), `${code} action ${i}: description is present`)
      assert.ok(a.planText?.trim(), `${code} action ${i}: planText is present`)
    }
  }
})

test('translated planText stays free of second-person address', () => {
  // Same rule as the English source: a generated plan must not address its author.
  const YOU = { es: /\b(usted|ustedes|tu\s|tus\s)\b/i, fr: /\b(vous|votre|vos)\b/i, de: /\b(Sie|Ihre|Ihr)\b/ }
  for (const [code, L] of Object.entries(LOCALES)) {
    for (const [i, a] of L.actions.entries()) {
      assert.ok(!YOU[code].test(a.planText),
        `${code} action ${i} planText addresses the reader — "${a.planText.slice(0, 70)}…"`)
    }
  }
})

test('maturity overlays cover all six levels', () => {
  for (const [code, L] of Object.entries(LOCALES)) {
    assert.equal(L.maturity.length, MATURITY_LEVELS.length, `${code}: one label per maturity level`)
    assert.ok(L.maturity.every(m => m && (typeof m === 'string' ? m.trim() : Object.keys(m).length)),
      `${code}: no empty maturity entry`)
  }
})

test('keyed overlays match the source ids exactly, with no strays', () => {
  const sets = {
    questions: QUESTIONS.map(q => q.id),
    commitments: COMMITMENTS.map(c => c.id),
    contexts: CONTEXTS.map(c => c.id),
    roles: ROLE_IDS,
  }
  for (const [code, L] of Object.entries(LOCALES)) {
    for (const [section, ids] of Object.entries(sets)) {
      const have = Object.keys(L[section])
      const missing = ids.filter(id => !have.includes(id))
      const stray = have.filter(id => !ids.includes(id))
      assert.deepEqual(missing, [], `${code}.${section} is missing: ${missing.join(', ')}`)
      assert.deepEqual(stray, [], `${code}.${section} has ids that no longer exist: ${stray.join(', ')}`)
    }
  }
})

test('a locale is not silently left as untranslated English', () => {
  // Proper nouns and short labels legitimately match English, so this only fails
  // when a whole file looks like a copy — the signature of an overlay that was
  // stubbed out and never filled in.
  for (const [code, L] of Object.entries(LOCALES)) {
    const identical = L.actions.filter((a, i) => a.title === ACTIONS[i].title).length
    assert.ok(identical < ACTIONS.length * 0.5,
      `${code}: ${identical}/${ACTIONS.length} action titles are identical to English`)
  }
})

test('the report and UI string tables are fully covered in every locale', () => {
  // These two overlays are plain key maps, so a missing key does not misalign
  // anything — it silently falls back to English mid-paragraph, which reads as a
  // translation bug to the user and is invisible here without this check.
  for (const [table, EN, name] of [['report', REPORT_EN, 'report'], ['ui', UI_EN, 'ui']]) {
    const keys = Object.keys(EN)
    for (const [code, L] of Object.entries(LOCALES)) {
      const have = Object.keys(L[table] ?? {})
      assert.deepEqual(keys.filter(k => !have.includes(k)), [],
        `${code}.${name} falls back to English for these keys`)
      assert.deepEqual(have.filter(k => !keys.includes(k)), [],
        `${code}.${name} has keys the English table no longer defines`)
    }
  }
})
