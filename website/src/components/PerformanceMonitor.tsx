"use client";

import { useEffect } from 'react';
import { monitorBundlePerformance } from '@/lib/bundle-optimization';

/**
 * Performance monitoring component
 * Tracks bundle loading performance and reports issues
 */
export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV === 'production') {
      monitorBundlePerformance();
    }
    
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            if (lcp > 2500) { // Poor LCP threshold
              console.warn('Poor LCP detected:', `${lcp.toFixed(2)}ms`);
            }
          }
          
          // Track First Input Delay (FID)
          if (entry.entryType === 'first-input') {
            const fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
            if (fid > 100) { // Poor FID threshold
              console.warn('Poor FID detected:', `${fid.toFixed(2)}ms`);
            }
          }
          
          // Track Cumulative Layout Shift (CLS)
          if (entry.entryType === 'layout-shift' && !(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
            const cls = (entry as PerformanceEntry & { value: number }).value;
            if (cls > 0.1) { // Poor CLS threshold
              console.warn('Layout shift detected:', cls);
            }
          }
        });
      });
      
      // Observe Core Web Vitals
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch {
        // Fallback for browsers that don't support all entry types
        console.info('Some performance metrics not supported in this browser');
      }
      
      // Cleanup observer
      return () => observer.disconnect();
    }
  }, []);
  
  return null; // This component doesn't render anything
}
