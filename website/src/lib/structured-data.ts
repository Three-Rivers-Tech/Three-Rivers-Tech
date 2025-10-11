import { businessInfo, siteConfig } from "./metadata";

/**
 * Structured data (Schema.org) generation utilities
 * 
 * This module provides comprehensive structured data generation for SEO
 * and rich snippets in search results. All schemas follow Schema.org
 * specifications and are optimized for local business search.
 * 
 * Key features:
 * - Organization and LocalBusiness schemas
 * - Service-specific structured data
 * - WebPage and WebSite schemas with search functionality
 * - Breadcrumb navigation markup
 * - Local SEO optimization for Turtle Creek, PA
 * - JSON-LD format output for search engines
 * 
 * Usage:
 * ```tsx
 * import { generateOrganizationSchema } from '@/lib/structured-data';
 * 
 * const orgSchema = generateOrganizationSchema();
 * ```
 */

// Base structured data interfaces
export interface StructuredDataBase {
  "@context": string;
  "@type": string;
}

export interface OrganizationSchema extends StructuredDataBase {
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: PostalAddressSchema;
  sameAs?: string[];
  contactPoint?: ContactPointSchema[];
  foundingDate?: string;
  numberOfEmployees?: string;
  areaServed?: string[];
}

export interface LocalBusinessSchema extends StructuredDataBase {
  "@type": "LocalBusiness";
  name: string;
  image: string;
  telephone: string;
  email?: string;
  address: PostalAddressSchema;
  openingHoursSpecification: OpeningHoursSchema[];
  priceRange?: string;
  sameAs?: string[];
  geo?: GeoCoordinatesSchema;
  aggregateRating?: AggregateRatingSchema;
}

export interface PostalAddressSchema {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface ContactPointSchema {
  "@type": "ContactPoint";
  telephone: string;
  contactType: string;
  email?: string;
  availableLanguage?: string[];
}

export interface OpeningHoursSchema {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
}

export interface GeoCoordinatesSchema {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

export interface AggregateRatingSchema {
  "@type": "AggregateRating";
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export interface WebPageSchema extends StructuredDataBase {
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  breadcrumb?: BreadcrumbListSchema;
  mainEntity?: Record<string, unknown>;
  isPartOf?: WebSiteSchema;
}

export interface WebSiteSchema extends StructuredDataBase {
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
  potentialAction?: SearchActionSchema;
}

export interface SearchActionSchema {
  "@type": "SearchAction";
  target: {
    "@type": "EntryPoint";
    urlTemplate: string;
  };
  "query-input": string;
}

export interface BreadcrumbListSchema extends StructuredDataBase {
  "@type": "BreadcrumbList";
  itemListElement: ListItemSchema[];
}

export interface ListItemSchema {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface ServiceSchema extends StructuredDataBase {
  "@type": "Service";
  name: string;
  description: string;
  provider: OrganizationSchema;
  areaServed?: string[];
  serviceType?: string;
  offers?: OfferSchema[];
}

export interface OfferSchema {
  "@type": "Offer";
  name: string;
  description?: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
}

/**
 * Generate Organization structured data
 */
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessInfo.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zipCode,
      addressCountry: businessInfo.address.country
    },
    sameAs: [
      businessInfo.socialMedia.linkedin,
      businessInfo.socialMedia.twitter,
      businessInfo.socialMedia.facebook
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessInfo.phone,
        contactType: "Customer Service",
        email: businessInfo.email,
        availableLanguage: ["English"]
      }
    ],
    foundingDate: "2014",
    numberOfEmployees: "2-10",
    areaServed: [
      "Turtle Creek, PA 15145",
      "Monroeville, PA",
      "Wilmerding, PA",
      "Mon Valley, PA", 
      "Western Pennsylvania",
      "Pittsburgh Metro Area",
      "Pennsylvania",
      "United States"
    ]
  };
}

