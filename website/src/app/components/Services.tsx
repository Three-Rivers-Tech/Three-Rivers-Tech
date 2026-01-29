import HomeTechSupportIcon from "./icons/HomeTechSupportIcon";
import SmallBusinessIcon from "./icons/SmallBusinessIcon";
import CommunityEducationIcon from "./icons/CommunityEducationIcon";
import WebsiteDesignIcon from "./icons/WebsiteDesignIcon";
import { PrimaryButton } from "@/components/ui";

/**
 * Main services section showcasing community-focused offerings
 * 
 * Features:
 * - Grid layout with responsive columns (1-3 columns)
 * - Service cards with icons, descriptions, and CTAs
 * - Community-focused service descriptions
 * - Animated section badge and staggered card animations
 * - Bottom CTA for general inquiries
 * 
 * Services displayed:
 * - Home & Personal Tech Support
 * - Small Business IT Packages  
 * - Community Education
 * - Simple Website Design
 * 
 * @returns JSX element containing the services section
 */

/**
 * Service configuration array
 * Each service includes icon component, description, and contact link
 */
const services = [
  {
    id: "home-support",
    title: "Home & Personal Tech Support",
    description: "Computer repair, virus removal, Wi-Fi setup, and smartphone training for seniors. We come to you in Turtle Creek and surrounding areas.",
    icon: HomeTechSupportIcon,
    link: "/services#home-support",
  },
  {
    id: "small-business-it",
    title: "Small Business IT Packages",
    description: "Affordable IT solutions for local businesses including network setup, cybersecurity, and website maintenance with transparent pricing.",
    icon: SmallBusinessIcon,
    link: "/services#small-business-it",
  },
  {
    id: "community-education",
    title: "Community Education",
    description: "Free workshops on basic computer skills, online safety, and digital marketing for local businesses and residents.",
    icon: CommunityEducationIcon,
    link: "/services#community-education",
  },
  {
    id: "web-development",
    title: "Simple Website Design",
    description: "Professional, affordable websites starting at $499 for local businesses. Includes WordPress, SEO, and ongoing support.",
    icon: WebsiteDesignIcon,
    link: "/services#web-development",
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

        {/* Community-focused layout - 2-3 columns with friendly imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto" role="list" aria-label="Our community services">
          {services.map((service, index) => (
            <article 
              key={service.id} 
              role="listitem"
              className={`animate-slide-up animation-delay-${600 + index * 100} group`}
              aria-labelledby={`service-title-${service.id}`}
              aria-describedby={`service-desc-${service.id}`}
            >
              <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-soft hover:shadow-large hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                {/* Friendly, approachable icon */}
                <div 
                  className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-4 mb-4 w-fit group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-grow">
                  <h3 
                    id={`service-title-${service.id}`}
                    className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                  >
                    {service.title}
                  </h3>
                  
                  {/* Shorter description with "Learn More" link */}
                  <p 
                    id={`service-desc-${service.id}`}
                    className="text-foreground-secondary mb-4 leading-relaxed"
                  >
                    {service.description.length > 120 
                      ? `${service.description.substring(0, 120)}...` 
                      : service.description
                    }
                  </p>
                </div>
                
                <a
                  href={service.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-2 mt-auto group-hover:translate-x-1 transition-all duration-300 min-h-[44px]"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 animate-fade-in animation-delay-1200">
          <p className="text-foreground-secondary mb-6 text-lg">
            Need help with a tech issue? We&apos;d love to assist you locally.
          </p>
          <PrimaryButton 
            href="/contact"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            }
          >
            Request an Assessment
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
