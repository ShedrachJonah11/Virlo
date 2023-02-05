/**
 * Number formatting helpers. All helpers are pure and locale-aware
 * via Intl.NumberFormat.
 */

/** Format a plain number with thousand separators. */
export function formatNumber(
  value: number,
  locale: string = "en-US"
): string {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat(locale).format(value);
}

/**
 * Format a number in compact notation, e.g. 1234 -> "1.2K", 2_400_000 -> "2.4M".
 * Falls back to {@link formatNumber} for values < 1000.
 */
export function formatCompactNumber(
  value: number,
  locale: string = "en-US"
): string {
  if (!Number.isFinite(value)) return "—";
  // Normalise -0 to 0 so we never render "-0".
  const v = Object.is(value, -0) ? 0 : value;
  if (Math.abs(v) < 1000) return formatNumber(v, locale);
  return new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(v);
}

/**
 * Format a fractional value as a percentage string.
 *
 * @param value - Either a fraction (0.085) or a percentage (8.5).
 * @param opts.alreadyPercent - If true, treat `value` as a percentage,
 *   not a fraction. Defaults to false.
 */
export function formatPercent(
  value: number,
  opts: { alreadyPercent?: boolean; digits?: number; locale?: string } = {}
): string {
  if (!Number.isFinite(value)) return "—";
  const { alreadyPercent = false, digits = 1, locale = "en-US" } = opts;
  const fraction = alreadyPercent ? value / 100 : value;
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(fraction);
}
