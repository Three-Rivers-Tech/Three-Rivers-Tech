# Content Management System

This content management system provides a robust, type-safe way to manage all website content including business information, services, testimonials, and page content.

## Features

- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Runtime Validation**: Zod schemas for runtime type checking and validation
- **Flexible Loading**: Support for JSON and YAML content files
- **Caching**: Built-in caching system for improved performance
- **Fallback Support**: Graceful degradation with fallback content
- **Environment Aware**: Different behavior for development vs production

## Quick Start

```typescript
import { contentProvider, getPageContent, getServices } from '@/lib/content';

// Get page content
const homeContent = await getPageContent('home');

// Get all services
const services = await getServices();

// Get business information
const businessInfo = await contentProvider.getBusinessInfo();
```

## Directory Structure

```
src/
├── content/                 # Content files
│   ├── global/             # Global content
│   │   └── business.json   # Business information
│   ├── pages/              # Page-specific content
│   │   └── home.json       # Homepage content
│   ├── services.json       # Services data
│   └── testimonials.json   # Testimonials data
├── lib/
│   ├── types/
│   │   └── content.ts      # TypeScript type definitions
│   ├── schemas/
│   │   └── content.ts      # Zod validation schemas
│   └── content/
│       ├── loader.ts       # Content loading utilities
│       ├── provider.ts     # Content provider class
│       ├── test.ts         # Testing utilities
│       └── index.ts        # Main exports
```

## Content Types

### Business Information
```typescript
interface BusinessInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: Address;
  hours: BusinessHours[];
  socialMedia: SocialMediaLinks;
  specialties: string[];
}
```

### Page Content
```typescript
interface PageContent {
  hero: HeroContent;
  services?: ServiceContent[];
  testimonials?: TestimonialContent[];
  callToAction?: CTAContent;
  seo: SEOConfig;
}
```

### SEO Configuration
```typescript
interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  openGraph: OpenGraphConfig;
  twitter: TwitterConfig;
  structuredData?: Record<string, any>;
}
```

## Usage Examples

### Loading Content

```typescript
import { contentProvider } from '@/lib/content';

// Load complete content model
const contentModel = await contentProvider.getContentModel();

// Load specific page content
const aboutContent = await contentProvider.getPageContent('about');

// Load services with caching
const services = await contentProvider.getServices();

// Force refresh cached content
const freshServices = await contentProvider.getServices(true);
```

### Content Validation

```typescript
import { validateContent, schemas } from '@/lib/content';

// Validate business info
const validation = validateContent(businessData, schemas.BusinessInfo);
if (!validation.valid) {
  console.error('Validation errors:', validation.errors);
}
```

### Using Content Provider

```typescript
import { ContentProvider } from '@/lib/content';

// Create custom provider with options
const provider = ContentProvider.getInstance({
  environment: 'production',
  fallback: false,
  locale: 'en'
});

// Validate all content
const validation = await provider.validateContent();
if (!validation.valid) {
  console.error('Content validation failed:', validation.errors);
}

// Get content statistics
const stats = await provider.getContentStats();
console.log(`Loaded ${stats.services} services and ${stats.testimonials} testimonials`);
```

## Content File Formats

### JSON Format
```json
{
  "name": "Three Rivers Tech",
  "description": "Comprehensive technology solutions",
  "phone": "(412) 555-0123",
  "email": "info@threeriverstech.com"
}
```

### YAML Format
```yaml
name: Three Rivers Tech
description: Comprehensive technology solutions
phone: "(412) 555-0123"
email: info@threeriverstech.com
```

## Error Handling

The system provides comprehensive error handling:

```typescript
import { ContentLoadError } from '@/lib/content';

try {
  const content = await contentProvider.getPageContent('nonexistent');
} catch (error) {
  if (error instanceof ContentLoadError) {
    console.error('Content loading failed:', error.message);
    if (error.validationErrors) {
      console.error('Validation errors:', error.validationErrors);
    }
  }
}
```

## Caching

The content provider includes built-in caching:

- **Cache Duration**: 5 minutes by default
- **Automatic Refresh**: Stale content is refreshed automatically
- **Manual Control**: Force refresh with `forceRefresh` parameter
- **Cache Management**: Clear cache entries individually or all at once

```typescript
// Clear all cached content
contentProvider.clearCache();

// Clear specific cache entry
contentProvider.clearCacheEntry('services');
```

## Testing

Run the content system test:

```bash
# Simple file existence test
node test-content.js

# Full TypeScript test (requires compilation)
npm run test:content
```

## Best Practices

1. **Use TypeScript**: Always use the provided TypeScript interfaces
2. **Validate Content**: Use Zod schemas for runtime validation
3. **Handle Errors**: Implement proper error handling for content loading
4. **Cache Wisely**: Use caching for performance but refresh when needed
5. **Fallback Content**: Provide fallback content for development
6. **SEO Optimization**: Always include complete SEO metadata

## Environment Configuration

The system adapts to different environments:

- **Development**: Enables fallback content, verbose logging
- **Production**: Strict validation, optimized caching
- **Testing**: Mock data, validation bypass options

## Integration with Next.js

The content management system is designed to work seamlessly with Next.js:

```typescript
// In a Next.js page or component
import { getPageContent } from '@/lib/content';

export async function generateMetadata({ params }) {
  const content = await getPageContent(params.page);
  return {
    title: content.seo.title,
    description: content.seo.description,
    openGraph: content.seo.openGraph,
  };
}

export default async function Page({ params }) {
  const content = await getPageContent(params.page);
  return (
    <div>
      <h1>{content.hero.headline}</h1>
      <p>{content.hero.description}</p>
    </div>
  );
}
```