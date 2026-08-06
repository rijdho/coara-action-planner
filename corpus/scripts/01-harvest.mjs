#!/usr/bin/env node
/**
 * 01-harvest — fetch CoARA action plan records from Zenodo.
 *
 * Writes <work>/index.json (the harvest manifest) and, unless --metadata-only,
 * downloads each record's documents to <work>/plans/<id>/ alongside a _meta.json.
 *
 * Zenodo is searched twice — by text query and by community — and the results are
 * merged and de-duplicated by record id. Neither alone is complete: plans exist that
 * were never added to the community, and the community holds records the text query
 * misses.
 *
 * Usage:
 *   node scripts/01-harvest.mjs [options]
 *
 * Options:
 *   --work DIR        working directory (default: ./work). Holds the corpus; keep it
 *                     out of git — see the repository .gitignore.
 *   --metadata-only   fetch the index, download nothing. Run this first, then
 *                     02-diff-manifest.py, to see what is new before pulling files.
 *   --only-new        skip records already listed in data/plans.csv. This is what
 *                     makes an update cost a handful of downloads instead of 300.
 *   --skip-existing   skip files already on disk in <work>/plans/<id>/
 *   --limit N         stop after N records (for a smoke test)
 *
 * No dependencies: Node 18+ for global fetch.
 */

