/**
 * Content Loading Utilities
 * Handles loading and validation of content from JSON/YAML files
 */

import { promises as fs } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { z } from 'zod';
import type { 
  ContentModel, 
  ContentLoadOptions, 
  ContentValidationResult,
  PageContent,
  BusinessInfo,
  ServiceContent,
  TestimonialContent
} from '../types/content';
import { ContentModelSchema } from '../schemas/content';

/**
 * Content file paths configuration
 */
const CONTENT_PATHS = {
  base: process.env.NODE_ENV === 'production' ? './content' : './src/content',
  pages: 'pages',
  global: 'global',
  services: 'services.json',
  testimonials: 'testimonials.json',
} as const;

/**
 * Supported file extensions for content files
 */
const SUPPORTED_EXTENSIONS = ['.json', '.yaml', '.yml'] as const;
type SupportedExtension = typeof SUPPORTED_EXTENSIONS[number];

/**
 * Content loading error class
 */
export class ContentLoadError extends Error {
  constructor(
    message: string,
    public readonly filePath?: string,
    public readonly validationErrors?: z.ZodError
  ) {
    super(message);
    this.name = 'ContentLoadError';
  }
}

/**
 * Validates content against a Zod schema
 */
export function validateContent<T>(
  content: unknown,
  schema: z.ZodSchema<T>
): ContentValidationResult & { data?: T } {
  try {
    const data = schema.parse(content);
    return {
      isValid: true,
      errors: [],
      warnings: [],
      data,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        errors: error.issues.map(err => `${err.path.join('.')}: ${err.message}`),
        warnings: [],
      };
    }
    
    return {
      isValid: false,
      errors: [error instanceof Error ? error.message : 'Unknown validation error'],
      warnings: [],
    };
  }
}

/**
 * Determines file extension and validates it's supported
 */
function getFileExtension(filePath: string): SupportedExtension {
  const ext = path.extname(filePath).toLowerCase() as SupportedExtension;
  if (!SUPPORTED_EXTENSIONS.includes(ext)) {
    throw new ContentLoadError(`Unsupported file extension: ${ext}. Supported: ${SUPPORTED_EXTENSIONS.join(', ')}`);
  }
  return ext;
}

/**
 * Parses file content based on extension
 */
function parseFileContent(content: string, extension: SupportedExtension, filePath: string): unknown {
  try {
    switch (extension) {
      case '.json':
        return JSON.parse(content);
      case '.yaml':
      case '.yml':
        return yaml.load(content);
      default:
        throw new ContentLoadError(`Unsupported file extension: ${extension}`, filePath);
    }
  } catch (error) {
    throw new ContentLoadError(
      `Failed to parse ${extension} file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      filePath
    );
  }
}

/**
 * Loads and parses a single content file
 */
export async function loadContentFile<T>(
  filePath: string,
  schema?: z.ZodSchema<T>,
  options: ContentLoadOptions = {}
): Promise<T> {
  try {
    // Check if file exists
    await fs.access(filePath);
    
    // Read file content
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Parse based on extension
    const extension = getFileExtension(filePath);
    const parsedContent = parseFileContent(content, extension, filePath);
    
    // Validate if schema provided
    if (schema) {
      const validation = validateContent(parsedContent, schema);
      if (!validation.isValid) {
        throw new ContentLoadError(
          `Content validation failed for ${filePath}`,
          filePath
        );
      }
      return validation.data as T;
    }
    
    return parsedContent as T;
  } catch (error) {
    if (error instanceof ContentLoadError) {
      throw error;
    }
    
    // Handle file not found with fallback option
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      if (options.fallback) {
        console.warn(`Content file not found: ${filePath}, using fallback`);
        return {} as T;
      }
      throw new ContentLoadError(`Content file not found: ${filePath}`, filePath);
    }
    
    throw new ContentLoadError(
      `Failed to load content file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      filePath
    );
  }
}

/**
 * Finds content file with supported extensions
 */
async function findContentFile(basePath: string, name: string): Promise<string | null> {
  for (const ext of SUPPORTED_EXTENSIONS) {
    const filePath = `${basePath}/${name}${ext}`;
    try {
      await fs.access(filePath);
      return filePath;
    } catch {
      // File doesn't exist, try next extension
    }
  }
  return null;
}

