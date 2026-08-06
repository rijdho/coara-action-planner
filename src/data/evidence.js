/**
 * Population evidence: how prevalent each action theme is across the FULL
 * corpus of 335 real CoARA action plans (Zenodo, harvested + full-text
 * extracted upstream). Keyword-based prevalence, so treat as directional
 * bands, not exact counts. Regenerated upstream by the reform-assessment
 * pipeline (02-analyze-corpus.py) whenever new plans are harvested.
 */

export const CORPUS_SIZE = 335;

/** theme key -> { plans, pct } over the corpus */
export const THEME_FREQUENCY = {
  "governance": { plans: 272, pct: 81.2 },
  "awareness-comms": { plans: 268, pct: 80.0 },
  "training": { plans: 262, pct: 78.2 },
  "open-science": { plans: 259, pct: 77.3 },
  "qualitative-judgement": { plans: 258, pct: 77.0 },
  "no-rankings": { plans: 253, pct: 75.5 },
  "working-groups": { plans: 251, pct: 74.9 },
  "remove-jif": { plans: 245, pct: 73.1 },
  "criteria-audit": { plans: 236, pct: 70.4 },
  "diverse-outputs": { plans: 217, pct: 64.8 },
  "career-stage": { plans: 216, pct: 64.5 },
  "scope-dora": { plans: 146, pct: 43.6 },
  "edi": { plans: 144, pct: 43.0 },
  "resources-budget": { plans: 125, pct: 37.3 },
  "ethics-integrity": { plans: 115, pct: 34.3 },
  "progress-report": { plans: 98, pct: 29.3 },
  "narrative-cv": { plans: 94, pct: 28.1 },
  "formal-approval": { plans: 84, pct: 25.1 },
  "mentoring": { plans: 82, pct: 24.5 },
  "cris-it": { plans: 58, pct: 17.3 },
  "publish-plan": { plans: 57, pct: 17.0 },
  "multilingual": { plans: 25, pct: 7.5 },
  "credit-taxonomy": { plans: 11, pct: 3.3 },
  "ai-governance": { plans: 10, pct: 3.0 },
  "unit-evaluation": { plans: 8, pct: 2.4 },
  "surveys-evidence": { plans: 4, pct: 1.2 },
  "care-indigenous": { plans: 1, pct: 0.3 },
};

/** Prevalence band for a theme's pct. Low bands are reframed as leadership
 *  opportunities rather than gaps; labels are i18n keys (ev_<band>). */
export function evidenceBand(pct) {
  if (pct == null) return null;
  if (pct >= 60) return { band: "universal" };
  if (pct >= 30) return { band: "common" };
  if (pct >= 10) return { band: "emerging" };
  return { band: "frontier" };
}

/** Full evidence object for a theme key, or null if unknown. */
export function themeEvidence(theme) {
  if (!theme || !THEME_FREQUENCY[theme]) return null;
  const { plans, pct } = THEME_FREQUENCY[theme];
  return { theme, plans, pct, corpusSize: CORPUS_SIZE, ...evidenceBand(pct) };
}
