import { ServiceIcon } from "@/components/OptimizedImage";

export default function ITConsulting() {
  return (
    <section className="py-16 border-b border-border">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">IT Infrastructure & Support</h2>
          <p className="text-foreground-secondary mb-6">
            Maximize business continuity and performance with comprehensive IT infrastructure solutions that ensure reliable, secure, and scalable technology operations tailored to your business requirements.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Complete infrastructure assessment and strategic planning</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Cloud migration and hybrid infrastructure implementation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Cybersecurity consulting and compliance management</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Network design, optimization, and performance monitoring</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>IT strategy development aligned with business objectives</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>24/7 monitoring and proactive maintenance services</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <ServiceIcon 
            service="consulting"
            size="large"
            className="rounded-xl w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
