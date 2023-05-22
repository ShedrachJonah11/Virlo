import type { OnboardingData } from "@/types";
import { ValidationError, type FieldIssue } from "@/lib/errors";
import { PLATFORMS } from "@/lib/constants/platforms";

/**
 * Validate the onboarding form payload. Throws a `ValidationError`
 * if any field is missing/invalid; returns the trimmed payload otherwise.
 */
export function validateOnboarding(input: OnboardingData): OnboardingData {
  const issues: FieldIssue[] = [];

  const niche = input.niche?.trim() ?? "";
  if (niche.length < 2) {
    issues.push({ path: "niche", message: "Niche must be at least 2 characters" });
  }

  if (!Array.isArray(input.platforms) || input.platforms.length === 0) {
    issues.push({ path: "platforms", message: "Pick at least one platform" });
  } else {
    for (const platform of input.platforms) {
      if (!PLATFORMS.includes(platform)) {
        issues.push({
          path: "platforms",
          message: `Unknown platform: ${platform}`,
        });
      }
    }
  }

  if (!input.contentStyle?.trim()) {
    issues.push({ path: "contentStyle", message: "Tell us your content style" });
  }

  if (issues.length > 0) {
    throw new ValidationError("Please complete onboarding", issues);
  }

  return {
    niche,
    platforms: input.platforms,
    keywords: (input.keywords ?? []).map((k) => k.trim()).filter(Boolean),
    contentStyle: input.contentStyle.trim(),
  };
}
