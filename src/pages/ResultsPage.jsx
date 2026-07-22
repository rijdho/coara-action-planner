import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { prioritiseActions } from "../data/actions";
import { themeEvidence } from "../data/evidence";
import { interpolate } from "../i18n/registry";
import MaturityBadge from "../components/MaturityBadge";
import MaturityRadar from "../components/MaturityRadar";
import { useLang } from "../i18n/context";
import {
  getConsolidatedLevels, getPerspectives, getInstitutionName,
  getPlan, applyPlan, DEFAULT_PLAN, getTargetLevels, getDivergence, getDivergenceThreshold,
  exportConfig,
} from "../lib/storage";

const EFFORT_COLORS = { low: "#10b981", medium: "#f59e0b", high: "#ef4444" };
const IMPACT_COLORS = { low: "#64748b", medium: "#f59e0b", high: "#10b981" };
const PERSPECTIVE_PALETTE = ["var(--color-accent)", "#f59e0b", "#3b82f6", "#ec4899", "#14b8a6", "#a855f7"];

function ActionCard({ action, index, level = 0 }) {
  const { t, dataset } = useLang();
  const [expanded, setExpanded] = useState(false);
  const commitment = dataset.COMMITMENTS.find((c) => c.id === action.commitment);
  const evidence = themeEvidence(action.theme);
  const evidencePct = evidence ? (evidence.pct < 1 ? "<1" : Math.round(evidence.pct)) : null;
  return (
    <div className="rounded-xl p-4 transition-all" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
      <div className="flex items-start gap-3">
        <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "var(--color-accent)20", color: "var(--color-accent)" }}>
          {index + 1}
        </span>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{action.title}</h3>
            <button
              onClick={() => setExpanded(!expanded)}
              className="shrink-0 text-xs font-mono px-2 py-0.5 rounded hover:opacity-80"
              style={{ background: "var(--color-surface-alt)", color: "var(--color-text-muted)" }}
            >
              {expanded ? "−" : "+"}
            </button>
          </div>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--color-accent)15", color: "var(--color-accent)" }}>C{commitment.number}</span>
            <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>{commitment.title}</span>
            <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: `${EFFORT_COLORS[action.effort]}20`, color: EFFORT_COLORS[action.effort] }}>{t("effortLabel")}: {t(`effort_${action.effort}`)}</span>
            <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: `${IMPACT_COLORS[action.impact]}20`, color: IMPACT_COLORS[action.impact] }}>{t("impactLabel")}: {t(`impact_${action.impact}`)}</span>
            <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>L{level} &rarr; L{action.toLevel}</span>
            {evidence && (
              <span
                className="text-xs font-mono px-1.5 py-0.5 rounded"
                title={t("res_corpusTitle")}
                style={{ background: "var(--color-surface-alt)", color: "var(--color-text-muted)" }}
              >
                {interpolate(t("res_corpus"), { pct: evidencePct, n: evidence.corpusSize })}
              </span>
            )}
          </div>
          {expanded && (
            <div className="mt-3 space-y-2 slide-in">
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{action.description}</p>
              {evidence && (
                <p className="text-xs" style={{ color: "var(--color-accent)" }}>
                  {t(`ev_${evidence.band}`)} · {interpolate(t("res_corpus"), { pct: evidencePct, n: evidence.corpusSize })}
                </p>
              )}
              {action.examples && (
                <div>
                  <span className="text-xs font-semibold" style={{ color: "var(--color-accent)" }}>{t("res_examples")}</span>
                  <ul className="mt-1 space-y-0.5">
                    {action.examples.map((ex, i) => (
                      <li key={i} className="text-xs flex gap-2" style={{ color: "var(--color-text-muted)" }}>
                        <span style={{ color: "var(--color-accent)" }}>&bull;</span>{ex}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  const { t, lang, dataset } = useLang();
  const { COMMITMENTS, MATURITY_LEVELS, ACTIONS, CONTEXTS, ROLES } = dataset;
  const HORIZON_LABELS = {
    "quick-wins": t("horizon_quickwins_label"),
    balanced: t("horizon_balanced_label"),
    structural: t("horizon_structural_label"),
  };
  const [levels, setLevels] = useState({});
  const [plan, setPlan] = useState(DEFAULT_PLAN);
  const [perspectives, setPerspectives] = useState([]);
  const [targets, setTargets] = useState({});
  const [divergence, setDivergence] = useState({});
  const [divThreshold, setDivThreshold] = useState(2);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setLevels(getConsolidatedLevels());
    setPlan(getPlan());
    setPerspectives(getPerspectives());
    setTargets(getTargetLevels());
    setDivergence(getDivergence());
    setDivThreshold(getDivergenceThreshold());
  }, []);

  const roleLabel = (id) => ROLES.find((r) => r.id === id)?.label ?? id;
  const hasAssessment = Object.keys(levels).length > 0;
  const hasTargets = Object.keys(targets).length > 0;
  const multiPerspective = perspectives.length > 1;

  const prioritised = useMemo(
    () => applyPlan(prioritiseActions(ACTIONS, levels, plan.context), plan, levels, targets, divergence, divThreshold),
    [ACTIONS, levels, plan, targets, divergence, divThreshold],
  );
  const contextLabel = CONTEXTS.find((c) => c.id === plan.context)?.label ?? t("unknownInst");
  const planIsTuned =
    plan.context !== "all" || plan.horizon !== "balanced" ||
    plan.focusCommitments.length > 0 || !plan.includeHighEffort || hasTargets;
  const filtered = useMemo(() => {
    if (filter === "quick-wins") return prioritised.filter((a) => a.effort === "low" && a.impact !== "low");
    if (filter === "high-impact") return prioritised.filter((a) => a.impact === "high");
    return prioritised;
  }, [prioritised, filter]);

  // Radar series: one polygon per respondent perspective, plus a dashed target polygon.
  const radarSeries = useMemo(() => {
    const series = perspectives
      .filter((p) => Object.keys(p.levels || {}).length > 0)
      .map((p, i) => ({
        key: `p${i}`,
        name: multiPerspective ? `${i + 1}. ${roleLabel(p.role)}` : roleLabel(p.role),
        levels: p.levels,
        color: PERSPECTIVE_PALETTE[i % PERSPECTIVE_PALETTE.length],
        fill: multiPerspective ? 0.1 : 0.25,
        width: 2,
      }));
    if (hasTargets) {
      series.push({ key: "target", name: t("radar_target"), levels: targets, color: "var(--color-level-5)", dash: "5 3", fill: 0.04, width: 2 });
    }
    return series.length ? series : null;
  }, [perspectives, targets, hasTargets, multiPerspective, ROLES, t]);

  // Perception gap: commitments where perspectives disagree by ≥2 maturity levels.
  // These are also boosted in applyPlan (via `divergence`), so the flag and the
  // ranking stay in lockstep.
  const perceptionGaps = useMemo(
    () => COMMITMENTS.filter((c) => (divergence[c.id] ?? 0) >= divThreshold).map((c) => `C${c.number}`),
    [divergence, divThreshold, COMMITMENTS],
  );

  const institutionName = getInstitutionName();
  const answeredCount = useMemo(() => {
    const s = new Set();
    for (const p of perspectives) for (const k of Object.keys(p.answers || {})) s.add(k);
    return s.size;
  }, [perspectives]);
  const respondentList = useMemo(
    () => perspectives.map((p) => roleLabel(p.role)).join(", "),
    [perspectives, ROLES],
  );
  const overallLevel = hasAssessment
    ? Math.round(Object.values(levels).reduce((a, b) => a + b, 0) / Object.values(levels).length)
    : null;
  const reportDate = new Date().toLocaleDateString(lang, { year: "numeric", month: "long", day: "numeric" });
  const focusList = plan.focusCommitments.map((id) => "C" + COMMITMENTS.find((c) => c.id === id)?.number).join(", ");

  const handleExport = () => {
    const payload = {
      institution: institutionName || "Unknown",
      date: new Date().toISOString(),
      language: lang,
      overallLevel,
      consolidatedLevels: levels,
      targetLevels: targets,
      perspectives: perspectives.map((p) => ({ role: p.role, levels: p.levels })),
      planSettings: {
        context: plan.context,
        horizon: plan.horizon,
        focusCommitments: plan.focusCommitments,
        includeHighEffort: plan.includeHighEffort,
      },
      actions: prioritised.map((a) => ({
        commitment: a.commitment, title: a.title, description: a.description,
        effort: a.effort, impact: a.impact,
        // currentLevel = where this commitment stands; fromLevel/toLevel are the
        // action's own calibration band (fromLevel is an eligibility threshold).
        currentLevel: levels[a.commitment] ?? 0, fromLevel: a.fromLevel, toLevel: a.toLevel,
      })),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reform-plan-${(institutionName || "institution").replace(/\s+/g, "-").toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Reproducible configuration (inputs only) — re-importable on the Start tab.
  const handleSaveConfig = () => {
    const blob = new Blob([JSON.stringify(exportConfig(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reform-lite-config-${(institutionName || "institution").replace(/\s+/g, "-").toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!hasAssessment) {
    return (
      <div className="fade-in text-center py-16 space-y-4">
        <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>{t("res_emptyTitle")}</h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          {t("res_emptyBody")}
        </p>
        <Link to="/questionnaire" className="inline-block text-sm font-semibold px-4 py-2 rounded-lg" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
          {t("plan_startQuestionnaire")}
        </Link>
      </div>
    );
  }

  // Show every prioritised action (no silent cap) — consistent with the on-screen
  // list and the written report. The one-page print may run to a second page; a
  // complete plan beats an arbitrarily truncated one.
  const topActions = prioritised;

  return (
    <div className="fade-in">
      {/* ===================== Interactive results (screen only) ===================== */}
      <div className="print-hidden space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
              {t("res_title")}
              {institutionName && <span className="text-base font-normal ml-2" style={{ color: "var(--color-text-muted)" }}>{t("res_forInst", { inst: institutionName })}</span>}
            </h1>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              {t("res_intro")}
            </p>
            <span className="inline-block text-xs font-mono px-2 py-0.5 rounded mt-1" style={{ background: "var(--color-accent)15", color: "var(--color-accent)", border: "1px solid var(--color-border)" }}>
              {t("res_basedOn", { answered: answeredCount, total: dataset.QUESTIONS.length })}
            </span>
            {/* Active plan summary */}
            <div className="flex flex-wrap items-center gap-1.5 mt-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
              <span className="px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)" }}>{t("res_respondents", { list: respondentList })}</span>
              {planIsTuned ? (
                <>
                  <span>{t("res_planLabel")}</span>
                  <span className="px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)" }}>{HORIZON_LABELS[plan.horizon]}</span>
                  {plan.context !== "all" && <span className="px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)" }}>{contextLabel}</span>}
                  {plan.focusCommitments.length > 0 && (
                    <span className="px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)" }}>
                      {t("res_focus", { list: focusList })}
                    </span>
                  )}
                  {hasTargets && <span className="px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)" }}>{t("res_ambitionSet")}</span>}
                  {!plan.includeHighEffort && <span className="px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)" }}>{t("res_highHidden")}</span>}
                  <Link to="/plan" className="hover:underline" style={{ color: "var(--color-accent)" }}>{t("res_edit")}</Link>
                </>
              ) : (
                <span>{t("res_balancedNote")} <Link to="/plan" className="hover:underline" style={{ color: "var(--color-accent)" }}>{t("res_tuneIt")}</Link></span>
              )}
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <button onClick={() => window.print()} className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
              {t("res_print")}
            </button>
            <button onClick={handleExport} className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)", border: "1px solid var(--color-border)" }}>
              {t("res_exportJson")}
            </button>
            <button onClick={handleSaveConfig} title={t("cfg_hint")} className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)", border: "1px solid var(--color-border)" }}>
              {t("res_saveConfig")}
            </button>
          </div>
        </div>

        {/* Profile: radar + overall + breakdown */}
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-xl p-4" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{t("res_maturityProfile")}</h2>
              <div className="flex items-center gap-2">
                <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>{t("res_overallShort")}</span>
                <MaturityBadge level={overallLevel} size="sm" />
              </div>
            </div>
            <MaturityRadar
              levels={levels}
              series={radarSeries}
              exportName={`maturity-profile-${(institutionName || "institution").replace(/\s+/g, "-").toLowerCase()}`}
            />
            {multiPerspective && (
              <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>{t("res_consolidatedNote", { n: perspectives.length })}</p>
            )}
            {perceptionGaps.length > 0 && (
              <p className="text-xs mt-1" style={{ color: "var(--color-level-1)" }}>{t("res_perceptionGap", { list: perceptionGaps.join(", ") })}</p>
            )}
          </div>

          <div className="lg:col-span-7 rounded-xl p-4" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <h2 className="text-sm font-semibold mb-3" style={{ color: "var(--color-text)" }}>
              {t("res_byCommitment")}{hasTargets ? ` · ${t("res_currentVsTarget")}` : ""}
            </h2>
            <div className="space-y-1.5">
              {COMMITMENTS.map((c) => {
                const lvl = levels[c.id] ?? 0;
                const tgt = targets[c.id] ?? 0;
                return (
                  <div key={c.id} className="flex items-center gap-3">
                    <span className="shrink-0 text-xs font-mono w-7 font-bold" style={{ color: c.type === "core" ? "var(--color-accent)" : "var(--color-text-muted)" }}>C{c.number}</span>
                    {/* No `truncate`: the card is grid-capped at ~559px, so the title
                        column is ~223px while the longest commitment needs ~349px —
                        it was ellipsised at every window width, and this panel gets
                        exported into action plans. Wrap instead; nothing is hidden. */}
                    <span className="flex-1 text-xs leading-tight" style={{ color: "var(--color-text)" }}>{c.title}</span>
                    {/* w-20, not w-28: 80px still reads cleanly on a 0–5 scale (16px per
                        level) and the 32px it gives back to the title drops the rows that
                        wrap to two lines from 5 to 2. Measured, not guessed. */}
                    <div className="shrink-0 w-20 h-1.5 rounded-full relative" style={{ background: "var(--color-bg)" }}>
                      <div className="h-1.5 rounded-full" style={{ width: `${(lvl / 5) * 100}%`, background: MATURITY_LEVELS[lvl].color }} />
                      {tgt > 0 && (
                        <span className="absolute top-[-2px] h-[10px] w-[2px] rounded" style={{ left: `calc(${(tgt / 5) * 100}% - 1px)`, background: "var(--color-level-5)" }} title={t("radar_target")} />
                      )}
                    </div>
                    {/* w-32 + nowrap: the level label is localised; measured worst case
                        is 116px ("L0 Sin conocimiento", es) — the old w-20/80px wrapped
                        it to a second line and knocked the row out of alignment. */}
                    <span className="shrink-0 text-xs w-32 text-right whitespace-nowrap" style={{ color: MATURITY_LEVELS[lvl].color }}>
                      <span className="font-mono">L{lvl}</span>{tgt > 0 ? <span className="font-mono" style={{ color: "var(--color-text-muted)" }}> →L{tgt}</span> : <span style={{ color: "var(--color-text-muted)" }}> {MATURITY_LEVELS[lvl].label}</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Prioritised actions */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-lg font-bold" style={{ color: "var(--color-text)" }}>
              {filtered.length === 1
                ? t("res_recommendedOne", { n: filtered.length })
                : t("res_recommendedMany", { n: filtered.length })}
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: t("res_filterAll") },
                { key: "quick-wins", label: t("res_filterQuick") },
                { key: "high-impact", label: t("res_filterHigh") },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  style={{
                    background: filter === f.key ? "var(--color-accent)" : "var(--color-surface)",
                    color: filter === f.key ? "var(--color-bg)" : "var(--color-text-muted)",
                    border: `1px solid ${filter === f.key ? "var(--color-accent)" : "var(--color-border)"}`,
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-sm" style={{ color: "var(--color-text-muted)" }}>
              {t("res_noMatch")}
            </div>
          ) : (
            filtered.map((action, i) => <ActionCard key={`${action.commitment}-${action.title}`} action={action} index={i} level={levels[action.commitment] ?? 0} />)
          )}
        </div>

        {/* CTA to the written report */}
        <div className="rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            <strong style={{ color: "var(--color-text)" }}>{t("res_ctaNext")}</strong> {t("res_ctaBody")}
          </p>
          <Link to="/report" className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-80" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
            {t("res_generateReport")}
          </Link>
        </div>
      </div>

      {/* ===================== One-page report (print only) ===================== */}
      <div className="print-report" style={{ display: "none" }}>
        <div style={{ marginBottom: "12px" }}>
          <h1 style={{ fontSize: "18px", fontWeight: 700, margin: 0 }}>{t("print_title")}</h1>
          <p style={{ fontSize: "11px", color: "#444", margin: "2px 0 0" }}>
            {t("print_meta", { inst: institutionName || t("unknownInst"), date: reportDate, answered: answeredCount, total: dataset.QUESTIONS.length })}
          </p>
          <p style={{ fontSize: "10px", color: "#666", margin: "2px 0 0" }}>
            {t("print_respondents", { list: respondentList })}
          </p>
          {planIsTuned && (
            <p style={{ fontSize: "10px", color: "#666", margin: "2px 0 0" }}>
              {t("print_planPrefix")} {HORIZON_LABELS[plan.horizon]}
              {plan.context !== "all" ? ` · ${contextLabel}` : ""}
              {plan.focusCommitments.length > 0 ? ` · ${t("res_focus", { list: focusList })}` : ""}
              {hasTargets ? ` · ${t("res_ambitionSet")}` : ""}
              {!plan.includeHighEffort ? ` · ${t("res_highHidden")}` : ""}
            </p>
          )}
        </div>

        <div className="print-card" style={{ borderRadius: "6px", padding: "8px 10px", marginBottom: "10px" }}>
          <strong style={{ fontSize: "12px" }}>{t("print_overall")} </strong>
          <span style={{ fontSize: "12px" }}>{t("print_level", { n: overallLevel, label: MATURITY_LEVELS[overallLevel].label })}</span>
        </div>

        <h2 style={{ fontSize: "13px", fontWeight: 700, margin: "0 0 4px" }}>{t("print_byCommitment")}</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10.5px", marginBottom: "12px" }}>
          <tbody>
            {COMMITMENTS.map((c) => {
              const lvl = levels[c.id] ?? 0;
              const tgt = targets[c.id] ?? 0;
              return (
                <tr key={c.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "3px 6px", fontFamily: "monospace", fontWeight: 700, width: "32px" }}>C{c.number}</td>
                  <td style={{ padding: "3px 6px" }}>{c.title}</td>
                  <td style={{ padding: "3px 6px", textAlign: "right", whiteSpace: "nowrap" }}>
                    L{lvl} · {MATURITY_LEVELS[lvl].label}{tgt > 0 ? ` → L${tgt} (${MATURITY_LEVELS[tgt].label})` : ""}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h2 style={{ fontSize: "13px", fontWeight: 700, margin: "0 0 4px" }}>{t("print_priorityActions")}</h2>
        <ol style={{ margin: 0, paddingLeft: "16px" }}>
          {topActions.map((a) => {
            const c = COMMITMENTS.find((x) => x.id === a.commitment);
            return (
              <li key={`${a.commitment}-${a.title}`} style={{ fontSize: "10.5px", marginBottom: "5px" }}>
                <strong>{a.title}</strong>{" "}
                <span style={{ color: "#444" }}>
                  (C{c.number} · {t("effortLabel").toLowerCase()} {t(`effort_${a.effort}`)} · {t("impactLabel").toLowerCase()} {t(`impact_${a.impact}`)} · L{levels[a.commitment] ?? 0}→L{a.toLevel})
                </span>
                <div style={{ color: "#333" }}>{a.description}</div>
              </li>
            );
          })}
        </ol>

        <p style={{ fontSize: "9px", color: "#666", marginTop: "12px" }}>
          {t("print_footer")}
        </p>
      </div>
    </div>
  );
}
