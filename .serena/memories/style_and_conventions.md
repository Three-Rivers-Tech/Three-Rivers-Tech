# Style and conventions
- Strict TypeScript, no `any`; React components use PascalCase files, kebab-case folders.
- Tailwind utility classes with design tokens (rounded-2xl, p-6 sm:p-8, transition-all duration-300, dark: variants required).
- Shared UI comes from `@/components/ui/*`; extend existing patterns before creating new ones.
- Accessibility: WCAG 2.1 AA, min touch targets 48px, provide aria labels, use semantic HTML.
- Static export only: no server components, API routes, or runtime-only features; assets live in `public/` and must be optimized.
- Imports use `@/` alias from `src/`; keep messaging clear and jargon-free for community audience.