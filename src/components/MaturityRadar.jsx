import { useRef } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { useLang } from "../i18n/context";
import { svgToPng, resolveColor } from "../lib/exportChart";

/**
 * Maturity radar.
 *
 * Backwards-compatible simple mode: pass `levels` (+ optional `comparison`).
 * Multi-series mode: pass `series` = [{ key, name, levels, color, dash, fill, width }]
 * to overlay several polygons — used on Results to show each respondent perspective
 * plus the target (ambition) polygon. `target` is a shorthand for one dashed series.
 */
export default function MaturityRadar({ levels, comparison = null, target = null, series = null, exportable = true, exportName = "maturity-radar" }) {
  const { t, dataset } = useLang();
  const { COMMITMENTS, MATURITY_LEVELS } = dataset;
  const wrapRef = useRef(null);

  const built =
    series ?? [
      ...(comparison
        ? [{ key: "previous", name: t("radar_previous"), levels: comparison, color: "var(--color-border)", dash: "4 4", fill: 0.15, width: 1 }]
        : []),
      ...(target
        ? [{ key: "target", name: t("radar_target"), levels: target, color: "var(--color-level-5)", dash: "5 3", fill: 0.04, width: 2 }]
        : []),
      { key: "current", name: t("radar_current"), levels, color: "var(--color-accent)", fill: 0.25, width: 2 },
    ];

  const data = COMMITMENTS.map((c) => {
    const row = { commitment: `C${c.number}`, fullName: c.title };
    for (const s of built) row[s.key] = s.levels?.[c.id] ?? 0;
    return row;
  });

  const showLegend = built.length > 1;

  const handleExport = () => {
    const el = wrapRef.current;
    const svg = el?.querySelector("svg");
    if (!svg) return;
    const bg = resolveColor("var(--color-surface)", el);
    const legend = showLegend
      ? built.map((s) => ({ name: s.name, color: resolveColor(s.color, el) }))
      : null;
    svgToPng(svg, {
      filename: `${exportName}.png`,
      background: bg,
      legend,
      textColor: resolveColor("var(--color-text)", el),
    });
  };

  return (
    <div ref={wrapRef} className="relative">
      {exportable && (
        <button
          onClick={handleExport}
          className="absolute top-0 right-0 z-10 text-[10px] font-semibold px-2 py-0.5 rounded no-print hover:opacity-80"
          style={{ background: "var(--color-surface-alt)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
          title={t("chart_pngTitle")}
        >
          {t("chart_png")}
        </button>
      )}
      <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={data} cx="50%" cy="50%" outerRadius="72%">
        <PolarGrid stroke="var(--color-border)" />
        <PolarAngleAxis dataKey="commitment" tick={{ fill: "var(--color-text-muted)", fontSize: 12 }} />
        <PolarRadiusAxis angle={90} domain={[0, 5]} tickCount={6} tick={{ fill: "var(--color-text-muted)", fontSize: 10 }} />
        {built.map((s) => (
          <Radar
            key={s.key}
            name={s.name}
            dataKey={s.key}
            stroke={s.color}
            fill={s.color}
            fillOpacity={s.fill ?? 0.2}
            strokeWidth={s.width ?? 2}
            {...(s.dash ? { strokeDasharray: s.dash } : {})}
          />
        ))}
        {showLegend && <Legend wrapperStyle={{ fontSize: 11 }} />}
        <Tooltip
          content={({ payload }) => {
            if (!payload?.length) return null;
            const d = payload[0].payload;
            return (
              <div
                className="rounded-lg px-3 py-2 text-sm"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <div className="font-semibold" style={{ color: "var(--color-text)" }}>
                  {d.commitment}: {d.fullName}
                </div>
                {built.map((s) => {
                  const n = d[s.key] ?? 0;
                  const lvl = MATURITY_LEVELS[n];
                  return (
                    <div key={s.key} style={{ color: s.color }}>
                      {built.length > 1 ? `${s.name}: ` : ""}
                      {t("radar_level", { n, label: lvl.label })}
                    </div>
                  );
                })}
              </div>
            );
          }}
        />
      </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
