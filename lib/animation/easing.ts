/**
 * Common CSS-equivalent easing curves as `cubic-bezier` strings.
 * Use with Tailwind's `transition-[cubic-bezier(...)]` arbitrary values.
 */
export const EASING = {
  standard: "cubic-bezier(0.2, 0, 0, 1)",
  emphasised: "cubic-bezier(0.3, 0, 0, 1)",
  entry: "cubic-bezier(0, 0, 0, 1)",
  exit: "cubic-bezier(0.3, 0, 1, 1)",
} as const;

export type EasingKey = keyof typeof EASING;
