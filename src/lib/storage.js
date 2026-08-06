/**
 * Minimal localStorage persistence for the simple (lite) reform assessment.
 *
 * Distinct key from the full app ("reform-assessment") so the two can coexist
 * under the same origin without clobbering each other.
 *
 * The state captures three framings deliberately kept apart (see the Start tab):
 *   - "where are we now"   → each perspective's answers/levels (status quo)
 *   - "where do we want to be" → targetLevels (institution-wide ambition)
 *   - "who is giving this info" → perspectives, each tagged with a respondent role
 * Multiple perspectives can be filled in (e.g. leadership vs researchers) and are
 * consolidated by averaging for the profile, while their divergence is the
 * "perception gap" surfaced on Results.
 */

import { ROLE_WEIGHTS } from "../data/perspectives";
import { DEFAULT_PLAN, DEFAULT_DIVERGENCE_THRESHOLD } from "../data/plan";

// The plan-stage ranking moved to data/plan.js, next to the rest of the calibration.
// Re-exported here so the pages keep a single import for "plan state + plan ranking".
export { DEFAULT_PLAN, applyPlan, CONTEXT_AFFINITY, CONTEXT_AFFINITY_BOOST } from "../data/plan";

const STORAGE_KEY = "reform-assessment-lite";

let _seq = 0;
function newId() {
  return "p" + Date.now().toString(36) + (_seq++).toString(36);
}

function rawLoad() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Normalise any stored shape into the current model. Idempotent, so it is safe to
 * run on every read; the migrated shape is persisted on the next write.
 * Legacy shape (single respondent): { answers, levels, ... } → one perspective.
 */
function normalize(data) {
  if (!data || typeof data !== "object") data = {};
  if (!Array.isArray(data.perspectives)) {
    const legacyAnswers = data.answers ?? {};
    const legacyLevels =
      data.levels && Object.keys(data.levels).length ? data.levels : computeLevels(legacyAnswers);
    data.perspectives = [
      { id: "p-default", role: "unspecified", answers: legacyAnswers, levels: legacyLevels },
    ];
    data.activePerspectiveId = "p-default";
    delete data.answers;
    delete data.levels;
  }
  if (data.perspectives.length === 0) {
    data.perspectives = [{ id: newId(), role: "unspecified", answers: {}, levels: {} }];
  }
  if (!data.activePerspectiveId || !data.perspectives.find((p) => p.id === data.activePerspectiveId)) {
    data.activePerspectiveId = data.perspectives[0].id;
  }
  if (!data.targetLevels || typeof data.targetLevels !== "object") data.targetLevels = {};
  return data;
}

function load() {
  return normalize(rawLoad());
}

