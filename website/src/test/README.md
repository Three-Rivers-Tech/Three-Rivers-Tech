# Testing Suite Documentation

This directory contains comprehensive tests for the Three Rivers Tech website optimization and SEO implementation.

## Test Categories

### 1. SEO Validation Tests (`seo-validation.test.ts`)

Tests for search engine optimization features including:

- **Metadata Generation**: Validates that all pages generate proper meta titles, descriptions, and keywords
- **Structured Data**: Tests JSON-LD schema markup for Organization, LocalBusiness, Services, and WebPage schemas
- **Open Graph & Twitter Cards**: Validates social media metadata for proper sharing
- **Schema.org Compliance**: Ensures all structured data follows schema.org specifications

**Key Features Tested:**
- Page metadata completeness and accuracy
- Structured data validation against schema.org
- Social media metadata generation
- No placeholder content in SEO elements

### 2. Accessibility & Performance Tests (`accessibility-performance.test.ts`)

Tests for web accessibility and performance optimization:

- **Accessibility Testing**: Automated testing with axe-core for WCAG compliance
- **Core Web Vitals**: Performance metrics testing (LCP, FID, CLS)
- **Responsive Design**: Cross-viewport testing and mobile optimization
- **Keyboard Navigation**: Ensures full keyboard accessibility
- **Color Contrast**: WCAG AA compliance validation

**Key Features Tested:**
- ARIA labels and semantic markup
- Keyboard navigation support
- Color contrast ratios
- Performance budget compliance
- Mobile responsiveness

### 3. Content Validation Tests (`content-validation.test.ts`)

Tests for content quality and consistency:

- **Placeholder Detection**: Ensures no placeholder text remains in production
- **Content Consistency**: Validates consistent business information across pages
- **Image Alt Text**: Checks for meaningful alternative text
- **Content Quality**: Professional writing standards and SEO optimization

**Key Features Tested:**
- No lorem ipsum or placeholder content
- Consistent contact information
- Proper heading hierarchy
- Location-specific content for local SEO

## Running Tests

### All Tests
```bash
npm test
```

### Specific Test Suites
```bash
# SEO validation tests only
npm run test:seo

# Accessibility and performance tests only
npm run test:accessibility

# Content validation tests only
npm run test:content
```

### Test Modes
```bash
# Run tests once
npm test

# Watch mode for development
npm run test:watch

# Visual test UI
npm run test:ui

# Coverage report
npm run test:coverage
```

## Test Configuration

The testing suite uses:
- **Vitest** as the test runner
- **@testing-library/react** for component testing
- **jest-axe** for accessibility testing
- **jsdom** as the test environment

Configuration files:
- `vitest.config.ts` - Main Vitest configuration
- `src/test/setup.ts` - Test environment setup
- `src/test/test-utils.tsx` - Custom testing utilities

## Writing New Tests

### SEO Tests
When adding new pages or SEO features:

1. Add metadata generation tests in `seo-validation.test.ts`
2. Include structured data validation
3. Test Open Graph and Twitter Card metadata
4. Validate against schema.org specifications

### Accessibility Tests
For new components or interactions:

1. Add axe-core automated testing
2. Test keyboard navigation
3. Validate ARIA labels and roles
4. Check color contrast compliance

### Content Tests
For new content or pages:

1. Add placeholder detection tests
2. Validate content consistency
3. Check image alt text quality
4. Ensure proper content structure

## Test Data and Mocks

The tests use mock data and components to simulate real-world scenarios:

- Mock business information and site configuration
- Sample page content for validation
- Mock images with proper alt text
- Simulated user interactions

## Continuous Integration

These tests are designed to run in CI/CD pipelines to ensure:

- No regressions in SEO optimization
- Maintained accessibility standards
- Content quality consistency
- Performance budget compliance

## Troubleshooting

### Common Issues

1. **Metadata Structure Errors**: Next.js metadata API returns objects, not strings
2. **Missing Dependencies**: Ensure all test dependencies are installed
3. **File Path Issues**: Use relative paths from the test file location
4. **Mock Data**: Update mock data when business information changes

### Debug Mode

Run tests with verbose output:
```bash
npm test -- --reporter=verbose
```

View test coverage:
```bash
npm run test:coverage
```

## Best Practices

1. **Test Real Scenarios**: Use actual content and realistic data
2. **Validate Against Standards**: Test against WCAG, schema.org, and SEO best practices
3. **Keep Tests Updated**: Update tests when content or features change
4. **Use Descriptive Names**: Test names should clearly describe what's being tested
5. **Group Related Tests**: Organize tests by feature or component

## Integration with Development Workflow

- Run tests before committing changes
- Include test updates in feature development
- Use test results to guide optimization efforts
- Monitor test performance and update as needed

This testing suite ensures the Three Rivers Tech website maintains high standards for SEO, accessibility, and content quality throughout development and deployment.