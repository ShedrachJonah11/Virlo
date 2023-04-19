/**
 * Async clipboard copy that works outside React components.
 * Returns true on success, false on failure (no clipboard API,
 * permission denied, etc.).
 */
export async function copyText(text: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
