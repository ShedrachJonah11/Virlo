/**
 * Format the distance between two timestamps as a human-readable
 * string, e.g. "2 minutes ago", "in 3 hours".
 *
 * Uses Intl.RelativeTimeFormat under the hood.
 */
const DIVISIONS: Array<{ amount: number; name: Intl.RelativeTimeFormatUnit }> = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

export function formatRelativeTime(
  date: Date | string | number,
  now: Date = new Date(),
  locale: string = "en-US"
): string {
  const target = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(target.getTime())) return "";
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  let duration = (target.getTime() - now.getTime()) / 1000;
  for (const division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
  return formatter.format(Math.round(duration), "years");
}
