import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";
import Link from "next/link";

export const metadata = generateLocalSeoMetadata(generateStaticPageMetadata("portfolio"));

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio - Building Our Community Together",
            "description": "As Three Rivers Tech grows, this page will showcase real projects completed for Turtle Creek businesses and residents.",
            "url": "https://threeriverstech.com/portfolio",
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
                  "name": "Portfolio",
                  "item": "https://threeriverstech.com/portfolio"
                }
              ]
            }
          })
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-5xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Building Together
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Portfolio Coming Soon
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed px-2">
            Growing Three Rivers Tech one project at a time
          </p>
        </div>

        <div className="bg-background-secondary rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                Building My First Clients
              </h2>
            </div>

            <div className="space-y-6 text-foreground-secondary leading-relaxed">
              <p className="text-base sm:text-lg">
                {"Hey there! Christian here, founder of Three Rivers Tech. I wanted to be honest with you - I'm just getting started building my client base here in Turtle Creek."}
              </p>

              <p className="text-base sm:text-lg">
                {`Rather than show you fake projects or borrowed work, I'd rather tell you the truth: `}
                <strong className="text-foreground">{`I'm actively looking for my first local clients`}</strong>
                {` to build real relationships with. When I complete projects for our community, you'll see genuine case studies here - not stock photos or made-up stories.`}
              </p>

              <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 my-8">
                <h3 className="text-lg font-bold mb-3 text-primary">What You Can Expect:</h3>
                <ul className="space-y-3 text-foreground-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Honest work:</strong>{" "}{`I'll never claim credit for projects I didn't do`}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Real experience:</strong> My Penn State cybersecurity degree and help desk job give me the technical skills</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Competitive pricing:</strong> As I build my portfolio, I can offer great rates for quality work</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Personal attention:</strong>{" "}{`You won't be just another ticket number - you'll work directly with me`}</span>
                  </li>
                </ul>
              </div>

              <p className="text-base sm:text-lg">
                {`I'm working on personal projects and continuing education that I can share on my `}
                <a href="https://github.com/Zzzero-hash" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                {`, but I'm excited to start working with real Turtle Creek businesses and residents to solve actual problems.`}
              </p>

              <p className="text-base sm:text-lg font-medium text-foreground">
                {`If you're willing to give a local tech guy a chance to prove himself, I promise to work hard, be transparent, and deliver quality results at a fair price.`}
              </p>
            </div>
          </div>
        </div>

        {/* Services Available */}
        <div className="bg-background-secondary rounded-2xl shadow-lg p-8 sm:p-10 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-foreground">
            Services I Can Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">Computer Repair & Setup</h3>
              </div>
              <p className="text-sm text-foreground-secondary">Home visits for virus removal, upgrades, new computer setup, and troubleshooting</p>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">Website Development</h3>
              </div>
              <p className="text-sm text-foreground-secondary">Modern, mobile-friendly websites for small businesses with local SEO</p>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">Cybersecurity Basics</h3>
              </div>
              <p className="text-sm text-foreground-secondary">Security assessments, password management, and protection advice</p>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">Senior Tech Training</h3>
              </div>
              <p className="text-sm text-foreground-secondary">Patient, respectful help learning tablets, smartphones, and video calling</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            {`Let's Work Together`}
          </h2>
          <p className="text-foreground-secondary mb-8 text-lg max-w-2xl mx-auto">
            {`Whether you need help now or just want to chat about technology, I'd love to hear from you. Let's build something real for our community.`}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px]"
            >
              <span>Get in Touch</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 min-h-[48px]"
            >
              <span>Learn More About Me</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
