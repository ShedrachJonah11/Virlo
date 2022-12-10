"use client";

import { useEffect, type RefObject } from "react";

/**
 * Invokes `handler` whenever a pointerdown event lands outside `ref`.
 * Use for dismissing popovers, dropdowns, etc.
 */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: PointerEvent) => void
): void {
  useEffect(() => {
    const listener = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!ref.current || !target) return;
      if (ref.current.contains(target)) return;
      handler(event);
    };
    document.addEventListener("pointerdown", listener);
    return () => document.removeEventListener("pointerdown", listener);
  }, [ref, handler]);
}
