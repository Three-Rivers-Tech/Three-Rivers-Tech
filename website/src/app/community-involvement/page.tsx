import Link from "next/link";
import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";

export const metadata = generateLocalSeoMetadata(generateStaticPageMetadata("community-involvement"));

export default function CommunityInvolvementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "name": "Community Involvement - Three Rivers Tech",
            "description": "Learn about Three Rivers Tech's commitment to the Turtle Creek community through local partnerships, sponsorships, and educational initiatives.",
            "url": "https://threeriverstech.com/community-involvement",
            "publisher": {
              "@type": "LocalBusiness",
              "name": "Three Rivers Tech",
              "address": "124 Grant Street, Turtle Creek, PA 15145"
            }
          })
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Commitment to Turtle Creek</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            "We're more than just a tech company - we're your neighbors who care about this community"
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Community Support Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">Supporting Our Community</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Local Partnerships</h3>
                <p className="text-sm text-foreground-secondary">
                  Partnering with other local businesses to strengthen our community's economic foundation
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Community Events</h3>
                <p className="text-sm text-foreground-secondary">
                  Participating in and sponsoring local events like the Memorial Day parade and community fairs
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Educational Programs</h3>
                <p className="text-sm text-foreground-secondary">
                  Providing technology workshops for seniors and local small business owners
                </p>
              </div>
            </div>
            
            <p className="text-foreground-secondary text-center max-w-3xl mx-auto">
              At Three Rivers Tech, we believe in giving back to the community that has given us so much. 
              Our commitment goes beyond providing technology services - we're invested in the long-term 
              success and well-being of Turtle Creek and the entire Mon Valley.
            </p>
          </div>

          {/* Community Education Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">Community Education</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Free Workshops & Training</h3>
                <p className="text-foreground-secondary mb-4">
                  We regularly host free technology workshops at the Turtle Creek Senior Center and local library. 
                  These sessions cover everything from basic computer skills to online safety for seniors.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Basic Computer Skills for Beginners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Online Safety & Security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Smartphone Training for Seniors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Social Media for Small Businesses</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Affordable Services</h3>
                <p className="text-foreground-secondary mb-4">
                  We provide discounted services to seniors, veterans, and qualifying non-profit organizations. 
                  Our goal is to make technology accessible to everyone in our community, regardless of their financial situation.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Discounted computer repairs for seniors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Free basic website setup for local non-profits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Reduced rate training sessions for community groups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Local Impact Section */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">Our Local Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl p-6 border border-border shadow-soft hover:shadow-large transition-shadow duration-300">
                <h3 className="text-lg font-bold mb-3">Sponsorships & Support</h3>
                <p className="text-foreground-secondary mb-4">
                  We proudly sponsor local initiatives including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Turtle Creek Memorial Day Parade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Local high school technology programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Small business association events</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-border shadow-soft hover:shadow-large transition-shadow duration-300">
                <h3 className="text-lg font-bold mb-3">Community Partnerships</h3>
                <p className="text-foreground-secondary mb-4">
                  We work closely with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Turtle Creek Borough Administration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Turtle Creek Senior Center</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Mon Valley Small Business Network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Join Our Community Initiative</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Are you a local organization or community group looking for technology support? 
              We're always looking for ways to support our neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 hover:shadow-large transform hover:-translate-y-1 transition-[shadow,transform,background-color] duration-300 text-center min-h-[48px] flex items-center justify-center"
              >
                Partner With Us
              </Link>
              <Link
                href="/learning-center"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-primary transform hover:-translate-y-1 transition-[shadow,transform,background-color,color] duration-300 text-center min-h-[48px] flex items-center justify-center"
              >
                Learn About Workshops
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}