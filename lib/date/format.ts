import { parseDate } from "./parse";

/**
 * Format a date as ISO-8601 calendar date (YYYY-MM-DD) in UTC.
 * Returns an empty string for unparseable inputs.
 */
export function toISODate(value: string | number | Date): string {
  const date = parseDate(value);
  if (!date) return "";
  return date.toISOString().slice(0, 10);
}

/** Locale-aware long format, e.g. "January 15, 2024". */
export function formatLongDate(
  value: string | number | Date,
  locale: string = "en-US"
): string {
  const date = parseDate(value);
  if (!date) return "";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/** Locale-aware short format, e.g. "Jan 15, 2024". */
export function formatShortDate(
  value: string | number | Date,
  locale: string = "en-US"
): string {
  const date = parseDate(value);
  if (!date) return "";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}
