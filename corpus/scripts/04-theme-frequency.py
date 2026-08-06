#!/usr/bin/env python3
"""
04-theme-frequency — recompute data/theme-frequency.csv from the corpus texts.

This is the whole measurement. It is one regex match per theme per plan, counted
at the level of "does this plan mention it at all" — deliberately blunt, and the
reason the published figures are bands rather than statistics (see README,
"What these numbers can and cannot support").

The corpus itself is not redistributed here: the plans belong to the institutions
that deposited them, under whatever licence each chose. data/plans.csv gives the
Zenodo record for every one, so the corpus is re-fetchable.

Usage:
    python3 scripts/04-theme-frequency.py work/corpus.jsonl [--out data/theme-frequency.csv]

`corpus.jsonl` is one JSON object per line with at least:
    {"id": "<zenodo id>", "text": "<full plain text of the plan>"}

No dependencies beyond the standard library.
"""

import argparse
import csv
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KEYWORDS = ROOT / "data" / "theme-keywords.json"


def band(pct):
    """Prevalence band. The thresholds are the ones the CoARA Action Planner shows."""
    if pct >= 60:
        return "universal"
    if pct >= 30:
        return "common"
    if pct >= 10:
        return "emerging"
    return "frontier"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("corpus", help="JSONL file, one plan per line, with id + text")
    ap.add_argument("--out", default=str(ROOT / "data" / "theme-frequency.csv"))
    args = ap.parse_args()

    spec = json.loads(KEYWORDS.read_text(encoding="utf-8"))
    compiled = {k: re.compile(v, re.IGNORECASE) for k, v in spec["themes"].items()}

    records = []
    with open(args.corpus, encoding="utf-8") as fh:
        for lineno, line in enumerate(fh, 1):
            line = line.strip()
            if not line:
                continue
            try:
                records.append(json.loads(line))
            except json.JSONDecodeError as exc:
                sys.exit(f"{args.corpus}:{lineno}: not valid JSON — {exc}")
    n = len(records)
    if not n:
        sys.exit("corpus is empty: nothing to count")

    rows = []
    for theme, rx in compiled.items():
        plans = hits = 0
        for r in records:
            found = rx.findall(r.get("text", ""))
            if found:
                plans += 1
                hits += len(found)
        pct = round(100 * plans / n, 1)
        rows.append({"theme": theme, "plans_matched": plans, "corpus_size": n,
                     "pct": pct, "total_hits": hits, "band": band(pct)})
    rows.sort(key=lambda r: -r["plans_matched"])

    with open(args.out, "w", newline="", encoding="utf-8") as fh:
        # lineterminator: csv defaults to CRLF; these files are git-tracked, keep them LF.
        w = csv.DictWriter(fh, lineterminator="\n",
                           fieldnames=["theme", "plans_matched", "corpus_size", "pct", "total_hits", "band"])
        w.writeheader()
        w.writerows(rows)

    print(f"Corpus: {n} plans\n")
    print(f"{'theme':<24}{'plans':>7}{'%':>8}{'hits':>8}  band")
    print("-" * 55)
    for r in rows:
        print(f"{r['theme']:<24}{r['plans_matched']:>7}{r['pct']:>7}%{r['total_hits']:>8}  {r['band']}")
    print(f"\nWrote {args.out}")


if __name__ == "__main__":
    main()
