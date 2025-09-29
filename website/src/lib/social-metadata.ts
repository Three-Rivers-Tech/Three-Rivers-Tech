import { siteConfig } from "./metadata";

// Social media image dimensions and configurations
export const socialImageConfig = {
  openGraph: {
    width: 1200,
    height: 630,
    type: "image/png"
  },
  twitter: {
    width: 1200,
    height: 600,
    type: "image/png"
  },
  linkedin: {
    width: 1200,
    height: 627,
    type: "image/png"
  }
};

// Interface for social media metadata configuration
export interface SocialMetadataConfig {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  siteName?: string;
  locale?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterSite?: string;
  twitterCreator?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

/**
 * Generate comprehensive Open Graph metadata
 */
export function generateOpenGraphMetadata(config: SocialMetadataConfig) {
  const {
    title,
    description,
    image = siteConfig.ogImage,
    imageAlt,
    url = siteConfig.url,
    type = "website",
    siteName = siteConfig.name,
    locale = "en_US",
    article
  } = config;

  const openGraph: Record<string, unknown> = {
    type,
    title,
    description,
    url,
    siteName,
    locale,
    images: [
      {
        url: image,
        width: socialImageConfig.openGraph.width,
        height: socialImageConfig.openGraph.height,
        alt: imageAlt || `${siteName} - ${title}`,
        type: socialImageConfig.openGraph.type
      }
    ]
  };

  // Add article-specific metadata
  if (type === "article" && article) {
    if (article.publishedTime) openGraph.publishedTime = article.publishedTime;
    if (article.modifiedTime) openGraph.modifiedTime = article.modifiedTime;
    if (article.author) openGraph.authors = [article.author];
    if (article.section) openGraph.section = article.section;
    if (article.tags) openGraph.tags = article.tags;
  }

  return openGraph;
}

/**
 * Generate comprehensive Twitter Card metadata
 */
export function generateTwitterMetadata(config: SocialMetadataConfig) {
  const {
    title,
    description,
    image = siteConfig.ogImage,
    imageAlt,
    twitterCard = "summary_large_image",
    twitterSite = "@three_rivers_tech",
    twitterCreator = "@three_rivers_tech"
  } = config;

  return {
    card: twitterCard,
    title,
    description,
    site: twitterSite,
    creator: twitterCreator,
    images: [
      {
        url: image,
        alt: imageAlt || `${siteConfig.name} - ${title}`,
        width: socialImageConfig.twitter.width,
        height: socialImageConfig.twitter.height
      }
    ]
  };
}

/**
 * Generate social media metadata for service pages
 */
export function generateServiceSocialMetadata(
  serviceName: string,
  serviceDescription: string,
  serviceImage?: string
): { openGraph: Record<string, unknown>; twitter: Record<string, unknown> } {
  const config: SocialMetadataConfig = {
    title: `${serviceName} Services - ${siteConfig.name}`,
    description: `Professional ${serviceName.toLowerCase()} services. ${serviceDescription}`,
    image: serviceImage || siteConfig.ogImage,
    imageAlt: `${siteConfig.name} - ${serviceName} Services`,
    url: `${siteConfig.url}/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
    type: "website"
  };

  return {
    openGraph: generateOpenGraphMetadata(config),
    twitter: generateTwitterMetadata(config)
  };
}

/**
 * Generate social media metadata for portfolio/case study pages
 */
export function generatePortfolioSocialMetadata(
  projectName: string,
  projectDescription: string,
  projectImage?: string,
  client?: string
): { openGraph: Record<string, unknown>; twitter: Record<string, unknown> } {
  const title = `${projectName} - Portfolio Case Study`;
  const description = `${projectDescription}${client ? ` - Project for ${client}` : ''} - A successful project by ${siteConfig.name}.`;

  const config: SocialMetadataConfig = {
    title,
    description,
    image: projectImage || siteConfig.ogImage,
    imageAlt: `${siteConfig.name} - ${projectName} Case Study`,
    url: `${siteConfig.url}/portfolio/${projectName.toLowerCase().replace(/\s+/g, '-')}`,
    type: "article"
  };

  return {
    openGraph: generateOpenGraphMetadata(config),
    twitter: generateTwitterMetadata(config)
  };
}

/**
 * Generate social media metadata for blog/article pages
 */
export function generateArticleSocialMetadata(
  title: string,
  description: string,
  publishDate: string,
  author: string,
  tags: string[] = [],
  articleImage?: string,
  slug?: string
): { openGraph: Record<string, unknown>; twitter: Record<string, unknown> } {
  const config: SocialMetadataConfig = {
    title: `${title} - ${siteConfig.name} Blog`,
    description,
    image: articleImage || siteConfig.ogImage,
    imageAlt: `${siteConfig.name} - ${title}`,
    url: slug ? `${siteConfig.url}/blog/${slug}` : `${siteConfig.url}/blog`,
    type: "article",
    article: {
      publishedTime: publishDate,
      author,
      tags,
      section: "Technology"
    }
  };

  return {
    openGraph: generateOpenGraphMetadata(config),
    twitter: generateTwitterMetadata(config)
  };
}

/**
 * Generate social sharing URLs for different platforms
 */
export function generateSocialSharingUrls(
  url: string,
  title: string,
  description?: string
) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = description ? encodeURIComponent(description) : '';

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`
  };
}

/**
 * Validate social media image dimensions and format
 */
export function validateSocialImage(
  imageUrl: string,
  platform: "openGraph" | "twitter" | "linkedin" = "openGraph"
): { isValid: boolean; recommendations: string[] } {
  const recommendations: string[] = [];
  let isValid = true;

  const config = socialImageConfig[platform];
  
  // Basic validation (in a real implementation, you'd check actual image dimensions)
  if (!imageUrl.match(/\.(jpg|jpeg|png|webp)$/i)) {
    isValid = false;
    recommendations.push(`Use JPG, PNG, or WebP format for ${platform} images`);
  }

  // Add dimension recommendations
  recommendations.push(
    `Recommended dimensions for ${platform}: ${config.width}x${config.height}px`
  );

  if (platform === "openGraph") {
    recommendations.push("Ensure image is at least 600x315px for proper display");
  }

  if (platform === "twitter") {
    recommendations.push("Use 2:1 aspect ratio for Twitter summary_large_image cards");
  }

  return { isValid, recommendations };
}

/**
 * Generate structured data for social media optimization
 */
export function generateSocialStructuredData(config: SocialMetadataConfig) {
  const {
    title,
    description,
    image = siteConfig.ogImage,
    url = siteConfig.url,
    type = "website",
    article
  } = config;

  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": socialImageConfig.openGraph.width,
      "height": socialImageConfig.openGraph.height
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": siteConfig.ogImage
      }
    }
  };

  // Add article-specific structured data
  if (type === "article" && article) {
    return {
      ...baseStructuredData,
      "@type": "Article",
      "headline": title,
      "datePublished": article.publishedTime,
      "dateModified": article.modifiedTime || article.publishedTime,
      "author": {
        "@type": "Person",
        "name": article.author || siteConfig.creator
      },
      "articleSection": article.section,
      "keywords": article.tags?.join(", ")
    };
  }

  return baseStructuredData;
}