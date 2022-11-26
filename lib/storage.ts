/**
 * Tiny localStorage wrapper that:
 *   1. JSON-parses / serialises automatically
 *   2. No-ops cleanly during SSR (where `window` is undefined)
 *   3. Swallows quota / parse errors instead of crashing the app
 */
function hasStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function getItem<T>(key: string, fallback: T): T {
  if (!hasStorage()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function setItem<T>(key: string, value: T): void {
  if (!hasStorage()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Quota or serialisation error — give up silently.
  }
}

export function removeItem(key: string): void {
  if (!hasStorage()) return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* noop */
  }
}
