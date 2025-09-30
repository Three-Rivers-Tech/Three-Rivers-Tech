/**
 * Error monitoring and tracking utilities
 */

import { trackApiError, trackError } from './analytics';

// Error types for categorization
export enum ErrorType {
  JAVASCRIPT = 'javascript_error',
  API = 'api_error',
  NETWORK = 'network_error',
  RESOURCE = 'resource_error',
  PERFORMANCE = 'performance_error',
  ACCESSIBILITY = 'accessibility_error',
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

// Error context interface
export interface ErrorContext {
  url?: string;
  userAgent?: string;
  timestamp?: string;
  userId?: string;
  sessionId?: string;
  component?: string;
  action?: string;
  additionalData?: Record<string, unknown>;
}

// Error report interface
export interface ErrorReport {
  type: ErrorType;
  severity: ErrorSeverity;
  message: string;
  stack?: string;
  context: ErrorContext;
}

// Global error tracking state
let errorCount = 0;
let lastErrorTime = 0;
const ERROR_THROTTLE_MS = 1000; // Throttle similar errors
const MAX_ERRORS_PER_SESSION = 50; // Prevent spam

/**
 * Initialize error monitoring
 */
export function initializeErrorMonitoring(): void {
  if (typeof window === 'undefined') return;

  // Track unhandled JavaScript errors
  window.addEventListener('error', (event) => {
    handleJavaScriptError(event.error || new Error(event.message), {
      url: event.filename,
      component: 'global',
      action: 'unhandled_error',
      additionalData: {
        lineno: event.lineno,
        colno: event.colno,
      },
    });
  });

  // Track unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    handleJavaScriptError(
      new Error(String(event.reason)),
      {
        component: 'global',
        action: 'unhandled_promise_rejection',
        additionalData: {
          reason: event.reason,
        },
      }
    );
  });

  // Track resource loading errors
  window.addEventListener('error', (event) => {
    if (event.target && event.target !== window) {
      const target = event.target as HTMLElement;
      handleResourceError(target);
    }
  }, true);

  // Monitor fetch API for network errors
  monitorFetchAPI();

  // Monitor performance issues
  monitorPerformanceIssues();

  console.log('Error monitoring initialized');
}

/**
 * Handle JavaScript errors
 */
export function handleJavaScriptError(error: Error, context: Partial<ErrorContext> = {}): void {
  if (shouldThrottleError()) return;

  const errorReport: ErrorReport = {
    type: ErrorType.JAVASCRIPT,
    severity: determineSeverity(error, context),
    message: error.message,
    stack: error.stack,
    context: {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
      ...context,
    },
  };

  reportError(errorReport);
  trackError(error, context.component);
}

/**
 * Handle API errors
 */
export function handleApiError(
  endpoint: string,
  status: number,
  message: string,
  context: Partial<ErrorContext> = {}
): void {
  if (shouldThrottleError()) return;

  const errorReport: ErrorReport = {
    type: ErrorType.API,
    severity: status >= 500 ? ErrorSeverity.HIGH : ErrorSeverity.MEDIUM,
    message: `API Error: ${message}`,
    context: {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
      ...context,
      additionalData: {
        endpoint,
        status,
        ...context.additionalData,
      },
    },
  };

  reportError(errorReport);
  trackApiError(endpoint, status, message);
}

/**
 * Handle network errors
 */
export function handleNetworkError(
  url: string,
  error: Error,
  context: Partial<ErrorContext> = {}
): void {
  if (shouldThrottleError()) return;

  const errorReport: ErrorReport = {
    type: ErrorType.NETWORK,
    severity: ErrorSeverity.MEDIUM,
    message: `Network Error: ${error.message}`,
    stack: error.stack,
    context: {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
      ...context,
      additionalData: {
        requestUrl: url,
        ...context.additionalData,
      },
    },
  };

  reportError(errorReport);
}

/**
 * Handle resource loading errors
 */
function handleResourceError(element: HTMLElement): void {
  if (shouldThrottleError()) return;

  const tagName = element.tagName.toLowerCase();
  const src = (element as HTMLImageElement).src || (element as HTMLLinkElement).href || '';
  
  const errorReport: ErrorReport = {
    type: ErrorType.RESOURCE,
    severity: ErrorSeverity.LOW,
    message: `Resource failed to load: ${tagName}`,
    context: {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
      component: 'resource_loader',
      additionalData: {
        tagName,
        src,
        outerHTML: element.outerHTML.substring(0, 200), // Truncate for privacy
      },
    },
  };

  reportError(errorReport);
}

