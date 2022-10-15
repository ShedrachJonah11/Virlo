# Styling

Virlo uses Tailwind CSS v4 with shadcn/ui primitives.

## Tokens

Design tokens live in `app/globals.css` under the `@theme` block.
Colors are defined as CSS variables and consumed via Tailwind's
`bg-primary`, `text-muted-foreground`, etc.

## Dark mode

`next-themes` toggles a `class="dark"` on `<html>`. Use the
`dark:` variant prefix sparingly — most components inherit the right
look automatically from the CSS variables.

## When to add a new component

If a UI pattern shows up in more than one page, lift it into
`components/` (not `components/ui/`, which is reserved for shadcn
primitives). Keep one component per file.
