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
          <h2 className="text-3xl font-bold mb-4">SaaS Products</h2>
          <p className="text-foreground-secondary mb-6">
            Innovative software solutions for modern businesses.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Overview of available products</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Product features and benefits</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Pricing information</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Free trial/demo options</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Implementation and support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
