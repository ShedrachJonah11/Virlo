# Custom React hooks

The `lib/hooks/` directory contains the project's reusable React
hooks. Import them from `@/lib/hooks`:

```ts
import { useDebounce, useLocalStorage, useToggle } from "@/lib/hooks";
```

## Index

| Hook                       | What it does                                        |
| -------------------------- | --------------------------------------------------- |
| `useMounted`               | `true` after client mount; gate client-only UI.     |
| `useDebounce`              | Debounce a fast-changing value.                     |
| `useThrottle`              | Throttle a fast-changing value.                     |
| `useToggle`                | Boolean state with a stable toggle callback.        |
| `useCounter`               | Numeric state with min/max clamping.                |
| `usePrevious`              | The value from the previous render.                 |
| `useLocalStorage`          | `useState` persisted to localStorage.               |
| `useMediaQuery`            | Re-render on viewport changes.                      |
| `useWindowSize`            | Track `innerWidth` / `innerHeight`.                 |
| `useCopyToClipboard`       | Clipboard with auto-reset.                          |
| `useClickOutside`          | Dismiss popovers / dropdowns on outside click.      |
| `useKeypress`              | Listen for one or more keys.                        |
| `useInterval` / `useTimeout` | Lifecycle-safe timers.                            |
| `useOnlineStatus`          | `navigator.onLine` reactive.                        |
| `usePrefersReducedMotion`  | Disable non-essential animation.                    |
| `useDocumentVisibility`    | Pause work when the tab is hidden.                  |
| `useAsync`                 | Wrap a promise call with status tracking.           |
| `useEventListener`         | Type-safe `addEventListener`.                       |

## Conventions

- All hooks are marked `"use client"`.
- Hooks that touch `window`/`document` are SSR-safe and no-op on the
  server.
- Prefer returning tuples for set/get pairs (`[value, setValue]`) so
  callers can rename freely.
