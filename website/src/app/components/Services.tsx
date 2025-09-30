import ServiceCard from "./ServiceCard";
import SoftwareDevelopmentIcon from "./icons/SoftwareDevelopmentIcon";
import ITConsultingIcon from "./icons/ITConsultingIcon";
import SaasProductsIcon from "./icons/SaasProductsIcon";
import ComputerRepairIcon from "./icons/ComputerRepairIcon";

// Static data for services
const services = [
  {
    id: "software-development",
    title: "Custom Software",
    description: "We build software that automates your boring tasks and saves you hours every week",
    icon: SoftwareDevelopmentIcon,
    link: "/software-development",
  },
  {
    id: "it-consulting",
    title: "Tech Setup & Support",
    description: "We set up your computers, networks, and systems so they work reliably every day",
    icon: ITConsultingIcon,
 },
  {
    id: "saas-products",
    title: "Business Software Tools",
    description: "Ready-to-use software that helps you manage customers, track sales, and run your business better",
    icon: SaasProductsIcon,
  },
  {
    id: "computer-repair",
    title: "Computer & Device Repair",
    description: "We fix slow computers, broken screens, and other tech problems so you can get back to work",
    icon: ComputerRepairIcon,
  },
];

export default function Services() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background-secondary" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <header className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">Our Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10" role="list" aria-label="Our services">
          {services.map((service) => (
            <div key={service.id} role="listitem">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
