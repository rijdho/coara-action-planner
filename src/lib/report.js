/**
 * Generates a pre-structured, editable action-plan narrative from the user's
 * assessment + plan + prioritised actions, in the requested language.
 *
 * The section structure mirrors the common shape of real CoARA action plans
 * (sampled from the ~300 plans in the Zenodo `coara_action_plans` community):
 *   Introduction → Baseline self-assessment → Strategic priorities →
 *   Planned actions per commitment (Action / Target / Reference / Responsible /
 *   Timeframe / Indicator) → Resources (C5) → Awareness & exchange (C7–C8) →
 *   Monitoring & communicating progress (C9–C10) → Ongoing commitment.
 *
 * All prose lives in the language string tables (src/i18n/report.en.js + the
 * <lang> overlays). Output is Markdown so it pastes cleanly into docs/Word/Google
 * Docs. Bracketed [placeholders] are deliberate blanks for the institution to fill.
 */
import { getDataset, getReportStrings, interpolate } from "../i18n/registry";

const HORIZON_KEY = { "quick-wins": "quickwins", balanced: "balanced", structural: "structural" };
const CONTEXT_KEY = {
  "global-north": "globalnorth",
  "global-south": "globalsouth",
  "indigenous-serving": "indigenous",
  "multi-regional": "multiregional",
  funder: "funder",
};

