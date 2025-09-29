/**
 * Content Provider
 * High-level interface for accessing content throughout the application
 */

import type { 
  ContentModel, 
  PageContent, 
  BusinessInfo, 
  ServiceContent, 
  TestimonialContent,
  ContentLoadOptions 
} from '../types/content';
import { 
  loadContentModel, 
  loadPageContent, 
  loadBusinessInfo, 
  loadServices, 
  loadTestimonials,
  ContentLoadError 
} from './loader';

/**
 * Content provider class for managing content access
 */
export class ContentProvider {
  private static instance: ContentProvider;
  private contentCache: Map<string, unknown> = new Map();
  private cacheTimeout: number = 5 * 60 * 1000; // 5 minutes
  private cacheTimestamps: Map<string, number> = new Map();

  private constructor(private options: ContentLoadOptions = {}) {
    // Enable fallback by default in development
    if (process.env.NODE_ENV === 'development') {
      this.options.fallback = this.options.fallback ?? true;
    }
  }

  /**
   * Get singleton instance
   */
  public static getInstance(options?: ContentLoadOptions): ContentProvider {
    if (!ContentProvider.instance) {
      ContentProvider.instance = new ContentProvider(options);
    }
    return ContentProvider.instance;
  }

  /**
   * Check if cache entry is valid
   */
  private isCacheValid(key: string): boolean {
    const timestamp = this.cacheTimestamps.get(key);
    if (!timestamp) return false;
    return Date.now() - timestamp < this.cacheTimeout;
  }

  /**
   * Set cache entry
   */
  private setCache<T>(key: string, data: T): T {
    this.contentCache.set(key, data);
    this.cacheTimestamps.set(key, Date.now());
    return data;
  }

  /**
   * Get cached data or load fresh
   */
  private async getCachedOrLoad<T>(
    key: string, 
    loader: () => Promise<T>,
    forceRefresh = false
  ): Promise<T> {
    if (!forceRefresh && this.isCacheValid(key)) {
      return this.contentCache.get(key) as T;
    }

    try {
      const data = await loader();
      return this.setCache(key, data);
    } catch (error) {
      // If loading fails and we have cached data, return it
      if (this.contentCache.has(key)) {
        console.warn(`Failed to refresh content for ${key}, using cached version`);
        return this.contentCache.get(key) as T;
      }
      throw error;
    }
  }

  /**
   * Get complete content model
   */
  public async getContentModel(forceRefresh = false): Promise<ContentModel> {
    return this.getCachedOrLoad(
      'content-model',
      () => loadContentModel(this.options),
      forceRefresh
    );
  }

  /**
   * Get page content by name
   */
  public async getPageContent(pageName: string, forceRefresh = false): Promise<PageContent> {
    return this.getCachedOrLoad(
      `page-${pageName}`,
      () => loadPageContent(pageName, this.options),
      forceRefresh
    );
  }

  /**
   * Get business information
   */
  public async getBusinessInfo(forceRefresh = false): Promise<BusinessInfo> {
    return this.getCachedOrLoad(
      'business-info',
      () => loadBusinessInfo(this.options),
      forceRefresh
    );
  }

  /**
   * Get all services
   */
  public async getServices(forceRefresh = false): Promise<ServiceContent[]> {
    return this.getCachedOrLoad(
      'services',
      () => loadServices(this.options),
      forceRefresh
    );
  }

  /**
   * Get service by ID
   */
  public async getService(serviceId: string, forceRefresh = false): Promise<ServiceContent | null> {
    const services = await this.getServices(forceRefresh);
    return services.find(service => service.id === serviceId) || null;
  }

  /**
   * Get all testimonials
   */
  public async getTestimonials(forceRefresh = false): Promise<TestimonialContent[]> {
    return this.getCachedOrLoad(
      'testimonials',
      () => loadTestimonials(this.options),
      forceRefresh
    );
  }

  /**
   * Get testimonials for a specific service
   */
  public async getTestimonialsForService(serviceId: string, forceRefresh = false): Promise<TestimonialContent[]> {
    const testimonials = await this.getTestimonials(forceRefresh);
    return testimonials.filter(testimonial => testimonial.service === serviceId);
  }

  /**
   * Clear all cached content
   */
  public clearCache(): void {
    this.contentCache.clear();
    this.cacheTimestamps.clear();
  }

  /**
   * Clear specific cached content
   */
  public clearCacheEntry(key: string): void {
    this.contentCache.delete(key);
    this.cacheTimestamps.delete(key);
  }

  /**
   * Preload all content (useful for build time)
   */
  public async preloadAll(): Promise<void> {
    try {
      await Promise.all([
        this.getContentModel(),
        this.getBusinessInfo(),
        this.getServices(),
        this.getTestimonials(),
      ]);
    } catch (error) {
      console.warn('Failed to preload some content:', error);
    }
  }

  /**
   * Validate content integrity
   */
  public async validateContent(): Promise<{
    valid: boolean;
    errors: string[];
  }> {
    const errors: string[] = [];

    try {
      // Try to load all content
      await this.getContentModel(true);
    } catch (error) {
      if (error instanceof ContentLoadError) {
        errors.push(`Content Model: ${error.message}`);
        if (error.validationErrors) {
          error.validationErrors.issues.forEach(err => {
            errors.push(`  - ${err.path.join('.')}: ${err.message}`);
          });
        }
      } else {
        errors.push(`Content Model: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  /**
   * Get content statistics
   */
  public async getContentStats(): Promise<{
    pages: number;
    services: number;
    testimonials: number;
    cacheSize: number;
  }> {
    try {
      const [contentModel, services, testimonials] = await Promise.all([
        this.getContentModel(),
        this.getServices(),
        this.getTestimonials(),
      ]);

      return {
        pages: Object.keys(contentModel.pages).length,
        services: services.length,
        testimonials: testimonials.length,
        cacheSize: this.contentCache.size,
      };
    } catch {
      return {
        pages: 0,
        services: 0,
        testimonials: 0,
        cacheSize: this.contentCache.size,
      };
    }
  }
}

/**
 * Default content provider instance
 */
export const contentProvider = ContentProvider.getInstance();

/**
 * Convenience functions for common operations
 */
export const getPageContent = (pageName: string, forceRefresh = false) => 
  contentProvider.getPageContent(pageName, forceRefresh);

export const getBusinessInfo = (forceRefresh = false) => 
  contentProvider.getBusinessInfo(forceRefresh);

export const getServices = (forceRefresh = false) => 
  contentProvider.getServices(forceRefresh);

export const getService = (serviceId: string, forceRefresh = false) => 
  contentProvider.getService(serviceId, forceRefresh);

export const getTestimonials = (forceRefresh = false) => 
  contentProvider.getTestimonials(forceRefresh);

export const getTestimonialsForService = (serviceId: string, forceRefresh = false) => 
  contentProvider.getTestimonialsForService(serviceId, forceRefresh);

export const getContentModel = (forceRefresh = false) => 
  contentProvider.getContentModel(forceRefresh);