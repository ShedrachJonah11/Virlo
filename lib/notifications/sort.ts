import type { Notification } from "@/types";

/** Return notifications sorted newest-first by createdAt. Pure. */
export function sortByNewest(items: ReadonlyArray<Notification>): Notification[] {
  return [...items].sort((a, b) => {
    const ta = Date.parse(a.createdAt);
    const tb = Date.parse(b.createdAt);
    return tb - ta;
  });
}
