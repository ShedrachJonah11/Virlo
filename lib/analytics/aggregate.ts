import type { AnalyticsData } from "@/types";

/** Sum of a numeric column across a series. */
export function sumBy<K extends keyof AnalyticsData>(
  series: AnalyticsData[],
  key: K
): number {
  if (typeof series[0]?.[key] !== "number") return 0;
  return series.reduce(
    (total, row) => total + (row[key] as unknown as number),
    0
  );
}

/** Arithmetic mean of a numeric column. Returns 0 for an empty series. */
export function averageBy<K extends keyof AnalyticsData>(
  series: AnalyticsData[],
  key: K
): number {
  if (series.length === 0) return 0;
  return sumBy(series, key) / series.length;
}

/** Highest value in a numeric column. */
export function maxBy<K extends keyof AnalyticsData>(
  series: AnalyticsData[],
  key: K
): number {
  if (series.length === 0) return 0;
  return series.reduce(
    (max, row) => Math.max(max, row[key] as unknown as number),
    Number.NEGATIVE_INFINITY
  );
}
