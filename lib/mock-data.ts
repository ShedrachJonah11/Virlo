import type {
  User,
  TrendingVideo,
  Hook,
  AnalyticsData,
  Invoice,
  PricingPlan,
  WarmUpPlan,
  Notification,
} from "@/types";

export const mockUser: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex@example.com",
  avatar: "",
  plan: "starter",
  onboardingCompleted: true,
  createdAt: "2024-01-15",
};

export const mockStats = {
  videosAnalyzed: 1284,
  viralOpportunities: 47,
  accountsWarmed: 12,
  growthScore: 78,
  videosAnalyzedChange: 12.5,
  viralOpportunitiesChange: 8.2,
  accountsWarmedChange: 3,
  growthScoreChange: 5.4,
};

export const mockTrendingVideos: TrendingVideo[] = [
  {
    id: "1",
    creator: "@sarahcooks",
    title: "5-Minute Meal Prep That Changed My Life",
    views: 2400000,
    engagementRate: 8.4,
    viralProbability: 92,
    platform: "tiktok",
    thumbnail: "",
    postedAt: "2024-03-12T14:00:00Z",
  },
  {
    id: "2",
    creator: "@fitwithjake",
    title: "The Only Ab Exercise You Need",
    views: 1800000,
    engagementRate: 7.2,
    viralProbability: 87,
    platform: "instagram",
    thumbnail: "",
  },
  {
    id: "3",
    creator: "@techreviews",
    title: "This $20 Gadget Replaced My $200 One",
    views: 3100000,
    engagementRate: 9.1,
    viralProbability: 95,
    platform: "youtube",
    thumbnail: "",
  },
  {
    id: "4",
    creator: "@dancevibes",
    title: "Learn This Trend in 30 Seconds",
    views: 5600000,
    engagementRate: 11.3,
    viralProbability: 98,
    platform: "tiktok",
    thumbnail: "",
    postedAt: "2024-03-14T09:30:00Z",
  },
  {
    id: "5",
    creator: "@mindfulmoments",
    title: "Morning Routine for Productivity",
    views: 890000,
    engagementRate: 6.8,
    viralProbability: 74,
    platform: "instagram",
    thumbnail: "",
  },
  {
    id: "6",
    creator: "@codewithme",
    title: "Build an App in 60 Seconds",
    views: 1500000,
    engagementRate: 7.9,
    viralProbability: 85,
    platform: "youtube",
    thumbnail: "",
  },
];

export const mockHooks: Hook[] = [
  {
    id: "1",
    text: "Stop scrolling — this changed everything for me.",
    style: "curiosity",
    score: 94,
  },
  {
    id: "2",
    text: "Nobody talks about this, but it's the #1 growth hack.",
    style: "authority",
    score: 89,
  },
  {
    id: "3",
    text: "I tested 50 strategies so you don't have to.",
    style: "value",
    score: 91,
  },
  {
    id: "4",
    text: "POV: You finally figured out the algorithm.",
    style: "relatable",
    score: 87,
  },
  {
    id: "5",
    text: "This is exactly why you're not growing.",
    style: "challenge",
    score: 92,
  },
  {
    id: "6",
    text: "3 things I wish I knew before starting content creation.",
    style: "listicle",
    score: 85,
  },
];

export const mockAnalytics: AnalyticsData[] = Array.from(
  { length: 30 },
  (_, i) => ({
    date: new Date(2024, 0, i + 1).toISOString().split("T")[0],
    engagement: Math.floor(Math.random() * 5000) + 1000,
    views: Math.floor(Math.random() * 50000) + 10000,
    algorithmScore: Math.floor(Math.random() * 30) + 60,
  })
);

