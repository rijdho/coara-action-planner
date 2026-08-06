/**
 * The CoARA guiding questions are a quotation of a specific published document, so
 * what is tested here is fidelity and coverage, not maths: every commitment reached,
 * no invented question, and the one place where this file knowingly departs from the
 * source recorded rather than silently corrected.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { COMMITMENTS } from '../src/data/commitments.js'
import {
  GUIDING_QUESTIONS_SOURCE,
  STARTING_POINT_QUESTIONS,
  COMMITMENT_QUESTIONS,
  startingPointFor,
  questionsFor,
} from '../src/data/guidingQuestions.js'

test('every commitment carries its guiding questions, and no stray ids', () => {
  const ids = COMMITMENTS.map(c => c.id)
  const have = Object.keys(COMMITMENT_QUESTIONS)
  assert.deepEqual(ids.filter(id => !have.includes(id)), [],
    'a commitment with no guiding question would print a heading and no prompt')
  assert.deepEqual(have.filter(id => !ids.includes(id)), [],
    'a question keyed to an id that no longer exists is silently never shown')
  for (const id of ids) assert.ok(questionsFor(id).questions.length >= 1, `${id} has at least one`)
})

test('the starting-point blocks map onto the report sections that answer them', () => {
  const sections = STARTING_POINT_QUESTIONS.map(q => q.section)
  assert.deepEqual([...sections].sort(), ['baseline', 'intro', 'priorities'],
    'exactly the three sections report.js asks for, each once')
  for (const s of sections) assert.ok(startingPointFor(s), `startingPointFor("${s}") resolves`)
  assert.equal(startingPointFor('nope'), undefined, 'an unknown section is undefined, not a throw')
})

test('the published question count is pinned', () => {
  // 3 Starting Point reflection points (7 questions) + 10 Commitments (12 questions),
  // per the October 2023 guidelines. A changed count means the source was re-read or
  // a question was invented; either way it should be a deliberate edit.
  const starting = STARTING_POINT_QUESTIONS.reduce((n, b) => n + b.questions.length, 0)
  const commitment = Object.values(COMMITMENT_QUESTIONS).reduce((n, b) => n + b.questions.length, 0)
  assert.equal(starting, 7)
  assert.equal(commitment, 12)
  assert.equal(starting + commitment, 19)
  assert.equal(STARTING_POINT_QUESTIONS.length, 3)
  assert.equal(Object.keys(COMMITMENT_QUESTIONS).length, 10)
})

test('every block is renderable: a reflection point and real questions', () => {
  const blocks = [...STARTING_POINT_QUESTIONS, ...Object.values(COMMITMENT_QUESTIONS)]
  for (const b of blocks) {
    assert.ok(b.reflectionPoint?.trim(), 'a reflection point label is present')
    for (const q of b.questions) {
      assert.ok(typeof q === 'string' && q.trim().length > 20, `not a stub: "${q}"`)
      assert.ok(q.includes('?'), `a guiding question asks something: "${q.slice(0, 60)}…"`)
    }
  }
})

test('the one deviation from the published text is recorded, not silent', () => {
  // The source PDF splices the reflection-point label into its own first question.
  // We render the cleaned form; this pins both sides so the deviation stays visible.
  const block = startingPointFor('baseline')
  const spliced = 'Have you identified the Identify key challenges to address key challenges'

  assert.ok(block.verbatim?.length, 'the published wording is kept alongside the cleaned one')
  assert.ok(block.verbatim[0].startsWith(spliced), 'verbatim records the defect as published')
  assert.ok(!block.questions.some(q => q.includes('Identify key challenges to address key')),
    'the rendered question drops the spliced label')
  assert.ok(block.questions[0].startsWith('Have you identified the key challenges/gaps/'),
    'and is otherwise the published sentence, untouched')
})

test('quirks of the published text are preserved rather than tidied away', () => {
  // Transcription fidelity: correcting these would make the quotation inexact, and
  // a future reader diffing against the PDF would think the file had drifted.
  assert.ok(questionsFor('collective-eval').questions[0].includes('plans to monitor'),
    'the source\'s "plans" for "plan" is kept')
  assert.ok(questionsFor('resources').questions[0].includes('reform Journey'),
    'the source\'s capitalised "Journey" is kept')
})

test('the source is citable: title, publisher, date, url and the disclaimer', () => {
  assert.match(GUIDING_QUESTIONS_SOURCE.url, /^https:\/\/www\.coara\.org\/.+\.pdf$/)
  assert.equal(GUIDING_QUESTIONS_SOURCE.date, '2023-10')
  assert.ok(GUIDING_QUESTIONS_SOURCE.title.includes('Action Plan Guidelines'))
  assert.ok(GUIDING_QUESTIONS_SOURCE.publisher.includes('CoARA'))
  assert.ok(GUIDING_QUESTIONS_SOURCE.disclaimer.includes('not required'),
    'the "not a rigid template" caveat travels with the data, so no caller can imply compliance')
})
