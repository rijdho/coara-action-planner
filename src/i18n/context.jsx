import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import {
  LANGS,
  LANG_CODES,
  LANG_STORAGE_KEY,
  detectLang,
  getDataset,
  getUI,
  getReportStrings,
  interpolate,
} from "./registry";

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => detectLang());

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((code) => {
    if (LANG_CODES.includes(code)) setLangState(code);
  }, []);

  const ui = useMemo(() => getUI(lang), [lang]);
  const dataset = useMemo(() => getDataset(lang), [lang]);

  // t(key, params) → interpolated UI string (falls back to the key itself).
  const t = useCallback(
    (key, params) => interpolate(ui[key] ?? key, params),
    [ui],
  );

  const value = useMemo(
    () => ({ lang, setLang, langs: LANGS, t, ui, dataset }),
    [lang, setLang, t, ui, dataset],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

function useLangContext() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LanguageProvider>");
  return ctx;
}

/** Full i18n context: { lang, setLang, langs, t, ui, dataset }. */
export const useLang = useLangContext;

/** Just the translator + current language: { t, lang }. */
export function useT() {
  const { t, lang } = useLangContext();
  return { t, lang };
}

/** Localised data arrays for the current language. */
export function useDataset() {
  return useLangContext().dataset;
}

export { getReportStrings };
