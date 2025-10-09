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
            "name": "About Three Rivers Tech - Local Tech Partners",
            "description": "Learn about Three Rivers Tech, our commitment to the Turtle Creek community, and how we became your trusted local technology partners.",
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
            Your trusted local technology partners serving Turtle Creek and the Mon Valley since 2019
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Our Story</h2>
            <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 sm:mb-6 leading-relaxed">
              Three Rivers Tech is a startup founded with a simple idea: great technology solutions should be accessible to everyone, 
              not just big corporations in the city. We're bringing professional IT services to the heart of Western Pennsylvania, right here in Turtle Creek.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 sm:mb-6 leading-relaxed">
              We're a new business dedicated to providing honest, straightforward tech services to our community. 
              Rather than making grandiose claims about our past, we're focused on building our reputation through reliable service to our neighbors.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
              We're committed to transparency and honest communication. What you see is what you get - no embellished success stories, 
              just a dedicated team ready to help with your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                To provide accessible, reliable technology solutions that empower Turtle Creek residents and local businesses. 
                We believe everyone deserves tech support that's both professional and personal.
              </p>
            </div>

            <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                To be the tech partner that our neighbors trust, where technology serves the community's needs and helps everyone thrive. 
                We envision a digitally empowered Turtle Creek where every resident and business can leverage technology to succeed.
              </p>
            </div>
          </div>

          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Why Choose Local?</h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">We live and work here, just like you</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Understanding local needs and values</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Supporting local businesses and organizations</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Personal service that large companies can't offer</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Invested in the long-term success of our community</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Fair, transparent pricing that serves the community</span>
              </li>
            </ul>
          </div>

          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-primary rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Alex Johnson</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-2">Founder & Lead Developer</p>
                <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  Experienced developer committed to helping our community. 
                  Specializes in web development and practical business solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Maria Rodriguez</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-2">Tech Support Specialist</p>
                <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  Dedicated to clear communication and helping customers understand their technology. 
                  Focuses on home support and senior technology training.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">David Chen</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-2">Network & Infrastructure</p>
                <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  Committed to reliable solutions for our neighbors. 
                  Expert in IT infrastructure and practical business systems.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Community First</h3>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  We prioritize the needs of our neighbors and local businesses over profit. 
                  Our success is measured by the success of our community.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Transparency</h3>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  Clear communication, honest timelines, and upfront pricing ensure no surprises in our partnerships.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Accessibility</h3>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  We make technology accessible to everyone, regardless of technical background or budget constraints.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Reliability</h3>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  We deliver consistent, dependable solutions that locals can count on for their critical operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}