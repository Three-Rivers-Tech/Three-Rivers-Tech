/**
 * Content Validation Schemas using Zod
 * Provides runtime type checking for all content types
 */

import { z } from 'zod';

// Business Hours Schema
export const BusinessHoursSchema = z.object({
  day: z.string().min(1, 'Day is required'),
  open: z.string().regex(/^\d{1,2}:\d{2}(AM|PM)$/i, 'Invalid time format (use HH:MM AM/PM)'),
  close: z.string().regex(/^\d{1,2}:\d{2}(AM|PM)$/i, 'Invalid time format (use HH:MM AM/PM)'),
  closed: z.boolean().optional(),
});

// Social Media Links Schema
export const SocialMediaLinksSchema = z.object({
  facebook: z.string().url('Invalid Facebook URL').optional(),
  twitter: z.string().url('Invalid Twitter URL').optional(),
  linkedin: z.string().url('Invalid LinkedIn URL').optional(),
  instagram: z.string().url('Invalid Instagram URL').optional(),
  youtube: z.string().url('Invalid YouTube URL').optional(),
});

// Business Info Schema
export const BusinessInfoSchema = z.object({
  name: z.string().min(1, 'Business name is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, 'Invalid phone number format'),
  email: z.string().email('Invalid email address'),
  address: z.object({
    street: z.string().min(1, 'Street address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(2, 'State is required'),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format'),
    country: z.string().min(2, 'Country is required'),
  }),
  hours: z.array(BusinessHoursSchema).min(1, 'At least one business hour entry is required'),
  socialMedia: SocialMediaLinksSchema,
  foundedYear: z.number().min(1900).max(new Date().getFullYear()).optional(),
  employeeCount: z.string().optional(),
  specialties: z.array(z.string().min(1)).min(1, 'At least one specialty is required'),
});

// Open Graph Config Schema
export const OpenGraphConfigSchema = z.object({
  title: z.string().min(1, 'OG title is required').max(60, 'OG title should be under 60 characters'),
  description: z.string().min(1, 'OG description is required').max(160, 'OG description should be under 160 characters'),
  images: z.array(z.object({
    url: z.string().url('Invalid image URL'),
    width: z.number().positive('Width must be positive'),
    height: z.number().positive('Height must be positive'),
    alt: z.string().min(1, 'Alt text is required'),
  })).min(1, 'At least one OG image is required'),
  type: z.enum(['website', 'article']),
  siteName: z.string().min(1, 'Site name is required'),
  locale: z.string().min(2, 'Locale is required'),
});

// Twitter Config Schema
export const TwitterConfigSchema = z.object({
  card: z.enum(['summary', 'summary_large_image']),
  site: z.string().optional(),
  creator: z.string().optional(),
  title: z.string().min(1, 'Twitter title is required').max(70, 'Twitter title should be under 70 characters'),
  description: z.string().min(1, 'Twitter description is required').max(200, 'Twitter description should be under 200 characters'),
  images: z.array(z.string().url('Invalid image URL')).optional(),
});

// SEO Config Schema
export const SEOConfigSchema = z.object({
  title: z.string().min(1, 'Title is required').max(60, 'Title should be under 60 characters'),
  description: z.string().min(1, 'Description is required').max(160, 'Description should be under 160 characters'),
  keywords: z.array(z.string().min(1)).min(1, 'At least one keyword is required').max(10, 'Maximum 10 keywords recommended'),
  canonical: z.string().url('Invalid canonical URL').optional(),
  robots: z.object({
    index: z.boolean().optional(),
    follow: z.boolean().optional(),
    noarchive: z.boolean().optional(),
    nosnippet: z.boolean().optional(),
  }).optional(),
  openGraph: OpenGraphConfigSchema,
  twitter: TwitterConfigSchema,
  structuredData: z.record(z.string(), z.unknown()).optional(),
});

// Hero Content Schema
export const HeroContentSchema = z.object({
  headline: z.string().min(1, 'Headline is required').max(100, 'Headline should be under 100 characters'),
  subheadline: z.string().min(1, 'Subheadline is required').max(150, 'Subheadline should be under 150 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters').max(300, 'Description should be under 300 characters'),
  primaryCTA: z.object({
    text: z.string().min(1, 'CTA text is required'),
    href: z.string().min(1, 'CTA href is required'),
    variant: z.enum(['primary', 'secondary']),
  }),
  secondaryCTA: z.object({
    text: z.string().min(1, 'CTA text is required'),
    href: z.string().min(1, 'CTA href is required'),
    variant: z.enum(['primary', 'secondary']),
  }).optional(),
  backgroundImage: z.string().url('Invalid background image URL').optional(),
  features: z.array(z.string().min(1)).optional(),
});

// Service Content Schema
export const ServiceContentSchema = z.object({
  id: z.string().min(1, 'Service ID is required'),
  title: z.string().min(1, 'Service title is required'),
  description: z.string().min(10, 'Service description must be at least 10 characters'),
  shortDescription: z.string().min(1, 'Short description is required').max(150, 'Short description should be under 150 characters'),
  icon: z.string().min(1, 'Icon is required'),
  features: z.array(z.string().min(1)).min(1, 'At least one feature is required'),
  benefits: z.array(z.string().min(1)).min(1, 'At least one benefit is required'),
  pricing: z.object({
    startingPrice: z.string().optional(),
    priceRange: z.string().optional(),
    customPricing: z.boolean().optional(),
  }).optional(),
  cta: z.object({
    text: z.string().min(1, 'CTA text is required'),
    href: z.string().min(1, 'CTA href is required'),
  }),
  image: z.string().url('Invalid image URL').optional(),
});

// Testimonial Content Schema
export const TestimonialContentSchema = z.object({
  id: z.string().min(1, 'Testimonial ID is required'),
  name: z.string().min(1, 'Name is required'),
  company: z.string().min(1, 'Company is required'),
  role: z.string().min(1, 'Role is required'),
  content: z.string().min(10, 'Testimonial content must be at least 10 characters'),
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating cannot exceed 5'),
  image: z.string().url('Invalid image URL').optional(),
  service: z.string().optional(),
});

// CTA Content Schema
export const CTAContentSchema = z.object({
  headline: z.string().min(1, 'CTA headline is required'),
  description: z.string().min(1, 'CTA description is required'),
  primaryButton: z.object({
    text: z.string().min(1, 'Button text is required'),
    href: z.string().min(1, 'Button href is required'),
  }),
  secondaryButton: z.object({
    text: z.string().min(1, 'Button text is required'),
    href: z.string().min(1, 'Button href is required'),
  }).optional(),
  backgroundType: z.enum(['solid', 'gradient', 'image']),
  backgroundColor: z.string().optional(),
  backgroundImage: z.string().url('Invalid background image URL').optional(),
});

// Navigation Item Schema
export const NavigationItemSchema: z.ZodType<{
  label: string;
  href: string;
  children?: unknown[];
  external?: boolean;
}> = z.lazy(() => z.object({
  label: z.string().min(1, 'Navigation label is required'),
  href: z.string().min(1, 'Navigation href is required'),
  children: z.array(NavigationItemSchema).optional(),
  external: z.boolean().optional(),
}));

// Footer Content Schema
export const FooterContentSchema = z.object({
  description: z.string().min(1, 'Footer description is required'),
  sections: z.array(z.object({
    title: z.string().min(1, 'Section title is required'),
    links: z.array(z.object({
      label: z.string().min(1, 'Link label is required'),
      href: z.string().min(1, 'Link href is required'),
      external: z.boolean().optional(),
    })).min(1, 'At least one link is required'),
  })).min(1, 'At least one footer section is required'),
  bottomText: z.string().min(1, 'Bottom text is required'),
  showSocialMedia: z.boolean(),
});

// Page Content Schema
export const PageContentSchema = z.object({
  hero: HeroContentSchema,
  services: z.array(ServiceContentSchema),
  testimonials: z.array(TestimonialContentSchema),
  callToAction: CTAContentSchema,
  seo: SEOConfigSchema,
  customSections: z.array(z.object({
    id: z.string().min(1, 'Section ID is required'),
    type: z.string().min(1, 'Section type is required'),
    content: z.record(z.string(), z.unknown()),
  })).optional(),
});

// Global SEO Config Schema
export const GlobalSEOConfigSchema = z.object({
  siteName: z.string().min(1, 'Site name is required'),
  defaultTitle: z.string().min(1, 'Default title is required'),
  defaultDescription: z.string().min(1, 'Default description is required'),
  defaultKeywords: z.array(z.string().min(1)).min(1, 'At least one default keyword is required'),
  defaultImage: z.string().url('Invalid default image URL'),
  twitterHandle: z.string().optional(),
  facebookAppId: z.string().optional(),
  googleAnalyticsId: z.string().optional(),
  googleTagManagerId: z.string().optional(),
});

// Content Model Schema
export const ContentModelSchema = z.object({
  pages: z.record(z.string(), PageContentSchema),
  global: z.object({
    business: BusinessInfoSchema,
    navigation: z.array(NavigationItemSchema),
    footer: FooterContentSchema,
    seo: GlobalSEOConfigSchema,
  }),
  services: z.array(ServiceContentSchema),
  testimonials: z.array(TestimonialContentSchema),
});

// Export all schemas for use in validation
export const schemas = {
  BusinessHours: BusinessHoursSchema,
  SocialMediaLinks: SocialMediaLinksSchema,
  BusinessInfo: BusinessInfoSchema,
  OpenGraphConfig: OpenGraphConfigSchema,
  TwitterConfig: TwitterConfigSchema,
  SEOConfig: SEOConfigSchema,
  HeroContent: HeroContentSchema,
  ServiceContent: ServiceContentSchema,
  TestimonialContent: TestimonialContentSchema,
  CTAContent: CTAContentSchema,
  NavigationItem: NavigationItemSchema,
  FooterContent: FooterContentSchema,
  PageContent: PageContentSchema,
  GlobalSEOConfig: GlobalSEOConfigSchema,
  ContentModel: ContentModelSchema,
};