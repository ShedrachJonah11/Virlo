import type { Platform } from "@/types";
import { PLATFORM_LABELS } from "./constants/platforms";

export interface PlatformProfile {
  readonly id: Platform;
  readonly label: string;
  /** Typical max video length (seconds) on this platform. */
  readonly maxClipSeconds: number;
  /** Best aspect ratio for short-form content. */
  readonly aspect: "9:16" | "1:1" | "16:9";
}

export const PLATFORM_PROFILES: Readonly<Record<Platform, PlatformProfile>> = {
  tiktok: {
    id: "tiktok",
    label: PLATFORM_LABELS.tiktok,
    maxClipSeconds: 180,
    aspect: "9:16",
  },
  instagram: {
    id: "instagram",
    label: PLATFORM_LABELS.instagram,
    maxClipSeconds: 90,
    aspect: "9:16",
  },
  youtube: {
    id: "youtube",
    label: PLATFORM_LABELS.youtube,
    maxClipSeconds: 60,
    aspect: "9:16",
  },
};
