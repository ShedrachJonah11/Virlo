/**
 * Period-over-period growth as a percentage.
 *
 *   growthRate(120, 100) ->  20  (up 20%)
 *   growthRate(80, 100)  -> -20  (down 20%)
 *   growthRate(50, 0)    ->  0   (no prior baseline)
 */
export function growthRate(current: number, previous: number): number {
  if (!Number.isFinite(current) || !Number.isFinite(previous)) return 0;
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

/** True when `growth >= threshold`. Defaults to a 5% gain. */
export function isMeaningfulGrowth(growth: number, threshold: number = 5): boolean {
  return growth >= threshold;
}
