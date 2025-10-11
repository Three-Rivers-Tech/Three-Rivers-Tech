# Component Library Reference

Quick reference guide for all reusable UI components in the Three Rivers Tech design system.

## 🎯 Quick Links

- [Button Components](#button-components)
- [Card Components](#card-components)
- [Navigation Components](#navigation-components)
- [Layout Components](#layout-components)
- [Form Components](#form-components)
- [Feedback Components](#feedback-components)

---

## Button Components

### PrimaryButton

Primary call-to-action button with teal background.

```tsx
import { PrimaryButton } from '@/components/ui';

<PrimaryButton href="/contact">
  Contact Us
</PrimaryButton>

<PrimaryButton onClick={handleClick}>
  Submit Form
</PrimaryButton>
```

**Props**:
- `href?: string` - Link destination (renders as Link)
- `onClick?: () => void` - Click handler (renders as button)
- `children: ReactNode` - Button text/content
- `className?: string` - Additional classes
- `disabled?: boolean` - Disabled state
- `loading?: boolean` - Shows loading spinner

**Specifications**:
- Background: `var(--primary)` (#0d9488)
- Text: White
- Min height: 48px
- Border radius: 0.75rem (rounded-xl)
- Hover: Scale 1.05, lift 1px, glow shadow

### SecondaryButton

Secondary action button with transparent background and border.

```tsx
import { SecondaryButton } from '@/components/ui';

<SecondaryButton href="/services">
  Learn More
</SecondaryButton>
```

**Props**: Same as PrimaryButton

**Specifications**:
- Background: Transparent
- Text: Primary color
- Border: 2px solid primary
- Hover: Primary background, white text

### Button (Generic)

Flexible button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg">
  Large Primary
</Button>

<Button variant="outline" size="md" icon={<Icon />}>
  With Icon
</Button>

<Button variant="ghost" loading={true}>
  Loading...
</Button>
```

**Props**:
- `variant?: 'primary' | 'secondary' | 'outline' | 'ghost'`
- `size?: 'sm' | 'md' | 'lg'`
- `icon?: ReactNode` - Icon before text
- `iconAfter?: ReactNode` - Icon after text
- `loading?: boolean` - Shows spinner
- All standard button/link props

**Variants**:
1. **Primary**: Teal background, white text
2. **Secondary**: Amber background, white text
3. **Outline**: Transparent with primary border
4. **Ghost**: Transparent, minimal styling

**Sizes**:
- **sm**: 36px min-height, text-sm
- **md**: 48px min-height, text-base (default)
- **lg**: 52px min-height, text-lg

---

## Card Components

### Card

Standardized container component with consistent styling.

```tsx
import { Card } from '@/components/ui';

<Card variant="elevated" padding="lg" hoverable>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Props**:
- `variant?: 'default' | 'elevated' | 'bordered' | 'glass'`
- `padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'`
- `hoverable?: boolean` - Adds hover effects
- `clickable?: boolean` - Makes card interactive
- `onClick?: () => void` - Click handler
- `className?: string` - Additional classes

**Specifications**:
- Border radius: 1.5rem (rounded-2xl) - ALWAYS
- Default padding: p-6 mobile, p-8 desktop
- Border: 1px solid var(--border) at 50% opacity
- Hover lift: 4px (translateY(-4px))
- Hover shadow: shadow-large
- Transition: 300ms cubic-bezier(0.4, 0, 0.2, 1)

**Variants**:
1. **Default**: Basic card with border
2. **Elevated**: Default + soft shadow (most common)
3. **Bordered**: 2px border for emphasis
4. **Glass**: Semi-transparent with backdrop blur

### CardHeader

Consistent header for cards with title, subtitle, and optional action.

```tsx
import { Card, CardHeader } from '@/components/ui';

<Card>
  <CardHeader 
    title="Card Title"
    subtitle="Optional subtitle"
    action={<Button size="sm">Action</Button>}
  />
</Card>
```

**Props**:
- `title: string` - Card title (required)
- `subtitle?: string` - Optional subtitle
- `action?: ReactNode` - Action element (button, link, etc.)
- `className?: string` - Additional classes

### CardContent

Content wrapper with consistent spacing.

```tsx
import { Card, CardContent } from '@/components/ui';

<Card>
  <CardContent>
    <p>Main content with proper spacing and typography.</p>
  </CardContent>
</Card>
```

### CardFooter

Footer section with border separator.

```tsx
import { Card, CardFooter } from '@/components/ui';

<Card>
  <CardContent>Main content</CardContent>
  <CardFooter>
    <Button>Save</Button>
    <Button variant="ghost">Cancel</Button>
  </CardFooter>
</Card>
```

### Complete Card Example

```tsx
<Card variant="elevated" padding="lg" hoverable>
  <CardHeader 
    title="Service Title"
    subtitle="Professional tech support"
    action={<Badge>New</Badge>}
  />
  <CardContent>
    <p>Complete service description with benefits.</p>
    <ul>
      <li>Feature one</li>
      <li>Feature two</li>
    </ul>
  </CardContent>
  <CardFooter>
    <PrimaryButton href="/contact">Get Started</PrimaryButton>
    <SecondaryButton href="/services">Learn More</SecondaryButton>
  </CardFooter>
</Card>
```

---

## Navigation Components

### NavLink

Navigation link with consistent hover states.

```tsx
import { NavLink } from '@/components/ui';

<NavLink href="/services">
  Services
</NavLink>

<NavLink href="/about" active={true}>
  About
</NavLink>
```

**Props**:
- `href: string` - Link destination
- `children: ReactNode` - Link text
- `active?: boolean` - Active state
- `className?: string` - Additional classes

**Specifications**:
- Text: Foreground color
- Hover: Primary color
- Active: Primary color, bolder
- Focus: Ring with primary color
- Padding: 0.5rem 1rem
- No underline decoration

### MobileNavigation

Mobile hamburger menu component (auto-imported in Header).

```tsx
import MobileNavigation from '@/components/MobileNavigation';

<MobileNavigation />
```

**Features**:
- Hamburger icon button
- Slide-in menu
- Accessible keyboard navigation
- Responsive (hidden on desktop)

---

## Layout Components

### SectionBadge

Small badge for section categories.

```tsx
import { SectionBadge } from '@/components/ui';

<SectionBadge color="primary" icon={true}>
  Our Services
</SectionBadge>

<SectionBadge color="secondary">
  Why Choose Us
</SectionBadge>
```

**Props**:
- `children: ReactNode` - Badge text
- `color?: 'primary' | 'secondary'` - Color variant
- `icon?: boolean` - Shows dot indicator
- `className?: string` - Additional classes

**Specifications**:
- Shape: Pill (rounded-full)
- Padding: 0.5rem 1rem
- Background: {color}/10
- Border: 1px solid {color}/20
- Text: Primary or secondary color
- Icon: 2px dot, same color as text

### Container Utilities

```tsx
{/* Standard content container */}
<div className="container mx-auto px-4 sm:px-6 max-w-7xl">
  Content
</div>

{/* Narrow container for text-heavy content */}
<div className="container-narrow">
  Long-form content
</div>

{/* Wide container for full-width sections */}
<div className="container-wide">
  Wide content
</div>
```

### Section Padding

```tsx
{/* Standard section spacing */}
<section className="section-padding">
  {/* 64px mobile, 96px tablet, 128px desktop */}
  Section content
</section>

{/* With background gradient */}
<section className="section-padding bg-gradient-to-b from-background to-background-secondary">
  Section with gradient
</section>
```

---

## Form Components

### Input (Coming Soon)

Standard text input with validation states.

```tsx
<Input 
  type="text"
  label="Full Name"
  placeholder="John Smith"
  error="Name is required"
/>
```

### Textarea (Coming Soon)

Multi-line text input.

```tsx
<Textarea 
  label="Message"
  rows={4}
  placeholder="Tell us about your project..."
/>
```

### Select (Coming Soon)

Dropdown select component.

```tsx
<Select 
  label="Service Type"
  options={serviceOptions}
  placeholder="Choose a service..."
/>
```

---

## Feedback Components

### Toast Notification (Coming Soon)

Temporary notification message.

```tsx
import { toast } from '@/components/ui';

// Success
toast.success('Message sent successfully!');

// Error
toast.error('Failed to send message');

// Info
toast.info('Check your email for confirmation');
```

### Loading Spinner (Coming Soon)

Loading indicator.

```tsx
import { Spinner } from '@/components/ui';

<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

### Progress Bar (Coming Soon)

Progress indicator.

```tsx
import { ProgressBar } from '@/components/ui';

<ProgressBar value={75} max={100} />
```

---

## Icon Components

### Usage Pattern

All icons should follow this pattern:

```tsx
<div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
  <Icon className="w-16 h-16 text-primary group-hover:text-primary-hover transition-colors duration-300" />
</div>
```

**Standard sizes**:
- Small: w-4 h-4 (16px) - inline icons
- Medium: w-8 h-8 (32px) - feature cards
- Large: w-16 h-16 (64px) - service cards
- Extra large: w-24 h-24 (96px) - hero sections

### Custom Icons

Located in `/src/app/components/icons/`:
- `HomeTechSupportIcon`
- `SmallBusinessIcon`
- `CommunityEducationIcon`
- `WebsiteDesignIcon`

```tsx
import HomeTechSupportIcon from '@/app/components/icons/HomeTechSupportIcon';

<HomeTechSupportIcon className="w-16 h-16 text-primary" />
```

---

## Utility Classes Reference

### Spacing
```css
.section-padding        /* 64/96/128px vertical */
.container             /* Max-width with padding */
.container-narrow      /* 768px max */
.container-wide        /* 1400px max */
```

### Typography
```css
.text-responsive-4xl   /* Fluid scaling */
.text-gradient         /* Primary gradient text */
```

### Effects
```css
.glass                 /* Glass morphism */
.gradient-primary      /* Teal to amber */
.shadow-soft          /* Subtle shadow */
.shadow-large         /* Elevated shadow */
.shadow-glow          /* Primary glow */
```

### Animations
```css
.animate-fade-in      /* Fade in 600ms */
.animate-slide-up     /* Slide up 600ms */
.animate-scale-in     /* Scale in 400ms */
.animate-float        /* Float infinite */
.animation-delay-200  /* 200ms delay */
```

---

## Component Patterns

### Service Card Pattern

```tsx
<article className="group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 hover:border-primary/20 p-8">
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
  
  {/* Glow effect */}
  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
  
  <div className="relative">
    {/* Icon */}
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-16 h-16 text-primary group-hover:text-primary-hover" />
    </div>
    
    {/* Content */}
    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
      Service Title
    </h3>
    <p className="text-foreground-secondary mb-6">
      Service description
    </p>
    
    {/* CTA */}
    <a href="/contact" className="inline-flex items-center text-primary font-semibold group-hover:text-primary-hover">
      Explore Solutions
      <ArrowIcon className="ml-2" />
    </a>
  </div>
</article>
```

### Feature Card Pattern

```tsx
<div className="group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 hover:border-primary/20 p-8">
  {/* Same overlays as service card */}
  
  <div className="relative">
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl inline-block mb-6">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    
    <h3 className="text-xl font-bold mb-4">Feature Title</h3>
    <p className="text-foreground-secondary">Feature description</p>
  </div>
</div>
```

### Stats Card Pattern

```tsx
<div className="group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large p-8 text-center transition-all duration-500 border border-border/50 hover:border-primary/20">
  <div className="text-4xl mb-4">{emoji}</div>
  <div className="text-5xl font-bold text-primary mb-2">{value}</div>
  <div className="text-lg text-foreground-secondary">{label}</div>
</div>
```

---

## Best Practices

### Component Usage
1. **Import from UI barrel**: `import { Button, Card } from '@/components/ui'`
2. **Use TypeScript**: Leverage prop types for better DX
3. **Consistent variants**: Stick to design system variants
4. **Accessibility first**: Always include aria-labels
5. **Dark mode**: Test all components in both themes

### Styling
1. **No inline styles**: Use Tailwind classes or CSS modules
2. **Semantic classes**: Use design system utility classes
3. **Consistent spacing**: Follow spacing scale
4. **Standard border radius**: rounded-2xl for cards, rounded-xl for buttons
5. **Color variables**: Use CSS variables, not hardcoded colors

### Performance
1. **Lazy load**: Use dynamic imports for heavy components
2. **Memoization**: Memo expensive components
3. **Optimistic UI**: Show immediate feedback
4. **Code splitting**: Keep bundles small

---

## Creating New Components

### Checklist
- [ ] TypeScript interfaces defined and exported
- [ ] All variants implemented and documented
- [ ] Dark mode styles included
- [ ] Accessibility attributes (aria-labels, roles)
- [ ] Focus states with visible indicators
- [ ] Hover/active states with smooth transitions
- [ ] Responsive across all breakpoints
- [ ] 48px minimum touch targets
- [ ] Respects reduced motion preference
- [ ] Added to this component library doc

### Template
```tsx
export interface ComponentNameProps {
  /**
   * Description of prop
   */
  propName?: string;
  
  /**
   * Children content
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * ComponentName - Brief description
 * 
 * Detailed description of component purpose and usage.
 * 
 * @example
 * ```tsx
 * <ComponentName propName="value">
 *   Content
 * </ComponentName>
 * ```
 */
export default function ComponentName({
  propName,
  children,
  className = '',
  ...props
}: ComponentNameProps) {
  return (
    <div className={`base-classes ${className}`} {...props}>
      {children}
    </div>
  );
}
```

---

## Questions?

For more detailed information:
- **[Design System](DESIGN_SYSTEM.md)** - Complete design documentation
- **[Visual Standards](VISUAL_STANDARDS.md)** - Consistency guidelines
- **Component source files** - `/src/components/ui/`

**Remember**: Consistency is key. When in doubt, follow existing patterns.
