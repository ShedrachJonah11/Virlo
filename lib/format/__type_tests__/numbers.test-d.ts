// Compile-time type assertions for lib/format/numbers.
// This file is purely for the type-checker; it doesn't run at runtime.
import {
  formatNumber,
  formatCompactNumber,
  formatPercent,
} from "@/lib/format/numbers";

const _n: string = formatNumber(1234);
const _c: string = formatCompactNumber(1234);
const _p: string = formatPercent(0.5);

void _n;
void _c;
void _p;
