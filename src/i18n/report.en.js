/**
 * English strings for the generated CoARA action-plan narrative (lib/report.js).
 * Other languages overlay this via src/data/i18n/<lang>.js → `report`; any
 * missing key falls back to English. `{placeholders}` are filled at build time.
 * Bracketed [fields] are deliberate blanks for the institution to complete and
 * must be kept verbatim in every language.
 */
export const REPORT_EN = {
  docTitle: "{inst} — Research Assessment Reform Action Plan",
  subtitle: "Aligned with the CoARA Agreement on Reforming Research Assessment · {date}",

  h_intro: "Introduction",
  intro1:
    "In [month year], {inst} signed the Agreement on Reforming Research Assessment (CoARA) and commits to reforming how it evaluates research, researchers, and research-performing units. We recognise that responsible assessment is a governance choice: it allocates prestige, resources, and legitimacy, and it must reward the full diversity of scholarly contributions.",
  intro2:
    "This plan was informed by a structured self-assessment across the ten CoARA commitments. It sets out our current baseline, our priorities, and the concrete actions we will take, together with the units responsible, indicative timeframes, and the milestones against which we will judge progress.",

  respondentSingle:
    "This self-assessment was completed from the perspective of the {role}, and should be read with that vantage point in mind.",
  respondentMulti:
    "This self-assessment consolidates {n} perspectives ({roles}). Bringing several vantage points together gives a fuller, more honest picture of where the institution stands and where readings of progress differ.",

  h_baseline: "1. Baseline self-assessment",
  overall: "Overall maturity: Level {level} — {label}.",
  established: "Established (Level 4–5):",
  developing: "Developing (Level 2–3):",
  gaps: "Priority gaps (Level 0–1):",
  baselineClose:
    "These results give a shared, evidence-based picture of where {inst} stands today and frame the priorities below. [Optionally add 1–2 sentences of local narrative: recent initiatives, drivers, or constraints.]",

  h_priorities: "2. Strategic priorities",
  prioritiesFocus: "Over {tf}, {inst} will concentrate its reform effort on: {focus}.",
  prioritiesGaps:
    "Over {tf}, {inst} will concentrate its reform effort on closing the priority gaps identified above.",
  ambitionLine:
    "Within this horizon, {inst} aims to advance specific commitments to declared target maturity levels: {targets}.",
  targetLevelShort: "Level {level} ({label})",
  contestedNote:
    "Internal readings of progress diverge most on {contested}; these are prioritised for early alignment, so that the institution agrees on where it actually stands before acting.",

  h_actions: "3. Planned actions",
  actionsIntro:
    "The actions below are prioritised by the size of each gap and their expected impact{focusClause}. Bracketed fields are for the responsible unit to complete.",
  actionsFocusClause: ", with additional weight on our priority commitments",
  actionHeading: "C{num}. {title} — current Level {lvl} ({label})",
  actionLabel: "Action:",
  // Describes what THIS ACTION delivers, from the commitment's current level.
  // Not the institution's ambition — that lives in `ambitionLine` (§2).
  targetLabel: "Progression:",
  targetValue: "Level {from} → {to} · effort {effort} · expected impact {impact}",
  referenceLabel: "Reference practice:",
  responsibleLabel: "Responsible:",
  responsiblePlaceholder: "[e.g. CoARA Working Group / Vice-Rector for Research / relevant office]",
  timeframeLabel: "Timeframe:",
  timeframePlaceholder: "[Year 1 / Q_ 20__ / ongoing]",
  indicatorLabel: "Indicator / milestone:",
  indicatorPlaceholder: "[observable output, e.g. revised criteria approved]",
  noActions:
    "No actions were recommended — your maturity is already high across the assessed commitments. Focus on the embedding and monitoring activities described below.",

  h_resources: "4. Resources (CoARA Commitment 5)",
  resourcesBody:
    "{inst} will commit the resources needed to deliver this plan: [budget line], [dedicated staff time / coordinator], [training for evaluation committees], and [infrastructure for tracking diverse outputs]. A [named committee / office] will coordinate implementation.",

  h_awareness: "5. Awareness, guidance & exchange (CoARA Commitments 7–8)",
  awarenessBody:
    "We will raise awareness internally and publish accessible guidance on the reformed criteria and their responsible use. {inst} will exchange practices with peer institutions — through [CoARA Working Groups / national chapter / regional forum] — recognising that organisations are at different points along the way.",

  h_monitoring: "6. Monitoring, evaluation & communicating progress (CoARA Commitments 9–10)",
  monitoringBody:
    "Progress will be reviewed [annually], using transparent indicators such as the share of evaluation processes reformed, the number of evaluators trained, and the removal of inappropriate journal- and publication-based metrics. We will communicate progress openly, primarily through publicly shared self-assessment as foreseen by the Agreement, basing evaluation on evidence and open data.",

  h_ongoing: "Ongoing commitment",
  ongoingBody:
    "{inst} treats research-assessment reform as iterative. This plan will be revisited [annually] and updated as criteria are piloted, evaluated, and embedded across all evaluation processes.",

  footer:
    "Draft generated with CoARA Action Planner (rijdho.github.io/coara-action-planner, DOI 10.5281/zenodo.21492548) from a self-assessment of the ten CoARA commitments. Edit freely before adoption.",

  // horizon timeframe phrases (fill {tf})
  tf_quickwins: "the coming 12 months",
  tf_balanced: "the next two to three years",
  tf_structural: "a three- to five-year horizon",

  // horizon sentences
  hs_quickwins:
    "Given current capacity, we begin with low-effort, high-leverage actions that can be initiated immediately and build momentum for deeper change.",
  hs_balanced:
    "We pursue a balanced mix of early wins and more substantial reforms, sequenced by the size of each gap and its expected impact.",
  hs_structural:
    "We are prepared to undertake ambitious, structural reform — revising criteria and processes system-wide — even where this requires sustained effort and resources.",

  // context sentences (appended to intro1; leading space intentional)
  cs_globalnorth:
    " As a resource-rich institution embedded in established research-assessment networks, we aim to lead by example and to publish our reformed criteria openly.",
  cs_globalsouth:
    " We pursue reform with attention to resource-constrained realities: lightweight and interoperable tooling, engagement with regional forums (IRAF, AFRA, AOSP), and the protection of local-language scholarship.",
  cs_indigenous:
    " Our approach centres CARE principles and community data governance, ensuring that assessment reform respects collective benefit, authority to control, and Indigenous knowledge systems.",
  cs_multiregional:
    " Operating across borders, we favour federated and interoperable models and remain attentive to international asymmetries when reforming evaluation unilaterally.",
  cs_funder:
    " As a research funding organisation, we concentrate on incentive design, call and review criteria, reviewer guidance, and alignment with national and international assessment frameworks.",

  // effort / impact words used inside the narrative
  effort_low: "low",
  effort_medium: "medium",
  effort_high: "high",
  impact_low: "low",
  impact_medium: "medium",
  impact_high: "high",
};
