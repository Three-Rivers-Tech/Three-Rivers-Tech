import { PageMetadataConfig } from "./metadata";

// SEO configuration for all pages
export const seoConfig: Record<string, PageMetadataConfig> = {
  // Homepage
  home: {
    title: "Simple Tech Solutions That Actually Work | Three Rivers Tech",
    description: "Stop losing money to bad technology. We build websites that work, fix slow computers, and create software that saves you time. Plain English, real results.",
    keywords: [
      "website design",
      "computer repair", 
      "custom software",
      "tech support",
      "business automation",
      "technology setup",
      "Mon Valley tech services"
    ],
    canonical: "https://threeriverstech.com",
    ogTitle: "Three Rivers Tech - Technology That Works For Your Business",
    ogDescription: "We fix technology problems fast. Build websites that convert, automate boring tasks, and get your systems working reliably."
  },

  // Services page
  services: {
    title: "Technology Services - Software Development, IT Consulting, SaaS & Repair",
    description: "Comprehensive technology services including custom software development, IT consulting, SaaS products, and computer repair. Tailored solutions to meet your unique business requirements.",
    keywords: [
      "software development",
      "IT consulting", 
      "SaaS products",
      "computer repair",
      "technology services",
      "custom solutions",
      "business technology"
    ],
    canonical: "https://threeriverstech.com/services",
    ogTitle: "Our Technology Services - Three Rivers Tech",
    ogDescription: "Explore our comprehensive technology services including custom software development, IT consulting, SaaS products, and computer repair."
  },

  // Software Development service
  "software-development": {
    title: "Custom Software Development - Web Apps, Mobile Apps & APIs",
    description: "Professional custom software development services. We build web applications, mobile apps, APIs, and enterprise software solutions tailored to your business needs.",
    keywords: [
      "custom software development",
      "web application development",
      "mobile app development", 
      "API development",
      "enterprise software",
      "full-stack development",
      "React development",
      "Node.js development"
    ],
    canonical: "https://threeriverstech.com/software-development",
    ogTitle: "Custom Software Development Services - Three Rivers Tech",
    ogDescription: "Expert software development services including web apps, mobile apps, and APIs. Built with modern technologies for scalable, reliable solutions."
  },

  // About page
  about: {
    title: "About Three Rivers Tech - Your Technology Partners Since 2014",
    description: "Learn about Three Rivers Tech's mission to provide reliable technology solutions. Meet our experienced team and discover our approach to solving complex business challenges.",
    keywords: [
      "about us",
      "company history",
      "technology team",
      "business solutions",
      "Pittsburgh tech company",
      "Mon Valley technology"
    ],
    canonical: "https://threeriverstech.com/about",
    ogTitle: "About Three Rivers Tech - Your Technology Partners",
    ogDescription: "Discover our story, meet our team, and learn how we help businesses succeed with reliable technology solutions."
  },

  // Contact page
  contact: {
    title: "Contact Us - Get in Touch with Our Technology Team",
    description: "Contact Three Rivers Tech for technology solutions. Reach out to our expert team for software development, IT consulting, SaaS products, or computer repair services. We're here to help.",
    keywords: [
      "contact us",
      "get in touch", 
      "technology solutions",
      "software development",
      "IT consulting",
      "SaaS products",
      "computer repair",
      "tech support"
    ],
    canonical: "https://threeriverstech.com/contact",
    ogTitle: "Contact Three Rivers Tech - Get in Touch",
    ogDescription: "Contact Three Rivers Tech for technology solutions. Schedule a consultation or reach out to our expert team."
  },

  // Portfolio page
  portfolio: {
    title: "Our Work - Portfolio of Successful Technology Projects",
    description: "Explore Three Rivers Tech's portfolio of successful projects. See real examples of our software development, IT consulting, and technology solutions in action.",
    keywords: [
      "portfolio",
      "case studies",
      "successful projects",
      "client work",
      "technology solutions",
      "software projects",
      "IT implementations"
    ],
    canonical: "https://threeriverstech.com/portfolio",
    ogTitle: "Our Portfolio - Three Rivers Tech Success Stories",
    ogDescription: "Discover our successful technology projects and see how we've helped businesses achieve their goals."
  },

  // IT Consulting service
  "it-consulting": {
    title: "IT Consulting Services - Infrastructure, Cloud Migration & Security",
    description: "Expert IT consulting services including infrastructure assessment, cloud migration, cybersecurity consulting, and technology strategy planning for businesses of all sizes.",
    keywords: [
      "IT consulting",
      "infrastructure assessment",
      "cloud migration",
      "cybersecurity consulting",
      "technology strategy",
      "IT planning",
      "business technology consulting"
    ],
    canonical: "https://threeriverstech.com/services/it-consulting",
    ogTitle: "IT Consulting Services - Three Rivers Tech",
    ogDescription: "Professional IT consulting services to optimize your technology infrastructure and drive business growth."
  },

  // SaaS Products service
  "saas-products": {
    title: "SaaS Products - Innovative Business Software Solutions",
    description: "Discover our innovative SaaS products designed to streamline business operations. Flexible pricing, reliable performance, and dedicated support for growing businesses.",
    keywords: [
      "SaaS products",
      "business software",
      "cloud applications",
      "subscription software",
      "business automation",
      "productivity tools",
      "enterprise SaaS"
    ],
    canonical: "https://threeriverstech.com/services/saas-products",
    ogTitle: "SaaS Products - Three Rivers Tech",
    ogDescription: "Innovative SaaS solutions to automate and optimize your business processes with flexible pricing and reliable support."
  },

  // Computer Repair service
  "computer-repair": {
    title: "Computer Repair Services - Hardware & Software Troubleshooting",
    description: "Professional computer repair services including hardware diagnostics, software troubleshooting, data recovery, and system optimization for businesses and individuals.",
    keywords: [
      "computer repair",
      "hardware diagnostics",
      "software troubleshooting",
      "data recovery",
      "system optimization",
      "PC repair",
      "laptop repair",
      "tech support"
    ],
    canonical: "https://threeriverstech.com/services/computer-repair",
    ogTitle: "Computer Repair Services - Three Rivers Tech", 
    ogDescription: "Fast, reliable computer repair services including hardware fixes, software troubleshooting, and data recovery."
  }
};

