import { Metadata } from "next";
import { generatePageMetadata, siteConfig } from "./metadata";
import { getPageSeoConfig, getServiceSeoConfig } from "./seo-config";

/**
 * Generate metadata for static pages using predefined configurations
 */
export function generateStaticPageMetadata(pageKey: string): Metadata {
  const config = getPageSeoConfig(pageKey);
  
  if (!config) {
    // Fallback metadata if configuration not found
    return generatePageMetadata({
      title: `Page Not Found - ${siteConfig.name}`,
      description: siteConfig.description,
      canonical: `${siteConfig.url}/${pageKey}`
    });
  }

  return generatePageMetadata(config);
}

/**
 * Generate enhanced metadata for service pages with additional service-specific data
 */
export function generateServicePageMetadata(serviceKey: string): Metadata {
  const seoConfig = getPageSeoConfig(serviceKey);
  const serviceConfig = getServiceSeoConfig(serviceKey);
  
  if (!seoConfig) {
    return generatePageMetadata({
      title: `Service - ${siteConfig.name}`,
      description: siteConfig.description,
      canonical: `${siteConfig.url}/services/${serviceKey}`
    });
  }

  // Enhance description with service features if available
  let enhancedDescription = seoConfig.description;
  if (serviceConfig?.features) {
    enhancedDescription += ` Services include: ${serviceConfig.features.slice(0, 3).join(', ')}.`;
  }

  // Add technology keywords if available
  const enhancedKeywords = [
    ...(seoConfig.keywords || []),
    ...(serviceConfig?.technologies || [])
  ];

  return generatePageMetadata({
    ...seoConfig,
    description: enhancedDescription,
    keywords: enhancedKeywords
  });
}

/**
 * Generate metadata for dynamic portfolio pages
 */
export function generatePortfolioPageMetadata(
  projectId?: string,
  projectData?: {
    title: string;
    description: string;
    image?: string;
    technologies?: string[];
    client?: string;
    year?: string;
  }
): Metadata {
  if (!projectId || !projectData) {
    // Portfolio listing page
    return generateStaticPageMetadata("portfolio");
  }

  // Individual project page
  const { title, description, image, technologies = [], client, year } = projectData;
  
  return generatePageMetadata({
    title: `${title} - Portfolio Case Study`,
    description: `${description} ${client ? `Project for ${client}` : ''} ${year ? `(${year})` : ''} - A successful project by Three Rivers Tech.`,
    keywords: ["portfolio", "case study", "project", ...technologies],
    canonical: `${siteConfig.url}/portfolio/${projectId}`,
    ogTitle: `${title} - Three Rivers Tech Portfolio`,
    ogDescription: description,
    ogImage: image || siteConfig.ogImage
  });
}

/**
 * Generate metadata for blog/article pages
 */
export function generateBlogPageMetadata(
  slug?: string,
  articleData?: {
    title: string;
    description: string;
    publishDate: string;
    author: string;
    tags: string[];
    image?: string;
  }
): Metadata {
  if (!slug || !articleData) {
    // Blog listing page
    return generatePageMetadata({
      title: "Tech Insights & Blog - Three Rivers Tech",
      description: "Stay updated with the latest technology insights, tutorials, and industry news from Three Rivers Tech. Expert perspectives on software development, IT consulting, and more.",
      keywords: ["tech blog", "technology insights", "software development", "IT consulting", "tutorials"],
      canonical: `${siteConfig.url}/blog`,
      ogTitle: "Tech Blog - Three Rivers Tech",
      ogDescription: "Expert insights and tutorials on technology, software development, and business solutions."
    });
  }

  // Individual article page
  const { title, description, publishDate, author, tags, image } = articleData;
  
  const metadata = generatePageMetadata({
    title,
    description,
    keywords: tags,
    canonical: `${siteConfig.url}/blog/${slug}`,
    ogType: "article",
    ogImage: image || siteConfig.ogImage
  });

  // Add article-specific Open Graph properties
  if (metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime: publishDate,
      authors: [author],
      tags
    };
  }

  return metadata;
}

/**
 * Generate metadata for search results pages
 */
export function generateSearchPageMetadata(query?: string): Metadata {
  const title = query 
    ? `Search Results for "${query}" - Three Rivers Tech`
    : "Search - Three Rivers Tech";
    
  const description = query
    ? `Search results for "${query}" on Three Rivers Tech. Find information about our technology services, portfolio, and expertise.`
    : "Search Three Rivers Tech for information about our technology services, portfolio, case studies, and expertise.";

  return generatePageMetadata({
    title,
    description,
    keywords: ["search", "find", "technology services"],
    canonical: `${siteConfig.url}/search${query ? `?q=${encodeURIComponent(query)}` : ''}`,
    noIndex: true // Don't index search pages
  });
}

/**
 * Generate metadata for error pages (404, 500, etc.)
 */
export function generateErrorPageMetadata(errorCode: number): Metadata {
  const errorMessages = {
    404: {
      title: "Page Not Found (404)",
      description: "The page you're looking for doesn't exist. Explore our technology services, portfolio, or contact us for assistance."
    },
    500: {
      title: "Server Error (500)", 
      description: "We're experiencing technical difficulties. Please try again later or contact our support team."
    }
  };

  const errorInfo = errorMessages[errorCode as keyof typeof errorMessages] || {
    title: `Error (${errorCode})`,
    description: "An error occurred. Please try again or contact our support team for assistance."
  };

  return generatePageMetadata({
    title: `${errorInfo.title} - Three Rivers Tech`,
    description: errorInfo.description,
    keywords: ["error", "help", "support"],
    noIndex: true, // Don't index error pages
    noFollow: true
  });
}

/**
 * Generate metadata with breadcrumb context
 */
export function generateMetadataWithBreadcrumbs(
  baseMetadata: Metadata,
  breadcrumbs: Array<{ name: string; url: string }>
): Metadata {
  // Add breadcrumb information to the description if it's helpful for SEO
  const breadcrumbText = breadcrumbs.map(b => b.name).join(' > ');
  
  return {
    ...baseMetadata,
    description: baseMetadata.description + ` Navigation: ${breadcrumbText}`,
  };
}

/** 
 * Generate location-specific metadata for local SEO
 */
export function generateLocalSeoMetadata(baseMetadata: Metadata): Metadata {
  const localKeywords = [
    "Turtle Creek PA computer repair",
    "Mon Valley IT services",
    "Western Pennsylvania tech support",
    "Turtle Creek website design",
    "local computer help PA",
    "small business IT Turtle Creek",
    "computer repair home visit",
    "tech support for seniors",
    "local website development PA",
    "Turtle Creek business solutions",
    "Monroeville area tech services",
    "Pittsburgh suburb IT help"
  ];

  // Enhanced description with local focus
  const enhancedDescription = `${baseMetadata.description} Serving Turtle Creek, Mon Valley, and surrounding Pennsylvania communities with personalized tech solutions.`;

  return {
    ...baseMetadata,
    description: enhancedDescription,
    keywords: `${baseMetadata.keywords}, ${localKeywords.join(', ')}`,
  };
}