import type { TrendingVideo } from "@/types";
import { clamp } from "@/lib/range";

/**
 * Re-derive a "viral probability" from raw signals. We keep this so
 * we can run sanity checks against whatever the backend serves —
 * unexpected divergence is an early-warning signal.
 *
 *   probability =  0.5 * engagementRate_normalised
 *                + 0.4 * views_normalised
 *                + 0.1 * freshness_boost
 */
export function deriveViralProbability(video: TrendingVideo, now: Date = new Date()): number {
  const engagement = clamp(video.engagementRate / 12, 0, 1); // ~12% is excellent
  const views = clamp(video.views / 5_000_000, 0, 1);
  let freshness = 0;
  if (video.postedAt) {
    const ageDays = (now.getTime() - Date.parse(video.postedAt)) / 86400000;
    freshness = clamp(1 - ageDays / 7, 0, 1); // decays over a week
  }
  const score = 0.5 * engagement + 0.4 * views + 0.1 * freshness;
  return Math.round(score * 100);
}
