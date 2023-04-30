import type {
  useDebounce,
  useThrottle,
  useToggle,
  useCounter,
  usePagination,
} from "@/lib/hooks";

// Just check the export surface is reachable.
type _A = typeof useDebounce;
type _B = typeof useThrottle;
type _C = typeof useToggle;
type _D = typeof useCounter;
type _E = typeof usePagination;

declare const _checks: [_A, _B, _C, _D, _E];
void _checks;
