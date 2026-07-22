/**
 * CoARA Agreement on Reforming Research Assessment — 10 Commitments
 * Source: https://coara.org/agreement/the-commitments/
 * Full text: https://doi.org/10.5281/zenodo.13480728
 *
 * Each commitment has:
 * - id: short key
 * - number: official number (1-10)
 * - type: "core" | "supporting"
 * - title: short title
 * - text: official commitment text
 * - subCommitments: optional sub-commitments (e.g., C6.1 and C6.2)
 * - inPractice: what it means concretely for an institution
 * - icon: emoji for visual identification
 * - relatedDeclarations: which other declarations reinforce this
 */

export const MATURITY_LEVELS = [
  {
    level: 0,
    label: "Unaware",
    description: "The institution has no knowledge of this commitment or its implications.",
    color: "var(--color-level-0)",
    icon: "~",
  },
  {
    level: 1,
    label: "Aware",
    description: "The commitment is known but no concrete action has been taken.",
    color: "var(--color-level-1)",
    icon: "!",
  },
  {
    level: 2,
    label: "Exploring",
    description: "Internal discussions, working groups formed, mapping existing practices.",
    color: "var(--color-level-2)",
    icon: "?",
  },
  {
    level: 3,
    label: "Planning",
    description: "Action plan developed, resources assigned, pilots designed.",
    color: "var(--color-level-3)",
    icon: ">",
  },
  {
    level: 4,
    label: "Implementing",
    description: "Changes actively being made, new criteria in use, training underway.",
    color: "var(--color-level-4)",
    icon: "#",
  },
  {
    level: 5,
    label: "Embedded",
    description: "New practices are the norm, monitoring active, continuous improvement.",
    color: "var(--color-level-5)",
    icon: "*",
  },
];

