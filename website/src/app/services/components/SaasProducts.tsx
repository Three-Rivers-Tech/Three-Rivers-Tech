import { ServiceIcon } from "@/components/OptimizedImage";

export default function SaasProducts() {
  return (
    <section className="py-16 border-b border-border">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <ServiceIcon 
            service="saas"
            size="large"
            className="rounded-xl w-full h-64 md:h-80 object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">SaaS Solutions & Integration</h2>
          <p className="text-foreground-secondary mb-6">
            Enhance business efficiency and data-driven decision making through strategic software-as-a-service implementation, integration, and optimization that connects your business systems seamlessly.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>SaaS platform evaluation and selection based on business needs</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Custom integration with existing business systems and workflows</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Data migration and synchronization across platforms</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>User training and change management support</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Ongoing optimization and performance monitoring</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>ROI tracking and business impact measurement</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
