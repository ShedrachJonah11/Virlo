import { cn } from "@/lib/utils";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Generic loading shimmer. Matches shadcn's `Skeleton` API so we can
 * `npx shadcn add skeleton` later without touching call sites.
 */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      role="status"
      aria-busy="true"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}
