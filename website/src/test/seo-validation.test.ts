import { describe, it, expect } from 'vitest'
import { 
  generateStaticPageMetadata,
  generateServicePageMetadata,
  generatePortfolioPageMetadata,
  generateBlogPageMetadata,
  generateSearchPageMetadata,
  generateErrorPageMetadata
} from '@/lib/metadata-generators'
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateSoftwareDevelopmentSchema,
  generateITConsultingSchema,
  generateSaaSProductsSchema,
  generateComputerRepairSchema,
  generateAllServiceSchemas,
  generatePageStructuredData,
  structuredDataToJsonLd
} from '@/lib/structured-data'
import {
  generateOpenGraphMetadata,
  generateTwitterMetadata,
  generateServiceSocialMetadata,
  generatePortfolioSocialMetadata,
  generateArticleSocialMetadata,
  validateSocialImage
} from '@/lib/social-metadata'

describe('SEO Metadata Generation', () => {
  describe('Static Page Metadata', () => {
    it('should generate valid metadata for homepage', () => {
      const metadata = generateStaticPageMetadata('home')
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toBeTruthy()
      expect(metadata.description).toBeTruthy()
      expect(typeof metadata.title).toBe('string')
      expect(typeof metadata.description).toBe('string')
      expect(metadata.title).toContain('Three Rivers Tech')
    })

    it('should generate valid metadata for services page', () => {
      const metadata = generateStaticPageMetadata('services')
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toBeTruthy()
      expect(metadata.description).toBeTruthy()
      expect(metadata.keywords).toBeTruthy()
    })

    it('should generate valid metadata for about page', () => {
      const metadata = generateStaticPageMetadata('about')
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toBeTruthy()
      expect(metadata.description).toBeTruthy()
    })

    it('should generate valid metadata for contact page', () => {
      const metadata = generateStaticPageMetadata('contact')
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toBeTruthy()
      expect(metadata.description).toBeTruthy()
    })

    it('should generate fallback metadata for unknown pages', () => {
      const metadata = generateStaticPageMetadata('unknown-page')
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('Page Not Found')
      expect(metadata.description).toBeTruthy()
    })
  })

  describe('Service Page Metadata', () => {
    it('should generate enhanced metadata for software development service', () => {
      const metadata = generateServicePageMetadata('software-development')
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toBeTruthy()
      expect(metadata.description).toBeTruthy()
      expect(metadata.keywords).toBeTruthy()
    })

    it('should generate enhanced metadata for IT consulting service', () => {
      const metadata = generateServicePageMetadata('it-consulting')
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toBeTruthy()
      expect(metadata.description).toBeTruthy()
    })

    it('should generate fallback metadata for unknown service', () => {
      const metadata = generateServicePageMetadata('unknown-service')
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('Service')
      expect(metadata.description).toBeTruthy()
    })
  })

  describe('Portfolio Page Metadata', () => {
    it('should generate metadata for portfolio listing page', () => {
      const metadata = generatePortfolioPageMetadata()
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('Portfolio')
      expect(metadata.description).toBeTruthy()
    })

    it('should generate metadata for individual project page', () => {
      const projectData = {
        title: 'E-commerce Platform',
        description: 'Custom e-commerce solution with advanced features',
        technologies: ['React', 'Node.js', 'MongoDB'],
        client: 'Tech Startup',
        year: '2023'
      }
      
      const metadata = generatePortfolioPageMetadata('ecommerce-platform', projectData)
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('E-commerce Platform')
      expect(metadata.title).toContain('Portfolio Case Study')
      expect(metadata.description).toContain('Tech Startup')
      expect(metadata.description).toContain('2023')
      expect(metadata.keywords).toContain('React')
      expect(metadata.keywords).toContain('Node.js')
    })
  })

  describe('Blog Page Metadata', () => {
    it('should generate metadata for blog listing page', () => {
      const metadata = generateBlogPageMetadata()
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('Blog')
      expect(metadata.description).toBeTruthy()
      expect(metadata.keywords).toBeTruthy()
    })

    it('should generate metadata for individual article page', () => {
      const articleData = {
        title: 'Modern Web Development Best Practices',
        description: 'Learn the latest best practices for modern web development',
        publishDate: '2023-12-01',
        author: 'John Doe',
        tags: ['web development', 'best practices', 'javascript']
      }
      
      const metadata = generateBlogPageMetadata('web-dev-best-practices', articleData)
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('Modern Web Development Best Practices')
      expect(metadata.description).toBeTruthy()
      expect(metadata.keywords).toContain('web development')
      expect(metadata.openGraph).toBeDefined()
      expect(metadata.openGraph?.type).toBe('article')
      expect(metadata.openGraph?.publishedTime).toBe('2023-12-01')
      expect(metadata.openGraph?.authors).toContain('John Doe')
    })
  })

  describe('Search Page Metadata', () => {
    it('should generate metadata for search page without query', () => {
      const metadata = generateSearchPageMetadata()
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('Search')
      expect(metadata.description).toBeTruthy()
      expect(metadata.robots?.index).toBe(false)
    })

    it('should generate metadata for search page with query', () => {
      const metadata = generateSearchPageMetadata('web development')
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('web development')
      expect(metadata.description).toContain('web development')
      expect(metadata.robots?.index).toBe(false)
    })
  })

  describe('Error Page Metadata', () => {
    it('should generate metadata for 404 error page', () => {
      const metadata = generateErrorPageMetadata(404)
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('404')
      expect(metadata.title).toContain('Page Not Found')
      expect(metadata.description).toBeTruthy()
      expect(metadata.robots?.index).toBe(false)
      expect(metadata.robots?.follow).toBe(false)
    })

    it('should generate metadata for 500 error page', () => {
      const metadata = generateErrorPageMetadata(500)
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('500')
      expect(metadata.title).toContain('Server Error')
      expect(metadata.description).toBeTruthy()
      expect(metadata.robots?.index).toBe(false)
    })

    it('should generate metadata for unknown error code', () => {
      const metadata = generateErrorPageMetadata(403)
      
      expect(metadata).toBeDefined()
      expect(metadata.title).toContain('403')
      expect(metadata.description).toBeTruthy()
      expect(metadata.robots?.index).toBe(false)
    })
  })

  describe('Metadata Validation', () => {
    it('should ensure all metadata has required fields', () => {
      const pages = ['home', 'services', 'about', 'contact', 'portfolio']
      
      pages.forEach(page => {
        const metadata = generateStaticPageMetadata(page)
        
        expect(metadata.title, `${page} should have title`).toBeTruthy()
        expect(metadata.description, `${page} should have description`).toBeTruthy()
        expect(typeof metadata.title, `${page} title should be string`).toBe('string')
        expect(typeof metadata.description, `${page} description should be string`).toBe('string')
        
        // Title should be reasonable length (30-60 characters recommended)
        expect(metadata.title!.length, `${page} title should be reasonable length`).toBeGreaterThan(10)
        expect(metadata.title!.length, `${page} title should not be too long`).toBeLessThan(100)
        
        // Description should be reasonable length (120-160 characters recommended)
        expect(metadata.description!.length, `${page} description should be reasonable length`).toBeGreaterThan(50)
        expect(metadata.description!.length, `${page} description should not be too long`).toBeLessThan(200)
      })
    })

    it('should ensure metadata contains no placeholder text', () => {
      const pages = ['home', 'services', 'about', 'contact', 'portfolio']
      const placeholders = ['lorem ipsum', 'placeholder', 'todo', 'tbd', 'coming soon', 'under construction']
      
      pages.forEach(page => {
        const metadata = generateStaticPageMetadata(page)
        
        placeholders.forEach(placeholder => {
          expect(metadata.title?.toLowerCase(), `${page} title should not contain "${placeholder}"`).not.toContain(placeholder)
          expect(metadata.description?.toLowerCase(), `${page} description should not contain "${placeholder}"`).not.toContain(placeholder)
        })
      })
    })
  })
})