import { writeFileSync, readFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const ZENODO_API = "https://zenodo.org/api/records";
const SEARCH_QUERY = '"coara action plan"';
const COMMUNITY = "coara_action_plans";
const PAGE_SIZE = 25; // Zenodo API maximum
const DELAY_MS = 500; // polite delay between requests — do not lower this

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const value = (name, fallback) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const WORK = join(ROOT, value("--work", "work"));
const PLANS_DIR = join(WORK, "plans");
const INDEX_PATH = join(WORK, "index.json");
const LIMIT = Number(value("--limit", Infinity));
const METADATA_ONLY = flag("--metadata-only");
const SKIP_EXISTING = flag("--skip-existing");
const ONLY_NEW = flag("--only-new");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Zenodo ids already in the published manifest. */
function knownIds() {
  const csv = join(ROOT, "data", "plans.csv");
  if (!existsSync(csv)) return new Set();
  // Only the first column is read, and it is an unquoted integer id, so a full
  // CSV parser would buy nothing here.
  return new Set(
    readFileSync(csv, "utf8")
      .split("\n")
      .slice(1)
      .map((line) => line.split(",")[0].trim())
      .filter(Boolean),
  );
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

function extractMetadata(record) {
  const files = (record.files || []).map((f) => ({
    filename: f.key,
    size: f.size,
    type: f.type || f.key.split(".").pop(),
    url: f.links?.self || `https://zenodo.org/records/${record.id}/files/${f.key}?download=1`,
  }));
  return {
    id: record.id,
    doi: record.doi,
    title: record.metadata?.title || record.title || "Unknown",
    creators: (record.metadata?.creators || []).map((c) => c.name || c.person_or_org?.name),
    date: record.metadata?.publication_date || record.created,
    // Zenodo's language field is optional and, across this community, almost always
    // absent. Recorded for completeness; do not build anything on it being present.
    language: record.metadata?.languages?.[0]?.id || null,
    communities: record.parent?.communities?.ids || [],
    files,
  };
}

async function fetchBy(label, queryUrl) {
  const records = [];
  let page = 1;
  let total = null;
  console.log(`\nSearching Zenodo by ${label}…`);
  while (true) {
    const data = await fetchJSON(`${queryUrl}&size=${PAGE_SIZE}&page=${page}&sort=newest`);
    if (total === null) {
      total = data.hits?.total ?? 0;
      console.log(`  ${total} records via ${label}.`);
    }
    const hits = data.hits?.hits || [];
    if (!hits.length) break;
    for (const hit of hits) {
      records.push(extractMetadata(hit));
      if (records.length >= LIMIT) break;
    }
    console.log(`  page ${page}: ${records.length}/${Math.min(total, LIMIT)}`);
    if (records.length >= LIMIT || records.length >= total) break;
    page++;
    await sleep(DELAY_MS);
  }
  return records;
}

async function fetchAllRecords() {
  const q = encodeURIComponent(SEARCH_QUERY).replace(/%20/g, "+");
  const byQuery = await fetchBy("text query", `${ZENODO_API}?q=${q}`);
  const byCommunity = await fetchBy(`community "${COMMUNITY}"`, `${ZENODO_API}?communities=${COMMUNITY}`);
  const seen = new Set();
  const merged = [];
  for (const r of [...byQuery, ...byCommunity]) {
    if (seen.has(r.id)) continue;
    seen.add(r.id);
    merged.push(r);
  }
  console.log(
    `\nMerged: ${merged.length} unique records ` +
      `(query ${byQuery.length}, community ${byCommunity.length}).`,
  );
  return merged;
}

async function downloadRecordFiles(record) {
  const dir = join(PLANS_DIR, String(record.id));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "_meta.json"), JSON.stringify(record, null, 2));
  let downloaded = 0;
  for (const file of record.files.filter((f) => /\.(pdf|docx?|txt|md|odt)$/i.test(f.filename))) {
    const dest = join(dir, file.filename);
    if (SKIP_EXISTING && existsSync(dest)) continue;
    try {
      const res = await fetch(file.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      writeFileSync(dest, buf);
      downloaded++;
      console.log(`    ↓ ${file.filename} (${(buf.length / 1024).toFixed(0)} KB)`);
      await sleep(DELAY_MS);
    } catch (err) {
      console.error(`    ✗ ${file.filename}: ${err.message}`);
    }
  }
  return downloaded;
}

async function main() {
  mkdirSync(PLANS_DIR, { recursive: true });
  console.log("=== CoARA action plan harvest ===");
  if (LIMIT < Infinity) console.log(`Limit: ${LIMIT}`);
  if (ONLY_NEW) console.log("Only records absent from data/plans.csv");
  if (METADATA_ONLY) console.log("Metadata only, no downloads");

  const records = await fetchAllRecords();

  writeFileSync(
    INDEX_PATH,
    JSON.stringify(
      {
        fetchedAt: new Date().toISOString(),
        query: SEARCH_QUERY,
        community: COMMUNITY,
        totalRecords: records.length,
        records: records.map((r) => ({
          id: r.id,
          doi: r.doi,
          title: r.title,
          creators: r.creators,
          date: r.date,
          language: r.language,
          fileCount: r.files.length,
        })),
      },
      null,
      2,
    ),
  );
  console.log(`\nIndex written to ${INDEX_PATH} (${records.length} records).`);
  if (METADATA_ONLY) {
    console.log("Next: python3 scripts/02-diff-manifest.py");
    return;
  }

  const known = ONLY_NEW ? knownIds() : new Set();
  if (ONLY_NEW) console.log(`Manifest already covers ${known.size} records.`);

  let files = 0;
  let fetched = 0;
  let skipped = 0;
  for (const [i, r] of records.entries()) {
    if (ONLY_NEW && known.has(String(r.id))) {
      skipped++;
      continue;
    }
    if (!r.files.some((f) => /\.(pdf|docx?)$/i.test(f.filename))) {
      console.log(`  [${i + 1}/${records.length}] ${r.title} — no PDF/DOCX, skipping`);
      continue;
    }
    console.log(`  [${i + 1}/${records.length}] ${r.title}`);
    files += await downloadRecordFiles(r);
    fetched++;
  }
  console.log(`\nDone. ${files} files from ${fetched} records` + (skipped ? `, ${skipped} already known.` : "."));
  console.log("Next: python3 scripts/03-extract-text.py");
}

main().catch((err) => {
  console.error("\nFatal:", err.message);
  process.exit(1);
});
