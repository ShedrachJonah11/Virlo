"use client";

import { useId } from "react";

/**
 * Slightly nicer wrapper around `useId()` that lets you append a suffix.
 *
 *   const id = useStableId("input"); // -> "rR1:abc-input"
 */
export function useStableId(suffix?: string): string {
  const id = useId();
  return suffix ? `${id}-${suffix}` : id;
}