/**
 * Loads page content by page name
 */
export async function loadPageContent(
  pageName: string,
  options: ContentLoadOptions = {}
): Promise<PageContent> {
  const basePath = path.join(process.cwd(), CONTENT_PATHS.base, CONTENT_PATHS.pages);
  const filePath = await findContentFile(basePath, pageName);
  
  if (!filePath) {
    if (options.fallback) {
      console.warn(`Page content not found for: ${pageName}, using fallback`);
      return createFallbackPageContent(pageName);
    }
    throw new ContentLoadError(`Page content file not found for: ${pageName}`);
  }
  
  return loadContentFile(filePath, undefined, options) as Promise<PageContent>;
}

/**
 * Loads business information
 */
export async function loadBusinessInfo(options: ContentLoadOptions = {}): Promise<BusinessInfo> {
  const basePath = path.join(process.cwd(), CONTENT_PATHS.base, CONTENT_PATHS.global);
  const filePath = await findContentFile(basePath, 'business');
  
  if (!filePath) {
    if (options.fallback) {
      console.warn('Business info not found, using fallback');
      return createFallbackBusinessInfo();
    }
    throw new ContentLoadError('Business info file not found');
  }
  
  return loadContentFile(filePath, undefined, options) as Promise<BusinessInfo>;
}

/**
 * Loads all services
 */
export async function loadServices(options: ContentLoadOptions = {}): Promise<ServiceContent[]> {
  const filePath = path.join(process.cwd(), CONTENT_PATHS.base, CONTENT_PATHS.services);
  
  try {
    const services = await loadContentFile(filePath, undefined, options);
    return services as ServiceContent[];
  } catch (error) {
    if (options.fallback) {
      console.warn('Services file not found, using fallback');
      return createFallbackServices();
    }
    throw error;
  }
}

/**
 * Loads all testimonials
 */
export async function loadTestimonials(options: ContentLoadOptions = {}): Promise<TestimonialContent[]> {
  const filePath = path.join(process.cwd(), CONTENT_PATHS.base, CONTENT_PATHS.testimonials);
  
  try {
    const testimonials = await loadContentFile(filePath, undefined, options);
    return testimonials as TestimonialContent[];
  } catch (error) {
    if (options.fallback) {
      console.warn('Testimonials file not found, using fallback');
      return createFallbackTestimonials();
    }
    throw error;
  }
}

/**
 * Loads complete content model
 */
export async function loadContentModel(options: ContentLoadOptions = {}): Promise<ContentModel> {
  try {
    // Load all content components
    const [businessInfo, services, testimonials] = await Promise.all([
      loadBusinessInfo(options),
      loadServices(options),
      loadTestimonials(options),
    ]);
    
    // Load page content for main pages
    const pageNames = ['home', 'about', 'services', 'portfolio', 'contact'];
    const pages: Record<string, PageContent> = {};
    
    for (const pageName of pageNames) {
      try {
        pages[pageName] = await loadPageContent(pageName, options);
      } catch (error) {
        if (options.fallback) {
          console.warn(`Failed to load page content for ${pageName}, using fallback`);
          pages[pageName] = createFallbackPageContent(pageName);
        } else {
          throw error;
        }
      }
    }
    
    // Create content model
    const contentModel: ContentModel = {
      pages,
      global: {
        business: businessInfo,
        navigation: createDefaultNavigation(),
        footer: createDefaultFooter() as unknown as { description: string; quickLinks: { label: string; href: string; }[]; legalLinks: { label: string; href: string; }[]; },
        seo: createDefaultGlobalSEO(),
      },
      services,
      testimonials,
    };
    
    // Validate complete model
    const validation = validateContent(contentModel, ContentModelSchema);
    if (!validation.isValid) {
      throw new ContentLoadError(
        'Content model validation failed'
      );
    }
    
    return contentModel;
  } catch (error) {
    if (error instanceof ContentLoadError) {
      throw error;
    }
    throw new ContentLoadError(
      `Failed to load content model: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

/**
 * Fallback content creators for development/testing
 */
function createFallbackPageContent(pageName: string): PageContent {
  return {
    hero: {
      headline: `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} Page`,
      subheadline: 'Professional Technology Solutions',
      description: 'This is placeholder content that needs to be replaced with actual content.',
      primaryCTA: {
        text: 'Get Started',
        href: '/contact',
        variant: 'primary',
      },
    },
    services: [],
    testimonials: [],
    callToAction: {
      headline: 'Ready to Get Started?',
      description: 'Contact us today to discuss your technology needs.',
      primaryButton: {
        text: 'Contact Us',
        href: '/contact',
      },
      backgroundType: 'solid',
    },
    seo: {
      title: `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} - Three Rivers Tech`,
      description: 'Professional technology solutions for your business needs.',
      keywords: ['technology', 'solutions', 'business'],
      openGraph: {
        title: `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} - Three Rivers Tech`,
        description: 'Professional technology solutions for your business needs.',
        images: [{
          url: '/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'Three Rivers Tech',
        }],
        type: 'website',
        siteName: 'Three Rivers Tech',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} - Three Rivers Tech`,
        description: 'Professional technology solutions for your business needs.',
        images: ['/company_logo.png'],
      },
    },
  };
}

