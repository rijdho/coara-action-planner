#!/usr/bin/env python3
"""
05-update-manifest — regenerate the published manifest from the working corpus.

Rewrites data/plans.csv (every record that yielded text) and
data/harvested-not-analysed.csv (every record the harvest returned that did not),
from <work>/index.json and <work>/corpus.jsonl.

Running this makes the manifest itself reproducible rather than hand-maintained: the
two CSVs in data/ are outputs of the pipeline, not artefacts anyone edits. It is the
last step of an update, after 03-extract-text and alongside 04-theme-frequency.

The split matters. A harvested record with no extractable text is not dropped
silently — it is listed, with its file count, so that the difference between "this
plan does not mention resourcing" and "we could not read this plan" stays visible to
anyone citing the figures.

Usage:
    python3 scripts/05-update-manifest.py [--work work] [--dry-run]
"""

import argparse
import csv
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PLANS_CSV = ROOT / "data" / "plans.csv"
NOT_ANALYSED_CSV = ROOT / "data" / "harvested-not-analysed.csv"

PLANS_FIELDS = ["zenodo_id", "doi", "zenodo_url", "title", "creators",
                "publication_date", "file_count", "extracted_chars"]
NOT_ANALYSED_FIELDS = ["zenodo_id", "doi", "zenodo_url", "title", "file_count"]


def names(creators):
    """Zenodo creators arrive as strings or as {name: …} objects, depending on the API."""
    out = []
    for c in creators or []:
        out.append(c.get("name", "") if isinstance(c, dict) else str(c))
    return "; ".join(n for n in out if n)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--work", default="work")
    ap.add_argument("--dry-run", action="store_true", help="report what would change, write nothing")
    args = ap.parse_args()

    work = ROOT / args.work
    index_path, corpus_path = work / "index.json", work / "corpus.jsonl"
    for p in (index_path, corpus_path):
        if not p.exists():
            sys.exit(f"{p} not found — run 01-harvest.mjs and 03-extract-text.py first")

    index = json.loads(index_path.read_text(encoding="utf-8"))
    recs = {str(r["id"]): r for r in index["records"]}

    corpus = {}
    with corpus_path.open(encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if line:
                r = json.loads(line)
                corpus[str(r["id"])] = r

    plans_rows = []
    for i, c in corpus.items():
        r = recs.get(i, {})
        plans_rows.append({
            "zenodo_id": i,
            "doi": r.get("doi") or c.get("doi") or "",
            "zenodo_url": f"https://zenodo.org/records/{i}",
            "title": r.get("title") or c.get("title") or "",
            "creators": names(r.get("creators") or c.get("creators")),
            "publication_date": r.get("date") or c.get("date") or "",
            "file_count": r.get("fileCount", ""),
            "extracted_chars": c.get("chars", len(c.get("text", ""))),
        })
    plans_rows.sort(key=lambda row: int(row["zenodo_id"]))

    missing_rows = []
    for i, r in recs.items():
        if i in corpus:
            continue
        missing_rows.append({
            "zenodo_id": i,
            "doi": r.get("doi", ""),
            "zenodo_url": f"https://zenodo.org/records/{i}",
            "title": r.get("title", ""),
            "file_count": r.get("fileCount", ""),
        })
    missing_rows.sort(key=lambda row: int(row["zenodo_id"]))

    def previous(path, key="zenodo_id"):
        if not path.exists():
            return set()
        with path.open(encoding="utf-8") as fh:
            return {row[key] for row in csv.DictReader(fh)}

    before = previous(PLANS_CSV)
    after = {row["zenodo_id"] for row in plans_rows}
    print(f"analysed:  {len(before)} → {len(plans_rows)}  (+{len(after - before)}, -{len(before - after)})")
    print(f"unreadable: {len(previous(NOT_ANALYSED_CSV))} → {len(missing_rows)}")
    if after - before:
        print("  added:   " + ", ".join(sorted(after - before)[:12]) + (" …" if len(after - before) > 12 else ""))
    if before - after:
        print("  removed: " + ", ".join(sorted(before - after)[:12]) + (" …" if len(before - after) > 12 else ""))

    if args.dry_run:
        print("\n--dry-run: nothing written")
        return

    for path, fields, rows in ((PLANS_CSV, PLANS_FIELDS, plans_rows),
                               (NOT_ANALYSED_CSV, NOT_ANALYSED_FIELDS, missing_rows)):
        with path.open("w", newline="", encoding="utf-8") as fh:
            # lineterminator: csv defaults to CRLF; these files are git-tracked, keep them LF.
            w = csv.DictWriter(fh, fieldnames=fields, lineterminator="\n")
            w.writeheader()
            w.writerows(rows)
        print(f"Wrote {path.relative_to(ROOT)}")

    print("\nRemember: CORPUS_SIZE is now "
          f"{len(plans_rows)} — update corpus/README.md's harvest date and counts, then "
          "propagate CORPUS_SIZE + THEME_FREQUENCY into src/data/evidence.js. "
          "tests/corpus-parity.test.mjs fails until you do.")


if __name__ == "__main__":
    main()
