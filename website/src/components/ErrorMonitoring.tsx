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
    // Check if error logging API is working
    const response = await fetch('/api/errors', {
      method: 'GET',
    });

    if (!response.ok) {
      console.warn('Error logging API health check failed:', response.status);
    }

    // Check if contact API is working
    const contactHealthResponse = await fetch('/api/contact', {
      method: 'OPTIONS', // Use OPTIONS to avoid triggering actual email
    });

    if (!contactHealthResponse.ok && contactHealthResponse.status !== 405) {
      console.warn('Contact API health check failed:', contactHealthResponse.status);
    }

  } catch (error) {
    console.warn('Health check failed:', error);
  }
}