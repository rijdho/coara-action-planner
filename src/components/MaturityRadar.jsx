import { Suspense, lazy } from "react";

/**
 * Lazy boundary for the maturity radar.
 *
 * Recharts and its dependency tree (lodash, d3-*, decimal.js-light, react-smooth)
 * are by far the heaviest thing this app ships, and only two of the five routes draw
 * a chart. Keeping the implementation behind React.lazy moves all of it into its own
 * chunk, so Start, Plan and Report stop downloading a charting library in order to
 * render text. The import fires when one of the two charting pages mounts, which is
 * the moment the radar is about to be visible anyway.
 *
 * The API is unchanged: this module still default-exports MaturityRadar with the
 * same props, so the call sites read exactly as before and the boundary lives with
 * the component rather than being repeated in every page.
 *
 * The fallback reserves the 400px the ResponsiveContainer occupies, so the card does
 * not jump when the chunk lands. It carries no text on purpose: a translated string
 * would mean a new key in four locales for something on screen for a few frames, and
 * the surrounding card already says what it holds.
 */
const MaturityRadarChart = lazy(() => import("./MaturityRadarChart"));

export default function MaturityRadar(props) {
  return (
    <Suspense fallback={<div className="h-[400px]" aria-hidden="true" />}>
      <MaturityRadarChart {...props} />
    </Suspense>
  );
}
