import { parseDate, parseDateOr } from "@/lib/date/parse";

const _a: Date | null = parseDate("2024-01-15");
const _b: Date = parseDateOr(undefined, new Date());

void _a;
void _b;
