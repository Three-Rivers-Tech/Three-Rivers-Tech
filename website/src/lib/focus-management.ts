/**
 * Focus management utilities for accessibility
 */

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'textarea:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(', ');

  return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
}

/**
 * Trap focus within a container (useful for modals, menus)
 */
export function trapFocus(container: HTMLElement, event: KeyboardEvent): void {
  if (event.key !== 'Tab') return;

  const focusableElements = getFocusableElements(container);
  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey) {
    // Shift + Tab
    if (document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
  } else {
    // Tab
    if (document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
}

/**
 * Move focus to the next/previous element in a list
 */
export function moveFocus(
  elements: HTMLElement[],
  currentIndex: number,
  direction: 'next' | 'previous' | 'first' | 'last'
): number {
  let newIndex = currentIndex;

  switch (direction) {
    case 'next':
      newIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
      break;
    case 'previous':
      newIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
      break;
    case 'first':
      newIndex = 0;
      break;
    case 'last':
      newIndex = elements.length - 1;
      break;
  }

  if (elements[newIndex]) {
    elements[newIndex].focus();
  }

  return newIndex;
}

/**
 * Handle arrow key navigation for menu items
 */
export function handleMenuNavigation(
  event: KeyboardEvent,
  menuItems: HTMLElement[],
  currentIndex: number,
  options: {
    orientation?: 'horizontal' | 'vertical';
    loop?: boolean;
    onSelect?: (index: number) => void;
    onEscape?: () => void;
  } = {}
): number {
  const { orientation = 'vertical', loop = true, onSelect, onEscape } = options;
  let newIndex = currentIndex;

  switch (event.key) {
    case 'ArrowDown':
      if (orientation === 'vertical') {
        event.preventDefault();
        newIndex = loop 
          ? (currentIndex + 1) % menuItems.length
          : Math.min(currentIndex + 1, menuItems.length - 1);
        menuItems[newIndex]?.focus();
      }
      break;

    case 'ArrowUp':
      if (orientation === 'vertical') {
        event.preventDefault();
        newIndex = loop
          ? currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1
          : Math.max(currentIndex - 1, 0);
        menuItems[newIndex]?.focus();
      }
      break;

    case 'ArrowRight':
      if (orientation === 'horizontal') {
        event.preventDefault();
        newIndex = loop
          ? (currentIndex + 1) % menuItems.length
          : Math.min(currentIndex + 1, menuItems.length - 1);
        menuItems[newIndex]?.focus();
      }
      break;

    case 'ArrowLeft':
      if (orientation === 'horizontal') {
        event.preventDefault();
        newIndex = loop
          ? currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1
          : Math.max(currentIndex - 1, 0);
        menuItems[newIndex]?.focus();
      }
      break;

    case 'Home':
      event.preventDefault();
      newIndex = 0;
      menuItems[newIndex]?.focus();
      break;

    case 'End':
      event.preventDefault();
      newIndex = menuItems.length - 1;
      menuItems[newIndex]?.focus();
      break;

    case 'Enter':
    case ' ':
      event.preventDefault();
      onSelect?.(currentIndex);
      break;

    case 'Escape':
      event.preventDefault();
      onEscape?.();
      break;
  }

  return newIndex;
}

/**
 * Restore focus to a previously focused element
 */
export function restoreFocus(element: HTMLElement | null): void {
  if (element && typeof element.focus === 'function') {
    // Use setTimeout to ensure the element is ready to receive focus
    setTimeout(() => {
      element.focus();
    }, 0);
  }
}

/**
 * Check if an element is currently visible and focusable
 */
export function isFocusable(element: HTMLElement): boolean {
  if (!element || element.hidden) return false;

  const style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden') return false;

  // Check if element is disabled
  if (element.hasAttribute('disabled')) return false;

  // Check tabindex
  const tabIndex = element.getAttribute('tabindex');
  if (tabIndex === '-1') return false;

  return true;
}

/**
 * Announce text to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove the announcement after a short delay
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}
