import { clamp } from "@/lib/range";

/**
 * Format a 0..100 "growth" / "viral" / "algorithm" score as a label.
 *   0..39   -> "Needs work"
 *   40..69  -> "Building"
 *   70..89  -> "Strong"
 *   90..100 -> "Viral"
 */
export function scoreLabel(score: number): string {
  const s = clamp(score, 0, 100);
  if (s < 40) return "Needs work";
  if (s < 70) return "Building";
  if (s < 90) return "Strong";
  return "Viral";
}

/** Tailwind colour class associated with a score band. */
export function scoreToneClass(score: number): string {
  const s = clamp(score, 0, 100);
  if (s < 40) return "text-destructive";
  if (s < 70) return "text-amber-500";
  if (s < 90) return "text-emerald-500";
  return "text-primary";
}
