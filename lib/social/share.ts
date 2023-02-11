/**
 * Build a tweet-intent URL for sharing arbitrary text + url.
 */
export function tweetIntent(text: string, url?: string): string {
  const params = new URLSearchParams({ text });
  if (url) params.set("url", url);
  return `https://twitter.com/intent/tweet?${params.toString()}`;
}
