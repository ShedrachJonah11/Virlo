const PR = new Intl.PluralRules("en-US", { type: "ordinal" });
const SUFFIX: Record<Intl.LDMLPluralRule, string> = {
  zero: "th",
  one: "st",
  two: "nd",
  few: "rd",
  many: "th",
  other: "th",
};

/** Format an integer with its English ordinal suffix: 1 -> "1st". */
export function formatOrdinal(value: number): string {
  if (!Number.isFinite(value)) return "—";
  const n = Math.trunc(value);
  const rule = PR.select(n);
  return `${n}${SUFFIX[rule]}`;
}
