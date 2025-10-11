/**
 * Dynamic import utilities for code splitting and lazy loading
 * Implements performance optimization for non-critical components
 */

import { lazy, ComponentType } from 'react';

// Dynamic import wrapper with error handling
export function createDynamicImport<T extends ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
  fallback?: ComponentType<unknown>
) {
  return lazy(async () => {
    try {
      return await importFn();
    } catch (error) {
      console.error('Dynamic import failed:', error);
      // Return fallback component or empty component
      return {
        default: fallback || (() => null) as unknown as T
      };
    }
  });
}

// Lazy load non-critical components
export const LazySearch = lazy(() => import('@/app/components/Search'));

export const LazyOpenGraphPreview = lazy(() => import('@/components/OpenGraphPreview'));

export const LazySocialShare = lazy(() => import('@/components/SocialShare'));

// Lazy load page-specific components
export const LazyTestimonials = lazy(() => import('@/app/components/Testimonials'));

export const LazyWhyChooseUs = lazy(() => import('@/app/components/WhyChooseUs'));

// Preload critical components on interaction
export const preloadComponent = (importFn: () => Promise<unknown>) => {
  return () => {
    // Preload on hover/focus for better UX
    importFn().catch(console.error);
  };
};

// Preload functions for critical components
export const preloadSearch = preloadComponent(() => import('@/app/components/Search'));
export const preloadTestimonials = preloadComponent(() => import('@/app/components/Testimonials'));
export const preloadWhyChooseUs = preloadComponent(() => import('@/app/components/WhyChooseUs'));
