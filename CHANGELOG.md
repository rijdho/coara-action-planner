# Changelog

All notable changes to this project are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Each released version is archived on Zenodo with its own version DOI. The concept DOI
[10.5281/zenodo.21492548](https://doi.org/10.5281/zenodo.21492548) always resolves to the
latest release.

## [Unreleased]

## [1.1.0] — 2026-07-28

### Added

- **Two actions the corpus has and the catalogue lacked**, both surfaced by a structured
  deep-read of the 314-plan corpus: *Get the plan formally approved by your governing
  bodies* (C5, present in 78 of 314 plans = 24.8%) and *Publish and deposit the action
  plan* (C9, 51 of 314 = 16.2%). Prevalence was measured with the same plan-level method
  as every other theme. The `publish-plan` signature deliberately ignores a bare "zenodo":
  most plans carry their own DOI in a footer, which is the deposit having happened rather
  than the plan committing to publish itself, and counting it would have inflated the
  figure from 51 plans to 107.
- **A test suite** — 26 tests over the prioritisation algorithm, the calibration's internal
  consistency, and the i18n overlays (`npm test`, Node's built-in runner, no new
  dependencies). `prioritise.test.mjs` asserts exact priority scores and doubles as the
  parity contract with the hosted sibling's engine; `calibration.test.mjs` catches the
  silent failures (a mistyped `theme` loses its evidence band, an unreachable
  `fromLevel`/`toLevel` window, a commitment with no entry-level action); `i18n.test.mjs`
  pins the by-array-index alignment of the three overlays. Verified non-vacuous by
  mutation: four deliberate defects were each caught.
- `perspectives.js` documented in the README's calibration table — it holds `ROLE_WEIGHTS`,
  which is calibration, and was the one data file the table omitted.
- Zenodo DOIs recorded across the project: concept and version DOIs in `CITATION.cff` (with a
  top-level `doi` so GitHub's "Cite this repository" widget shows it), a DOI badge under the
  README title, a `## Citation` closing section, and the DOI in the app and report footers.
- Screenshots in the README (`docs/`) — the maturity radar and the per-commitment breakdown —
  plus `docs/screenshots.mjs`, which regenerates them by driving a full 24-question assessment.
- A Mermaid flowchart of the five assessment steps.
- A line stating who the tool is for, above the live link.
- This changelog.

### Changed

- README rewrapped to ~95 columns, matching the house style used by `fair-repo-audit`.
- Build-config comment trimmed to what this repository needs; it no longer describes how the
  hosted sibling is deployed.

### Removed

- `p1.txt` / `p2.txt` — leftover German `planText` drafts, byte-identical to each other and
  fully superseded by `src/data/i18n/de.js`.

## [1.0.0] — 2026-07-22

Initial public release. Version DOI:
[10.5281/zenodo.21492549](https://doi.org/10.5281/zenodo.21492549).

### Added

- Five-step assessment: **Start → Questionnaire → Plan → Results → Report**.
- 24 diagnostic questions mapped to the ten CoARA commitments, scored on a 0–5 maturity model
  (Unaware → Aware → Exploring → Planning → Implementing → Embedded).
- *Perspectives* — answer the questionnaire once per respondent role, then consolidate the
  readings and surface where they diverge.
- 45 recommended actions with `fromLevel`/`toLevel`/`effort`/`impact`, real institutional
  examples, and a `planText` restating each action as institutional first-person prose.
- The `prioritiseActions` algorithm: gap size × expected impact, adjusted for effort, chosen
  institutional context and per-commitment ambition.
- Corpus evidence — per-theme prevalence across 314 published CoARA action plans, shown as
  `universal / common / emerging / frontier` bands.
- Maturity radar, per-commitment breakdown, PNG export, and reproducible JSON config export.
- Editable action-plan narrative with responsible unit / timeframe / indicator left blank,
  exportable as `.md` or `.txt`.
- Full Spanish, French and German overlays of questions, commitments, actions and UI.
- Calibration hand-built from 15 real institutional action plans (UCM, Helmholtz, DCU,
  UCLouvain, AQU Catalunya, FRQ, LBG, SocRSE, Eurodoc, YUFE/UNIRI, UB, UPC, OGS, SDU,
  U. Pannonia), cross-checked against the 314-plan corpus.
- `CITATION.cff` with citation metadata, MIT licence for the code and CC BY 4.0 for the
  calibration data.
- GitHub Actions workflow publishing to GitHub Pages on every push to `main`.

[Unreleased]: https://github.com/rijdho/coara-action-planner/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/rijdho/coara-action-planner/releases/tag/v1.1.0
[1.0.0]: https://github.com/rijdho/coara-action-planner/releases/tag/v1.0.0
