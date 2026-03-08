"use client";

import { useEffect, useState } from "react";
import {
  Eye,
  TrendingUp,
  Flame,
  Target,
  ArrowUpRight,
  Zap,
  Search,
  BarChart3,
  Activity,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchStats, fetchRecentActivity } from "@/lib/api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface StatsData {
  videosAnalyzed: number;
  viralOpportunities: number;
  accountsWarmed: number;
  growthScore: number;
  videosAnalyzedChange: number;
  viralOpportunitiesChange: number;
  accountsWarmedChange: number;
  growthScoreChange: number;
}

interface ActivityItem {
  id: string;
  action: string;
  detail: string;
  time: string;
}

const activityIcons: Record<string, React.ElementType> = {
  "Warm-up task completed": CheckCircle2,
  "Viral content found": TrendingUp,
  "Hook generated": Zap,
  "Algorithm update": BarChart3,
  "New warm-up plan": Flame,
};

export default function DashboardPage() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const [statsData, activityData] = await Promise.all([
          fetchStats(),
          fetchRecentActivity(),
        ]);
        setStats(statsData);
        setActivity(activityData);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  if (isLoading || !stats) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const statCards = [
    {
      label: "Videos Analyzed",
      value: stats.videosAnalyzed.toLocaleString(),
      change: stats.videosAnalyzedChange,
      suffix: "%",
      icon: Eye,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "Viral Opportunities",
      value: stats.viralOpportunities.toString(),
      change: stats.viralOpportunitiesChange,
      suffix: "%",
      icon: TrendingUp,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      label: "Accounts Warmed",
      value: stats.accountsWarmed.toString(),
      change: stats.accountsWarmedChange,
      suffix: "",
      icon: Flame,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      label: "Growth Score",
      value: stats.growthScore.toString(),
      change: stats.growthScoreChange,
      suffix: "%",
      icon: Target,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-sm font-medium">
                {stat.label}
              </CardDescription>
              <div className={cn("rounded-lg p-2", stat.bg)}>
                <stat.icon className={cn("size-4", stat.color)} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="mt-1 flex items-center gap-1 text-xs">
                <ArrowUpRight className="size-3 text-green-500" />
                <span className="font-medium text-green-500">
                  +{stat.change}
                  {stat.suffix}
                </span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest actions and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activity.map((item) => {
                const Icon = activityIcons[item.action] || Activity;
                return (
                  <div key={item.id} className="flex items-start gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <p className="text-sm font-medium">{item.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                    <span className="whitespace-nowrap text-xs text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started with common tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Link
                href="/warmup"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "justify-start gap-2"
                )}
              >
                <Flame className="size-4 text-orange-500" />
                Start Warm-Up Plan
              </Link>
              <Link
                href="/viral-finder"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "justify-start gap-2"
                )}
              >
                <Search className="size-4 text-blue-500" />
                Find Viral Content
              </Link>
              <Link
                href="/hooks"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "justify-start gap-2"
                )}
              >
                <Zap className="size-4 text-yellow-500" />
                Generate Hooks
              </Link>
              <Link
                href="/analytics"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "justify-start gap-2"
                )}
              >
                <BarChart3 className="size-4 text-purple-500" />
                View Analytics
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
