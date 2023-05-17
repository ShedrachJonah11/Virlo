/**
 * Push a string into a live region so screen-readers announce it.
 * Creates a singleton `aria-live="polite"` element under <body> on
 * first call and re-uses it afterwards.
 */
let region: HTMLElement | null = null;

function ensureRegion(): HTMLElement | null {
  if (typeof document === "undefined") return null;
  if (region) return region;
  region = document.createElement("div");
  region.setAttribute("aria-live", "polite");
  region.setAttribute("aria-atomic", "true");
  region.className = "sr-only";
  document.body.appendChild(region);
  return region;
}

export function announce(message: string): void {
  const node = ensureRegion();
  if (!node) return;
  // Clear and re-set so consecutive identical messages still announce.
  node.textContent = "";
  // Re-flow on next tick.
  setTimeout(() => {
    if (region) region.textContent = message;
  }, 50);
}
