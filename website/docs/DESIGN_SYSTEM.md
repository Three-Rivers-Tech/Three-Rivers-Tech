# Three Rivers Tech Design System

A comprehensive guide to the visual language, components, and patterns used throughout the Three Rivers Tech website.

## 🎨 Design Philosophy

### Core Principles
- **Community-Focused**: Warm, approachable design that reflects our hometown values
- **Accessibility-First**: WCAG 2.1 AA compliant with enhanced senior-friendly features
- **Modern & Professional**: Contemporary aesthetics without sacrificing clarity
- **Consistent & Predictable**: Unified patterns across all pages and components

### Visual Identity
- **Primary Color**: Teal (#0d9488) - Trust, community, technology
- **Secondary Color**: Amber (#d97706) - Warmth, energy, local business
- **Temperature**: Warm palette (emerald, teal, amber) vs cool corporate blues
- **Personality**: Approachable, reliable, modern, down-to-earth

---

## 🌈 Color System

### Primary Colors (Teal/Emerald)
```css
--primary: #0d9488          /* Main brand color */
--primary-hover: #0f766e    /* Hover states */
--primary-dark: #0f5d55     /* Active/pressed states */
--primary-light: #54d1bd    /* Accents and highlights */
--primary-contrast: #0f5d55 /* High contrast variant */
```

**Usage**: Primary CTAs, links, focus indicators, brand elements

### Secondary Colors (Amber)
```css
--secondary: #d97706        /* Secondary actions */
--secondary-hover: #b45309  /* Hover states */
--secondary-light: #fbbf24  /* Accents */
```

**Usage**: Secondary buttons, badges, highlights, accent elements

### Semantic Colors
```css
--success: #059669          /* Success states */
--warning: #d97706          /* Warnings, caution */
--error: #dc2626            /* Errors, destructive actions */
```

**Usage**: Form validation, status indicators, alerts

### Neutral Colors
```css
/* Light Mode */
--background: #ffffff
--background-secondary: #f8fafc
--background-tertiary: #f1f5f9
--foreground: #0f172a
--foreground-secondary: #334155
--border: #e2e8f0

/* Dark Mode */
--background: #0f172a
--background-secondary: #1e293b
--background-tertiary: #334155
--foreground: #f8fafc
--foreground-secondary: #e2e8f0
--border: #334155
```

### Color Usage Guidelines

#### ✅ Do:
- Use teal for primary actions and brand elements
- Use amber for secondary emphasis and warmth
- Maintain warm color temperature throughout
- Ensure 4.5:1 contrast ratio minimum for text

#### ❌ Don't:
- Mix cool blues with warm teal/amber palette
- Use primary color for destructive actions
- Reduce contrast below WCAG AA standards
- Use color alone to convey information

---

## 📐 Spacing & Layout

### Spacing Scale
```css
4px   = 0.25rem  /* Tight spacing */
8px   = 0.5rem   /* Default gap */
12px  = 0.75rem  /* Comfortable spacing */
16px  = 1rem     /* Standard spacing */
24px  = 1.5rem   /* Section spacing */
32px  = 2rem     /* Large spacing */
48px  = 3rem     /* Extra large spacing */
64px  = 4rem     /* Section padding (mobile) */
96px  = 6rem     /* Section padding (tablet) */
128px = 8rem     /* Section padding (desktop) */
```

### Container System
```css
.container           /* Max-width with auto margin */
.container-narrow    /* 768px max-width */
.container-wide      /* 1400px max-width */
.max-w-7xl          /* 1280px (standard content) */
```

### Responsive Breakpoints
```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablets */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Ultra-wide */
```

---

## ✍️ Typography

### Font Families
- **Sans**: Geist Sans (primary) → System fallback
- **Mono**: Geist Mono (code) → Monospace fallback

### Type Scale
```css
text-xs:   12px / 1.5    /* Fine print */
text-sm:   14px / 1.5    /* Small text */
text-base: 16px / 1.6    /* Body text */
text-lg:   18px / 1.6    /* Large body */
text-xl:   20px / 1.5    /* Subheadings */
text-2xl:  24px / 1.4    /* H4 */
text-3xl:  30px / 1.3    /* H3 */
text-4xl:  36px / 1.2    /* H2 */
text-5xl:  48px / 1.1    /* H1 */
text-6xl:  60px / 1.0    /* Hero */
```

### Font Weights
```css
font-light:     300   /* Rarely used */
font-normal:    400   /* Body text */
font-medium:    500   /* Emphasis */
font-semibold:  600   /* Subheadings */
font-bold:      700   /* Headings */
```

### Typography Guidelines

#### Headings
- **H1**: 48-60px, bold, tight line-height, reserved for page/section heroes
- **H2**: 36-48px, bold, section titles
- **H3**: 30-36px, bold, subsection titles
- **H4**: 24-30px, semibold, card/component titles

#### Body Text
- **Base size**: 16px (prevents iOS zoom on inputs)
- **Line height**: 1.6 for readability (1.5 for large text)
- **Paragraph spacing**: 1em margin-bottom
- **Max width**: 65-75 characters for optimal reading

#### Responsive Typography
Use `clamp()` for fluid scaling:
```css
.text-responsive-4xl: clamp(2.25rem, 6vw, 3rem)
```

---

## 🃏 Components

### Card System

#### Base Card Structure
```tsx
<Card 
  variant="elevated"  // default | elevated | bordered | glass
  padding="lg"        // none | sm | md | lg | xl
  hoverable={true}    // Adds hover effects
>
  <CardHeader 
    title="Card Title"
    subtitle="Optional subtitle"
    action={<Button />}
  />
  <CardContent>
    Main content goes here
  </CardContent>
  <CardFooter>
    Actions or metadata
  </CardFooter>
</Card>
```

#### Card Specifications
- **Border radius**: 1.5rem (rounded-2xl) - STANDARD for all cards
- **Border**: 1px solid var(--border) with 50% opacity
- **Shadow**: `shadow-soft` → `shadow-large` on hover
- **Padding**: 
  - Mobile: 1.5rem (p-6)
  - Desktop: 2rem (p-8)
- **Hover transform**: `translateY(-4px)`
- **Hover border**: `border-primary/20` (20% opacity)

#### Card Variants
1. **Default**: Background with border
2. **Elevated**: Default + soft shadow
3. **Bordered**: Default + 2px border
4. **Glass**: Semi-transparent with backdrop blur

### Button System

#### Primary Button
```tsx
<PrimaryButton href="/contact">
  Contact Us
</PrimaryButton>
```

**Specifications**:
- Background: `var(--primary)`
- Text: White
- Border: 2px solid primary
- Hover: Darker primary + scale(1.05) + glow shadow
- Min height: 48px (mobile), 44px (desktop)
- Padding: 0.75rem 1.5rem
- Border radius: 0.75rem (rounded-xl)

#### Secondary Button
```tsx
<SecondaryButton href="/services">
  Learn More
</SecondaryButton>
```

**Specifications**:
- Background: Transparent
- Text: Primary color
- Border: 2px solid primary
- Hover: Primary background + white text
- Same sizing as primary button

#### Button States
- **Default**: Base styles
- **Hover**: Transform + shadow + color change
- **Focus**: 2px ring with primary color + offset
- **Active**: Slightly darker, no transform
- **Disabled**: 50% opacity, no hover effects

### Icon System

#### Icon Specifications
- **Small**: 16-20px (w-4 h-4, w-5 h-5)
- **Medium**: 24-32px (w-6 h-6, w-8 h-8)
- **Large**: 48-64px (w-12 h-12, w-16 h-16)
- **Color**: `text-primary` with `group-hover:text-primary-hover`
- **Container**: Gradient background with rounded-2xl

#### Icon Container Pattern
```tsx
<div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl">
  <Icon className="w-12 h-12 text-primary" />
</div>
```

### Section Badge

```tsx
<SectionBadge color="primary" icon={true}>
  Our Services
</SectionBadge>
```

**Specifications**:
- Inline-flex with rounded-full (pill shape)
- Padding: 0.5rem 1rem
- Background: `{color}/10` with `{color}/20` border
- Text: Primary/secondary color
- Optional dot indicator (w-2 h-2 rounded-full)
- Animation: fade-in on load

---

## 🎭 Animations

### Animation Timing
```css
/* Standard durations */
duration-200: 200ms   /* Quick transitions */
duration-300: 300ms   /* Default transitions */
duration-500: 500ms   /* Complex animations */
duration-700: 700ms   /* Major state changes */
duration-1000: 1000ms /* Background transitions */
```

### Easing Functions
```css
ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1)  /* Standard */
ease-out:     cubic-bezier(0, 0, 0.2, 1)    /* Enter */
ease-in:      cubic-bezier(0.4, 0, 1, 1)    /* Exit */
```

### Animation Classes

#### Fade In
```css
.animate-fade-in
/* Duration: 600ms, Opacity: 0 → 1 */
```

#### Slide Up
```css
.animate-slide-up
/* Duration: 600ms, Y: 20px → 0, Opacity: 0 → 1 */
```

#### Scale In
```css
.animate-scale-in
/* Duration: 400ms, Scale: 0.95 → 1, Opacity: 0 → 1 */
```

### Staggered Animations
For lists and grids, use animation delays:

```tsx
{items.map((item, index) => (
  <div 
    key={index}
    className={`animate-slide-up animation-delay-${200 + index * 100}`}
  >
    {item}
  </div>
))}
```

**Available delays**: 200ms, 400ms, 600ms, 700ms, 800ms, 900ms, 1000ms, 1100ms, 1200ms

### Hover Animations
Standard hover pattern:
```css
.card {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-large);
  border-color: var(--primary);
}
```

### Reduced Motion
All animations respect user preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🌑 Dark Mode

### Implementation
Dark mode uses the `.dark` class on the root element:

```tsx
<html className={darkMode ? 'dark' : ''}>
```

### Color Adjustments
- Background colors invert (light → dark)
- Foreground colors invert (dark → light)
- Primary teal becomes lighter (#54d1bd)
- Borders become lighter and more visible
- Shadows become darker and stronger

### Dark Mode Card Styling
```css
.dark .card {
  background-color: #1e293b;           /* Secondary background */
  border: 2px solid #475569;           /* Lighter border */
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.dark .card:hover {
  background-color: #334155;           /* Tertiary background */
  border-color: #64748b;               /* Even lighter border */
}
```

### Testing Dark Mode
Always test both themes for:
- Sufficient contrast (4.5:1 minimum)
- Readable text on all backgrounds
- Visible borders and dividers
- Appropriate shadow depth

---

## ♿ Accessibility

### Focus Indicators
All interactive elements must have visible focus states:

```css
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
}
```

### Touch Targets
Minimum sizes for interactive elements:
- **Mobile**: 48px × 48px
- **Desktop**: 44px × 44px
- **Senior-friendly**: 52px × 52px

### Color Contrast
- **Normal text**: 4.5:1 minimum
- **Large text (18px+)**: 3:1 minimum
- **UI components**: 3:1 minimum
- **High contrast mode**: 7:1+ preferred

### Accessibility Features
- ✅ Keyboard navigation support
- ✅ Screen reader optimization
- ✅ Skip to content links
- ✅ ARIA labels and roles
- ✅ Semantic HTML structure
- ✅ High contrast mode
- ✅ Large text mode
- ✅ Reduced motion support

### Accessibility Classes
```css
.sr-only              /* Screen reader only */
.high-contrast        /* High contrast mode */
.large-text          /* 120% text size */
.reduced-motion      /* No animations */
.enhanced-focus      /* Enhanced focus indicators */
```

---

## 📱 Responsive Design

### Mobile-First Approach
All styles are written mobile-first, with larger breakpoints adding complexity:

```css
/* Mobile (default) */
.card { padding: 1.5rem; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .card { padding: 2rem; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .card { padding: 2.5rem; }
}
```

### Responsive Grid Pattern
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
  {/* Cards */}
</div>
```

**Grid Specifications**:
- Mobile: 1 column, 1.5rem gap
- Tablet: 2 columns, 1.5rem gap
- Desktop: 3 columns, 2rem gap
- Large: 4 columns, 2rem gap

### Image Optimization
All images must be optimized:
- **Formats**: AVIF (primary), WebP (fallback), PNG (source)
- **Sizes**: Multiple widths (32w, 48w, 64w, 96w, full)
- **Lazy loading**: Default for below-fold images
- **Aspect ratio**: Defined to prevent layout shift

---

## 🎯 Best Practices

### Component Development
1. **Use TypeScript**: All components must have proper types
2. **Export interfaces**: Make props reusable and documented
3. **Use CSS variables**: Never hardcode colors
4. **Maintain consistency**: Follow established patterns
5. **Document variants**: List all available options

### Code Organization
```
component/
├── Component.tsx       # Main component
├── Component.test.tsx  # Unit tests
├── types.ts           # Type definitions
└── README.md          # Component docs
```

### Naming Conventions
- **Components**: PascalCase (e.g., `ServiceCard`)
- **Files**: PascalCase for components, kebab-case for utilities
- **CSS classes**: kebab-case (e.g., `service-card`)
- **CSS variables**: kebab-case with namespace (e.g., `--primary-hover`)

### Performance Guidelines
- **Minimize animations**: Only animate transform and opacity
- **Use CSS variables**: Reduce CSS bundle size
- **Lazy load images**: Improve initial page load
- **Optimize fonts**: Use subset fonts and proper loading strategy

---

## 📋 Checklist for New Components

Before adding a component to the design system:

- [ ] TypeScript interfaces defined
- [ ] Responsive across all breakpoints
- [ ] Dark mode styles implemented
- [ ] Focus states for interactive elements
- [ ] 48px minimum touch targets on mobile
- [ ] ARIA labels and semantic HTML
- [ ] Animations respect reduced motion
- [ ] Color contrast meets WCAG AA
- [ ] Documentation in component file
- [ ] Consistent with existing patterns

---

## 🔄 Design System Updates

### Version History
- **v1.0.0** (Oct 2024): Initial design system documentation
  - Established teal/amber color palette
  - Defined card and button specifications
  - Created animation system
  - Documented accessibility features

### Making Changes
When updating the design system:

1. **Document first**: Update this file before implementing
2. **Get approval**: Discuss major changes with team
3. **Update incrementally**: Change one pattern at a time
4. **Test thoroughly**: All breakpoints, themes, and accessibility
5. **Communicate**: Announce changes to development team

### Requesting Features
To request new patterns or components:
1. Create an issue describing the use case
2. Reference existing similar patterns
3. Include mockups or examples
4. Discuss with maintainers

---

## 📚 Resources

### Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WAVE Accessibility Checker](https://wave.webaim.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)

### Reference Materials
- `/website/tailwind.config.js` - Tailwind configuration
- `/website/src/app/globals.css` - Global styles and CSS variables
- `/website/src/components/ui/` - Reusable UI components
- `/website/modern-design-improvements.md` - Design improvement history

---

## 💬 Questions?

For questions about the design system:
- Review this documentation first
- Check component files for inline documentation
- Review existing implementations for patterns
- Ask in team discussions for clarification

**Remember**: Consistency is key. When in doubt, follow existing patterns.
