"use client";

import { useEffect } from 'react';
import { initializeCacheManagement } from '@/lib/cache-management';
import { initializeCriticalCSS } from '@/lib/critical-css';

/**
 * Cache Initializer Component
 * Initializes cache management, resource preloading, and critical CSS
 */
export default function CacheInitializer() {
  useEffect(() => {
    // Initialize cache management on client side
    initializeCacheManagement();
    
    // Initialize critical CSS optimizations
    initializeCriticalCSS();
  }, []);

  return null; // This component doesn't render anything
}