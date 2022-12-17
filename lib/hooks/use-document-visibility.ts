"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the current tab is visible. Useful for pausing
 * polling / animations when the tab is in the background.
 */
export function useDocumentVisibility(): boolean {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const update = () => setVisible(document.visibilityState === "visible");
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  return visible;
}
