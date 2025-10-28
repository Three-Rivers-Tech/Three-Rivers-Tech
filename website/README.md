# Three Rivers Tech Website

A community-focused technology services website built with Next.js 15, designed specifically for Turtle Creek, PA residents and small businesses. This site transforms Three Rivers Tech from a corporate enterprise focus to a hometown tech partner offering "big-city know-how at small-town prices."

## 🌟 Community Mission

**Your Hometown Tech Partner in Turtle Creek**

We're a local business committed to making technology accessible and affordable for everyone in our community. From computer repairs for seniors to website design for local shops, we provide practical, straightforward tech solutions with personal service.

**Core Values:**
- Community First: We live here, work here, and invest in our neighbors' success
- Accessibility: Making technology understandable and affordable for everyone
- Transparency: Clear pricing, honest assessments, no technical jargon
- Reliability: Dependable service you can count on

## 📚 Documentation

### Design & Standards
- **[Design System](docs/DESIGN_SYSTEM.md)** - Complete design system documentation including colors, typography, components, and accessibility
- **[Visual Standards](docs/VISUAL_STANDARDS.md)** - Visual consistency guide with card patterns, spacing, and pre-launch checklists
- **[Component Library](docs/COMPONENT_LIBRARY.md)** - Complete component reference with code examples
- **[Code Standards](docs/CODE_STANDARDS.md)** - Code conventions, best practices, and Cloudflare Pages requirements
- **[Image Guidelines](docs/IMAGE_GUIDELINES.md)** - Image specifications, optimization workflow, and responsive image patterns
- **[Animation Guide](docs/ANIMATION_GUIDE.md)** - Animation timing, easing, accessibility, and performance best practices
- **[Cloudflare Optimization](docs/CLOUDFLARE_OPTIMIZATION.md)** - Complete guide for Cloudflare Pages deployment and optimization

### Development
- **[Development Guide](DEVELOPMENT_GUIDE.md)** - Setup, architecture, and development workflows
- **[Codebase Analysis](CODEBASE_ANALYSIS.md)** - Technical overview and architecture decisions
- **[Professional Standards](professional-standards-validation.md)** - Code quality and standards validation

### Content & SEO
- **[Content Audit Report](content-audit-report.md)** - Content strategy and messaging
- **[Modern Design Improvements](modern-design-improvements.md)** - Design evolution and enhancements

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Optimize images
npm run optimize:images
```

## 📁 Project Structure

```
website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── components/         # Page-specific components
│   │   ├── globals.css         # Global styles & design system
│   │   └── layout.tsx          # Root layout
│   ├── components/             # Shared components
│   │   ├── ui/                 # Design system components
│   │   │   ├── Button.tsx      # Standardized buttons
│   │   │   ├── Card.tsx        # Card system
│   │   │   ├── NavLink.tsx     # Navigation links
│   │   │   └── ...
│   │   ├── Header.tsx          # Site header
│   │   └── ...
│   ├── lib/                    # Utility functions
│   │   ├── metadata-generators.ts  # SEO metadata
│   │   ├── structured-data.ts      # Schema.org markup
│   │   └── ...
│   └── test/                   # Test files
├── public/                     # Static assets & optimized images
├── docs/                       # 📚 Comprehensive documentation
│   ├── DESIGN_SYSTEM.md        # Complete design system
│   ├── VISUAL_STANDARDS.md     # Visual consistency guide
│   ├── IMAGE_GUIDELINES.md     # Image optimization & specs
│   └── ANIMATION_GUIDE.md      # Animation standards
└── scripts/                    # Build & optimization scripts
```

## 🛠 Technology Stack

### Core Framework
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.x** - Type safety

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Custom UI Components** - Reusable component library
- **React Icons** - Icon library

### Development & Build
- **Turbopack** - Fast bundler for dev and build
- **ESLint** - Code linting
- **Sharp** - Image optimization

### Testing
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing

### Deployment
- **Static Export** - Optimized for Cloudflare Pages
- **Image Optimization** - Disabled for static hosting

## 🎨 Design System

### UI Components

The project includes a comprehensive UI component library located in `src/components/ui/`:

#### Button Component
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg" href="/contact">
  Get Started
</Button>

<Button variant="outline" onClick={handleClick} icon={<ArrowIcon />}>
  Learn More
</Button>
```

