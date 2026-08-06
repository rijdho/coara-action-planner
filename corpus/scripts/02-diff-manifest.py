#!/usr/bin/env python3
"""
02-diff-manifest — what a fresh harvest has that the published manifest does not.

This is the step that makes updating cheap. Zenodo gains CoARA action plans every
month; re-reading all of them each quarter is waste, and re-reading none of them is
how a dataset silently goes stale. This compares <work>/index.json against
data/plans.csv and says exactly which records are new, which have disappeared, and
which previously failed extraction and are worth retrying.

Nothing is downloaded or modified. Run it after `01-harvest.mjs --metadata-only`,
read the output, then harvest for real with --only-new.

Usage:
    python3 scripts/02-diff-manifest.py [--work work] [--json work/diff.json]

Exit status is 0 whether or not there are changes; it is a report, not a gate.
"""

import argparse
import csv
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def read_ids(path, id_column="zenodo_id"):
    """{id: row} from a manifest CSV, or {} if it is not there."""
    if not path.exists():
        return {}
    with path.open(encoding="utf-8") as fh:
        return {row[id_column].strip(): row for row in csv.DictReader(fh) if row.get(id_column)}


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--work", default="work", help="working directory holding index.json")
    ap.add_argument("--json", dest="json_out", default=None,
                    help="also write the diff as JSON (default: <work>/diff.json)")
    args = ap.parse_args()

    work = ROOT / args.work
    index_path = work / "index.json"
    if not index_path.exists():
        sys.exit(f"{index_path} not found — run: node scripts/01-harvest.mjs --metadata-only")

    index = json.loads(index_path.read_text(encoding="utf-8"))
    harvested = {str(r["id"]): r for r in index["records"]}

    analysed = read_ids(ROOT / "data" / "plans.csv")
    failed = read_ids(ROOT / "data" / "harvested-not-analysed.csv")
    known = set(analysed) | set(failed)

    new = [harvested[i] for i in harvested if i not in known]
    retry = [harvested[i] for i in harvested if i in failed]
    gone = [analysed[i] for i in analysed if i not in harvested]

    new.sort(key=lambda r: str(r.get("date") or ""), reverse=True)

    print(f"Harvest    {index.get('fetchedAt', '?')}  —  {len(harvested)} records")
    print(f"Manifest   {len(analysed)} analysed + {len(failed)} previously unextractable\n")

    if new:
        print(f"NEW — {len(new)} record(s) not in the manifest:")
        for r in new:
            print(f"  {r['id']:>10}  {str(r.get('date') or '')[:10]}  {(r.get('title') or '')[:66]}")
        print()
    else:
        print("NEW — none. The manifest covers everything this harvest found.\n")

    if retry:
        print(f"RETRY — {len(retry)} record(s) that yielded no text last time:")
        for r in retry:
            print(f"  {r['id']:>10}  files: {r.get('fileCount', '?')}  {(r.get('title') or '')[:60]}")
        print()

    if gone:
        # A record in the manifest that the harvest no longer returns. Usually the
        # deposit was withdrawn, renamed, or dropped out of both the query and the
        # community — worth a look, never an automatic deletion: the published
        # figures were computed with it included.
        print(f"GONE — {len(gone)} manifest record(s) this harvest did not return:")
        for r in gone:
            print(f"  {r['zenodo_id']:>10}  {(r.get('title') or '')[:66]}")
        print()

    corpus_delta = len(new)
    if corpus_delta:
        pct = 100 * corpus_delta / max(len(analysed), 1)
        print(f"The corpus would grow by {corpus_delta} plans ({pct:.1f}%). Every published "
              f"percentage moves,\nso recount rather than patch: harvest --only-new, extract, "
              f"then 04-theme-frequency.")
    else:
        print("Nothing to do.")

    out = Path(args.json_out) if args.json_out else work / "diff.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({
        "harvestedAt": index.get("fetchedAt"),
        "harvestedCount": len(harvested),
        "manifestAnalysed": len(analysed),
        "new": [str(r["id"]) for r in new],
        "retry": [str(r["id"]) for r in retry],
        "gone": sorted(gone and [r["zenodo_id"] for r in gone] or []),
    }, indent=2), encoding="utf-8")
    print(f"\nWrote {out}")


if __name__ == "__main__":
    main()
