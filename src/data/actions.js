/**
 * Recommended actions per commitment, organised by target maturity level.
 *
 * Each action has:
 * - commitment: which CoARA commitment it addresses
 * - fromLevel: minimum current maturity to recommend this
 * - toLevel: what maturity this helps achieve
 * - effort: "low" | "medium" | "high"
 * - impact: "low" | "medium" | "high"
 * - title: short title
 * - description: what to do (interface copy, addressed to the reader)
 * - planText: the same action as institutional first-person prose — used by the
 *   generated action-plan narrative instead of description, so the plan never
 *   addresses its own author in the imperative
 * - examples: optional real-world examples
 * - theme: key into evidence.js THEME_FREQUENCY (corpus prevalence band)
 */

export const ACTIONS = [
  // C1: Diversity
  {
    commitment: "diversity",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "medium",
    theme: "diverse-outputs",
    title: "Map current output types recognised",
    description: "Create an inventory of all output types currently recognised in your evaluation criteria (publications, data, software, patents, etc.). Identify gaps.",
    planText: "We will create an inventory of all output types currently recognised in our evaluation criteria (publications, data, software, patents, etc.) and identify the gaps.",
    examples: ["University of Rijeka", "Universidade de Lisboa", "University of Florence"],
  },
  {
    commitment: "diversity",
    fromLevel: 1,
    toLevel: 3,
    effort: "medium",
    impact: "high",
    theme: "diverse-outputs",
    title: "Draft expanded output typology",
    description: "Develop a comprehensive typology of research contributions: peer-reviewed articles, datasets, software, code, protocols, teaching materials, mentoring, policy briefs, media, citizen science, etc.",
    planText: "We will develop a comprehensive typology of research contributions — peer-reviewed articles, datasets, software, code, protocols, teaching materials, mentoring, policy briefs, media and citizen science.",
    examples: ["Netherlands Recognition & Rewards programme", "UK REF impact case studies"],
  },
  {
    commitment: "diversity",
    fromLevel: 3,
    toLevel: 5,
    effort: "high",
    impact: "high",
    theme: "diverse-outputs",
    title: "Embed diverse outputs in all evaluation processes",
    description: "Revise all hiring, promotion, tenure, and funding criteria to explicitly include and weight diverse output types. Ensure evaluators are trained to assess them.",
    planText: "We will revise all hiring, promotion, tenure and funding criteria to explicitly include and weight diverse output types, and ensure evaluators are trained to assess them.",
    examples: ["LUT University", "Università di Bologna", "Novia University of Applied Sciences"],
  },

  // C2: Qualitative judgement
  {
    commitment: "qualitative",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "medium",
    theme: "narrative-cv",
    title: "Study narrative CV models",
    description: "Review narrative CV templates from institutions that have adopted them: UKRI Narrative CV, NWO (Netherlands), Swiss National Science Foundation.",
    planText: "We will review narrative CV templates from institutions that have adopted them (UKRI, NWO, Swiss National Science Foundation) to select a model suited to our context.",
    examples: ["UKRI Résumé for Research and Innovation", "NWO narrative sections", "Swiss NSF academic profile"],
  },
  {
    commitment: "qualitative",
    fromLevel: 2,
    toLevel: 4,
    effort: "medium",
    impact: "high",
    theme: "narrative-cv",
    title: "Design and pilot a narrative CV",
    description: "Adapt a narrative CV template to your institutional context. Pilot it in one or two evaluation rounds (e.g., internal grants, one promotion committee). Collect feedback from evaluators and candidates.",
    planText: "We will adapt a narrative CV template to our institutional context, pilot it in one or two evaluation rounds, and collect feedback from evaluators and candidates.",
    examples: ["University of Edinburgh", "University of Padua", "University of Oulu", "University of Cyprus"],
  },
  {
    commitment: "qualitative",
    fromLevel: 2,
    toLevel: 4,
    effort: "medium",
    impact: "high",
    theme: "training",
    title: "Train evaluation committees",
    description: "Develop and deliver training for evaluation committees on qualitative assessment, responsible metrics, and implicit bias. Include practical exercises with sample portfolios.",
    planText: "We will develop and deliver training for evaluation committees on qualitative assessment, responsible metrics and implicit bias, including practical exercises with sample portfolios.",
    examples: ["Universidade de Lisboa", "University of Edinburgh", "Italian Institute of Technology (IIT)", "University of Reading"],
  },
  {
    commitment: "qualitative",
    fromLevel: 4,
    toLevel: 5,
    effort: "medium",
    impact: "high",
    theme: "qualitative-judgement",
    title: "Institutionalise qualitative assessment",
    description: "Make narrative CVs and qualitative assessment the default across all processes. Establish regular evaluator training. Monitor for metric creep.",
    planText: "We will make narrative CVs and qualitative assessment the default across all our processes, establish regular evaluator training, and monitor for metric creep.",
    examples: ["University of Edinburgh", "Malmö University", "Tampere University"],
  },

  // C3: Abandon metrics
  {
    commitment: "no-metrics",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "high",
    theme: "remove-jif",
    title: "Audit criteria for metric references",
    description: "Search all job postings, promotion guidelines, funding calls, and internal policies for references to JIF, h-index, quartiles, or 'high-impact journals'. Document every instance.",
    planText: "We will search all job postings, promotion guidelines, funding calls and internal policies for references to JIF, h-index, quartiles or 'high-impact journals', documenting every instance.",
    examples: ["Tampere University", "Charité – Universitätsmedizin Berlin", "Malmö University"],
  },
  {
    commitment: "no-metrics",
    fromLevel: 2,
    toLevel: 4,
    effort: "medium",
    impact: "high",
    theme: "remove-jif",
    title: "Remove metric proxies from criteria",
    description: "Revise all identified documents to remove or replace metric-based criteria. Replace 'publish in Q1 journals' with 'demonstrate impact through diverse outputs'.",
    planText: "We will revise all identified documents to remove or replace metric-based criteria, replacing formulas such as 'publish in Q1 journals' with 'demonstrate impact through diverse outputs'.",
    examples: ["Charité – Universitätsmedizin Berlin", "Tampere University"],
  },
  {
    commitment: "no-metrics",
    fromLevel: 4,
    toLevel: 5,
    effort: "low",
    impact: "medium",
    theme: "remove-jif",
    title: "Monitor for metric creep",
    description: "Establish a periodic review process to ensure removed metrics don't creep back in. Survey evaluators annually on their actual practices.",
    planText: "We will establish a periodic review to ensure removed metrics do not creep back in, surveying evaluators annually on their actual practices.",
  },

  // C4: Rankings
  {
    commitment: "no-rankings",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "medium",
    theme: "no-rankings",
    title: "Identify where rankings are used",
    description: "Review institutional communications, partnership criteria, and assessment processes for references to Shanghai, THE, QS, or other rankings.",
    planText: "We will review institutional communications, partnership criteria and assessment processes for references to Shanghai, THE, QS or other rankings.",
    examples: ["Maastricht University", "Delft University of Technology", "Utrecht University"],
  },
  {
    commitment: "no-rankings",
    fromLevel: 2,
    toLevel: 4,
    effort: "medium",
    impact: "medium",
    theme: "no-rankings",
    title: "Develop a ranking-free partnership policy",
    description: "Create criteria for international partnerships based on research quality, strategic alignment, and mutual benefit rather than institutional rankings.",
    planText: "We will create criteria for international partnerships based on research quality, strategic alignment and mutual benefit rather than institutional rankings.",
    examples: ["University of Zurich", "Maastricht University"],
  },

  // C5: Resources
  {
    commitment: "resources",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "medium",
    theme: "resources-budget",
    title: "Estimate resource needs",
    description: "Calculate the budget, FTEs, and time required for assessment reform: training development, committee time, policy rewriting, infrastructure, monitoring.",
    planText: "We will calculate the budget, staff time and infrastructure required for assessment reform: training development, committee time, policy rewriting and monitoring.",
    examples: ["Masaryk University", "Università di Pisa"],
  },
  {
    commitment: "resources",
    fromLevel: 2,
    toLevel: 4,
    effort: "high",
    impact: "high",
    theme: "resources-budget",
    title: "Secure dedicated funding and personnel",
    description: "Request budget allocation from institutional leadership. Appoint a reform coordinator or committee with protected time and clear mandate.",
    planText: "We will secure a dedicated budget allocation and appoint a reform coordinator or committee with protected time and a clear mandate.",
    examples: ["Malmö University", "Masaryk University"],
  },

  // C6: Review criteria
  {
    commitment: "review-criteria",
    fromLevel: 0,
    toLevel: 2,
    effort: "medium",
    impact: "high",
    theme: "criteria-audit",
    title: "Conduct comprehensive criteria audit",
    description: "Systematically review ALL evaluation criteria: hiring (all levels), promotion, tenure, internal grants, sabbaticals, awards, department evaluations. Use a standardised checklist.",
    planText: "We will systematically review all evaluation criteria — hiring at all levels, promotion, tenure, internal grants, sabbaticals, awards and department evaluations — using a standardised checklist.",
    examples: ["University of Rijeka", "University of Florence", "German Sport University Cologne"],
  },
  {
    commitment: "review-criteria",
    fromLevel: 2,
    toLevel: 4,
    effort: "high",
    impact: "high",
    theme: "criteria-audit",
    title: "Redesign evaluation rubrics",
    description: "Based on audit results, create new rubrics that emphasise diverse contributions, qualitative evidence, and alignment with institutional mission. Pilot and iterate.",
    planText: "Based on the audit results, we will create new rubrics that emphasise diverse contributions, qualitative evidence and alignment with our institutional mission, piloting and iterating as we go.",
    examples: ["University of Florence", "University of Rijeka"],
  },
  {
    commitment: "review-criteria",
    fromLevel: 4,
    toLevel: 5,
    effort: "medium",
    impact: "medium",
    theme: "criteria-audit",
    title: "Establish periodic criteria review cycle",
    description: "Set a fixed schedule (e.g., every 3 years) for reviewing and updating all evaluation criteria. Include stakeholder consultation in each review.",
    planText: "We will set a fixed schedule (e.g., every 3 years) for reviewing and updating all evaluation criteria, with stakeholder consultation in each cycle.",
  },

  // C7: Awareness
  {
    commitment: "awareness",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "medium",
    theme: "awareness-comms",
    title: "Create basic information materials",
    description: "Develop a one-pager, FAQ, and short video explaining what CoARA is, why your institution signed, and what will change. Publish on the institutional website.",
    planText: "We will publish a one-pager, FAQ and short video on the institutional website explaining what CoARA is, why we signed, and what will change.",
    examples: ["University of Padua", "University of Reading"],
  },
  {
    commitment: "awareness",
    fromLevel: 2,
    toLevel: 4,
    effort: "medium",
    impact: "high",
    theme: "awareness-comms",
    title: "Run workshops and town halls",
    description: "Organise interactive workshops for researchers, evaluators, and administrators. Include practical exercises (e.g., 'evaluate this candidate without metrics'). Hold Q&A town halls.",
    planText: "We will organise interactive workshops for researchers, evaluators and administrators — including practical exercises such as metric-free candidate evaluation — complemented by open Q&A town halls.",
    examples: ["Universidade de Lisboa", "Università di Bologna", "University of Reading"],
  },

  // C8: Exchange
  {
    commitment: "exchange",
    fromLevel: 0,
    toLevel: 3,
    effort: "low",
    impact: "medium",
    theme: "working-groups",
    title: "Join thematic CoARA Working Groups and Action Clusters",
    description: "Sign the CoARA Agreement (if not yet signed) and select 1-2 thematic Working Groups or Action Clusters aligned with your priorities (SSH, EMCRs, peer review, RMI, OI4RRA, ERIP, etc.). For geographic forums (CoARA National Chapters, IRAF, AFRA, AOSP) see the dedicated action below.",
    planText: "We will join one or two thematic CoARA Working Groups or Action Clusters aligned with our priorities (such as SSH, EMCRs, peer review, RMI, OI4RRA or ERIP) and take part in their exchanges.",
    examples: ["WG SSH", "WG EMCRs", "WG Peer Review", "WG OI4RRA", "WG ERIP"],
  },
  {
    commitment: "exchange",
    fromLevel: 3,
    toLevel: 5,
    effort: "medium",
    impact: "medium",
    theme: "working-groups",
    title: "Co-organise peer learning activities",
    description: "Partner with other signatories to organise joint workshops, webinars, or site visits. Share your implementation experience — both successes and failures.",
    planText: "We will partner with other signatories to organise joint workshops, webinars or site visits, sharing our implementation experience — successes and failures alike.",
    examples: ["KTH Royal Institute of Technology", "University of Pannonia", "University of Barcelona"],
  },

  // C9: Communicate progress
  {
    commitment: "communicate",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "medium",
    theme: "progress-report",
    title: "Define progress indicators",
    description: "Decide what to measure: % of criteria reformed, number of evaluators trained, narrative CV adoption rate, stakeholder satisfaction, etc.",
    planText: "We will define the indicators we track: the share of criteria reformed, the number of evaluators trained, narrative CV adoption and stakeholder satisfaction.",
    examples: ["Research Council of Norway", "KTH Royal Institute of Technology"],
  },
  {
    commitment: "communicate",
    fromLevel: 2,
    toLevel: 4,
    effort: "medium",
    impact: "high",
    theme: "progress-report",
    title: "Publish a progress report",
    description: "Write and publish your first progress report. Include: baseline status, actions taken, indicators of change, challenges faced, next steps. Share publicly.",
    planText: "We will write and publicly share our first progress report, covering baseline status, actions taken, indicators of change, challenges faced and next steps.",
    examples: ["University of Reading", "Lund University"],
  },

  // C10: Collective evaluation
  {
    commitment: "collective-eval",
    fromLevel: 0,
    toLevel: 3,
    effort: "low",
    impact: "medium",
    theme: "progress-report",
    title: "Prepare your public self-assessment",
    description: "Familiarise yourself with CoARA's trust-based follow-up: progress is communicated primarily through publicly shared self-assessment, with an action plan expected within a year of signing and a touch point at five years. Collect the data you'll need: action plan, progress indicators, self-assessment results.",
    planText: "We will prepare our public self-assessment in line with CoARA's trust-based follow-up, collecting the action plan, progress indicators and self-assessment data it requires.",
  },
  {
    commitment: "collective-eval",
    fromLevel: 3,
    toLevel: 5,
    effort: "medium",
    impact: "high",
    theme: "progress-report",
    title: "Lead or contribute to benchmarking studies",
    description: "Share anonymised assessment data with peer institutions. Participate in or initiate comparative studies of reform progress across signatories.",
    planText: "We will share anonymised assessment data with peer institutions and participate in — or initiate — comparative studies of reform progress across signatories.",
  },

  // ---- Actions derived from the real CoARA action-plan corpus (314 plans;
  //      per-theme prevalence lives in evidence.js, surfaced in the Results UI) ----

  // EDI (Equity, Diversity, Inclusion) — found in 10/15 plans analysed
  {
    commitment: "diversity",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "high",
    theme: "edi",
    title: "Review assessment processes for EDI gaps",
    description: "Audit evaluation criteria and committee composition for gender bias, treatment of career breaks (parental leave, illness, disability), and diversity. Identify where biases may affect outcomes.",
    planText: "We will audit evaluation criteria and committee composition for gender bias, treatment of career breaks (parental leave, illness, disability) and diversity, identifying where biases may affect outcomes.",
    examples: ["FRQ unconscious bias training modules", "SDU Gender Equality Plan", "UCLouvain GEDIP 2024-2027"],
  },
  {
    commitment: "diversity",
    fromLevel: 2,
    toLevel: 4,
    effort: "medium",
    impact: "high",
    theme: "edi",
    title: "Implement EDI guidelines for evaluation committees",
    description: "Develop and enforce guidelines: mandatory unconscious bias training for evaluators, normalise career break adjustments, ensure diverse committee composition, include EDI self-assessment questionnaires.",
    planText: "We will adopt and enforce EDI guidelines for evaluation committees: mandatory unconscious-bias training, normalised career-break adjustments, diverse committee composition and EDI self-assessment questionnaires.",
    examples: ["FRQ mandatory bias module for all committee members", "SDU Mentoring for Change Programme"],
  },

  // Open Science as evaluation criterion — found in 12/15 plans
  {
    commitment: "diversity",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "medium",
    theme: "open-science",
    title: "Map how open science could be valued in assessment",
    description: "Identify which open science practices (FAIR data, open access, preregistration, open peer review, open code) are relevant to your institution and how they could be recognised in evaluation criteria.",
    planText: "We will identify which open science practices (FAIR data, open access, preregistration, open peer review, open code) are relevant to our institution and how they can be recognised in evaluation criteria.",
    examples: ["SDU Open Science Awards", "Helmholtz FAIR Quality Indicators for data and software"],
  },
  {
    commitment: "diversity",
    fromLevel: 2,
    toLevel: 5,
    effort: "medium",
    impact: "high",
    theme: "open-science",
    title: "Integrate open science into evaluation criteria",
    description: "Add open science practices as positive criteria: data sharing, code availability, preregistration, open access publishing. Reward reproducibility and transparency, not just output volume.",
    planText: "We will add open science practices as positive evaluation criteria — data sharing, code availability, preregistration, open access publishing — rewarding reproducibility and transparency rather than output volume alone.",
    examples: ["AQU Catalunya action A23", "UCM open peer review module in repository", "SDU OADO indicator"],
  },

  // Governance — found in 15/15 plans (universal)
  {
    commitment: "resources",
    fromLevel: 0,
    toLevel: 3,
    effort: "medium",
    impact: "high",
    theme: "governance",
    title: "Establish a dedicated reform governance structure",
    description: "Create a formal committee or working group with clear mandate, multidisciplinary membership, researcher representation, and reporting lines to institutional leadership. This is the foundational action that enables all others.",
    planText: "We will establish a formal reform committee or working group with a clear mandate, multidisciplinary membership, researcher representation and direct reporting lines to institutional leadership.",
    examples: ["UCM CoARA Working Group", "DCU Open Research Steering Group", "Pannonia Scientific Quality Analysis Group"],
  },

  // CRIS/IT infrastructure — found in 8/15 plans
  {
    commitment: "review-criteria",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "medium",
    theme: "cris-it",
    title: "Assess IT readiness for diverse output capture",
    description: "Review whether your CRIS (Current Research Information System), repository, or HR systems can capture diverse outputs (datasets, software, patents, mentoring, outreach). Identify gaps.",
    planText: "We will review whether our CRIS, repository and HR systems can capture diverse outputs (datasets, software, patents, mentoring, outreach) and identify the gaps.",
    examples: ["UPC DRAC system with 35 indicators", "SDU Pure CRIS + Dataverse", "UCM DOCTA repository"],
  },
  {
    commitment: "review-criteria",
    fromLevel: 2,
    toLevel: 4,
    effort: "high",
    impact: "high",
    theme: "cris-it",
    title: "Upgrade infrastructure to support reformed assessment",
    description: "Implement or upgrade CRIS, integrate ORCID, deploy data repositories, connect systems to evaluation workflows. Ensure the infrastructure captures what the new criteria require.",
    planText: "We will implement or upgrade our research information infrastructure — CRIS, ORCID integration, data repositories — and connect it to evaluation workflows so it captures what the new criteria require.",
    examples: ["UPC DRAC feeding into Programa Càtedres evaluation", "Helmholtz automated quality indicator pipelines"],
  },

  // Career stage differentiation — found in 6/15 plans
  {
    commitment: "review-criteria",
    fromLevel: 2,
    toLevel: 4,
    effort: "medium",
    impact: "high",
    theme: "career-stage",
    title: "Differentiate criteria by career stage and process",
    description: "Develop distinct evaluation criteria for doctoral, postdoc, tenure-track, and senior positions. Also distinguish between hiring, promotion, internal grants, and unit evaluation. One-size-fits-all criteria disadvantage early-career researchers.",
    planText: "We will develop distinct evaluation criteria for doctoral, postdoc, tenure-track and senior positions, and distinguish between hiring, promotion, internal grants and unit evaluation, so that one-size-fits-all criteria no longer disadvantage early-career researchers.",
    examples: ["UB differentiated review per call type (predoc, postdoc, Serra Hunter, cátedras)", "Eurodoc R1/R2/R3 mapping"],
  },

  // Mentoring — found in 7/15 plans
  {
    commitment: "awareness",
    fromLevel: 0,
    toLevel: 3,
    effort: "medium",
    impact: "medium",
    theme: "mentoring",
    title: "Establish mentoring programmes for early-career researchers",
    description: "Create structured mentoring that helps ECRs navigate reformed assessment: how to build a portfolio, write a narrative CV, demonstrate diverse contributions. Include senior researchers as mentors.",
    planText: "We will create structured mentoring, with senior researchers as mentors, that helps early-career researchers navigate reformed assessment: building a portfolio, writing a narrative CV and demonstrating diverse contributions.",
    examples: ["SDU Mentoring for Change (130 PhDs/year)", "OGS mentoring initiative", "Pannonia Group of Young Scientists"],
  },

  // Ethics and integrity — found in 6/15 plans
  {
    commitment: "awareness",
    fromLevel: 0,
    toLevel: 3,
    effort: "low",
    impact: "medium",
    theme: "ethics-integrity",
    title: "Link research integrity to assessment reform",
    description: "Develop guidance on predatory journals, research ethics, and responsible conduct as part of assessment reform communication. The quality of research practices should be valued, not just outputs.",
    planText: "We will link research integrity to assessment reform, developing guidance on predatory journals, research ethics and responsible conduct, so that the quality of research practices is valued alongside outputs.",
    examples: ["Pannonia Committee on Research Ethics", "Hong Kong Principles", "LBG Ethics & Diversity Hub"],
  },

  // Internal empirical evidence — found in 5/15 plans
  {
    commitment: "collective-eval",
    fromLevel: 0,
    toLevel: 3,
    effort: "medium",
    impact: "high",
    theme: "surveys-evidence",
    title: "Conduct internal survey on assessment perceptions",
    description: "Survey your research community: what criteria do they think are used vs. what they think should be used? This evidence base is invaluable for calibrating reform. Publish results openly.",
    planText: "We will survey our research community on which criteria they believe are used versus which they believe should be used, and publish the results openly as an evidence base for calibrating the reform.",
    examples: ["Helmholtz survey of 1,145 researchers", "UCLouvain 34 interviews with evaluation committees", "UCM planned periodic surveys"],
  },

  // Unit-level evaluation — found in 5/15 plans
  {
    commitment: "review-criteria",
    fromLevel: 2,
    toLevel: 4,
    effort: "high",
    impact: "medium",
    theme: "unit-evaluation",
    title: "Extend reform to unit and institutional evaluation",
    description: "Reform doesn't stop at individual assessment. Review how departments, institutes, and research groups are evaluated — these processes also rely on publication metrics and rankings. Develop qualitative alternatives.",
    planText: "We will extend reform beyond individual assessment, reviewing how departments, institutes and research groups are evaluated and developing qualitative alternatives to publication metrics and rankings.",
    examples: ["Helmholtz centre-level KPI review", "LBG periodic institute evaluation by 3 experts", "AQU institutional quality assessment"],
  },

  // --- Sovereignty, CARE/FAIR/TRUST, Global South, regional forums
  // (derived from Crawley AOSP 2026 + CoARA-ERIP Whitepaper) ---

  {
    commitment: "diversity",
    fromLevel: 0,
    toLevel: 3,
    effort: "medium",
    impact: "high",
    relevanceContext: ["all", "indigenous-serving", "global-south", "multi-regional"],
    addressesCategories: ["data-stewardship", "datasets"],
    addressesValues: ["community-governance", "epistemic-diversity", "fairness"],
    theme: "care-indigenous",
    title: "Adopt CARE + FAIR as paired data-governance principles",
    description: "FAIR alone can extract community data into open systems without consent. Pair FAIR with CARE (Collective benefit, Authority to control, Responsibility, Ethics) in institutional data policy and assessment criteria. Especially load-bearing when research involves Indigenous peoples or community-held data.",
    planText: "We will pair FAIR with the CARE principles (Collective benefit, Authority to control, Responsibility, Ethics) in our data policy and assessment criteria, so that openness never overrides community consent and collective benefit.",
    examples: ["GIDA CARE Principles", "HGP2 federated GWAS in Jordan", "Allele frequency across Caribbean cohorts via BioVault"],
  },
  {
    commitment: "diversity",
    fromLevel: 0,
    toLevel: 3,
    effort: "low",
    impact: "medium",
    relevanceContext: ["all", "global-south", "multi-regional"],
    addressesCategories: ["publications", "outreach"],
    addressesValues: ["epistemic-diversity", "inclusivity", "relevance"],
    theme: "multilingual",
    title: "Audit for language bias (Helsinki Initiative on Multilingualism)",
    description: "Ensure that research in local or non-dominant languages is not penalised. Review criteria, committee composition, and databases consulted for implicit English-language bias. The Helsinki Initiative provides the canonical framework.",
    planText: "We will review criteria, committee composition and the databases we consult for implicit English-language bias, following the Helsinki Initiative on Multilingualism, so that research in local or non-dominant languages is not penalised.",
    examples: ["AQU Catalunya — Helsinki Initiative adoption", "FRQ 60+ francophone journals funded", "Leiden Manifesto principle 3"],
  },
  {
    commitment: "exchange",
    fromLevel: 0,
    toLevel: 3,
    effort: "low",
    impact: "high",
    relevanceContext: ["all", "global-south"],
    addressesCategories: ["community", "infrastructure"],
    addressesValues: ["community-governance", "inclusivity", "sustainability"],
    theme: "working-groups",
    title: "Join a regional forum or national chapter",
    description: "Align with a regional forum (IRAF India, AFRA Africa/AOSP, CoARA National Chapter) rather than reforming in isolation. Unilateral reform in a metric-driven ecosystem risks disadvantaging your researchers; regional coordination protects them.",
    planText: "We will align with a regional forum or CoARA National Chapter rather than reforming in isolation, protecting our researchers through regional coordination.",
    examples: ["IRAF inauguration (Dr. Gitanjali Yadav)", "AOSP Governing Council", "CoARA Spain (CRUE/CSIC)"],
  },
  {
    commitment: "review-criteria",
    fromLevel: 1,
    toLevel: 4,
    effort: "medium",
    impact: "medium",
    relevanceContext: ["all"],
    addressesCategories: ["data-stewardship", "infrastructure"],
    addressesValues: ["transparency", "sustainability", "accountability"],
    theme: "cris-it",
    title: "Apply TRUST Principles when choosing or upgrading repositories",
    description: "Use the TRUST Principles for Digital Repositories (Transparency, Responsibility, User focus, Sustainability, Technology) to audit the infrastructure that backs your assessment evidence. Pair with FAIR for data-layer coverage.",
    planText: "We will apply the TRUST Principles for Digital Repositories (Transparency, Responsibility, User focus, Sustainability, Technology) to audit the infrastructure that backs our assessment evidence, pairing them with FAIR at the data layer.",
    examples: ["TRUST Principles (Lin et al. 2020)", "OI4RRA Tier 1 Publishing"],
  },
  {
    commitment: "collective-eval",
    fromLevel: 0,
    toLevel: 3,
    effort: "medium",
    impact: "high",
    relevanceContext: ["all"],
    addressesCategories: ["data-stewardship", "integrity"],
    addressesValues: ["openness", "accountability", "transparency"],
    theme: "open-science",
    title: "Document exceptions to openness ('as open as possible, as closed as necessary')",
    description: "Openness is the default; exceptions must be documented, time-limited, subject to oversight, and periodically revisited. This principle (from the CoARA-ERIP Whitepaper and the Barcelona Declaration) makes closed data the auditable exception rather than the silent norm.",
    planText: "We will make openness the default and document every exception — time-limited, subject to oversight and periodically revisited — so that closed data is the auditable exception rather than the silent norm.",
    examples: ["CoARA-ERIP Whitepaper (2025)", "UNESCO Recommendation on Open Science"],
  },
  {
    commitment: "review-criteria",
    fromLevel: 2,
    toLevel: 5,
    effort: "high",
    impact: "high",
    relevanceContext: ["all"],
    addressesCategories: ["infrastructure", "data-stewardship"],
    addressesValues: ["openness", "sustainability", "community-governance"],
    theme: "cris-it",
    title: "Map your assessment stack against OI4RRA's 4-tier architecture",
    description: "CoARA's OI4RRA WG defines a 4-tier architecture: Tier 0 Foundation (PIDs, ORCID, ROR, DOI), Tier 1 Publishing, Tier 2 Metadata aggregators (OpenAIRE, ORKG), Tier 3 Assessment support (analytics, narrative-CV builders). Map what you have vs what's missing at each tier; invest accordingly.",
    planText: "We will map our assessment infrastructure against OI4RRA's four-tier architecture — from persistent identifiers to assessment-support tools — and invest where tiers are missing.",
    examples: ["OI4RRA Framework & Principles (Manola et al. 2025)", "OI4RRA Policy Briefs for RPOs/RFOs"],
  },
  {
    commitment: "review-criteria",
    fromLevel: 1,
    toLevel: 4,
    effort: "medium",
    impact: "medium",
    relevanceContext: ["all"],
    addressesCategories: ["credit", "integrity"],
    addressesValues: ["transparency", "fairness", "accountability"],
    theme: "credit-taxonomy",
    title: "Adopt a contributor taxonomy (CRediT / CASRAI / TaDiRAH)",
    description: "Move beyond authorship lists to structured contribution statements. CRediT works for STEM; TaDiRAH complements for humanities; CASRAI covers research administration. This is a prerequisite for recognising diverse contributions at scale.",
    planText: "We will move beyond authorship lists to structured contribution statements, adopting a contributor taxonomy (CRediT, complemented by TaDiRAH for the humanities and CASRAI for research administration) as the basis for recognising diverse contributions at scale.",
    examples: ["CRediT taxonomy", "TaDiRAH (humanities)", "CASRAI standards", "OpenVIVO Contributor Roles"],
  },

  // Anchor-declaration action (corpus gap): ~43% of the 314 real plans explicitly
  // ground their reform in DORA / Leiden / SCOPE, but no action captured that move.
  {
    commitment: "qualitative",
    fromLevel: 0,
    toLevel: 2,
    effort: "low",
    impact: "high",
    theme: "scope-dora",
    title: "Anchor your reform in an established framework (DORA / Leiden / SCOPE)",
    description: "Don't start from a blank page. Formally adopt an existing anchor: sign DORA, endorse the Leiden Manifesto, or use the SCOPE model as your workflow spine. Roughly 43% of published CoARA action plans reference at least one — it gives your reform legitimacy, a shared vocabulary, and ready-made guidance evaluators already recognise.",
    planText: "We will anchor our reform in an established framework — signing DORA, endorsing the Leiden Manifesto, or adopting the SCOPE model as our workflow spine — giving it legitimacy, a shared vocabulary and guidance evaluators already recognise.",
    examples: ["University of Murcia", "University of Fribourg", "Maastricht University", "DORA", "Leiden Manifesto", "SCOPE model (INORMS)"],
  },
];

/** Priority score: higher = more urgent. Based on gap between current and target, impact, effort, and optional institutional context. */
export function prioritiseActions(actions, currentLevels, selectedContext = "all") {
  return actions
    .filter((a) => {
      const current = currentLevels[a.commitment] ?? 0;
      return current >= a.fromLevel && current < a.toLevel;
    })
    .map((a) => {
      const current = currentLevels[a.commitment] ?? 0;
      const gap = a.toLevel - current;
      const impactScore = { low: 1, medium: 2, high: 3 }[a.impact];
      const effortPenalty = { low: 0, medium: 0.5, high: 1 }[a.effort];
      // Context boost: action tagged with the selected context gets +2 priority
      let contextBoost = 0;
      if (a.relevanceContext && selectedContext !== "all") {
        if (a.relevanceContext.includes(selectedContext)) contextBoost = 2;
      }
      return { ...a, priority: gap * impactScore - effortPenalty + contextBoost };
    })
    .sort((a, b) => b.priority - a.priority);
}
