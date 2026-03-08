import { Flame, Heart, Lightbulb, Shield, Target, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const teamMembers = [
  {
    name: "Emily Zhang",
    role: "Co-Founder & CEO",
    bio: "Former growth lead at a top social media agency. Passionate about democratizing creator growth tools.",
    initials: "EZ",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "David Kim",
    role: "Co-Founder & CTO",
    bio: "Ex-machine learning engineer. Built recommendation systems at scale. Loves reverse-engineering algorithms.",
    initials: "DK",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Aisha Patel",
    role: "Head of Product",
    bio: "Product designer with 8 years of experience building tools creators actually love to use.",
    initials: "AP",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Marcus Thompson",
    role: "Head of Data Science",
    bio: "PhD in computational social science. Specializes in virality prediction and trend analysis.",
    initials: "MT",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Sarah Liu",
    role: "Head of Community",
    bio: "Creator-turned-community-builder with 500K+ followers across platforms. Knows the creator struggle firsthand.",
    initials: "SL",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "James Rodriguez",
    role: "Lead Engineer",
    bio: "Full-stack engineer obsessed with performance. Previously built real-time analytics pipelines at scale.",
    initials: "JR",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const values = [
  {
    icon: Heart,
    title: "Creator First",
    description:
      "Every feature we build starts with a real creator pain point. We are not building for investors or vanity metrics -- we are building for the people who create content every day.",
  },
  {
    icon: Shield,
    title: "Ethical Growth",
    description:
      "We will never build bots or automation tools that violate platform policies. Our approach is about working smarter with algorithms, not gaming them.",
  },
  {
    icon: Lightbulb,
    title: "Data-Driven Creativity",
    description:
      "We believe creativity and data are not opposites. The best content comes from understanding what resonates and why, then applying your unique creative voice.",
  },
  {
    icon: Target,
    title: "Transparency",
    description:
      "No black boxes. We explain exactly how our recommendations work, why we suggest what we suggest, and what the data shows. You stay in control.",
  },
  {
    icon: Users,
    title: "Community Powered",
    description:
      "Our best features come from our community. We ship fast, listen carefully, and build what creators actually need -- not what looks good in a pitch deck.",
  },
  {
    icon: Flame,
    title: "Relentless Improvement",
    description:
      "Algorithms change weekly. We update our models daily. Our team is obsessed with staying ahead of platform changes so you do not have to.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-6">
            About Virlo
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Helping creators{" "}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              unlock their potential
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We started Virlo because we were tired of seeing talented
            creators struggle with growth -- not because of their content, but
            because they did not understand the platforms they were posting on.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our mission
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Social media platforms are built on algorithms that determine
                  who sees your content. For creators, understanding these
                  algorithms is the difference between reaching 100 people and
                  reaching 1 million.
                </p>
                <p className="text-lg leading-relaxed">
                  Our mission is to democratize algorithm intelligence. We
                  believe every creator -- whether they have 100 followers or
                  100,000 -- deserves access to the same data-driven insights
                  that top agencies charge thousands for.
                </p>
                <p className="text-lg leading-relaxed">
                  Virlo gives you the tools to warm up your accounts,
                  understand what makes content go viral, and make smarter
                  decisions about what to create and when to post it.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: "50K+", label: "Creators onboarded" },
                { stat: "12M+", label: "Videos analyzed" },
                { stat: "3.2B", label: "Data points processed" },
                { stat: "89%", label: "Avg. growth increase" },
              ].map((item) => (
                <Card key={item.label} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold">{item.stat}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What we believe in
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="mt-3">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built by creators, for creators
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A team of engineers, data scientists, and content creators obsessed
              with solving the growth problem.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="items-center text-center">
                  <div
                    className={cn(
                      "flex size-16 items-center justify-center rounded-full bg-gradient-to-br text-xl font-bold text-white",
                      member.gradient
                    )}
                  >
                    {member.initials}
                  </div>
                  <CardTitle className="mt-3">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Want to join the team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            We are always looking for talented people who are passionate about
            helping creators grow. Check out our open positions.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
