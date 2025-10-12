# Technology Stack & Build System

## Primary Tech Stack

### Frontend
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.x** - Type safety
- **Tailwind CSS 4** - Styling framework
- **React Icons** - Icon library

### Build & Development
- **Turbopack** - Fast bundler (used in dev and build)
- **Sharp** - Image optimization
- **ESLint** - Code linting
- **Vitest** - Testing framework
- **Playwright** - E2E testing

### Deployment
- **Static Export** - Configured for Cloudflare Pages
- **Image Optimization** - Disabled for static hosting compatibility

## Common Commands

### Development
```bash
# Start development server with Turbopack
npm run dev

# Run linting
npm run lint

# Run tests (single run)
npm run test

# Run tests in watch mode
npm run test:watch

# Run specific test suites
npm run test:seo
npm run test:accessibility
npm run test:content
```

### Build & Deployment
```bash
# Build for production (includes image optimization)
npm run build

# Start production server locally
npm run start

# Analyze bundle size
npm run build:analyze
```

### Image & Asset Management
```bash
# Optimize images
npm run optimize:images

# Analyze image usage
npm run analyze:images
```

## Project Structure Notes

- Uses Next.js App Router architecture
- Static export configuration for hosting compatibility
- Turbopack enabled for faster builds
- ESLint configured but ignored during builds due to legacy issues
- Images are unoptimized for static hosting compatibility

## Development Guidelines

- All new code should use TypeScript
- Follow Next.js App Router patterns
- Use Tailwind CSS for styling
- Write tests using Vitest for unit tests, Playwright for E2E
- Optimize images before committing using the provided scripts