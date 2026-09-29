import { useLang } from "../i18n/context";
import { interpolate } from "../i18n/registry";
import { ACTIONS } from "../data/actions";
import { QUESTIONS } from "../data/questions";
import { PLANS_READ, READING } from "../data/uptake";

const REPO = "https://github.com/rijdho/coara-action-planner";
const DOI = "10.5281/zenodo.21492548";

// Where the tool comes from, for a visitor who never sees the README. Every number is read from
// the data the tool itself uses, so this page cannot drift from what Results shows.
export default function AboutPage() {
  const { t, lang } = useLang();
  const n = {
    plans: PLANS_READ,
    questions: QUESTIONS.length,
    actions: ACTIONS.length,
    extracted: READING.extracted.toLocaleString(lang),
    kept: READING.kept.toLocaleString(lang),
    ccby: READING.licences["cc-by-4.0"] ?? 0,
  };
  const Section = ({ title, children }) => (
    <section className="space-y-2">
      <h2 className="text-base font-semibold" style={{ color: "var(--color-text)" }}>{title}</h2>
      {children}
    </section>
  );
  const P = ({ k }) => <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{interpolate(t(k), n)}</p>;

  return (
    <div className="fade-in space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>{t("about_title")}</h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{interpolate(t("about_lede"), n)}</p>
      </div>
      <Section title={t("about_h_sources")}>
        <P k="about_sources_1" />
        <P k="about_sources_2" />
        <P k="about_sources_3" />
      </Section>
      <Section title={t("about_h_output")}>
        <P k="about_output" />
      </Section>
      <Section title={t("about_h_limits")}>
        <P k="about_limits" />
      </Section>
      <Section title={t("about_h_more")}>
        <P k="about_more" />
        <p className="text-sm">
          <a href={`${REPO}/tree/main/corpus`} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-accent)" }}>{t("about_link_method")}</a>
          {" · "}
          <a href={`https://doi.org/${DOI}`} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-accent)" }}>DOI {DOI}</a>
        </p>
      </Section>
    </div>
  );
}
