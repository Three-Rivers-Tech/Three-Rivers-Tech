/**
 * Bundle optimization utilities
 * Helps identify and remove unused JavaScript and CSS
 */

// Tree shaking helper - mark unused exports for removal
export const markUnused = (module: string, exports: string[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Unused exports in ${module}:`, exports);
  }
};

// Critical CSS extraction helper
export const extractCriticalCSS = () => {
  if (typeof window !== 'undefined') {
    // Get all stylesheets
    const stylesheets = Array.from(document.styleSheets);
    const usedRules = new Set<string>();
    
    // Check which CSS rules are actually used
    stylesheets.forEach(stylesheet => {
      try {
        const rules = Array.from(stylesheet.cssRules || []);
        rules.forEach(rule => {
          if (rule instanceof CSSStyleRule) {
            // Check if selector matches any element
            if (document.querySelector(rule.selectorText)) {
              usedRules.add(rule.cssText);
            }
          }
        });
      } catch (e) {
        // Cross-origin stylesheets may throw errors
        console.warn('Could not analyze stylesheet:', e);
      }
    });
    
    return Array.from(usedRules);
  }
  return [];
};

// Identify unused JavaScript modules
export const identifyUnusedModules = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const jsFiles = entries.filter(entry => 
      entry.name.includes('.js') && 
      entry.transferSize > 0
    );
    
    // Log large JavaScript files for review
    jsFiles
      .filter(file => file.transferSize > 50000) // Files larger than 50KB
      .forEach(file => {
        console.info('Large JS file:', {
          name: file.name,
          size: `${(file.transferSize / 1024).toFixed(2)}KB`,
          loadTime: `${file.duration.toFixed(2)}ms`
        });
      });
    
    return jsFiles;
  }
  return [];
};

// Remove unused CSS classes (development helper)
export const removeUnusedCSS = () => {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    const allElements = document.querySelectorAll('*');
    const usedClasses = new Set<string>();
    
    allElements.forEach(element => {
      element.classList.forEach(className => {
        usedClasses.add(className);
      });
    });
    
    console.info('Used CSS classes:', Array.from(usedClasses).sort());
    return Array.from(usedClasses);
  }
  return [];
};

// Performance monitoring for bundle size
export const monitorBundlePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource' && entry.name.includes('.js')) {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          // Log slow-loading JavaScript files
          if (resourceEntry.duration > 1000) { // Slower than 1 second
            console.warn('Slow JS resource:', {
              name: resourceEntry.name,
              duration: `${resourceEntry.duration.toFixed(2)}ms`,
              size: resourceEntry.transferSize ? `${(resourceEntry.transferSize / 1024).toFixed(2)}KB` : 'unknown'
            });
          }
        }
      });
    });
    
    observer.observe({ entryTypes: ['resource'] });
    
    // Cleanup observer after 30 seconds
    setTimeout(() => observer.disconnect(), 30000);
  }
};