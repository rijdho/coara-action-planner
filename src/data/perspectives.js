/**
 * Respondent roles — the "who is giving this info" framing (lite-only).
 *
 * A self-assessment reads differently depending on who fills it out: leadership
 * tends to be more optimistic than the researchers being assessed. Tagging each
 * perspective with a role lets the Results/Report surface whose view this is, and
 * lets several views be compared (the "perception gap").
 *
 * The roles mirror who actually authors the real CoARA action plans in the Zenodo
 * `coara_action_plans` corpus: dedicated working groups, research/open-science
 * offices, senior leadership, the institution itself, and funders.
 *
 * English is canonical; labels/hints are localised via the `roles` overlay in
 * src/data/i18n/<lang>.js (merged by id in src/i18n/registry.js, English fallback).
 */
export const ROLES = [
  { id: "unspecified", label: "Unspecified", hint: "General / prefer not to say." },
  { id: "leadership", label: "Senior leadership", hint: "Rectorate, vice-rector for research, governing board." },
  { id: "research-office", label: "Research office / support", hint: "Research services, RRA or open-science office." },
  { id: "working-group", label: "Reform working group", hint: "Dedicated CoARA / assessment-reform task force." },
  { id: "researcher", label: "Researcher / academic staff", hint: "Faculty, postdocs — those being assessed." },
  { id: "hr-career", label: "HR & career development", hint: "Recruitment, promotion and appraisal owners." },
  { id: "library-os", label: "Library / Open Science", hint: "Repository, FAIR data, scholarly communication." },
  { id: "evaluation-committee", label: "Evaluation / quality committee", hint: "Panels that run assessment processes." },
  { id: "funder", label: "Funder / RFO", hint: "Funding organisation designing calls and criteria." },
  { id: "external", label: "External reviewer / consultant", hint: "Outside view — peer institution or auditor." },
];

export const ROLE_IDS = ROLES.map((r) => r.id);

/**
 * Weight each role carries when several perspectives are averaged into the
 * consolidated profile (see getConsolidatedLevels). Those who are *assessed*
 * (researchers) weigh most — their lived experience of the system is the ground
 * truth; senior leadership weighs a little less, as self-reports from the top
 * tend toward optimism. Everyone else is neutral. A missing role defaults to 1.
 */
export const ROLE_WEIGHTS = {
  researcher: 1.5,
  "evaluation-committee": 1.2,
  unspecified: 1,
  "research-office": 1,
  "working-group": 1,
  "hr-career": 1,
  "library-os": 1,
  funder: 1,
  external: 1,
  leadership: 0.8,
};
