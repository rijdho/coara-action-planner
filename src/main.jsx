import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, useLocation, NavLink } from "react-router-dom";
import StartPage from "./pages/StartPage";
import AssessmentPage from "./pages/AssessmentPage";
import PlanPage from "./pages/PlanPage";
import ResultsPage from "./pages/ResultsPage";
import ReportPage from "./pages/ReportPage";
import { LanguageProvider, useLang } from "./i18n/context";
import "./index.css";

function useTheme() {
  // Share the theme preference with the rest of the suite.
  const [theme, setTheme] = useState(() => localStorage.getItem("ra-theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ra-theme", theme);
  }, [theme]);
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

const STEPS = [
  { to: "/", key: "tab_start", end: true },
  { to: "/questionnaire", key: "tab_questionnaire" },
  { to: "/plan", key: "tab_plan" },
  { to: "/results", key: "tab_results" },
  { to: "/report", key: "tab_report" },
];

const SunIcon = () => (
  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
);
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" strokeLinecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
);

function Rail({ onNavigate }) {
  const { t } = useLang();
  return (
    <aside className="rail">
      <div className="brand-mark">
        <div className="brand-glyph" aria-hidden="true" />
        <div>
          <div className="brand-name">{t("brandApp")}</div>
          <div className="brand-sub">rijdho.github.io</div>
        </div>
      </div>
      <div className="nav-label">{t("nav_steps")}</div>
      <nav>
        {STEPS.map((step, i) => (
          <NavLink
            key={step.to}
            to={step.to}
            end={step.end}
            className="nav-item"
            onClick={onNavigate}
          >
            <span className="nav-step">{i + 1}</span>
            {t(step.key)}
          </NavLink>
        ))}
      </nav>
      <div className="rail-foot">
        {t("footer")}
        <br />
        <a href="https://rijdho.github.io" target="_blank" rel="noopener noreferrer">@rijdho</a>
        <br />
        <a href="https://doi.org/10.5281/zenodo.21492548" target="_blank" rel="noopener noreferrer" title="Cite this tool">
          DOI 10.5281/zenodo.21492548
        </a>
      </div>
    </aside>
  );
}

function CommandBar({ theme, toggleTheme, onMenu }) {
  const { t, lang, setLang, langs } = useLang();
  const { pathname } = useLocation();
  const current = STEPS.find((s) => (s.end ? pathname === s.to : pathname.startsWith(s.to)));
  const idx = current ? STEPS.indexOf(current) : 0;

  return (
    <div className="cmdbar no-print">
      <button className="menu-btn" onClick={onMenu} aria-label={t("nav_menu")}><MenuIcon /></button>
      <div className="cmd-title">
        <span style={{ color: "var(--muted)" }}>{`0${idx + 1}`.slice(-2)}</span>
        <span className="sep">/</span>
        {t(current ? current.key : "tab_start")}
      </div>
      <div className="cmd-spacer" />
      <div className="langs" role="group" aria-label={t("langLabel")}>
        {langs.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-current={l.code === lang}
            title={l.label}
          >
            {l.code.toUpperCase()}
          </button>
        ))}
      </div>
      <a
        href="https://github.com/rijdho/coara-action-planner"
        target="_blank"
        rel="noopener noreferrer"
        className="ghost-btn"
        title={t("sourceTitle")}
      >
        {t("source")}
      </a>
      <button className="icon-btn" onClick={toggleTheme} title={theme === "dark" ? t("themeToLight") : t("themeToDark")} aria-label={theme === "dark" ? t("themeToLight") : t("themeToDark")}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}

function Shell() {
  const { theme, toggle } = useTheme();
  const [railOpen, setRailOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile rail whenever the route changes.
  useEffect(() => setRailOpen(false), [pathname]);

  return (
    <div className={`app${railOpen ? " rail-open" : ""}`}>
      <Rail onNavigate={() => setRailOpen(false)} />
      {railOpen && <button className="rail-backdrop no-print" aria-label="Close menu" onClick={() => setRailOpen(false)} />}
      <div className="main-col">
        <CommandBar theme={theme} toggleTheme={toggle} onMenu={() => setRailOpen(true)} />
        <main className="content">
          <div className="content-inner">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/questionnaire" element={<AssessmentPage />} />
              <Route path="/plan" element={<PlanPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/report" element={<ReportPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);
