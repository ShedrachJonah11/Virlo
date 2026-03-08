import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { pricingPlans } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Comparison data                                                           */
/* -------------------------------------------------------------------------- */

interface ComparisonRow {
  feature: string;
  free: string | boolean;
  starter: string | boolean;
  pro: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Account Warm-Ups",
    free: "1",
    starter: "5",
    pro: "Unlimited",
  },
  {
    feature: "Viral Content Searches / Day",
    free: "5",
    starter: "50",
    pro: "Unlimited",
  },
  {
    feature: "Hook Generator",
    free: "Basic",
    starter: "Advanced",
    pro: "AI-Powered",
  },
  {
    feature: "Algorithm Analytics",
    free: false,
    starter: true,
    pro: true,
  },
  {
    feature: "Custom Warm-Up Plans",
    free: false,
    starter: true,
    pro: true,
  },
  {
    feature: "Custom Strategies",
    free: false,
    starter: false,
    pro: true,
  },
  {
    feature: "API Access",
    free: false,
    starter: false,
    pro: true,
  },
  {
    feature: "Team Collaboration",
    free: false,
    starter: false,
    pro: true,
  },
  {
    feature: "Support",
    free: "Community",
    starter: "Email",
    pro: "Priority",
  },
  {
    feature: "Platform Support",
    free: "All",
    starter: "All",
    pro: "All",
  },
];

/* -------------------------------------------------------------------------- */
/*  Helper                                                                    */
/* -------------------------------------------------------------------------- */

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto size-4 text-green-500" />
    ) : (
      <X className="mx-auto size-4 text-muted-foreground/40" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Plans that{" "}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              scale with you
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Start free and upgrade when you are ready. All paid plans include a
            14-day free trial with no credit card required.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
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

      {/* Comparison table */}
      <section className="border-t bg-muted/30 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Compare plans
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See exactly what you get with each plan.
            </p>
          </div>

          <div className="mt-16">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%]">Feature</TableHead>
                      <TableHead className="text-center">Free</TableHead>
                      <TableHead className="text-center">
                        <span className="inline-flex items-center gap-1">
                          Starter
                          <Badge variant="secondary" className="text-[10px]">
                            Popular
                          </Badge>
                        </span>
                      </TableHead>
                      <TableHead className="text-center">Pro</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row) => (
                      <TableRow key={row.feature}>
                        <TableCell className="font-medium">
                          {row.feature}
                        </TableCell>
                        <TableCell className="text-center">
                          <CellValue value={row.free} />
                        </TableCell>
                        <TableCell className="text-center">
                          <CellValue value={row.starter} />
                        </TableCell>
                        <TableCell className="text-center">
                          <CellValue value={row.pro} />
                        </TableCell>
                      </TableRow>
                    ))}
                    {/* Price row */}
                    <TableRow>
                      <TableCell className="font-semibold">Price</TableCell>
                      <TableCell className="text-center font-semibold">
                        Free
                      </TableCell>
                      <TableCell className="text-center font-semibold">
                        $19/mo
                      </TableCell>
                      <TableCell className="text-center font-semibold">
                        $49/mo
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Still not sure?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Start with the free plan and experience Virlo first-hand. No
            credit card needed.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="h-12 px-8 text-base"
              render={<Link href="/signup" />}
            >
              Get Started for Free
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
