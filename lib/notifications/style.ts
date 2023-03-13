import type { NotificationKind } from "@/types";

/**
 * Pick a tone-appropriate Tailwind colour class for a notification kind.
 * Keep this in sync with the design tokens in `globals.css`.
 */
export function notificationToneClass(kind: NotificationKind = "info"): string {
  switch (kind) {
    case "alert":
      return "text-destructive";
    case "warning":
      return "text-amber-500";
    case "success":
      return "text-emerald-500";
    case "info":
    default:
      return "text-primary";
  }
}
