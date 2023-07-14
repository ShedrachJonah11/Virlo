import Link from "next/link";

const CHART_HEIGHTS = [
  35, 52, 41, 68, 49, 73, 58, 82, 64, 91,
  55, 78, 47, 86, 62, 95, 71, 88, 76, 99,
] as const;

import {
  Flame,
  TrendingUp,
  Zap,
  BarChart3,
  Check,
  ArrowRight,
  Play,
  Users,
  Clock,
  AlertTriangle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { pricingPlans } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const painPoints = [
  {
    icon: Clock,
    title: "Hours Wasted on Guesswork",
    description:
      "Creators spend 10+ hours a week trying to figure out what the algorithm wants. Most still see zero growth.",
  },
  {
    icon: AlertTriangle,
    title: "Shadow-banned & Suppressed",
    description:
      "New accounts get buried by platforms. Without a warm-up strategy, your content never reaches the right audience.",
  },
  {
    icon: Users,
    title: "No Clear Growth Path",
    description:
      "You post every day but followers stay flat. Without data-driven insights, consistency alone is not enough.",
  },
];

const features = [
  {
    icon: Flame,
    title: "Account Warm-Up Engine",
    description:
      "Systematically train platform algorithms to recognize your niche. Our AI-guided warm-up plans build trust signals that get your content pushed to the right audience.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "Viral Content Finder",
    description:
      "Scan millions of posts across TikTok, Instagram, and YouTube to surface trending content in your niche before it peaks. Jump on trends early and ride the wave.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Hook Generator",
    description:
      "AI-powered hooks tailored to your niche and style. Generate scroll-stopping opening lines that boost watch time and keep viewers engaged from the first second.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Algorithm Analytics",
    description:
      "Understand exactly how platforms rank your content. Track your algorithm score, engagement patterns, and get actionable recommendations to improve reach.",
    gradient: "from-purple-500 to-pink-500",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "TikTok Creator, 240K followers",
    quote:
      "Virlo helped me go from 500 views per video to consistently hitting 50K+. The warm-up engine is a game-changer for new accounts.",
    initials: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "YouTube Shorts Creator",
    quote:
      "The viral content finder saved me hours of research. I found a trend 3 days before it blew up and my video got 2M views. Unreal.",
    initials: "MJ",
  },
  {
    name: "Priya Patel",
    role: "Instagram Reels Creator, 89K followers",
    quote:
      "I was about to give up on content creation. Virlo's hook generator and analytics showed me exactly what I was doing wrong. 5x growth in 2 months.",
    initials: "PP",
  },
];

const faqItems = [
  {
    question: "What is account warm-up and why do I need it?",
    answer:
      "Account warm-up is the process of systematically training a social media platform's algorithm to understand your niche and content style. New or dormant accounts often get limited reach because the algorithm hasn't categorized them. Our warm-up engine guides you through daily actions that build trust signals, helping the algorithm push your content to the right audience from day one.",
  },
  {
    question: "Which platforms does Virlo support?",
    answer:
      "Virlo currently supports TikTok, Instagram Reels, and YouTube Shorts. We are actively working on adding support for X (Twitter), LinkedIn, and Pinterest. All plans include access to all supported platforms.",
  },
  {
    question: "How does the Viral Content Finder work?",
    answer:
      "Our AI scans millions of posts across supported platforms in real-time, analyzing engagement velocity, hashtag trends, and audience signals. It surfaces content that is gaining traction in your specific niche before it hits peak virality, giving you time to create your own spin and ride the trend wave.",
  },
  {
    question: "Is Virlo safe to use? Will I get banned?",
    answer:
      "Absolutely safe. Virlo does not automate any actions on your behalf or violate any platform's terms of service. We provide intelligent recommendations and guided plans that you execute manually. Think of it as a smart assistant that tells you what to do, not a bot that does it for you.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time with no hidden fees or penalties. Your access continues until the end of your current billing period. We also offer a 14-day free trial on all paid plans so you can test the full feature set risk-free.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most creators see measurable improvements in reach and engagement within the first 7-14 days of following a warm-up plan. Significant growth typically starts around 30 days. Results vary based on your niche, content quality, and consistency, but our analytics dashboard helps you track progress in real-time.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function LandingPage() {
  return (
    <>
      {/* ================================================================== */}
      {/*  HERO                                                              */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Flame className="mr-1 size-3" />
              Now in Public Beta
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Train the Algorithm.{" "}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
                Grow Faster.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Virlo is the AI-powered growth platform that helps creators
              warm up accounts, find viral content, and train platform algorithms
              to work in their favor.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 px-8 text-base"
                render={<Link href="/signup" />}
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base"
                render={<Link href="#" />}
              >
                <Play className="mr-2 size-4" />
                Watch Demo
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required. 14-day free trial on all plans.
            </p>
          </div>

          {/* Mock Dashboard Preview */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="rounded-xl border bg-card/50 p-2 shadow-2xl ring-1 ring-foreground/5 backdrop-blur-sm">
              <div className="rounded-lg border bg-background">
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-500/70" />
                    <div className="size-3 rounded-full bg-yellow-500/70" />
                    <div className="size-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
                    app.virlo.com/dashboard
                  </div>
                </div>

                {/* Mock content */}
                <div className="grid grid-cols-12 gap-4 p-6">
                  {/* Sidebar mock */}
                  <div className="col-span-3 hidden space-y-3 lg:block">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded bg-primary/20" />
                      <div className="h-3 w-20 rounded bg-muted" />
                    </div>
                    <Separator />
                    {[
                      "Dashboard",
                      "Warm-Up",
                      "Trending",
                      "Hooks",
                      "Analytics",
                    ].map((item) => (
                      <div
                        key={item}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-2 py-1.5",
                          item === "Dashboard" && "bg-muted"
                        )}
                      >
                        <div className="size-4 rounded bg-muted-foreground/20" />
                        <span className="text-xs text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Main content mock */}
                  <div className="col-span-12 space-y-4 lg:col-span-9">
                    {/* Stats row */}
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[
                        { label: "Videos Analyzed", value: "1,284" },
                        { label: "Viral Opportunities", value: "47" },
                        { label: "Accounts Warmed", value: "12" },
                        { label: "Growth Score", value: "78%" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-lg border bg-card p-3"
                        >
                          <div className="text-xs text-muted-foreground">
                            {stat.label}
                          </div>
                          <div className="mt-1 text-lg font-bold">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart placeholder — deterministic heights so server and
                        client agree on hydration. */}
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 h-3 w-32 rounded bg-muted" />
                      <div className="flex h-32 items-end gap-1">
                        {CHART_HEIGHTS.map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-primary/20"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  PROBLEM                                                           */}
      {/* ================================================================== */}
      <section className="border-t bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Growing on social media is{" "}
              <span className="text-muted-foreground">brutally hard</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Most creators are fighting an uphill battle against algorithms they
              do not understand. Sound familiar?
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {painPoints.map((point) => {
              const Icon = point.icon;
              return (
                <Card
                  key={point.title}
                  className="border-destructive/20 bg-destructive/5 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-destructive/10">
                      <Icon className="size-5 text-destructive" />
                    </div>
                    <CardTitle className="mt-3">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  FEATURES                                                          */}
      {/* ================================================================== */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                master the algorithm
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful tools backed by AI and real-time data to give you an
              unfair advantage in content creation.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="group transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader>
                    <div
                      className={cn(
                        "flex size-10 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                        feature.gradient
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="mt-3">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  PRODUCT PREVIEW                                                   */}
      {/* ================================================================== */}
      <section className="border-t bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See it in action
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A powerful dashboard that puts all your growth tools in one place.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="rounded-xl border bg-card shadow-xl">
              {/* Mock app header */}
              <div className="flex items-center justify-between border-b px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                    <Flame className="size-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold">Virlo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-24 rounded bg-muted" />
                  <div className="size-8 rounded-full bg-muted" />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-6 p-6">
                {/* Warm-up panel */}
                <div className="col-span-12 space-y-4 lg:col-span-5">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">
                        Today&apos;s Warm-Up Plan
                      </h3>
                      <Badge variant="secondary">Day 3 of 7</Badge>
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        {
                          task: "Like 20 niche posts",
                          time: "15 min",
                          done: true,
                        },
                        {
                          task: "Comment on 10 trending videos",
                          time: "20 min",
                          done: true,
                        },
                        {
                          task: "Follow 15 niche creators",
                          time: "10 min",
                          done: false,
                        },
                      ].map((item) => (
                        <div
                          key={item.task}
                          className="flex items-center gap-3 rounded-md bg-muted/50 px-3 py-2"
                        >
                          <div
                            className={cn(
                              "flex size-5 shrink-0 items-center justify-center rounded-full border",
                              item.done
                                ? "border-green-500 bg-green-500"
                                : "border-muted-foreground/30"
                            )}
                          >
                            {item.done && (
                              <Check className="size-3 text-white" />
                            )}
                          </div>
                          <span
                            className={cn(
                              "flex-1 text-xs",
                              item.done && "text-muted-foreground line-through"
                            )}
                          >
                            {item.task}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hook preview */}
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-semibold">Generated Hooks</h3>
                    <div className="mt-3 space-y-2">
                      {[
                        {
                          text: "Stop scrolling -- this changed everything.",
                          score: 94,
                        },
                        {
                          text: "Nobody talks about this growth hack.",
                          score: 89,
                        },
                      ].map((hook) => (
                        <div
                          key={hook.text}
                          className="flex items-start justify-between gap-2 rounded-md bg-muted/50 px-3 py-2"
                        >
                          <span className="text-xs italic">
                            &quot;{hook.text}&quot;
                          </span>
                          <Badge variant="secondary" className="shrink-0">
                            {hook.score}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Analytics panel */}
                <div className="col-span-12 space-y-4 lg:col-span-7">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">
                        Algorithm Score
                      </h3>
                      <span className="text-2xl font-bold text-green-500">
                        78
                      </span>
                    </div>
                    <div className="mt-4 flex h-40 items-end gap-1.5">
                      {Array.from({ length: 14 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary/80"
                          style={{
                            height: `${40 + Math.sin(i * 0.5) * 30 + i * 3}%`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                      <span>2 weeks ago</span>
                      <span>Today</span>
                    </div>
                  </div>

                  {/* Trending content mock */}
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-semibold">
                      Trending in Your Niche
                    </h3>
                    <div className="mt-3 space-y-2">
                      {[
                        {
                          title: "5-Minute Meal Prep That Changed My Life",
                          views: "2.4M",
                          prob: 92,
                        },
                        {
                          title: "This $20 Gadget Replaced My $200 One",
                          views: "3.1M",
                          prob: 95,
                        },
                        {
                          title: "Learn This Trend in 30 Seconds",
                          views: "5.6M",
                          prob: 98,
                        },
                      ].map((video) => (
                        <div
                          key={video.title}
                          className="flex items-center gap-3 rounded-md bg-muted/50 px-3 py-2"
                        >
                          <div className="size-10 shrink-0 rounded bg-muted" />
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-xs font-medium">
                              {video.title}
                            </div>
                            <div className="text-[10px] text-muted-foreground">
                              {video.views} views
                            </div>
                          </div>
                          <Badge
                            variant="secondary"
                            className="shrink-0 text-green-600 dark:text-green-400"
                          >
                            {video.prob}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  PRICING                                                           */}
      {/* ================================================================== */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free. Upgrade when you are ready. No hidden fees.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={cn(
                  "relative flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg",
                  plan.popular &&
                    "border-primary shadow-lg ring-1 ring-primary/20"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground shadow-sm">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-2">
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    {plan.id === "free"
                      ? "Perfect for getting started"
                      : plan.id === "starter"
                        ? "For serious creators"
                        : "For teams and agencies"}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      {plan.price === 0 ? "Free" : `$${plan.price}`}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-sm text-muted-foreground">
                        /{plan.interval}
                      </span>
                    )}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <div className="p-4 pt-0">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    render={<Link href="/signup" />}
                  >
                    {plan.price === 0 ? "Get Started" : "Start Free Trial"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  TESTIMONIALS                                                      */}
      {/* ================================================================== */}
      <section className="border-t bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by creators worldwide
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of creators who have transformed their growth with
              Virlo.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-purple-600 text-sm font-semibold text-white">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  FAQ                                                               */}
      {/* ================================================================== */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about Virlo.
            </p>
          </div>

          <div className="mt-12">
            <Accordion>
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  FINAL CTA                                                         */}
      {/* ================================================================== */}
      <section className="border-t">
        <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-24">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to{" "}
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                grow faster?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Join thousands of creators who are using Virlo to train
              algorithms, find viral trends, and grow their audience on
              autopilot.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 px-8 text-base"
                render={<Link href="/signup" />}
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Free for 14 days. No credit card required.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