/**
 * Monitor fetch API for errors
 */
function monitorFetchAPI(): void {
  if (typeof window === 'undefined' || !window.fetch) return;

  const originalFetch = window.fetch;
  
  window.fetch = async function(...args: Parameters<typeof originalFetch>) {
    const [url] = args;
    const urlString = typeof url === 'string' ? url : url.toString();

    try {
      const response = await originalFetch.apply(this, args);
      
      // Track API errors for non-2xx responses
      if (!response.ok) {
        handleApiError(
          urlString,
          response.status,
          response.statusText,
          { action: 'fetch_request' }
        );
      }
      
      return response;
    } catch (error) {
      // Track network errors
      handleNetworkError(
        urlString,
        error instanceof Error ? error : new Error(String(error)),
        { action: 'fetch_request' }
      );
      throw error;
    }
  };
}

/**
 * Monitor performance issues
 */
function monitorPerformanceIssues(): void {
  if (typeof window === 'undefined' || !window.PerformanceObserver) return;

  // Monitor long tasks
  try {
    const longTaskObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) { // Tasks longer than 50ms
          const errorReport: ErrorReport = {
            type: ErrorType.PERFORMANCE,
            severity: entry.duration > 100 ? ErrorSeverity.MEDIUM : ErrorSeverity.LOW,
            message: `Long task detected: ${entry.duration}ms`,
            context: {
              url: window.location.href,
              timestamp: new Date().toISOString(),
              component: 'performance_monitor',
              additionalData: {
                duration: entry.duration,
                startTime: entry.startTime,
                name: entry.name,
              },
            },
          };
          
          reportError(errorReport);
        }
      });
    });

    longTaskObserver.observe({ entryTypes: ['longtask'] });
  } catch (error) {
    console.warn('Long task monitoring not supported');
  }

  // Monitor memory usage if available
  if ('memory' in performance) {
    setInterval(() => {
      const memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      const usedPercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
      
      if (usedPercent > 90) { // High memory usage
        const errorReport: ErrorReport = {
          type: ErrorType.PERFORMANCE,
          severity: ErrorSeverity.HIGH,
          message: `High memory usage: ${usedPercent.toFixed(1)}%`,
          context: {
            url: window.location.href,
            timestamp: new Date().toISOString(),
            component: 'memory_monitor',
            additionalData: {
              usedJSHeapSize: memory.usedJSHeapSize,
              totalJSHeapSize: memory.totalJSHeapSize,
              jsHeapSizeLimit: memory.jsHeapSizeLimit,
              usedPercent,
            },
          },
        };
        
        reportError(errorReport);
      }
    }, 30000); // Check every 30 seconds
  }
}

/**
 * Report error to monitoring services
 */
function reportError(errorReport: ErrorReport): void {
  // Log to console for development
  console.error('Error Report:', errorReport);

  // Send to analytics
  if (errorReport.type === ErrorType.JAVASCRIPT && errorReport.stack) {
    trackError(new Error(errorReport.message), errorReport.context.component);
  }

  // In production, you might want to send to external monitoring services
  // like Sentry, LogRocket, or custom logging endpoints
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to custom logging endpoint
    sendToLoggingService(errorReport).catch(console.error);
  }
}

/**
 * Send error report to logging service
 */
async function sendToLoggingService(errorReport: ErrorReport): Promise<void> {
  try {
    // This would be your custom logging endpoint
    await fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorReport),
    });
  } catch (error) {
    // Don't create infinite loops by reporting errors about error reporting
    console.warn('Failed to send error report:', error);
  }
}

/**
 * Determine error severity based on error and context
 */
function determineSeverity(error: Error, context: Partial<ErrorContext>): ErrorSeverity {
  const message = error.message.toLowerCase();
  
  // Critical errors
  if (message.includes('network error') || 
      message.includes('failed to fetch') ||
      message.includes('script error')) {
    return ErrorSeverity.CRITICAL;
  }
  
  // High severity errors
  if (message.includes('typeerror') ||
      message.includes('referenceerror') ||
      context.component === 'payment' ||
      context.component === 'checkout') {
    return ErrorSeverity.HIGH;
  }
  
  // Medium severity errors
  if (message.includes('syntaxerror') ||
      message.includes('rangeerror') ||
      context.component === 'form') {
    return ErrorSeverity.MEDIUM;
  }
  
  // Default to low severity
  return ErrorSeverity.LOW;
}

