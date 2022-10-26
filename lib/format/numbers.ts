/**
 * Number formatting helpers. All helpers are pure and locale-aware
 * via Intl.NumberFormat.
 */

/** Format a plain number with thousand separators. */
export function formatNumber(
  value: number,
  locale: string = "en-US"
): string {
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
  if (Math.abs(value) < 1000) return formatNumber(value, locale);
  return new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}
