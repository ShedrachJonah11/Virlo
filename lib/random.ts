/** Random integer in [min, max] inclusive. */
export function randomInt(min: number, max: number): number {
  if (max < min) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Random element from a non-empty array, or undefined for empty input. */
export function randomItem<T>(items: ReadonlyArray<T>): T | undefined {
  if (items.length === 0) return undefined;
  return items[randomInt(0, items.length - 1)];
}

/** Fisher-Yates shuffle. Returns a new array; does not mutate. */
export function shuffle<T>(items: ReadonlyArray<T>): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = randomInt(0, i);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
