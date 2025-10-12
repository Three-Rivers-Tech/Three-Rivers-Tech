"use client";

import { useEffect } from 'react';
import { 
  initializeErrorMonitoring, 
  checkBrokenLinks, 
  monitorCriticalMetrics 
} from '@/lib/error-monitoring';

/**
 * Error Monitoring component that initializes comprehensive error tracking
 */
export default function ErrorMonitoring() {
  useEffect(() => {
    // Initialize error monitoring
    initializeErrorMonitoring();
    
    // Monitor critical performance metrics
    monitorCriticalMetrics();

    // Check for broken links after page load
    const checkLinksTimer = setTimeout(() => {
      checkBrokenLinks();
    }, 2000); // Wait 2 seconds after component mount

    // Periodic health checks
    const healthCheckInterval = setInterval(() => {
      // Check if critical services are working
      performHealthCheck();
    }, 300000); // Every 5 minutes

    // Cleanup
    return () => {
      clearTimeout(checkLinksTimer);
      clearInterval(healthCheckInterval);
    };
  }, []);

  return null; // This component doesn't render anything
}

/**
 * Perform periodic health checks
 */
async function performHealthCheck() {
  try {
    // For static export, we'll focus on client-side health checks
    // Check basic browser functionality
    if (typeof window !== 'undefined') {
      // Check localStorage availability
      try {
        localStorage.setItem('health_check', 'test');
        localStorage.removeItem('health_check');
      } catch (error) {
        console.warn('localStorage not available:', error);
      }

      // Check sessionStorage availability
      try {
        sessionStorage.setItem('health_check', 'test');
        sessionStorage.removeItem('health_check');
      } catch (error) {
        console.warn('sessionStorage not available:', error);
      }

      // Check if critical DOM elements are present
      const criticalElements = ['header', 'main', 'footer'];
      criticalElements.forEach(selector => {
        if (!document.querySelector(selector)) {
          console.warn(`Critical element missing: ${selector}`);
        }
      });
    }

  } catch (error) {
    console.warn('Health check failed:', error);
  }
}