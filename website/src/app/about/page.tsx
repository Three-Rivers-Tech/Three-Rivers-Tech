import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";

export const metadata = generateLocalSeoMetadata(generateStaticPageMetadata("about"));

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Three Rivers Tech - Our Story and Mission",
            "description": "Learn about Three Rivers Tech, our mission, vision, and values. Discover how we became a leading technology solutions provider since 2025.",
            "url": "https://threeriverstech.com/about",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://threeriverstech.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://threeriverstech.com/about"
                }
              ]
            }
          })
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">About Three Rivers Tech</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            Your trusted partner for comprehensive technology solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Our Story</h2>
            <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 sm:mb-6 leading-relaxed">
              Founded in 2025, Three Rivers Tech began with a simple mission: to provide exceptional technology
              solutions to businesses of all sizes. What started as a small team of passionate developers has
              grown into a full-service technology company serving clients across multiple industries.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
              We believe that technology should empower businesses, not complicate them. Our approach focuses
              on understanding your unique needs and delivering solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and success.
              </p>
            </div>

            <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                To be the leading technology partner that transforms how businesses leverage technology for competitive advantage.
              </p>
            </div>
          </div>

          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Why Choose Us</h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Expert team with 10+ years of industry experience</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Custom solutions tailored to your business needs</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">24/7 support and maintenance</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Competitive pricing without compromising quality</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
