import { formatRelativeTime } from "@/lib/format";

/** Format a notification's createdAt as "2 minutes ago", "yesterday", etc. */
export function notificationAge(createdAt: string, now: Date = new Date()): string {
  return formatRelativeTime(createdAt, now);
}
