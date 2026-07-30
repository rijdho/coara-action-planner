import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { prioritiseActions } from "../data/actions";
import { getDataset } from "../i18n/registry";
import { useT } from "../i18n/context";
import {
  getConsolidatedLevels, getPerspectives, getTargetLevels, getInstitutionName,
  getPlan, applyPlan, getReportState, setReportDraft, setReportEdited, getDivergence, getDivergenceThreshold,
  embeddedConfigComment,
} from "../lib/storage";
import { buildReport } from "../lib/report";

function generate(lang) {
  const levels = getConsolidatedLevels();
  if (Object.keys(levels).length === 0) return null;
  const plan = getPlan();
  const targets = getTargetLevels();
  const divergence = getDivergence();
  const threshold = getDivergenceThreshold();
  // Use the LOCALISED action catalog (title/description/planText in `lang`),
  // like Results does — the raw English import would leak into the narrative.
  const prioritised = applyPlan(prioritiseActions(getDataset(lang).ACTIONS, levels, plan.context), plan, levels, targets, divergence, threshold);
  const overallLevel = Math.round(
    Object.values(levels).reduce((a, b) => a + b, 0) / Object.values(levels).length,
  );
  const date = new Date().toLocaleDateString(lang, { year: "numeric", month: "long", day: "numeric" });
  return buildReport({
    institutionName: getInstitutionName(),
    levels, plan, prioritised, overallLevel, date, lang,
    targets, divergence, threshold, roles: getPerspectives().map((p) => p.role),
  });
}

export default function ReportPage() {
  const { t, lang } = useT();
  const [text, setText] = useState("");
  const [hasAssessment, setHasAssessment] = useState(true);
  const [copied, setCopied] = useState(false);
  const taRef = useRef(null);

  useEffect(() => {
    const levels = getConsolidatedLevels();
    if (Object.keys(levels).length === 0) { setHasAssessment(false); return; }
    setHasAssessment(true);

    const { text: stored, lang: storedLang, edited } = getReportState();
    if (stored == null || (!edited && storedLang !== lang)) {
      // No draft yet, or an untouched draft in another language → (re)generate.
      const draft = generate(lang);
      if (draft == null) { setHasAssessment(false); return; }
      setText(draft);
      setReportDraft(draft, lang);
    } else {
      setText(stored);
    }
  }, [lang]);

  const onEdit = (v) => { setText(v); setReportEdited(v); };

  const regenerate = () => {
    const draft = generate(lang);
    if (draft == null) return;
    if (text && text.trim() && !window.confirm(t("rep_regenConfirm"))) return;
    setText(draft);
    setReportDraft(draft, lang);
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(text); }
    catch { taRef.current?.select(); document.execCommand("copy"); }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const download = (ext) => {
    const inst = (getInstitutionName() || "institution").replace(/\s+/g, "-").toLowerCase();
    // Append the reproducible config as a trailing HTML comment so the downloaded
    // file self-carries everything needed to reload it (Start → Load configuration).
    const blob = new Blob([text + embeddedConfigComment()], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `coara-action-plan-${inst}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!hasAssessment) {
    return (
      <div className="fade-in text-center py-16 space-y-4">
        <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>{t("rep_emptyTitle")}</h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          {t("rep_emptyBody")}
        </p>
        <Link to="/questionnaire" className="inline-block text-sm font-semibold px-4 py-2 rounded-lg" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
          {t("plan_startQuestionnaire")}
        </Link>
      </div>
    );
  }

  return (
    <div className="fade-in space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 no-print">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>{t("rep_title")}</h1>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            {t("rep_intro_pre")}<strong style={{ color: "var(--color-text)" }}>{t("rep_intro_strong")}</strong>{t("rep_intro_post")}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 no-print">
        <button onClick={copy} className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
          {copied ? t("rep_copied") : t("rep_copy")}
        </button>
        <button onClick={() => download("md")} className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)", border: "1px solid var(--color-border)" }}>
          {t("rep_downloadMd")}
        </button>
        <button onClick={() => download("txt")} className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)", border: "1px solid var(--color-border)" }}>
          {t("rep_downloadTxt")}
        </button>
        <button onClick={() => window.print()} className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)", border: "1px solid var(--color-border)" }}>
          {t("rep_print")}
        </button>
        <button onClick={regenerate} className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80 ml-auto" style={{ background: "transparent", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }} title={t("rep_regenConfirm")}>
          {t("rep_regenerate")}
        </button>
      </div>

      <textarea
        ref={taRef}
        value={text}
        onChange={(e) => onEdit(e.target.value)}
        spellCheck={false}
        className="w-full rounded-xl p-4 font-mono text-xs leading-relaxed no-print"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          color: "var(--color-text)",
          minHeight: "70vh",
          resize: "vertical",
          whiteSpace: "pre-wrap",
        }}
      />

      {/* Print view: render the text as a clean document */}
      <pre className="print-report" style={{ display: "none", whiteSpace: "pre-wrap", fontFamily: "'Inter Variable', Inter, system-ui, sans-serif", fontSize: "11px", lineHeight: 1.5 }}>
        {text}
      </pre>
    </div>
  );
}
