/**
 * Format a number as currency.
 *
 * @param value - Amount, in the currency's major unit (dollars, not cents).
 */
export function formatCurrency(
  value: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

/** Format a value stored in minor units (cents) into a major-unit currency string. */
export function formatCurrencyFromCents(
  cents: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return formatCurrency(cents / 100, currency, locale);
}
