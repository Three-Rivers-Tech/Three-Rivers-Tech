"use client";

import { useEffect } from 'react';

/**
 * Service Worker Registration Component
 * Registers the service worker for caching and offline functionality
 */
export default function ServiceWorkerRegistration() {
  useEffect(() => {
    // Only register service worker in production and if supported
    if (
      process.env.NODE_ENV === 'production' &&
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      registerServiceWorker();
    }
  }, []);

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      console.log('Service Worker registered successfully:', registration);

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, notify user
              console.log('New content available! Please refresh the page.');
              
              // Optionally show a notification to the user
              if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('Three Rivers Tech', {
                  body: 'New content is available! Please refresh the page.',
                  icon: '/company_logo.png',
                  badge: '/favicon-circle-32x32.png'
                });
              }
            }
          });
        }
      });

      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('Cache updated:', event.data.payload);
        }
      });

    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  };

  return null; // This component doesn't render anything
}