import { colourFromSeed } from "@/lib/colour";

/**
 * Build a deterministic, no-image CSS background for a video thumbnail
 * placeholder, seeded by the video id. Use until real thumbnails arrive.
 */
export function thumbnailPlaceholder(seed: string): string {
  return `linear-gradient(135deg, ${colourFromSeed(seed)}, ${colourFromSeed(seed + ":2")})`;
}
