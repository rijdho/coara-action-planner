/**
 * Institutional context options — used to weight action priorities.
 * Trimmed copy of reform-assessment/web/src/data/context.js (CONTEXTS only).
 * The ids match the relevanceContext tags in actions.js.
 */

export const CONTEXTS = [
  {
    id: "all",
    label: "Unspecified / general",
    description: "Use the full set of actions without context-based re-weighting.",
  },
  {
    id: "global-north",
    label: "Global North / resource-rich",
    description: "Established CRIS, funded support for reform, participation in CoARA networks.",
  },
  {
    id: "global-south",
    label: "Global South / resource-constrained",
    description: "Lightweight tools, regional forums (IRAF, AFRA, AOSP), protection of local-language publishing.",
  },
  {
    id: "indigenous-serving",
    label: "Indigenous-serving / community-governed",
    description: "CARE principles and community data sovereignty are load-bearing.",
  },
  {
    id: "multi-regional",
    label: "Multi-regional / cross-border",
    description: "Data visitation and federated models; exposure to international asymmetry.",
  },
  {
    id: "funder",
    label: "Research Funding Organisation (RFO)",
    description: "Incentive design, call criteria, AI policy for reviewers, framework alignment.",
  },
];
