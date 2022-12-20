"use client";

import { useEffect, useRef } from "react";

/**
 * Typed wrapper around `addEventListener`. Stores the handler in a
 * ref so the listener doesn't need to re-bind on every render.
 */
export function useEventListener<K extends keyof WindowEventMap>(
  type: K,
  handler: (event: WindowEventMap[K]) => void,
  target: Window | Document | HTMLElement | null = typeof window !== "undefined" ? window : null
): void {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!target) return;
    const listener: EventListener = (event) =>
      savedHandler.current(event as WindowEventMap[K]);
    target.addEventListener(type, listener);
    return () => target.removeEventListener(type, listener);
  }, [type, target]);
}
