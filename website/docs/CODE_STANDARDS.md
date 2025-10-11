# Code Standards & Conventions

Comprehensive guide to code standards, conventions, and best practices for the Three Rivers Tech website codebase.

## 🎯 Quick Reference

### Component Standards
- **Cards**: Always use `rounded-2xl` (1.5rem)
- **Buttons**: Always use `rounded-xl` (0.75rem)
- **Padding**: `p-6 sm:p-8` for card content
- **Hover**: `hover:-translate-y-1` for lift effect (4px)
- **Transition**: `transition-all duration-300` standard
- **Dark Mode**: Include `dark:` variants for all colors
- **Semantic HTML**: Use `<article>`, `<section>`, `<header>`, etc.

---

## 🏗️ Component Structure

### Standard Card Pattern

```tsx
<article 
  className="
    bg-background 
    dark:bg-background-secondary 
    rounded-2xl 
    p-6 sm:p-8 
    shadow-soft 
    hover:shadow-large 
    border border-border/50 
    dark:border-border
    hover:border-primary/20 
    dark:hover:border-primary/30
    hover:-translate-y-1
    transition-all duration-300
  "
  role="article"
  aria-labelledby="card-title"
>
  <h3 id="card-title" className="text-xl font-bold mb-4">
    Card Title
  </h3>
  <p className="text-foreground-secondary">
    Card content with proper semantic structure.
  </p>
</article>
```

**Key Points**:
- ✅ Use `<article>` for semantic HTML
- ✅ `rounded-2xl` for cards (1.5rem)
- ✅ `p-6 sm:p-8` for consistent padding
- ✅ Include dark mode variants
- ✅ Proper ARIA labels and roles
- ✅ 50% opacity on borders in light mode
- ✅ Hover states with lift and shadow

### Standard Button Pattern

```tsx
<Link
  href="/contact"
  className="
    inline-flex items-center
    px-6 py-3
    bg-primary
    text-white
    font-semibold
    rounded-xl
    min-h-[48px]
    hover:bg-primary-hover
    hover:scale-105
    hover:shadow-glow
    hover:-translate-y-1
    transition-all duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-primary
    focus:ring-offset-2
  "
  aria-label="Navigate to contact page"
>
  Button Text
</Link>
```

**Key Points**:
- ✅ `rounded-xl` for buttons (0.75rem)
- ✅ `min-h-[48px]` for accessibility
- ✅ `hover:scale-105` for subtle grow
- ✅ `hover:-translate-y-1` for lift
- ✅ Include aria-label for context
- ✅ 300ms transition standard

---

## 🎨 CSS Class Conventions

### Color Classes

**Light Mode**:
```css
bg-background              /* Main background */
bg-background-secondary    /* Secondary sections */
text-foreground            /* Primary text */
text-foreground-secondary  /* Secondary text */
border-border              /* Borders */
```

**Dark Mode** (always include):
```css
dark:bg-background-secondary   /* Cards in dark mode */
dark:text-foreground          /* Text in dark mode */
dark:border-border            /* Borders in dark mode */
```

**Opacity Variants**:
```css
border-border/50              /* 50% opacity - light mode default */
dark:border-border            /* 100% opacity - dark mode default */
hover:border-primary/20       /* 20% opacity on hover */
dark:hover:border-primary/30  /* 30% opacity dark mode hover */
```

### Spacing Classes

**Padding**:
```css
p-6           /* Mobile: 1.5rem (24px) */
sm:p-8        /* Desktop: 2rem (32px) */
```

**Margin**:
```css
mb-6          /* Bottom margin: 1.5rem */
sm:mb-8       /* Desktop: 2rem */
```

**Gap**:
```css
gap-6         /* Mobile: 1.5rem */
lg:gap-8      /* Desktop: 2rem */
```

### Border Radius Standards

**ALWAYS USE**:
```css
rounded-2xl   /* Cards: 1.5rem (24px) */
rounded-xl    /* Buttons: 0.75rem (12px) */
rounded-full  /* Badges, pills */
```

