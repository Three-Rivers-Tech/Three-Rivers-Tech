import { describe, it, expect } from 'vitest'
import { generateStaticPageMetadata } from '@/lib/metadata-generators'
import { generateOrganizationSchema } from '@/lib/structured-data'

describe('Core Metadata & Schema', () => {
  it('homepage metadata is valid', () => {
    const metadata = generateStaticPageMetadata('home')
    expect(metadata).toBeDefined()
    expect(metadata.title).toBeTruthy()
    expect(metadata.description).toBeTruthy()
    expect(typeof metadata.title).toBe('string')
    expect(typeof metadata.description).toBe('string')
  })

  it('organization schema is valid', () => {
    const schema = generateOrganizationSchema()
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('Organization')
    expect(schema.name).toBeTruthy()
    expect(schema.url).toBeTruthy()
    expect(schema.logo).toBeTruthy()
    expect(schema.telephone).toBeTruthy()
    expect(schema.email).toBeTruthy()
    expect(schema.address).toBeDefined()
    expect(Array.isArray(schema.sameAs)).toBe(true)
    expect(Array.isArray(schema.contactPoint)).toBe(true)
  })
})
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
      import { describe, it, expect } from 'vitest'
      import { generateStaticPageMetadata } from '@/lib/metadata-generators'
      import { generateOrganizationSchema } from '@/lib/structured-data'

      describe('Core Metadata & Schema', () => {
        it('homepage metadata is valid', () => {
          const metadata = generateStaticPageMetadata('home')
          expect(metadata).toBeDefined()
          expect(metadata.title).toBeTruthy()
          expect(metadata.description).toBeTruthy()
          expect(typeof metadata.title).toBe('string')
          expect(typeof metadata.description).toBe('string')
        })

        it('organization schema is valid', () => {
          const schema = generateOrganizationSchema()
          expect(schema['@context']).toBe('https://schema.org')
          expect(schema['@type']).toBe('Organization')
          expect(schema.name).toBeTruthy()
          expect(schema.url).toBeTruthy()
          expect(schema.logo).toBeTruthy()
          expect(schema.telephone).toBeTruthy()
          expect(schema.email).toBeTruthy()
          expect(schema.address).toBeDefined()
          expect(Array.isArray(schema.sameAs)).toBe(true)
          expect(Array.isArray(schema.contactPoint)).toBe(true)
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
  // ...existing code...
      )
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('WebPage')
      expect(schema.name).toBe('Test Page')
      expect(schema.description).toBe('Test description')
  // ...existing code...
      expect(schema.isPartOf).toBeDefined()
    })

    it('should include breadcrumbs when provided', () => {
      const breadcrumbs = [
  // ...existing code...
  // ...existing code...
      ]
      
      const schema = generateWebPageSchema(
        'Test Page',
        'Test description',
  // ...existing code...
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
  // ...existing code...
        serviceName: 'Software Development',
        serviceDescription: 'Custom software solutions',
        breadcrumbs: [
          // ...existing code...
          // ...existing code...
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
  // ...existing code...
  // ...existing code...
      }
      
      const og = generateOpenGraphMetadata(config)
      
      expect(og.type).toBe('website')
      expect(og.title).toBe('Test Page')
      expect(og.description).toBe('Test description for Open Graph')
  // ...existing code...
      expect(og.images).toBeInstanceOf(Array)
  // ...existing code...
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
  // ...existing code...
      }
      
      const twitter = generateTwitterMetadata(config)
      
      expect(twitter.card).toBe('summary_large_image')
      expect(twitter.title).toBe('Test Page')
      expect(twitter.description).toBe('Test description for Twitter')
      expect(twitter.site).toBeTruthy()
      expect(twitter.creator).toBeTruthy()
      expect(twitter.images).toBeInstanceOf(Array)
  // ...existing code...
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
  // ...existing code...
        'Tech Startup'
      )
      
      expect(openGraph.title).toContain('E-commerce Platform')
      expect(openGraph.description).toContain('Tech Startup')
      expect(openGraph.type).toBe('article')
  // ...existing code...
      
      expect(twitter.title).toContain('E-commerce Platform')
      expect(twitter.description).toContain('Tech Startup')
}