function save(data) {
  data.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// --- Perspectives (the "who is giving this info" framing) --------------------

export function getPerspectives() {
  return load().perspectives;
}

export function getActivePerspectiveId() {
  return load().activePerspectiveId;
}

export function getActivePerspective() {
  const d = load();
  return d.perspectives.find((p) => p.id === d.activePerspectiveId) ?? d.perspectives[0];
}

export function setActivePerspectiveId(id) {
  const d = load();
  if (d.perspectives.find((p) => p.id === id)) {
    d.activePerspectiveId = id;
    save(d);
  }
}

export function addPerspective(role = "unspecified") {
  const d = load();
  const p = { id: newId(), role, answers: {}, levels: {} };
  d.perspectives.push(p);
  d.activePerspectiveId = p.id;
  save(d);
  return p;
}

export function removePerspective(id) {
  const d = load();
  d.perspectives = d.perspectives.filter((p) => p.id !== id);
  if (d.perspectives.length === 0) {
    d.perspectives = [{ id: newId(), role: "unspecified", answers: {}, levels: {} }];
  }
  if (!d.perspectives.find((p) => p.id === d.activePerspectiveId)) {
    d.activePerspectiveId = d.perspectives[0].id;
  }
  save(d);
}

export function setPerspectiveRole(id, role) {
  const d = load();
  const p = d.perspectives.find((x) => x.id === id);
  if (p) {
    p.role = role;
    save(d);
  }
}

// --- Answers / levels (operate on the active perspective) --------------------

/** Answers of the active perspective, shaped { questionId: { commitment, level } } */
export function getAnswers() {
  return getActivePerspective()?.answers ?? {};
}

export function saveAnswers(answers) {
  const d = load();
  const p = d.perspectives.find((x) => x.id === d.activePerspectiveId) ?? d.perspectives[0];
  p.answers = answers;
  p.levels = computeLevels(answers);
  save(d);
}

/** Maturity level per commitment for the active perspective { commitmentId: level } */
export function getLevels() {
  return getActivePerspective()?.levels ?? {};
}

export function saveLevels(levels) {
  const d = load();
  const p = d.perspectives.find((x) => x.id === d.activePerspectiveId) ?? d.perspectives[0];
  p.levels = levels;
  save(d);
}

/**
 * Maturity averaged across every perspective that has data { commitmentId: level }.
 * The average is **role-weighted** (see ROLE_WEIGHTS): those who are assessed count
 * for more, so the consolidated profile leans toward the lived experience rather
 * than the most optimistic reading.
 */
export function getConsolidatedLevels() {
  const ps = load().perspectives;
  const roleWeights = getRoleWeights();
  const sums = {};
  const wsum = {};
  const rawSum = {};
  const rawN = {};
  for (const p of ps) {
    const w = roleWeights[p.role] ?? 1;
    for (const [c, l] of Object.entries(p.levels || {})) {
      sums[c] = (sums[c] ?? 0) + l * w;
      wsum[c] = (wsum[c] ?? 0) + w;
      rawSum[c] = (rawSum[c] ?? 0) + l;
      rawN[c] = (rawN[c] ?? 0) + 1;
    }
  }
  const out = {};
  for (const c of Object.keys(rawN)) {
    // Fall back to a plain average if every contributing weight is 0, so the
    // profile never vanishes just because a role was zeroed out.
    out[c] = wsum[c] > 0 ? Math.round(sums[c] / wsum[c]) : Math.round(rawSum[c] / rawN[c]);
  }
  return out;
}

/**
 * Per-commitment disagreement across perspectives { commitmentId: spread }, where
 * spread = max − min of the raw (unweighted) levels. Only commitments rated by at
 * least two perspectives appear. Used to flag and prioritise contested areas.
 */
export function getDivergence() {
  const ps = load().perspectives;
  const vals = {};
  for (const p of ps) {
    for (const [c, l] of Object.entries(p.levels || {})) {
      (vals[c] ??= []).push(l);
    }
  }
  const out = {};
  for (const [c, arr] of Object.entries(vals)) {
    if (arr.length >= 2) out[c] = Math.max(...arr) - Math.min(...arr);
  }
  return out;
}

export function getInstitutionName() {
  return load().institutionName ?? "";
}

export function saveInstitutionName(name) {
  const d = load();
  d.institutionName = name;
  save(d);
}

/** Average answer levels into one maturity level per commitment. */
export function computeLevels(answers) {
  const sums = {};
  const counts = {};
  for (const val of Object.values(answers)) {
    if (val?.commitment != null) {
      sums[val.commitment] = (sums[val.commitment] ?? 0) + val.level;
      counts[val.commitment] = (counts[val.commitment] ?? 0) + 1;
    }
  }
  const result = {};
  for (const c of Object.keys(sums)) {
    result[c] = Math.round(sums[c] / counts[c]);
  }
  return result;
}

// --- Target levels (the "where do we want to be" framing) --------------------

/** Desired maturity per commitment { commitmentId: level }. 0 / missing = unset. */
export function getTargetLevels() {
  return load().targetLevels ?? {};
}

export function saveTargetLevels(targets) {
  const d = load();
  d.targetLevels = targets;
  save(d);
}

// --- Advanced tuning: per-role weights + divergence threshold ----------------

/** Effective role → weight map (stored overrides on top of ROLE_WEIGHTS defaults). */
export function getRoleWeights() {
  return { ...ROLE_WEIGHTS, ...(load().roleWeights ?? {}) };
}

export function saveRoleWeights(weights) {
  const d = load();
  d.roleWeights = weights;
  save(d);
}

export function resetRoleWeights() {
  const d = load();
  delete d.roleWeights;
  save(d);
}

/** Minimum spread (≥) before perspectives count as diverging. Default 2. */
export function getDivergenceThreshold() {
  const n = load().divergenceThreshold;
  return typeof n === "number" && n >= 1 ? n : DEFAULT_DIVERGENCE_THRESHOLD;
}

export function saveDivergenceThreshold(n) {
  const d = load();
  d.divergenceThreshold = n;
  save(d);
}

// --- Plan settings (the "Plan" tab) -----------------------------------------

export function getPlan() {
  return { ...DEFAULT_PLAN, ...(load().plan ?? {}) };
}

export function savePlan(plan) {
  const d = load();
  d.plan = plan;
  save(d);
}

// --- Report draft (the "Report" tab — user-editable narrative) ----------------

/** { text, lang, edited } — lang/edited let us auto-refresh an untouched draft
 *  when the user switches language, while preserving manual edits. */
export function getReportState() {
  const d = load();
  return { text: d.reportText ?? null, lang: d.reportLang ?? null, edited: !!d.reportEdited };
}

/** Store a freshly generated draft (resets the "edited" flag). */
export function setReportDraft(text, lang) {
  const d = load();
  d.reportText = text;
  d.reportLang = lang;
  d.reportEdited = false;
  save(d);
}

/** Persist a user edit (marks the draft as edited so it won't be auto-replaced). */
export function setReportEdited(text) {
  const d = load();
  d.reportText = text;
  d.reportEdited = true;
  save(d);
}

export function clearAll() {
  localStorage.removeItem(STORAGE_KEY);
}

// --- Reproducible configuration: save / load the full input state -------------
//
// Captures every INPUT that determines the assessment and the generated report
// (answers, perspectives, ambition, plan, weights) — but NOT the derived report
// draft — into one portable, versioned object. Loading it back reproduces the
// exact same Results + report, or gives you a base to tweak from.

const CONFIG_TYPE = "reform-assessment-lite-config";
const CONFIG_VERSION = 1;

/** Serialise the complete reproducible configuration (inputs only). */
export function exportConfig() {
  const d = load();
  return {
    _type: CONFIG_TYPE,
    _version: CONFIG_VERSION,
    savedAt: new Date().toISOString(),
    institutionName: d.institutionName ?? "",
    perspectives: d.perspectives.map((p) => ({
      id: p.id, role: p.role, answers: p.answers ?? {}, levels: p.levels ?? {},
    })),
    activePerspectiveId: d.activePerspectiveId,
    targetLevels: d.targetLevels ?? {},
    roleWeights: d.roleWeights ?? {},
    divergenceThreshold: typeof d.divergenceThreshold === "number" ? d.divergenceThreshold : DEFAULT_DIVERGENCE_THRESHOLD,
    plan: { ...DEFAULT_PLAN, ...(d.plan ?? {}) },
  };
}

/**
 * Validate + restore a configuration produced by exportConfig().
 * Returns { ok: true } or { ok: false, error }. On success the stored state is
 * replaced and the report draft cleared so it regenerates from the loaded inputs.
 */
export function importConfig(obj) {
  if (!obj || typeof obj !== "object") return { ok: false, error: "not a JSON object" };
  if (obj._type && obj._type !== CONFIG_TYPE) return { ok: false, error: "not a reform-assessment-lite configuration" };
  if (!Array.isArray(obj.perspectives) || obj.perspectives.length === 0) {
    return { ok: false, error: "no perspectives found" };
  }
  const data = normalize({
    institutionName: typeof obj.institutionName === "string" ? obj.institutionName : "",
    perspectives: obj.perspectives.map((p) => {
      const answers = p && typeof p.answers === "object" && p.answers ? p.answers : {};
      const providedLevels = p && typeof p.levels === "object" && p.levels ? p.levels : {};
      return {
        id: typeof p?.id === "string" ? p.id : newId(),
        role: typeof p?.role === "string" ? p.role : "unspecified",
        answers,
        // Levels are derived from answers — recompute when answers exist so the
        // profile always matches the responses; otherwise trust provided levels.
        levels: Object.keys(answers).length ? computeLevels(answers) : providedLevels,
      };
    }),
    activePerspectiveId: obj.activePerspectiveId,
    targetLevels: obj.targetLevels && typeof obj.targetLevels === "object" ? obj.targetLevels : {},
    roleWeights: obj.roleWeights && typeof obj.roleWeights === "object" ? obj.roleWeights : {},
    divergenceThreshold: typeof obj.divergenceThreshold === "number" ? obj.divergenceThreshold : DEFAULT_DIVERGENCE_THRESHOLD,
    plan: obj.plan && typeof obj.plan === "object" ? { ...DEFAULT_PLAN, ...obj.plan } : { ...DEFAULT_PLAN },
  });
  save(data);
  return { ok: true };
}

// UTF-8-safe base64 (institution names etc. may be non-Latin1).
function b64encodeUtf8(str) { return btoa(unescape(encodeURIComponent(str))); }
function b64decodeUtf8(b64) { return decodeURIComponent(escape(atob(b64))); }

const CONFIG_MARKER = CONFIG_TYPE + ":v" + CONFIG_VERSION + ":";

/**
 * A machine-readable HTML comment carrying the full config, base64-encoded.
 * Appended to the DOWNLOADED report file (not the editable draft) so the .md
 * self-carries everything needed to reproduce it. Survives round-trips through
 * plain-text tools; stripped when the Markdown is rendered to HTML.
 */
export function embeddedConfigComment() {
  const json = JSON.stringify(exportConfig());
  return `\n\n<!-- ${CONFIG_MARKER}${b64encodeUtf8(json)}\n     (this line keeps the report reproducible — Load configuration on the Start tab reads it) -->\n`;
}

/** Extract + decode a config embedded by embeddedConfigComment(), or null. */
export function parseConfigFromText(text) {
  if (typeof text !== "string") return null;
  const m = text.match(new RegExp(CONFIG_MARKER.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([A-Za-z0-9+/=]+)"));
  if (!m) return null;
  try { return JSON.parse(b64decodeUtf8(m[1])); } catch { return null; }
}