describe('Structured Data Validation', () => {
  describe('Organization Schema', () => {
    it('should generate valid Organization schema', () => {
      const schema = generateOrganizationSchema()
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Organization')
      expect(schema.name).toBeTruthy()
      expect(schema.url).toBeTruthy()
      expect(schema.logo).toBeTruthy()
      expect(schema.telephone).toBeTruthy()
      expect(schema.email).toBeTruthy()
      expect(schema.address).toBeDefined()
      expect(schema.address['@type']).toBe('PostalAddress')
      expect(schema.sameAs).toBeInstanceOf(Array)
      expect(schema.contactPoint).toBeInstanceOf(Array)
    })

    it('should have valid contact information', () => {
      const schema = generateOrganizationSchema()
      
      expect(schema.telephone).toMatch(/^\+?[\d\s\-\(\)]+$/)
      expect(schema.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      expect(schema.address.streetAddress).toBeTruthy()
      expect(schema.address.addressLocality).toBeTruthy()
      expect(schema.address.addressRegion).toBeTruthy()
      expect(schema.address.postalCode).toBeTruthy()
      expect(schema.address.addressCountry).toBeTruthy()
    })
  })

  describe('LocalBusiness Schema', () => {
    it('should generate valid LocalBusiness schema', () => {
      const schema = generateLocalBusinessSchema()
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('LocalBusiness')
      expect(schema.name).toBeTruthy()
      expect(schema.image).toBeTruthy()
      expect(schema.telephone).toBeTruthy()
      expect(schema.address).toBeDefined()
      expect(schema.openingHoursSpecification).toBeInstanceOf(Array)
      expect(schema.geo).toBeDefined()
      expect(schema.aggregateRating).toBeDefined()
    })

    it('should have valid opening hours', () => {
      const schema = generateLocalBusinessSchema()
      
      schema.openingHoursSpecification.forEach(hours => {
        expect(hours['@type']).toBe('OpeningHoursSpecification')
        expect(hours.dayOfWeek).toBeTruthy()
        expect(hours.opens).toMatch(/^\d{2}:\d{2}$/)
        expect(hours.closes).toMatch(/^\d{2}:\d{2}$/)
      })
    })

    it('should have valid geo coordinates', () => {
      const schema = generateLocalBusinessSchema()
      
      expect(schema.geo['@type']).toBe('GeoCoordinates')
      expect(typeof schema.geo.latitude).toBe('number')
      expect(typeof schema.geo.longitude).toBe('number')
      expect(schema.geo.latitude).toBeGreaterThan(-90)
      expect(schema.geo.latitude).toBeLessThan(90)
      expect(schema.geo.longitude).toBeGreaterThan(-180)
      expect(schema.geo.longitude).toBeLessThan(180)
    })
  })

  describe('WebSite Schema', () => {
    it('should generate valid WebSite schema', () => {
      const schema = generateWebSiteSchema()
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('WebSite')
      expect(schema.name).toBeTruthy()
      expect(schema.url).toBeTruthy()
      expect(schema.potentialAction).toBeDefined()
      expect(schema.potentialAction['@type']).toBe('SearchAction')
    })

    it('should have valid search action', () => {
      const schema = generateWebSiteSchema()
      
      expect(schema.potentialAction.target['@type']).toBe('EntryPoint')
      expect(schema.potentialAction.target.urlTemplate).toContain('{search_term_string}')
      expect(schema.potentialAction['query-input']).toBe('required name=search_term_string')
    })
  })

  describe('WebPage Schema', () => {
    it('should generate valid WebPage schema', () => {
      const schema = generateWebPageSchema(
        'Test Page',
        'Test description',
        'https://example.com/test'
      )
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('WebPage')
      expect(schema.name).toBe('Test Page')
      expect(schema.description).toBe('Test description')
      expect(schema.url).toBe('https://example.com/test')
      expect(schema.isPartOf).toBeDefined()
    })

    it('should include breadcrumbs when provided', () => {
      const breadcrumbs = [
        { name: 'Home', url: 'https://example.com' },
        { name: 'Services', url: 'https://example.com/services' }
      ]
      
      const schema = generateWebPageSchema(
        'Test Page',
        'Test description',
        'https://example.com/test',
        breadcrumbs
      )
      
      expect(schema.breadcrumb).toBeDefined()
      expect(schema.breadcrumb['@type']).toBe('BreadcrumbList')
      expect(schema.breadcrumb.itemListElement).toHaveLength(2)
    })
  })

  describe('Service Schemas', () => {
    it('should generate valid software development schema', () => {
      const schema = generateSoftwareDevelopmentSchema()
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Service')
      expect(schema.name).toContain('Software Development')
      expect(schema.description).toBeTruthy()
      expect(schema.provider).toBeDefined()
      expect(schema.offers).toBeInstanceOf(Array)
      expect(schema.offers.length).toBeGreaterThan(0)
    })

    it('should generate valid IT consulting schema', () => {
      const schema = generateITConsultingSchema()
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Service')
      expect(schema.name).toContain('IT Consulting')
      expect(schema.description).toBeTruthy()
      expect(schema.offers).toBeInstanceOf(Array)
    })

    it('should generate valid SaaS products schema', () => {
      const schema = generateSaaSProductsSchema()
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Service')
      expect(schema.name).toContain('SaaS')
      expect(schema.description).toBeTruthy()
      expect(schema.offers).toBeInstanceOf(Array)
    })

    it('should generate valid computer repair schema', () => {
      const schema = generateComputerRepairSchema()
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Service')
      expect(schema.name).toContain('Computer Repair')
      expect(schema.description).toBeTruthy()
      expect(schema.offers).toBeInstanceOf(Array)
    })

    it('should generate all service schemas', () => {
      const schemas = generateAllServiceSchemas()
      
      expect(schemas).toHaveLength(4)
      schemas.forEach(schema => {
        expect(schema['@context']).toBe('https://schema.org')
        expect(schema['@type']).toBe('Service')
        expect(schema.name).toBeTruthy()
        expect(schema.description).toBeTruthy()
      })
    })
  })

  describe('Page Structured Data', () => {
    it('should generate structured data for home page', () => {
      const schemas = generatePageStructuredData('home')
      
      expect(schemas).toBeInstanceOf(Array)
      expect(schemas.length).toBeGreaterThan(2)
      
      // Should include Organization, WebSite, LocalBusiness, and WebPage schemas
      const types = schemas.map((schema: { '@type': string }) => schema['@type'])
      expect(types).toContain('Organization')
      expect(types).toContain('WebSite')
      expect(types).toContain('LocalBusiness')
      expect(types).toContain('WebPage')
    })

    it('should generate structured data for services page', () => {
      const schemas = generatePageStructuredData('services')
      
      expect(schemas).toBeInstanceOf(Array)
      expect(schemas.length).toBeGreaterThan(5)
      
      // Should include all service schemas
      const serviceSchemas = schemas.filter((schema: { '@type': string }) => schema['@type'] === 'Service')
      expect(serviceSchemas.length).toBe(4)
    })

    it('should generate structured data for individual service page', () => {
      const schemas = generatePageStructuredData('service', {
        name: 'Custom Software Development',
        description: 'Professional software development services',
        url: 'https://example.com/services/software-development',
        serviceName: 'Software Development',
        serviceDescription: 'Custom software solutions',
        breadcrumbs: [
          { name: 'Home', url: 'https://example.com' },
          { name: 'Services', url: 'https://example.com/services' }
        ]
      })
      
      expect(schemas).toBeInstanceOf(Array)
      const types = schemas.map((schema: { '@type': string }) => schema['@type'])
      expect(types).toContain('Service')
      expect(types).toContain('WebPage')
    })
  })

  describe('JSON-LD Conversion', () => {
    it('should convert structured data to valid JSON-LD', () => {
      const schema = generateOrganizationSchema()
      const jsonLd = structuredDataToJsonLd(schema)
      
      expect(typeof jsonLd).toBe('string')
      expect(() => JSON.parse(jsonLd)).not.toThrow()
      
      const parsed = JSON.parse(jsonLd)
      expect(parsed['@context']).toBe('https://schema.org')
      expect(parsed['@type']).toBe('Organization')
    })

    it('should produce compact JSON-LD without formatting', () => {
      const schema = { test: 'value', nested: { key: 'value' } }
      const jsonLd = structuredDataToJsonLd(schema)
      
      expect(jsonLd).not.toContain('\n')
      expect(jsonLd).not.toContain('  ')
    })
  })
})

describe('Open Graph and Twitter Card Validation', () => {
  describe('Open Graph Metadata', () => {
    it('should generate valid Open Graph metadata', () => {
      const config = {
        title: 'Test Page',
        description: 'Test description for Open Graph',
        image: 'https://example.com/image.jpg',
        url: 'https://example.com/test'
      }
      
      const og = generateOpenGraphMetadata(config)
      
      expect(og.type).toBe('website')
      expect(og.title).toBe('Test Page')
      expect(og.description).toBe('Test description for Open Graph')
      expect(og.url).toBe('https://example.com/test')
      expect(og.images).toBeInstanceOf(Array)
      expect(og.images[0].url).toBe('https://example.com/image.jpg')
      expect(og.images[0].width).toBe(1200)
      expect(og.images[0].height).toBe(630)
    })

    it('should generate article-specific Open Graph metadata', () => {
      const config = {
        title: 'Test Article',
        description: 'Test article description',
        type: 'article' as const,
        article: {
          publishedTime: '2023-12-01T10:00:00Z',
          author: 'John Doe',
          section: 'Technology',
          tags: ['web development', 'javascript']
        }
      }
      
      const og = generateOpenGraphMetadata(config)
      
      expect(og.type).toBe('article')
      expect(og.publishedTime).toBe('2023-12-01T10:00:00Z')
      expect(og.authors).toContain('John Doe')
      expect(og.section).toBe('Technology')
      expect(og.tags).toContain('web development')
    })

    it('should use default values when not provided', () => {
      const config = {
        title: 'Test Page',
        description: 'Test description'
      }
      
      const og = generateOpenGraphMetadata(config)
      
      expect(og.type).toBe('website')
      expect(og.siteName).toBeTruthy()
      expect(og.locale).toBe('en_US')
      expect(og.images[0].url).toBeTruthy()
    })
  })

  describe('Twitter Card Metadata', () => {
    it('should generate valid Twitter Card metadata', () => {
      const config = {
        title: 'Test Page',
        description: 'Test description for Twitter',
        image: 'https://example.com/image.jpg'
      }
      
      const twitter = generateTwitterMetadata(config)
      
      expect(twitter.card).toBe('summary_large_image')
      expect(twitter.title).toBe('Test Page')
      expect(twitter.description).toBe('Test description for Twitter')
      expect(twitter.site).toBeTruthy()
      expect(twitter.creator).toBeTruthy()
      expect(twitter.images).toBeInstanceOf(Array)
      expect(twitter.images[0].url).toBe('https://example.com/image.jpg')
    })

    it('should support different card types', () => {
      const config = {
        title: 'Test Page',
        description: 'Test description',
        twitterCard: 'summary' as const
      }
      
      const twitter = generateTwitterMetadata(config)
      
      expect(twitter.card).toBe('summary')
    })
  })

  describe('Service Social Metadata', () => {
    it('should generate social metadata for services', () => {
      const { openGraph, twitter } = generateServiceSocialMetadata(
        'Software Development',
        'Custom software solutions for your business'
      )
      
      expect(openGraph.title).toContain('Software Development')
      expect(openGraph.description).toContain('software solutions')
      expect(openGraph.url).toContain('/services/software-development')
      
      expect(twitter.title).toContain('Software Development')
      expect(twitter.description).toContain('software solutions')
    })
  })

  describe('Portfolio Social Metadata', () => {
    it('should generate social metadata for portfolio projects', () => {
      const { openGraph, twitter } = generatePortfolioSocialMetadata(
        'E-commerce Platform',
        'Custom e-commerce solution with advanced features',
        'https://example.com/project-image.jpg',
        'Tech Startup'
      )
      
      expect(openGraph.title).toContain('E-commerce Platform')
      expect(openGraph.description).toContain('Tech Startup')
      expect(openGraph.type).toBe('article')
      expect(openGraph.images[0].url).toBe('https://example.com/project-image.jpg')
      
      expect(twitter.title).toContain('E-commerce Platform')
      expect(twitter.description).toContain('Tech Startup')
    })
  })

  describe('Article Social Metadata', () => {
    it('should generate social metadata for blog articles', () => {
      const { openGraph, twitter } = generateArticleSocialMetadata(
        'Modern Web Development',
        'Learn the latest web development techniques',
        '2023-12-01T10:00:00Z',
        'John Doe',
        ['web development', 'javascript'],
        'https://example.com/article-image.jpg',
        'modern-web-development'
      )
      
      expect(openGraph.title).toContain('Modern Web Development')
      expect(openGraph.type).toBe('article')
      expect(openGraph.publishedTime).toBe('2023-12-01T10:00:00Z')
      expect(openGraph.authors).toContain('John Doe')
      expect(openGraph.tags).toContain('web development')
      
      expect(twitter.title).toContain('Modern Web Development')
    })
  })

  describe('Social Image Validation', () => {
    it('should validate image formats', () => {
      const validImage = validateSocialImage('https://example.com/image.jpg')
      expect(validImage.isValid).toBe(true)
      
      const invalidImage = validateSocialImage('https://example.com/image.gif')
      expect(invalidImage.isValid).toBe(false)
      expect(invalidImage.recommendations).toContain(expect.stringContaining('JPG, PNG, or WebP'))
    })

    it('should provide platform-specific recommendations', () => {
      const ogValidation = validateSocialImage('https://example.com/image.jpg', 'openGraph')
      expect(ogValidation.recommendations).toContain(expect.stringContaining('1200x630'))
      
      const twitterValidation = validateSocialImage('https://example.com/image.jpg', 'twitter')
      expect(twitterValidation.recommendations).toContain(expect.stringContaining('1200x600'))
      expect(twitterValidation.recommendations).toContain(expect.stringContaining('2:1 aspect ratio'))
    })
  })

  describe('Schema.org Validation', () => {
    it('should validate all schemas have required @context and @type', () => {
      const schemas = [
        generateOrganizationSchema(),
        generateLocalBusinessSchema(),
        generateWebSiteSchema(),
        generateWebPageSchema('Test', 'Description', 'https://example.com'),
        generateSoftwareDevelopmentSchema()
      ]
      
      schemas.forEach((schema, index) => {
        expect(schema['@context'], `Schema ${index} should have @context`).toBe('https://schema.org')
        expect(schema['@type'], `Schema ${index} should have @type`).toBeTruthy()
      })
    })

    it('should ensure no placeholder content in schemas', () => {
      const schemas = generateAllServiceSchemas()
      const placeholders = ['lorem ipsum', 'placeholder', 'todo', 'tbd', 'coming soon']
      
      schemas.forEach((schema, index) => {
        placeholders.forEach(placeholder => {
          expect(schema.name.toLowerCase(), `Service schema ${index} name should not contain "${placeholder}"`).not.toContain(placeholder)
          expect(schema.description.toLowerCase(), `Service schema ${index} description should not contain "${placeholder}"`).not.toContain(placeholder)
        })
      })
    })

    it('should validate required fields for Organization schema', () => {
      const schema = generateOrganizationSchema()
      
      const requiredFields = ['name', 'url', 'telephone', 'email', 'address']
      requiredFields.forEach(field => {
        expect(schema[field as keyof typeof schema], `Organization schema should have ${field}`).toBeTruthy()
      })
      
      expect(schema.address.streetAddress).toBeTruthy()
      expect(schema.address.addressLocality).toBeTruthy()
      expect(schema.address.addressRegion).toBeTruthy()
      expect(schema.address.postalCode).toBeTruthy()
    })

    it('should validate required fields for LocalBusiness schema', () => {
      const schema = generateLocalBusinessSchema()
      
      const requiredFields = ['name', 'image', 'telephone', 'address', 'openingHoursSpecification']
      requiredFields.forEach(field => {
        expect(schema[field as keyof typeof schema], `LocalBusiness schema should have ${field}`).toBeTruthy()
      })
      
      expect(schema.openingHoursSpecification.length).toBeGreaterThan(0)
      expect(schema.geo).toBeDefined()
    })
  })
})