// Social media image mappings for different pages and services
export const socialImages = {
  // Default/fallback images
  default: "/company_logo.png",
  
  // Service-specific images
  services: {
    "software-development": "/service-icon-dev.png",
    "it-consulting": "/service-icon-consulting.png", 
    "saas-products": "/service-icon-saas.png",
    "computer-repair": "/service-icon-repair.png"
  },
  
  // Page-specific images
  pages: {
    home: "/company_logo.png",
    about: "/company_logo.png",
    contact: "/company_logo.png",
    services: "/service-icon-1.png",
    portfolio: "/portfolio-ecommerce.jpg"
  },
  
  // Portfolio project images
  portfolio: {
    "e-commerce-platform": "/portfolio-ecommerce.jpg",
    "network-infrastructure": "/portfolio-network.jpg", 
    "task-management-saas": "/portfolio-saas.jpg",
    "data-recovery-service": "/portfolio-repair.jpg",
    "mobile-banking-app": "/portfolio-banking.jpg",
    "cloud-migration": "/portfolio-cloud.jpg"
  },
  
  // Feature/benefit images
  features: {
    custom: "/feature-icon-custom.png",
    experience: "/feature-icon-experience.png",
    pricing: "/feature-icon-pricing.png",
    support: "/feature-icon-support.png"
  }
};

/**
 * Get the appropriate social media image for a page or service
 */
export function getSocialImage(
  type: "page" | "service" | "portfolio" | "feature",
  key: string
): string {
  switch (type) {
    case "page":
      return socialImages.pages[key as keyof typeof socialImages.pages] || socialImages.default;
    case "service":
      return socialImages.services[key as keyof typeof socialImages.services] || socialImages.default;
    case "portfolio":
      return socialImages.portfolio[key as keyof typeof socialImages.portfolio] || socialImages.default;
    case "feature":
      return socialImages.features[key as keyof typeof socialImages.features] || socialImages.default;
    default:
      return socialImages.default;
  }
}

/**
 * Generate social media image alt text
 */
export function generateImageAltText(
  type: "page" | "service" | "portfolio" | "feature",
  key: string,
  title?: string
): string {
  const siteName = "Three Rivers Tech";
  
  switch (type) {
    case "page":
      return `${siteName} - ${title || key.charAt(0).toUpperCase() + key.slice(1)}`;
    case "service":
      const serviceName = key.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      return `${siteName} - ${serviceName} Services`;
    case "portfolio":
      const projectName = key.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      return `${siteName} Portfolio - ${projectName} Case Study`;
    case "feature":
      const featureName = key.charAt(0).toUpperCase() + key.slice(1);
      return `${siteName} - ${featureName} Feature`;
    default:
      return `${siteName} - ${title || 'Technology Solutions'}`;
  }
}

/**
 * Create optimized social media metadata with appropriate images
 */
export function createOptimizedSocialMetadata(
  pageType: "page" | "service" | "portfolio" | "feature",
  pageKey: string,
  config: {
    title: string;
    description: string;
    url?: string;
    customImage?: string;
  }
) {
  const image = config.customImage || getSocialImage(pageType, pageKey);
  const imageAlt = generateImageAltText(pageType, pageKey, config.title);
  
  return {
    image,
    imageAlt,
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: "image/png"
        }
      ],
      type: "website" as const,
      siteName: "Three Rivers Tech",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image" as const,
      title: config.title,
      description: config.description,
      images: [
        {
          url: image,
          alt: imageAlt,
          width: 1200,
          height: 600
        }
      ],
      site: "@three_rivers_tech",
      creator: "@three_rivers_tech"
    }
  };
}