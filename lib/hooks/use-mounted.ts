"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` after the component has mounted on the client.
 * Useful for gating client-only UI (e.g. theme switchers) to avoid
 * hydration mismatches.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
