/**
 * The CoARA secretariat's Guiding Questions, quoted verbatim, mapped onto the
 * sections this tool generates.
 *
 * Source: "Action Plan Guidelines — Support for CoARA signatories in the preparation
 * of action plans", CoARA Secretariat, October 2023.
 * https://www.coara.org/wp-content/uploads/2023/10/Action-plan-guidelines-October-2023_Incl.-Table.pdf
 *
 * Why they are here: an institution drafting a plan is answering these questions,
 * whether or not it says so. Printing each one above the matching section turns the
 * generated draft into something that can be checked against the guidelines line by
 * line, which is the gap between "a draft" and "a document we can submit".
 *
 * Two things to keep straight:
 *
 * 1. These are NOT a required template. The guidelines say so themselves:
 *    "Signatories and CoARA members are not required to use the Guiding Questions,
 *    which do not serve as a rigid template but rather as a resource and suggestion."
 *    CoARA publishes no reporting or monitoring template for member action plans at
 *    all — the "Monitoring Framework" and "Output Template" that turn up in search
 *    results belong to Working Groups, not to member plans. So this is an alignment
 *    aid, never a compliance claim.
 *
 * 2. The questions are quoted in the published English, in every locale. They are a
 *    quotation of a specific document, and CoARA publishes no translations; silently
 *    translating them would misrepresent the source. The surrounding labels are
 *    translated as usual.
 *
 * `verbatim` is present only where the published text carries a defect and this file
 * shows a cleaned version instead. Everything else is transcribed exactly, including
 * the source's own "plans" for "plan" and its capitalised "reform Journey".
 */

export const GUIDING_QUESTIONS_SOURCE = {
  title: "Action Plan Guidelines: Support for CoARA signatories in the preparation of action plans",
  publisher: "CoARA Secretariat",
  date: "2023-10",
  url: "https://www.coara.org/wp-content/uploads/2023/10/Action-plan-guidelines-October-2023_Incl.-Table.pdf",
  // Verbatim, from "Considerations for using the Guiding Questions".
  disclaimer:
    "Signatories and CoARA members are not required to use the Guiding Questions, which do not serve as a rigid template but rather as a resource and suggestion.",
};

/**
 * Phase 1, "Starting Point" — three reflection points, seven questions, keyed to the
 * report section that answers each.
 */
export const STARTING_POINT_QUESTIONS = [
  {
    section: "intro",
    reflectionPoint: "Involve your institutional community in the change process",
    questions: [
      "How are you planning to involve relevant actor groups (such as researchers at different career stages, research support staff, administrators, and others, depending on the scope of your organisation)?",
      "How will you share good practices (internally and with others)?",
    ],
  },
  {
    section: "baseline",
    reflectionPoint: "Identify key challenges to address",
    questions: [
      "Have you identified the key challenges/gaps/bottlenecks/barriers in your organisation with regards to reforming research assessment and the adherence to the action plan? For which does your institution have the power/authority/resources to address?",
      "What will be needed to efficiently address them? And what alternatives/strategies can be useful in overcoming some of these challenges?",
    ],
    // The published PDF splices the reflection-point label into its own first
    // question. Rendering that verbatim would look like our transcription error, so
    // the cleaned form is shown and the original recorded here.
    verbatim: [
      "Have you identified the Identify key challenges to address key challenges/gaps/bottlenecks/barriers in your organisation with regards to reforming research assessment and the adherence to the action plan? For which does your institution have the power/authority/resources to address?",
    ],
  },
  {
    section: "priorities",
    reflectionPoint: "Reflect on your strategy and change approach",
    questions: [
      "What guiding principles do you (and your community) think are priorities in your approach to reform?",
      "How does your organisation intend to make the reforms in order to meet the guiding principles?",
      "What is the process by which your organisation will work on the reform?",
    ],
  },
];

/**
 * Phase 2, "Operational action plan for a 5-year time frame" — the ten Commitments,
 * keyed by this app's commitment ids. The order below is the Agreement's order, which
 * is also COMMITMENTS' order, so C-numbers line up.
 *
 * `reflectionPoint` is the Commitment as worded in the guidelines table; the app's own
 * COMMITMENTS titles are shortened for the interface, so both are kept.
 */
export const COMMITMENT_QUESTIONS = {
  diversity: {
    reflectionPoint:
      "Recognise the diversity of contributions to, and careers in, research in accordance with the needs and nature of the research",
    questions: [
      "How does your organisation plan to enable recognition of more diverse contributions to research?",
      "How does your organisation plan to enable greater diversity in career paths and profiles?",
    ],
  },
  qualitative: {
    reflectionPoint:
      "Base research assessment primarily on qualitative evaluation for which peer review is central, supported by responsible use of quantitative indicators",
    questions: [
      "How does your organisation plan to actively engage in and learn from research on research work?",
      "How does your organisation plan to accommodate qualitative evaluation mechanisms and base the use of metrics in a way that is aligned with your organisation's value system?",
    ],
  },
  "no-metrics": {
    reflectionPoint:
      "Abandon inappropriate uses in research assessment of journal- and publication-based metrics, in particular inappropriate uses of Journal Impact Factor (JIF) and h-index",
    questions: ["How does your organisation plan to mitigate reliance on JIF and h-index?"],
  },
  "no-rankings": {
    reflectionPoint: "Avoid the use of rankings of research organisations in research assessment",
    questions: ["How does your organisation plan to mitigate reliance on organisation rankings?"],
  },
  resources: {
    reflectionPoint:
      "Commit resources to reforming research assessment as is needed to achieve the organisational changes committed to",
    questions: [
      "Which resources will your institution allocate to the implementation of the research assessment reform? (Whether in terms of capacity or budget, to actively engage in the reform Journey)",
    ],
  },
  "review-criteria": {
    reflectionPoint: "Review and develop research assessment criteria, tools and processes",
    questions: [
      "Does your organisation plan to pilot or implement alternative/new assessment criteria, tools, and processes (e.g. narrative CV format, competency-based CV format, evidence-based CV format, diversification of research careers and associated career progression)?",
    ],
  },
  awareness: {
    reflectionPoint:
      "Raise awareness of research assessment reform and provide transparent communication, guidance, and training on assessment criteria and processes as well as their use",
    questions: [
      "Does your institution plan to provide training, guidance and support to assessment panels, committees, and juries?",
    ],
  },
  exchange: {
    reflectionPoint:
      "Exchange practices and experiences to enable mutual learning within and beyond the Coalition",
    questions: [
      "How does your organisation plan to exchange practices and foster exchange of good practices in national and international contexts?",
    ],
  },
  communicate: {
    reflectionPoint:
      "Communicate progress made on adherence to the principles and implementation of the Commitments",
    questions: [
      "How will your organisation ensure the transparent communication of the organisation's research evaluation processes within and outside of the organisation?",
    ],
  },
  "collective-eval": {
    reflectionPoint:
      "Evaluate practices, criteria and tools based on solid evidence and the state-of-the-art in research on research, and make data openly available for evidence gathering and research",
    questions: [
      "How does your institution plans to monitor and (re)evaluate its assessment criteria, tools, and processes? What will be the frequency? Who will be involved in the evaluation?",
    ],
  },
};

/** Starting-point block for a report section, or undefined. */
export function startingPointFor(section) {
  return STARTING_POINT_QUESTIONS.find((q) => q.section === section);
}

/** Guiding questions for a commitment id, or undefined. */
export function questionsFor(commitmentId) {
  return COMMITMENT_QUESTIONS[commitmentId];
}
