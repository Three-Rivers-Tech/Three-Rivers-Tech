import ServiceCard from "./ServiceCard";
import ComputerRepairIcon from "./icons/ComputerRepairIcon";
import ITConsultingIcon from "./icons/ITConsultingIcon";
import SaasProductsIcon from "./icons/SaasProductsIcon";
import SoftwareDevelopmentIcon from "./icons/SoftwareDevelopmentIcon";

// Updated startup-focused services data with pricing
const services = [
  {
    id: "home-support",
    title: "Home & Personal Tech Support",
    description: "Computer repair ($75+), virus removal, Wi-Fi setup ($100), smartphone training ($60/hour) for seniors, and on-site visits ($25 fee) in Turtle Creek and surrounding areas.",
    icon: ComputerRepairIcon,
    link: "/contact?service=home-support",
  },
  {
    id: "small-business-it",
    title: "Small Business IT Packages",
    description: "Affordable IT solutions for local businesses: network setup ($200+), cybersecurity ($300+ setup), website maintenance ($150/mo) with transparent pricing.",
    icon: ITConsultingIcon,
    link: "/contact?service=small-business-it",
  },
  {
    id: "community-education",
    title: "Community Education",
    description: "Free workshops on basic computer skills, online safety, and digital marketing for local businesses and residents.",
    icon: SaasProductsIcon,
    link: "/contact?service=community-education",
  },
  {
    id: "web-development",
    title: "Simple Website Design",
    description: "Professional, affordable websites starting at $499 for local businesses. Includes WordPress, SEO, and ongoing support ($50/mo).",
    icon: SoftwareDevelopmentIcon,
    link: "/contact?service=web-development",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-background-secondary" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <header className="text-center mb-16 sm:mb-20 lg:mb-24">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Startup Services
          </div>
          
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up text-foreground">
            Honest Tech Services from a Hardworking Startup
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200 font-medium">
            Straightforward, transparent tech solutions for families, seniors, and small businesses in Turtle Creek
          </p>
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-8 animate-fade-in animation-delay-400">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </header>

        {/* Simplified layout with better accessibility - 2 columns for better readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto" role="list" aria-label="Our community services">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              role="listitem"
              className={`animate-slide-up animation-delay-${600 + index * 100} bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-start">
                <div className="bg-primary rounded-lg p-3 mr-4 flex-shrink-0">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-foreground-secondary mb-4">{service.description}</p>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 animate-fade-in animation-delay-1200">
          <p className="text-foreground-secondary mb-6 text-lg">
            Need help with a tech issue? We&apos;d love to assist you locally.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span>Request a Free Assessment</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}