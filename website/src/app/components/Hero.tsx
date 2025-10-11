import CommunityImagery from "./CommunityImagery";
import { SecondaryButton } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Community Background Image */}
      <CommunityImagery 
        type="hero-background"
        alt="Turtle Creek community with modern technology - representing local roots and technical expertise"
        className="absolute inset-0"
        priority={true}
      />
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
            Serving Turtle Creek and the Mon Valley
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Your Hometown Tech Partner in{" "}
            <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Turtle Creek
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Big-city know-how at small-town prices. We live here, work here, and understand your needs.
            From home computer repair to small business websites, we make technology accessible for everyone.
          </p>

          {/* Service Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {[
              "Home & Personal Tech Support",
              "Small Business IT Packages", 
              "Computer Repair & Setup",
              "Community Education"
            ].map((service, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium hover:bg-white/20 transition-all duration-300"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Local Address Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 text-white mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">124 Grant Street, Turtle Creek, PA 15145</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <SecondaryButton 
              href="/contact"
              variant="outline-white"
              className="bg-white text-primary hover:bg-gray-50 border-white hover:border-white hover:text-primary"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            >
              Call (412) 403-5559 for Free Consultation
            </SecondaryButton>
            <SecondaryButton
              href="/contact"
              variant="outline-white"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            >
              Book Your Home Visit Today
            </SecondaryButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-white/70 text-sm mb-4">Proudly serving our neighbors in</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white/60 text-xs font-medium">Turtle Creek</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 text-xs font-medium">Wilmerding</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 text-xs font-medium">Monroeville</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 text-xs font-medium">East Pittsburgh</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 text-xs font-medium">Mon Valley</div>
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