/**
 * Generate LocalBusiness structured data with enhanced local SEO
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema & {
  description: string;
  areaServed: string[];
  hasOfferCatalog?: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: Array<{
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description: string;
      };
    }>;
  };
} {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.name,
    description: "Your hometown tech partner in Turtle Creek, PA offering computer repair, website design, and IT support with big-city expertise at small-town prices.",
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zipCode,
      addressCountry: businessInfo.address.country
    },
    areaServed: [
      "Turtle Creek, PA 15145",
      "Monroeville, PA",
      "Wilmerding, PA", 
      "Mon Valley, PA",
      "Western Pennsylvania",
      "Pittsburgh Metro Area"
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00"
      }
    ],
    priceRange: "$",
    sameAs: [
      businessInfo.socialMedia.linkedin,
      businessInfo.socialMedia.twitter,
      businessInfo.socialMedia.facebook
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4058,
      longitude: -79.8214
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 25,
      bestRating: 5,
      worstRating: 1
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Three Rivers Tech Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Computer Repair Turtle Creek PA",
            description: "Professional computer repair services including virus removal, hardware diagnostics, and system optimization for Turtle Creek residents."
          }
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "Website Design Monroeville Area",
            description: "Affordable website design and development services for small businesses in Monroeville and surrounding Mon Valley communities."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "IT Support Mon Valley",
            description: "Comprehensive IT support services for small businesses and home users throughout the Mon Valley region."
          }
        }
      ]
    }
  };
}

/**
 * Generate WebSite structured data with search functionality
 */
export function generateWebSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Generate WebPage structured data with breadcrumbs
 */
export function generateWebPageSchema(
  name: string,
  description: string,
  url: string,
  breadcrumbs?: Array<{ name: string; url: string }>
): WebPageSchema {
  const webPage: WebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: generateWebSiteSchema()
  };

  if (breadcrumbs && breadcrumbs.length > 0) {
    webPage.breadcrumb = generateBreadcrumbSchema(breadcrumbs);
  }

  return webPage;
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
): BreadcrumbListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

/**
 * Generate Service structured data
 */
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceType?: string,
  offers?: OfferSchema[]
): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: generateOrganizationSchema(),
    areaServed: [
      "Pittsburgh, PA",
      "Pennsylvania", 
      "United States"
    ],
    serviceType,
    offers
  };
}

/**
 * Generate structured data for software development services
 */
export function generateSoftwareDevelopmentSchema(): ServiceSchema {
  return generateServiceSchema(
    "Custom Software Development",
    "Professional custom software development services including web applications, mobile apps, APIs, and enterprise software solutions.",
    "Software Development",
    [
      {
        "@type": "Offer",
        name: "Web Application Development",
        description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js"
      },
      {
        "@type": "Offer", 
        name: "Mobile App Development",
        description: "Cross-platform mobile applications for iOS and Android using React Native and Flutter"
      },
      {
        "@type": "Offer",
        name: "API Development",
        description: "RESTful and GraphQL APIs for seamless system integration and data exchange"
      },
      {
        "@type": "Offer",
        name: "Enterprise Software",
        description: "Scalable enterprise software solutions tailored to business requirements"
      }
    ]
  );
}

/**
 * Generate structured data for IT consulting services
 */
export function generateITConsultingSchema(): ServiceSchema {
  return generateServiceSchema(
    "IT Consulting Services",
    "Expert IT consulting services including infrastructure assessment, cloud migration, cybersecurity consulting, and technology strategy planning.",
    "IT Consulting",
    [
      {
        "@type": "Offer",
        name: "Infrastructure Assessment",
        description: "Comprehensive evaluation of your current IT infrastructure and recommendations for improvement"
      },
      {
        "@type": "Offer",
        name: "Cloud Migration",
        description: "Strategic cloud migration planning and implementation for AWS, Azure, and Google Cloud"
      },
      {
        "@type": "Offer",
        name: "Cybersecurity Consulting",
        description: "Security assessments, vulnerability testing, and cybersecurity strategy development"
      }
    ]
  );
}

/**
 * Generate structured data for SaaS products
 */
