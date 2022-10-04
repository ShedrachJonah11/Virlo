# Contributing to Virlo

Thanks for taking the time to contribute!

## Local setup

```bash
npm install
npm run dev
```

## Branch + commit conventions

- Branch names: `feat/<short-description>`, `fix/<short-description>`,
  `chore/<short-description>`.
- Commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/)
  format, e.g. `feat: add formatCompactNumber helper`.

## Code style

- Run `npm run lint` before opening a PR.
- Prefer small, focused commits over a single large diff.
- Co-locate types with the code that owns them; cross-cutting types go in `types/`.
