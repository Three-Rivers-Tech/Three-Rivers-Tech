# Visual Standards & Consistency Guide

This document ensures visual consistency across all pages and components of the Three Rivers Tech website.

## 🎯 Quick Reference

### Card Standards
| Property | Value | Note |
|----------|-------|------|
| Border Radius | `rounded-2xl` (1.5rem) | All cards |
| Border | `1px solid var(--border)` | 50% opacity |
| Padding (Mobile) | `p-6` (1.5rem) | Minimum |
| Padding (Desktop) | `p-8` (2rem) | Standard |
| Shadow (Default) | `shadow-soft` | Subtle |
| Shadow (Hover) | `shadow-large` | Elevated |
| Hover Transform | `translateY(-4px)` | Lift effect |
| Hover Border | `border-primary/20` | 20% opacity |
| Transition | `300ms cubic-bezier(0.4, 0, 0.2, 1)` | All changes |

### Button Standards
| Property | Value | Note |
|----------|-------|------|
| Border Radius | `rounded-xl` (0.75rem) | All buttons |
| Min Height | `48px` (mobile), `44px` (desktop) | Accessibility |
| Padding | `0.75rem 1.5rem` | Horizontal/vertical |
| Font Weight | `600` (semibold) | Readable |
| Hover Scale | `scale(1.05)` | Subtle |
| Hover Transform | `translateY(-1px)` | Lift |
| Focus Ring | `2px solid primary` | Visible |
| Focus Offset | `2px` | Clear separation |

### Animation Standards
| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Quick | 200ms | ease-out | Micro-interactions |
| Standard | 300ms | cubic-bezier(0.4, 0, 0.2, 1) | Buttons, cards |
| Complex | 500ms | cubic-bezier(0.4, 0, 0.2, 1) | Overlays, transitions |
| Hero | 700ms | ease-in-out | Large elements |
| Background | 1000ms | ease-in-out | Color shifts |

---

## 🖼️ Component Patterns

### Hero Section
```tsx
<section className="relative overflow-hidden">
  {/* Background gradient - warm teal/emerald */}
  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-700" />
  
  {/* Animated elements */}
  <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
  
  {/* Content */}
  <div className="container mx-auto px-4 py-20 relative z-10">
    {/* Location badge */}
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/40">
      📍 124 Grant Street, Turtle Creek, PA 15145
    </div>
    
    <h1 className="text-5xl font-bold text-white mb-6">
      Your Hometown Tech Partner
    </h1>
    
    <div className="flex gap-4">
      <PrimaryButton href="tel:+14124035559">Call Now</PrimaryButton>
      <SecondaryButton href="/contact">Book Visit</SecondaryButton>
    </div>
  </div>
</section>
```

**Hero Standards**:
- Background: Warm gradient (teal to emerald/green)
- Animated elements: 2-3 blur circles with pulse
- Location badge: Always visible, white/20 background
- Typography: Large (48-60px), bold, white text
- CTAs: Two buttons (primary + secondary)
- Padding: 80px+ vertical for breathing room

### Service Card
```tsx
<article className="group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 hover:border-primary/20">
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
  
  {/* Glow effect */}
  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
  
  <div className="relative p-8">
    {/* Icon container */}
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-16 h-16 text-primary group-hover:text-primary-hover" />
    </div>
    
    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary">
      Service Title
    </h3>
    
    <p className="text-foreground-secondary mb-6">
      Service description with clear, benefit-focused copy.
    </p>
    
    <a href="/contact" className="inline-flex items-center text-primary font-semibold">
      Explore Solutions
      <ArrowIcon className="ml-2" />
    </a>
  </div>
</article>
```

**Service Card Standards**:
- Always use `<article>` for semantic HTML
- Include both gradient overlay and glow effect
- Icon: 64px (w-16 h-16) with gradient background
- Title: text-2xl, bold, hover color shift to primary
- Description: text-foreground-secondary
- CTA: Inline link with arrow icon, semibold

### Feature Card (Why Choose Us)
```tsx
<div className="group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 hover:border-primary/20 p-8">
  {/* Same overlay/glow as service card */}
  
  <div className="relative">
    {/* Icon with gradient background */}
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    
    <h3 className="text-xl font-bold mb-4 group-hover:text-primary">
      Feature Title
    </h3>
    
    <p className="text-foreground-secondary">
      Feature description explaining the benefit.
    </p>
  </div>
</div>
```

**Feature Card Standards**:
- Smaller icon than service cards (32px vs 64px)
- Title: text-xl (vs text-2xl for services)
- No CTA link (informational only)
- Same hover effects as service cards
- Grid: 2 columns mobile, 4 columns desktop

