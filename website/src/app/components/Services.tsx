import ServiceCard from "./ServiceCard";
import SoftwareDevelopmentIcon from "./icons/SoftwareDevelopmentIcon";
import ITConsultingIcon from "./icons/ITConsultingIcon";
import SaasProductsIcon from "./icons/SaasProductsIcon";
import ComputerRepairIcon from "./icons/ComputerRepairIcon";

// Static data for services
const services = [
  {
    id: "software-development",
    title: "Enterprise Software Solutions",
    description: "Custom software development that streamlines business processes, increases operational efficiency, and drives measurable productivity gains for your organization",
    icon: SoftwareDevelopmentIcon,
    link: "/software-development",
  },
  {
    id: "it-consulting",
    title: "IT Infrastructure & Support",
    description: "Comprehensive technology infrastructure design, implementation, and ongoing support to ensure reliable, secure, and scalable business operations",
    icon: ITConsultingIcon,
 },
  {
    id: "saas-products",
    title: "SaaS Solutions & Integration",
    description: "Strategic software-as-a-service implementation and integration services that optimize business workflows, enhance data visibility, and improve decision-making capabilities",
    icon: SaasProductsIcon,
  },
  {
    id: "computer-repair",
    title: "Hardware Support & Maintenance",
    description: "Professional hardware diagnostics, repair, and preventive maintenance services that minimize downtime and extend the lifecycle of your technology investments",
    icon: ComputerRepairIcon,
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
            Our Expertise
          </div>
          
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up text-foreground">
            Our Services
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200 font-medium">
            Professional IT services designed to drive efficiency, security, and growth for your business
          </p>
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-8 animate-fade-in animation-delay-400">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10" role="list" aria-label="Our services">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              role="listitem"
              className={`animate-slide-up animation-delay-${600 + index * 100}`}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 animate-fade-in animation-delay-1200">
          <p className="text-foreground-secondary mb-6 text-lg">
            Need a custom solution? We&apos;d love to discuss your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px]"
          >
            <span>Get Custom Quote</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
