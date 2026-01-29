/**
 * Type definitions for SEO configuration
 */

/**
 * Configuration for service-specific SEO details
 * including features list and technology stack
 */
export interface ServiceSeoConfig {
  /** List of key features for the service */
  features: string[];
  /** List of technologies used in the service */
  technologies: string[];
}

/**
 * Record of service SEO configurations keyed by service identifier
 */
export type ServicesSeoConfig = Record<string, ServiceSeoConfig>;
