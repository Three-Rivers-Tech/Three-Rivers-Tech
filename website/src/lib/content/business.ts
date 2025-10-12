// Business Information Utilities
// This file provides centralized access to business information to ensure consistency

import businessData from '@/content/global/business.json';
import { BusinessInfo } from '@/lib/types/content';

export const business: BusinessInfo = businessData as BusinessInfo;

// Utility functions for consistent formatting
export const formatPhone = (phone: string): string => {
  return phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

export const formatPhoneForTel = (phone: string): string => {
  return `+1-${phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}`;
};

export const formatAddress = (address: typeof business.address): string => {
  return `${address.street}, ${address.city}, ${address.state} ${address.zipCode}`;
};

export const formatBusinessHours = (hours: typeof business.hours): string[] => {
  return hours.map(hour => {
    if (hour.closed) {
      return `${hour.day}: Closed`;
    }
    return `${hour.day}: ${hour.open} - ${hour.close}`;
  });
};

// Structured data helpers
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": business.name,
  "description": business.description,
  "url": "https://threeriverstech.com",
  "logo": "https://threeriverstech.com/company_logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": formatPhoneForTel(business.phone),
    "contactType": "Customer Service",
    "email": business.email
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": business.address.street,
    "addressLocality": business.address.city,
    "addressRegion": business.address.state,
    "postalCode": business.address.zipCode,
    "addressCountry": "US"
  },
  "sameAs": [
    business.socialMedia.linkedin,
    business.socialMedia.facebook,
    business.socialMedia.twitter
  ].filter(Boolean)
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": business.name,
  "image": "https://threeriverstech.com/company_logo.png",
  "telephone": formatPhoneForTel(business.phone),
  "email": business.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": business.address.street,
    "addressLocality": business.address.city,
    "addressRegion": business.address.state,
    "postalCode": business.address.zipCode,
    "addressCountry": "US"
  },
  "openingHoursSpecification": business.hours
    .filter(hour => !hour.closed)
    .map(hour => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hour.day,
      "opens": hour.open.replace(/\s/g, '').replace(/AM|PM/i, '').padStart(5, '0'),
      "closes": hour.close.replace(/\s/g, '').replace(/AM|PM/i, '').padStart(5, '0')
    })),
  "priceRange": "$",
  "sameAs": [
    business.socialMedia.linkedin,
    business.socialMedia.facebook,
    business.socialMedia.twitter
  ].filter(Boolean)
});