/**
 * Content Management System
 * Main export file for all content-related utilities
 */

// Types
export type * from '../types/content';

// Schemas
export { schemas } from '../schemas/content';

// Loader utilities
export {
  loadContentFile,
  loadPageContent,
  loadBusinessInfo,
  loadServices,
  loadTestimonials,
  loadContentModel,
  validateContent,
  ContentLoadError,
} from './loader';

// Provider utilities
export {
  ContentProvider,
  contentProvider,
  getPageContent,
  getBusinessInfo,
  getServices,
  getService,
  getTestimonials,
  getTestimonialsForService,
  getContentModel,
} from './provider';

// Re-export commonly used types for convenience
export type {
  BusinessInfo,
  SEOConfig,
  PageContent,
  ServiceContent,
  TestimonialContent,
  ContentModel,
  ContentLoadOptions,
  ContentValidationResult,
} from '../types/content';