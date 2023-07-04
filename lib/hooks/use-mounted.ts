"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` after the component has mounted on the client.
 * Useful for gating client-only UI (e.g. theme switchers) to avoid
 * hydration mismatches.
 *
 * The single set-state in the effect is intentional — that's the
 * whole point of the hook.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  return mounted;
}
