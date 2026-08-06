/**
 * Plan-stage ranking: the second half of the prioritisation method.
 *
 * `prioritiseActions` (data/actions.js) scores an action on its own merits —
 * gap x impact, minus an effort penalty, plus the per-action context tag. That is
 * stage one, and it is deliberately kept re-copyable from the full app.
 *
 * Stage two is here: the user's plan settings re-rank and filter that list, and it
 * is what the Results and Report tabs actually display. Every weight below is a
 * calibration decision, so it lives in src/data/ with the rest of the methodology
 * rather than in the persistence layer.
 *
 * The two stages both react to the selected context, by design and on purpose:
 * stage one boosts the handful of actions carrying an explicit `relevanceContext`
 * tag, stage two boosts every action under the commitments that matter most for
 * that setting. An action that satisfies both is boosted twice — see
 * CONTEXT_MAX_COMBINED_BOOST.
 */

/** Plan settings before the user changes anything. */
export const DEFAULT_PLAN = {
  horizon: "balanced",      // "quick-wins" | "balanced" | "structural"
  context: "all",           // a CONTEXTS id
  focusCommitments: [],     // array of commitment ids to boost
  includeHighEffort: true,  // show high-effort actions?
};

/**
 * Context -> commitment affinity (lite-only layer).
 *
 * The shared `prioritiseActions` only boosts the handful of actions that carry an
 * explicit `relevanceContext` tag (~7 of 47), so picking a context barely moved the
 * list. This map gives every context broad, principled reach: selecting it boosts ALL
 * actions belonging to the commitments that matter most for that setting (mirrors the
 * CONTEXTS descriptions and the report's context sentences). Kept out of
 * `data/actions.js` so that file stays re-copyable from the full app.
 */
export const CONTEXT_AFFINITY = {
  all: [],
  "global-north": ["review-criteria", "communicate", "collective-eval", "exchange"],
  "global-south": ["diversity", "exchange", "no-rankings", "no-metrics"],
  "indigenous-serving": ["diversity", "collective-eval", "review-criteria"],
  "multi-regional": ["review-criteria", "collective-eval", "exchange", "no-rankings"],
  funder: ["qualitative", "no-metrics", "review-criteria", "awareness"],
};

/** Per-matching-commitment boost applied for the selected institutional context. */
export const CONTEXT_AFFINITY_BOOST = 2;

/**
 * Ceiling on how much the selected context can move a single action: the stage-one
 * per-action tag (+2, in prioritiseActions) plus the stage-two affinity boost.
 * Documented and pinned by a test so the interaction cannot drift unnoticed.
 */
export const CONTEXT_MAX_COMBINED_BOOST = 4;

/** A commitment the user explicitly marked as a priority. */
export const FOCUS_BOOST = 3;

/** Horizon re-weighting: quick wins favour low effort, structural favours high impact. */
export const HORIZON_WEIGHTS = {
  "quick-wins": { effort: { low: 2, medium: 0, high: -2 }, impact: {} },
  balanced: { effort: {}, impact: {} },
  structural: { effort: {}, impact: { low: 0, medium: 0, high: 2 } },
};

/** An action that lands the commitment at or below its declared target level. */
export const TARGET_BOOST = 2;

/** A commitment whose perspectives disagree by at least the threshold. */
export const DIVERGENCE_BOOST = 2;

/** Levels of disagreement between perspectives before a commitment counts as contested. */
export const DEFAULT_DIVERGENCE_THRESHOLD = 2;

/**
 * Re-rank a context-prioritised action list using the user's plan settings.
 * `prioritised` is the output of prioritiseActions(ACTIONS, levels, plan.context),
 * so the per-action context tag boost is already applied; here we layer the context
 * affinity boost, horizon, focus, the high-effort filter, the ambition (target)
 * gating, and the perception-gap boost on top, then re-sort.
 *
 * Ambition is a **hard gate** (only when a target is set for the commitment):
 *   - a commitment already at/above its target drops out entirely (we are there);
 *   - actions that begin at/beyond the target drop out (pure overshoot);
 *   - actions that climb toward the target survive and get a small boost.
 * Commitments with no target are untouched, so the gate is inert by default.
 *
 * `divergence` (commitmentId -> spread across perspectives) boosts contested areas:
 * where perspectives disagree by >= the threshold, the institution should align first.
 */
export function applyPlan(
  prioritised,
  plan = DEFAULT_PLAN,
  levels = {},
  targets = {},
  divergence = {},
  divergenceThreshold = DEFAULT_DIVERGENCE_THRESHOLD,
) {
  const focus = new Set(plan.focusCommitments ?? []);
  const affine = new Set(CONTEXT_AFFINITY[plan.context] ?? []);
  const horizon = HORIZON_WEIGHTS[plan.horizon] ?? HORIZON_WEIGHTS.balanced;
  let list = prioritised;
  if (!plan.includeHighEffort) list = list.filter((a) => a.effort !== "high");
  // Hard ambition gate (skipped for commitments without a target).
  list = list.filter((a) => {
    const target = targets[a.commitment];
    if (target == null || target <= 0) return true;
    const current = levels[a.commitment] ?? 0;
    if (target <= current) return false; // already at/above the declared ambition
    if (a.fromLevel >= target) return false; // begins beyond the ambition
    return true;
  });
  return list
    .map((a) => {
      let priority = a.priority;
      if (affine.has(a.commitment)) priority += CONTEXT_AFFINITY_BOOST;
      if (focus.has(a.commitment)) priority += FOCUS_BOOST;
      priority += horizon.effort[a.effort] ?? 0;
      priority += horizon.impact[a.impact] ?? 0;
      const target = targets[a.commitment];
      if (target != null && target > 0 && a.toLevel <= target) priority += TARGET_BOOST;
      if ((divergence[a.commitment] ?? 0) >= divergenceThreshold) priority += DIVERGENCE_BOOST;
      return { ...a, priority };
    })
    .sort((a, b) => b.priority - a.priority);
}
