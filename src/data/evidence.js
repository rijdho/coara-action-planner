/**
 * Population evidence: how prevalent each action theme is across the FULL
 * corpus of 314 real CoARA action plans (Zenodo, harvested + full-text
 * extracted upstream). Keyword-based prevalence, so treat as directional
 * bands, not exact counts. Regenerated upstream by the reform-assessment
 * pipeline (02-analyze-corpus.py) whenever new plans are harvested.
 */

export const CORPUS_SIZE = 314;

/** theme key -> { plans, pct } over the corpus */
export const THEME_FREQUENCY = {
  "governance": { plans: 255, pct: 81.2 },
  "awareness-comms": { plans: 252, pct: 80.3 },
  "training": { plans: 246, pct: 78.3 },
  "open-science": { plans: 245, pct: 78.0 },
  "qualitative-judgement": { plans: 240, pct: 76.4 },
  "no-rankings": { plans: 236, pct: 75.2 },
  "working-groups": { plans: 234, pct: 74.5 },
  "remove-jif": { plans: 231, pct: 73.6 },
  "criteria-audit": { plans: 220, pct: 70.1 },
  "diverse-outputs": { plans: 206, pct: 65.6 },
  "career-stage": { plans: 200, pct: 63.7 },
  "edi": { plans: 135, pct: 43.0 },
  "scope-dora": { plans: 134, pct: 42.7 },
  "resources-budget": { plans: 119, pct: 37.9 },
  "ethics-integrity": { plans: 103, pct: 32.8 },
  "progress-report": { plans: 88, pct: 28.0 },
  "narrative-cv": { plans: 85, pct: 27.1 },
  "formal-approval": { plans: 78, pct: 24.8 },
  "mentoring": { plans: 77, pct: 24.5 },
  "cris-it": { plans: 53, pct: 16.9 },
  "publish-plan": { plans: 51, pct: 16.2 },
  "multilingual": { plans: 23, pct: 7.3 },
  "credit-taxonomy": { plans: 11, pct: 3.5 },
  "ai-governance": { plans: 8, pct: 2.5 },
  "unit-evaluation": { plans: 8, pct: 2.5 },
  "surveys-evidence": { plans: 4, pct: 1.3 },
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
