import { ServiceIcon } from "@/components/OptimizedImage";

export default function SoftwareDevelopment() {
  return (
    <section className="py-16 border-b border-border">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <ServiceIcon 
            service="dev"
            size="large"
            className="rounded-xl w-full h-64 md:h-80 object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Enterprise Software Solutions</h2>
          <p className="text-foreground-secondary mb-6">
            Drive operational excellence with custom enterprise software that streamlines processes, reduces costs, and accelerates business growth through scalable, secure technology solutions.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Enterprise web applications with advanced security and scalability</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Business process automation that reduces manual work by up to 80%</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>API development and third-party system integration</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Modern technology stacks optimized for performance and maintainability</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Agile development with continuous delivery and quality assurance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Comprehensive documentation and ongoing technical support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
