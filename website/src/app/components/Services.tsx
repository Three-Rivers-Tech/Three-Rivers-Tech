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
