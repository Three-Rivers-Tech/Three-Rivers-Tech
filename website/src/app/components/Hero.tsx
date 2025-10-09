import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-secondary min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-light/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse-soft"></span>
            Trusted by 25+ businesses across Pennsylvania
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Professional IT Services for{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transform your business with enterprise-grade technology solutions. 
            From custom software development to comprehensive IT support, we deliver results that drive growth.
          </p>

          {/* Service Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {[
              "Enterprise Software Solutions",
              "IT Infrastructure & Support", 
              "SaaS Integration",
              "Hardware Maintenance"
            ].map((service, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium hover:bg-white/20 transition-all duration-300"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px]"
            >
              <span>Schedule a Consultation</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              <span>Explore Our Services</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-white/70 text-sm mb-4">Trusted by businesses across industries</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white/60 text-xs font-medium">Healthcare</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 text-xs font-medium">Manufacturing</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 text-xs font-medium">Finance</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 text-xs font-medium">Legal</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 text-xs font-medium">Retail</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-background" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}