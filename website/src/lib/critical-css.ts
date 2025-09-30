/**
 * Critical CSS Utilities
 * Extracts and inlines critical CSS for better LCP performance
 */

// Critical CSS for above-the-fold content
export const CRITICAL_CSS = `
  /* Reset and base styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, 'Segist UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #1f2937;
    background-color: #ffffff;
  }

  /* Header styles */
  header {
    background-color: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    padding: 0.75rem 1rem;
  }

  /* Hero section styles */
  .hero {
    padding: 5rem 1rem;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .hero h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  /* Button styles */
  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #3b82f6;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: background-color 0.2s;
  }

  .btn:hover {
    background-color: #2563eb;
  }

  /* Layout utilities */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Responsive utilities */
  @media (min-width: 640px) {
    .hero h1 {
      font-size: 3rem;
    }
    
    .hero {
      padding: 6rem 1rem;
    }
  }

  @media (min-width: 1024px) {
    .hero h1 {
      font-size: 3.5rem;
    }
    
    .hero {
      padding: 8rem 1rem;
    }
  }

  /* Loading states */
  .loading-placeholder {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  /* Prevent layout shift */
  img {
    max-width: 100%;
    height: auto;
  }

  .aspect-ratio-16-9 {
    aspect-ratio: 16 / 9;
  }

  .aspect-ratio-4-3 {
    aspect-ratio: 4 / 3;
  }

  .aspect-ratio-1-1 {
    aspect-ratio: 1 / 1;
  }
`;

// Function to inject critical CSS
export const injectCriticalCSS = () => {
  if (typeof window === 'undefined') return;

  // Check if critical CSS is already injected
  if (document.getElementById('critical-css')) return;

  const style = document.createElement('style');
  style.id = 'critical-css';
  style.textContent = CRITICAL_CSS;
  
  // Insert before any other stylesheets
  const firstLink = document.querySelector('link[rel="stylesheet"]');
  if (firstLink) {
    document.head.insertBefore(style, firstLink);
  } else {
    document.head.appendChild(style);
  }
};

// Function to preload non-critical CSS
export const preloadNonCriticalCSS = () => {
  if (typeof window === 'undefined') return;

  const nonCriticalCSS = [
    '/_next/static/css/app/layout.css',
    '/_next/static/css/app/globals.css'
  ];

  nonCriticalCSS.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = () => {
      // Convert preload to stylesheet after loading
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  });
};

// Function to extract critical CSS from current page
export const extractPageCriticalCSS = () => {
  if (typeof window === 'undefined') return '';

  const criticalSelectors = [
    'header',
    '.hero',
    '.hero h1',
    '.hero p',
    '.btn',
    '.container',
    'nav',
    'main'
  ];

  let criticalCSS = '';

  // Get all stylesheets
  Array.from(document.styleSheets).forEach(stylesheet => {
    try {
      Array.from(stylesheet.cssRules || []).forEach(rule => {
        if (rule instanceof CSSStyleRule) {
          // Check if this rule applies to critical elements
          const isCritical = criticalSelectors.some(selector => 
            rule.selectorText?.includes(selector)
          );

          if (isCritical) {
            criticalCSS += rule.cssText + '\n';
          }
        }
      });
    } catch (e) {
      // Cross-origin stylesheets may throw errors
      console.warn('Could not extract CSS from stylesheet:', e);
    }
  });

  return criticalCSS;
};

// Function to defer non-critical CSS loading
export const deferNonCriticalCSS = () => {
  if (typeof window === 'undefined') return;

  // Find all stylesheet links
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  
  stylesheets.forEach(link => {
    const href = (link as HTMLLinkElement).href;
    
    // Skip critical stylesheets
    if (href.includes('critical') || href.includes('inline')) {
      return;
    }

    // Convert to preload and load after page load
    (link as HTMLLinkElement).rel = 'preload';
    (link as HTMLLinkElement).as = 'style';
    
    // Load stylesheet after page is loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        (link as HTMLLinkElement).rel = 'stylesheet';
      }, 100);
    });
  });
};

// Initialize critical CSS optimizations
export const initializeCriticalCSS = () => {
  if (typeof window === 'undefined') return;

  // Inject critical CSS immediately
  injectCriticalCSS();
  
  // Preload non-critical CSS
  preloadNonCriticalCSS();
  
  // Defer non-critical CSS loading
  deferNonCriticalCSS();
};