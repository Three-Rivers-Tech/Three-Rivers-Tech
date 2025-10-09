import Link from "next/link";

// Clear service offerings with pricing
const serviceOfferings = [
  {
    id: "computer-repair",
    title: "Computer Repair & Support",
    description: "Hardware and software troubleshooting, virus removal, performance optimization. Starting at $75 for basic repairs.",
    price: "$75+",
  },
  {
    id: "website-design",
    title: "Website Design",
    description: "Professional, responsive websites for local businesses. Includes CMS, hosting setup, and 1 hour of training. Starting at $499.",
    price: "$499+",
  },
  {
    id: "it-consulting",
    title: "Small Business IT",
    description: "Network setup, cybersecurity, backup solutions, and ongoing support. Custom packages starting at $150/month.",
    price: "$150+/mo",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <header className="text-center mb-16 sm:mb-20">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Our Services
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up text-foreground">
            Straightforward Services & Pricing
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200 font-medium">
            Honest, up-front pricing for the tech services your home or business needs
          </p>
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-8 animate-fade-in animation-delay-400">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {serviceOfferings.map((service, index) => (
            <div 
              key={service.id}
              className={`animate-slide-up animation-delay-${600 + index * 100} bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300`}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-foreground-secondary mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">{service.price}</span>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1"
                >
                  Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}