import { parseDate } from "./parse";

export const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export type Weekday = (typeof WEEKDAYS)[number];

export function getWeekday(value: string | number | Date): Weekday | null {
  const date = parseDate(value);
  if (!date) return null;
  return WEEKDAYS[date.getUTCDay()];
}

/** True for Saturday / Sunday. */
export function isWeekend(value: string | number | Date): boolean {
  const day = parseDate(value)?.getUTCDay();
  return day === 0 || day === 6;
}