function createFallbackBusinessInfo(): BusinessInfo {
  return {
    name: 'Three Rivers Tech',
    description: 'Comprehensive technology solutions for your business',
    phone: '(555) 123-4567',
    email: 'info@threeriverstech.com',
    address: {
      street: '123 Tech Street',
      city: 'Pittsburgh',
      state: 'PA',
      zipCode: '15201',
      country: 'United States',
    },
    hours: [
      { day: 'Monday', open: '9:00 AM', close: '5:00 PM' },
      { day: 'Tuesday', open: '9:00 AM', close: '5:00 PM' },
      { day: 'Wednesday', open: '9:00 AM', close: '5:00 PM' },
      { day: 'Thursday', open: '9:00 AM', close: '5:00 PM' },
      { day: 'Friday', open: '9:00 AM', close: '5:00 PM' },
      { day: 'Saturday', closed: true, open: '', close: '' },
      { day: 'Sunday', closed: true, open: '', close: '' },
    ],
    socialMedia: {},
    specialties: ['Software Development', 'IT Consulting', 'SaaS Products', 'Computer Repair'],
    foundedYear: 2014,
    employeeCount: '2-10',
    tagline: 'Technology Solutions That Work',
    mission: 'To provide reliable technology solutions that help businesses succeed.',
    values: ['Quality', 'Reliability', 'Innovation', 'Customer Service'],
  };
}

function createFallbackServices(): ServiceContent[] {
  return [
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs.',
      shortDescription: 'Custom software solutions',
      icon: 'FaCode',
      features: ['Custom Web Applications', 'Mobile App Development', 'API Development'],
      benefits: ['Increased Efficiency', 'Scalable Solutions', 'Expert Support'],
      pricing: {
        customPricing: true,
      },
      cta: { text: 'Learn More', href: '/services/software-development' },
    },
  ];
}

function createFallbackTestimonials(): TestimonialContent[] {
  return [
    {
      id: 'testimonial-1',
      name: 'John Doe',
      company: 'Example Corp',
      role: 'CEO',
      content: 'Great service and professional results.',
      rating: 5,
    },
  ];
}

function createDefaultNavigation() {
  return [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];
}

function createDefaultFooter() {
  return {
    description: 'Three Rivers Tech provides comprehensive technology solutions.',
    sections: [
      {
        title: 'Services',
        links: [
          { label: 'Software Development', href: '/services/software-development' },
          { label: 'IT Consulting', href: '/services/it-consulting' },
          { label: 'SaaS Products', href: '/services/saas-products' },
          { label: 'Computer Repair', href: '/services/computer-repair' },
        ],
      },
    ],
    bottomText: '© 2024 Three Rivers Tech. All rights reserved.',
    showSocialMedia: true,
  };
}

function createDefaultGlobalSEO() {
  return {
    siteName: 'Three Rivers Tech',
    defaultTitle: 'Three Rivers Tech - Comprehensive Technology Solutions',
    defaultDescription: 'Professional technology solutions including software development, IT consulting, SaaS products, and computer repair services.',
    defaultKeywords: ['technology', 'software development', 'IT consulting', 'SaaS', 'computer repair'],
    defaultImage: '/images/og-default.jpg',
  };
}