# Animation Guide

Comprehensive guide to animations and transitions used throughout the Three Rivers Tech website. Ensures smooth, performant, and accessible motion design.

## 🎯 Animation Philosophy

### Core Principles
1. **Purpose**: Every animation should serve a purpose (feedback, guidance, delight)
2. **Subtlety**: Animations enhance, they don't distract
3. **Performance**: Only animate GPU-accelerated properties
4. **Accessibility**: Always respect `prefers-reduced-motion`
5. **Consistency**: Use standard timing and easing throughout

### When to Animate
✅ **Do animate**:
- Page/component entry (fade in, slide up)
- User feedback (button press, hover states)
- State changes (loading, success, error)
- Navigation transitions
- Drawing attention to important elements

❌ **Don't animate**:
- Everything constantly (creates noise)
- Critical content that needs immediate attention
- During slow network conditions
- When user has reduced motion preference

---

## ⏱️ Timing Standards

### Duration Guidelines
```css
/* Micro-interactions */
duration-200: 200ms   /* Quick feedback: button press, icon scale */

/* Standard transitions */
duration-300: 300ms   /* Default: most UI elements, cards, buttons */

/* Complex animations */
duration-500: 500ms   /* Multi-part: overlays, modals, complex state changes */

/* Emphasis animations */
duration-700: 700ms   /* Hero elements, major state changes */

/* Background effects */
duration-1000: 1000ms /* Color shifts, large movements */
```

### Usage by Element
| Element | Duration | Reasoning |
|---------|----------|-----------|
| Button hover | 300ms | Immediate feedback, not too sudden |
| Card hover | 300ms | Smooth lift, matches button timing |
| Page section entry | 600ms | Noticeable but not slow |
| Modal open/close | 300ms | Quick, doesn't interrupt flow |
| Loading spinner | 800ms | Smooth rotation, not dizzying |
| Toast notification | 300ms enter, 500ms exit | Quick in, patient out |
| Menu slide | 300ms | Responsive, snappy |
| Tab switch | 200ms | Instant feel, minimal delay |

---

## 📐 Easing Functions

### Standard Easing Curves
```css
/* Ease in-out (default) */
cubic-bezier(0.4, 0, 0.2, 1)
/* Use for: Most transitions, balanced acceleration/deceleration */

/* Ease out */
cubic-bezier(0, 0, 0.2, 1)
/* Use for: Enter animations, elements appearing */

/* Ease in */
cubic-bezier(0.4, 0, 1, 1)
/* Use for: Exit animations, elements disappearing */

/* Linear */
linear
/* Use for: Loading bars, continuous motion */
```

### Choosing Easing
```tsx
// Entering: Start fast, slow down (ease-out)
<div className="animate-slide-up ease-out">Content appearing</div>

// Exiting: Start slow, speed up (ease-in)
<div className="animate-fade-out ease-in">Content leaving</div>

// State change: Balanced (ease-in-out)
<button className="transition-all duration-300 ease-in-out">Hover me</button>
```

---

## 🎬 Animation Classes

### Fade Animations

#### Fade In
```tsx
<div className="animate-fade-in">
  Fades in from 0 to 1 opacity over 600ms
</div>
```

**CSS**:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;  /* Initial state */
}
```

**Usage**: Subtle element appearances, overlays, tooltips

#### Fade Out
```tsx
<div className="animate-fade-out">
  Fades out from 1 to 0 opacity over 400ms
</div>
```

**Usage**: Removing elements, dismissing notifications

### Slide Animations

#### Slide Up
```tsx
<div className="animate-slide-up">
  Slides up 20px and fades in simultaneously
</div>
```

**CSS**:
```css
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}
```

**Usage**: Page sections, cards entering view, lists

#### Slide Down
```tsx
<div className="animate-slide-down">
  Slides down from above
</div>
```

**Usage**: Dropdowns, notifications from top, mobile menus

### Scale Animations

#### Scale In
```tsx
<div className="animate-scale-in">
  Scales from 95% to 100% while fading in
</div>
```

**CSS**:
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.4s ease-out forwards;
  opacity: 0;
  transform: scale(0.95);
}
```

**Usage**: Modals, popovers, emphasis elements

### Continuous Animations

#### Float
```tsx
<div className="animate-float">
  Gently floats up and down infinitely
</div>
```

**CSS**:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

**Usage**: Hero decorative elements, call-out badges, floating CTAs

#### Pulse Soft
```tsx
<div className="animate-pulse-soft">
  Subtle opacity pulse
</div>
```

**Usage**: Loading indicators, attention-drawing elements, availability status

---

## 🎨 Staggered Animations

### Basic Stagger
For lists and grids, stagger item appearance:

