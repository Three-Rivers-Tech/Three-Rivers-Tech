# Business Services Section Design
**Date:** 2026-01-30
**Status:** Approved for Implementation

## Approvals
| Role       | Name      | Date         | Sign-off |
|------------|-----------|--------------|----------|
| **Lead**   | C. Penrod | 2026-01-30   | ✅        |
| **Stakeholder**|           |              |          |


## Overview
Add a dedicated "Small Business Tech Help" section to the homepage to communicate B2B value proposition to micro-businesses (0-10 employees) in the Mon Valley area.

## Target Audience
- Micro-businesses: salons, restaurants, small retail shops, home service businesses
- 0-10 employees
- Budget-conscious, need affordable tech help
- Value transparency and local relationships

## Design Decisions

### Placement
Insert after `Services` component, before `WhyChooseUs` on homepage (`/website/src/app/page.tsx`)

**Flow:**
1. Hero (community intro)
2. Services (general overview)
3. **Business Services Section** ← NEW (focused B2B pitch with pricing)
4. WhyChooseUs (trust signals)
5. Portfolio (examples)
6. CTA

### Visual Design
- **Aesthetic:** Blend seamlessly with existing warm teal/emerald gradient design
- **Layout:** Two-column desktop (services | pricing), single-column mobile
- **Components:** Reuse existing Card, Button, SectionBadge components
- **Tone:** Friendly and approachable (not corporate) - targets micro-businesses

### Content Strategy

**Messaging Approach:**
- Honest and transparent: "Building my business client portfolio - great service at startup prices"
- No client names (being honest about new B2B focus)
- Clear, competitive pricing displayed upfront
- Local focus: Turtle Creek, Mon Valley

**Services Listed:**
- Simple, professional websites ($600-1,000 basic, $1,200-1,600 with booking, $1,800-2,400 e-commerce)
- Computer repair (same-day service)
- POS system setup ($150-250)
- Wi-Fi & printer setup
- No contracts, no monthly fees - pay as you go

**Pricing Strategy:**
- Undercut competition by 40-70%
- Basic websites: $600-1,000 (vs. competitors' $1,500-4,000)
- IT support: $60-75/hour (vs. $100-125 market rate)
- Fixed pricing for common tasks (builds trust)

**CTAs:**
- Primary: "Get a Quick Quote" → /contact
- Secondary: "See My Approach" → /business-portfolio (to be built later)

## Technical Implementation

### Component Structure
```
BusinessServicesSection.tsx
├── Section wrapper (bg gradient, padding)
├── Container (max-width, responsive padding)
├── Header
│   ├── SectionBadge ("Business Services")
│   ├── Headline
│   ├── Subheadline
│   └── Honest messaging callout
├── Content Grid (2-col desktop, 1-col mobile)
│   ├── Services Column
│   │   └── Service cards with icons
│   └── Pricing Highlights Column
│       └── Pricing cards
└── CTA Section
    ├── Primary CTA button
    └── Secondary CTA link
```

### Responsive Behavior
- Desktop (lg+): Two columns side-by-side
- Tablet (md): Two columns, narrower
- Mobile (sm): Single column, services → pricing stacked

### Accessibility
- **WCAG Compliance:** Aim for WCAG 2.1 Level AA compliance.
- Semantic HTML (section, article, heading hierarchy)
- ARIA labels for CTAs
- Minimum 44px touch targets
- Color contrast compliance
- Screen reader descriptions

### Reuse Existing Components
- `@/components/ui/Card` - for service and pricing cards
- `@/components/ui/PrimaryButton` - for main CTA
- `@/components/ui/SectionBadge` - for "Business Services" badge
- Existing gradient classes and color tokens

## Success Metrics

### Technical Validation
- Section renders correctly without errors
- Layout is responsive across mobile, tablet, and desktop breakpoints
- All interactive elements (CTAs) are functional and link to the correct destination

### Business & UX Metrics (To be tracked via analytics)
- **Scroll Depth:** Percentage of users who scroll the business services section into view.
- **Engagement:** CTA click-through rate (CTR) for the "Get a Quick Quote" button.
- **Dwell Time:** Average time spent with the section visible in the viewport.
- **Audience Insights:** Comparison of engagement metrics (CTR, dwell time) between mobile and desktop users.

## Future Enhancements (Out of Scope)
- Business portfolio page (`/business-portfolio`)
- Client testimonials when available
- Case studies with actual business examples
- Google Business Profile integration

## Implementation Checklist
- [ ] Verify `/website/src/app/page.tsx` path exists
- [ ] Verify UI components exist (Card, PrimaryButton, SectionBadge)
- [ ] Verify `/contact` route exists
- [ ] Implement placeholder or hide secondary CTA for `/business-portfolio`
- [ ] Validate pricing figures against current market rates
- [ ] Create `BusinessServicesSection.tsx` component
- [ ] Add icons for business services (reuse or create simple ones)
- [ ] Import and insert into homepage after Services section
- [ ] Test responsive layouts (mobile, tablet, desktop)
- [ ] Verify accessibility (keyboard nav, screen reader)
- [ ] Test CTA links
- [ ] Commit changes
