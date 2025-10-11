"use client";

import { useEffect } from 'react';
import { initKeyboardNavigation } from '@/lib/focus-management';

export default function AccessibilityInitializer() {
  useEffect(() => {
    // Initialize keyboard navigation detection
    initKeyboardNavigation();
    
    // Add senior-friendly class if user prefers larger text
    const prefersLargeText = window.matchMedia('(prefers-contrast: high)').matches ||
                            localStorage.getItem('accessibility-settings')?.includes('"largeText":true');
    
    if (prefersLargeText) {
      document.documentElement.classList.add('senior-friendly');
    }
    
    // Add colorblind-friendly patterns if needed
    document.documentElement.classList.add('colorblind-patterns');
    
    // Announce page load to screen readers
    setTimeout(() => {
      const pageTitle = document.title;
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page loaded: ${pageTitle}`;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        if (document.body.contains(announcement)) {
          document.body.removeChild(announcement);
        }
      }, 2000);
    }, 1000);
    
  }, []);

  return null; // This component doesn't render anything
}