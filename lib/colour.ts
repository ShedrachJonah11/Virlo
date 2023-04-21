import { djb2 } from "@/lib/hashing";

const PALETTE = [
  "#f43f5e", // rose
  "#ec4899", // pink
  "#a855f7", // purple
  "#3b82f6", // blue
  "#06b6d4", // cyan
  "#10b981", // emerald
  "#f59e0b", // amber
  "#ef4444", // red
] as const;

/**
 * Deterministically pick a palette colour for a given seed (e.g. a
 * username or a video id). Same input -> same colour every render.
 */
export function colourFromSeed(seed: string): string {
  if (seed.length === 0) return PALETTE[0];
  return PALETTE[djb2(seed) % PALETTE.length];
}
