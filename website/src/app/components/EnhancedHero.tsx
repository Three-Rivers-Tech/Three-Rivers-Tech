import Link from "next/link";

export default function EnhancedHero() {
  // Startup-focused banner content with honest messaging
  const slides = [
    {
      title: "Hardworking Tech Startup Serving Turtle Creek",
      subtitle: "Dedicated to providing honest, straightforward tech services to our community. New business with a commitment to excellence.",
      ctaPrimary: "Contact Us for Free Consultation",
      ctaSecondary: "View Our Services",
      ctaPrimaryLink: "/contact",
      ctaSecondaryLink: "/services",
      bgColor: "from-blue-600 to-blue-800" // Blue gradient
    },
    {
      title: "Simple Tech Solutions for Families and Small Businesses",
      subtitle: "From computer repairs to website design, we make technology accessible and affordable for everyone in our community.",
      ctaPrimary: "Request a Free Assessment",
      ctaSecondary: "View Our Services",
      ctaPrimaryLink: "/contact",
      ctaSecondaryLink: "/services",
      bgColor: "from-cyan-600 to-cyan-800" // Cyan gradient
    },
    {
      title: "Startup Focused on Community Value",
      subtitle: "As a new business in Turtle Creek, we're committed to providing genuine value to our neighbors and local businesses.",
      ctaPrimary: "Learn About Our Services",
      ctaSecondary: "Get Started Today",
      ctaPrimaryLink: "/services",
      ctaSecondaryLink: "/contact",
      bgColor: "from-sky-600 to-sky-800" // Sky blue gradient
    }
  ];

  const currentSlide = 0; // Currently showing first slide, can be made dynamic later

  return (
    <section
      className="relative overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background with warm, community-focused gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} transition-all duration-1000 ease-in-out`} aria-hidden="true"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28 relative z-10 max-w-7xl">
        <div className="text-center">
          {/* Location badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white/95 text-sm font-medium mb-6 animate-fade-in">
            <span className="mr-2">📍</span>
            124 Grant Street, Turtle Creek, PA 15145
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 transition-all duration-700 ease-in-out leading-tight px-2">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto transition-all duration-700 ease-in-out leading-relaxed px-4 font-medium">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 max-w-2xl mx-auto" role="group" aria-label="Call to action buttons">
            <Link
              href={slides[currentSlide].ctaPrimaryLink}
              className="bg-white text-primary font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-center min-h-[48px] flex items-center justify-center text-base sm:text-lg font-medium"
              aria-describedby="cta-primary-description"
            >
              {slides[currentSlide].ctaPrimary}
            </Link>
            <Link
              href={slides[currentSlide].ctaSecondaryLink}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-xl hover:bg-white hover:text-primary hover:border-primary transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-center min-h-[48px] flex items-center justify-center text-base sm:text-lg font-medium"
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
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg
          className="w-6 h-6 text-white opacity-80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          suppressHydrationWarning={true}
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