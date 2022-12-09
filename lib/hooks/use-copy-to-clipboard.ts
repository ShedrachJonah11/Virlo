"use client";

import { useCallback, useState } from "react";

export interface UseCopyApi {
  copied: boolean;
  copy: (text: string) => Promise<boolean>;
  reset: () => void;
}

/**
 * Copies arbitrary text to the clipboard. The `copied` flag is true
 * for `resetAfterMs` after a successful copy, then flips back so the
 * UI can re-render the copy button.
 */
export function useCopyToClipboard(resetAfterMs: number = 2000): UseCopyApi {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      if (typeof navigator === "undefined" || !navigator.clipboard) {
        return false;
      }
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        if (resetAfterMs > 0) {
          setTimeout(() => setCopied(false), resetAfterMs);
        }
        return true;
      } catch {
        return false;
      }
    },
    [resetAfterMs]
  );

  const reset = useCallback(() => setCopied(false), []);

  return { copied, copy, reset };
}
