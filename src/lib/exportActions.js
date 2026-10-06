/**
 * The actions as the Results tab exports them in JSON.
 *
 * Two things in this export were easy to misread when copied into a plan:
 * `description` is interface copy addressed to the tool's user ("Survey your research
 * community..."), and `fromLevel` is the lowest level at which an action is recommended, not
 * the institution's level. So each action now carries `planText`, the action written as the
 * institution would write it (the text the Markdown report uses), and its target as
 * `currentLevel` -> `targetLevel`; the threshold keeps its meaning in its name.
 */
export function exportActions(prioritised, levels) {
  return prioritised.map((a) => {
    const currentLevel = levels[a.commitment] ?? 0;
    return {
      id: a.id,
      commitment: a.commitment,
      title: a.title,
      planText: a.planText || a.description,
      description: a.description,
      effort: a.effort,
      impact: a.impact,
      currentLevel,
      targetLevel: a.toLevel,
      target: `${currentLevel} → ${a.toLevel}`,
      eligibleFromLevel: a.fromLevel,
    };
  });
}
