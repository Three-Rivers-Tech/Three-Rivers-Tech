"use client";

import { useState, useEffect, useRef } from "react";
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
  const startAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // Function to stop the auto-rotation
  const stopAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

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
  }, [isHovering, slides.length]);

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

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background with gradient transition */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} transition-all duration-1000 ease-in-out`}></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ease-in-out">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl text-black mb-10 max-w-3xl mx-auto transition-all duration-700 ease-in-out">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={slides[currentSlide].ctaPrimaryLink}
              className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              {slides[currentSlide].ctaPrimary}
            </Link>
            <Link
              href={slides[currentSlide].ctaSecondaryLink}
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              {slides[currentSlide].ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125 shadow-md" : "bg-white/50 shadow"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
