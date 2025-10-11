# Development Guide

## Overview

This guide provides detailed information for developers working on the Three Rivers Tech website. It covers architecture decisions, coding standards, and best practices specific to this project.

## Architecture

### Next.js App Router Structure

The project uses Next.js 15 with the App Router pattern:

## Development Guide – Essentials

### Architecture
- Next.js 15 App Router: `src/app/layout.tsx`, `src/app/page.tsx`, page-specific components.
- Shared UI: `src/components/ui/` for reusable design-system components.
- Minimal state: local React state, no global store.

### Styling
- Tailwind CSS with custom variables and classes.
- Use `.btn-modern`, `.card-modern` for repeated patterns.
- Mobile-first, accessible, WCAG 2.1 AA.

### Code Standards
- TypeScript, strict types, clear interfaces.
- Prefer DRY, reusable components.
- Document complex logic with JSDoc.
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
}

// Avoid: Unclear or missing types
export interface Props {
  data: any;
  callback: Function;
}
```

#### Component Structure
```tsx
/**
 * Component description with features and usage
 * 
 * @example
 * ```tsx
 * <ComponentName prop="value" />
 * ```
 */
export default function ComponentName({
  prop1,
  prop2 = 'default'
}: ComponentProps) {
  // Component logic here
  
  return (
    <div className="component-styles">
      {/* JSX content */}
    </div>
  );
}
```

### File Naming Conventions

- **Components**: PascalCase (`Header.tsx`, `EnhancedHero.tsx`)
- **Pages**: lowercase (`page.tsx`, `layout.tsx`)
- **Utilities**: camelCase (`metadata-generators.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)

### Import Organization

```tsx
// 1. External libraries
import React from 'react';
import Link from 'next/link';

// 2. Internal utilities and lib
import { generateMetadata } from '@/lib/metadata';

// 3. Components (shared first, then local)
import { Button } from '@/components/ui';
import Header from '@/components/Header';
import LocalComponent from './LocalComponent';

// 4. Types (if not inline)
import type { ComponentProps } from './types';
```

## SEO Implementation

### Metadata Generation

The project uses a centralized metadata system:

```tsx
// Static pages
export const metadata = generateLocalSeoMetadata(
  generateStaticPageMetadata("home")
);

// Dynamic pages
export async function generateMetadata({ params }) {
  return generateServicePageMetadata(params.service);
}
```

### Structured Data

All pages include appropriate Schema.org markup:

```tsx
import StructuredData from '@/components/StructuredData';
import { generatePageStructuredData } from '@/lib/structured-data';

export default function Page() {
  return (
    <>
      <StructuredData data={generatePageStructuredData("home")} />
      {/* Page content */}
    </>
  );
}
```

### Local SEO Optimization

The site is optimized for local search in Turtle Creek, PA:
- Local business schema markup
- Geographic coordinates and service areas
- Local keywords in metadata
- Community-focused content

## Performance Optimization

### Image Optimization

```tsx
// Use OptimizedImage component for all images
import { OptimizedImage } from '@/components/OptimizedImage';

<OptimizedImage
  src="/images/hero-bg.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={600}
  priority={true} // For above-fold images
/>
```

### Bundle Optimization

- **Static Export** - Pre-rendered HTML for fast loading
- **Turbopack** - Fast development builds
- **Tree Shaking** - Unused code elimination
- **CSS Purging** - Remove unused Tailwind classes

### Core Web Vitals

Monitor and optimize for:
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1

## Testing Strategy

### Unit Testing with Vitest

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run specific test suites
npm run test:seo
npm run test:accessibility
```

### Test Structure

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles user interaction', async () => {
    const handleClick = vi.fn();
    render(<Component onClick={handleClick} />);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### E2E Testing with Playwright

```bash
# Run E2E tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test contact.spec.ts
```

## Accessibility Guidelines

### WCAG 2.1 AA Compliance

- **Semantic HTML** - Use proper HTML elements
- **ARIA Labels** - Provide accessible names and descriptions
- **Keyboard Navigation** - All interactive elements accessible via keyboard
- **Color Contrast** - Minimum 4.5:1 ratio for normal text
- **Focus Management** - Visible focus indicators

### Implementation Examples

```tsx
// Good: Semantic HTML with ARIA
<button
  aria-label="Close dialog"
  onClick={handleClose}
  className="focus:ring-2 focus:ring-primary"
>
  <CloseIcon aria-hidden="true" />
</button>

// Good: Proper heading hierarchy
<section aria-labelledby="services-heading">
  <h2 id="services-heading">Our Services</h2>
  {/* Section content */}
</section>
```

## Deployment

### Build Process

```bash
# Development build
npm run dev

# Production build
npm run build

# Analyze bundle size
npm run build:analyze
```

### Static Export Configuration

The site is configured for static export in `next.config.ts`:

```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true // Required for static hosting
  }
};
```

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://threeriverstech.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## Common Patterns

### Page Layout Pattern

```tsx
export default function Page() {
  return (
    <>
      {/* SEO and structured data */}
      <StructuredData data={pageSchema} />
      
      {/* Page content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-16">
          <SectionBadge text="Page Section" />
          <h1 className="text-4xl font-bold mb-6">Page Title</h1>
          <p className="text-xl text-foreground-secondary">
            Page description
          </p>
        </header>
        
        {/* Main content */}
        <main>
          {/* Content sections */}
        </main>
      </div>
    </>
  );
}
```

### Service Section Pattern

```tsx
function ServiceSection() {
  return (
    <section className="section-padding" aria-labelledby="section-heading">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-16">
          <SectionBadge text="Section Label" />
          <h2 id="section-heading" className="text-3xl font-bold mb-6">
            Section Title
          </h2>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Grid content */}
        </div>
      </div>
    </section>
  );
}
```

## Troubleshooting

### Common Issues

#### Build Errors
- **TypeScript errors**: Check for missing types or incorrect interfaces
- **Import errors**: Verify file paths and exports
- **CSS errors**: Check Tailwind class names and custom CSS

#### Performance Issues
- **Large bundle size**: Use `npm run build:analyze` to identify large dependencies
- **Slow loading**: Optimize images and check for unnecessary re-renders
- **Layout shift**: Ensure proper image dimensions and loading states

#### SEO Issues
- **Missing metadata**: Check metadata generation functions
- **Invalid structured data**: Validate JSON-LD with Google's testing tool
- **Poor local SEO**: Verify local business information and geographic data

### Debug Tools

```bash
# Analyze bundle size
npm run build:analyze

# Check TypeScript errors
npx tsc --noEmit

# Lint code
npm run lint

# Test accessibility
npm run test:accessibility
```

## Contributing

### Pull Request Process

1. **Create feature branch** from `main`
2. **Implement changes** following code standards
3. **Add tests** for new functionality
4. **Update documentation** if needed
5. **Run full test suite** before submitting
6. **Create pull request** with clear description

### Code Review Checklist

- [ ] TypeScript interfaces and types are properly defined
- [ ] Components have JSDoc documentation
- [ ] Accessibility requirements are met
- [ ] SEO metadata is properly configured
- [ ] Tests are included for new functionality
- [ ] Performance impact is considered
- [ ] Mobile responsiveness is verified

---

This guide should be updated as the project evolves and new patterns emerge.