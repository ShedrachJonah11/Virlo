"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Flame, Loader2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateWarmUpPlan } from "@/lib/api";
import type { WarmUpPlan, Platform , WarmUpIntensity } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const warmUpSchema = z.object({
  niche: z.string().min(1, "Niche is required"),
  platform: z.enum(["tiktok", "instagram", "youtube"]),
  intensity: z.enum(["low", "medium", "high"]),
});

type WarmUpFormData = z.infer<typeof warmUpSchema>;

export default function WarmUpPage() {
  const [plans, setPlans] = useState<WarmUpPlan[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [platform, setPlatform] = useState<string>("tiktok");
  const [intensity, setIntensity] = useState<WarmUpIntensity>("medium");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WarmUpFormData>({
    resolver: zodResolver(warmUpSchema),
    defaultValues: {
      niche: "",
      platform: "tiktok",
      intensity: "medium",
    },
  });

  const onSubmit = async (data: WarmUpFormData) => {
    setIsGenerating(true);
    setCompletedTasks(new Set());
    try {
      const result = await generateWarmUpPlan(
        data.niche,
        data.platform as Platform,
        data.intensity
      );
      setPlans(result);
    } finally {
      setIsGenerating(false);
    }
  };

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(taskId)) {
        next.delete(taskId);
      } else {
        next.add(taskId);
      }
      return next;
    });
  };

  const getCompletionPercentage = (plan: WarmUpPlan) => {
    if (plan.tasks.length === 0) return 0;
    const completed = plan.tasks.filter(
      (t) => completedTasks.has(t.id) || t.completed
    ).length;
    return Math.round((completed / plan.tasks.length) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Form Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flame className="size-5 text-orange-500" />
            Generate Warm-Up Plan
          </CardTitle>
          <CardDescription>
            Create an AI-powered engagement plan to warm up your account and
            train the algorithm.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Niche Input */}
              <div className="space-y-2">
                <Label htmlFor="niche">Niche Keywords</Label>
                <Input
                  id="niche"
                  placeholder="e.g., fitness, cooking, tech"
                  {...register("niche")}
                  aria-invalid={!!errors.niche}
                />
                {errors.niche && (
                  <p className="text-xs text-destructive">
                    {errors.niche.message}
                  </p>
                )}
              </div>

              {/* Platform Select */}
              <div className="space-y-2">
                <Label>Platform</Label>
                <Select
                  value={platform}
                  onValueChange={(val) => val && setPlatform(val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" {...register("platform")} value={platform} />
              </div>

              {/* Intensity Select */}
              <div className="space-y-2">
                <Label>Engagement Intensity</Label>
                <Select
                  value={intensity}
                  onValueChange={(val) => val && setIntensity(val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select intensity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" {...register("intensity")} value={intensity} />
              </div>
            </div>

            <Button type="submit" disabled={isGenerating} className="gap-2">
              {isGenerating ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Generating Plan...
                </>
              ) : (
                <>
                  <Flame className="size-4" />
                  Generate Plan
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Loading State */}
      {isGenerating && (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="size-10 animate-spin text-primary" />
          <p className="mt-4 text-sm text-muted-foreground">
            Generating your personalized warm-up plan...
          </p>
        </div>
      )}

      {/* Warm-Up Plan Display */}
      {!isGenerating && plans.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Your Warm-Up Plan</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => {
              const percentage = getCompletionPercentage(plan);
              return (
                <Card key={plan.day}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">
                        Day {plan.day}
                      </CardTitle>
                      <Badge
                        variant={
                          percentage === 100 ? "default" : "secondary"
                        }
                      >
                        {percentage}%
                      </Badge>
                    </div>
                    <Progress value={percentage} />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {plan.tasks.map((task) => {
                        const isChecked =
                          task.completed || completedTasks.has(task.id);
                        return (
                          <div
                            key={task.id}
                            className="flex items-start gap-3"
                          >
                            <Checkbox
                              checked={isChecked}
                              onCheckedChange={() => toggleTask(task.id)}
                              className="mt-0.5"
                            />
                            <div className="flex-1 space-y-1">
                              <p
                                className={cn(
                                  "text-sm",
                                  isChecked &&
                                    "text-muted-foreground line-through"
                                )}
                              >
                                {task.action}
                              </p>
                              <Badge
                                variant="outline"
                                className="gap-1 text-[10px]"
                              >
                                <Clock className="size-3" />
                                {task.duration}
                              </Badge>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
