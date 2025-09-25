import ServiceCard from "./ServiceCard";
import SoftwareDevelopmentIcon from "./icons/SoftwareDevelopmentIcon";
import ITConsultingIcon from "./icons/ITConsultingIcon";
import SaasProductsIcon from "./icons/SaasProductsIcon";
import ComputerRepairIcon from "./icons/ComputerRepairIcon";

// Static data for services
const services = [
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom web and mobile applications tailored to your business needs",
    icon: SoftwareDevelopmentIcon,
    link: "/software-development",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Expert guidance to optimize your technology infrastructure",
    icon: ITConsultingIcon,
 },
  {
    id: "saas-products",
    title: "SaaS Products",
    description: "Innovative software solutions for modern businesses",
    icon: SaasProductsIcon,
  },
  {
    id: "computer-repair",
    title: "Computer Repair",
    description: "Fast, reliable repair services for all your devices",
    icon: ComputerRepairIcon,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
