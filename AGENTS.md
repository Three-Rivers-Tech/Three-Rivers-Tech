# Repository Guidelines

## Project Structure & Module Organization
The production Next.js application lives in `website/`. Inside `website/src`, use `app/` for route groups and layouts, `components/` for reusable UI, `content/` for Markdown and YAML data sources, `lib/` for shared helpers, and `types/` for schema definitions. Tests are colocated under `website/src/test`, with shared setup in `setup.ts`. Static assets belong in `website/public/`, and generated builds land in `website/out/`. Repository-wide documentation and research notes stay in the root `docs/` and `website/docs/` folders, so link to them rather than duplicating guidance.

## Build, Test, and Development Commands
Run all Node commands from `website/`. Use `npm run dev` for a Turbopack dev server, `npm run build` to generate a production bundle (image optimization runs automatically), and `npm start` to serve the built site. Quality gates include `npm run lint` (Next + TypeScript rules) and `npm run test` for the Vitest suite. Specialized checks—`npm run test:seo`, `npm run test:accessibility`, and `npm run analyze:bundle`—cover targeted regressions; run them before publishing marketing releases.

## Coding Style & Naming Conventions
TypeScript is the default; prefer strict typing with shared interfaces in `types/`. Follow the ESLint Flat config extending `next/core-web-vitals` and `next/typescript`, which enforces 2-space indentation, JSX import rules, and several async patterns: proper error handling in async functions (`require-await`, `no-return-await`), avoidance of unhandled Promise rejections (`promise/catch-or-return`), requiring either `await` usage or explicit Promise returns, and disallowing mixing callbacks with async/await (`no-mixed-callbacks`). Keep filenames kebab-case, except for React components that stay PascalCase. Import local modules via the `@/` alias so paths remain stable during refactors.

## Testing Guidelines
Vitest with a JSDOM environment powers unit and integration tests. Co-locate specs in `website/src/test` using the `.test.tsx` or `.test.ts` suffix and descriptive names (e.g., `content-validation.test.ts`). Use `npm run test:coverage` to confirm changes do not reduce coverage on critical flows, and update `src/test/setup.ts` when adding new global mocks or accessibility assertions.

## Commit & Pull Request Guidelines
Commit messages follow present-tense sentence case, mirroring the existing history (e.g., “Improve contact form validation”). Bundle related changes and include before/after notes for UI tweaks in the description. Pull requests should: summarize intent, reference tracking issues or docs, list impacted routes, attach screenshots for visual work, and note which test commands were run. Flag configuration or content model changes so reviewers can coordinate deployments.
