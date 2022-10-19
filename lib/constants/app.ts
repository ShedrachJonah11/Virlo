/**
 * Top-level app constants.
 *
 * Reads from `NEXT_PUBLIC_*` env vars where available so the same
 * code path works in dev, preview and production builds.
 */
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "Virlo";
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const APP_TAGLINE = "Train the algorithm. Grow faster.";

export const SUPPORT_EMAIL = "support@virlo.app";