```tsx
{items.map((item, index) => (
  <div 
    key={item.id}
    className={`animate-slide-up animation-delay-${200 + index * 100}`}
  >
    {item.content}
  </div>
))}
```

### Available Delays
```css
.animation-delay-200  { animation-delay: 0.2s; }
.animation-delay-400  { animation-delay: 0.4s; }
.animation-delay-600  { animation-delay: 0.6s; }
.animation-delay-700  { animation-delay: 0.7s; }
.animation-delay-800  { animation-delay: 0.8s; }
.animation-delay-900  { animation-delay: 0.9s; }
.animation-delay-1000 { animation-delay: 1.0s; }
.animation-delay-1100 { animation-delay: 1.1s; }
.animation-delay-1200 { animation-delay: 1.2s; }
```

### Calculating Delays
```tsx
// Pattern: base + (index * increment)
const baseDelay = 200;     // Start after 200ms
const increment = 100;     // Each item 100ms later

const delay = baseDelay + (index * increment);
```

**Guidelines**:
- **4-6 items**: 100ms increment
- **7-10 items**: 75ms increment
- **11+ items**: 50ms increment (avoid going too long)

### Complex Stagger Pattern
```tsx
<section>
  {/* Badge appears first */}
  <div className="animate-fade-in">Badge</div>
  
  {/* Title 200ms later */}
  <h2 className="animate-slide-up animation-delay-200">Title</h2>
  
  {/* Description 400ms later */}
  <p className="animate-slide-up animation-delay-400">Description</p>
  
  {/* Cards start at 600ms */}
  {cards.map((card, i) => (
    <Card 
      className={`animate-slide-up animation-delay-${600 + i * 100}`}
    />
  ))}
</section>
```

---

## 🎯 Hover & Interaction Animations

### Button Hover
```tsx
<button className="
  transition-all duration-300
  hover:scale-105 
  hover:-translate-y-1
  hover:shadow-glow
">
  Hover me
</button>
```

**Standard pattern**:
- Scale: 1.05 (5% larger)
- Translate Y: -1px (slight lift)
- Shadow: Add glow effect
- Duration: 300ms
- Easing: ease-in-out (default)

### Card Hover
```tsx
<div className="
  group
  transition-all duration-300
  hover:shadow-large
  hover:border-primary/20
  hover:-translate-y-1
">
  <h3 className="transition-colors duration-300 group-hover:text-primary">
    Title changes color on card hover
  </h3>
</div>
```

**Standard pattern**:
- Lift: translateY(-4px)
- Shadow: soft → large
- Border: subtle → primary/20
- Child elements: color shifts
- Duration: 300ms

### Icon Hover
```tsx
<div className="group">
  <Icon className="
    w-16 h-16 
    transition-all duration-300
    group-hover:scale-110
    group-hover:text-primary-hover
  " />
</div>
```

**Standard pattern**:
- Scale: 1.1 (10% larger)
- Color: primary → primary-hover
- Duration: 300ms

---

## ♿ Accessibility

### Respecting User Preferences

**Automatic disable**:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Manual check in JavaScript**:
```tsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (!prefersReducedMotion) {
  // Apply animations
}
```

### Accessibility Class
Apply to body/root when reduced motion is enabled:
```tsx
<body className={prefersReducedMotion ? 'reduced-motion' : ''}>
```

```css
.reduced-motion * {
  animation: none !important;
  transition: none !important;
}

/* Keep important feedback */
.reduced-motion button:active {
  transform: scale(0.98);  /* Quick press feedback OK */
}
```

### Focus Animations
Focus transitions should be instant, even with reduced motion:
```css
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  transition: none;  /* Instant, not animated */
}
```

---

## ⚡ Performance Optimization

### GPU-Accelerated Properties
**Only animate these** for 60fps performance:
- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (with caution)

**Avoid animating**:
- `width`, `height` (causes reflow)
- `top`, `left`, `margin` (use transform instead)
- `background-color` (acceptable for small elements)
- `box-shadow` (use sparingly, pre-render if possible)

### Transform Instead of Position
```css
/* ❌ Bad - causes reflow */
.bad {
  transition: left 300ms;
  left: 0;
}
.bad:hover {
  left: 10px;
}

/* ✅ Good - GPU accelerated */
.good {
  transition: transform 300ms;
  transform: translateX(0);
}
.good:hover {
  transform: translateX(10px);
}
```

### Will-Change Property
For frequently animated elements:
```css
.will-animate {
  will-change: transform, opacity;
}

/* Remove when animation is done */
.animation-complete {
  will-change: auto;
}
```

**Use sparingly**: Only for elements that will definitely animate soon.

### Batch Animations
Animate multiple properties together:
```css
/* Good - single transition */
.efficient {
  transition: transform 300ms, opacity 300ms, box-shadow 300ms;
}

/* Also good - shorthand */
.efficient-short {
  transition: all 300ms;
}
```