**Variants**: `primary`, `secondary`, `outline`, `ghost`  
**Sizes**: `sm`, `md`, `lg`

#### Card Component
```tsx
import { Card, CardHeader, CardContent } from '@/components/ui';

<Card variant="elevated" padding="lg" hoverable>
  <CardHeader title="Service Title" subtitle="Description" />
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

**Variants**: `default`, `elevated`, `bordered`, `glass`  
**Padding**: `none`, `sm`, `md`, `lg`, `xl`

#### Section Badge
```tsx
import { SectionBadge } from '@/components/ui';

<SectionBadge text="Our Services" variant="primary" showDot />
```

### Color System

The design system uses CSS custom properties for consistent theming:

```css
--primary: #2563eb;           /* Primary brand color */
--primary-hover: #1d4ed8;     /* Primary hover state */
--secondary: #7c3aed;         /* Secondary accent */
--background: #ffffff;        /* Main background */
--foreground: #1f2937;        /* Main text color */
```

### Typography

Responsive typography scale using Tailwind utilities:

- **Headings**: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
- **Body**: `text-base sm:text-lg`
- **Small**: `text-sm`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

All components use mobile-first responsive design patterns.

## 🔍 SEO & Performance

### Metadata Management
- Centralized SEO configuration in `lib/metadata.ts`
- Page-specific metadata generators
- Local SEO optimization for Turtle Creek, PA

### Structured Data
- Schema.org markup for local business
- Service-specific structured data
- Breadcrumb navigation markup

### Performance Optimizations
- Static site generation
- Image optimization with Sharp
- Turbopack for fast builds
- CSS purging with Tailwind

## 🧪 Testing

### Unit Tests
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run specific test suites
npm run test:seo
npm run test:accessibility
npm run test:content
```

### E2E Tests
```bash
# Run Playwright tests
npx playwright test
```

## 🚀 Deployment

The website is configured for static export and optimized for Cloudflare Pages:

```bash
# Build for production
npm run build

# Output directory: ./out/
```

### Environment Variables
Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 📊 Analytics & Monitoring

- **Google Analytics 4** - Traffic and user behavior
- **Core Web Vitals** - Performance monitoring
- **Accessibility** - WCAG 2.1 AA compliance

## 🛡 Security

- **Content Security Policy** - XSS protection
- **HTTPS Only** - Secure connections
- **Input Validation** - Form security
- **Dependency Scanning** - Automated security updates

## 🤝 Contributing

### Development Workflow

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Make changes and test**
   ```bash
   npm run test
   npm run lint
   ```

5. **Build and verify**
   ```bash
   npm run build
   ```

### Code Standards

- **TypeScript** - All new code must be typed
- **ESLint** - Follow configured linting rules
- **Component Documentation** - Add JSDoc comments
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 AA compliance

### Component Guidelines

When creating new components:

1. Use TypeScript interfaces for props
2. Add JSDoc documentation
3. Include accessibility attributes
4. Follow responsive design patterns
5. Use the established design system

## 📚 Documentation

- **[Codebase Analysis](./CODEBASE_ANALYSIS.md)** - Technical analysis and optimization recommendations
- **[Component Library](./src/components/ui/)** - UI component documentation
- **[API Documentation](./docs/api/)** - Backend API documentation

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Ensure Node.js version 18+ is installed
- Clear `.next` directory and reinstall dependencies
- Check for TypeScript errors

**Styling Issues**
- Verify Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Ensure custom utilities are defined in `tailwind.config.js`

**Performance Issues**
- Run `npm run build:analyze` to check bundle size
- Optimize images using the provided scripts
- Check for unnecessary re-renders in React components

## 📞 Support

For technical support or questions:

- **Email**: info@threeriverstech.com
- **Phone**: Phone line coming soon
- **Address**: 124 Grant Street, Turtle Creek, PA 15145

## 📄 License

This project is proprietary software owned by Three Rivers Tech. All rights reserved.

---

**Three Rivers Tech** - Your hometown technology partner in Turtle Creek, PA
