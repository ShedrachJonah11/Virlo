/**
 * djb2 string hash — fast, non-cryptographic. Used as a deterministic
 * keying function (e.g. for cache buckets, mock-data shuffling).
 */
export function djb2(input: string): number {
  let hash = 5381;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 33) ^ input.charCodeAt(i);
  }
  return hash >>> 0;
}
