// Content Management Types for Three Rivers Tech Website

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface SocialMediaLinks {
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface BusinessInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: Address;
  hours: BusinessHours[];
  socialMedia: SocialMediaLinks;
  foundedYear: number;
  employeeCount: string;
  specialties: string[];
  tagline: string;
  mission: string;
  values: string[];
}

export interface OpenGraphConfig {
  title: string;
  description: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
  type: 'website' | 'article';
  siteName: string;
  locale: string;
}

export interface TwitterConfig {
  card: 'summary' | 'summary_large_image';
  title: string;
  description: string;
  images: string[];
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  openGraph: OpenGraphConfig;
  twitter: TwitterConfig;
  structuredData?: Record<string, unknown>;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  backgroundImage?: string;
  features?: string[];
}

export interface ServiceContent {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  pricing: {
    startingPrice?: string;
    priceRange?: string;
    customPricing?: boolean;
  };
  cta: CTAButton;
  image?: string;
}

export interface TestimonialContent {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  service?: string;
  image?: string;
}

export interface CTAContent {
  headline: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
  backgroundType: 'gradient' | 'image' | 'solid';
  backgroundColor?: string;
  backgroundImage?: string;
}

export interface PageContent {
  hero: HeroContent;
  services: ServiceContent[];
  testimonials: TestimonialContent[];
  callToAction: CTAContent;
  seo: SEOConfig;
}

export interface ContentModel {
  pages: {
    [key: string]: PageContent;
  };
  global: {
    business: BusinessInfo;
    navigation: Array<{
      label: string;
      href: string;
      children?: Array<{
        label: string;
        href: string;
      }>;
    }>;
    footer: {
      description: string;
      quickLinks: Array<{
        label: string;
        href: string;
      }>;
      legalLinks: Array<{
        label: string;
        href: string;
      }>;
    };
    seo: {
      siteName: string;
      defaultTitle: string;
      defaultDescription: string;
      defaultKeywords: string[];
      twitterHandle?: string;
      facebookAppId?: string;
    };
  };
  services: ServiceContent[];
  testimonials: TestimonialContent[];
}

export interface ContentLoadOptions {
  environment?: 'development' | 'production';
  locale?: string;
  validateContent?: boolean;
  fallback?: boolean;
}

export interface ContentValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}