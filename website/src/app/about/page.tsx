// Checkmark icon component for reuse
function CheckmarkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";
import Image from "next/image";

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
            Your trusted local technology partners serving Turtle Creek and the Mon Valley
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Founder/Owner Presentation Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-1 text-center">
                <div className="relative inline-block">
                  <div className="bg-primary rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 relative flex items-center justify-center shadow-lg">
                    <Image
                      src="/Capture.avif"
                      alt="Christian Penrod"
                      fill
                      className="rounded-full object-cover object-center"
                      sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                      />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-foreground text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Christian Penrod</h3>
                <p className="text-sm sm:text-base text-primary font-semibold mb-2">Founder & Owner</p>
                <p className="text-xs sm:text-sm text-foreground-secondary">Turtle Creek Resident Since 2025</p>
              </div>
              
              <div className="lg:col-span-2">
                <h2 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Meet Your Local Tech Partner</h2>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 sm:mb-6 leading-relaxed">
                  Hi, I&apos;m Christian, and I&apos;m proud to call Turtle Creek home. I grew up in nearby Braddock Hills 
                  and graduated from Penn State Greater Allegheny in 2025 with a degree in Cybersecurity Analytics & Operations. 
                  Shortly after graduation, I was able to purchase 124 Grant Street and establish Three Rivers Tech right here in our community.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 sm:mb-6 leading-relaxed">
                  Currently, I work as a Help Desk Technician during the day while building Three Rivers Tech as my side business. 
                  My goal is to grow this into a full-time operation that serves our community&apos;s technology needs with the same 
                  care and attention I&apos;d want for my own family.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  Having grown up in this area, I understand the unique challenges our community faces. I speak 
                  plain English, not tech jargon. Whether you&apos;re a senior learning to video chat with grandkids or a local business 
                  owner needing reliable IT support, I&apos;m here to help make technology work for you, not against you.
                </p>
              </div>
            </div>
          </div>

          {/* Business Story Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">How Three Rivers Tech Came to Turtle Creek</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">The Beginning</h3>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 leading-relaxed">
                  After growing up in Braddock Hills and completing my Cybersecurity degree at Penn State Greater Allegheny, 
                  I knew I wanted to stay in this area. The Mon Valley has always been home, and I wanted to contribute 
                  to our community&apos;s growth and technological advancement.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  When I graduated in 2025, I was able to purchase 124 Grant Street and saw an opportunity to provide 
                  professional IT services right here in Turtle Creek. What started as helping neighbors and local businesses 
                  is growing into a full-time technology partner for our community.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Why Turtle Creek?</h3>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 leading-relaxed">
                  This community has everything I value: neighbors who look out for each other, local businesses that care about their customers, 
                  and families who&apos;ve been here for generations. It&apos;s the perfect place to build a business based on relationships, not transactions.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  I chose to set up shop at 124 Grant Street because I wanted to be right in the heart of our community. 
                  When you need help, you shouldn&apos;t have to drive to some corporate office park - your tech support should be right down the street.
                </p>
              </div>
            </div>
          </div>

          {/* Community Commitment Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">My Promise to Turtle Creek</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Making Technology Accessible & Affordable</h3>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 leading-relaxed">
                  I&apos;ve seen how technology can transform lives, but I&apos;ve also seen how expensive and intimidating it can be. 
                  That&apos;s not right. Everyone in our community deserves access to the digital world, regardless of their budget or comfort level with computers.
                </p>
                <div className="bg-background rounded-xl p-4 mb-4">
                  <h4 className="font-semibold mb-2 text-primary">How I Keep It Affordable:</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Sliding scale pricing for seniors and fixed-income families</li>
                    <li>• Payment plans for larger projects</li>
                    <li>• Free initial consultations - always</li>
                    <li>• Group discounts for neighbors who need similar help</li>
                    <li>• Honest assessments - I&apos;ll tell you if you don&apos;t need an upgrade</li>
                  </ul>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  My Help Desk experience has taught me to solve real problems quickly and explain technical solutions in plain English. 
                  I&apos;ve also worked on various projects during my cybersecurity studies, including network security assessments 
                  and web application security analysis that I can showcase on my GitHub.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Understanding Our Community&apos;s Real Needs</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-4 leading-relaxed">
                  Since moving to Turtle Creek in 2025, I&apos;ve been getting to know what our community really needs from technology. 
                  It&apos;s not the latest gadgets or complex systems - it&apos;s reliable solutions that make daily life easier and more connected.
                </p>
                <div className="bg-background rounded-xl p-4 mb-4">
                  <h4 className="font-semibold mb-2 text-primary">What I&apos;ve Learned About Our Community:</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Many seniors want to stay connected but need patient, respectful help</li>
                    <li>• Small businesses need simple, effective websites they can update themselves</li>
                    <li>• Families need reliable home networks for work and school</li>
                    <li>• Everyone values straight talk over technical jargon</li>
                    <li>• People want to support local businesses when they can</li>
                  </ul>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                  I&apos;m not here to sell you the most expensive solution. I&apos;m here to solve your actual problems with technology 
                  that fits your life and your budget. Because when our community thrives, we all thrive.
                </p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary/10 rounded-xl border-l-4 border-primary">
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed italic">
                &quot;Technology should serve people, not the other way around. My job is to make sure it works for you, 
                in your home, for your business, at a price that makes sense for your situation. That&apos;s my commitment to Turtle Creek.&quot;
              </p>
              <p className="text-sm font-semibold text-primary mt-2">- Christian Penrod, Founder</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
              <h3 className="text-foreground text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                To provide accessible, reliable technology solutions that empower Turtle Creek residents and local businesses. 
                We believe everyone deserves tech support that&apos;s both professional and personal.
              </p>
            </div>

            <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
              <h3 className="text-foreground text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">
                To be the tech partner that our neighbors trust, where technology serves the community&apos;s needs and helps everyone thrive. 
                We envision a digitally empowered Turtle Creek where every resident and business can leverage technology to succeed.
              </p>
            </div>
          </div>

          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Why Choose Local?</h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <CheckmarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">We live and work here, just like you</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <CheckmarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Understanding local needs and values</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <CheckmarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Supporting local businesses and organizations</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <CheckmarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Personal service that large companies can&apos;t offer</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <CheckmarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Invested in the long-term success of our community</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <CheckmarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed">Fair, transparent pricing that serves the community</span>
              </li>
            </ul>
          </div>

          {/* Skills & Projects Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Skills & Real-World Experience</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Cybersecurity Background</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-4 leading-relaxed">
                  My Penn State education in Cybersecurity Analytics & Operations gives me a strong foundation in:
                </p>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Network security assessment and monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Web application security analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Risk assessment and vulnerability management
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Security policy development and implementation
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Help Desk & Technical Skills</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-4 leading-relaxed">
                  Daily hands-on experience solving real technical problems:
                </p>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Windows/Mac troubleshooting and system optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Network configuration and connectivity issues
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Software installation and user training
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Remote support and clear technical communication
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary/10 rounded-xl border-l-4 border-primary">
              <h3 className="text-lg font-bold mb-2 text-primary">Projects & Portfolio</h3>
              <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed mb-3">
                Check out my GitHub for examples of cybersecurity projects, automation scripts, and web development work. 
                I believe in continuous learning and documenting my progress - you can see the real code behind my solutions.
              </p>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <a
                  href="https://github.com/Zzzero-hash"
                  className="text-primary hover:text-primary-dark transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Community Involvement Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Active in Our Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Local Partnerships</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                      <CheckmarkIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground-secondary">Monthly tech workshops at Turtle Creek Community Center</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                      <CheckmarkIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground-secondary">Volunteer IT support for local nonprofits and churches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                      <CheckmarkIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground-secondary">Sponsor of Turtle Creek Memorial Day Parade</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                      <CheckmarkIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground-secondary">Member of Turtle Creek Business Association</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">Technical Expertise Made Simple</h3>
                <p className="text-sm sm:text-base text-foreground-secondary mb-4 leading-relaxed">
                  With a degree in Cybersecurity Analytics & Operations from Penn State Greater Allegheny and experience as a Help Desk Technician, 
                  I bring professional-level expertise to everyday problems while growing Three Rivers Tech into a full-time local technology partner.
                </p>
                <div className="bg-background rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-primary">What This Means for You:</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Your computer problems get solved right the first time</li>
                    <li>• Your business gets quality IT support from someone who understands our community</li>
                    <li>• You get honest advice about what you actually need</li>
                    <li>• Complex tech gets explained in plain English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Our Values</h2>
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
