/**
 * The published frameworks an action can put into practice: DORA, the Leiden Manifesto and
 * SCOPE. An action's `frameworks` array holds keys from FRAMEWORKS; tests/frameworks.test.mjs
 * fails on any key that is not listed here.
 *
 * A tag means the action carries out what that recommendation or principle asks, read against
 * the source text, not that the action merely shares a topic with it. Many actions carry no
 * tag: DORA and Leiden say what to value and what to stop using, and say little about how an
 * institution organises the change, which is where most of CoARA's process actions sit.
 *
 * Sources, read 2026-09-28:
 * - DORA, San Francisco Declaration on Research Assessment (2012), 18 recommendations:
 *   https://sfdora.org/read/
 * - Hicks, Wouters, Waltman, de Rijcke & Rafols (2015), "The Leiden Manifesto for research
 *   metrics", Nature 520, 429-431, doi:10.1038/520429a, 10 principles.
 * - SCOPE, INORMS Research Evaluation Group: five stages (Start with what you value, Context,
 *   Options, Probe deeply, Evaluate your evaluation) under three principles (evaluate only
 *   where necessary, evaluate with the evaluated, draw on evaluation expertise).
 *   Himanen et al. (2024), F1000Research 12:1241, doi:10.12688/f1000research.140810.2
 */

export const FRAMEWORK_SOURCES = {
  DORA: "https://sfdora.org/read/",
  Leiden: "https://doi.org/10.1038/520429a",
  SCOPE: "https://doi.org/10.12688/f1000research.140810.2",
};

const dora = {
  1: "Do not use journal-based metrics as a surrogate for the quality of individual work or in hiring, promotion or funding decisions",
  4: "Institutions: be explicit about the criteria for hiring, tenure and promotion, especially for early-stage researchers",
  5: "Institutions: consider the value and impact of all research outputs, and a broad range of impact measures",
  8: "Encourage responsible authorship and information about each author's contribution",
  15: "Researchers on committees: assess scientific content rather than publication metrics",
  17: "Researchers: use a range of metrics and indicators in personal statements as evidence of impact",
  18: "Researchers: challenge inappropriate reliance on the JIF, and promote and teach best practice",
};

const leiden = {
  1: "Quantitative evaluation should support qualitative, expert assessment",
  2: "Measure performance against the research missions of the institution, group or researcher",
  3: "Protect excellence in locally relevant research",
  4: "Keep data collection and analytical processes open, transparent and simple",
  5: "Allow those evaluated to verify data and analysis",
  6: "Account for variation by field in publication and citation practices",
  7: "Base assessment of individual researchers on a qualitative judgement of their portfolio",
  8: "Avoid misplaced concreteness and false precision",
  9: "Recognise the systemic effects of assessment and indicators",
  10: "Scrutinise indicators regularly and update them",
};

const scope = {
  P1: "Principle: evaluate only where necessary",
  P2: "Principle: evaluate with the evaluated",
  P3: "Principle: draw on evaluation expertise",
  S: "Stage S: start with what you value",
  C: "Stage C: context considerations",
  O: "Stage O: options for evaluating",
  P: "Stage P: probe deeply (who is disadvantaged, gaming, unintended consequences, cost)",
  E: "Stage E: evaluate your evaluation",
};

/** key ("DORA 4", "Leiden 7", "SCOPE P2") -> { framework, ref, summary, url } */
export const FRAMEWORKS = Object.fromEntries([
  ...Object.entries(dora).map(([n, s]) => [`DORA ${n}`, { framework: "DORA", ref: n, summary: s, url: FRAMEWORK_SOURCES.DORA }]),
  ...Object.entries(leiden).map(([n, s]) => [`Leiden ${n}`, { framework: "Leiden", ref: n, summary: s, url: FRAMEWORK_SOURCES.Leiden }]),
  ...Object.entries(scope).map(([n, s]) => [`SCOPE ${n}`, { framework: "SCOPE", ref: n, summary: s, url: FRAMEWORK_SOURCES.SCOPE }]),
]);
