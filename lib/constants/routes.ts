/**
 * Centralised route table. Prefer importing from here instead of
 * hard-coding string paths in components — that way renames are
 * a single-file change.
 */
export const ROUTES = {
  // Marketing
  landing: "/landing",
  pricing: "/pricing",
  about: "/about",

  // Auth
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  onboarding: "/onboarding",

  // Dashboard
  dashboard: "/dashboard",
  warmup: "/warmup",
  viralFinder: "/viral-finder",
  hooks: "/hooks",
  analytics: "/analytics",
  billing: "/billing",
  settings: "/settings",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
