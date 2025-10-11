<!-- Copilot / AI agent instructions for Three Rivers Tech repository -->
# Three Rivers Tech — AI Agent Productivity Guide

This guide enables AI coding agents to be immediately effective in this monorepo. It merges current best practices and conventions from code and documentation.

## Architecture Overview
- **Monorepo**: Python entry (`app.py`) and Next.js 15 website in `website/`.
- **Website**: Next.js App Router, TypeScript, Tailwind CSS, Turbopack, Vitest, Playwright.
- **Deployment**: Static build deployed to Cloudflare Pages via CI (`website/.github/workflows/deploy.yml`). Only `/out` is published; avoid server-only features.

## Key Workflows
- **Install**: `npm install` in `website/`
- **Dev server**: `npm run dev` (Turbopack)
- **Build**: `npm run build` (includes image optimization)
- **Start**: `npm start` (production)
- **Image optimization**: `npm run optimize:images` (uses `sharp`)
- **Tests**:
	- Unit: `npm run test`
	- Accessibility: `npm run test:accessibility`
	- SEO: `npm run test:seo`
	- E2E: `npx playwright test`
- **Deploy**: Push/merge to master triggers CI build and deploy.

## Project Conventions
- **UI**: Shared components in `website/src/components/ui/` (`@/components/ui` imports).
- **SEO**: Metadata in `website/src/lib/metadata-generators` and `website/src/lib/structured-data`.
- **Accessibility**: Use `AccessibilityInitializer` and `AccessibilityControls` in layout.
- **Images**: Place in `public/`, run optimization before build/deploy.
- **TypeScript**: Strict types and `@/` imports enforced.
- **Node scripts**: ESM (.mjs) in `website/scripts/`, Node 18+ required.

## Integration Points & Cross-Cutting Concerns
- **Analytics**: `website/src/lib/analytics.ts`
- **Error/Telemetry**: `website/src/components/ErrorMonitoring.tsx`, `MonitoringDashboard.tsx`
- **SEO/Robots/Sitemap**: `website/src/app/robots.ts`, `website/src/app/sitemap.ts`
- **CI/CD**: `website/.github/workflows/deploy.yml`

## Gotchas & Patterns
- **Cloudflare Pages**: Only `/out` is deployed; server-only code is ignored.
- **Image optimization**: Next.js image optimization is disabled for static export; use `sharp`.
- **Static assets**: All must be in `public/` and optimized.

## Safe Change Checklist
- TypeScript must build cleanly
- Run all tests for new features
- Optimize images before build/deploy
- Check `/out` for Cloudflare compatibility
- Update `website/README.md` for new scripts/workflows
- Document new environment variables/secrets

## Branching & PRs
- Use feature branches for new work
- Master is always deployable
- CI deploys latest build on merge
- Keep changes scoped; update docs for new workflows
- Run lint and tests before PRs; add verification notes

## If Unclear
- If a pattern is not found in code, do not invent one—refer to maintainers in PRs.
- Ask for feedback/examples of undocumented patterns after changes.

---

For questions or missing patterns, leave a note in your PR for maintainers.
