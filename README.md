# cucumber

## 🚀 Quick start

**Prerequisites**

- Node.js (16+)
- npm (or your preferred Node package manager)

**Install dependencies**

```bash
npm ci
```

**Run tests**

```bash
npm test
# or run a single feature
npx cucumber-js features/login.feature
```

## 🔧 Configuration

- Project uses Cucumber with configuration in `cucumber.cjs` (CommonJS) and `cucumber.mjs` (ESM).
- Playwright is used for browser automation; test hooks live under `src/hooks/` and the `CustomWorld` is in `src/worlds/`.
- Storage state files are written under `.auth/` (worker-specific files like `.auth/storage-state-0.json`).

## 🧭 Notes

- Environment variables: set `STANDARD_USER` and `PASSWORD` to change default credentials.
- Keep generated artifacts out of git (e.g., `.auth/`, `videos/`, `reports/`). See `.gitignore` for recommended entries.

---

For more details, inspect the `src/` folder (pages, steps, hooks, worlds) and `cucumber.cjs` config.
