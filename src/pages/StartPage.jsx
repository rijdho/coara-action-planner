import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../i18n/context";
import {
  getInstitutionName, saveInstitutionName,
  getPerspectives, getActivePerspectiveId, setActivePerspectiveId,
  addPerspective, removePerspective, setPerspectiveRole,
  exportConfig, importConfig, parseConfigFromText, clearAll,
} from "../lib/storage";

function Lens({ badge, title, desc }) {
  return (
    <div className="rounded-lg p-4" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
      <div className="text-xs font-mono font-bold mb-1" style={{ color: "var(--color-accent)" }}>{badge}</div>
      <div className="text-sm font-semibold mb-0.5" style={{ color: "var(--color-text)" }}>{title}</div>
      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{desc}</p>
    </div>
  );
}

export default function StartPage() {
  const navigate = useNavigate();
  const { t, dataset } = useLang();
  const { ROLES, QUESTIONS } = dataset;
  const totalQ = QUESTIONS.length;

  const [instName, setInstName] = useState("");
  const [perspectives, setPerspectives] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [cfgMsg, setCfgMsg] = useState(null);
  const fileRef = useRef(null);

  const refresh = () => {
    setPerspectives(getPerspectives());
    setActiveId(getActivePerspectiveId());
  };

  const slug = (s) => (s || "institution").replace(/\s+/g, "-").toLowerCase();

  const handleSaveConfig = () => {
    const blob = new Blob([JSON.stringify(exportConfig(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reform-lite-config-${slug(getInstitutionName())}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (!window.confirm(t("reset_confirm"))) return;
    clearAll();
    // Hard reload so every tab's in-memory state resets to a clean slate.
    window.location.reload();
  };

  const handleLoadConfig = (e) => {
    const file = e.target.files?.[0];
    e.target.value = ""; // let the same file be picked again later
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const raw = reader.result;
      // Accept either a config JSON file, or a report file (.md/.txt) that carries
      // the config embedded as a trailing HTML comment.
      let obj = null;
      try {
        const j = JSON.parse(raw);
        if (j && typeof j === "object") obj = j;
      } catch { /* not JSON — try embedded */ }
      if (!obj) obj = parseConfigFromText(raw);
      if (!obj) { setCfgMsg({ ok: false, text: t("cfg_loadError", { msg: "no configuration found" }) }); return; }
      const res = importConfig(obj);
      if (res.ok) {
        setInstName(getInstitutionName());
        refresh();
        setCfgMsg({ ok: true, text: t("cfg_loaded") });
      } else {
        setCfgMsg({ ok: false, text: t("cfg_loadError", { msg: res.error }) });
      }
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    setInstName(getInstitutionName());
    refresh();
  }, []);

  const roleLabel = (id) => ROLES.find((r) => r.id === id)?.label ?? id;

  const handleAdd = () => { addPerspective("unspecified"); refresh(); };
  const handleRemove = (id) => { removePerspective(id); refresh(); };
  const handleRole = (id, role) => { setPerspectiveRole(id, role); refresh(); };
  const handleActivate = (id) => { setActivePerspectiveId(id); refresh(); };
  const answerAs = (id) => { setActivePerspectiveId(id); navigate("/questionnaire"); };

  return (
    <div className="fade-in space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>{t("start_title")}</h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{t("start_intro")}</p>
      </div>

      {/* The three lenses */}
      <div className="rounded-xl p-5 space-y-3" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
        <h2 className="text-base font-semibold" style={{ color: "var(--color-text)" }}>{t("start_lensesTitle")}</h2>
        <div className="grid sm:grid-cols-3 gap-2">
          <Lens badge="①" title={t("start_lens_now")} desc={t("start_lens_now_desc")} />
          <Lens badge="②" title={t("start_lens_goal")} desc={t("start_lens_goal_desc")} />
          <Lens badge="③" title={t("start_lens_who")} desc={t("start_lens_who_desc")} />
        </div>
      </div>

      {/* Institution */}
      <div className="rounded-xl p-5 space-y-3" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
        <div>
          <h2 className="text-base font-semibold" style={{ color: "var(--color-text)" }}>{t("start_instTitle")}</h2>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{t("start_instHint")}</p>
        </div>
        <input
          type="text"
          placeholder={t("start_instPlaceholder")}
          value={instName}
          onChange={(e) => { setInstName(e.target.value); saveInstitutionName(e.target.value); }}
          className="w-full sm:max-w-md rounded-lg px-3 py-1.5 text-sm"
          style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", color: "var(--color-text)" }}
        />
      </div>

      {/* Perspectives */}
      <div className="rounded-xl p-5 space-y-4" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
        <div>
          <h2 className="text-base font-semibold" style={{ color: "var(--color-text)" }}>{t("start_perspectivesTitle")}</h2>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{t("start_perspectivesHint")}</p>
        </div>

        <div className="space-y-2">
          {perspectives.map((p, i) => {
            const isActive = p.id === activeId;
            const answered = Object.keys(p.answers || {}).length;
            return (
              <div
                key={p.id}
                className="rounded-lg p-3 flex flex-col sm:flex-row sm:items-center gap-3"
                style={{
                  background: isActive ? "var(--color-accent)10" : "var(--color-bg)",
                  border: `1px solid ${isActive ? "var(--color-accent)" : "var(--color-border)"}`,
                }}
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-mono font-bold" style={{ color: "var(--color-text-muted)" }}>
                    {t("start_perspectiveN", { n: i + 1 })}
                  </span>
                  {isActive && (
                    <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
                      {t("start_active")}
                    </span>
                  )}
                </div>

                <label className="flex items-center gap-1.5 flex-1 min-w-0">
                  <span className="sr-only">{t("start_roleLabel")}</span>
                  <select
                    value={p.role}
                    onChange={(e) => handleRole(p.id, e.target.value)}
                    className="text-sm rounded-lg px-2 py-1 cursor-pointer w-full sm:w-auto"
                    style={{ background: "var(--color-surface-alt)", color: "var(--color-text)", border: "1px solid var(--color-border)" }}
                  >
                    {ROLES.map((r) => (
                      <option key={r.id} value={r.id}>{r.label}</option>
                    ))}
                  </select>
                </label>

                <span className="text-xs shrink-0" style={{ color: "var(--color-text-muted)" }}>
                  {t("start_completion", { answered, total: totalQ })}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  {!isActive && (
                    <button onClick={() => handleActivate(p.id)} className="text-xs font-semibold hover:underline" style={{ color: "var(--color-accent)" }}>
                      {t("start_setActive")}
                    </button>
                  )}
                  <button
                    onClick={() => answerAs(p.id)}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg hover:opacity-80"
                    style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}
                  >
                    {t("start_answerAs")}
                  </button>
                  {perspectives.length > 1 && (
                    <button onClick={() => handleRemove(p.id)} className="text-xs hover:underline" style={{ color: "var(--color-text-muted)" }} title={t("start_remove")}>
                      ✕
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={handleAdd} className="text-sm font-semibold hover:underline" style={{ color: "var(--color-accent)" }}>
          {t("start_addPerspective")}
        </button>
        {perspectives.length > 1 && (
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{t("start_multiNote")}</p>
        )}
      </div>

      {/* Configuration save / load (reproducibility) */}
      <div className="rounded-xl p-5 space-y-3" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
        <div>
          <h2 className="text-base font-semibold" style={{ color: "var(--color-text)" }}>{t("cfg_title")}</h2>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{t("cfg_hint")}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleSaveConfig}
            className="text-sm font-semibold px-3 py-1.5 rounded-lg hover:opacity-80"
            style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}
          >
            {t("cfg_save")}
          </button>
          <button
            onClick={() => fileRef.current?.click()}
            className="text-sm font-semibold px-3 py-1.5 rounded-lg hover:opacity-80"
            style={{ background: "var(--color-surface-alt)", color: "var(--color-text)", border: "1px solid var(--color-border)" }}
          >
            {t("cfg_load")}
          </button>
          <input ref={fileRef} type="file" accept="application/json,.json,.md,.txt,text/markdown,text/plain" onChange={handleLoadConfig} className="hidden" />
          {cfgMsg && (
            <span className="text-xs" style={{ color: cfgMsg.ok ? "var(--color-level-4)" : "var(--color-level-1)" }}>
              {cfgMsg.text}
            </span>
          )}
          <button
            onClick={handleReset}
            className="text-sm font-semibold px-3 py-1.5 rounded-lg hover:opacity-80 ml-auto"
            style={{ background: "transparent", color: "var(--color-level-1)", border: "1px solid var(--color-level-1)" }}
            title={t("reset_confirm")}
          >
            {t("reset_button")}
          </button>
        </div>
        <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{t("reset_hint")}</p>
      </div>

      {/* CTA */}
      <div className="flex justify-end">
        <button onClick={() => navigate("/questionnaire")} className="text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-80" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
          {t("start_cta")}
        </button>
      </div>
    </div>
  );
}
