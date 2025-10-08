/**
 * Google Analytics utilities for tracking events and conversions
 */



// Analytics configuration
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Event types for type safety
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
}

// Predefined event types
export const ANALYTICS_EVENTS = {
  // Form events
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CONTACT_FORM_ERROR: 'contact_form_error',
  CONTACT_FORM_SUCCESS: 'contact_form_success',
  
  // User interactions
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  CALENDAR_BOOKING: 'calendar_booking',
  
  // Navigation
  PAGE_VIEW: 'page_view',
  EXTERNAL_LINK_CLICK: 'external_link_click',
  
  // Service interactions
  SERVICE_VIEW: 'service_view',
  SERVICE_INQUIRY: 'service_inquiry',
  
  // Performance
  CORE_WEB_VITALS: 'core_web_vitals',
  
  // Errors
  JAVASCRIPT_ERROR: 'javascript_error',
  API_ERROR: 'api_error',
} as const;

// Conversion goals
export const CONVERSION_GOALS = {
  CONTACT_FORM_SUBMISSION: 'contact_form_submission',
  PHONE_CALL: 'phone_call',
  EMAIL_CONTACT: 'email_contact',
  CALENDAR_BOOKING: 'calendar_booking',
} as const;

/**
 * Initialize Google Analytics
 */
export function initializeAnalytics(): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return;
  }

  // Initialize dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];

  // Initialize gtag function
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args as unknown as Record<string, unknown>);
  };

  // Configure Google Analytics
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    // Enhanced ecommerce and conversion tracking
    send_page_view: true,
    allow_google_signals: true,
    allow_ad_personalization_signals: true,
    
    // Custom parameters
    custom_map: {
      custom_parameter_1: 'service_type',
      custom_parameter_2: 'user_type',
    },
    
    // Privacy settings
    anonymize_ip: true,
    
    // Performance settings
    transport_type: 'beacon',
  });

  console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
}

/**
 * Track a custom event
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Analytics not available');
    return;
  }

  try {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters,
    });

    console.log('Analytics event tracked:', event);
  } catch (error) {
    console.error('Error tracking analytics event:', error);
  }
}

/**
 * Track conversion goals
 */
export function trackConversion(goal: string, value?: number, currency = 'USD'): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  try {
    window.gtag('event', 'conversion', {
      send_to: GA_MEASUREMENT_ID,
      event_category: 'conversion',
      event_label: goal,
      value: value,
      currency: currency,
    });

    console.log('Conversion tracked:', { goal, value, currency });
  } catch (error) {
    console.error('Error tracking conversion:', error);
  }
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName: string, success: boolean, errorMessage?: string): void {
  const event: AnalyticsEvent = {
    action: success ? ANALYTICS_EVENTS.CONTACT_FORM_SUCCESS : ANALYTICS_EVENTS.CONTACT_FORM_ERROR,
    category: 'form',
    label: formName,
    custom_parameters: {
      form_name: formName,
      success: success,
      error_message: errorMessage,
    },
  };

  trackEvent(event);

  // Track conversion if successful
  if (success) {
    trackConversion(CONVERSION_GOALS.CONTACT_FORM_SUBMISSION);
  }
}

/**
 * Track phone number clicks
 */
export function trackPhoneClick(phoneNumber: string): void {
  const event: AnalyticsEvent = {
    action: ANALYTICS_EVENTS.PHONE_CLICK,
    category: 'contact',
    label: phoneNumber,
    custom_parameters: {
      contact_method: 'phone',
      phone_number: phoneNumber,
    },
  };

  trackEvent(event);
  trackConversion(CONVERSION_GOALS.PHONE_CALL);
}

/**
 * Track email clicks
 */
export function trackEmailClick(email: string): void {
  const event: AnalyticsEvent = {
    action: ANALYTICS_EVENTS.EMAIL_CLICK,
    category: 'contact',
    label: email,
    custom_parameters: {
      contact_method: 'email',
      email_address: email,
    },
  };

  trackEvent(event);
  trackConversion(CONVERSION_GOALS.EMAIL_CONTACT);
}

/**
 * Track external link clicks
 */
export function trackExternalLinkClick(url: string, linkText?: string): void {
  const event: AnalyticsEvent = {
    action: ANALYTICS_EVENTS.EXTERNAL_LINK_CLICK,
    category: 'navigation',
    label: url,
    custom_parameters: {
      link_url: url,
      link_text: linkText,
    },
  };

  trackEvent(event);
}

/**
 * Track service page views
 */
export function trackServiceView(serviceName: string): void {
  const event: AnalyticsEvent = {
    action: ANALYTICS_EVENTS.SERVICE_VIEW,
    category: 'service',
    label: serviceName,
    custom_parameters: {
      service_name: serviceName,
    },
  };

  trackEvent(event);
}

/**
 * Track Core Web Vitals
 */
export function trackWebVital(metric: { name: string; value: number; id: string }): void {
  const event: AnalyticsEvent = {
    action: ANALYTICS_EVENTS.CORE_WEB_VITALS,
    category: 'performance',
    label: metric.name,
    value: Math.round(metric.value),
    custom_parameters: {
      metric_name: metric.name,
      metric_id: metric.id,
      metric_value: metric.value,
    },
  };

  trackEvent(event);
}

/**
 * Track JavaScript errors
 */
export function trackError(error: Error, context?: string): void {
  const event: AnalyticsEvent = {
    action: ANALYTICS_EVENTS.JAVASCRIPT_ERROR,
    category: 'error',
    label: error.message,
    custom_parameters: {
      error_message: error.message,
      error_stack: error.stack,
      error_context: context,
    },
  };

  trackEvent(event);
}

/**
 * Track API errors
 */
export function trackApiError(endpoint: string, status: number, message: string): void {
  const event: AnalyticsEvent = {
    action: ANALYTICS_EVENTS.API_ERROR,
    category: 'api_error',
    label: endpoint,
    value: status,
    custom_parameters: {
      endpoint: endpoint,
      status_code: status,
      error_message: message,
    },
  };

  trackEvent(event);
}

/**
 * Set user properties
 */
export function setUserProperties(properties: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  try {
    window.gtag('set', properties);
    console.log('User properties set:', properties);
  } catch (error) {
    console.error('Error setting user properties:', error);
  }
}

/**
 * Track page views manually (for SPA navigation)
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  try {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title,
    });

    console.log('Page view tracked:', { path, title });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
}
