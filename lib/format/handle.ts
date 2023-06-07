import type { Platform } from "@/types";
import { PLATFORM_LABELS } from "@/lib/constants/platforms";
import { displayHandle } from "@/lib/social";

/**
 * Render a creator's handle alongside a short platform label:
 *   handleWithPlatform("@alex", "tiktok") -> "@alex · TikTok"
 */
export function handleWithPlatform(handle: string, platform: Platform): string {
  return `${displayHandle(handle)} · ${PLATFORM_LABELS[platform]}`;
}
