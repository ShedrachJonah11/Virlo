import { APP_NAME, APP_URL } from "@/lib/constants";

export interface SeoOptions {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

/** Build canonical metadata for a Next.js route. */
export function buildMetadata(options: SeoOptions) {
  const { title, description, path = "/", image } = options;
  const url = new URL(path, APP_URL).toString();
  return {
    title: `${title} | ${APP_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: APP_NAME,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  } as const;
}
