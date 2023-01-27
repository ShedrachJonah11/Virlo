/** Inclusive numeric range as an array: range(1, 3) -> [1, 2, 3]. */
export function range(start: number, endInclusive: number, step: number = 1): number[] {
  if (step <= 0) return [];
  const out: number[] = [];
  for (let i = start; i <= endInclusive; i += step) out.push(i);
  return out;
}

/** Clamp a number into [min, max]. */
export function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}
