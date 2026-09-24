// The house style is a copy of rijdho/house-style: it must match its lock (a hand edit fails here), and,
// when the original is checked out next to this repository, the lock must match it (a stale copy fails).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const at = (rel) => fileURLToPath(new URL(rel, import.meta.url));
const sha = (p) => createHash('sha256').update(readFileSync(p)).digest('hex');
const lock = JSON.parse(readFileSync(at('../src/house/house.lock.json'), 'utf8'));

test('the house copy is the one the lock records', () => {
  assert.equal(sha(at('../src/house/house.css')), lock.sha256, 'house/house.css was edited: change rijdho/house-style instead');
});
test('the lock matches the house-style checkout, when there is one', (t) => {
  const original = at('../../house-style/house.css');
  if (!existsSync(original)) return t.skip('no house-style checkout next to this repository');
  assert.equal(sha(original), lock.sha256, 'house-style has moved on: run node scripts/sync-house.mjs');
});
test('src/main.jsx imports the house style before the project stylesheet', () => {
  const js = readFileSync(at('../src/main.jsx'), 'utf8');
  const h = js.indexOf('./house/house.css'), p = js.indexOf('./index.css');
  assert.ok(h > 0 && p > h, 'expected ./house/house.css imported before ./index.css');
});
