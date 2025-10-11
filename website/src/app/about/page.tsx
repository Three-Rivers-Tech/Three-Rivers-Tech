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
          {/* Founder/Owner Presentation Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-1 text-center">
                <div className="relative inline-block">
                  <div className="bg-primary rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Alex Johnson</h3>
                <p className="text-sm sm:text-base text-primary font-semibold mb-2">Founder & Owner</p>
                <p className="text-xs sm:text-sm text-foreground-secondary">Turtle Creek Resident Since 2018</p>
              </div>
              
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Meet Your Local Tech Partner</h2>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 sm:mb-6 leading-relaxed">
                  Hi, I'm Alex, and I'm proud to call Turtle Creek home. After working in corporate IT for over a decade in Pittsburgh, 
                  I realized that the same high-quality technology solutions available to big companies should be accessible to everyone in our community.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 sm:mb-6 leading-relaxed">
                  I moved to Turtle Creek in 2018 and quickly fell in love with the tight-knit community spirit. When my neighbor Mrs. Patterson 
                  asked for help with her computer, and then her friend needed Wi-Fi setup, I realized there was a real need for patient, 
                  affordable tech support right here in our neighborhood.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  I have a degree in Computer Science and certifications in network administration, but what matters most is that I speak 
                  plain English, not tech jargon. Whether you're a senior learning to video chat with grandkids or a local shop owner 
                  needing a simple website, I'm here to help make technology work for you, not against you.
                </p>
              </div>
            </div>
          </div>

          {/* Business Story Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">How Three Rivers Tech Came to Turtle Creek</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">The Beginning</h3>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 leading-relaxed">
                  After years of commuting to downtown Pittsburgh for corporate IT work, I was looking for a place to call home. 
                  Turtle Creek's affordable housing, friendly neighbors, and strong community values drew me in immediately.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  What started as informal help for neighbors quickly grew into something bigger. People kept asking, "Do you know 
                  anyone who can help with computers?" The answer was always me, and I realized our community needed a local tech partner.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Why Turtle Creek?</h3>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 leading-relaxed">
                  This community has everything I value: neighbors who look out for each other, local businesses that care about their customers, 
                  and families who've been here for generations. It's the perfect place to build a business based on relationships, not transactions.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  I chose to set up shop at 124 Grant Street because I wanted to be right in the heart of our community. 
                  When you need help, you shouldn't have to drive to some corporate office park - your tech support should be right down the street.
                </p>
              </div>
            </div>
          </div>

          {/* Community Commitment Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">My Promise to Turtle Creek</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Making Technology Accessible & Affordable</h3>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 leading-relaxed">
                  I've seen how technology can transform lives, but I've also seen how expensive and intimidating it can be. 
                  That's not right. Everyone in our community deserves access to the digital world, regardless of their budget or comfort level with computers.
                </p>
                <div className="bg-background rounded-lg p-4 mb-4">
                  <h4 className="font-semibold mb-2 text-primary">How I Keep It Affordable:</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Sliding scale pricing for seniors and fixed-income families</li>
                    <li>• Payment plans for larger projects</li>
                    <li>• Free initial consultations - always</li>
                    <li>• Group discounts for neighbors who need similar help</li>
                    <li>• Honest assessments - I'll tell you if you don't need an upgrade</li>
                  </ul>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  When Mrs. Patterson's grandson went off to college and she wanted to video chat with him, we set up her tablet for $25. 
                  When Tony's Pizza needed a website but was struggling after the pandemic, we worked out a deal that fit his budget.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Understanding Our Community's Real Needs</h3>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 leading-relaxed">
                  Living in Turtle Creek for six years has taught me what our community really needs from technology. 
                  It's not the latest gadgets or complex systems - it's reliable solutions that make daily life easier and more connected.
                </p>
                <div className="bg-background rounded-lg p-4 mb-4">
                  <h4 className="font-semibold mb-2 text-primary">What I've Learned About Our Community:</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Many seniors want to stay connected but need patient, respectful help</li>
                    <li>• Small businesses need simple, effective websites they can update themselves</li>
                    <li>• Families need reliable home networks for work and school</li>
                    <li>• Everyone values straight talk over technical jargon</li>
                    <li>• People want to support local businesses when they can</li>
                  </ul>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  I'm not here to sell you the most expensive solution. I'm here to solve your actual problems with technology 
                  that fits your life and your budget. Because when our community thrives, we all thrive.
                </p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed italic">
                "Technology should serve people, not the other way around. My job is to make sure it works for you, 
                in your home, for your business, at a price that makes sense for your situation. That's my commitment to Turtle Creek."
              </p>
              <p className="text-sm font-semibold text-primary mt-2">- Alex Johnson, Founder</p>
            </div>
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

          {/* Community Involvement Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Active in Our Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Local Partnerships</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-foreground-secondary">Monthly tech workshops at Turtle Creek Community Center</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-foreground-secondary">Volunteer IT support for local nonprofits and churches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-foreground-secondary">Sponsor of Turtle Creek Memorial Day Parade</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 0 01.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-foreground-secondary">Member of Turtle Creek Business Association</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Technical Expertise Made Simple</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-4 leading-relaxed">
                  With over 12 years in IT and certifications in network administration, web development, and cybersecurity, 
                  I bring enterprise-level expertise to everyday problems.
                </p>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">What This Means for You:</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Your computer problems get solved right the first time</li>
                    <li>• Your business gets the same quality IT as big companies</li>
                    <li>• You get honest advice about what you actually need</li>
                    <li>• Complex tech gets explained in plain English</li>
                  </ul>
                </div>
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