**NEVER USE** (inconsistent):
```css
rounded-lg    /* ❌ Don't use for cards */
rounded-md    /* ❌ Don't use for buttons */
```

---

## 📱 Responsive Design Patterns

### Mobile-First Approach

Always write mobile styles first, then add larger breakpoints:

```tsx
<div className="
  p-6          {/* Mobile: 24px */}
  sm:p-8       {/* Tablet: 32px */}
  lg:p-10      {/* Desktop: 40px */}
">
```

### Grid Patterns

**Standard Grid**:
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {/* 1 column mobile, 2 tablet, 3 desktop */}
</div>
```

**Feature Grid**:
```tsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
  {/* 2 columns mobile, 4 desktop */}
</div>
```

### Typography Scaling

```tsx
<h2 className="
  text-3xl      {/* Mobile: 30px */}
  sm:text-4xl   {/* Tablet: 36px */}
  md:text-5xl   {/* Desktop: 48px */}
  lg:text-6xl   {/* Large: 60px */}
">
```

---

## ♿ Accessibility Requirements

### Semantic HTML

**Use proper HTML5 elements**:

```tsx
<article>       {/* For self-contained content */}
<section>       {/* For thematic grouping */}
<header>        {/* For section headers */}
<nav>           {/* For navigation */}
<main>          {/* For main content */}
<footer>        {/* For footer content */}
```

**Avoid generic divs**:
```tsx
{/* ❌ Bad */}
<div className="card">
  <div className="title">Title</div>
</div>

{/* ✅ Good */}
<article className="card">
  <h3 className="title">Title</h3>
</article>
```

### ARIA Labels

**Required for links and buttons**:
```tsx
<Link 
  href="/contact"
  aria-label="Navigate to contact page to send a message"
>
  Contact
</Link>

<button 
  onClick={handleClick}
  aria-label="Submit contact form"
>
  Send
</button>
```

**For decorative icons**:
```tsx
<svg aria-hidden="true" className="w-6 h-6">
  {/* Decorative icon */}
</svg>
```

### Focus States

**ALWAYS include focus styles**:
```tsx
className="
  focus:outline-none
  focus:ring-2
  focus:ring-primary
  focus:ring-offset-2
"
```

### Touch Targets

**Minimum 48px for mobile**:
```tsx
className="min-h-[48px] px-6 py-3"
```

---

## 🌑 Dark Mode Implementation

### Color Variables

**Always use CSS variables**:
```tsx
{/* ✅ Correct */}
className="bg-background text-foreground"

{/* ❌ Wrong - hardcoded colors */}
className="bg-white text-black"
```

### Dark Mode Pattern

**Standard pattern for all elements**:
```tsx
<div className="
  bg-background
  dark:bg-background-secondary
  text-foreground
  dark:text-foreground
  border border-border/50
  dark:border-border
">
```

### Cards in Dark Mode

```tsx
<article className="
  bg-background
  dark:bg-background-secondary    {/* Darker background */}
  border border-border/50
  dark:border-border              {/* More visible border */}
  shadow-soft
  hover:shadow-large
">
```

---

## 🎬 Animation Standards

### Transitions

**Standard transition**:
```css
transition-all duration-300
```

**Use this for**:
- Card hovers
- Button interactions
- Border color changes
- Shadow changes

### Hover Animations

**Card hover**:
```css
hover:-translate-y-1        /* Lift 4px */
hover:shadow-large          /* Enhanced shadow */
hover:border-primary/20     /* Tinted border */
```

**Button hover**:
```css
hover:scale-105            /* Grow 5% */
hover:-translate-y-1       /* Lift 4px */
hover:shadow-glow          /* Add glow */
```

### Animation Classes

**Page load animations**:
```tsx
className="animate-fade-in"           {/* Fade in */}
className="animate-slide-up"          {/* Slide up */}
className="animate-scale-in"          {/* Scale in */}
```

**Staggered animations**:
```tsx
className="animate-slide-up animation-delay-200"
className="animate-slide-up animation-delay-400"
className="animate-slide-up animation-delay-600"
```

---

## 📦 Component Imports

### Import Order

```tsx
// 1. React and Next.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 2. UI components
import { Button, Card } from '@/components/ui';

