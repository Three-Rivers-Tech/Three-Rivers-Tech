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
            <div className="bg-background-secondary border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Starter Website Package - $500</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">WordPress website with professional design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Domain registration and hosting setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Local SEO optimization for Turtle Creek area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Google My Business setup and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Basic training on content updates</span>
                </li>
              </ul>
            </div>

            {/* Small Office IT Setup */}
            <div className="bg-background-secondary border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Small Office IT Setup - $300-600</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Router and network security configuration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Printer integration and wireless setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Basic cybersecurity package</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Email setup for business accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Point-of-sale system integration (if needed)</span>
                </li>
              </ul>
            </div>

            {/* Managed Care Plan */}
            <div className="bg-background-secondary border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Managed Care Plan - $75/month</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Monthly system maintenance and updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Priority help desk support via phone/email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Backup monitoring and data protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Security monitoring and updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Discounted rates on additional services</span>
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
              href="tel:Shop Number Coming Soon!"
              className="inline-flex items-center justify-center border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Call (412) 403-5559
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-xl relative overflow-hidden">
            {/* IT/Network themed animated elements */}
            <div className="absolute top-8 right-6 w-8 h-6 bg-green-200/40 rounded animate-pulse [animation-delay:1s]">
              <div className="flex justify-between items-center h-full p-1">
                <div className="w-1 h-4 bg-green-400/60 rounded"></div>
                <div className="w-1 h-3 bg-green-400/60 rounded"></div>
                <div className="w-1 h-5 bg-green-400/60 rounded"></div>
                <div className="w-1 h-2 bg-green-400/60 rounded"></div>
              </div>
            </div>
            <div className="absolute bottom-8 left-4 w-7 h-7 bg-emerald-300/30 rounded animate-bounce [animation-delay:2s] [animation-duration:2.8s] border border-emerald-400/40">
              <div className="absolute inset-2 border-2 border-emerald-400/50 rounded"></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-emerald-500/60 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute top-1/4 right-4 w-6 h-4 bg-green-300/50 rounded-sm animate-ping [animation-delay:0.5s]">
              <div className="w-full h-1 bg-green-400/60 mt-1"></div>
              <div className="w-4 h-1 bg-green-400/40 mt-0.5"></div>
            </div>
            <OptimizedImage
              src="/it_consult.png"
              alt="Small Business IT Consultation Services - Professional IT solutions for local businesses"
              width={600}
              height={400}
              className="rounded-lg w-full h-64 md:h-80 object-contain relative z-10"
              priority={false}
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
