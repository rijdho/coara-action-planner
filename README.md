# CoARA Action Planner

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21492548.svg)](https://doi.org/10.5281/zenodo.21492548)

**Self-assess your institution against the ten CoARA commitments and get a prioritised,
editable reform action plan — entirely in your browser.**

A static React app. Answer 24 diagnostic questions, and it scores your institution's maturity
across the ten commitments of the
[CoARA Agreement on Reforming Research Assessment](https://coara.org/), then generates a
prioritised action list and a corpus-grounded, editable action-plan narrative you can export.
Nothing is uploaded; everything runs client-side and persists only in your browser's
`localStorage`.

Built for the people who actually have to write the plan — research offices, institutional
leadership, reform working groups, and anyone drafting a CoARA action plan for submission.

🔗 **Live:** https://rijdho.github.io/coara-action-planner/

Available in **English, Spanish, French and German** (auto-detected, switchable).

![Maturity Profile radar for an example institution, overall level "Exploring". The ten CoARA
commitments form an uneven shape: strongest on C3 (abandoning journal-based metrics) and C8
(exchanging practices), weakest on C5 (committing resources) and C9 (communicating
progress).](docs/maturity-profile.png)

This is the **open twin** of the hosted
[Reform Assessment toolkit](https://metaudits.rijdho.org/reform-assessment/). That family keeps
its calibrated methodology server-side; this repository moves the *same* questions, actions and
prioritisation algorithm into the browser, in readable form, so the assessment logic can be
inspected, cited, and adapted. Inspired by the open, community-first philosophy of
[Metadata Game Changers](https://metadatagamechangers.com/).

## What it does

Five steps: **Start → Questionnaire → Plan → Results → Report.**

```mermaid
flowchart LR
    accTitle: The five steps of an assessment
    accDescr: Start names the institution and sets up one perspective per respondent role. Each perspective answers the same 24-question questionnaire, and the tool consolidates the answers into one profile while surfacing where the readings diverge. Plan applies optional tuning, Results scores maturity and ranks actions, and Report drafts an editable action-plan narrative.

    start["🏛️ Start<br/>institution, perspectives"]
    questionnaire["📋 Questionnaire<br/>24 questions, 0–5 maturity"]
    consolidated["🔀 Consolidated profile<br/>divergence surfaced"]
    plan["🎚️ Plan<br/>horizon, context, targets"]
    results["📊 Results<br/>radar, gaps, ranked actions"]
    report["📝 Report<br/>editable narrative"]

    start --> questionnaire
    questionnaire -->|"once per respondent role"| consolidated
    consolidated --> plan --> results --> report

    classDef input fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a5f
    classDef derived fill:#fef9c3,stroke:#ca8a04,stroke-width:2px,color:#713f12
    classDef output fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d

    class start,questionnaire,plan input
    class consolidated derived
    class results,report output
```

- **Start** — name the institution and set up *perspectives*: answer the questionnaire once per
  respondent role (e.g. research office, leadership, a working group), and the tool consolidates
  them and surfaces where their readings diverge.
- **Questionnaire** — 24 diagnostic questions mapped to the ten commitments, scored on a 0–5
  maturity model (Unaware → Aware → Exploring → Planning → Implementing → Embedded).
- **Plan** — optional tuning: time horizon, institutional context, priority commitments, whether
  to include high-effort actions, and per-commitment *target* levels (your ambition).
- **Results** — a maturity radar, a per-commitment breakdown, and a prioritised action list (each
  action ranked by the size of its gap × expected impact, adjusted for effort, context and
  ambition). Export the profile as PNG, or the full input state as a reproducible JSON config.
- **Report** — a pre-structured, **editable** CoARA action-plan narrative drafted from your
  answers, with the responsible unit / timeframe / indicator fields left as blanks to fill in.
  Every section carries the matching **CoARA guiding question**, quoted from the Secretariat's
  *Action Plan Guidelines* (October 2023), so the draft can be checked against them line by
  line. All ten commitments get a heading whether or not the tool had actions to suggest.
  Copy, download (`.md`/`.txt`), or print.

![Per-commitment breakdown for the same example institution: each of the ten commitments listed
with a progress bar and its maturity level, from C5 "Commit resources for reform" and C9
"Communicate progress" at L1 Aware, through six commitments at L2 Exploring or L3 Planning, up to
C3 "Abandon inappropriate journal-based metrics" and C8 "Exchange practices and experiences" at
L4 Implementing.](docs/maturity-by-commitment.png)

## The methodology is the point

The calibration lives in [`src/data/`](src/data/), in plain readable JavaScript:

| File | What it holds |
|---|---|
| [`questions.js`](src/data/questions.js) | 24 diagnostic questions, each with 0–5 answer options mapped to a commitment |
| [`commitments.js`](src/data/commitments.js) | the ten CoARA commitments + the 6-level maturity model |
| [`actions.js`](src/data/actions.js) | 47 recommended actions (each with `fromLevel`/`toLevel`/`effort`/`impact`, a `theme` key, real institutional examples, and a `planText` — the action restated as institutional first-person prose for the generated plan) **and** the `prioritiseActions` algorithm |
| [`plan.js`](src/data/plan.js) | the **second** ranking stage — the ambition gate, the high-effort filter, and every plan-setting weight (context affinity, focus, horizon, target, divergence) **and** the `applyPlan` function |
| [`evidence.js`](src/data/evidence.js) | per-theme prevalence across the 335-plan corpus (`THEME_FREQUENCY` + the `universal / common / emerging / frontier` bands shown as "N% of 335 plans" on Results) — measured in [`corpus/`](corpus/), which publishes the manifest, the keyword signatures and the pipeline |
| [`guidingQuestions.js`](src/data/guidingQuestions.js) | the CoARA Secretariat's 19 guiding questions, quoted verbatim and mapped onto the report's sections |
| [`context.js`](src/data/context.js) | 6 institutional contexts that re-weight priorities |
| [`perspectives.js`](src/data/perspectives.js) | the 10 respondent roles and their `ROLE_WEIGHTS` — how divergent readings are consolidated |
| [`i18n/{es,fr,de}.js`](src/data/i18n/) | full Spanish / French / German overlays of the above |

Ranking happens in **two stages**, and both are calibration. `prioritiseActions` scores an
action on its own merits — gap x impact, minus an effort penalty. `applyPlan` then applies
what the user asked for on the Plan tab: it *filters* (high-effort actions, and a hard
ambition gate that drops anything already at or beyond a declared target) and *re-ranks*
(context affinity, focus, horizon, target, divergence). What Results and Report display is
the output of both, so both are pinned by tests.

One consequence worth stating plainly: choosing an institutional context can move a single
action by at most **+4** — +2 if the action carries that context tag, +2 more if its
commitment is one the context prioritises. That is less than a full maturity step at high
impact, so context re-orders actions within a band rather than overriding the assessment.
The ceiling is a named constant and a test, not an accident.

The questions and actions were hand-calibrated by reading 15 real institutional action plans
(UCM, Helmholtz, DCU, UCLouvain, AQU Catalunya, FRQ, LBG, SocRSE, Eurodoc, YUFE/UNIRI, UB, UPC,
OGS, SDU, U. Pannonia) and cross-checked against a corpus of published CoARA action plans from Zenodo — 314 at the April 2026 calibration, 335 as of the August 2026 recount.
It is offered as a starting point to inspect and adapt, not as an authoritative scoring — see
*Caveats*.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Build the static site:

```bash
npm run build      # → dist/
npm run preview    # serve the build locally
```

No backend, no API keys, no tracking.

## Tests

The calibration and the prioritisation algorithm are covered by unit tests (Node's built-in
runner, no dependencies beyond what the app already needs):

```bash
npm test          # or: node --test tests/*.test.mjs
```

`prioritise.test.mjs` asserts on **exact priority scores**, and those cases double as the
parity contract with the server-side engine behind the hosted sibling: the same answers must
produce the same ranking on both. A change that moves a number here should be mirrored there
or documented as a deliberate divergence. The algorithm cases use synthetic actions on
purpose, so recalibrating the real catalog cannot break tests that are about the maths.

`calibration.test.mjs` guards the failures that are silent rather than loud — a mistyped
`theme` still renders, it just quietly loses its "N% of 335 plans" evidence band; an action
whose `fromLevel` is not below its `toLevel` can never be recommended at all; a commitment
with no entry-level action tells an institution it is weakest there and then offers nothing
to do about it.

`plan.test.mjs` covers the second stage — the ambition gate that removes actions, and each
plan weight asserted as a literal score rather than in terms of the constant it is testing
(a suite written the other way passes even when the constant changes, which is how the first
draft of this file failed its own mutation check).

`guiding-questions.test.mjs` treats the CoARA guiding questions as what they are — a
quotation. It pins the published count, checks every commitment is reached, and records the
one place the source text is knowingly cleaned up rather than silently corrected.

`corpus-parity.test.mjs` pins the two copies of the corpus evidence together —
`corpus/data/theme-frequency.csv`, where prevalence is measured, and `src/data/evidence.js`,
which the app reads. A recount that updates one and forgets the other would leave the tool
quoting figures its own corpus no longer supports, and nothing would render differently.
Keeping the corpus in this repository rather than its own is what makes that check possible.

`i18n.test.mjs` pins the most fragile contract in the repository: the Spanish, French and
German action overlays align with `ACTIONS` **by array index**. Inserting an action mid-list
without inserting one at the same position in all three overlays shifts every later
translation onto the wrong action — nothing throws, the app just shows the wrong text in
three languages.

## Deploy

Any static host works (the build is self-contained with relative asset paths). This repo ships a
GitHub Actions workflow
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds and publishes to
GitHub Pages on every push to `main`. Enable it once under
**Settings → Pages → Source: GitHub Actions**.

The app is client-rendered, so crawlers that do not run JavaScript (LinkedIn, Slack,
Mastodon) see only `index.html`. `public/og-card.png` is the link-preview image referenced
by the Open Graph tags there; regenerate it with `node docs/og-card.mjs` whenever
`docs/maturity-profile.png` changes, or previews will keep showing the old radar.

## Caveats

- **Directional, not authoritative.** The maturity scores and action rankings are a structured
  prompt for institutional reflection, not a certification. Two institutions at the same "level"
  can be in very different places.
- **The radar is a shape, not a score.** With ten axes in a fixed order, the polygon's area and
  outline carry no meaning — read the per-commitment numbers, not the picture.
- **Keyword-derived corpus evidence.** The "N% of 335 plans" figures on Results come from keyword
  matching over the full text of the published action plans — read them as directional bands
  (near-universal / common / emerging / frontier), not exact counts. Low prevalence is not a
  reason to skip an action: frontier practices are an opportunity to lead. [`corpus/`](corpus/)
  publishes which plans were read, the exact keyword signature behind every theme, and the
  pipeline that reproduces the counts, so the figures can be checked rather than trusted —
  and recounted: the loop is incremental, and the last recount ran on 6 August 2026.
- **The guiding questions are a resource, not a template.** CoARA publishes no reporting or
  action-plan template for members, and the guidelines say the guiding questions "do not serve
  as a rigid template but rather as a resource and suggestion". Printing them beside each
  section makes a draft easier to check; it is not a compliance claim, and answering them all
  does not make a plan approved by anything.
- **Your data stays local.** Because everything is in `localStorage`, clearing your browser data
  erases your assessment. Use the **Export config** button to save a reproducible copy.

## License

- **Code** — [MIT](LICENSE).
- **Calibration data** (`src/data/`, `corpus/data/`) —
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Reuse and adapt with attribution.

Neither licence covers the action plans the corpus measures: those remain under the terms each
depositing institution chose. `corpus/` records where every one of them lives; it does not
redistribute them, and will not.

## Citation

If you use this tool or its calibration, please cite it — see [`CITATION.cff`](CITATION.cff) or
the "Cite this repository" button. Archived on Zenodo: concept DOI
[10.5281/zenodo.21492548](https://doi.org/10.5281/zenodo.21492548) (always resolves to the
latest version).
