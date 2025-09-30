"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

export default function EnhancedHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotating banner content
  const slides = [
    {
      title: "Get Your Technology Working For You",
      subtitle: "We build websites that actually work, fix slow computers, and create software that saves you time",
      ctaPrimary: "Get Your Free Tech Checkup",
      ctaSecondary: "See How We Help",
      ctaPrimaryLink: "/contact",
      ctaSecondaryLink: "/portfolio",
      bgColor: "from-blue-700 to-indigo-800"
    },
    {
      title: "Stop Losing Customers to Slow Websites",
      subtitle: "We speed up your website, fix your computers, and automate your boring tasks so you can focus on growing your business",
      ctaPrimary: "Fix Your Website Today",
      ctaSecondary: "See Real Results",
      ctaPrimaryLink: "/contact",
      ctaSecondaryLink: "/portfolio",
      bgColor: "from-blue-600 to-indigo-700"
    },
    {
      title: "Build Software That Actually Works",
      subtitle: "Stop wasting time on paperwork and manual tasks. We build simple software that does the work for you.",
      ctaPrimary: "Get Your Business Software",
      ctaSecondary: "View Examples",
      ctaPrimaryLink: "/contact",
      ctaSecondaryLink: "/portfolio",
      bgColor: "from-purple-600 to-pink-600"
    }
  ];

  // Function to start the auto-rotation
  const startAutoRotate = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, [slides.length]);

  // Function to stop the auto-rotation
  const stopAutoRotate = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Auto-rotate slides every 5 seconds, but pause when hovering
  useEffect(() => {
    if (!isHovering) {
      startAutoRotate();
    } else {
      stopAutoRotate();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, startAutoRotate, stopAutoRotate]);

  // Handle mouse enter and leave events
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Handle manual slide change
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle keyboard navigation for slide indicators
  const handleSlideKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToSlide(index);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const nextIndex = event.key === "ArrowLeft" 
        ? (index > 0 ? index - 1 : slides.length - 1)
        : (index < slides.length - 1 ? index + 1 : 0);
      goToSlide(nextIndex);
      
      // Focus the new slide indicator
      setTimeout(() => {
        const nextButton = document.querySelector(`[aria-controls="slide-${nextIndex}"]`) as HTMLElement;
        if (nextButton) {
          nextButton.focus();
        }
      }, 0);
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="banner"
      aria-label="Hero section with rotating content"
    >
      {/* Background with gradient transition */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} transition-all duration-1000 ease-in-out`} aria-hidden="true"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28 relative z-10 max-w-7xl">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 transition-all duration-700 ease-in-out leading-tight px-2">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-900 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto transition-all duration-700 ease-in-out leading-relaxed px-4 font-medium">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 max-w-2xl mx-auto" role="group" aria-label="Call to action buttons">
            <Link
              href={slides[currentSlide].ctaPrimaryLink}
              className="bg-white text-primary font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-center min-h-[48px] flex items-center justify-center text-base sm:text-lg font-medium"
              aria-describedby="cta-primary-description"
            >
              {slides[currentSlide].ctaPrimary}
            </Link>
            <Link
              href={slides[currentSlide].ctaSecondaryLink}
              className="bg-transparent border-2 border-white text-white font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-center min-h-[48px] flex items-center justify-center text-base sm:text-lg font-medium"
              aria-describedby="cta-secondary-description"
            >
              {slides[currentSlide].ctaSecondary}
            </Link>
          </div>
          
          {/* Screen reader descriptions for CTAs */}
          <div className="sr-only">
            <div id="cta-primary-description">Primary call to action button</div>
            <div id="cta-secondary-description">Secondary call to action button</div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-12 space-x-3" role="tablist" aria-label="Hero slide navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              onKeyDown={(e) => handleSlideKeyDown(e, index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary min-h-[44px] min-w-[44px] flex items-center justify-center ${
                index === currentSlide ? "bg-white scale-125 shadow-md" : "bg-white/50 shadow"
              }`}
              role="tab"
              aria-selected={index === currentSlide}
              aria-controls={`slide-${index}`}
              aria-label={`Go to slide ${index + 1} of ${slides.length}. Use arrow keys to navigate.`}
              tabIndex={index === currentSlide ? 0 : -1}
            >
              <span className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`} aria-hidden="true"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg
          className="w-6 h-6 text-white opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
