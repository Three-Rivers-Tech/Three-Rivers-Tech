"use client";

import { useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { 
  initializeAnalytics, 
  trackPageView, 
  trackError,
  trackEvent,
  trackConversion,
  trackFormSubmission,
  trackPhoneClick,
  trackEmailClick,
  trackServiceView
} from '@/lib/analytics';

/**
 * Analytics component that initializes Google Analytics and tracks page views
 */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize analytics on mount
    initializeAnalytics();

    // Set up global error tracking
    const handleError = (event: ErrorEvent) => {
      trackError(new Error(event.message), `${event.filename}:${event.lineno}:${event.colno}`);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackError(new Error(String(event.reason)), 'unhandled_promise_rejection');
    };

    // Add global error listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (pathname) {
      trackPageView(pathname, document.title);
    }
  }, [pathname]);

  return null; // This component doesn't render anything
}

/**
 * Hook to track events from components
 * Now with optimized imports - functions are imported once and memoized
 */
export function useAnalytics() {
  return useMemo(() => ({
    trackEvent,
    trackConversion,
    trackFormSubmission,
    trackPhoneClick,
    trackEmailClick,
    trackServiceView,
  }), []);
}