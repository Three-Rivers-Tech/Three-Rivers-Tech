"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  OptimizedImageProps, 
  ResponsiveImageConfig, 
  getImageAltText, 
  getOptimizedImagePath,
  generateSrcSet,
  generateSizesAttribute,
  STANDARD_IMAGE_SIZES
} from "@/lib/image-optimization";

/**
 * Optimized Image component with WebP/AVIF support and responsive sizing
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className = "",
  quality = 85
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [formatError, setFormatError] = useState<Set<string>>(new Set());

  // Generate optimized alt text if not provided or generic
  const optimizedAlt = alt === "Image" || alt === "" ? getImageAltText(src) : alt;

  // Try WebP first, then AVIF, then fallback to original
  const getImageSrc = () => {
    if (formatError.has('webp') && formatError.has('avif')) {
      return src; // Fallback to original
    }
    
    if (!formatError.has('avif')) {
      return getOptimizedImagePath(src, 'avif');
    }
    
    if (!formatError.has('webp')) {
      return getOptimizedImagePath(src, 'webp');
    }
    
    return src;
  };

  const handleImageError = () => {
    const currentSrc = getImageSrc();
    
    if (currentSrc.endsWith('.avif')) {
      setFormatError(prev => new Set([...prev, 'avif']));
    } else if (currentSrc.endsWith('.webp')) {
      setFormatError(prev => new Set([...prev, 'webp']));
    } else {
      setImageError(true);
    }
  };

  if (imageError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <Image
      src={getImageSrc()}
      alt={optimizedAlt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={className}
      onError={handleImageError}
      // Add loading optimization
      loading={priority ? "eager" : "lazy"}
      // Add decoding optimization
      decoding="async"
    />
  );
}

/**
 * Responsive Image component with multiple breakpoints
 */
export function ResponsiveImage({
  src,
  alt,
  sizes,
  className = "",
  priority = false,
  quality = 85
}: ResponsiveImageConfig) {
  const [imageError, setImageError] = useState(false);
  const [formatError, setFormatError] = useState<Set<string>>(new Set());

  // Generate optimized alt text
  const optimizedAlt = alt === "Image" || alt === "" ? getImageAltText(src) : alt;

  // Get the largest size for the main image
  const largestSize = sizes.reduce((max, current) => 
    current.width > max.width ? current : max
  );

  const getImageSrc = () => {
    if (formatError.has('webp') && formatError.has('avif')) {
      return src;
    }
    
    if (!formatError.has('avif')) {
      return getOptimizedImagePath(src, 'avif');
    }
    
    if (!formatError.has('webp')) {
      return getOptimizedImagePath(src, 'webp');
    }
    
    return src;
  };

  const handleImageError = () => {
    const currentSrc = getImageSrc();
    
    if (currentSrc.endsWith('.avif')) {
      setFormatError(prev => new Set([...prev, 'avif']));
    } else if (currentSrc.endsWith('.webp')) {
      setFormatError(prev => new Set([...prev, 'webp']));
    } else {
      setImageError(true);
    }
  };

  if (imageError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: largestSize.width, height: largestSize.height }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <picture>
      {/* AVIF source */}
      <source
        srcSet={generateSrcSet(getOptimizedImagePath(src, 'avif'), sizes)}
        sizes={generateSizesAttribute(sizes)}
        type="image/avif"
      />
      {/* WebP source */}
      <source
        srcSet={generateSrcSet(getOptimizedImagePath(src, 'webp'), sizes)}
        sizes={generateSizesAttribute(sizes)}
        type="image/webp"
      />
      {/* Fallback */}
      <Image
        src={getImageSrc()}
        alt={optimizedAlt}
        width={largestSize.width}
        height={largestSize.height}
        sizes={generateSizesAttribute(sizes)}
        priority={priority}
        quality={quality}
        className={className}
        onError={handleImageError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}

/**
 * Predefined image components for common use cases
 */
export function LogoImage({ className = "", priority = true }: { className?: string; priority?: boolean }) {
  return (
    <OptimizedImage
      src="/company_logo.png"
      alt="Three Rivers Tech - Comprehensive Technology Solutions Company Logo"
      width={48}
      height={48}
      className={className}
      priority={priority}
      quality={90}
    />
  );
}

export function ServiceIcon({ 
  service, 
  className = "",
  size = "medium" 
}: { 
  service: 'dev' | 'consulting' | 'saas' | 'repair';
  className?: string;
  size?: 'small' | 'medium' | 'large';
}) {
  const sizeMap = {
    small: { width: 32, height: 32 },
    medium: { width: 64, height: 64 },
    large: { width: 96, height: 96 }
  };

  const iconMap = {
    dev: 'service-icon-dev.png',
    consulting: 'service-icon-consulting.png',
    saas: 'service-icon-saas.png',
    repair: 'service-icon-repair.png'
  };

  const { width, height } = sizeMap[size];

  return (
    <OptimizedImage
      src={`/${iconMap[service]}`}
      alt={getImageAltText(iconMap[service])}
      width={width}
      height={height}
      className={className}
      quality={90}
    />
  );
}

export function PortfolioImage({ 
  category, 
  className = "",
  size = "card"
}: { 
  category: 'banking' | 'cloud' | 'ecommerce' | 'network' | 'repair' | 'saas';
  className?: string;
  size?: 'card' | 'hero';
}) {
  const imageMap = {
    banking: 'portfolio-banking.jpg',
    cloud: 'portfolio-cloud.jpg',
    ecommerce: 'portfolio-ecommerce.jpg',
    network: 'portfolio-network.jpg',
    repair: 'portfolio-repair.jpg',
    saas: 'portfolio-saas.jpg'
  };

  const sizes = size === 'hero' ? STANDARD_IMAGE_SIZES.hero : STANDARD_IMAGE_SIZES.portfolio;

  return (
    <ResponsiveImage
      src={`/${imageMap[category]}`}
      alt={getImageAltText(imageMap[category])}
      sizes={sizes}
      className={className}
      quality={85}
    />
  );
}