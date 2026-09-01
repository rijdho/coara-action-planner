# The corpus behind "N% of 335 plans"

**Which published CoARA action plans were read, the exact keyword signatures used to count
them, the counts that came out, and the pipeline that reproduces all of it.**

Results shows lines like "found in 77% of 335 plans" beside each recommended action. Those
figures come from [`src/data/evidence.js`](../src/data/evidence.js), and this folder is where
they were measured. It exists so the number can be checked rather than taken on trust — this
tool argues that its methodology is the product, and an unauditable percentage would be the
one part of that claim a reader has to take on faith.

## What is in here

| File | What it holds |
|---|---|
| [`data/plans.csv`](data/plans.csv) | the 335 analysed plans — Zenodo id, DOI, URL, title, creators, publication date, and how many characters of text were extracted from each |
| [`data/theme-keywords.csv`](data/theme-keywords.csv) / [`.json`](data/theme-keywords.json) | the 27 themes and the case-insensitive regular expression that defines each |
| [`data/theme-frequency.csv`](data/theme-frequency.csv) | per theme: plans matched, percentage, total hits, and prevalence band |
| [`data/harvested-not-analysed.csv`](data/harvested-not-analysed.csv) | the 2 harvested records that are not in the analysed set |
| [`scripts/`](scripts/) | the five pipeline steps, from Zenodo harvest to regenerated manifest (see *Updating the corpus*) |

**The plans themselves are not here and will not be published.** They belong to the
institutions that deposited them, each under whatever licence it chose, and re-hosting 300-odd
PDFs would mean relicensing other people's documents. `plans.csv` carries the Zenodo record
for every one, so anyone can re-fetch the corpus; the working copy stays private.

`data/theme-frequency.csv` and `src/data/evidence.js` must agree, and
[`tests/corpus-parity.test.mjs`](../tests/corpus-parity.test.mjs) fails if they ever drift.
This folder is where the numbers are measured; `evidence.js` is the derived copy the app reads
at runtime.

## How the corpus was assembled

First harvested from Zenodo on **17 April 2026** (316 records, 314 with text) and updated
incrementally on **6 August 2026** with the same query `"coara action plan"` plus the
`coara_action_plans` community: the fresh index returned 336 records, the 21 new plans were
downloaded and extracted, and the corpus now stands at **335 analysed plans**. The two
records that never yielded text are listed in `data/harvested-not-analysed.csv` rather than
silently dropped; one is a conference presentation rather than an action plan, and neither
deposit carries an extractable PDF or DOCX. One manifest plan — Technological University
Dublin's September 2024 deposit — no longer appears in the search results (superseded by its
own "V2 July 2026", which is among the new plans), but the record is still published on
Zenodo, so it remains a real plan and stays counted.

Extracted length runs from 1,305 to 153,485 characters, median 14,929. Three plans came in
under 2,000 characters, short enough that they are probably scans or cover sheets rather than
full text — they still count as plans in the denominator, and they can only ever push a
theme's prevalence down.

Publication dates in the analysed set: 10 from 2023, 166 from 2024, 124 from 2025, 35 from
2026.

Three plans carry a DOI minted by their own institutional repository rather than by Zenodo —
Loughborough (`10.17028`), DIGITAL.CSIC (`10.20350`) and Edinburgh's ERA (`10.7488`). The
Zenodo record id is what locates every deposit; the DOI is whatever the depositor brought
with them.

## How a theme is counted

One regular expression per theme, matched case-insensitively against a plan's full extracted
text. A plan counts once for a theme if it matches anywhere; `total_hits` additionally counts
every match, so the ratio of hits to plans hints at how sustained a mention is.

Prevalence is then filed into one of four bands, which is how Results displays it:

| Band | Prevalence |
|---|---|
| `universal` | 60% and above |
| `common` | 30–59.9% |
| `emerging` | 10–29.9% |
| `frontier` | below 10% |

One signature is worth reading as an example of the judgement involved. The `publish-plan`
theme deliberately does **not** match a bare "zenodo": nearly every plan carries its own
Zenodo DOI in a footer, which records that the deposit happened rather than that the plan
commits to publishing itself. Including it took the theme from 51 plans to 107 — more than
doubling it on an artefact of the citation line.

