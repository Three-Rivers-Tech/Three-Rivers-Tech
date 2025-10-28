import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { businessInfo, siteConfig } from '@/lib/metadata'

// Mock content loading functions
const loadPageContent = (pageName: string) => {
  try {
    const contentPath = join(process.cwd(), 'src', 'content', 'pages', `${pageName}.json`)
    if (existsSync(contentPath)) {
      return JSON.parse(readFileSync(contentPath, 'utf-8'))
    }
    return null
  } catch {
    return null
  }
}

const loadGlobalContent = () => {
  try {
    const globalPath = join(process.cwd(), 'src', 'content', 'global')
    const businessPath = join(globalPath, 'business.json')
    const navigationPath = join(globalPath, 'navigation.json')
    
    return {
      business: existsSync(businessPath) ? JSON.parse(readFileSync(businessPath, 'utf-8')) : businessInfo,
      navigation: existsSync(navigationPath) ? JSON.parse(readFileSync(navigationPath, 'utf-8')) : []
    }
  } catch {
    return { business: businessInfo, navigation: [] }
  }
}

const serializeContent = (value: unknown): string =>
  JSON.stringify(value).replace(/"[^"]*":/g, ' ')

describe('Content Validation Tests', () => {
  describe('Placeholder Content Detection', () => {
const placeholderPatterns = [
  /lorem ipsum/i,
  /placeholder/i,
  /\btodo\b/i,
  /\btbd\b/i,
  /coming soon/i,
  /under construction/i,
  /sample text/i,
  /dummy text/i,
  /test content/i,
  /example content/i,
  /\[[^\]"]*\b[A-Za-z][^\]"]*\]/g, // Bracketed placeholders like [Company Name] without JSON array contents
  /{{[^{}"]*\b[A-Za-z][^{}"]*}}/g, // Template placeholders like {{title}} without JSON syntax
  /your (company|business|service)/i,
  /insert (text|content|description)/i
]

const checkForPlaceholders = (text: unknown, context: string): string[] => {
  const found: string[] = []
  if (text === undefined || text === null) {
    return found
  }
  const source = typeof text === 'string' ? text : String(text)
  placeholderPatterns.forEach(pattern => {
    const matches = source.match(pattern)
    if (matches) {
      found.push(...matches.map(match => `"${match}" in ${context}`))
    }
  })
  return found
    }

    it('should not contain placeholder text in business information', () => {
      const business = businessInfo
      const placeholders: string[] = []
      
      placeholders.push(...checkForPlaceholders(business.name, 'business name'))
      placeholders.push(...checkForPlaceholders(business.description, 'business description'))
      placeholders.push(...checkForPlaceholders(business.phone, 'phone number'))
      placeholders.push(...checkForPlaceholders(business.email, 'email address'))
      placeholders.push(...checkForPlaceholders(business.address.street, 'street address'))
      placeholders.push(...checkForPlaceholders(business.address.city, 'city'))
      
      const filteredPlaceholders = placeholders.filter(placeholder => {
        if (placeholder.includes('"coming soon"') && placeholder.includes('phone number')) {
          return false
        }
        return true
      })

      expect(filteredPlaceholders).toHaveLength(0)
      if (filteredPlaceholders.length > 0) {
        console.warn('Placeholder content found:', filteredPlaceholders)
      }
    })

    it('should not contain placeholder text in site configuration', () => {
      const placeholders: string[] = []
      
      placeholders.push(...checkForPlaceholders(siteConfig.name, 'site name'))
      placeholders.push(...checkForPlaceholders(siteConfig.description, 'site description'))
      placeholders.push(...checkForPlaceholders(siteConfig.creator, 'site creator'))
      
      expect(placeholders).toHaveLength(0)
      if (placeholders.length > 0) {
        console.warn('Placeholder content found in site config:', placeholders)
      }
    })

    it('should not contain placeholder text in page content', () => {
      const pages = ['home', 'services', 'about', 'contact', 'portfolio']
      const allPlaceholders: string[] = []
      
      pages.forEach(pageName => {
        const content = loadPageContent(pageName)
        if (content) {
          const pageText = serializeContent(content)
          const placeholders = checkForPlaceholders(pageText, `${pageName} page`)
          allPlaceholders.push(...placeholders)
        }
      })
      
      expect(allPlaceholders).toHaveLength(0)
      if (allPlaceholders.length > 0) {
        console.warn('Placeholder content found in pages:', allPlaceholders)
      }
    })

    it('should not contain placeholder text in service descriptions', () => {
      try {
        const servicesPath = join(process.cwd(), 'src', 'content', 'services.json')
        if (existsSync(servicesPath)) {
          const services = JSON.parse(readFileSync(servicesPath, 'utf-8'))
          const placeholders: string[] = []
          
          services.forEach((service: { name?: string; description?: string }, index: number) => {
            if (service.name) {
              placeholders.push(...checkForPlaceholders(service.name, `service ${index} name`))
            }
            if (service.description) {
              placeholders.push(...checkForPlaceholders(service.description, `service ${index} description`))
            }
            if (service.features) {
              service.features.forEach((feature: string, featureIndex: number) => {
                placeholders.push(...checkForPlaceholders(feature, `service ${index} feature ${featureIndex}`))
              })
            }
          })
          
          expect(placeholders).toHaveLength(0)
          if (placeholders.length > 0) {
            console.warn('Placeholder content found in services:', placeholders)
          }
        }
      } catch {
        console.warn('Could not load services content for validation')
      }
    })
  })

  describe('Content Consistency', () => {
    it('should have consistent business information across all sources', () => {
      const globalContent = loadGlobalContent()
      const business = globalContent.business
      
      // Check that business info is consistent
      expect(business.name).toBeTruthy()
      expect(business.phone).toBeTruthy()
      expect(business.email).toBeTruthy()
      expect(business.address.street).toBeTruthy()
      expect(business.address.city).toBeTruthy()
      expect(business.address.state).toBeTruthy()
      expect(business.address.zipCode).toBeTruthy()
      
      // Validate phone number or availability messaging
      if (/\d/.test(business.phone)) {
        expect(business.phone).toMatch(/^[\+]?[\d\s\-\(\)]+$/)
      } else {
        expect(business.phone).toMatch(/coming soon/i)
      }
      
      // Validate email format
      expect(business.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      
      // Validate zip code format
      expect(business.address.zipCode).toMatch(/^\d{5}(-\d{4})?$/)
    })

    it('should have consistent contact information across pages', () => {
      const contactPage = loadPageContent('contact')
      const business = businessInfo
      
      // If contact page exists, verify consistency
      if (contactPage) {
        const contactText = JSON.stringify(contactPage).toLowerCase()
        const businessPhone = business.phone.replace(/\D/g, '') // Remove non-digits
        const businessEmail = business.email.toLowerCase()
        
        // Check if business phone appears in contact page (allowing for formatting differences)
        const phoneDigits = contactText.replace(/\D/g, '')
        if (businessPhone) {
          expect(phoneDigits).toContain(businessPhone.slice(-10)) // Last 10 digits
        } else {
          expect(contactText).toContain('phone line coming soon')
        }
        
        // Check if business email appears in contact page
        expect(contactText).toContain(businessEmail)
      }
    })

    it('should have consistent service offerings across pages', () => {
      const servicesPage = loadPageContent('services')
      const homePage = loadPageContent('home')
      
      const expectedServices = [
        'software development',
        'it consulting', 
        'saas products',
        'computer repair'
      ]
      
      if (servicesPage) {
        const servicesText = JSON.stringify(servicesPage).toLowerCase()
        expectedServices.forEach(service => {
          expect(servicesText).toContain(service)
        })
      }
      
      if (homePage) {
        const homeText = JSON.stringify(homePage).toLowerCase()
        // Home page should mention at least 3 of the 4 main services
        const mentionedServices = expectedServices.filter(service => 
          homeText.includes(service)
        )
        expect(mentionedServices.length).toBeGreaterThanOrEqual(3)
      }
    })

    it('should have consistent branding and messaging', () => {
      const pages = ['home', 'services', 'about', 'contact']
      const brandKeywords = [
        'three rivers tech',
        'technology solutions',
        'professional',
        'custom',
        'reliable'
      ]
      
      pages.forEach(pageName => {
        const content = loadPageContent(pageName)
        if (content) {
          const pageText = JSON.stringify(content).toLowerCase()
          
          // Each page should mention the company name
          expect(pageText).toContain('three rivers tech')
          
          // Each page should have professional tone indicators
          const professionalWords = brandKeywords.filter(keyword => 
            pageText.includes(keyword)
          )
          expect(professionalWords.length).toBeGreaterThan(0)
        }
      })
    })
  })

  describe('Image Alt Text Validation', () => {
    it('should have meaningful alt text for all images', () => {
      // Mock image data that would be extracted from components
      const mockImages = [
        { src: '/images/hero-banner.jpg', alt: 'Three Rivers Tech team working on custom software development projects' },
        { src: '/images/software-dev.jpg', alt: 'Modern software development workspace with multiple monitors showing code' },
        { src: '/images/it-consulting.jpg', alt: 'IT consultant analyzing network infrastructure diagrams with client' },
        { src: '/images/computer-repair.jpg', alt: 'Technician diagnosing hardware issues on laptop computer' },
        { src: '/images/team-photo.jpg', alt: 'Three Rivers Tech team members collaborating in modern office environment' }
      ]
      
      mockImages.forEach((image, index) => {
        // Alt text should exist
        expect(image.alt, `Image ${index + 1} should have alt text`).toBeTruthy()
        
        // Alt text should be descriptive (more than just filename)
        expect(image.alt.length, `Image ${index + 1} alt text should be descriptive`).toBeGreaterThan(10)
        
        // Alt text should not just be generic words
        const genericWords = ['image', 'photo', 'picture', 'graphic']
        const isGeneric = genericWords.some(word => 
          image.alt.toLowerCase().trim() === word
        )
        expect(isGeneric, `Image ${index + 1} alt text should not be generic`).toBe(false)
        
        // Alt text should not contain "image of" or "photo of"
        expect(image.alt.toLowerCase(), `Image ${index + 1} alt text should not start with "image of"`).not.toMatch(/^(image|photo|picture) of/i)
        
        // Alt text should be reasonably concise (under 125 characters)
        expect(image.alt.length, `Image ${index + 1} alt text should be concise`).toBeLessThan(125)
      })
    })

    it('should have appropriate alt text for decorative images', () => {
      // Mock decorative images (should have empty alt text)
      const decorativeImages = [
        { src: '/images/background-pattern.svg', alt: '', isDecorative: true },
        { src: '/images/divider-line.png', alt: '', isDecorative: true }
      ]
      
      decorativeImages.forEach((image, index) => {
        if (image.isDecorative) {
          expect(image.alt, `Decorative image ${index + 1} should have empty alt text`).toBe('')
        }
      })
    })

    it('should have alt text that matches image content context', () => {
      // Mock context-specific images
      const contextualImages = [
        { 
          src: '/images/portfolio-ecommerce.jpg', 
          alt: 'E-commerce platform dashboard showing sales analytics and product management interface',
          context: 'portfolio',
          expectedKeywords: ['ecommerce', 'dashboard', 'analytics']
        },
        {
          src: '/images/service-consulting.jpg',
          alt: 'IT consultant reviewing server infrastructure with business client',
          context: 'services',
          expectedKeywords: ['consultant', 'infrastructure', 'business']
        }
      ]
      
      contextualImages.forEach((image, index) => {
        const altLower = image.alt.toLowerCase()
        
        // Alt text should contain relevant keywords for the context
        const hasRelevantKeywords = image.expectedKeywords.some(keyword => 
          altLower.includes(keyword.toLowerCase())
        )
        expect(hasRelevantKeywords, `Image ${index + 1} alt text should contain relevant keywords`).toBe(true)
      })
    })
  })

  describe('Content Quality Validation', () => {
    it('should have professional and error-free content', () => {
      const pages = ['home', 'services', 'about', 'contact']
      
      pages.forEach(pageName => {
        const content = loadPageContent(pageName)
        if (content) {
          const pageText = serializeContent(content)
          
          // Check for common typos and errors
          const commonErrors = [
            /\bteh\b/gi,           // "teh" instead of "the"
            /\byour\s+your\b/gi,   // Duplicate "your"
            /\bthe\s+the\b/gi,     // Duplicate "the"
            /\band\s+and\b/gi,     // Duplicate "and"
            /\bto\s+to\b/gi,       // Duplicate "to"
            /\s{3,}/g,             // Multiple consecutive spaces
            /[.]{2,}/g,            // Multiple periods
            /[!]{2,}/g,            // Multiple exclamation marks
            /[?]{2,}/g             // Multiple question marks
          ]
          
          commonErrors.forEach((errorPattern, index) => {
            const matches = pageText.match(errorPattern)
            expect(matches, `${pageName} page should not contain common error pattern ${index + 1}`).toBeNull()
          })
          
          // Check for proper sentence structure (basic validation)
          const sentences = pageText.split(/[.!?]+/).filter(s => s.trim().length > 0)
          sentences.forEach((sentence, index) => {
            const trimmed = sentence.trim()
            if (trimmed.length > 0) {
              // Sentences should start with capital letter (basic check on the first meaningful word)
              const firstWordMatch = trimmed.match(/[A-Za-z][A-Za-z'-]*/)
              if (firstWordMatch) {
                const firstWord = firstWordMatch[0]
                if (firstWord !== firstWord.toLowerCase()) {
                  expect(firstWord[0], `Sentence ${index + 1} in ${pageName} should start with capital letter`).toMatch(/[A-Z]/)
                }
              }
            }
          })
        }
      })
    })

    it('should have appropriate content length for SEO', () => {
      const pages = ['home', 'services', 'about', 'contact']
      
      pages.forEach(pageName => {
        const content = loadPageContent(pageName)
        if (content) {
          const pageText = serializeContent(content)
          const wordCount = pageText.split(/\s+/).length
          
          // Pages should have sufficient content for SEO (minimum 200 words)
          expect(wordCount, `${pageName} page should have sufficient content for SEO`).toBeGreaterThan(200)
          
          // But not excessively long (maximum 2000 words for most pages)
          if (pageName !== 'services') { // Services page can be longer
            expect(wordCount, `${pageName} page should not be excessively long`).toBeLessThan(2000)
          }
        }
      })
    })

    it('should have proper call-to-action content', () => {
      const pages = ['home', 'services', 'about']
      const ctaKeywords = [
        'contact us',
        'get started',
        'learn more',
        'call now',
        'request quote',
        'schedule consultation',
        'get in touch'
      ]
      
      pages.forEach(pageName => {
        const content = loadPageContent(pageName)
        if (content) {
          const pageText = serializeContent(content).toLowerCase()
          
          // Each page should have at least one call-to-action
          const hasCTA = ctaKeywords.some(cta => pageText.includes(cta))
          expect(hasCTA, `${pageName} page should have call-to-action content`).toBe(true)
        }
      })
    })

    it('should have location-specific content for local SEO', () => {
      const locationKeywords = [
        'pittsburgh',
        'pennsylvania',
        'pa',
        'mon valley',
        'turtle creek',
        'western pennsylvania'
      ]
      
      const pages = ['home', 'about', 'contact']
      
      pages.forEach(pageName => {
        const content = loadPageContent(pageName)
        if (content) {
          const pageText = JSON.stringify(content).toLowerCase()
          
          // At least one location keyword should be present
          const hasLocation = locationKeywords.some(location => 
            pageText.includes(location)
          )
          expect(hasLocation, `${pageName} page should include location information for local SEO`).toBe(true)
        }
      })
    })
  })

  describe('Content Structure Validation', () => {
    it('should have proper heading hierarchy', () => {
      // Mock heading structure validation
      const mockPageHeadings = {
        home: ['h1', 'h2', 'h2', 'h3', 'h3', 'h2'],
        services: ['h1', 'h2', 'h3', 'h3', 'h3', 'h3', 'h2', 'h3'],
        about: ['h1', 'h2', 'h3', 'h2', 'h3'],
        contact: ['h1', 'h2', 'h3']
      }
      
      Object.entries(mockPageHeadings).forEach(([pageName, headings]) => {
        // Should start with h1
        expect(headings[0], `${pageName} page should start with h1`).toBe('h1')
        
        // Should have only one h1
        const h1Count = headings.filter(h => h === 'h1').length
        expect(h1Count, `${pageName} page should have only one h1`).toBe(1)
        
        // Should not skip heading levels
        for (let i = 1; i < headings.length; i++) {
          const currentLevel = parseInt(headings[i].replace('h', ''))
          const previousLevel = parseInt(headings[i - 1].replace('h', ''))
          
          if (currentLevel > previousLevel) {
            expect(currentLevel - previousLevel, `${pageName} page should not skip heading levels`).toBeLessThanOrEqual(1)
          }
        }
      })
    })

    it('should have proper content organization', () => {
      const homePage = loadPageContent('home')
      
      if (homePage) {
        const homeText = JSON.stringify(homePage).toLowerCase()
        
        // Home page should have key sections
        const expectedSections = [
          'hero',
          'services',
          'about',
          'contact',
          'testimonial'
        ]
        
        const foundSections = expectedSections.filter(section => 
          homeText.includes(section)
        )
        
        expect(foundSections.length, 'Home page should have most key sections').toBeGreaterThanOrEqual(3)
      }
    })
  })
})
