/**
 * Deterministic JSON.stringify — object keys are emitted in sorted
 * order so the output is stable across runs. Handy for hashing,
 * snapshots and cache keys.
 */
export function stableStringify(value: unknown): string {
  return JSON.stringify(value, (_, val) => {
    if (val && typeof val === "object" && !Array.isArray(val)) {
      const out: Record<string, unknown> = {};
      for (const key of Object.keys(val).sort()) {
        out[key] = (val as Record<string, unknown>)[key];
      }
      return out;
    }
    return val;
  });
}
