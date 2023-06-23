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

/** Build a deep link to a creator's specific video. */
export function videoUrl(platform: "tiktok" | "instagram" | "youtube", handle: string, id: string): string {
  const u = normaliseUsername(handle);
  switch (platform) {
    case "tiktok":
      return `https://www.tiktok.com/@${u}/video/${id}`;
    case "instagram":
      return `https://www.instagram.com/p/${id}`;
    case "youtube":
      return `https://www.youtube.com/watch?v=${id}`;
  }
}