export const COMMITMENTS = [
  {
    id: "diversity",
    number: 1,
    type: "core",
    title: "Recognise diversity of contributions",
    text: "Recognise the diversity of activities, practices, and contributions that maximise the quality and impact of research — including but not limited to: quality research (from fundamental to translational), teaching, mentoring, supervision, leadership, entrepreneurship, knowledge mobilisation, research management, innovation, public-private collaboration, citizen engagement, and open science practices.",
    inPractice: [
      "Expand what 'counts' in evaluation beyond publications",
      "Include datasets, software, patents, mentoring, outreach in assessment criteria",
      "Value team contributions and leadership roles",
      "Recognise open science practices (data sharing, preregistration, open peer review)",
    ],
    icon: "C1",
    relatedDeclarations: ["dora", "hongkong", "leiden"],
  },
  {
    id: "qualitative",
    number: 2,
    type: "core",
    title: "Base assessment on qualitative judgement",
    text: "Base the assessment of research primarily on qualitative judgement, for which peer review is central, supported by a responsible use of quantitative indicators. This implies abandoning inappropriate uses of journal- and publication-based metrics, especially the Journal Impact Factor (JIF), to assess individual researchers or make hiring and funding decisions.",
    inPractice: [
      "Eliminate JIF, h-index, and journal quartiles from hiring/promotion criteria",
      "Redesign evaluation forms to emphasise narrative and qualitative evidence",
      "Train evaluation committees in responsible metrics use",
      "Implement narrative CVs or portfolio-based assessment",
    ],
    icon: "C2",
    relatedDeclarations: ["dora", "leiden"],
  },
  {
    id: "no-metrics",
    number: 3,
    type: "core",
    title: "Abandon inappropriate journal-based metrics",
    text: "Stop using journal-based metrics such as the Journal Impact Factor and h-index as proxy indicators for the quality of individual research outputs or individual researchers, in hiring, promotion, and funding decisions.",
    inPractice: [
      "Audit all evaluation criteria for references to JIF, h-index, quartiles",
      "Remove metric thresholds from job postings and promotion guidelines",
      "Replace quantitative proxies with content-based assessment",
      "Communicate the change to the research community",
    ],
    icon: "C3",
    relatedDeclarations: ["dora", "leiden"],
  },
  {
    id: "no-rankings",
    number: 4,
    type: "core",
    title: "Avoid rankings in research assessment",
    text: "Avoid the use of rankings of higher education and research institutions in processes of research assessment.",
    inPractice: [
      "Do not use Shanghai/THE/QS rankings as quality proxy for researchers",
      "Remove references to institutional rankings from evaluation criteria",
      "Assess collaboration quality based on content, not partner prestige",
    ],
    icon: "C4",
    relatedDeclarations: ["leiden"],
  },
  {
    id: "resources",
    number: 5,
    type: "supporting",
    title: "Commit resources for reform",
    text: "Commit the resources needed to reform research assessment practices, including funding, training, infrastructure, and staff time.",
    inPractice: [
      "Allocate budget for assessment reform (training, tools, personnel)",
      "Appoint dedicated staff or committee for reform coordination",
      "Provide protected time for evaluation committee members",
      "Invest in infrastructure for tracking diverse outputs",
    ],
    icon: "C5",
    relatedDeclarations: [],
  },
  {
    id: "review-criteria",
    number: 6,
    type: "supporting",
    title: "Review and develop assessment criteria, tools and processes",
    text: "Review and develop criteria, tools, and processes for research assessment, with researcher involvement, promoting interoperability and context-adapted approaches at all career stages.",
    subCommitments: [
      { id: "6.1", text: "For units and institutions: develop criteria with researcher involvement, promoting interoperability across systems" },
      { id: "6.2", text: "For projects and researchers: create context-adapted assessment approaches at all career stages" },
    ],
    inPractice: [
      "Audit current evaluation criteria across all processes",
      "Redesign rubrics for hiring, promotion, tenure, and internal funding",
      "Create new templates (narrative CV, portfolio, impact statement)",
      "Involve researchers in criteria design (not top-down only)",
      "Adapt criteria to career stage (early-career vs senior)",
      "Pilot new criteria and iterate based on feedback",
    ],
    icon: "C6",
    relatedDeclarations: ["dora", "leiden", "hongkong"],
  },
  {
    id: "awareness",
    number: 7,
    type: "supporting",
    title: "Raise awareness and provide guidance",
    text: "Raise awareness about research assessment reform and provide transparent communication, guidance, and training about assessment criteria, processes, and their responsible use.",
    inPractice: [
      "Run workshops and info sessions on reformed assessment",
      "Publish evaluation criteria openly and accessibly",
      "Create guides for evaluators and those being evaluated",
      "Develop FAQs and communication materials",
    ],
    icon: "C7",
    relatedDeclarations: [],
  },
  {
    id: "exchange",
    number: 8,
    type: "supporting",
    title: "Exchange practices and experiences",
    text: "Exchange practices and experiences to enable mutual learning within and between signatory organisations, recognising that different organisations are at different points along the way.",
    inPractice: [
      "Participate in CoARA Action Clusters and working groups",
      "Share good practices with peer institutions",
      "Attend or host workshops on assessment reform",
      "Publish reports on implementation experience",
    ],
    icon: "C8",
    relatedDeclarations: [],
  },
  {
    id: "communicate",
    number: 9,
    type: "supporting",
    title: "Communicate progress",
    text: "Communicate progress made on adherence to the Principles and implementation of the Commitments, primarily through publicly shared self-assessment on a trust basis.",
    inPractice: [
      "Publish periodic progress reports (every 2-3 years)",
      "Share self-assessments publicly and engage in mutual learning with other signatories",
      "Share metrics on adoption (% criteria reformed, evaluators trained, etc.)",
      "Be transparent about challenges and setbacks",
    ],
    icon: "C9",
    relatedDeclarations: [],
  },
  {
    id: "collective-eval",
    number: 10,
    type: "supporting",
    title: "Evaluate based on evidence and open data",
    text: "Use rigorous methods to assess whether reformed practices achieve desired outcomes. Ensure community control of assessment data, based on evidence and open data, maintaining transparency and reproducibility.",
    inPractice: [
      "Contribute data for ecosystem-wide progress monitoring",
      "Use open data and infrastructure for assessment (not proprietary systems)",
      "Participate in collective assessments with other signatories",
      "Share anonymised evaluation data for benchmarking",
      "Support development of evidence-based indicators of reform progress",
    ],
    icon: "C10",
    relatedDeclarations: ["barcelona"],
  },
];
