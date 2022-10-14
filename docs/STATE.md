# State management

Two Zustand stores back the UI today:

## `useAppStore`

Holds **app-shell UI state**:

- `sidebarOpen` — boolean, drives the desktop sidebar collapse and the
  mobile drawer.
- `notifications` — array of notifications shown in the navbar bell.

## `useAuthStore`

Holds the current `user`, an `isAuthenticated` flag, and a `login` /
`logout` / `updateUser` action set. It's seeded with `mockUser` in
development.

## Conventions

- Selectors over destructuring: `const user = useAuthStore(s => s.user)`
  instead of `const { user } = useAuthStore()` to avoid unnecessary
  re-renders.
- Co-locate stores with their domain: app-wide UI -> `useAppStore`,
  per-feature state -> a dedicated store under `store/`.
