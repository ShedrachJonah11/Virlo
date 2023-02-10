import type { Platform } from "@/types";
import { normaliseUsername } from "@/lib/validators";

/** Build a public profile URL from a platform + handle. */
export function profileUrl(platform: Platform, handle: string): string {
  const u = normaliseUsername(handle);
  switch (platform) {
    case "tiktok":
      return `https://www.tiktok.com/@${u}`;
    case "instagram":
      return `https://www.instagram.com/${u}`;
    case "youtube":
      return `https://www.youtube.com/@${u}`;
  }
}

/** Display form of a handle with a leading "@". */
export function displayHandle(handle: string): string {
  const u = normaliseUsername(handle);
  return u ? `@${u}` : "";
}
