import type { WarmUpIntensity } from "@/types";

export interface IntensityProfile {
  /** Number of warm-up days the plan should span. */
  days: number;
  /** Approximate minutes per day. */
  minutesPerDay: number;
}

export const INTENSITY_PROFILES: Readonly<Record<WarmUpIntensity, IntensityProfile>> = {
  low: { days: 14, minutesPerDay: 15 },
  medium: { days: 7, minutesPerDay: 30 },
  high: { days: 5, minutesPerDay: 60 },
};

export function intensityLabel(intensity: WarmUpIntensity): string {
  switch (intensity) {
    case "low":
      return "Low — 15m/day";
    case "medium":
      return "Medium — 30m/day";
    case "high":
      return "High — 60m/day";
  }
}
