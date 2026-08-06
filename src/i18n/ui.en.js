/**
 * English UI strings — the reference set. Other languages overlay this object
 * (see src/data/i18n/<lang>.js → `ui`); any missing key falls back to English.
 * `{placeholders}` are filled by interpolate() at render time.
 */
export const UI_EN = {
  // header / nav
  brandApp: "CoARA Action Planner",
  source: "Source",
  sourceTitle: "View the source and the calibration on GitHub",
  tab_start: "Start",
  tab_questionnaire: "Questionnaire",
  tab_plan: "Plan",
  tab_results: "Results",
  tab_report: "Report",
  themeToLight: "Switch to light mode",
  themeToDark: "Switch to dark mode",
  langLabel: "Language",
  nav_steps: "Steps",
  nav_menu: "Menu",
  footer: "For questions about data usage or attribution:",

  // commitment type
  typeCore: "core",
  typeSupporting: "supporting",

  // effort / impact values + labels
  effort_low: "low",
  effort_medium: "medium",
  effort_high: "high",
  impact_low: "low",
  impact_medium: "medium",
  impact_high: "high",
  effortLabel: "Effort",
  impactLabel: "Impact",

  // Start page
  start_title: "Before you begin",
  start_intro:
    "This tool looks at reform from three angles. Set them up here, then move through the tabs. Everything is saved locally in your browser.",
  start_lensesTitle: "Three lenses",
  start_lens_now: "① Where are we now",
  start_lens_now_desc:
    "The questionnaire measures your current maturity on each CoARA commitment — the status quo, honestly assessed.",
  start_lens_goal: "② Where we want to be",
  start_lens_goal_desc:
    "In the Plan tab you set a target maturity per commitment. The gap between now and target is what your action plan closes.",
  start_lens_who: "③ Who is giving this info",
  start_lens_who_desc:
    "Tag who is answering. Add more than one perspective (e.g. leadership and researchers) to see where readings diverge.",
  start_instTitle: "Institution",
  start_instHint: "Used in the report and exports. Optional.",
  start_instPlaceholder: "Institution name (optional)",
  start_perspectivesTitle: "Perspectives",
  start_perspectivesHint:
    "Each perspective is one respondent's view, tagged with their role. Everyone answers the same 24 questions — you fill them in once per perspective, from that vantage point. Results consolidates the perspectives and flags where their readings of the same question diverge (the perception gap).",
  start_perspectivesEyebrow: "What this does that a guide cannot",
  start_perspectivesWhy:
    "A plan drafted by one office reflects one vantage point. Ask leadership, the research office and researchers the same 24 questions and the disagreement itself becomes evidence — Results flags every commitment where readings differ by two levels or more, and those are the ones to align on before writing anything.",
  start_quickStart: "Set up a group assessment:",
  start_quickStartAdd: "+ {role}",
  start_perspectiveN: "Perspective {n}",
  start_roleLabel: "Respondent role",
  start_active: "active",
  start_setActive: "Set active",
  start_answerAs: "Answer as this →",
  start_remove: "Remove perspective",
  start_completion: "{answered}/{total} answered",
  start_addPerspective: "+ Add another perspective",
  start_multiNote:
    "Multiple perspectives are averaged into one profile; divergences of two or more levels are flagged on Results.",
  start_cta: "Go to questionnaire →",

  // Assessment page
  asmt_answeringAs: "Answering as: {role}",
  asmt_switchPerspective: "Switch →",
  asmt_title: "Institutional Self-Assessment",
  asmt_intro:
    "Answer the questions below to gauge your institution's maturity on each CoARA commitment. When you are done, the Results tab turns your answers into a maturity profile and a prioritised action plan. Everything is saved locally in your browser.",  asmt_progress: "Progress: {answered}/{total} questions",
  asmt_overall: "Overall maturity:",
  asmt_next: "Next: shape your plan →",
  asmt_inPractice: "What this means in practice",
  asmt_maturityProfile: "Maturity Profile",
  asmt_radarEmpty: "Answer questions to see your radar chart",

  // Plan page
  plan_emptyTitle: "Plan",
  plan_emptyBody:
    "Answer the questionnaire first — the plan tailors the actions that come out of your maturity profile.",
  plan_startQuestionnaire: "Start the questionnaire",
  plan_title: "Shape your action plan",
  plan_intro:
    "Four quick choices that tune which actions surface first. Nothing here is required — the defaults give a balanced, gap-driven plan. Your maturity profile is unaffected.",
  plan_s1_title: "1 · Horizon & capacity",
  plan_s1_hint: "How much change can you take on right now?",
  plan_s2_title: "2 · Institutional context",
  plan_s2_hint: "Boosts actions that are especially relevant to your setting.",
  plan_s3_title: "3 · Priority commitments",
  plan_s3_hint:
    "Pick the CoARA commitments you want to tackle first — their actions move up the list. Leave empty for none.",
  plan_clear: "Clear selection",
  plan_s4_title: "4 · High-effort actions",
  plan_s4_hint: "Structural reforms (new criteria, system-wide training) take real resources.",
  plan_includeHigh: "Include high-effort actions",
  plan_hideHigh: "Hide high-effort actions",
  plan_s5_title: "5 · Ambition — where do you want to be?",
  plan_s5_hint:
    "Set a target maturity per commitment. Actions that close the gap from your current level to the target rise to the top; commitments already at their target drop down. Leave as “—” to rank purely by gap to the top level.",
  plan_ambition_now: "now",
  plan_ambition_current: "current level",
  plan_ambition_target: "target level",
  plan_ambition_notset: "—",
  plan_ambition_clear: "Clear all targets",
  plan_s6_title: "6 · Perspective weighting & alignment",
  plan_s6_hint:
    "Only relevant with more than one perspective. Set how much each role's view counts when profiles are combined, and how far perspectives must diverge before a commitment is flagged for alignment.",
  plan_weight_aria: "Weight for {role}",
  plan_threshold_label: "Flag perception gap when perspectives diverge by",
  plan_threshold_suffix: "levels",
  plan_weight_reset: "Reset weighting to defaults",
  plan_back: "← Back to questionnaire",
  plan_view: "View tailored results →",

  // horizons (label + description)
  horizon_quickwins_label: "Quick wins first",
  horizon_quickwins_desc:
    "We have limited time and capacity. Favour low-effort actions we can start now.",
  horizon_balanced_label: "Balanced",
  horizon_balanced_desc: "Mix of quick wins and deeper changes, ranked purely by gap and impact.",
  horizon_structural_label: "Structural change",
  horizon_structural_desc:
    "We are ready for ambitious, high-impact reform even if it takes more effort.",

  // Results page
  res_emptyTitle: "Results",
  res_emptyBody: "Answer the questionnaire first to generate your maturity profile and action plan.",
  res_title: "Results",
  res_forInst: "for {inst}",
  res_intro:
    "Your maturity profile and the actions that matter most, prioritised by gap size and impact.",
  res_basedOn: "Based on {answered}/{total} questions",
  res_planLabel: "Plan:",
  res_focus: "Focus: {list}",
  res_respondents: "Respondents: {list}",
  res_ambitionSet: "Ambition set",
  res_currentVsTarget: "current vs target",
  res_consolidatedNote: "Role-weighted average across {n} perspectives (the assessed count for more).",
  res_perceptionGap: "Perspectives diverge by ≥2 levels on: {list} — prioritised for alignment.",
  res_highHidden: "High-effort hidden",
  res_edit: "Edit",
  res_balancedNote: "Balanced plan (gap-driven).",
  res_tuneIt: "Tune it →",
  res_print: "Print report",
  res_exportJson: "Export JSON",
  res_saveConfig: "Save config",
  // configuration save/load (reproducibility)
  cfg_title: "Save / load configuration",
  cfg_hint:
    "Save every input of this assessment (answers, perspectives, ambition and plan) to a small file — so you can reproduce this exact report later, share it, or load it back as a base to modify.",
  cfg_save: "Save configuration",
  cfg_load: "Load configuration",
  cfg_loaded: "Configuration loaded.",
  cfg_loadError: "Could not load this file: {msg}",
  reset_button: "Start over",
  reset_hint: "Everything is saved in this browser. Start over erases all answers, perspectives, ambition, plan and report to begin from scratch.",
  reset_confirm: "This will erase all answers, perspectives, ambition, plan and report saved in this browser, and cannot be undone. Start from scratch?",
  // chart export
  chart_png: "PNG",
  chart_pngTitle: "Download this chart as a PNG image",
  res_maturityProfile: "Maturity Profile",
  res_overallShort: "Overall:",
  res_byCommitment: "Maturity by commitment",
  res_recommendedOne: "{n} recommended action",
  res_recommendedMany: "{n} recommended actions",
  res_filterAll: "All actions",
  res_filterQuick: "Quick wins",
  res_filterHigh: "High impact",
  res_noMatch: 'No actions match this filter. Try "All actions".',
  res_examples: "Examples:",
  res_corpus: "{pct}% of {n} plans",
  res_corpusTitle: "Share of the {n} published CoARA action plans whose full text matches this action's theme (keyword-based, directional)",
  ev_universal: "Near-universal in existing plans",
  ev_common: "Common in existing plans",
  ev_emerging: "Emerging practice",
  ev_frontier: "Frontier — few plans do this yet; an opportunity to lead",
  res_ctaNext: "Next:",
  res_ctaBody: "turn this into a written CoARA action-plan draft you can edit and share.",
  res_generateReport: "Generate report →",

  // Results — print view
  print_title: "Research Assessment Reform — Maturity Report",
  print_meta: "{inst} · {date} · CoARA commitments · based on {answered}/{total} questions",
  print_respondents: "Respondents: {list}",
  print_planPrefix: "Plan:",
  print_overall: "Overall maturity:",
  print_level: "Level {n} — {label}",
  print_byCommitment: "Maturity by commitment",
  print_priorityActions: "Priority actions",
  print_footer:
    "Generated with CoARA Action Planner (DOI 10.5281/zenodo.21492548) · rijdho.github.io/coara-action-planner · framework: CoARA Agreement on Reforming Research Assessment.",
  unknownInst: "Institution",

  // Report page
  rep_emptyTitle: "Report",
  rep_emptyBody:
    "Answer the questionnaire first — the report is drafted from your maturity profile and plan.",
  rep_title: "Action plan report",
  rep_intro_pre:
    "A pre-structured CoARA action-plan draft, generated from your answers and plan. Its structure follows real institutional action plans (Introduction → baseline → priorities → actions per commitment → resources → monitoring). ",
  rep_intro_strong: "Edit it freely",
  rep_intro_post: " — bracketed [fields] are blanks to fill in. Saved locally as you type.",
  rep_copy: "Copy text",
  rep_copied: "Copied ✓",
  rep_downloadMd: "Download .md",
  rep_downloadTxt: "Download .txt",
  rep_print: "Print",
  rep_regenerate: "↻ Regenerate",
  rep_regenConfirm: "Regenerate from your latest answers? This overwrites your edits.",

  // radar tooltip / series
  radar_current: "Current",
  radar_target: "Target",
  radar_previous: "Previous",
  radar_level: "Level {n} — {label}",};
