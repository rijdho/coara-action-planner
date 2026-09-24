# Changelog

All notable changes to this project are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Each released version is archived on Zenodo with its own version DOI. The concept DOI
[10.5281/zenodo.21492548](https://doi.org/10.5281/zenodo.21492548) always resolves to the
latest release.

## [Unreleased]

### Changed

- **The tool is called Reform Action Planner.** The old name led with CoARA's, which could read as an
  official CoARA product. The repository keeps its name, `coara-action-planner`, and every URL and
  DOI stays as it was; the name changes where a reader meets it: the page title and social card, the
  rail, the generated reports, the README and `CITATION.cff` (Zenodo takes the title at the next
  release). The social card also stops listing French, which the tool no longer offers.

### Changed

- **The look comes from rijdho/house-style.** `src/house/` holds a synced copy (house.css and the
  Inter fonts), imported before `src/index.css`, with a lock and a test that fail on a hand edit or
  a stale copy (`node scripts/sync-house.mjs` refreshes it). `src/index.css` keeps only what this tool
  adds or sets differently: 204 declarations identical to house.css went, and the duplicate
  `src/assets/fonts/` with them. Checked by screenshots before and after, 7 views in light and dark,
  desktop and phone: the only changes are the command bar's phone layout and the ellipsis on a long
  title, both from house.

## [1.3.0] - 2026-09-24

Version DOI: [10.5281/zenodo.22939377](https://doi.org/10.5281/zenodo.22939377).

### Changed

- **The rail signs off like every other tool in the family.** One item per line: author, the two
  licences, source, *Part of Metaudits* (linking the family's front page,
  rijdho.github.io/metaudits-home) and the concept DOI, in the interface language. It replaces the
  "For questions about data usage or attribution:" line, which introduced nothing.

### Removed

- **French.** The interface is offered in English, German and Spanish, as across the family. A
  browser that had chosen French falls back to its own language or to English.

### Security

- **A Content-Security-Policy.** GitHub Pages sends no security headers at all, so a meta
  policy is the only one available. This app is unusually easy to lock down because it
  makes no network requests of any kind: `connect-src 'none'` costs nothing and means a
  script that somehow ran here could not send anywhere. `style-src` needs no loosening
  either, since React applies inline styles through the CSSOM, which CSP does not govern.
  Clickjacking stays uncovered: `frame-ancestors` requires a response header Pages cannot
  set.
- **react-router 6.30.4 to 7.18.3**, clearing two advisories. Neither was reachable here:
  the open redirect needs a navigation target an attacker controls, and every target in
  this codebase is a literal, while the other needs SSR hydration and this is a static
  SPA. The 6.x line is unpatched, so clearing them meant the major. The app uses only the
  declarative APIs, so nothing in the source changed.
- **postcss and nanoid** to their patched versions, within semver.

### Added

- **A test that keeps the charting library behind its lazy boundary**
  (`tests/chart-boundary.test.mjs`). The split below rests on one fact: nothing imports
  the chart implementation statically. A single stray import folds recharts back into the
  entry bundle, and nothing renders differently, so the regression is invisible without a
  test. Three defects were planted to confirm the test is not vacuous: a page importing
  recharts, a page naming the implementation, and the boundary rewritten as a static
  import. Each failed as intended.

### Removed

- `getLevels` in `src/lib/storage.js`, an exported function nobody called. Its only
  occurrence in the repository was its own definition; the similarly named
  `getTargetLevels` is a different function and is used in three pages.

### Changed

- **The code is licensed under [Apache-2.0](LICENSE)**, the licence the family now uses for its
  tools on metadata, open science and research assessment: what these tools need is to be
  adopted by institutions, and Apache is the permissive licence their legal offices accept
  most readily (an explicit patent grant, contributions under the same terms, no right to the
  names). The calibration data stays CC BY 4.0. **Releases up to 1.2.0 were published under
  MIT and remain so.** Between 1.2.0 and this release the main branch carried
  AGPL-3.0-or-later for a time, and a copy taken from it then keeps those terms; no release was
  made under it.
- **`CITATION.cff` names the code licence, and the abstract keeps naming the data one.**
  A list of both was tried and reverted: Zenodo's licence field is single-valued, so the
  single code licence goes there and the CC BY 4.0 data is named in the abstract.
- **The page says under what licence it runs.** The rail footer carried the author and the
  DOI but no licence, which the house rule asks for. The source link was already in the
  command bar.
- **The deploy gates on the test suite.** The suite existed and CI never ran it, so a red
  test would have deployed anyway. `npm test` now runs before the build, as it does in the
  sibling repos.
- **The maturity radar loads on demand.** recharts and its dependency tree (lodash, d3-*,
  decimal.js-light, react-smooth) are the heaviest thing here, and only two of the five
  routes draw a chart, so Start, Plan and Report were downloading a charting library in
  order to render text. The implementation moved to `components/MaturityRadarChart.jsx`
  behind a `React.lazy` boundary in `components/MaturityRadar.jsx`; the call sites and the
  props are unchanged. The entry bundle goes from 899 kB to 543 kB (260 kB to 161 kB
  gzipped), with the chart in a 357 kB chunk that arrives when a chart is about to be
  drawn. Verified in a real browser against the built output: Start, Plan and Report
  request no chart chunk, Questionnaire and Results draw the radar, and nothing leaves the
  origin.
- **`package.json` carries the real version.** It had stayed at 1.0.0 through two
  releases while the tags and `CITATION.cff` moved on. Nothing reads it, which is why it
  drifted unnoticed, and it was still the one version string in the repository that was
  wrong.

### Known

- Two advisories remain against `esbuild` and `vite`, both reachable only through the dev
  server on a developer's own machine and never in what is shipped. Clearing them needs a
  vite major, which is a deliberate change with its own regression risk, not something to
  fold into a security pass.

## [1.2.0] — 2026-08-06

Version DOI:
[10.5281/zenodo.21826287](https://doi.org/10.5281/zenodo.21826287).

### Changed

- **Corpus recount: 314 → 335 plans** (2026-08-06, incremental — the 21 deposits Zenodo
  gained since the 17 April 2026 harvest were downloaded, extracted and counted; the 314
  already-read plans were reused, not re-fetched). Every prevalence figure moved; no theme
  changed band. The tooltip that hardcoded "314 plans" in four languages now interpolates
  `CORPUS_SIZE`, so a future recount cannot strand a stale number in the interface, and
  `calibration.test.mjs` now asserts the corpus can only grow rather than pinning the
  literal. TU Dublin's September 2024 plan no longer surfaces in Zenodo search (superseded
  by its V2, which is among the new plans) but remains published, so it stays counted.


### Added

- **The CoARA guiding questions in the generated report.** Every section now carries the
  matching guiding question from the CoARA Secretariat's *Action Plan Guidelines* (October
  2023), quoted verbatim, and all ten commitments get a heading whether or not the tool had
  actions to suggest for them. The point is to close the gap between "a draft" and "a
  document we can submit": the drafter can check the plan against the guidelines line by
  line. The questions are quoted in the published English in every locale, since CoARA
  issues no translation, and the data file carries the source's own "not a rigid template"
  disclaimer so no caller can present this as compliance. New file
  `src/data/guidingQuestions.js`; new tests in `tests/guiding-questions.test.mjs`.
- **A link-preview card** (`public/og-card.png`, generated by `docs/og-card.mjs`) plus Open
  Graph and Twitter tags in `index.html`. The app is client-rendered, so a crawler that does
  not run JavaScript previously saw a bare text row with no image.
- **One-click set-up for multiple perspectives** on the Start tab, and a callout treatment
  for the perspectives card. Asking several roles the same questions and surfacing where
  they disagree is the thing this tool does that a written guide cannot, and it was reading
  as a settings panel.
- **Tests for the second ranking stage** (`tests/plan.test.mjs`, 15 cases). `applyPlan`
  filters and re-ranks everything Results and Report display — including a hard ambition
  gate that can drop an action entirely — and had no coverage at all, which meant the
  documented parity contract with the hosted engine only ever covered half the pipeline.
- **Locale coverage tests** for the `ui` and `report` string tables. A missing key there
  falls back to English mid-paragraph, which is invisible to every other check.
- **[`corpus/`](corpus/) — the empirical basis of the "N% of 314 plans" figures**, published
  rather than asserted: the manifest of which 314 Zenodo records were read, the 27 keyword
  signatures that define each theme, the counts they produce, and a five-step pipeline that
  reproduces all of it. The action plans themselves are deliberately not redistributed — they
  belong to the depositing institutions under terms each chose — so `corpus/data/plans.csv`
  locates every one instead. The pipeline is incremental: a diff against the manifest runs
  before anything is downloaded, so a quarter with no new plans costs a single API call, and
  nothing in it sends a document to a model or any third-party service.
- **`tests/corpus-parity.test.mjs`** (10 cases), which is why the corpus lives here rather than
  in a repository of its own. `corpus/data/theme-frequency.csv` and `src/data/evidence.js` hold
  the same figures; a recount that updated one and forgot the other would leave the tool
  quoting percentages its own corpus no longer supports, and nothing would look different.
  Across two repositories no test could see both sides. Writing it immediately found three real
  defects: the published CSVs were CRLF, three plans carry DOIs minted by their own
  institutional repository rather than by Zenodo, and the first draft of the test's own CSV
  reader split on commas inside quoted author lists.

### Changed

- **The plan-stage ranking moved from `src/lib/storage.js` to `src/data/plan.js`**, next to
  the rest of the calibration. Half the published method — the ambition gate and the
  context-affinity, focus, horizon, target and divergence weights — was living in the
  localStorage persistence module, which is not a file anyone auditing the methodology would
  open. The weights are now named constants rather than inline literals, the combined
  ceiling on the two context boosts is documented and pinned (`CONTEXT_MAX_COMBINED_BOOST`),
  and the README methodology table lists the file. Behaviour is unchanged.


## [1.1.0] — 2026-07-28

Version DOI:
[10.5281/zenodo.21644739](https://doi.org/10.5281/zenodo.21644739).

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
