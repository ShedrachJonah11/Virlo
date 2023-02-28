export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: "free" | "starter" | "pro";
  onboardingCompleted: boolean;
  createdAt: string;
}

export interface WarmUpPlan {
  day: number;
  tasks: WarmUpTask[];
}

export interface WarmUpTask {
  id: string;
  action: string;
  platform: Platform;
  duration: string;
  completed: boolean;
}

export type Platform = "tiktok" | "instagram" | "youtube";

export interface TrendingVideo {
  id: string;
  creator: string;
  title: string;
  views: number;
  engagementRate: number;
  viralProbability: number;
  platform: Platform;
  thumbnail: string;
}

export interface Hook {
  id: string;
  text: string;
  style: string;
  score: number;
}

export interface AnalyticsData {
  date: string;
  engagement: number;
  views: number;
  algorithmScore: number;
}

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "paid" | "pending" | "failed";
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  interval: "month" | "year";
  features: string[];
  popular?: boolean;
}

export type NotificationKind = "info" | "success" | "warning" | "alert";

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  /** Optional category. Defaults to "info" when not set. */
  kind?: NotificationKind;
  /** Optional in-app deep link for the notification. */
  href?: string;
}

export interface OnboardingData {
  niche: string;
  platforms: Platform[];
  keywords: string[];
  contentStyle: string;
}

export type WarmUpIntensity = "light" | "moderate" | "intense";

export interface WarmUpConfig {
  niche: string;
  platforms: Platform[];
  intensity: WarmUpIntensity;
  startDate: string;
}

