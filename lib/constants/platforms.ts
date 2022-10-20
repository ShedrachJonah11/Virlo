import type { Platform } from "@/types";

export const PLATFORMS: ReadonlyArray<Platform> = [
  "tiktok",
  "instagram",
  "youtube",
] as const;

export const PLATFORM_LABELS: Record<Platform, string> = {
  tiktok: "TikTok",
  instagram: "Instagram",
  youtube: "YouTube",
};

export const PLATFORM_COLORS: Record<Platform, string> = {
  tiktok: "#000000",
  instagram: "#E1306C",
  youtube: "#FF0000",
};

export function isPlatform(value: unknown): value is Platform {
  return (
    typeof value === "string" &&
    (PLATFORMS as ReadonlyArray<string>).includes(value)
  );
}