---

## 📋 Animation Checklist

Before implementing any animation:

- [ ] **Purpose**: Does it serve a clear purpose?
- [ ] **Duration**: Is it between 200-700ms (not too slow)?
- [ ] **Easing**: Appropriate easing function chosen?
- [ ] **Properties**: Only transform/opacity animated?
- [ ] **Performance**: Tested on slower devices?
- [ ] **Accessibility**: Respects reduced motion preference?
- [ ] **Consistency**: Matches existing animation patterns?
- [ ] **Mobile**: Works well on touch devices?
- [ ] **Dark mode**: Looks good in both themes?
- [ ] **Stagger**: Delays calculated if multiple items?

---

## 🎪 Common Patterns

### Page Section Entry
```tsx
<section className="section-padding">
  <div className="container mx-auto">
    {/* Header with stagger */}
    <div className="animate-fade-in">
      <Badge>Section Category</Badge>
    </div>
    <h2 className="animate-slide-up animation-delay-200">
      Section Title
    </h2>
    <p className="animate-slide-up animation-delay-400">
      Section description
    </p>
    
    {/* Grid with stagger */}
    <div className="grid grid-cols-3 gap-6">
      {items.map((item, i) => (
        <Card 
          key={item.id}
          className={`animate-slide-up animation-delay-${600 + i * 100}`}
        >
          {item.content}
        </Card>
      ))}
    </div>
  </div>
</section>
```

### Modal Animation
```tsx
// Backdrop fade in
<div className="
  fixed inset-0 bg-black/50
  animate-fade-in duration-300
" />

// Modal scale in
<div className="
  fixed inset-0 flex items-center justify-center
">
  <div className="
    bg-background rounded-2xl p-8
    animate-scale-in duration-300
  ">
    Modal content
  </div>
</div>
```

### Loading State
```tsx
<div className="animate-pulse-soft">
  <div className="h-4 bg-border rounded animate-pulse" />
  <div className="h-4 bg-border rounded animate-pulse animation-delay-200" />
  <div className="h-4 bg-border rounded animate-pulse animation-delay-400" />
</div>
```

### Success Feedback
```tsx
// Button transitions to success state
<button className="
  transition-all duration-500
  bg-primary hover:bg-primary-hover
  data-[success=true]:bg-success
  data-[success=true]:scale-105
">
  <span className="transition-opacity">
    {success ? '✓ Saved!' : 'Save'}
  </span>
</button>
```

---

## 🚫 Common Mistakes

### ❌ Don't:
1. Animate layout properties (width, height, top, left)
2. Make animations too slow (>700ms for UI)
3. Animate everything on the page at once
4. Use linear easing for organic movement
5. Forget reduced motion preference
6. Chain too many sequential animations
7. Use animation delays over 1.2 seconds
8. Animate on every state change
9. Apply will-change to many elements
10. Test only on high-end devices

### ✅ Do:
1. Animate transform and opacity only
2. Keep most animations 200-300ms
3. Stagger animations for groups
4. Use cubic-bezier for natural movement
5. Always respect prefers-reduced-motion
6. Overlap animations for fluidity
7. Keep total stagger under 1.5 seconds
8. Animate meaningful state changes only
9. Use will-change selectively and remove
10. Test on various devices and connections

---

## 🎓 Advanced Techniques

### Intersection Observer Animations
Animate elements when they enter viewport:
```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  elements.forEach(el => observer.observe(el));
}, []);
```

### Sequential Class Addition
For complex multi-step animations:
```tsx
useEffect(() => {
  const steps = [
    { delay: 0, class: 'step-1' },
    { delay: 300, class: 'step-2' },
    { delay: 600, class: 'step-3' },
  ];
  
  steps.forEach(({ delay, class: className }) => {
    setTimeout(() => {
      element.classList.add(className);
    }, delay);
  });
}, []);
```

### Spring Animations
For more natural, physics-based motion:
```tsx
// Using Framer Motion (if needed for complex animations)
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
>
  Content
</motion.div>
```

---

## 📚 Resources

### Tools
- **Chrome DevTools**: Performance tab for animation analysis
- **Firefox DevTools**: Animation inspector
- **CSS Triggers**: csstriggers.com (what causes reflow)

### Testing
- Test on actual mobile devices (not just DevTools)
- Throttle CPU in DevTools (6x slowdown)
- Enable reduced motion in OS settings
- Test on slow connections (slower perception)

### Learning
- [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Web.dev: Animations Performance](https://web.dev/animations/)
- [Designing Interface Animation](https://rosenfeldmedia.com/books/designing-interface-animation/)

---

Remember: **The best animation is often the one you don't notice** – it feels natural, smooth, and purposeful without calling attention to itself.