// 3. Local components
import ServiceCard from './ServiceCard';

// 4. Utilities and types
import { cn } from '@/lib/utils';
import type { ServiceType } from '@/types';
```

### Barrel Exports

**Use barrel exports from ui/**:
```tsx
// ✅ Correct
import { Button, Card, NavLink } from '@/components/ui';

// ❌ Wrong - individual imports
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
```

---

## 🔧 TypeScript Standards

### Component Props

**Always define prop interfaces**:
```tsx
export interface ButtonProps {
  /**
   * Button text content
   */
  children: React.ReactNode;
  
  /**
   * Link destination (renders as Link if provided)
   */
  href?: string;
  
  /**
   * Click handler (renders as button if provided)
   */
  onClick?: () => void;
  
  /**
   * Visual variant
   */
  variant?: 'primary' | 'secondary';
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = ''
}: ButtonProps) {
  // Component implementation
}
```

**Key points**:
- ✅ JSDoc comments for each prop
- ✅ Specific types (no `any`)
- ✅ Default values documented
- ✅ Export interface for reuse

### Type Safety

```tsx
// ✅ Correct - typed
const services: Service[] = [...];

// ❌ Wrong - untyped
const services = [...];
```

---

## 🎯 Cloudflare Pages Considerations

### Static Export Requirements

**All components must be static-friendly**:

```tsx
// ✅ Correct - static rendering
export default function Page() {
  return <div>Static content</div>;
}

// ❌ Wrong - server-side features
export default function Page() {
  const data = await fetchData();  // No server-side in static export
  return <div>{data}</div>;
}
```

### Image Optimization

**Use OptimizedImage component**:
```tsx
import { OptimizedImage } from '@/components/OptimizedImage';

<OptimizedImage
  src="/service-icon.png"
  alt="Service icon showing home tech support"
  width={512}
  height={512}
  priority={false}
  className="w-16 h-16"
/>
```

**Why**:
- Next.js Image API not available in static export
- OptimizedImage uses pre-optimized AVIF/WebP formats
- Manual optimization via `npm run optimize:images`

### Links with Trailing Slashes

**ALWAYS include trailing slash**:
```tsx
// ✅ Correct
<Link href="/services/">Services</Link>

// ❌ Wrong - will cause 404
<Link href="/services">Services</Link>
```

**Why**: `trailingSlash: true` in next.config.ts requires trailing slashes for all routes.

---

## 📝 Code Comments

### When to Comment

**DO comment**:
- Complex logic or algorithms
- Workarounds for known issues
- Component purpose and usage
- Non-obvious design decisions

**DON'T comment**:
- Obvious code (`// Set x to 5`)
- What the code does (code should be self-documenting)
- Old code (delete it instead)

### Comment Style

**Component documentation**:
```tsx
/**
 * ServiceCard - Displays service information with icon and CTA
 * 
 * Follows card design standards:
 * - rounded-2xl border radius
 * - p-6 sm:p-8 padding
 * - Dark mode support
 * - Hover lift and shadow effects
 * 
 * @example
 * ```tsx
 * <ServiceCard
 *   title="Home Tech Support"
 *   description="Computer repair and training"
 *   icon={HomeTechIcon}
 *   link="/services/home-support"
 * />
 * ```
 */
export default function ServiceCard({ ... }) {
```

**Inline comments**:
```tsx
// Calculate staggered animation delay based on index
const delay = 400 + (index * 100);
```

---

## 🧪 Testing Standards

### Component Testing

