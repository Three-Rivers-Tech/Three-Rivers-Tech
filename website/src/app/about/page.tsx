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
            "description": "Learn about Three Rivers Tech, our mission, vision, and values. Discover how we became a trusted technology solutions provider since 2019.",
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
              Founded in 2019, Three Rivers Tech emerged from a shared vision among experienced IT professionals 
              to bridge the technology gap for growing businesses. Our founders, with combined decades of experience 
              in enterprise software development and IT infrastructure, recognized that many businesses struggled 
              with outdated systems and inefficient technology processes.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 sm:mb-6 leading-relaxed">
              Starting with custom software development for local businesses, we quickly expanded our expertise 
              to include comprehensive IT consulting, SaaS integration, and ongoing technical support. Our growth 
              has been driven by client referrals and our commitment to delivering measurable business outcomes 
              through technology solutions.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
              Today, we serve businesses across various industries, from healthcare and finance to manufacturing 
              and retail, helping them leverage technology for competitive advantage and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                To deliver reliable, scalable technology solutions that streamline business operations, 
                enhance productivity, and enable sustainable growth for our clients.
              </p>
            </div>

            <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                To be the trusted technology partner that businesses rely on for expert guidance, 
                innovative solutions, and dependable support in their digital transformation journey.
              </p>
            </div>
          </div>

          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Our Expertise</h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Certified professionals with 15+ years combined experience</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Microsoft Azure and AWS cloud certifications</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Agile development methodologies and project management</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">ITIL-certified IT service management practices</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Cybersecurity best practices and compliance expertise</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">24/7 monitoring and proactive support services</span>
              </li>
            </ul>
          </div>

          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-primary rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Leadership Team</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-2">Senior Software Architects</p>
                <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  Combined 20+ years in enterprise software development, cloud architecture, and IT strategy
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Development Team</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-2">Full-Stack Developers</p>
                <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  Expertise in modern frameworks, database design, and scalable application development
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Infrastructure Team</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-2">IT Operations Specialists</p>
                <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  Network security, system administration, and cloud infrastructure management expertise
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Reliability</h3>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  We deliver consistent, dependable solutions that businesses can count on for their critical operations.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Transparency</h3>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  Clear communication, honest timelines, and upfront pricing ensure no surprises in our partnerships.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Innovation</h3>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  We stay current with emerging technologies to provide forward-thinking solutions that grow with your business.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Partnership</h3>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  We work as an extension of your team, understanding your goals and aligning our success with yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
