import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import MaturityBadge from "../components/MaturityBadge";
import MaturityRadar from "../components/MaturityRadar";
import { useLang } from "../i18n/context";
import {
  getAnswers, saveAnswers, saveLevels, computeLevels, getActivePerspective,
} from "../lib/storage";

function QuestionCard({ question, value, onChange, levelsData }) {
  return (
    <div className="rounded-lg p-4 space-y-3" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
      <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
        {question.text}
      </p>
      <div className="space-y-1.5">
        {question.answers.map((ans) => {
          const isSelected = value === ans.level;
          const lvl = levelsData[ans.level];
          return (
            <button
              key={ans.level}
              onClick={() => onChange(ans.level)}
              className="w-full text-left flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all"
              style={{
                background: isSelected ? `${lvl.color}15` : "transparent",
                border: `1px solid ${isSelected ? lvl.color : "transparent"}`,
                color: isSelected ? lvl.color : "var(--color-text-muted)",
              }}
            >
              <span
                className="shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs"
                style={{
                  borderColor: isSelected ? lvl.color : "var(--color-border)",
                  background: isSelected ? lvl.color : "transparent",
                  color: isSelected ? "var(--color-bg)" : "transparent",
                }}
              >
                {isSelected ? "✓" : ""}
              </span>
              <span className="flex-1">{ans.text}</span>
              <span className="shrink-0 text-xs font-mono" style={{ color: lvl.color }}>
                L{ans.level}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function AssessmentPage() {
  const navigate = useNavigate();
  const { t, dataset } = useLang();
  const { COMMITMENTS, MATURITY_LEVELS, QUESTIONS, ROLES } = dataset;
  const [answers, setAnswers] = useState({});
  const [activeRole, setActiveRole] = useState("unspecified");
  const [activeCommitment, setActiveCommitment] = useState("diversity");

  useEffect(() => {
    setAnswers(getActivePerspective()?.answers ?? {});
    setActiveRole(getActivePerspective()?.role ?? "unspecified");
  }, []);

  const roleLabel = ROLES.find((r) => r.id === activeRole)?.label ?? activeRole;

  const handleAnswer = (qId, commitment, level) => {
    const next = { ...answers, [qId]: { commitment, level } };
    setAnswers(next);
    saveAnswers(next);
  };

  const levels = useMemo(() => {
    const result = computeLevels(answers);
    if (Object.keys(result).length > 0) saveLevels(result);
    return result;
  }, [answers]);

  const answeredCount = Object.keys(answers).length;
  const totalCount = QUESTIONS.length;
  const progress = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0;
  const overallLevel =
    Object.keys(levels).length > 0
      ? Math.round(Object.values(levels).reduce((a, b) => a + b, 0) / Object.keys(levels).length)
      : null;

  const activeC = COMMITMENTS.find((c) => c.id === activeCommitment);
  const activeQuestions = QUESTIONS.filter((q) => q.commitment === activeCommitment);

  return (
    <div className="fade-in space-y-6">
      {/* Intro */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
            {t("asmt_title")}
          </h1>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            {t("asmt_intro")}
          </p>
        </div>
        <div className="shrink-0 rounded-lg px-3 py-1.5 text-xs flex items-center gap-2" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <span style={{ color: "var(--color-text-muted)" }}>{t("asmt_answeringAs", { role: roleLabel })}</span>
          <Link to="/" className="font-semibold hover:underline" style={{ color: "var(--color-accent)" }}>{t("asmt_switchPerspective")}</Link>
        </div>
      </div>

      {/* Progress bar */}
      <div className="rounded-xl p-4" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
            {t("asmt_progress", { answered: answeredCount, total: totalCount })}
          </span>
          <span className="text-sm font-mono" style={{ color: "var(--color-accent)" }}>{progress}%</span>
        </div>
        <div className="h-2 rounded-full" style={{ background: "var(--color-bg)" }}>
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: progress === 100 ? "var(--color-level-5)" : "var(--color-accent)" }}
          />
        </div>
        {overallLevel !== null && (
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>{t("asmt_overall")}</span>
              <MaturityBadge level={overallLevel} size="sm" />
            </div>
            <button
              onClick={() => navigate("/plan")}
              className="text-xs font-semibold px-3 py-1 rounded-lg transition-colors hover:opacity-80"
              style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}
            >
              {t("asmt_next")}
            </button>
          </div>
        )}
      </div>

      {/* Sidebar + questions + radar (same layout as the full app) */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Commitment selector */}
        <div className="lg:col-span-3 space-y-1">
          {COMMITMENTS.map((c) => {
            const isActive = activeCommitment === c.id;
            const qs = QUESTIONS.filter((q) => q.commitment === c.id);
            const answered = qs.filter((q) => answers[q.id]).length;
            const level = levels[c.id];
            return (
              <button
                key={c.id}
                onClick={() => setActiveCommitment(c.id)}
                className="w-full text-left rounded-lg px-3 py-2 transition-all flex items-center gap-2"
                style={{
                  background: isActive ? "var(--color-surface-alt)" : "transparent",
                  border: `1px solid ${isActive ? "var(--color-accent)" : "transparent"}`,
                }}
              >
                <span className="shrink-0 text-xs font-mono w-7 text-center font-bold" style={{ color: c.type === "core" ? "var(--color-accent)" : "var(--color-text-muted)" }}>
                  C{c.number}
                </span>
                <span className="flex-1 text-xs truncate" style={{ color: "var(--color-text)" }}>{c.title}</span>
                <span className="shrink-0 text-xs" style={{ color: "var(--color-text-muted)" }}>{answered}/{qs.length}</span>
                {level !== undefined && (
                  <span className="shrink-0 w-2 h-2 rounded-full" style={{ background: MATURITY_LEVELS[level].color }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Questions */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-mono px-2 py-0.5 rounded font-bold"
              style={{
                background: activeC.type === "core" ? "var(--color-accent)20" : "var(--color-surface-alt)",
                color: activeC.type === "core" ? "var(--color-accent)" : "var(--color-text-muted)",
              }}
            >
              C{activeC.number} &middot; {activeC.type === "core" ? t("typeCore") : t("typeSupporting")}
            </span>
            <h2 className="text-base font-semibold" style={{ color: "var(--color-text)" }}>{activeC.title}</h2>
          </div>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{activeC.text}</p>
          <div className="space-y-3">
            {activeQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                value={answers[q.id]?.level}
                onChange={(level) => handleAnswer(q.id, q.commitment, level)}
                levelsData={MATURITY_LEVELS}
              />
            ))}
          </div>
          {/* In practice */}
          <div className="rounded-lg p-4" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <h3 className="text-xs font-semibold mb-2" style={{ color: "var(--color-accent)" }}>{t("asmt_inPractice")}</h3>
            <ul className="space-y-1">
              {activeC.inPractice.map((item, i) => (
                <li key={i} className="text-xs flex gap-2" style={{ color: "var(--color-text-muted)" }}>
                  <span style={{ color: "var(--color-accent)" }}>&bull;</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Radar preview */}
        <div className="lg:col-span-4">
          <div className="rounded-xl p-4 sticky top-24" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>{t("asmt_maturityProfile")}</h3>
            {Object.keys(levels).length > 0 ? (
              <MaturityRadar levels={levels} exportable={false} />
            ) : (
              <div className="h-64 flex items-center justify-center text-sm text-center" style={{ color: "var(--color-text-muted)" }}>
                {t("asmt_radarEmpty")}
              </div>
            )}
            {Object.keys(levels).length > 0 && (
              <button
                onClick={() => navigate("/plan")}
                className="mt-2 w-full text-xs font-semibold py-2 rounded-lg transition-colors hover:opacity-80"
                style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}
              >
                {t("asmt_next")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
