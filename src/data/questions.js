/**
 * Self-assessment questions for each CoARA commitment.
 *
 * Each question maps to a commitment and has answer options that
 * correspond to maturity levels (0-5).
 * Multiple questions per commitment allow for nuanced assessment.
 */

export const QUESTIONS = [
  // C1: Recognise diversity of contributions
  {
    id: "q1a",
    commitment: "diversity",
    text: "Does your institution explicitly recognise research outputs beyond publications (datasets, software, patents, mentoring) in its evaluation criteria?",
    answers: [
      { level: 0, text: "We have never discussed this" },
      { level: 1, text: "We are aware this is an issue but haven't acted" },
      { level: 2, text: "We have a working group exploring how to broaden criteria" },
      { level: 3, text: "We have drafted new criteria that include diverse outputs" },
      { level: 4, text: "New criteria are in use in at least some evaluation processes" },
      { level: 5, text: "All evaluation processes recognise diverse outputs as standard" },
    ],
  },
  {
    id: "q1b",
    commitment: "diversity",
    text: "Are activities like teaching, supervision, science communication, and peer review formally valued in researcher assessment?",
    answers: [
      { level: 0, text: "These activities are not part of assessment at all" },
      { level: 1, text: "We know they should be, but they are not included yet" },
      { level: 2, text: "We are mapping which activities should be included" },
      { level: 3, text: "We have a plan to incorporate these into evaluation criteria" },
      { level: 4, text: "Some processes already recognise these activities" },
      { level: 5, text: "All assessment processes systematically include these activities" },
    ],
  },

  {
    id: "q1c",
    commitment: "diversity",
    text: "Does your institution recognise open science practices (FAIR data, open access, preregistration, open peer review) as positive criteria in researcher assessment?",
    answers: [
      { level: 0, text: "Open science is not part of assessment criteria" },
      { level: 1, text: "We are aware it should be but it's not included" },
      { level: 2, text: "We are mapping how open science can be integrated into criteria" },
      { level: 3, text: "We have drafted criteria that reward open science practices" },
      { level: 4, text: "Open science is valued in some evaluation processes" },
      { level: 5, text: "Open science practices are systematically rewarded across all processes" },
    ],
  },
  {
    id: "q1d",
    commitment: "diversity",
    text: "Does your institution consider equity, diversity, and inclusion (EDI) in its assessment processes — e.g., career breaks, parental leave, disability, gender bias in evaluation committees?",
    answers: [
      { level: 0, text: "EDI is not considered in assessment" },
      { level: 1, text: "We are aware of EDI issues but haven't acted" },
      { level: 2, text: "We are reviewing our processes for EDI gaps and biases" },
      { level: 3, text: "We have drafted EDI guidelines for evaluation committees" },
      { level: 4, text: "EDI guidelines are in use (unconscious bias training, career break adjustments)" },
      { level: 5, text: "EDI is embedded: bias training is mandatory, career breaks are normalised, committees are diverse" },
    ],
  },

  // C2: Base assessment on qualitative judgement
  {
    id: "q2a",
    commitment: "qualitative",
    text: "Are evaluation committees trained to perform qualitative assessment rather than relying on quantitative metrics?",
    answers: [
      { level: 0, text: "We have not considered this" },
      { level: 1, text: "We recognise the need but offer no training" },
      { level: 2, text: "We are designing a training programme" },
      { level: 3, text: "Training materials are ready and pilots are planned" },
      { level: 4, text: "Training is being rolled out to evaluation committees" },
      { level: 5, text: "All evaluators receive regular training in qualitative assessment" },
    ],
  },
  {
    id: "q2b",
    commitment: "qualitative",
    text: "Does your institution use narrative CVs, research portfolios, or impact statements in its evaluation processes?",
    answers: [
      { level: 0, text: "We don't know what narrative CVs are" },
      { level: 1, text: "We've heard of them but don't use them" },
      { level: 2, text: "We are studying narrative CV models from other institutions" },
      { level: 3, text: "We have designed a narrative CV template for our context" },
      { level: 4, text: "Narrative CVs are being used in some evaluation processes" },
      { level: 5, text: "Narrative CVs are the standard format across all processes" },
    ],
  },

  // C3: Abandon inappropriate journal-based metrics
  {
    id: "q3a",
    commitment: "no-metrics",
    text: "Do your hiring, promotion, or funding criteria explicitly mention the Journal Impact Factor (JIF), h-index, or journal quartiles?",
    answers: [
      { level: 0, text: "We don't know what our criteria say" },
      { level: 1, text: "Yes, they mention these metrics and we know it's problematic" },
      { level: 2, text: "We have audited our criteria and identified where these appear" },
      { level: 3, text: "We have drafted revised criteria that remove these metrics" },
      { level: 4, text: "Most criteria have been updated to remove these metrics" },
      { level: 5, text: "No evaluation process references JIF, h-index, or quartiles" },
    ],
  },
  {
    id: "q3b",
    commitment: "no-metrics",
    text: "In practice, do evaluators still rely on journal prestige or bibliometric indicators when assessing candidates, even if criteria don't require it?",
    answers: [
      { level: 0, text: "We have no idea what evaluators actually do" },
      { level: 1, text: "Probably yes, but we haven't investigated" },
      { level: 2, text: "We are surveying evaluators to understand current practices" },
      { level: 3, text: "We have evidence of the gap and a plan to address it" },
      { level: 4, text: "We provide guidance and monitor for metric misuse" },
      { level: 5, text: "Culture has shifted — evaluators routinely use qualitative judgement" },
    ],
  },

  // C4: Avoid rankings
  {
    id: "q4a",
    commitment: "no-rankings",
    text: "Does your institution use university rankings (Shanghai, THE, QS) in research assessment or as quality proxies?",
    answers: [
      { level: 0, text: "We haven't thought about this" },
      { level: 1, text: "We probably do, especially for international partnerships" },
      { level: 2, text: "We are reviewing where rankings influence our decisions" },
      { level: 3, text: "We have a policy to decouple assessment from rankings" },
      { level: 4, text: "Rankings are not used in evaluation but may appear in communications" },
      { level: 5, text: "Rankings play no role in assessment, partnerships, or communications" },
    ],
  },

  {
    id: "q5b",
    commitment: "resources",
    text: "Does your institution have a formal governance structure (committee, working group, steering board) dedicated to research assessment reform?",
    answers: [
      { level: 0, text: "There is no dedicated structure" },
      { level: 1, text: "An individual champion exists but no formal structure" },
      { level: 2, text: "We are forming a working group or task force" },
      { level: 3, text: "A formal committee exists with clear mandate and membership" },
      { level: 4, text: "The committee is active, meets regularly, and drives changes" },
      { level: 5, text: "Governance is embedded: committee, budget, reporting lines, and researcher participation" },
    ],
  },

  // C5: Commit resources
  {
    id: "q5a",
    commitment: "resources",
    text: "Has your institution allocated specific budget, personnel, or time for research assessment reform?",
    answers: [
      { level: 0, text: "No resources have been considered" },
      { level: 1, text: "We know resources are needed but none are allocated" },
      { level: 2, text: "We are estimating the resources required" },
      { level: 3, text: "Budget and personnel have been earmarked" },
      { level: 4, text: "Resources are being deployed (staff hired, budget in use)" },
      { level: 5, text: "Sustained funding and dedicated team are in place" },
    ],
  },

  // C6: Review and update criteria
  {
    id: "q6a",
    commitment: "review-criteria",
    text: "Has your institution conducted a systematic audit of all its current evaluation criteria and processes?",
    answers: [
      { level: 0, text: "We have never audited our criteria" },
      { level: 1, text: "We know we should audit but haven't started" },
      { level: 2, text: "An audit is underway or being designed" },
      { level: 3, text: "Audit is complete and gaps have been identified" },
      { level: 4, text: "New criteria are being implemented based on the audit" },
      { level: 5, text: "Criteria are regularly reviewed and updated on a cycle" },
    ],
  },
  {
    id: "q6b",
    commitment: "review-criteria",
    text: "Have new evaluation templates (e.g., narrative CV, portfolio, impact statement) been developed and tested?",
    answers: [
      { level: 0, text: "We have no new templates" },
      { level: 1, text: "We are aware of narrative CV models but haven't created our own" },
      { level: 2, text: "We are studying templates from other institutions" },
      { level: 3, text: "We have designed and are piloting new templates" },
      { level: 4, text: "Templates are in use and being refined based on feedback" },
      { level: 5, text: "Templates are established, regularly updated, and widely used" },
    ],
  },

  {
    id: "q6c",
    commitment: "review-criteria",
    text: "Are your evaluation criteria differentiated by career stage (doctoral, postdoc, tenure-track, senior) and by process type (hiring, promotion, funding, unit evaluation)?",
    answers: [
      { level: 0, text: "We use the same criteria for everything" },
      { level: 1, text: "We know differentiation is needed but haven't started" },
      { level: 2, text: "We are mapping which processes need distinct criteria" },
      { level: 3, text: "We have drafted differentiated criteria for key processes" },
      { level: 4, text: "Differentiated criteria are in use for most career stages and processes" },
      { level: 5, text: "All processes have tailored criteria, regularly reviewed per career stage" },
    ],
  },
  {
    id: "q6d",
    commitment: "review-criteria",
    text: "Does your institution have the IT infrastructure (CRIS, repository, ORCID integration) needed to capture and evaluate diverse research contributions?",
    answers: [
      { level: 0, text: "We have no systems for tracking research contributions" },
      { level: 1, text: "We have basic systems but they only track publications" },
      { level: 2, text: "We are exploring CRIS or repository upgrades to capture diverse outputs" },
      { level: 3, text: "We have planned IT upgrades (CRIS, ORCID, data repository)" },
      { level: 4, text: "Systems are in place and capturing diverse outputs (data, software, mentoring)" },
      { level: 5, text: "Integrated infrastructure feeds directly into evaluation processes" },
    ],
  },

  // C7: Raise awareness
  {
    id: "q7a",
    commitment: "awareness",
    text: "Does your institution actively communicate about research assessment reform to its research community?",
    answers: [
      { level: 0, text: "No communication has taken place" },
      { level: 1, text: "Only a few people know about CoARA/DORA" },
      { level: 2, text: "We are planning information sessions or workshops" },
      { level: 3, text: "An awareness campaign is designed and ready to launch" },
      { level: 4, text: "Workshops and info sessions are being delivered" },
      { level: 5, text: "The research community is well-informed and engaged" },
    ],
  },

  {
    id: "q7b",
    commitment: "awareness",
    text: "Does your institution address research ethics, integrity, and predatory publishing as part of its assessment reform communication and training?",
    answers: [
      { level: 0, text: "Ethics and integrity are not linked to assessment reform" },
      { level: 1, text: "We know they are connected but haven't integrated them" },
      { level: 2, text: "We are planning to include ethics/integrity in our reform communication" },
      { level: 3, text: "Materials on ethics, integrity, and predatory journals are being developed" },
      { level: 4, text: "Training includes ethics/integrity modules alongside assessment reform" },
      { level: 5, text: "Ethics, integrity, and responsible publishing are fully integrated into reform training" },
    ],
  },

  // C8: Exchange practices
  {
    id: "q8a",
    commitment: "exchange",
    text: "Does your institution participate in thematic CoARA Working Groups or Action Clusters (SSH, EMCRs, Peer Review, RMI, OI4RRA, ERIP, etc.)?",
    answers: [
      { level: 0, text: "We are not involved in any thematic group" },
      { level: 1, text: "We know about the groups but haven't joined" },
      { level: 2, text: "We are exploring which groups to join" },
      { level: 3, text: "We have joined and are planning our contribution" },
      { level: 4, text: "We actively participate and contribute" },
      { level: 5, text: "We co-lead thematic groups and share our experience extensively" },
    ],
  },

  // C9: Communicate progress
  {
    id: "q9a",
    commitment: "communicate",
    text: "Has your institution published or planned a progress report on its assessment reform journey?",
    answers: [
      { level: 0, text: "We have not considered reporting" },
      { level: 1, text: "We know we should report but have nothing to report yet" },
      { level: 2, text: "We are defining what to measure and how to report" },
      { level: 3, text: "A reporting framework is ready and data collection has begun" },
      { level: 4, text: "A progress report has been published or submitted" },
      { level: 5, text: "Regular progress reports are published on a defined cycle" },
    ],
  },

  // C10: Collective evaluation
  {
    id: "q10a",
    commitment: "collective-eval",
    text: "Does your institution contribute data or participate in collective assessments of reform progress across signatories?",
    answers: [
      { level: 0, text: "We have not engaged in collective evaluation" },
      { level: 1, text: "We know about collective processes but don't participate" },
      { level:  2, text: "We are preparing to participate in the next review cycle" },
      { level: 3, text: "We have contributed data for collective assessment" },
      { level: 4, text: "We actively participate and share benchmarking data" },
      { level: 5, text: "We lead collective evaluation initiatives and publish results openly" },
    ],
  },

  // --- Sovereignty, multilingualism & context (derived from Crawley AOSP 2026 +
  // CoARA-ERIP Whitepaper multilingual/multicultural sections) ---

  {
    id: "q1e",
    commitment: "diversity",
    tags: ["sovereignty", "multilingualism"],
    text: "Does your assessment actively protect research published in local/non-dominant languages and on locally relevant topics from penalisation?",
    answers: [
      { level: 0, text: "Language is not considered in assessment" },
      { level: 1, text: "We know local-language work is disadvantaged but haven't acted" },
      { level: 2, text: "We are auditing how language bias affects our criteria" },
      { level: 3, text: "Protections are drafted (e.g., weight for local-language outputs)" },
      { level: 4, text: "Protections are applied in some evaluation processes" },
      { level: 5, text: "Multilingual protection is systematic (Helsinki Initiative aligned)" },
    ],
  },
  {
    id: "q1f",
    commitment: "diversity",
    tags: ["sovereignty", "care"],
    text: "Does your institution apply CARE principles (Collective benefit, Authority to control, Responsibility, Ethics) when working with Indigenous or community-held data?",
    answers: [
      { level: 0, text: "CARE principles are not part of our data policies" },
      { level: 1, text: "We are aware of CARE but do not apply it" },
      { level: 2, text: "We are mapping where CARE should apply in our research" },
      { level: 3, text: "CARE is drafted into data governance documents" },
      { level: 4, text: "CARE is applied in some projects and assessments" },
      { level: 5, text: "CARE is embedded alongside FAIR as default data policy" },
    ],
  },
  {
    id: "q8b",
    commitment: "exchange",
    tags: ["regional-forum"],
    text: "Does your institution engage with a regional forum or national chapter (CoARA National Chapters, IRAF, AFRA, AOSP, etc.)?",
    answers: [
      { level: 0, text: "No engagement with regional forums" },
      { level: 1, text: "We are aware forums exist but are not members" },
      { level: 2, text: "We are exploring which forum best fits our context" },
      { level: 3, text: "We have joined and contribute occasionally" },
      { level: 4, text: "We participate actively and share our experience" },
      { level: 5, text: "We help lead or co-found regional forums / chapters" },
    ],
  },
  {
    id: "q10b",
    commitment: "collective-eval",
    tags: ["sovereignty", "openness"],
    text: "Does your institution document exceptions to openness following 'as open as possible, as closed as necessary' (time-limited and reviewed)?",
    answers: [
      { level: 0, text: "Openness exceptions are not documented" },
      { level: 1, text: "We know we should document exceptions" },
      { level: 2, text: "We are drafting a documentation template" },
      { level: 3, text: "Exception documentation is required in new projects" },
      { level: 4, text: "Exceptions are documented and periodically reviewed" },
      { level: 5, text: "All exceptions are time-limited, logged, and audited" },
    ],
  },
];
