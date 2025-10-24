<!-- Copilot / AI agent instructions for Three Rivers Tech repository -->
# Three Rivers Tech — AI Agent Productivity Guide

This guide enables AI coding agents to be immediately productive in this monorepo. It summarizes current architecture, workflows, and conventions, referencing key files and documentation.

## 🏗️ Architecture Overview
- **Monorepo**: Python entry (`app.py`) and main Next.js 15 website in `website/`.
- **Website**: Next.js App Router (`src/app/`), TypeScript, Tailwind CSS, Turbopack, Vitest, Playwright.
- **Static Export**: Deployed to Cloudflare Pages via CI (`website/.github/workflows/deploy.yml`). Only `/out` is published—**avoid server-only features**.

## 🚦 Key Developer Workflows
- **Install**: `npm install` in `website/`
- **Dev server**: `npm run dev` (Turbopack)
- **Build**: `npm run build` (includes image optimization)
- **Start**: `npm start` (production)
- **Image optimization**: `npm run optimize:images` (uses `sharp`)
- **Tests**:
  - Unit: `npm run test` (Vitest)
  - Accessibility: `npm run test:accessibility`
  - SEO: `npm run test:seo`
  - E2E: `npx playwright test`
- **Deploy**: Push/merge to `master` triggers CI build and deploy.

## 📐 Project Conventions & Patterns
- **UI**: Shared components in `website/src/components/ui/` (`@/components/ui` imports). Use PascalCase for components, kebab-case for files/dirs.
- **SEO**: Metadata in `website/src/lib/metadata-generators.ts` and `website/src/lib/structured-data.ts`.
- **Accessibility**: Use `AccessibilityInitializer` and `AccessibilityControls` in layout. Follow WCAG 2.1 AA.
- **Images**: Place in `public/`, optimize before build/deploy. See `website/docs/IMAGE_GUIDELINES.md`.
- **TypeScript**: Strict types, absolute `@/` imports from `src/`.
- **Tests**: Test files end with `.test.ts` or `.test.tsx`.
- **Scripts**: ESM (.mjs) in `website/scripts/`, Node 18+ required.

## 🔗 Integration Points & Cross-Cutting Concerns
- **Analytics**: `website/src/lib/analytics.ts`
- **Error/Telemetry**: `website/src/components/ErrorMonitoring.tsx`, `MonitoringDashboard.tsx`
- **SEO/Robots/Sitemap**: `website/src/app/robots.ts`, `website/src/app/sitemap.ts`
- **CI/CD**: `website/.github/workflows/deploy.yml`

## ⚡ Gotchas & Patterns
- **Cloudflare Pages**: Only `/out` is deployed; server-only code is ignored.
- **Image optimization**: Next.js image optimization is disabled for static export; use `sharp` and optimize images in `public/`.
- **Static assets**: All must be in `public/` and optimized.
- **Minimal state**: Use local React state, no global store.
- **Absolute imports**: Always import from `src/` using `@/` alias.

## ✅ Safe Change Checklist
- TypeScript must build cleanly
- Run all tests for new features
- Optimize images before build/deploy
- Check `/out` for Cloudflare compatibility
- Update `website/README.md` for new scripts/workflows
- Document new environment variables/secrets

## 🌱 Branching & PRs
- Use feature branches for new work
- `master` is always deployable
- CI deploys latest build on merge
- Keep changes scoped; update docs for new workflows
- Run lint and tests before PRs; add verification notes

## 📚 Documentation & References
- Start with `website/docs/README.md` for navigation
- See `website/docs/DEVELOPMENT_GUIDE.md` for architecture, setup, and patterns
- Component specs: `website/docs/COMPONENT_LIBRARY.md`, `website/docs/VISUAL_STANDARDS.md`
- Design system: `website/docs/DESIGN_SYSTEM.md`
- Image workflow: `website/docs/IMAGE_GUIDELINES.md`
- Animation: `website/docs/ANIMATION_GUIDE.md`

## 🛑 If Unclear
- If a pattern is not found in code, do not invent one—refer to maintainers in PRs.
- Ask for feedback/examples of undocumented patterns after changes.

---

For questions or missing patterns, leave a note in your PR for maintainers.
