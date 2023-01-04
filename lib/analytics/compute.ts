import type { AnalyticsData } from "@/types";
import { averageBy, sumBy } from "./aggregate";

export interface AnalyticsSummary {
  totalViews: number;
  totalEngagement: number;
  averageAlgorithmScore: number;
  engagementRate: number;
}

/** Compute the headline metrics for an analytics panel. */
export function summarise(series: AnalyticsData[]): AnalyticsSummary {
  const totalViews = sumBy(series, "views");
  const totalEngagement = sumBy(series, "engagement");
  const averageAlgorithmScore = averageBy(series, "algorithmScore");
  const engagementRate =
    totalViews === 0 ? 0 : (totalEngagement / totalViews) * 100;

  return {
    totalViews,
    totalEngagement,
    averageAlgorithmScore,
    engagementRate,
  };
}
