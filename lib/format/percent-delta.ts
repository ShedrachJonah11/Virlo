import { formatPercent } from "./numbers";

/**
 * Format a positive/negative delta with a leading sign, e.g.
 * "+12.5%", "−4.0%".
 */
export function formatPercentDelta(
  value: number,
  opts: { alreadyPercent?: boolean; digits?: number } = {}
): string {
  if (!Number.isFinite(value)) return "—";
  const base = formatPercent(Math.abs(value), {
    alreadyPercent: opts.alreadyPercent,
    digits: opts.digits,
  });
  if (value > 0) return `+${base}`;
  if (value < 0) return `−${base}`;
  return base;
}
