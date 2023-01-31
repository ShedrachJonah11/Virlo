import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose Tailwind class names with conflict resolution.
 * Re-exported from `lib/cn.ts` and `lib/cx.ts` for consistency
 * with the rest of the project.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
