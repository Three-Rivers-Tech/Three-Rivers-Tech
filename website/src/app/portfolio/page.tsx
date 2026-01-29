import { Metadata } from "next";
import Link from "next/link";
import GitHubStats from "@/app/portfolio/GitHubStats";

export const metadata: Metadata = {
  title: 'Our Work & Credentials | Three Rivers Tech',
  description: 'See what our clients say about us and explore our open-source projects. Real reviews and proven technical work from Three Rivers Tech.',
  openGraph: {
    title: 'Our Work & Credentials | Three Rivers Tech',
    description: 'Client reviews and GitHub projects from Three Rivers Tech',
    type: 'website',
    url: 'https://threeriverstech.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Three Rivers Tech, LLC",
            "description": "Computer repair, website development, and IT services in Turtle Creek, PA",
            "url": "https://threeriverstech.com/portfolio",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "124 Grant Street",
              "addressLocality": "Turtle Creek",
              "addressRegion": "PA",
              "postalCode": "15145",
              "addressCountry": "US"
            }
          })
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Building Trust Through Results
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our Work & Credentials
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed px-2">
            Real client feedback and proven technical expertise from Three Rivers Tech
          </p>
        </div>

        {/* Two-column grid: Reviews & GitHub */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Google Reviews Card */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                What Our Clients Say
              </h2>
              <p className="text-foreground-secondary">
                Real reviews from real customers in our community
              </p>
            </div>

            {/* Google Business Profile Embed */}
            <div className="relative w-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.244791234567!2d-79.8083123!3d40.4028456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f227494f77d9%3A0x3e332f01cd4d60d5!2sThree%20Rivers%20Tech%2C%20LLC!5e0!3m2!1sen!2sus!4v1738167890!5m2!1sen!2sus"
                width="100%"
                height="500"
                className="border-0 rounded-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Three Rivers Tech, LLC - Google Maps"
              />
              <div className="mt-4 text-center">
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJd9zaZUnpNIgR1WDNPfBfMz4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary hover:text-primary-hover transition-all font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  Leave us a review on Google
                </a>
              </div>
            </div>
          </div>

          {/* GitHub Showcase Card */}
          <GitHubStats username="Three-Rivers-Tech" />
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Ready to Work Together?
          </h2>
          <p className="text-foreground-secondary mb-8 text-lg max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Whether you need computer repair, website development, or IT support, we&apos;re here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px]"
            >
              <span>Get Started Today</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 min-h-[48px]"
            >
              <span>View Our Services</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