```tsx
// ServiceCard.test.tsx
import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';

describe('ServiceCard', () => {
  it('renders title and description', () => {
    render(
      <ServiceCard
        title="Test Service"
        description="Test description"
        icon={TestIcon}
      />
    );
    
    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
  
  it('has proper accessibility attributes', () => {
    render(<ServiceCard {...props} />);
    
    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('aria-labelledby');
  });
  
  it('follows card design standards', () => {
    const { container } = render(<ServiceCard {...props} />);
    const card = container.firstChild;
    
    expect(card).toHaveClass('rounded-2xl');
    expect(card).toHaveClass('p-6');
  });
});
```

---

## 📋 Code Review Checklist

### Before Submitting PR

- [ ] **Design Standards**
  - [ ] Cards use `rounded-2xl`
  - [ ] Buttons use `rounded-xl`
  - [ ] Consistent padding (`p-6 sm:p-8`)
  - [ ] Proper hover states

- [ ] **Accessibility**
  - [ ] Semantic HTML used
  - [ ] ARIA labels on interactive elements
  - [ ] Focus states included
  - [ ] Alt text on images
  - [ ] Min 48px touch targets

- [ ] **Dark Mode**
  - [ ] Dark mode variants for all colors
  - [ ] Tested in both themes
  - [ ] Borders visible in dark mode

- [ ] **TypeScript**
  - [ ] Props interfaces defined
  - [ ] No `any` types
  - [ ] JSDoc comments added

- [ ] **Performance**
  - [ ] Images optimized (AVIF/WebP)
  - [ ] Lazy loading for below-fold
  - [ ] No unnecessary re-renders

- [ ] **Cloudflare Pages**
  - [ ] No server-side code
  - [ ] Links have trailing slashes
  - [ ] Static export compatible

---

## 🚫 Common Mistakes

### Border Radius

```tsx
{/* ❌ Wrong - inconsistent */}
<div className="rounded-lg">Card</div>
<button className="rounded-md">Button</button>

{/* ✅ Correct - follows standards */}
<article className="rounded-2xl">Card</article>
<button className="rounded-xl">Button</button>
```

### Dark Mode

```tsx
{/* ❌ Wrong - no dark mode */}
<div className="bg-white text-black">

{/* ✅ Correct - includes dark mode */}
<div className="bg-background dark:bg-background-secondary text-foreground">
```

### Accessibility

```tsx
{/* ❌ Wrong - no aria-label */}
<Link href="/contact">Contact</Link>

{/* ✅ Correct - descriptive label */}
<Link href="/contact" aria-label="Navigate to contact page to send a message">
  Contact
</Link>
```

### Hardcoded Colors

```tsx
{/* ❌ Wrong - hardcoded */}
className="bg-teal-600 text-white"

{/* ✅ Correct - uses design system */}
className="bg-primary text-white"
```

---

## 💡 Best Practices Summary

### Always DO ✅
- Use semantic HTML (`<article>`, `<section>`, etc.)
- Include dark mode variants for all colors
- Add ARIA labels to interactive elements
- Use `rounded-2xl` for cards
- Use `rounded-xl` for buttons
- Include `min-h-[48px]` for touch targets
- Import from `@/components/ui` barrel
- Define TypeScript prop interfaces
- Test in both light and dark themes
- Use trailing slashes in links

### Never DO ❌
- Use hardcoded colors
- Skip dark mode variants
- Forget accessibility attributes
- Use inconsistent border radius
- Use `any` type in TypeScript
- Deploy without testing static export
- Reference files outside `/public`
- Use server-side features in components

---

## 📚 Additional Resources

- [Design System Guide](DESIGN_SYSTEM.md) - Complete design specifications
- [Visual Standards](VISUAL_STANDARDS.md) - Visual consistency guidelines
- [Component Library](COMPONENT_LIBRARY.md) - Component reference
- [Cloudflare Optimization](CLOUDFLARE_OPTIMIZATION.md) - Deployment guide

---

**Remember**: Consistency is key. Follow these standards to ensure a cohesive, accessible, and maintainable codebase. When in doubt, reference existing well-implemented components.