// Service-specific SEO configurations
export const servicesSeoConfig = {
  "software-development": {
    features: [
      "Custom Web Applications",
      "Mobile App Development", 
      "API Development & Integration",
      "Database Design & Optimization",
      "Cloud-Native Solutions",
      "E-commerce Platforms"
    ],
    technologies: [
      "React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"
    ]
  },
  "it-consulting": {
    features: [
      "Infrastructure Assessment",
      "Cloud Migration Strategy",
      "Cybersecurity Consulting",
      "Technology Planning",
      "System Integration",
      "Performance Optimization"
    ],
    technologies: [
      "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Ansible", "Linux", "Windows Server"
    ]
  },
  "saas-products": {
    features: [
      "Business Process Automation",
      "Customer Relationship Management",
      "Project Management Tools",
      "Analytics & Reporting",
      "Integration Capabilities",
      "Mobile Access"
    ],
    technologies: [
      "React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "Docker", "AWS", "Stripe API"
    ]
  },
  "computer-repair": {
    features: [
      "Hardware Diagnostics",
      "Software Troubleshooting", 
      "Data Recovery Services",
      "System Optimization",
      "Virus Removal",
      "Hardware Upgrades"
    ],
    technologies: [
      "Windows", "macOS", "Linux", "Hardware Testing Tools", "Data Recovery Software", "Antivirus Solutions"
    ]
  }
};

/**
 * Get SEO configuration for a specific page
 */
export function getPageSeoConfig(pageKey: string): PageMetadataConfig | null {
  return seoConfig[pageKey] || null;
}

/**
 * Get service-specific SEO configuration
 */
export function getServiceSeoConfig(serviceKey: string) {
  return servicesSeoConfig[serviceKey as keyof typeof servicesSeoConfig] || null;
}