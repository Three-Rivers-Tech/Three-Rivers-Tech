import OptimizedImage from "@/components/OptimizedImage";

export default function ITConsulting() {
  return (
    <section className="py-16 border-b border-border">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Small Business IT Packages</h2>
          <p className="text-foreground-secondary mb-6">
            Affordable IT solutions designed specifically for local small businesses. We understand that as a small business owner in Turtle Creek, you need reliable technology that fits your budget and serves your customers effectively.
          </p>
          
          <div className="space-y-6">
            {/* Starter Website Package */}
            <div className="bg-background-secondary p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-2">Starter Website Package - $500</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>WordPress website with professional design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Domain registration and hosting setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Local SEO optimization for Turtle Creek area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Google My Business setup and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Basic training on content updates</span>
                </li>
              </ul>
            </div>

            {/* Small Office IT Setup */}
            <div className="bg-background-secondary p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-2">Small Office IT Setup - $300-600</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Router and network security configuration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Printer integration and wireless setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Basic cybersecurity package</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Email setup for business accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Point-of-sale system integration (if needed)</span>
                </li>
              </ul>
            </div>

            {/* Managed Care Plan */}
            <div className="bg-background-secondary p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-2">Managed Care Plan - $75/month</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Monthly system maintenance and updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Priority help desk support via phone/email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Backup monitoring and data protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Security monitoring and updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Discounted rates on additional services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm font-medium text-primary">
              💡 All packages include transparent pricing with no hidden fees. We believe in honest, upfront costs so you can budget with confidence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="/contact?service=small-business-it"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Request a Free Assessment
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:4124035559"
              className="inline-flex items-center justify-center border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Call (412) 403-5559
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <OptimizedImage
            src="/it_consult.png"
            alt="Small Business IT Consultation Services - Professional IT solutions for local businesses"
            width={600}
            height={400}
            className="rounded-xl w-full h-64 md:h-80 object-cover"
            priority={false}
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
