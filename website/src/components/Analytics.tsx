"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initializeAnalytics, trackPageView, trackError } from '@/lib/analytics';

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
 */
export function useAnalytics() {
  return {
    trackEvent: (event: import('@/lib/analytics').AnalyticsEvent) => {
      import('@/lib/analytics').then(({ trackEvent }) => trackEvent(event));
    },
    trackConversion: (goal: string, value?: number) => {
      import('@/lib/analytics').then(({ trackConversion }) => trackConversion(goal, value));
    },
    trackFormSubmission: (formName: string, success: boolean, errorMessage?: string) => {
      import('@/lib/analytics').then(({ trackFormSubmission }) => 
        trackFormSubmission(formName, success, errorMessage)
      );
    },
    trackPhoneClick: (phoneNumber: string) => {
      import('@/lib/analytics').then(({ trackPhoneClick }) => trackPhoneClick(phoneNumber));
    },
    trackEmailClick: (email: string) => {
      import('@/lib/analytics').then(({ trackEmailClick }) => trackEmailClick(email));
    },
    trackServiceView: (serviceName: string) => {
      import('@/lib/analytics').then(({ trackServiceView }) => trackServiceView(serviceName));
    },
  };
}