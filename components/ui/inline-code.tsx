import { cn } from "@/lib/utils";

/** Inline monospace code badge — handy for hooks, ids, etc. */
export function InlineCode({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "rounded bg-muted px-1 py-0.5 font-mono text-[0.85em] text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
