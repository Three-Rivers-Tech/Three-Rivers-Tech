# Project Structure & Organization

## Repository Layout

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

## Website Directory Structure

The main application lives in the `website/` directory following Next.js App Router conventions:

```
website/
├── src/                     # Application source code
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utility functions and configurations
│   └── test/                # Test files
├── public/                  # Static assets (images, icons, etc.)
├── scripts/                 # Build optimization scripts
├── docs/                    # Website-specific documentation
└── out/                     # Generated static export
```

## Key Configuration Files

- `next.config.ts` - Next.js configuration with static export settings
- `package.json` - Dependencies and npm scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vitest.config.ts` - Test configuration
- `eslint.config.mjs` - Linting rules

## Documentation Organization

- `/docs/` - High-level project documentation and planning
- `/.kiro/specs/` - Detailed specifications for features and transformations
- `/website/docs/` - Website-specific technical documentation

## Development Workflow

1. **Main development** happens in `/website/` directory
2. **Specifications** are maintained in `/.kiro/specs/`
3. **Documentation** goes in `/docs/` for project-level or `/website/docs/` for technical
4. **Static assets** are placed in `/website/public/`
5. **Build output** is generated in `/website/out/` for deployment

## File Naming Conventions

- Use kebab-case for file and directory names
- Component files use PascalCase (e.g., `HeroSection.tsx`)
- Test files end with `.test.ts` or `.test.tsx`
- Configuration files follow their respective conventions

## Import Organization

- Absolute imports from `src/` directory
- Group imports: external libraries, internal components, utilities
- Use TypeScript path mapping for cleaner imports