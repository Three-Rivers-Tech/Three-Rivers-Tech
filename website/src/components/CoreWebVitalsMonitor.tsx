"use client";

import { useEffect } from 'react';
import { initializeCoreWebVitals, reportWebVitals } from '@/lib/core-web-vitals';
import { trackWebVital } from '@/lib/analytics';

/**
 * Core Web Vitals Monitor Component
 * Initializes Core Web Vitals optimizations and monitoring
 */
export default function CoreWebVitalsMonitor() {
  useEffect(() => {
    // Initialize Core Web Vitals optimizations
    initializeCoreWebVitals();

    // Set up Web Vitals reporting using the web-vitals library pattern
    if (typeof window !== 'undefined') {
      // Measure and report LCP
      const measureLCP = () => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              const metric = {
                name: 'LCP',
                value: lastEntry.startTime,
                id: `lcp-${Date.now()}`
              };
              reportWebVitals(metric);
              trackWebVital(metric);
            }
          });

          try {
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch {
            console.warn('LCP measurement not supported');
          }
        }
      };

      // Measure and report FID
      const measureFID = () => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              const fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
              const metric = {
                name: 'FID',
                value: fid,
                id: `fid-${Date.now()}`
              };
              reportWebVitals(metric);
              trackWebVital(metric);
            });
          });

          try {
            observer.observe({ entryTypes: ['first-input'] });
          } catch {
            console.warn('FID measurement not supported');
          }
        }
      };

      // Measure and report CLS
      const measureCLS = () => {
        if ('PerformanceObserver' in window) {
          let clsValue = 0;

          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
                clsValue += (entry as PerformanceEntry & { value: number }).value;
              }
            });

            const metric = {
              name: 'CLS',
              value: clsValue,
              id: `cls-${Date.now()}`
            };
            reportWebVitals(metric);
            trackWebVital(metric);
          });

          try {
            observer.observe({ entryTypes: ['layout-shift'] });
          } catch {
            console.warn('CLS measurement not supported');
          }
        }
      };

      // Start measurements
      measureLCP();
      measureFID();
      measureCLS();

      // Also measure Time to First Byte (TTFB) and First Contentful Paint (FCP)
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

        if (navigation) {
          // TTFB
          const ttfb = navigation.responseStart - navigation.requestStart;
          const ttfbMetric = {
            name: 'TTFB',
            value: ttfb,
            id: `ttfb-${Date.now()}`
          };
          reportWebVitals(ttfbMetric);
          trackWebVital(ttfbMetric);

          // FCP
          if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
              list.getEntries().forEach((entry) => {
                if (entry.name === 'first-contentful-paint') {
                  const metric = {
                    name: 'FCP',
                    value: entry.startTime,
                    id: `fcp-${Date.now()}`
                  };
                  reportWebVitals(metric);
                  trackWebVital(metric);
                }
              });
            });

            try {
              observer.observe({ entryTypes: ['paint'] });
            } catch {
              console.warn('FCP measurement not supported');
            }
          }
        }
      });
    }
  }, []);

  return null; // This component doesn't render anything
}
