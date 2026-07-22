import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "../i18n/context";
import {
  getConsolidatedLevels, getPlan, savePlan, DEFAULT_PLAN,
  getTargetLevels, saveTargetLevels,
  getPerspectives, getRoleWeights, saveRoleWeights, resetRoleWeights,
  getDivergenceThreshold, saveDivergenceThreshold,
} from "../lib/storage";

const WEIGHT_OPTIONS = [0, 0.5, 0.8, 1, 1.2, 1.5, 2];
const THRESHOLD_OPTIONS = [1, 2, 3, 4, 5];

function Section({ title, hint, children }) {
  return (
    <div className="rounded-xl p-5 space-y-3" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
      <div>
        <h2 className="text-base font-semibold" style={{ color: "var(--color-text)" }}>{title}</h2>
        {hint && <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{hint}</p>}
      </div>
      {children}
    </div>
  );
}

export default function PlanPage() {
  const navigate = useNavigate();
  const { t, lang, dataset } = useLang();
  const { COMMITMENTS, CONTEXTS, MATURITY_LEVELS, ROLES } = dataset;
  const [plan, setPlan] = useState(DEFAULT_PLAN);
  const [levels, setLevels] = useState({});
  const [targets, setTargets] = useState({});
  const [perspectives, setPerspectives] = useState([]);
  const [roleWeights, setRoleWeights] = useState({});
  const [threshold, setThreshold] = useState(2);
  const [hasAssessment, setHasAssessment] = useState(false);

  const HORIZONS = [
    { id: "quick-wins", label: t("horizon_quickwins_label"), desc: t("horizon_quickwins_desc") },
    { id: "balanced", label: t("horizon_balanced_label"), desc: t("horizon_balanced_desc") },
    { id: "structural", label: t("horizon_structural_label"), desc: t("horizon_structural_desc") },
  ];

  useEffect(() => {
    const consolidated = getConsolidatedLevels();
    setLevels(consolidated);
    setHasAssessment(Object.keys(consolidated).length > 0);
    setPlan(getPlan());
    setTargets(getTargetLevels());
    setPerspectives(getPerspectives());
    setRoleWeights(getRoleWeights());
    setThreshold(getDivergenceThreshold());
  }, []);

  const rolesInUse = [...new Set(perspectives.map((p) => p.role))];
  const roleLabel = (id) => ROLES.find((r) => r.id === id)?.label ?? id;

  const setWeight = (role, value) => {
    const next = { ...roleWeights, [role]: value };
    setRoleWeights(next);
    saveRoleWeights(next);
  };
  const setThresholdValue = (n) => { setThreshold(n); saveDivergenceThreshold(n); };
  const resetWeighting = () => {
    resetRoleWeights();
    saveDivergenceThreshold(2);
    setRoleWeights(getRoleWeights());
    setThreshold(2);
  };

  const update = (patch) => {
    const next = { ...plan, ...patch };
    setPlan(next);
    savePlan(next);
  };

  const setTarget = (commitmentId, value) => {
    const next = { ...targets };
    if (value === 0) delete next[commitmentId];
    else next[commitmentId] = value;
    setTargets(next);
    saveTargetLevels(next);
  };

  const clearTargets = () => { setTargets({}); saveTargetLevels({}); };

  const toggleCommitment = (id) => {
    const set = new Set(plan.focusCommitments);
    if (set.has(id)) set.delete(id);
    else set.add(id);
    update({ focusCommitments: [...set] });
  };

  if (!hasAssessment) {
    return (
      <div className="fade-in text-center py-16 space-y-4">
        <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>{t("plan_emptyTitle")}</h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          {t("plan_emptyBody")}
        </p>
        <Link to="/questionnaire" className="inline-block text-sm font-semibold px-4 py-2 rounded-lg" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
          {t("plan_startQuestionnaire")}
        </Link>
      </div>
    );
  }

  return (
    <div className="fade-in space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>{t("plan_title")}</h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          {t("plan_intro")}
        </p>
      </div>

      {/* 1. Horizon / capacity */}
      <Section title={t("plan_s1_title")} hint={t("plan_s1_hint")}>
        <div className="grid sm:grid-cols-3 gap-2">
          {HORIZONS.map((h) => {
            const active = plan.horizon === h.id;
            return (
              <button
                key={h.id}
                onClick={() => update({ horizon: h.id })}
                className="text-left rounded-lg px-3 py-2.5 transition-all"
                style={{
                  background: active ? "var(--color-accent)15" : "var(--color-bg)",
                  border: `1px solid ${active ? "var(--color-accent)" : "var(--color-border)"}`,
                }}
              >
                <div className="text-sm font-semibold" style={{ color: active ? "var(--color-accent)" : "var(--color-text)" }}>{h.label}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{h.desc}</div>
              </button>
            );
          })}
        </div>
      </Section>

      {/* 2. Institutional context */}
      <Section title={t("plan_s2_title")} hint={t("plan_s2_hint")}>
        <div className="grid sm:grid-cols-2 gap-2">
          {CONTEXTS.map((c) => {
            const active = plan.context === c.id;
            return (
              <button
                key={c.id}
                onClick={() => update({ context: c.id })}
                className="text-left rounded-lg px-3 py-2.5 transition-all"
                style={{
                  background: active ? "var(--color-accent)15" : "var(--color-bg)",
                  border: `1px solid ${active ? "var(--color-accent)" : "var(--color-border)"}`,
                }}
              >
                <div className="text-sm font-semibold" style={{ color: active ? "var(--color-accent)" : "var(--color-text)" }}>{c.label}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{c.description}</div>
              </button>
            );
          })}
        </div>
      </Section>

      {/* 3. Priority commitments */}
      <Section title={t("plan_s3_title")} hint={t("plan_s3_hint")}>
        <div className="flex flex-wrap gap-2">
          {COMMITMENTS.map((c) => {
            const active = plan.focusCommitments.includes(c.id);
            return (
              <button
                key={c.id}
                onClick={() => toggleCommitment(c.id)}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                style={{
                  background: active ? "var(--color-accent)" : "var(--color-bg)",
                  color: active ? "var(--color-bg)" : "var(--color-text-muted)",
                  border: `1px solid ${active ? "var(--color-accent)" : "var(--color-border)"}`,
                }}
                title={c.title}
              >
                <span className="font-mono">C{c.number}</span>
                <span className="hidden sm:inline">{c.title}</span>
              </button>
            );
          })}
        </div>
        {plan.focusCommitments.length > 0 && (
          <button onClick={() => update({ focusCommitments: [] })} className="text-xs hover:underline" style={{ color: "var(--color-text-muted)" }}>
            {t("plan_clear")}
          </button>
        )}
      </Section>

      {/* 4. High-effort toggle */}
      <Section title={t("plan_s4_title")} hint={t("plan_s4_hint")}>
        <button
          onClick={() => update({ includeHighEffort: !plan.includeHighEffort })}
          className="flex items-center gap-3"
        >
          <span
            className="w-10 h-6 rounded-full transition-colors relative shrink-0"
            style={{ background: plan.includeHighEffort ? "var(--color-accent)" : "var(--color-border)" }}
          >
            <span
              className="absolute top-0.5 w-5 h-5 rounded-full transition-all"
              style={{ background: "#fff", left: plan.includeHighEffort ? "1.125rem" : "0.125rem" }}
            />
          </span>
          <span className="text-sm" style={{ color: "var(--color-text)" }}>
            {plan.includeHighEffort ? t("plan_includeHigh") : t("plan_hideHigh")}
          </span>
        </button>
      </Section>

      {/* 5. Ambition — where do you want to be? */}
      <Section title={t("plan_s5_title")} hint={t("plan_s5_hint")}>
        <div className="space-y-1.5">
          {COMMITMENTS.map((c) => {
            const cur = levels[c.id] ?? 0;
            const tgt = targets[c.id] ?? 0;
            const curLvl = MATURITY_LEVELS[cur];
            return (
              <div key={c.id} className="flex items-center gap-3">
                <span className="shrink-0 text-xs font-mono w-7 font-bold" style={{ color: c.type === "core" ? "var(--color-accent)" : "var(--color-text-muted)" }}>C{c.number}</span>
                <span className="flex-1 text-xs truncate" style={{ color: "var(--color-text)" }} title={c.title}>{c.title}</span>
                <span className="shrink-0 text-xs font-mono" style={{ color: curLvl.color }} title={t("plan_ambition_current")}>
                  {t("plan_ambition_now")} L{cur}
                </span>
                <span className="shrink-0 text-xs" style={{ color: "var(--color-text-muted)" }}>→</span>
                <label className="shrink-0 flex items-center gap-1">
                  <span className="sr-only">{t("plan_ambition_target")}</span>
                  <select
                    value={tgt}
                    onChange={(e) => setTarget(c.id, Number(e.target.value))}
                    className="text-xs rounded-lg px-1.5 py-1 cursor-pointer"
                    style={{
                      background: "var(--color-bg)",
                      color: tgt > 0 ? MATURITY_LEVELS[tgt].color : "var(--color-text-muted)",
                      border: `1px solid ${tgt > 0 && tgt > cur ? "var(--color-accent)" : "var(--color-border)"}`,
                    }}
                  >
                    <option value={0}>{t("plan_ambition_notset")}</option>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>L{n} · {MATURITY_LEVELS[n].label}</option>
                    ))}
                  </select>
                </label>
              </div>
            );
          })}
        </div>
        {Object.keys(targets).length > 0 && (
          <button onClick={clearTargets} className="text-xs hover:underline" style={{ color: "var(--color-text-muted)" }}>
            {t("plan_ambition_clear")}
          </button>
        )}
      </Section>

      {/* 6. Perspective weighting & alignment (always shown; inert with a single perspective) */}
      <Section title={t("plan_s6_title")} hint={t("plan_s6_hint")}>
          <div className="space-y-1.5">
            {rolesInUse.map((role) => {
              const w = roleWeights[role] ?? 1;
              return (
                <div key={role} className="flex items-center gap-3">
                  <span className="flex-1 text-xs truncate" style={{ color: "var(--color-text)" }} title={roleLabel(role)}>{roleLabel(role)}</span>
                  <label className="shrink-0 flex items-center gap-1">
                    <span className="sr-only">{t("plan_weight_aria", { role: roleLabel(role) })}</span>
                    <select
                      value={w}
                      onChange={(e) => setWeight(role, Number(e.target.value))}
                      className="text-xs rounded-lg px-1.5 py-1 cursor-pointer font-mono"
                      style={{
                        background: "var(--color-bg)",
                        color: w === 1 ? "var(--color-text-muted)" : "var(--color-accent)",
                        border: `1px solid ${w === 1 ? "var(--color-border)" : "var(--color-accent)"}`,
                      }}
                    >
                      {WEIGHT_OPTIONS.map((o) => (
                        <option key={o} value={o}>×{o.toLocaleString(lang)}</option>
                      ))}
                    </select>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3 pt-1">
            <span className="flex-1 text-xs" style={{ color: "var(--color-text)" }}>{t("plan_threshold_label")}</span>
            <label className="shrink-0 flex items-center gap-1">
              <span className="sr-only">{t("plan_threshold_label")}</span>
              <select
                value={threshold}
                onChange={(e) => setThresholdValue(Number(e.target.value))}
                className="text-xs rounded-lg px-1.5 py-1 cursor-pointer font-mono"
                style={{ background: "var(--color-bg)", color: "var(--color-text)", border: "1px solid var(--color-border)" }}
              >
                {THRESHOLD_OPTIONS.map((n) => (
                  <option key={n} value={n}>≥{n} {t("plan_threshold_suffix")}</option>
                ))}
              </select>
            </label>
          </div>
          <button onClick={resetWeighting} className="text-xs hover:underline" style={{ color: "var(--color-text-muted)" }}>
            {t("plan_weight_reset")}
          </button>
        </Section>

      {/* CTA */}
      <div className="flex justify-end gap-2">
        <Link to="/questionnaire" className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80" style={{ background: "var(--color-surface-alt)", color: "var(--color-text)", border: "1px solid var(--color-border)" }}>
          {t("plan_back")}
        </Link>
        <button onClick={() => navigate("/results")} className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
          {t("plan_view")}
        </button>
      </div>
    </div>
  );
}
