/**
 * Return the focusable descendants of `container` in tab order.
 * Used by dialogs / drawers when shadcn's primitive isn't quite enough.
 */
const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
  ).filter((el) => !el.hasAttribute("aria-hidden"));
}

/** Return the first focusable element inside `container`, or `null`. */
export function firstFocusable(container: HTMLElement): HTMLElement | null {
  return getFocusable(container)[0] ?? null;
}
