import { parseDate } from "./parse";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** Whole-day difference between two dates (ignores time of day). */
export function daysBetween(
  a: string | number | Date,
  b: string | number | Date
): number {
  const da = parseDate(a);
  const db = parseDate(b);
  if (!da || !db) return 0;
  const utcA = Date.UTC(da.getFullYear(), da.getMonth(), da.getDate());
  const utcB = Date.UTC(db.getFullYear(), db.getMonth(), db.getDate());
  return Math.round((utcB - utcA) / MS_PER_DAY);
}

/** Returns true if the two dates fall on the same calendar day in UTC. */
export function isSameDay(
  a: string | number | Date,
  b: string | number | Date
): boolean {
  return daysBetween(a, b) === 0;
}

/** Add N whole days to a date and return a new Date. */
export function addDays(value: string | number | Date, days: number): Date {
  const date = parseDate(value) ?? new Date();
  const next = new Date(date.getTime());
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}
