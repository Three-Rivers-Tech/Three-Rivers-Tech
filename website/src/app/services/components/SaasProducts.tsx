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
          <h2 className="text-3xl font-bold mb-4">Small Business Software Solutions</h2>
          <p className="text-foreground-secondary mb-6">
            Practical software solutions for local businesses. We help you choose and implement the right tools to manage customers, inventory, and day-to-day operations without breaking your budget.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
              <span className="text-foreground">Customer relationship management (CRM) for small businesses</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
              <span className="text-foreground">Simple inventory and point-of-sale systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
              <span className="text-foreground">Accounting software setup and training</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
              <span className="text-foreground">Email marketing and appointment scheduling tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
              <span className="text-foreground">Employee scheduling and time tracking systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
              <span className="text-foreground">Training and ongoing support for all software</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
