/**
 * Safe wrappers around `new Date(...)` that never return `Invalid Date`.
 * They return `null` instead, so callers can branch explicitly.
 */
export function parseDate(value: string | number | Date | null | undefined): Date | null {
  if (value === null || value === undefined) return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

/** Like {@link parseDate} but returns `fallback` instead of `null`. */
export function parseDateOr(
  value: string | number | Date | null | undefined,
  fallback: Date
): Date {
  return parseDate(value) ?? fallback;
}