/**
 * Throttle similar errors to prevent spam
 */
function shouldThrottleError(): boolean {
  const now = Date.now();
  
  // Check if we've hit the error limit
  if (errorCount >= MAX_ERRORS_PER_SESSION) {
    return true;
  }
  
  // Check if we're within the throttle window
  if (now - lastErrorTime < ERROR_THROTTLE_MS) {
    return true;
  }
  
  errorCount++;
  lastErrorTime = now;
  return false;
}

/**
 * Get or create session ID
 */
function getSessionId(): string {
  if (typeof window === 'undefined') return 'server';
  
  let sessionId = sessionStorage.getItem('error_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('error_session_id', sessionId);
  }
  return sessionId;
}

/**
 * Create error boundary for React components
 */
export function createErrorBoundary(componentName: string) {
  return function handleComponentError(error: Error, errorInfo: React.ErrorInfo) {
    handleJavaScriptError(error, {
      component: componentName,
      action: 'component_error',
      additionalData: {
        componentStack: errorInfo.componentStack,
      },
    });
  };
}

/**
 * Manually report custom errors
 */
export function reportCustomError(
  message: string,
  type: ErrorType = ErrorType.JAVASCRIPT,
  severity: ErrorSeverity = ErrorSeverity.MEDIUM,
  context: Partial<ErrorContext> = {}
): void {
  const errorReport: ErrorReport = {
    type,
    severity,
    message,
    context: {
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
      ...context,
    },
  };

  reportError(errorReport);
}

/**
 * Check for broken links and missing resources
 */
export function checkBrokenLinks(): void {
  if (typeof window === 'undefined') return;

  const links = document.querySelectorAll('a[href]');
  const images = document.querySelectorAll('img[src]');
  
  // Check internal links
  links.forEach((link) => {
    const href = (link as HTMLAnchorElement).href;
    if (href.startsWith(window.location.origin)) {
      // Only check internal links to avoid CORS issues
      fetch(href, { method: 'HEAD' })
        .then((response) => {
          if (!response.ok) {
            reportCustomError(
              `Broken internal link: ${href}`,
              ErrorType.RESOURCE,
              ErrorSeverity.LOW,
              {
                component: 'link_checker',
                additionalData: {
                  linkHref: href,
                  linkText: link.textContent?.substring(0, 100),
                  status: response.status,
                },
              }
            );
          }
        })
        .catch((error) => {
          reportCustomError(
            `Failed to check link: ${href}`,
            ErrorType.NETWORK,
            ErrorSeverity.LOW,
            {
              component: 'link_checker',
              additionalData: {
                linkHref: href,
                error: error.message,
              },
            }
          );
        });
    }
  });

  // Check images
  images.forEach((img) => {
    const imgElement = img as HTMLImageElement;
    const src = imgElement.src;
    if (!imgElement.complete || imgElement.naturalWidth === 0) {
      reportCustomError(
        `Failed to load image: ${src}`,
        ErrorType.RESOURCE,
        ErrorSeverity.LOW,
        {
          component: 'image_checker',
          additionalData: {
            imageSrc: src,
            imageAlt: imgElement.alt,
          },
        }
      );
    }
  });
}

/**
 * Monitor critical performance metrics
 */
export function monitorCriticalMetrics(): void {
  if (typeof window === 'undefined') return;

  // Monitor page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    if (loadTime > 3000) { // Page took longer than 3 seconds
      reportCustomError(
        `Slow page load: ${loadTime.toFixed(0)}ms`,
        ErrorType.PERFORMANCE,
        ErrorSeverity.MEDIUM,
        {
          component: 'performance_monitor',
          additionalData: {
            loadTime,
            url: window.location.href,
          },
        }
      );
    }
  });

  // Monitor JavaScript errors in console
  const originalConsoleError = console.error;
  console.error = function(...args) {
    const message = args.join(' ');
    if (message && !message.includes('Error Report:')) { // Avoid infinite loops
      reportCustomError(
        `Console error: ${message}`,
        ErrorType.JAVASCRIPT,
        ErrorSeverity.LOW,
        {
          component: 'console_monitor',
          additionalData: {
            consoleArgs: args,
          },
        }
      );
    }
    originalConsoleError.apply(console, args);
  };
}
