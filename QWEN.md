# Three Rivers Tech Project Context

## Project Overview

Three Rivers Tech is a professional IT services business website transformation project. The goal is to convert the current website from casual, inconsistent messaging into a credible, professional business presence. The main application is a Next.js 15 website with TypeScript and Tailwind CSS, configured for static export and deployment on platforms like Cloudflare Pages or Vercel.

## Technologies & Architecture

### Tech Stack
- **Frontend**: Next.js 15.5.2 (App Router), React 19.1.0, TypeScript 5.x, Tailwind CSS 4
- **Build & Development**: Turbopack (for faster builds), Sharp (image optimization), ESLint, Vitest, Playwright
- **Deployment**: Static export configured for Cloudflare Pages with images unoptimized for hosting compatibility
- **Additional libraries**: React Icons, Zod for validation, nodemailer for email services, js-yaml

### Project Structure
```
├── .kiro/                    # Kiro IDE configuration and specs
│   ├── specs/               # Project specifications and requirements
│   └── steering/            # AI assistant guidance documents
├── docs/                    # Project documentation
├── website/                 # Main Next.js application
│   ├── src/                 # Source code
│   ├── public/              # Static assets
│   ├── scripts/             # Build and optimization scripts
│   └── out/                 # Static export output
├── app.py                   # Backend service (currently empty)
└── package.json             # Root dependencies (TypeScript)
```

## Building and Running

### Development
```bash
# Navigate to the website directory first
cd website

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

## Target Audience

The website targets business decision-makers and companies seeking IT services, including:
- Small to medium businesses needing technology solutions
- Companies requiring custom software development
- Organizations seeking IT infrastructure support
- Businesses looking for SaaS integration and support

## Core Services

- Enterprise Software Solutions (custom development)
- IT Infrastructure & Support
- SaaS Solutions & Integration
- Hardware Support & Maintenance

## Development Guidelines

- All new code should use TypeScript
- Follow Next.js App Router patterns
- Use Tailwind CSS for styling
- Write tests using Vitest for unit tests, Playwright for E2E
- Optimize images before committing using the provided scripts
- Use kebab-case for file and directory names
- Component files use PascalCase (e.g., `HeroSection.tsx`)
- Test files end with `.test.ts` or `.test.tsx`
- Absolute imports from `src/` directory

## Project Configuration

The project is configured for static export to work with Cloudflare Pages:
- `output: 'export'` in next.config.ts
- `trailingSlash: true` for proper routing
- `images: { unoptimized: true }` for static hosting compatibility
- Turbopack enabled for faster builds
- ESLint configured but ignored during builds due to legacy issues

## CI/CD Pipeline

The project implements a GitHub Actions CI/CD pipeline that:
- Triggers on pushes to the main branch and pull requests
- Runs automated tests and linting
- Builds the Next.js application
- Deploys to Vercel
- Includes steps for setup, dependencies, linting, testing, building, and deployment

## Brand Voice

Professional, approachable, and expert-focused. Avoids casual language in favor of business-appropriate terminology that demonstrates competence and reliability.