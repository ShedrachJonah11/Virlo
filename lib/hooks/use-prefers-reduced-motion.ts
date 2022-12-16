"use client";

import { useMediaQuery } from "./use-media-query";

/**
 * True if the user has requested reduced motion at the OS level.
 * Disable any non-essential animations when this is true.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
