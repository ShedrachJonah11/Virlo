"use client";

import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Dumbbell,
  UtensilsCrossed,
  Gamepad2,
  Sparkles,
  GraduationCap,
  Clapperboard,
  Briefcase,
  Plane,
  X,
  Plus,
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { completeOnboarding } from "@/lib/api";
import { useAuthStore } from "@/store/use-auth-store";
import type { Platform, OnboardingData } from "@/types";

/* -------------------------------------------------------------------------- */
/*                                 Constants                                  */
/* -------------------------------------------------------------------------- */

const NICHES = [
  { id: "fitness", label: "Fitness & Health", icon: Dumbbell },
  { id: "food", label: "Food & Cooking", icon: UtensilsCrossed },
  { id: "tech", label: "Tech & Gaming", icon: Gamepad2 },
  { id: "beauty", label: "Beauty & Fashion", icon: Sparkles },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "entertainment", label: "Entertainment", icon: Clapperboard },
  { id: "business", label: "Business & Finance", icon: Briefcase },
  { id: "travel", label: "Travel & Lifestyle", icon: Plane },
] as const;

const PLATFORMS: {
  id: Platform;
  label: string;
  description: string;
}[] = [
  {
    id: "tiktok",
    label: "TikTok",
    description: "Short-form video content with trending sounds and effects",
  },
  {
    id: "instagram",
    label: "Instagram",
    description: "Reels, stories, and visual content for engaged audiences",
  },
  {
    id: "youtube",
    label: "YouTube (Shorts)",
    description: "Short-form videos with massive reach and discoverability",
  },
];

const KEYWORD_SUGGESTIONS: Record<string, string[]> = {
  fitness: [
    "workout routine",
    "weight loss tips",
    "home exercise",
    "gym motivation",
    "fitness transformation",
    "healthy habits",
  ],
  food: [
    "easy recipes",
    "meal prep",
    "cooking hacks",
    "food review",
    "kitchen tips",
    "healthy eating",
  ],
  tech: [
    "tech review",
    "gaming setup",
    "gadgets",
    "unboxing",
    "coding tutorial",
    "app review",
  ],
  beauty: [
    "skincare routine",
    "makeup tutorial",
    "fashion haul",
    "GRWM",
    "beauty hacks",
    "outfit ideas",
  ],
  education: [
    "study tips",
    "learn fast",
    "online course",
    "productivity",
    "book summary",
    "skill building",
  ],
  entertainment: [
    "funny moments",
    "reaction video",
    "storytelling",
    "trending challenge",
    "comedy skit",
    "POV",
  ],
  business: [
    "side hustle",
    "passive income",
    "investing tips",
    "entrepreneur",
    "personal finance",
    "startup",
  ],
  travel: [
    "travel vlog",
    "hidden gems",
    "budget travel",
    "destination guide",
    "travel tips",
    "digital nomad",
  ],
};

const TOTAL_STEPS = 4;

/* -------------------------------------------------------------------------- */
/*                              Step Components                               */
/* -------------------------------------------------------------------------- */

