import { useDataset } from "../i18n/context";

export default function MaturityBadge({ level, size = "md" }) {
  const { MATURITY_LEVELS } = useDataset();
  const info = MATURITY_LEVELS[level] ?? MATURITY_LEVELS[0];
  const sizes = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold ${sizes[size]}`}
      style={{
        background: `${info.color}20`,
        color: info.color,
        border: `1px solid ${info.color}40`,
      }}
    >
      <span className="font-mono text-xs">{info.icon}</span>
      {info.label}
    </span>
  );
}
