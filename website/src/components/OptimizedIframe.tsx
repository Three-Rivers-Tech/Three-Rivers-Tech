"use client";

import { useState } from "react";

export interface OptimizedIframeProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  allowFullScreen?: boolean;
  sandbox?: string;
  loading?: "lazy" | "eager";
  referrerPolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
}

/**
 * Optimized iframe component with modern attributes and accessibility features
 */
export default function OptimizedIframe({
  src,
  title,
  width = "100%",
  height = "600",
  className = "",
  allowFullScreen = false,
  sandbox,
  loading = "lazy",
  referrerPolicy = "strict-origin-when-cross-origin"
}: OptimizedIframeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="alert"
        aria-label="Content failed to load"
      >
        <div className="text-center p-6">
          <div className="text-gray-500 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-600 font-medium">Content unavailable</p>
          <p className="text-gray-500 text-sm mt-1">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className={`absolute inset-0 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center ${className}`}
          style={{ width, height }}
          aria-label="Loading content"
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Loading...</p>
          </div>
        </div>
      )}
      
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        referrerPolicy={referrerPolicy}
        allowFullScreen={allowFullScreen}
        sandbox={sandbox}
        // Modern security and accessibility attributes
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // Remove deprecated attributes (frameBorder, scrolling are not used)
        style={{ border: 0 }}
        // Accessibility improvements
        role="application"
        aria-label={title}
        tabIndex={0}
      />
    </div>
  );
}

/**
 * Specialized iframe for Google Calendar bookings
 */
export function GoogleCalendarIframe({ 
  src, 
  className = "",
  height = 600 
}: { 
  src: string; 
  className?: string;
  height?: number;
}) {
  return (
    <div className="w-full border-2 border-border rounded-lg overflow-hidden bg-background-secondary">
      <OptimizedIframe
        src={src}
        title="Schedule an appointment with Three Rivers Tech - Google Calendar booking system"
        width="100%"
        height={height}
        className={`w-full ${className}`}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        // Google Calendar specific sandbox permissions
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
      <div className="text-center p-4 bg-background-secondary border-t border-border">
        <p className="text-sm text-foreground-secondary">
          Bookings powered by <span className="font-semibold">Google Calendar</span>
        </p>
      </div>
    </div>
  );
}

/**
 * Specialized iframe for maps
 */
export function MapIframe({ 
  src, 
  className = "",
  height = 400 
}: { 
  src: string; 
  className?: string;
  height?: number;
}) {
  return (
    <OptimizedIframe
      src={src}
      title="Location map showing Three Rivers Tech office"
      width="100%"
      height={height}
      className={`w-full rounded-lg ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      // Map specific sandbox permissions
      sandbox="allow-scripts allow-same-origin"
    />
  );
}