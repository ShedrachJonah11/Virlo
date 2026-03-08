"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Zap, Loader2, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateHooks } from "@/lib/api";
import type { Hook } from "@/types";
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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const hookSchema = z.object({
  niche: z.string().min(1, "Niche is required"),
  style: z.string().min(1, "Style is required"),
});

type HookFormData = z.infer<typeof hookSchema>;

const contentStyles = [
  { value: "curiosity", label: "Curiosity" },
  { value: "authority", label: "Authority" },
  { value: "value", label: "Value" },
  { value: "challenge", label: "Challenge" },
  { value: "relatable", label: "Relatable" },
  { value: "listicle", label: "Listicle" },
];

const styleColors: Record<string, string> = {
  curiosity: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  authority: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  value: "bg-green-500/10 text-green-600 dark:text-green-400",
  challenge: "bg-red-500/10 text-red-600 dark:text-red-400",
  relatable: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  listicle: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
};

export default function HooksPage() {
  const [hooks, setHooks] = useState<Hook[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [style, setStyle] = useState("curiosity");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HookFormData>({
    resolver: zodResolver(hookSchema),
    defaultValues: {
      niche: "",
      style: "curiosity",
    },
  });

  const onSubmit = async (data: HookFormData) => {
    setIsGenerating(true);
    try {
      const result = await generateHooks(data.niche, data.style);
      setHooks(result);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async (hook: Hook) => {
    try {
      await navigator.clipboard.writeText(hook.text);
      setCopiedId(hook.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Clipboard API may not be available
    }
  };

  return (
    <div className="space-y-6">
      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="size-5 text-yellow-500" />
            Generate Hooks
          </CardTitle>
          <CardDescription>
            Create attention-grabbing hooks for your content using AI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="niche">Niche</Label>
                <Input
                  id="niche"
                  placeholder="e.g., fitness, tech reviews, cooking"
                  {...register("niche")}
                  aria-invalid={!!errors.niche}
                />
                {errors.niche && (
                  <p className="text-xs text-destructive">
                    {errors.niche.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Content Style</Label>
                <Select value={style} onValueChange={(val) => val && setStyle(val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentStyles.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input type="hidden" {...register("style")} value={style} />
              </div>
            </div>

            <Button type="submit" disabled={isGenerating} className="gap-2">
              {isGenerating ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap className="size-4" />
                  Generate Hooks
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
            Crafting viral hooks for your content...
          </p>
        </div>
      )}

      {/* Hooks Grid */}
      {!isGenerating && hooks.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Generated Hooks</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hooks.map((hook) => (
              <Card key={hook.id} className="flex flex-col">
                <CardContent className="flex flex-1 flex-col gap-4 pt-4">
                  {/* Hook text */}
                  <blockquote className="flex-1 border-l-2 border-primary/30 pl-4 text-base font-medium italic leading-relaxed">
                    &ldquo;{hook.text}&rdquo;
                  </blockquote>

                  {/* Style badge */}
                  <Badge
                    variant="outline"
                    className={cn(
                      "w-fit border-transparent capitalize",
                      styleColors[hook.style] || "bg-muted"
                    )}
                  >
                    {hook.style}
                  </Badge>

                  {/* Score */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Viral Score
                      </span>
                      <span className="font-semibold">{hook.score}/100</span>
                    </div>
                    <Progress value={hook.score} />
                  </div>

                  {/* Copy button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => copyToClipboard(hook)}
                  >
                    {copiedId === hook.id ? (
                      <>
                        <Check className="size-3.5 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        Copy Hook
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