export function buildReport({ institutionName, levels, plan, prioritised, overallLevel, date, lang = "en", targets = {}, roles = [], divergence = {}, threshold = 2 }) {
  const S = getReportStrings(lang);
  const { COMMITMENTS, MATURITY_LEVELS, ROLES } = getDataset(lang);
  const roleLabel = (id) => ROLES.find((r) => r.id === id)?.label ?? id;

  const inst = institutionName || "[Institution]";
  const lvlLabel = MATURITY_LEVELS[overallLevel]?.label ?? "—";
  const effortWord = (e) => S[`effort_${e}`] ?? e;
  const impactWord = (i) => S[`impact_${i}`] ?? i;

  const byId = (id) => COMMITMENTS.find((c) => c.id === id);
  const num = (id) => byId(id)?.number;
  const title = (id) => byId(id)?.title;

  // Group commitments by maturity band for the baseline narrative.
  const band = (lo, hi) =>
    COMMITMENTS.filter((c) => {
      const l = levels[c.id] ?? 0;
      return l >= lo && l <= hi;
    }).map((c) => `C${c.number} ${c.title}`);

  const L = [];
  const w = (s = "") => L.push(s);

  const horizonKey = HORIZON_KEY[plan.horizon] || "balanced";
  const tf = S[`tf_${horizonKey}`] || S.tf_balanced;

  // Header
  w(`# ${interpolate(S.docTitle, { inst })}`);
  w(`*${interpolate(S.subtitle, { date })}*`);
  w();

  // Introduction
  w(`## ${S.h_intro}`);
  const ctxKey = CONTEXT_KEY[plan.context];
  const ctxSentence = ctxKey ? S[`cs_${ctxKey}`] || "" : "";
  w(interpolate(S.intro1, { inst }) + ctxSentence);
  w();
  w(interpolate(S.intro2, { inst }));
  w();
  // Whose perspective produced this self-assessment.
  if (roles.length > 1) {
    w(interpolate(S.respondentMulti, { n: roles.length, roles: roles.map(roleLabel).join(", ") }));
    w();
  } else if (roles.length === 1 && roles[0] !== "unspecified") {
    w(interpolate(S.respondentSingle, { role: roleLabel(roles[0]) }));
    w();
  }

  // Baseline
  const strengths = band(4, 5);
  const developing = band(2, 3);
  const gaps = band(0, 1);
  w(`## ${S.h_baseline}`);
  w(`**${interpolate(S.overall, { level: overallLevel, label: lvlLabel })}**`);
  w();
  if (strengths.length) w(`- **${S.established}** ${strengths.join("; ")}.`);
  if (developing.length) w(`- **${S.developing}** ${developing.join("; ")}.`);
  if (gaps.length) w(`- **${S.gaps}** ${gaps.join("; ")}.`);
  w();
  w(interpolate(S.baselineClose, { inst }));
  w();

  // Strategic priorities
  w(`## ${S.h_priorities}`);
  const focus = (plan.focusCommitments || []).map((id) => `C${num(id)} ${title(id)}`);
  w(
    focus.length
      ? interpolate(S.prioritiesFocus, { tf, inst, focus: focus.join("; ") })
      : interpolate(S.prioritiesGaps, { tf, inst }),
  );
  w();
  w(S[`hs_${horizonKey}`] || S.hs_balanced);
  w();
  // Ambition: declared target maturity per commitment (where set above current).
  const ambition = COMMITMENTS.filter((c) => {
    const tgt = targets[c.id] ?? 0;
    return tgt > 0 && tgt > (levels[c.id] ?? 0);
  }).map((c) => `C${c.number} → ${interpolate(S.targetLevelShort, { level: targets[c.id], label: MATURITY_LEVELS[targets[c.id]].label })}`);
  if (ambition.length) {
    w(interpolate(S.ambitionLine, { inst, targets: ambition.join("; ") }));
    w();
  }
  // Contested commitments (perspectives diverge ≥2 levels) — align first.
  const contested = COMMITMENTS.filter((c) => (divergence[c.id] ?? 0) >= threshold).map((c) => `C${c.number} ${c.title}`);
  if (contested.length) {
    w(interpolate(S.contestedNote, { contested: contested.join("; ") }));
    w();
  }

  // Planned actions, grouped by commitment (only those with actions)
  w(`## ${S.h_actions}`);
  const focusClause = (plan.focusCommitments || []).length ? S.actionsFocusClause : "";
  w(interpolate(S.actionsIntro, { focusClause }));
  w();

  let any = false;
  for (const c of COMMITMENTS) {
    // Include every recommended action for the commitment — no silent cap. The
    // written report must match what Results shows; the draft is edited down by
    // hand, so completeness beats brevity here.
    const acts = prioritised.filter((a) => a.commitment === c.id);
    if (!acts.length) continue;
    any = true;
    const lvl = levels[c.id] ?? 0;
    w(
      `### ${interpolate(S.actionHeading, {
        num: c.number,
        title: c.title,
        lvl,
        label: MATURITY_LEVELS[lvl].label,
      })}`,
    );
    for (const a of acts) {
      // planText is the action restated as institutional first-person prose;
      // description is interface copy addressed to the tool's user.
      w(`- **${S.actionLabel}** ${a.title}. ${a.planText || a.description}`);
      w(
        `  - *${S.targetLabel}* ${interpolate(S.targetValue, {
          // Anchor on where the institution actually is, not on the action's
          // eligibility threshold — prioritiseActions already guarantees
          // lvl >= a.fromLevel, so a.fromLevel says nothing about this reader.
          from: lvl,
          to: a.toLevel,
          effort: effortWord(a.effort),
          impact: impactWord(a.impact),
        })}`,
      );
      if (a.examples?.length) w(`  - *${S.referenceLabel}* ${a.examples.join("; ")}`);
      w(`  - *${S.responsibleLabel}* ${S.responsiblePlaceholder}`);
      w(`  - *${S.timeframeLabel}* ${S.timeframePlaceholder}`);
      w(`  - *${S.indicatorLabel}* ${S.indicatorPlaceholder}`);
    }
    w();
  }
  if (!any) {
    w(S.noActions);
    w();
  }

  // Resources
  w(`## ${S.h_resources}`);
  w(interpolate(S.resourcesBody, { inst }));
  w();

  // Awareness & exchange
  w(`## ${S.h_awareness}`);
  w(interpolate(S.awarenessBody, { inst }));
  w();

  // Monitoring
  w(`## ${S.h_monitoring}`);
  w(S.monitoringBody);
  w();

  // Ongoing
  w(`## ${S.h_ongoing}`);
  w(interpolate(S.ongoingBody, { inst }));
  w();
  w(`---`);
  w(`*${S.footer}*`);

  return L.join("\n");
}
