/**
 * Detect macOS at runtime so we can show ⌘ on Mac and Ctrl elsewhere.
 * Returns false during SSR.
 */
export function isMac(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Mac|iPhone|iPad|iPod/i.test(navigator.platform);
}

/** Human-readable "modifier key" symbol. */
export function modifierLabel(): string {
  return isMac() ? "⌘" : "Ctrl";
}
