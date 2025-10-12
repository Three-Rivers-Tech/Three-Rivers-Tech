"use client";

import { useEffect, useRef, ReactNode } from 'react';

interface LayoutShiftPreventionProps {
  children: ReactNode;
  minHeight?: number;
  reserveSpace?: boolean;
  className?: string;
}

/**
 * Layout Shift Prevention Component
 * Prevents layout shifts by reserving space for dynamic content
 */
export default function LayoutShiftPrevention({
  children,
  minHeight = 200,
  reserveSpace = true,
  className = ""
}: LayoutShiftPreventionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!reserveSpace || !containerRef.current) return;

    const container = containerRef.current;
    
    // Set minimum height to prevent layout shift
    if (minHeight > 0) {
      container.style.minHeight = `${minHeight}px`;
    }

    // Use ResizeObserver to track content changes
    if ('ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { height } = entry.contentRect;
          
          // Update minimum height based on actual content
          if (height > minHeight) {
            container.style.minHeight = `${height}px`;
          }
        });
      });

      resizeObserver.observe(container);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [minHeight, reserveSpace]);

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-200 ${className}`}
      style={{
        minHeight: reserveSpace ? `${minHeight}px` : 'auto',
        contain: 'layout style' // CSS containment for better performance
      }}
    >
      {children}
    </div>
  );
}

/**
 * Skeleton Loader Component
 * Provides a skeleton placeholder to prevent layout shifts
 */
interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
}

export function SkeletonLoader({
  width = '100%',
  height = '1rem',
  className = "",
  variant = 'rectangular'
}: SkeletonLoaderProps) {
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700";
  
  const variantClasses = {
    text: "rounded",
    rectangular: "rounded-md",
    circular: "rounded-full"
  };

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

/**
 * Content Placeholder Component
 * Provides structured placeholders for different content types
 */
interface ContentPlaceholderProps {
  type: 'card' | 'hero' | 'list' | 'form';
  className?: string;
}

export function ContentPlaceholder({ type, className = "" }: ContentPlaceholderProps) {
  const placeholders = {
    card: (
      <div className={`p-6 ${className}`}>
        <SkeletonLoader height="2rem" className="mb-4" />
        <SkeletonLoader height="1rem" className="mb-2" />
        <SkeletonLoader height="1rem" width="80%" className="mb-4" />
        <SkeletonLoader height="2.5rem" width="40%" />
      </div>
    ),
    hero: (
      <div className={`py-20 px-6 text-center ${className}`}>
        <SkeletonLoader height="3rem" width="60%" className="mx-auto mb-6" />
        <SkeletonLoader height="1.5rem" width="80%" className="mx-auto mb-4" />
        <SkeletonLoader height="1.5rem" width="70%" className="mx-auto mb-8" />
        <SkeletonLoader height="3rem" width="200px" className="mx-auto" />
      </div>
    ),
    list: (
      <div className={className}>
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center space-x-4 mb-4">
            <SkeletonLoader variant="circular" width={48} height={48} />
            <div className="flex-1">
              <SkeletonLoader height="1.25rem" width="60%" className="mb-2" />
              <SkeletonLoader height="1rem" width="80%" />
            </div>
          </div>
        ))}
      </div>
    ),
    form: (
      <div className={`space-y-4 ${className}`}>
        <div>
          <SkeletonLoader height="1rem" width="25%" className="mb-2" />
          <SkeletonLoader height="2.5rem" />
        </div>
        <div>
          <SkeletonLoader height="1rem" width="30%" className="mb-2" />
          <SkeletonLoader height="2.5rem" />
        </div>
        <div>
          <SkeletonLoader height="1rem" width="20%" className="mb-2" />
          <SkeletonLoader height="6rem" />
        </div>
        <SkeletonLoader height="3rem" width="40%" />
      </div>
    )
  };

  return (
    <LayoutShiftPrevention>
      {placeholders[type]}
    </LayoutShiftPrevention>
  );
}