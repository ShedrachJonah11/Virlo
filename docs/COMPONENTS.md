# Components

The `components/` tree is split into three buckets:

- `components/ui/` — shadcn primitives + project-owned primitives
  (StatCard, EmptyState, PageHeader, Skeleton). Treat anything in
  here as **the** building block — pages should never inline a
  one-off card/header/stat.
- `components/dashboard/` — dashboard-specific shell (navbar,
  sidebar). These are pinned to the `(dashboard)` route group.
- `components/marketing/` — marketing-shell pieces (navbar, footer).

## Adding a new primitive

1. Prefer `npx shadcn@latest add <name>` when shadcn has it.
2. If you're handrolling, follow the existing `Skeleton` /
   `EmptyState` style: small props, no business logic, accept
   `className` for composability.
