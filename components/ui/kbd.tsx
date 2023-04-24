import { cn } from "@/lib/utils";

/** Keyboard-shortcut chip, e.g. <Kbd>Cmd</Kbd> + <Kbd>K</Kbd>. */
export function Kbd({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        "rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
}
