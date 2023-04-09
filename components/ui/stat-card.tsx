import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCompactNumber, formatPercent } from "@/lib/format";

interface StatCardProps {
  label: string;
  value: number;
  /** Change vs previous period, in percentage points (e.g. 12.5 for +12.5%). */
  change?: number;
  icon?: LucideIcon;
  className?: string;
}

export function StatCard({
  label,
  value,
  change,
  icon: Icon,
  className,
}: StatCardProps) {
  const positive = (change ?? 0) >= 0;
  const ChangeIcon = positive ? ArrowUpRight : ArrowDownRight;
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {label}
        </CardTitle>
        {Icon ? <Icon className="size-4 text-muted-foreground" aria-hidden /> : null}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{formatCompactNumber(value)}</div>
        {typeof change === "number" ? (
          <p
            className={cn(
              "mt-1 flex items-center gap-1 text-xs",
              positive ? "text-emerald-500" : "text-destructive"
            )}
          >
            <ChangeIcon className="size-3" aria-hidden />
            {formatPercent(Math.abs(change), { alreadyPercent: true })} from last period
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
