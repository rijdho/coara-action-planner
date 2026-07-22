/**
 * Language registry (pure, no React) for reform-assessment-lite.
 *
 * The English data files (src/data/*.js) remain the canonical source of truth —
 * still re-copyable verbatim from the full reform-assessment app. Each non-English
 * language ships a single overlay (src/data/i18n/<lang>.js) that is merged on top,
 * field by field, with English as the fallback for anything missing. This keeps the
 * methodology in one place and lets partial translations degrade gracefully.
 */
import { QUESTIONS } from "../data/questions";
import { COMMITMENTS, MATURITY_LEVELS } from "../data/commitments";
import { ACTIONS } from "../data/actions";
import { CONTEXTS } from "../data/context";
import { ROLES } from "../data/perspectives";
import { UI_EN } from "./ui.en";
import { REPORT_EN } from "./report.en";
import es from "../data/i18n/es";
import fr from "../data/i18n/fr";
import de from "../data/i18n/de";

export const LANGS = [
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "de", label: "Deutsch", short: "DE" },
];

export const LANG_CODES = LANGS.map((l) => l.code);
export const DEFAULT_LANG = "en";
export const LANG_STORAGE_KEY = "ra-lang";

const OVERLAYS = { es, fr, de };

/** Replace {key} placeholders in a template string. */
export function interpolate(tpl, params = {}) {
  if (tpl == null) return "";
  return String(tpl).replace(/\{(\w+)\}/g, (m, k) => (params[k] != null ? String(params[k]) : m));
}

/** Pick the initial language: stored choice → browser language → English. */
export function detectLang() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && LANG_CODES.includes(stored)) return stored;
  } catch {
    /* ignore */
  }
  try {
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const l of langs) {
      const code = (l || "").slice(0, 2).toLowerCase();
      if (LANG_CODES.includes(code)) return code;
    }
  } catch {
    /* ignore */
  }
  return DEFAULT_LANG;
}

// --- mergers: overlay a translation map onto the English base, per field --------

function mergeQuestions(o) {
  const q = o?.questions || {};
  return QUESTIONS.map((base) => {
    const t = q[base.id];
    if (!t) return base;
    return {
      ...base,
      text: t.text ?? base.text,
      answers: base.answers.map((a) => ({ ...a, text: t.answers?.[a.level] ?? a.text })),
    };
  });
}

function mergeCommitments(o) {
  const c = o?.commitments || {};
  return COMMITMENTS.map((base) => {
    const t = c[base.id];
    if (!t) return base;
    return {
      ...base,
      title: t.title ?? base.title,
      text: t.text ?? base.text,
      inPractice: base.inPractice.map((p, i) => t.inPractice?.[i] ?? p),
      ...(base.subCommitments
        ? {
            subCommitments: base.subCommitments.map((s) => ({
              ...s,
              text: t.subCommitments?.[s.id] ?? s.text,
            })),
          }
        : {}),
    };
  });
}

function mergeActions(o) {
  const list = o?.actions || [];
  return ACTIONS.map((base, i) => {
    const t = list[i];
    if (!t) return base;
    return {
      ...base,
      title: t.title ?? base.title,
      description: t.description ?? base.description,
      planText: t.planText ?? base.planText,
      ...(t.examples ? { examples: t.examples } : {}),
    };
  });
}

function mergeMaturity(o) {
  const list = o?.maturity || [];
  return MATURITY_LEVELS.map((base, i) => {
    const t = list[i];
    if (!t) return base;
    return { ...base, label: t.label ?? base.label, description: t.description ?? base.description };
  });
}

function mergeContexts(o) {
  const c = o?.contexts || {};
  return CONTEXTS.map((base) => {
    const t = c[base.id];
    if (!t) return base;
    return { ...base, label: t.label ?? base.label, description: t.description ?? base.description };
  });
}

function mergeRoles(o) {
  const r = o?.roles || {};
  return ROLES.map((base) => {
    const t = r[base.id];
    if (!t) return base;
    return { ...base, label: t.label ?? base.label, hint: t.hint ?? base.hint };
  });
}

const datasetCache = {};

/** Localised data arrays for a language (memoised). */
export function getDataset(lang) {
  if (lang === "en" || !OVERLAYS[lang]) {
    return { QUESTIONS, COMMITMENTS, ACTIONS, MATURITY_LEVELS, CONTEXTS, ROLES };
  }
  if (datasetCache[lang]) return datasetCache[lang];
  const o = OVERLAYS[lang];
  const ds = {
    QUESTIONS: mergeQuestions(o),
    COMMITMENTS: mergeCommitments(o),
    ACTIONS: mergeActions(o),
    MATURITY_LEVELS: mergeMaturity(o),
    CONTEXTS: mergeContexts(o),
    ROLES: mergeRoles(o),
  };
  datasetCache[lang] = ds;
  return ds;
}

/** UI string table for a language (English keys + overlay). */
export function getUI(lang) {
  return { ...UI_EN, ...(OVERLAYS[lang]?.ui || {}) };
}

/** Report narrative string table for a language (English keys + overlay). */
export function getReportStrings(lang) {
  return { ...REPORT_EN, ...(OVERLAYS[lang]?.report || {}) };
}