export const mockInvoices: Invoice[] = [
  {
    id: "inv_001",
    date: "2024-03-01",
    amount: 19,
    status: "paid",
    description: "Starter Plan - March 2024",
  },
  {
    id: "inv_002",
    date: "2024-02-01",
    amount: 19,
    status: "paid",
    description: "Starter Plan - February 2024",
  },
  {
    id: "inv_003",
    date: "2024-01-01",
    amount: 19,
    status: "paid",
    description: "Starter Plan - January 2024",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    interval: "month",
    features: [
      "1 account warm-up",
      "5 viral content searches/day",
      "Basic hook generator",
      "Community support",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    price: 19,
    interval: "month",
    popular: true,
    features: [
      "5 account warm-ups",
      "50 viral content searches/day",
      "Advanced hook generator",
      "Algorithm analytics",
      "Email support",
      "Custom warm-up plans",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    interval: "month",
    features: [
      "Unlimited account warm-ups",
      "Unlimited viral searches",
      "AI-powered hook generator",
      "Advanced algorithm analytics",
      "Priority support",
      "Custom strategies",
      "API access",
      "Team collaboration",
    ],
  },
];

export const mockWarmUpPlans: WarmUpPlan[] = [
  {
    day: 1,
    tasks: [
      {
        id: "t1",
        action: "Like 20 posts in your niche",
        platform: "tiktok",
        duration: "15 min",
        completed: true,
      },
      {
        id: "t2",
        action: "Comment on 10 trending videos",
        platform: "tiktok",
        duration: "20 min",
        completed: true,
      },
      {
        id: "t3",
        action: "Follow 15 creators in your niche",
        platform: "tiktok",
        duration: "10 min",
        completed: false,
      },
    ],
  },
  {
    day: 2,
    tasks: [
      {
        id: "t4",
        action: "Share 5 posts to your story",
        platform: "tiktok",
        duration: "10 min",
        completed: false,
      },
      {
        id: "t5",
        action: "Engage with 30 FYP videos",
        platform: "tiktok",
        duration: "25 min",
        completed: false,
      },
      {
        id: "t6",
        action: "Post 1 original video (duet or stitch)",
        platform: "tiktok",
        duration: "30 min",
        completed: false,
      },
    ],
  },
  {
    day: 3,
    tasks: [
      {
        id: "t7",
        action: "Reply to all comments on your content",
        platform: "tiktok",
        duration: "15 min",
        completed: false,
      },
      {
        id: "t8",
        action: "Like 30 posts using niche hashtags",
        platform: "tiktok",
        duration: "20 min",
        completed: false,
      },
      {
        id: "t9",
        action: "Create and post a trending sound video",
        platform: "tiktok",
        duration: "30 min",
        completed: false,
      },
    ],
  },
];

export const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Viral Alert",
    message: "A trending sound in your niche just went viral. Check it out!",
    read: false,
    createdAt: "2024-03-15T10:30:00Z",
    kind: "alert",
    href: "/viral-finder",
  },
  {
    id: "2",
    title: "Warm-Up Complete",
    message: "Your TikTok account warm-up Day 1 is complete.",
    read: false,
    createdAt: "2024-03-14T16:00:00Z",
    kind: "success",
    href: "/warmup",
  },
  {
    id: "3",
    title: "Growth Milestone",
    message: "Your algorithm score increased by 12 points this week!",
    read: true,
    createdAt: "2024-03-13T09:15:00Z",
    kind: "info",
    href: "/analytics",
  },
];

export const mockRecentActivity = [
  {
    id: "1",
    action: "Warm-up task completed",
    detail: "Liked 20 posts in fitness niche",
    time: "2 hours ago",
  },
  {
    id: "2",
    action: "Viral content found",
    detail: "3 new trending videos in your niche",
    time: "4 hours ago",
  },
  {
    id: "3",
    action: "Hook generated",
    detail: '"Stop scrolling — this changed everything"',
    time: "6 hours ago",
  },
  {
    id: "4",
    action: "Algorithm update",
    detail: "Growth score increased to 78",
    time: "1 day ago",
  },
  {
    id: "5",
    action: "New warm-up plan",
    detail: "7-day TikTok warm-up plan created",
    time: "2 days ago",
  },
];

/** Last 7-day daily engagement total per platform. */
export const mockEngagementHistory: Record<"tiktok" | "instagram" | "youtube", number[]> = {
  tiktok: [4200, 4900, 4600, 5300, 6100, 5800, 6700],
  instagram: [2100, 1900, 2300, 2700, 2500, 2900, 3100],
  youtube: [1200, 1500, 1400, 1800, 2000, 1900, 2200],
};

