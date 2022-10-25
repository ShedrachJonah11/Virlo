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
