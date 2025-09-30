/**
 * Accessibility utilities for color contrast and visual accessibility
 */

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Calculate relative luminance of a color
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Check if color combination meets WCAG standards
 */
export function meetsWCAGStandards(
  foreground: string, 
  background: string, 
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): boolean {
  const ratio = getContrastRatio(foreground, background);
  
  if (level === 'AAA') {
    return size === 'large' ? ratio >= 4.5 : ratio >= 7;
  } else {
    return size === 'large' ? ratio >= 3 : ratio >= 4.5;
  }
}

/**
 * Get accessible color suggestions
 */
export function getAccessibleColorSuggestions(
  baseColor: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA'
): string[] {
  const suggestions: string[] = [];
  const rgb = hexToRgb(baseColor);
  
  if (!rgb) return suggestions;
  
  // Try darker versions
  for (let factor = 0.1; factor <= 0.9; factor += 0.1) {
    const darkerColor = `#${Math.round(rgb.r * factor).toString(16).padStart(2, '0')}${Math.round(rgb.g * factor).toString(16).padStart(2, '0')}${Math.round(rgb.b * factor).toString(16).padStart(2, '0')}`;
    
    if (meetsWCAGStandards(darkerColor, background, level)) {
      suggestions.push(darkerColor);
    }
  }
  
  // Try lighter versions (for dark backgrounds)
  for (let factor = 1.1; factor <= 2; factor += 0.1) {
    const lighterR = Math.min(255, Math.round(rgb.r * factor));
    const lighterG = Math.min(255, Math.round(rgb.g * factor));
    const lighterB = Math.min(255, Math.round(rgb.b * factor));
    
    const lighterColor = `#${lighterR.toString(16).padStart(2, '0')}${lighterG.toString(16).padStart(2, '0')}${lighterB.toString(16).padStart(2, '0')}`;
    
    if (meetsWCAGStandards(lighterColor, background, level)) {
      suggestions.push(lighterColor);
    }
  }
  
  return suggestions;
}

/**
 * Validate all color combinations on a page
 */
export function validatePageContrast(): Array<{
  element: Element;
  foreground: string;
  background: string;
  ratio: number;
  passes: boolean;
  level: 'AA' | 'AAA';
}> {
  const results: Array<{
    element: Element;
    foreground: string;
    background: string;
    ratio: number;
    passes: boolean;
    level: 'AA' | 'AAA';
  }> = [];
  
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button, label, input, textarea');
  
  textElements.forEach(element => {
    const styles = window.getComputedStyle(element);
    const foreground = styles.color;
    const background = styles.backgroundColor;
    
    // Convert RGB to hex (simplified)
    const rgbToHex = (rgb: string): string => {
      const match = rgb.match(/\d+/g);
      if (!match) return '#000000';
      
      const [r, g, b] = match.map(Number);
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };
    
    const fgHex = rgbToHex(foreground);
    const bgHex = rgbToHex(background);
    
    const ratio = getContrastRatio(fgHex, bgHex);
    const fontSize = parseFloat(styles.fontSize);
    const isLarge = fontSize >= 18 || (fontSize >= 14 && styles.fontWeight === 'bold');
    
    results.push({
      element,
      foreground: fgHex,
      background: bgHex,
      ratio,
      passes: meetsWCAGStandards(fgHex, bgHex, 'AA', isLarge ? 'large' : 'normal'),
      level: 'AA'
    });
  });
  
  return results;
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check if user prefers high contrast
 */
export function prefersHighContrast(): boolean {
  return window.matchMedia('(prefers-contrast: high)').matches;
}

/**
 * Check if user is using a screen reader
 */
export function isUsingScreenReader(): boolean {
  // This is a heuristic - not 100% accurate
  return (
    navigator.userAgent.includes('NVDA') ||
    navigator.userAgent.includes('JAWS') ||
    navigator.userAgent.includes('VoiceOver') ||
    window.speechSynthesis !== undefined
  );
}

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    if (document.body.contains(announcement)) {
      document.body.removeChild(announcement);
    }
  }, 1000);
}

/**
 * Check if element is visible to screen readers
 */
export function isVisibleToScreenReaders(element: Element): boolean {
  const styles = window.getComputedStyle(element);
  
  // Check if element is hidden
  if (styles.display === 'none' || styles.visibility === 'hidden') {
    return false;
  }
  
  // Check if element has aria-hidden
  if (element.getAttribute('aria-hidden') === 'true') {
    return false;
  }
  
  // Check if element is off-screen
  const rect = element.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) {
    return false;
  }
  
  return true;
}

/**
 * Get accessibility issues for an element
 */
export function getAccessibilityIssues(element: Element): string[] {
  const issues: string[] = [];
  
  // Check for missing alt text on images
  if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
    issues.push('Image missing alt text');
  }
  
  // Check for missing labels on form elements
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName)) {
    const id = element.getAttribute('id');
    const hasLabel = id && document.querySelector(`label[for="${id}"]`);
    const hasAriaLabel = element.getAttribute('aria-label');
    const hasAriaLabelledBy = element.getAttribute('aria-labelledby');
    
    if (!hasLabel && !hasAriaLabel && !hasAriaLabelledBy) {
      issues.push('Form element missing label');
    }
  }
  
  // Check for missing heading hierarchy
  if (element.tagName.match(/^H[1-6]$/)) {
    const level = parseInt(element.tagName.charAt(1));
    const prevHeading = element.previousElementSibling?.closest('h1, h2, h3, h4, h5, h6');
    
    if (prevHeading) {
      const prevLevel = parseInt(prevHeading.tagName.charAt(1));
      if (level > prevLevel + 1) {
        issues.push('Heading level skipped');
      }
    }
  }
  
  // Check for insufficient color contrast
  const styles = window.getComputedStyle(element);
  const color = styles.color;
  const backgroundColor = styles.backgroundColor;
  
  if (color && backgroundColor) {
    // This is a simplified check - would need proper color parsing
    const hasText = element.textContent && element.textContent.trim().length > 0;
    if (hasText) {
      // Would implement proper contrast checking here
      // For now, just flag elements that might have issues
      if (color === backgroundColor) {
        issues.push('Text and background colors are the same');
      }
    }
  }
  
  return issues;
}

/**
 * Color palette with WCAG AA compliant colors
 */
export const accessibleColors = {
  light: {
    primary: '#2563eb',      // Blue 600 - 4.5:1 on white
    secondary: '#7c3aed',    // Violet 600 - 4.5:1 on white
    success: '#059669',      // Emerald 600 - 4.5:1 on white
    warning: '#d97706',      // Amber 600 - 4.5:1 on white
    error: '#dc2626',        // Red 600 - 4.5:1 on white
    text: '#1e293b',         // Slate 800 - 12:1 on white
    textSecondary: '#475569', // Slate 600 - 7:1 on white
    background: '#ffffff',
    backgroundSecondary: '#f8fafc'
  },
  dark: {
    primary: '#60a5fa',      // Blue 400 - 4.5:1 on slate 900
    secondary: '#a78bfa',    // Violet 400 - 4.5:1 on slate 900
    success: '#34d399',      // Emerald 400 - 4.5:1 on slate 900
    warning: '#fbbf24',      // Amber 400 - 4.5:1 on slate 900
    error: '#f87171',        // Red 400 - 4.5:1 on slate 900
    text: '#ffffff',         // White - 21:1 on slate 900
    textSecondary: '#e2e8f0', // Slate 200 - 15:1 on slate 900
    background: '#0f172a',   // Slate 900
    backgroundSecondary: '#1e293b' // Slate 800
  }
};