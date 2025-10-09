import Link from "next/link";

// Services we can provide to the community
const serviceCapabilities = [
  {
    id: "home-support",
    title: "Home Tech Support",
    description: "Computer repair, Wi-Fi setup, device training for seniors, and on-site visits throughout the Turtle Creek area.",
    category: "Residential",
    icon: "💻"
  },
  {
    id: "business-it",
    title: "Small Business IT",
    description: "Network setup, cybersecurity, website design, and ongoing IT support tailored for small businesses.",
    category: "Business",
    icon: "🏢"
  },
  {
    id: "web-development",
    title: "Website Development",
    description: "Professional websites with CMS, e-commerce capabilities, and local SEO to help you reach customers.",
    category: "Development",
    icon: "🌐"
  },
];

export default function PortfolioSection() {
  return (
    <section 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-background-secondary"
      aria-labelledby="capabilities-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Our Capabilities
          </div>
          
          <h2 id="capabilities-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slide-up text-foreground">
            Services We Provide to Our Community
          </h2>
          
          <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Practical technology solutions designed for families, seniors, and small businesses in Turtle Creek and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {serviceCapabilities.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg border border-border transition-all duration-300 hover:shadow-xl animate-slide-up animation-delay-${400 + index * 100}`}
            >
              <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-6xl">
                {service.icon}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <p className="text-foreground-secondary mb-4">{service.description}</p>
                
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 text-sm"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover hover:shadow-glow transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span>View All Services</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}