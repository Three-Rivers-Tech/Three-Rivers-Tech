/**
 * Image optimization utilities for modern web formats and responsive sizing
 * Supports WebP and AVIF formats with fallbacks
 */

export interface ImageSizes {
  width: number;
  height: number;
  breakpoint?: string;
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  quality?: number;
}

export interface ResponsiveImageConfig {
  src: string;
  alt: string;
  sizes: ImageSizes[];
  className?: string;
  priority?: boolean;
  quality?: number;
}

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(baseSrc: string, sizes: ImageSizes[]): string {
  return sizes
    .map(size => {
      const extension = baseSrc.split('.').pop();
      const baseName = baseSrc.replace(`.${extension}`, '');
      return `${baseName}-${size.width}w.webp ${size.width}w`;
    })
    .join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizesAttribute(sizes: ImageSizes[]): string {
  return sizes
    .map(size => {
      if (size.breakpoint) {
        return `(max-width: ${size.breakpoint}) ${size.width}px`;
      }
      return `${size.width}px`;
    })
    .join(', ');
}

/**
 * Get optimized image path with format support
 */
export function getOptimizedImagePath(src: string, format: 'webp' | 'avif' = 'webp'): string {
  const extension = src.split('.').pop();
  const baseName = src.replace(`.${extension}`, '');
  return `${baseName}.${format}`;
}

/**
 * Standard responsive image sizes for the website
 */
export const STANDARD_IMAGE_SIZES = {
  hero: [
    { width: 320, height: 240, breakpoint: '640px' },
    { width: 640, height: 480, breakpoint: '768px' },
    { width: 1024, height: 768, breakpoint: '1024px' },
    { width: 1280, height: 960 }
  ],
  card: [
    { width: 300, height: 200, breakpoint: '640px' },
    { width: 400, height: 267, breakpoint: '768px' },
    { width: 500, height: 333 }
  ],
  icon: [
    { width: 32, height: 32, breakpoint: '640px' },
    { width: 48, height: 48, breakpoint: '768px' },
    { width: 64, height: 64 }
  ],
  logo: [
    { width: 32, height: 32, breakpoint: '640px' },
    { width: 48, height: 48 }
  ],
  portfolio: [
    { width: 300, height: 192, breakpoint: '640px' },
    { width: 400, height: 256, breakpoint: '768px' },
    { width: 600, height: 384 }
  ]
};

/**
 * Comprehensive alt text mapping for all images
 */
export const IMAGE_ALT_TEXT = {
  // Company branding
  'company_logo.png': 'Three Rivers Tech - Comprehensive Technology Solutions Company Logo',
  
  // Service icons
  'service-icon-dev.png': 'Software Development Services - Custom web and mobile applications icon',
  'service-icon-consulting.png': 'IT Consulting Services - Infrastructure assessment and cloud migration icon',
  'service-icon-saas.png': 'SaaS Products - Innovative business solutions and software products icon',
  'service-icon-repair.png': 'Computer Repair Services - Hardware diagnostics and data recovery icon',
  'service-icon-1.png': 'Technology services icon representing comprehensive IT solutions',
  'it_consult.png': 'Small Business IT Consultation Services - Professional IT solutions for local businesses',
  'simple-web-design.png': 'Simple Website Design - Custom web design solution for local businesses',
  
  // Feature icons
  'feature-icon-1.png': 'Technology feature icon representing advanced capabilities',
  'feature-icon-custom.png': 'Custom Solutions - Tailored technology solutions for unique business needs',
  'feature-icon-experience.png': '10+ Years Experience - Proven track record in technology services',
  'feature-icon-pricing.png': 'Competitive Pricing - Affordable technology solutions for all business sizes',
  'feature-icon-support.png': '24/7 Support - Round-the-clock technical support and assistance',
  
  // Portfolio images
  'portfolio-banking.jpg': 'Banking Software Project - Secure financial application development case study',
  'portfolio-cloud.jpg': 'Cloud Migration Project - Enterprise cloud infrastructure transformation case study',
  'portfolio-ecommerce.jpg': 'E-commerce Platform - Custom online retail solution development case study',
  'portfolio-network.jpg': 'Network Infrastructure - IT consulting and network optimization case study',
  'portfolio-repair.jpg': 'Computer Repair Service - Hardware diagnostics and data recovery case study',
  'portfolio-saas.jpg': 'SaaS Product Development - Innovative software-as-a-service solution case study',
  
  // Favicon variations
  'favicon-circle-16x16.png': 'Three Rivers Tech favicon - 16x16 circular logo',
  'favicon-circle-32x32.png': 'Three Rivers Tech favicon - 32x32 circular logo',
  'favicon-circle-48x48.png': 'Three Rivers Tech favicon - 48x48 circular logo',
  'favicon-circle-192x192.png': 'Three Rivers Tech favicon - 192x192 circular logo for mobile',
  'favicon-rounded-16x16.png': 'Three Rivers Tech favicon - 16x16 rounded logo',
  'favicon-rounded-32x32.png': 'Three Rivers Tech favicon - 32x32 rounded logo',
  'favicon-rounded-48x48.png': 'Three Rivers Tech favicon - 48x48 rounded logo',
  'favicon-rounded-192x192.png': 'Three Rivers Tech favicon - 192x192 rounded logo for mobile',
  
  // SVG icons
  'file.svg': 'File document icon',
  'globe.svg': 'Global network and connectivity icon',
  'next.svg': 'Next.js framework logo',
  'vercel.svg': 'Vercel deployment platform logo',
  'window.svg': 'Application window interface icon'
};

/**
 * Get alt text for an image
 */
export function getImageAltText(src: string): string {
  const filename = src.split('/').pop() || src;
  return IMAGE_ALT_TEXT[filename as keyof typeof IMAGE_ALT_TEXT] || `Image: ${filename}`;
}

/**
 * Check if image format is supported by the browser
 */
export function supportsImageFormat(format: 'webp' | 'avif'): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  try {
    const mimeType = format === 'webp' ? 'image/webp' : 'image/avif';
    return canvas.toDataURL(mimeType).indexOf(`data:${mimeType}`) === 0;
  } catch {
    return false;
  }
}