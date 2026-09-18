/**
 * The charting library stays behind its lazy boundary.
 *
 * recharts and its dependency tree (lodash, d3-*, decimal.js-light, react-smooth) are
 * the heaviest thing this app ships, and only two of the five routes draw a chart. The
 * split that keeps it out of the entry bundle rests on one fact: nothing imports the
 * implementation statically. A single `import MaturityRadarChart from ...` in a page,
 * or a stray `from "recharts"` anywhere else, silently folds all of it back into the
 * main chunk. Nothing breaks, nothing renders differently, and the Start tab quietly
 * goes back to downloading a charting library in order to draw text.
 *
 * Measured on 2026-09-18: entry chunk 899 kB before the split, 543 kB after, with the
 * chart in a 357 kB chunk of its own.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(ROOT, 'src')

/** The one module allowed to speak to recharts. */
const IMPLEMENTATION = join(SRC, 'components', 'MaturityRadarChart.jsx')
/** The one module allowed to reach the implementation, and only dynamically. */
const BOUNDARY = join(SRC, 'components', 'MaturityRadar.jsx')

function sourceFiles(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) out.push(...sourceFiles(p))
    else if (/\.(js|jsx)$/.test(name)) out.push(p)
  }
  return out
}

const FILES = sourceFiles(SRC)

test('recharts is imported by the chart implementation and nowhere else', () => {
  for (const f of FILES) {
    if (f === IMPLEMENTATION) continue
    const src = readFileSync(f, 'utf8')
    assert.ok(!/from\s+["']recharts["']/.test(src),
      `${relative(ROOT, f)} imports recharts directly, which pulls the whole charting tree ` +
      'into the entry bundle. Render <MaturityRadar> instead.')
  }
})

test('the implementation is reached only through the lazy boundary', () => {
  for (const f of FILES) {
    if (f === BOUNDARY) continue
    const src = readFileSync(f, 'utf8')
    assert.ok(!/MaturityRadarChart/.test(src),
      `${relative(ROOT, f)} names MaturityRadarChart. Only components/MaturityRadar.jsx may, ` +
      'and only through React.lazy.')
  }
})

test('the boundary loads the chart dynamically, not with a static import', () => {
  const src = readFileSync(BOUNDARY, 'utf8')
  assert.match(src, /lazy\(\s*\(\)\s*=>\s*import\(["']\.\/MaturityRadarChart["']\)\s*\)/,
    'components/MaturityRadar.jsx must wrap the chart in React.lazy(() => import(...))')
  assert.ok(!/^\s*import\s+\w+\s+from\s+["']\.\/MaturityRadarChart["']/m.test(src),
    'a static import of the chart defeats the split even with the lazy() call present')
  assert.match(src, /<Suspense/, 'a lazy component needs a Suspense boundary around it')
})
