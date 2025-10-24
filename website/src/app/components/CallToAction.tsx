import Link from "next/link";

export default function CallToAction() {

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-6xl">
        <header className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Request a Free Assessment
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Get in touch with Three Rivers Tech, your hometown tech partner. We&apos;ll provide a free assessment of your tech needs and help you find affordable solutions.
          </p>
        </header>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-large border border-white/20 animate-scale-in animation-delay-400">
          {/* Glass card for CTA - follows card standards with rounded-2xl */}
          <div className="text-center space-y-6">
            <p className="text-white/90 text-lg mb-6">
              Ready to get started? Contact us directly for the fastest response.
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:info@threeriverstech.com?subject=Free Tech Assessment Request&body=Hi! I&apos;d like to request a free assessment for:%0D%0A%0D%0ADevice/Service Type: %0D%0AProblem Description: %0D%0A%0D%0APlease contact me to schedule a visit.%0D%0A%0D%0AThank you!"
                className="block w-full bg-white text-primary font-bold py-4 px-8 rounded-xl hover:bg-gray-50 hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary min-h-[48px] text-lg border border-primary/30 focus:border-primary"
                aria-label="Send email for free tech assessment"
              >
                📧 Email for Free Assessment
              </a>
              
              <div className="text-white/80 text-sm">
                <p>📞 Business phone line coming soon</p>
                <p>📍 Serving Turtle Creek and surrounding areas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
          <Link
            href="/contact"
            className="bg-white text-primary border-2 border-white font-bold py-4 px-8 rounded-xl hover:bg-primary hover:text-white hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-center min-h-[48px] flex items-center justify-center text-lg shadow-soft"
          >
            Book Your Home Visit Today
          </Link>
        </div>
      </div>
    </section>
  );
}
