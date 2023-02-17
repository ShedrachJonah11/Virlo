/**
 * Lock/unlock body scroll. Designed to be called from a modal/drawer
 * effect; calls nest correctly via a refcount so multiple overlays
 * play nicely.
 */
let lockCount = 0;
let originalOverflow: string | null = null;

export function lockScroll(): void {
  if (typeof document === "undefined") return;
  lockCount += 1;
  if (lockCount === 1) {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
}

export function unlockScroll(): void {
  if (typeof document === "undefined") return;
  if (lockCount === 0) return;
  lockCount -= 1;
  if (lockCount === 0 && originalOverflow !== null) {
    document.body.style.overflow = originalOverflow;
    originalOverflow = null;
  }
}