### Section Header
```tsx
<header className="text-center mb-16 sm:mb-20 lg:mb-24">
  {/* Section badge */}
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
    Section Category
  </div>
  
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
    Section Title
  </h2>
  
  <p className="text-xl sm:text-2xl text-foreground-secondary max-w-4xl mx-auto animate-slide-up animation-delay-200">
    Section description providing context and value proposition.
  </p>
</header>
```

**Section Header Standards**:
- Badge: Always includes dot indicator + category text
- Title: Scales from 36px (mobile) to 60px (desktop)
- Description: text-xl to text-2xl, max-width 4xl
- Spacing: 64px bottom mobile, 80-96px desktop
- Animations: Staggered (badge → title → description)

---

## 🎨 Color Usage Patterns

### When to Use Primary (Teal)
✅ **Do use for**:
- Primary action buttons
- Navigation links (hover/active)
- Focus indicators
- Card hover borders
- Icon colors
- Link text
- Section badges
- Brand elements

❌ **Don't use for**:
- Error states (use red)
- Warning states (use amber semantic color)
- Body text (use foreground colors)
- Decorative backgrounds (use gradients)

### When to Use Secondary (Amber)
✅ **Do use for**:
- Secondary action buttons
- Accent highlights
- Section badge variations
- Energy/warmth indicators
- Special promotions
- Complementary elements

❌ **Don't use for**:
- Primary CTAs
- Focus indicators
- Navigation elements
- Success states

### Gradient Usage
Always use warm gradients that match brand:

```css
/* Hero sections - strong presence */
.hero-gradient {
  background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
  /* or */
  background: linear-gradient(135deg, #0f766e 0%, #047857 100%);
}

/* Section backgrounds - subtle */
.section-gradient {
  background: linear-gradient(180deg, var(--background) 0%, var(--background-secondary) 100%);
}

/* Card overlays - very subtle */
.card-gradient {
  background: linear-gradient(135deg, rgba(13,148,136,0.05) 0%, rgba(217,119,6,0.05) 100%);
}
```

**Gradient Guidelines**:
- Hero: Strong teal → emerald/green (warm)
- Sections: Background → secondary background
- Cards: Primary/5 → secondary/5 (very subtle)
- Never use: Cool blue gradients, harsh transitions

---

## 📐 Spacing Consistency

### Section Padding
```css
/* Mobile */
.section-padding { padding: 4rem 0; }  /* 64px */

/* Tablet */
@media (min-width: 768px) {
  .section-padding { padding: 6rem 0; }  /* 96px */
}

/* Desktop */
@media (min-width: 1024px) {
  .section-padding { padding: 8rem 0; }  /* 128px */
}
```

### Component Spacing
| Element | Mobile | Desktop | Rationale |
|---------|--------|---------|-----------|
| Card padding | 1.5rem | 2rem | Comfortable reading |
| Card gap | 1.5rem | 2rem | Clear separation |
| Section margin | 1rem | 1.5rem | Visual grouping |
| Heading margin | 1.5rem | 2rem | Hierarchy |
| Paragraph margin | 1rem | 1rem | Reading flow |

### Grid Gaps
```tsx
{/* Consistent across all grids */}
<div className="grid gap-6 lg:gap-8">
  {/* Mobile: 24px, Desktop: 32px */}
</div>
```

---

## 🔤 Typography Patterns

### Page Titles (H1)
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
  Your Hometown Tech Partner
</h1>
```
- Size: 36px → 48px → 60px
- Weight: Bold (700)
- Margin: 1.5rem bottom
- Color: Foreground (high contrast)

### Section Titles (H2)
```tsx
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
  Why Choose Three Rivers Tech
</h2>
```
- Size: 30px → 36px → 48px → 60px
- Weight: Bold (700)
- Margin: 1.5rem bottom
- Color: Foreground

### Card Titles (H3)
```tsx
<h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground group-hover:text-primary">
  Service Title
</h3>
```
- Size: 20px → 24px
- Weight: Bold (700)
- Margin: 1rem bottom
- Color: Foreground → Primary on hover

### Body Text
```tsx
<p className="text-base sm:text-lg text-foreground-secondary leading-relaxed">
  Clear, benefit-focused copy explaining value to customers.
</p>
```
- Size: 16px → 18px
- Weight: Normal (400) or Medium (500)
- Line height: 1.6 (relaxed)
- Color: Foreground-secondary

---

## 🌓 Dark Mode Consistency

### Card Appearance
```tsx
{/* Light mode */}
<div className="bg-background border border-border/50">

