/**
 * Cache Management Utilities
 * Provides client-side caching strategies and cache control
 */

// Cache configuration
export const CACHE_CONFIG = {
  // Static assets cache duration (1 year)
  STATIC_ASSETS: 31536000,
  // Dynamic content cache duration (1 hour)
  DYNAMIC_CONTENT: 3600,
  // API responses cache duration (5 minutes)
  API_RESPONSES: 300,
  // Images cache duration (1 week)
  IMAGES: 604800,
};

// Browser cache utilities
export class BrowserCache {
  private static instance: BrowserCache;
  private cache: Map<string, { data: unknown; timestamp: number; ttl: number }> = new Map();

  static getInstance(): BrowserCache {
    if (!BrowserCache.instance) {
      BrowserCache.instance = new BrowserCache();
    }
    return BrowserCache.instance;
  }

  // Set cache entry with TTL
  set(key: string, data: unknown, ttl: number = CACHE_CONFIG.DYNAMIC_CONTENT): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl * 1000 // Convert to milliseconds
    });
  }

  // Get cache entry if not expired
  get(key: string): unknown | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    const now = Date.now();
    const isExpired = (now - entry.timestamp) > entry.ttl;

    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  // Check if cache entry exists and is valid
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  // Clear expired entries
  cleanup(): void {
    const now = Date.now();
    
    for (const [key, entry] of this.cache.entries()) {
      const isExpired = (now - entry.timestamp) > entry.ttl;
      if (isExpired) {
        this.cache.delete(key);
      }
    }
  }

  // Clear all cache entries
  clear(): void {
    this.cache.clear();
  }

  // Get cache statistics
  getStats(): { size: number; entries: string[] } {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys())
    };
  }
}

// HTTP cache headers utility
export const generateCacheHeaders = (type: 'static' | 'dynamic' | 'api' | 'images') => {
  const maxAge = CACHE_CONFIG[type.toUpperCase() as keyof typeof CACHE_CONFIG];
  
  return {
    'Cache-Control': `public, max-age=${maxAge}, s-maxage=${maxAge}`,
    'Expires': new Date(Date.now() + maxAge * 1000).toUTCString(),
    'Last-Modified': new Date().toUTCString(),
    'ETag': `"${Date.now()}"`,
  };
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    { href: '/company_logo.webp', as: 'image', type: 'image/webp' },
    { href: '/favicon-circle-32x32.webp', as: 'image', type: 'image/webp' },
    { href: '/_next/static/css/app/layout.css', as: 'style' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) {
      link.type = resource.type;
    }
    document.head.appendChild(link);
  });
};

// Prefetch next page resources
export const prefetchPageResources = (pathname: string) => {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = pathname;
  document.head.appendChild(link);
};

// Resource hints for better loading performance
export const addResourceHints = () => {
  if (typeof window === 'undefined') return;

  // DNS prefetch for external domains
  const externalDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'www.google-analytics.com',
  ];

  externalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });

  // Preconnect to critical external resources
  const preconnectDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
  ];

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = `https://${domain}`;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Cache warming - preload important pages
export const warmCache = async () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  const importantPages = [
    '/services/',
    '/about/',
    '/contact/',
    '/portfolio/',
  ];

  try {
    const registration = await navigator.serviceWorker.ready;
    
    if (registration.active) {
      // Send message to service worker to warm cache
      registration.active.postMessage({
        type: 'WARM_CACHE',
        pages: importantPages
      });
    }
  } catch (error) {
    console.error('Cache warming failed:', error);
  }
};

// Initialize cache management
export const initializeCacheManagement = () => {
  if (typeof window === 'undefined') return;

  // Add resource hints
  addResourceHints();
  
  // Preload critical resources
  preloadCriticalResources();
  
  // Warm cache after page load
  window.addEventListener('load', () => {
    setTimeout(warmCache, 2000); // Delay to not interfere with initial page load
  });

  // Cleanup expired cache entries periodically
  const cache = BrowserCache.getInstance();
  setInterval(() => {
    cache.cleanup();
  }, 300000); // Every 5 minutes
};
