# CoARA Action Planner

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21492548.svg)](https://doi.org/10.5281/zenodo.21492548)

**Self-assess your institution against the ten CoARA commitments and get a prioritised, editable reform action plan — entirely in your browser.**

A static React app. Answer 24 diagnostic questions, and it scores your institution's maturity across the ten commitments of the [CoARA Agreement on Reforming Research Assessment](https://coara.org/), then generates a prioritised action list and a corpus-grounded, editable action-plan narrative you can export. Nothing is uploaded; everything runs client-side and persists only in your browser's `localStorage`.

🔗 **Live:** https://rijdho.github.io/coara-action-planner/

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21492548.svg)](https://doi.org/10.5281/zenodo.21492548)

Available in **English, Spanish, French and German** (auto-detected, switchable).

This is the **open twin** of the hosted [Reform Assessment toolkit](https://metaudits.rijdho.org/reform-assessment/). That family keeps its calibrated methodology server-side; this repository moves the *same* questions, actions and prioritisation algorithm into the browser, in readable form, so the assessment logic can be inspected, cited, and adapted. Inspired by the open, community-first philosophy of [Metadata Game Changers](https://metadatagamechangers.com/).

## What it does

Five steps: **Start → Questionnaire → Plan → Results → Report.**

- **Start** — name the institution and set up *perspectives*: answer the questionnaire once per respondent role (e.g. research office, leadership, a working group), and the tool consolidates them and surfaces where their readings diverge.
- **Questionnaire** — 24 diagnostic questions mapped to the ten commitments, scored on a 0–5 maturity model (Unaware → Aware → Exploring → Planning → Implementing → Embedded).
- **Plan** — optional tuning: time horizon, institutional context, priority commitments, whether to include high-effort actions, and per-commitment *target* levels (your ambition).
- **Results** — a maturity radar, a per-commitment breakdown, and a prioritised action list (each action ranked by the size of its gap × expected impact, adjusted for effort, context and ambition). Export the profile as PNG, or the full input state as a reproducible JSON config.
- **Report** — a pre-structured, **editable** CoARA action-plan narrative drafted from your answers, with the responsible unit / timeframe / indicator fields left as blanks to fill in. Copy, download (`.md`/`.txt`), or print.

## The methodology is the point

The calibration lives in [`src/data/`](src/data/), in plain readable JavaScript:

| File | What it holds |
|---|---|
| [`questions.js`](src/data/questions.js) | 24 diagnostic questions, each with 0–5 answer options mapped to a commitment |
| [`commitments.js`](src/data/commitments.js) | the ten CoARA commitments + the 6-level maturity model |
| [`actions.js`](src/data/actions.js) | 45 recommended actions (each with `fromLevel`/`toLevel`/`effort`/`impact`, a `theme` key, real institutional examples, and a `planText` — the action restated as institutional first-person prose for the generated plan) **and** the `prioritiseActions` algorithm |
| [`evidence.js`](src/data/evidence.js) | per-theme prevalence across the 314-plan corpus (`THEME_FREQUENCY` + the `universal / common / emerging / frontier` bands shown as "N% of 314 plans" on Results) |
| [`context.js`](src/data/context.js) | 6 institutional contexts that re-weight priorities |
| [`i18n/{es,fr,de}.js`](src/data/i18n/) | full Spanish / French / German overlays of the above |

The questions and actions were hand-calibrated by reading 15 real institutional action plans (UCM, Helmholtz, DCU, UCLouvain, AQU Catalunya, FRQ, LBG, SocRSE, Eurodoc, YUFE/UNIRI, UB, UPC, OGS, SDU, U. Pannonia) and cross-checked against a corpus of 314 CoARA action plans from Zenodo. It is offered as a starting point to inspect and adapt, not as an authoritative scoring — see *Caveats*.

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

## Deploy

Any static host works (the build is self-contained with relative asset paths). This repo ships a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds and publishes to GitHub Pages on every push to `main`. Enable it once under **Settings → Pages → Source: GitHub Actions**.

## Caveats

- **Directional, not authoritative.** The maturity scores and action rankings are a structured prompt for institutional reflection, not a certification. Two institutions at the same "level" can be in very different places.
- **The radar is a shape, not a score.** With ten axes in a fixed order, the polygon's area and outline carry no meaning — read the per-commitment numbers, not the picture.
- **Keyword-derived corpus evidence.** The "N% of 314 plans" figures on Results come from keyword matching over the full text of the published action plans — read them as directional bands (near-universal / common / emerging / frontier), not exact counts. Low prevalence is not a reason to skip an action: frontier practices are an opportunity to lead.
- **Your data stays local.** Because everything is in `localStorage`, clearing your browser data erases your assessment. Use the **Export config** button to save a reproducible copy.

## License

- **Code** — [MIT](LICENSE).
- **Calibration data** (`src/data/`) — [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Reuse and adapt with attribution.

## Citation

If you use this tool or its calibration, please cite it — see [`CITATION.cff`](CITATION.cff) or the "Cite this repository" button. Archived on Zenodo: concept DOI [10.5281/zenodo.21492548](https://doi.org/10.5281/zenodo.21492548) (always resolves to the latest version).
