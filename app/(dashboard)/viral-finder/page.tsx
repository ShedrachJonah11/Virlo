"use client";

import { useEffect, useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchTrendingVideos } from "@/lib/api";
import type { TrendingVideo, Platform } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function formatViews(views: number): string {
  if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(1)}M`;
  }
  if (views >= 1_000) {
    return `${(views / 1_000).toFixed(1)}K`;
  }
  return views.toString();
}

function getViralBadgeVariant(probability: number) {
  if (probability >= 80) return "default" as const;
  if (probability >= 60) return "secondary" as const;
  return "destructive" as const;
}

function getViralBadgeClass(probability: number) {
  if (probability >= 80) return "bg-green-500/10 text-green-600 dark:text-green-400";
  if (probability >= 60) return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
  return "bg-red-500/10 text-red-600 dark:text-red-400";
}

const platformColors: Record<Platform, string> = {
  tiktok: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  instagram: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  youtube: "bg-red-500/10 text-red-600 dark:text-red-400",
};

const platformLabels: Record<Platform, string> = {
  tiktok: "TikTok",
  instagram: "Instagram",
  youtube: "YouTube",
};

export default function ViralFinderPage() {
  const [videos, setVideos] = useState<TrendingVideo[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<TrendingVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [platform, setPlatform] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const data = await fetchTrendingVideos();
        setVideos(data);
        setFilteredVideos(data);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  useEffect(() => {
    let result = videos;

    if (platform !== "all") {
      result = result.filter((v) => v.platform === platform);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.creator.toLowerCase().includes(q)
      );
    }

    setFilteredVideos(result);
  }, [platform, searchQuery, videos]);

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <Card>
        <CardContent className="pt-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Select value={platform} onValueChange={(val) => val && setPlatform(val)}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="All Platforms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by creator or title..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Table */}
      <Card>
        <CardHeader>
          <CardTitle>Trending Videos</CardTitle>
          <CardDescription>
            {filteredVideos.length} viral opportunities found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Creator</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="text-right">Engagement</TableHead>
                <TableHead className="text-center">Viral Probability</TableHead>
                <TableHead className="text-center">Platform</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVideos.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="py-8 text-center text-muted-foreground"
                  >
                    No videos found matching your criteria.
                  </TableCell>
                </TableRow>
              ) : (
                filteredVideos.map((video) => (
                  <TableRow key={video.id}>
                    <TableCell className="font-medium">
                      {video.creator}
                    </TableCell>
                    <TableCell className="max-w-[240px] truncate">
                      {video.title}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {formatViews(video.views)}
                    </TableCell>
                    <TableCell className="text-right">
                      {video.engagementRate}%
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant="outline"
                        className={cn(
                          "border-transparent font-semibold",
                          getViralBadgeClass(video.viralProbability)
                        )}
                      >
                        {video.viralProbability}%
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant="outline"
                        className={cn(
                          "border-transparent capitalize",
                          platformColors[video.platform]
                        )}
                      >
                        {platformLabels[video.platform]}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