function StepNiche({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (niche: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          What&apos;s your content niche?
        </h2>
        <p className="text-muted-foreground">
          Choose the category that best describes your content
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {NICHES.map((niche) => {
          const Icon = niche.icon;
          const isSelected = selected === niche.id;
          return (
            <button
              key={niche.id}
              type="button"
              onClick={() => onSelect(niche.id)}
              className={cn(
                "group relative flex flex-col items-center gap-3 rounded-xl border p-4 text-center transition-all hover:border-primary/50 hover:bg-muted/50",
                isSelected
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-border"
              )}
            >
              <div
                className={cn(
                  "flex size-12 items-center justify-center rounded-lg transition-colors",
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground group-hover:bg-muted/80"
                )}
              >
                <Icon className="size-6" />
              </div>
              <span
                className={cn(
                  "text-sm font-medium leading-tight",
                  isSelected ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {niche.label}
              </span>
              {isSelected && (
                <div className="absolute right-2 top-2">
                  <div className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepPlatforms({
  selected,
  onToggle,
}: {
  selected: Platform[];
  onToggle: (platform: Platform) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Which platforms do you use?
        </h2>
        <p className="text-muted-foreground">
          Select all the platforms where you create content
        </p>
      </div>

      <div className="space-y-3">
        {PLATFORMS.map((platform) => {
          const isSelected = selected.includes(platform.id);
          return (
            <button
              key={platform.id}
              type="button"
              onClick={() => onToggle(platform.id)}
              className={cn(
                "flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all hover:border-primary/50 hover:bg-muted/50",
                isSelected
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-border"
              )}
            >
              <Checkbox checked={isSelected} />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-semibold">{platform.label}</p>
                <p className="text-sm text-muted-foreground">
                  {platform.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepKeywords({
  keywords,
  onAdd,
  onRemove,
  niche,
}: {
  keywords: string[];
  onAdd: (keyword: string) => void;
  onRemove: (keyword: string) => void;
  niche: string;
}) {
  const [input, setInput] = useState("");

  const suggestions = useMemo(
    () =>
      (KEYWORD_SUGGESTIONS[niche] ?? KEYWORD_SUGGESTIONS.fitness).filter(
        (s) => !keywords.includes(s)
      ),
    [niche, keywords]
  );

  const handleAdd = useCallback(() => {
    const trimmed = input.trim().toLowerCase();
    if (trimmed && !keywords.includes(trimmed)) {
      onAdd(trimmed);
      setInput("");
    }
  }, [input, keywords, onAdd]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAdd();
      }
    },
    [handleAdd]
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Add your target keywords
        </h2>
        <p className="text-muted-foreground">
          These keywords help us find viral content in your niche
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Input
          placeholder="Enter a keyword..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-9 flex-1"
        />
        <Button
          type="button"
          size="sm"
          onClick={handleAdd}
          disabled={!input.trim()}
        >
          <Plus className="size-4" />
          Add
        </Button>
      </div>

      {keywords.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
            >
              {keyword}
              <button
                type="button"
                onClick={() => onRemove(keyword)}
                className="inline-flex size-4 items-center justify-center rounded-full transition-colors hover:bg-primary/20"
              >
                <X className="size-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {keywords.length < 3 && (
        <p className="text-sm text-muted-foreground">
          Add at least {3 - keywords.length} more keyword
          {3 - keywords.length !== 1 ? "s" : ""} to continue
        </p>
      )}

      {suggestions.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            Suggested keywords
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => onAdd(suggestion)}
                className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:bg-muted/50 hover:text-foreground"
              >
                <Plus className="size-3" />
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StepSummary({
  niche,
  platforms,
  keywords,
  isSubmitting,
  onSubmit,
}: {
  niche: string;
  platforms: Platform[];
  keywords: string[];
  isSubmitting: boolean;
  onSubmit: () => void;
}) {
  const nicheLabel =
    NICHES.find((n) => n.id === niche)?.label ?? niche;
  const NicheIcon = NICHES.find((n) => n.id === niche)?.icon ?? Sparkles;

  if (isSubmitting) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-12">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
          <div className="relative flex size-16 items-center justify-center rounded-full bg-primary/10">
            <Loader2 className="size-8 animate-spin text-primary" />
          </div>
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold">
            Generating your personalized strategy...
          </h3>
          <p className="text-sm text-muted-foreground">
            Analyzing trends, optimizing keywords, and building your growth plan
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Ready to generate your growth strategy
        </h2>
        <p className="text-muted-foreground">
          Review your selections before we create your personalized plan
        </p>
      </div>

      <div className="space-y-4">
        {/* Niche summary */}
        <div className="rounded-xl border border-border bg-muted/30 p-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Niche
          </p>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <NicheIcon className="size-5" />
            </div>
            <span className="font-semibold">{nicheLabel}</span>
          </div>
        </div>

        {/* Platforms summary */}
        <div className="rounded-xl border border-border bg-muted/30 p-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {platforms.map((p) => {
              const plat = PLATFORMS.find((pl) => pl.id === p);
              return (
                <Badge key={p} variant="secondary" className="px-3 py-1">
                  {plat?.label ?? p}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Keywords summary */}
        <div className="rounded-xl border border-border bg-muted/30 p-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Keywords
          </p>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw) => (
              <Badge key={kw} variant="outline" className="px-3 py-1">
                {kw}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Button
        type="button"
        size="lg"
        className="w-full"
        onClick={onSubmit}
      >
        <Flame className="size-4" />
        Generate Strategy
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Step Indicators                               */
/* -------------------------------------------------------------------------- */

function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }, (_, i) => {
        const step = i + 1;
        const isCompleted = step < current;
        const isCurrent = step === current;
        return (
          <div
            key={step}
            className={cn(
              "flex size-8 items-center justify-center rounded-full text-xs font-semibold transition-all",
              isCompleted &&
                "bg-primary text-primary-foreground",
              isCurrent &&
                "bg-primary/15 text-primary ring-2 ring-primary/30",
              !isCompleted &&
                !isCurrent &&
                "bg-muted text-muted-foreground"
            )}
          >
            {isCompleted ? <Check className="size-4" /> : step}
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Main Component                                */
/* -------------------------------------------------------------------------- */

export default function OnboardingPage() {
  const router = useRouter();
  const updateUser = useAuthStore((s) => s.updateUser);

  // Step state
  const [step, setStep] = useState(1);

  // Form data
  const [niche, setNiche] = useState("");
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);

  // Submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Progress value (0-100)
  const progressValue = (step / TOTAL_STEPS) * 100;

  // Navigation
  const canContinue = useMemo(() => {
    switch (step) {
      case 1:
        return niche !== "";
      case 2:
        return platforms.length > 0;
      case 3:
        return keywords.length >= 3;
      case 4:
        return true;
      default:
        return false;
    }
  }, [step, niche, platforms, keywords]);

  const goNext = useCallback(() => {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
  }, [step]);

  const goBack = useCallback(() => {
    if (step > 1) setStep((s) => s - 1);
  }, [step]);

  // Platform toggle
  const togglePlatform = useCallback((platform: Platform) => {
    setPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  }, []);

  // Keyword management
  const addKeyword = useCallback((keyword: string) => {
    setKeywords((prev) =>
      prev.includes(keyword) ? prev : [...prev, keyword]
    );
  }, []);

  const removeKeyword = useCallback((keyword: string) => {
    setKeywords((prev) => prev.filter((k) => k !== keyword));
  }, []);

  // Submit
  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const data: OnboardingData = {
        niche,
        platforms,
        keywords,
        contentStyle: "mixed",
      };
      const result = await completeOnboarding(data);
      if (result.ok) {
        updateUser({ onboardingCompleted: true });
        router.push("/dashboard");
      }
    } catch {
      setIsSubmitting(false);
    }
  }, [niche, platforms, keywords, updateUser, router]);

  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-2xl space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
            <Flame className="size-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Virlo
          </span>
        </div>

        {/* Progress section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Step {step} of {TOTAL_STEPS}</span>
            <span>{Math.round(progressValue)}%</span>
          </div>
          <Progress value={progressValue} />
          <StepDots current={step} total={TOTAL_STEPS} />
        </div>

        {/* Card container */}
        <Card>
          <CardContent className="pt-2">
            {/* Step content with transition */}
            <div
              key={step}
              className="animate-in fade-in slide-in-from-right-4 duration-300"
            >
              {step === 1 && (
                <StepNiche selected={niche} onSelect={setNiche} />
              )}
              {step === 2 && (
                <StepPlatforms
                  selected={platforms}
                  onToggle={togglePlatform}
                />
              )}
              {step === 3 && (
                <StepKeywords
                  keywords={keywords}
                  onAdd={addKeyword}
                  onRemove={removeKeyword}
                  niche={niche}
                />
              )}
              {step === 4 && (
                <StepSummary
                  niche={niche}
                  platforms={platforms}
                  keywords={keywords}
                  isSubmitting={isSubmitting}
                  onSubmit={handleSubmit}
                />
              )}
            </div>

            {/* Navigation buttons (hidden on step 4 and while submitting) */}
            {step < TOTAL_STEPS && (
              <div className="mt-8 flex items-center justify-between">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={goBack}
                  >
                    <ArrowLeft className="size-4" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}
                <Button
                  type="button"
                  onClick={goNext}
                  disabled={!canContinue}
                >
                  Continue
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            )}

            {step === TOTAL_STEPS && !isSubmitting && (
              <div className="mt-4">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={goBack}
                >
                  <ArrowLeft className="size-4" />
                  Back
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