export function generateSaaSProductsSchema(): ServiceSchema {
  return generateServiceSchema(
    "SaaS Products",
    "Innovative Software-as-a-Service products designed to streamline business operations with flexible pricing and reliable performance.",
    "SaaS Products",
    [
      {
        "@type": "Offer",
        name: "Business Process Automation",
        description: "Automated workflows and business process management tools"
      },
      {
        "@type": "Offer",
        name: "Customer Relationship Management",
        description: "CRM solutions for managing customer relationships and sales processes"
      },
      {
        "@type": "Offer",
        name: "Project Management Tools",
        description: "Collaborative project management and team productivity solutions"
      }
    ]
  );
}

/**
 * Generate structured data for computer repair services
 */
export function generateComputerRepairSchema(): ServiceSchema {
  return generateServiceSchema(
    "Computer Repair Services",
    "Professional computer repair services including hardware diagnostics, software troubleshooting, data recovery, and system optimization.",
    "Computer Repair",
    [
      {
        "@type": "Offer",
        name: "Hardware Diagnostics & Repair",
        description: "Complete hardware diagnostics and repair services for desktops and laptops"
      },
      {
        "@type": "Offer",
        name: "Software Troubleshooting",
        description: "Operating system issues, software conflicts, and performance optimization"
      },
      {
        "@type": "Offer",
        name: "Data Recovery",
        description: "Professional data recovery services for failed hard drives and corrupted files"
      },
      {
        "@type": "Offer",
        name: "System Optimization",
        description: "Performance tuning, malware removal, and system maintenance services"
      }
    ]
  );
}

/**
 * Generate all service schemas as a combined array
 */
export function generateAllServiceSchemas(): ServiceSchema[] {
  return [
    generateSoftwareDevelopmentSchema(),
    generateITConsultingSchema(),
    generateSaaSProductsSchema(),
    generateComputerRepairSchema()
  ];
}

/**
 * Convert structured data to JSON-LD script tag content
 */
export function structuredDataToJsonLd(data: unknown): string {
  return JSON.stringify(data, null, 0);
}

/**
 * Generate multiple structured data schemas for a page
 */
export function generatePageStructuredData(
  pageType: "home" | "services" | "about" | "contact" | "portfolio" | "service" | "article",
  pageData?: {
    name?: string;
    description?: string;
    url?: string;
    breadcrumbs?: Array<{ name: string; url: string }>;
    serviceName?: string;
    serviceDescription?: string;
  }
): unknown[] {
  const schemas: unknown[] = [];

  // Always include organization and website schemas
  schemas.push(generateOrganizationSchema());
  schemas.push(generateWebSiteSchema());

  // Add page-specific schemas
  switch (pageType) {
    case "home":
      schemas.push(generateLocalBusinessSchema());
      schemas.push(generateWebPageSchema(
        "Three Rivers Tech - Simple Technology Solutions That Work",
        siteConfig.description,
        siteConfig.url,
        [{ name: "Home", url: siteConfig.url }]
      ));
      break;

    case "services":
      schemas.push(...generateAllServiceSchemas());
      schemas.push(generateWebPageSchema(
        "Our Technology Services",
        "Comprehensive technology services including software development, IT consulting, SaaS products, and computer repair.",
        `${siteConfig.url}/services`,
        [
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` }
        ]
      ));
      break;

    case "service":
      if (pageData?.serviceName && pageData?.serviceDescription) {
        schemas.push(generateServiceSchema(
          pageData.serviceName,
          pageData.serviceDescription
        ));
      }
      if (pageData?.name && pageData?.description && pageData?.url && pageData?.breadcrumbs) {
        schemas.push(generateWebPageSchema(
          pageData.name,
          pageData.description,
          pageData.url,
          pageData.breadcrumbs
        ));
      }
      break;

    case "about":
    case "contact":
    case "portfolio":
      if (pageData?.name && pageData?.description && pageData?.url && pageData?.breadcrumbs) {
        schemas.push(generateWebPageSchema(
          pageData.name,
          pageData.description,
          pageData.url,
          pageData.breadcrumbs
        ));
      }
      break;
  }

  return schemas;
}