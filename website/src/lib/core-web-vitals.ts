/**
 * Core Web Vitals Optimization Utilities
 * Implements optimizations for LCP, FID, and CLS metrics
 */

// Core Web Vitals thresholds (in milliseconds)
export const THRESHOLDS = {
  LCP: {
    GOOD: 2500,
    NEEDS_IMPROVEMENT: 4000
  },
  FID: {
    GOOD: 100,
    NEEDS_IMPROVEMENT: 300
  },
  CLS: {
    GOOD: 0.1,
    NEEDS_IMPROVEMENT: 0.25
  }
};

// Largest Contentful Paint (LCP) optimizations
export class LCPOptimizer {
  private static preloadedImages = new Set<string>();

  // Preload critical images to improve LCP
  static preloadCriticalImages(images: string[]) {
    if (typeof window === 'undefined') return;

    images.forEach(src => {
      if (!this.preloadedImages.has(src)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        
        // Add responsive image hints
        if (src.includes('webp')) {
          link.type = 'image/webp';
        } else if (src.includes('avif')) {
          link.type = 'image/avif';
        }
        
        document.head.appendChild(link);
        this.preloadedImages.add(src);
      }
    });
  }

  // Optimize image loading with intersection observer
  static optimizeImageLoading() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          
          // Load high-priority images immediately
          if (img.dataset.priority === 'high') {
            this.loadImage(img);
          } else {
            // Delay loading of non-critical images
            setTimeout(() => this.loadImage(img), 100);
          }
          
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px', // Start loading 50px before entering viewport
      threshold: 0.1
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  private static loadImage(img: HTMLImageElement) {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      
      // Handle srcset for responsive images
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
        img.removeAttribute('data-srcset');
      }
    }
  }

  // Measure and report LCP
  static measureLCP(callback?: (lcp: number) => void) {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;

      if (lastEntry) {
        const lcp = lastEntry.startTime;
        console.log('LCP:', `${lcp.toFixed(2)}ms`);

        if (callback) {
          callback(lcp);
        }

        // Report if LCP is poor
        if (lcp > THRESHOLDS.LCP.NEEDS_IMPROVEMENT) {
          console.warn('Poor LCP detected. Consider optimizing critical resources.');
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch {
      console.warn('LCP measurement not supported in this browser');
    }
  }
}

// First Input Delay (FID) optimizations
export class FIDOptimizer {
  // Break up long tasks to improve FID
  static breakUpLongTasks() {
    if (typeof window === 'undefined') return;

    // Schedule task with setTimeout for compatibility
    const scheduleTask = (callback: () => void) => {
      setTimeout(callback, 0);
    };

    return scheduleTask;
  }

  // Defer non-critical JavaScript
  static deferNonCriticalJS() {
    if (typeof window === 'undefined') return;

    // Defer analytics and other non-critical scripts
    const deferredScripts = [
      'gtag',
      'analytics',
      'tracking'
    ];

    window.addEventListener('load', () => {
      setTimeout(() => {
        deferredScripts.forEach(scriptName => {
          const script = document.querySelector(`script[src*="${scriptName}"]`);
          if (script && !script.hasAttribute('data-loaded')) {
            script.setAttribute('data-loaded', 'true');
          }
        });
      }, 1000);
    });
  }

  // Measure and report FID
  static measureFID(callback?: (fid: number) => void) {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
        console.log('FID:', `${fid.toFixed(2)}ms`);

        if (callback) {
          callback(fid);
        }

        // Report if FID is poor
        if (fid > THRESHOLDS.FID.NEEDS_IMPROVEMENT) {
          console.warn('Poor FID detected. Consider reducing JavaScript execution time.');
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['first-input'] });
    } catch {
      console.warn('FID measurement not supported in this browser');
    }
  }
}

// Cumulative Layout Shift (CLS) optimizations
export class CLSOptimizer {
  private static reservedSpaces = new Map<string, { width: number; height: number }>();

  // Reserve space for dynamic content
  static reserveSpace(elementId: string, dimensions: { width: number; height: number }) {
    this.reservedSpaces.set(elementId, dimensions);
    
    if (typeof window !== 'undefined') {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.minWidth = `${dimensions.width}px`;
        element.style.minHeight = `${dimensions.height}px`;
      }
    }
  }

  // Set explicit dimensions for images
  static setImageDimensions() {
    if (typeof window === 'undefined') return;

    document.querySelectorAll('img:not([width]):not([height])').forEach(img => {
      const image = img as HTMLImageElement;
      
      // Set aspect ratio to prevent layout shift
      image.style.aspectRatio = 'auto';
      
      // Add loading placeholder
      if (!image.complete) {
        image.style.backgroundColor = '#f3f4f6';
        image.style.minHeight = '200px';
      }
    });
  }

  // Optimize font loading to prevent layout shift
  static optimizeFontLoading() {
    if (typeof window === 'undefined') return;

    // Use font-display: swap for web fonts
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-display: swap;
      }
    `;
    document.head.appendChild(style);

    // Preload critical fonts
    const criticalFonts = [
      '/fonts/geist-sans.woff2',
      '/fonts/geist-mono.woff2'
    ];

    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = font;
      document.head.appendChild(link);
    });
  }

  // Measure and report CLS
  static measureCLS(callback?: (cls: number) => void) {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    let clsValue = 0;
    const clsEntries: PerformanceEntry[] = [];

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Only count layout shifts without recent user input
        if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
          clsValue += (entry as PerformanceEntry & { value: number }).value;
        }
      });

      console.log('CLS:', clsValue.toFixed(4));

      if (callback) {
        callback(clsValue);
      }

      // Report if CLS is poor
      if (clsValue > THRESHOLDS.CLS.NEEDS_IMPROVEMENT) {
        console.warn('Poor CLS detected. Check for layout shifts:', clsEntries);
      }
    });

    try {
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch {
      console.warn('CLS measurement not supported in this browser');
    }
  }
}

// Initialize all Core Web Vitals optimizations
export const initializeCoreWebVitals = () => {
  if (typeof window === 'undefined') return;

  // LCP optimizations
  LCPOptimizer.preloadCriticalImages([
    '/company_logo.webp',
    '/service-icon-dev.webp',
    '/service-icon-consulting.webp',
    '/service-icon-saas.webp',
    '/service-icon-repair.webp'
  ]);

  // FID optimizations
  FIDOptimizer.deferNonCriticalJS();

  // CLS optimizations
  CLSOptimizer.setImageDimensions();
  CLSOptimizer.optimizeFontLoading();

  // Start measurements
  window.addEventListener('load', () => {
    setTimeout(() => {
      LCPOptimizer.measureLCP();
      FIDOptimizer.measureFID();
      CLSOptimizer.measureCLS();
      LCPOptimizer.optimizeImageLoading();
    }, 100);
  });
};

// Web Vitals reporting utility
export const reportWebVitals = (metric: { name: string; value: number; id: string }) => {
  console.log('Web Vital:', metric);

  // Send to analytics if available
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
};
