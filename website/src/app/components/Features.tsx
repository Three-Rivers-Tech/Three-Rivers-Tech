import FeatureCard from "./FeatureCard";
import { FaCalendarAlt, FaBullseye, FaHeadset, FaDollarSign } from "./icons";

// Static data for features
const features = [
  {
    id: "experience",
    title: "10+ Years Experience",
    description: "Decades of combined expertise in delivering technology solutions",
    icon: FaCalendarAlt,
  },
  {
    id: "custom",
    title: "Custom Solutions",
    description: "Tailored approaches to meet your specific business requirements",
    icon: FaBullseye,
  },
  {
    id: "support",
    title: "Dedicated Support",
    description: "Ongoing assistance and maintenance for all our solutions",
    icon: FaHeadset,
  },
  {
    id: "pricing",
    title: "Competitive Pricing",
    description: "High-quality services at prices that fit your budget",
    icon: FaDollarSign,
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            We stand out through our commitment to excellence and customer satisfaction
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