{/* Dark mode - automatically applied with .dark class */}
<div className="dark:bg-background-secondary dark:border-border">
```

**Dark Mode Standards**:
- Cards use `background-secondary` not `background`
- Borders are more visible: `border-border` (no opacity)
- Text maintains contrast: Test all combinations
- Shadows are stronger: Darker and more defined

### Testing Checklist
For every component, verify:
- [ ] Text is readable on both backgrounds
- [ ] Borders are visible in both modes
- [ ] Hover states work in both modes
- [ ] Focus indicators are visible
- [ ] Icons maintain proper contrast
- [ ] Gradients work in both themes

---

## ♿ Accessibility Patterns

### Interactive Elements
Every clickable element must:
```tsx
<a 
  href="/contact"
  className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
  aria-label="Contact Three Rivers Tech"
>
  Contact Us
</a>
```

**Required**:
- `focus:ring-2` - 2px focus ring
- `focus:ring-primary` - Primary color
- `focus:ring-offset-2` - 2px separation
- `rounded-lg` - Match element shape
- `aria-label` - Descriptive label

### Touch Targets
```tsx
{/* Mobile - 48px minimum */}
<button className="min-h-[48px] px-6 py-3">

{/* Desktop - 44px minimum */}
<button className="min-h-[44px] lg:min-h-[44px] px-6 py-3">
```

### Color Contrast
Test every text/background combination:
- Body text on background: 4.5:1 minimum
- Headings: 4.5:1 minimum (3:1 if 18px+ bold)
- Links: 4.5:1 minimum + underline or other indicator
- Buttons: 4.5:1 for text, 3:1 for borders

---

## 📋 Pre-Launch Checklist

Before deploying any page or component:

### Visual Consistency
- [ ] Cards use `rounded-2xl` (1.5rem radius)
- [ ] Buttons use `rounded-xl` (0.75rem radius)
- [ ] Spacing follows established patterns
- [ ] Colors match design system palette
- [ ] Gradients are warm (teal/emerald/amber)
- [ ] Typography scales properly
- [ ] Animations use standard timing

### Responsive Design
- [ ] Tested on mobile (375px - 768px)
- [ ] Tested on tablet (768px - 1024px)
- [ ] Tested on desktop (1024px - 1920px)
- [ ] Text is readable at all sizes
- [ ] Touch targets meet minimum sizes
- [ ] No horizontal scroll at any size

### Accessibility
- [ ] All images have alt text
- [ ] Links have descriptive text
- [ ] Buttons have visible focus states
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Screen reader tested

### Dark Mode
- [ ] All text is readable
- [ ] Borders are visible
- [ ] Cards use secondary background
- [ ] Hover states work correctly
- [ ] Focus indicators are visible

### Performance
- [ ] Images are optimized (AVIF/WebP)
- [ ] Animations respect reduced motion
- [ ] No layout shift on load
- [ ] Lazy loading for below-fold images

---

## 🔧 Common Issues & Fixes

### Issue: Cards look different across pages
**Fix**: All cards should use this exact structure:
```tsx
<div className="group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 hover:border-primary/20 p-6 sm:p-8">
```

### Issue: Inconsistent button sizing
**Fix**: Always use these classes:
```tsx
className="min-h-[48px] px-6 py-3 rounded-xl"
```

### Issue: Animations feel jerky
**Fix**: Only animate `transform` and `opacity`:
```css
transition: transform 300ms, opacity 300ms, box-shadow 300ms;
```

### Issue: Dark mode text is hard to read
**Fix**: Use semantic color variables:
```tsx
<p className="text-foreground-secondary">
{/* NOT: text-gray-600 */}
```

### Issue: Focus states are barely visible
**Fix**: Always include ring and offset:
```tsx
className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
```

---

## 📚 Examples Repository

Find complete examples in:
- `/website/src/app/components/ServiceCard.tsx` - Service card pattern
- `/website/src/app/components/WhyChooseUs.tsx` - Feature card pattern
- `/website/src/app/components/EnhancedHero.tsx` - Hero section pattern
- `/website/src/components/ui/Button.tsx` - Button variants
- `/website/src/components/ui/Card.tsx` - Card component system

---

## 🎯 Summary

The key to visual consistency:

1. **Use the design system** - Don't create one-off styles
2. **Follow card standards** - rounded-2xl, consistent padding, standard hover
3. **Maintain color temperature** - Warm teal/amber throughout
4. **Test both themes** - Light and dark mode equally important
5. **Prioritize accessibility** - Focus states, contrast, touch targets

**When in doubt, reference existing components rather than creating new patterns.**