## What these numbers can and cannot support

- **This measures wording, not commitment.** A plan that names a theme once in a list of
  aspirations counts exactly the same as one that devotes a work package to it. Prevalence
  says how widely a vocabulary has spread, not how much has been done.
- **Read the bands, not the digits.** "78.3%" is a keyword count with a spuriously precise
  decimal. Two themes three points apart are not meaningfully different; a `universal` theme
  and a `frontier` one are.
- **The keywords are English-dominant.** Only `publish-plan` and `formal-approval` carry
  Spanish, German or French alternatives. The Zenodo deposits carry no usable language
  metadata, so the size of the resulting undercount is unmeasured — but plans written in
  other languages certainly match less often than they should, and every figure here is a
  lower bound for that reason.
- **Regexes over-match as well as under-match.** `no-rankings` matches any mention of a
  ranking, including a plan explaining that it already ignores them. Nothing here
  distinguishes endorsement from rejection.
- **A snapshot, not a census.** The population grows every month as members deposit. These
  figures describe the 335 plans available in August 2026 and will drift from any later
  harvest; recount rather than extrapolate.
- **Low prevalence is not a verdict.** A theme in the `frontier` band is one that few
  institutions have written down yet, which is an argument for leading on it, not for
  dropping it.

## Reproducing the counts

```bash
python3 corpus/scripts/04-theme-frequency.py corpus/work/corpus.jsonl \
  --out corpus/data/theme-frequency.csv
```

`corpus.jsonl` is one JSON object per line, each with at least an `id` and the plan's full
plain `text`. Run against the corpus behind this release it reproduces
`data/theme-frequency.csv` byte for byte.

To change the method rather than the corpus, edit `data/theme-keywords.json` and re-run — the
script reads its signatures from that file, so the published keywords and the published counts
cannot drift apart.

## Updating the corpus

Zenodo gains CoARA action plans every month, so the interesting cost is not building this
corpus but keeping it current. The pipeline is built around that: each plan is downloaded and
read exactly once, ever, and an update costs a handful of PDFs rather than three hundred.

```bash
node    corpus/scripts/01-harvest.mjs --metadata-only   # ask Zenodo what exists now
python3 corpus/scripts/02-diff-manifest.py              # what is new since last time
node    corpus/scripts/01-harvest.mjs --only-new        # download only those
python3 corpus/scripts/03-extract-text.py               # extract only what has no text yet
python3 corpus/scripts/04-theme-frequency.py corpus/work/corpus.jsonl
python3 corpus/scripts/05-update-manifest.py            # regenerate plans.csv from the corpus
```

Two things this ordering buys. The diff runs before anything is downloaded, so a quarter with
nothing new costs one API call and no disk. And step 5 makes the manifest an *output* of the
pipeline rather than a hand-kept file, so `plans.csv` cannot drift away from what was actually
counted.

Nothing here sends a document to a model or a third-party service. Extraction is `pdftotext`
locally, and the measurement is regular expressions over the resulting text: the token cost of
recounting the entire corpus is zero. That is a deliberate constraint, not an accident — it is
what makes a recount cheap enough to actually happen.

The working corpus lands in `corpus/work/`, which is not committed and is fully rebuildable
from `data/plans.csv`. The corpus is reproducible rather than backed up.

**After an update**, propagate `CORPUS_SIZE` and `THEME_FREQUENCY` into
[`src/data/evidence.js`](../src/data/evidence.js) — `npm test` fails until you do — refresh the
harvest date and counts above, and record the recount in the CHANGELOG. Every percentage the
app displays moves, so it is a release, not a patch.

## How stale is this snapshot?

Current as of **6 August 2026** — the update loop above ran that day and folded in the 21
plans it found. The next recount will find whatever Zenodo has gained since; run
`01-harvest.mjs --metadata-only` + `02-diff-manifest.py` to measure the gap before deciding
whether it is worth a release.

## Licence

The tables in `data/` are calibration data under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), like `src/data/`; the scripts are
[AGPL-3.0-or-later](../LICENSE), like the rest of the code.

Neither covers the deposited action plans themselves, which remain under the terms each
depositing institution chose. This folder describes them; it does not redistribute them.
