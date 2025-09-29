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
          <h2 className="text-3xl font-bold mb-4">Software Development</h2>
          <p className="text-foreground-secondary mb-6">
            Transform your ideas into powerful digital solutions with our custom software development services.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Custom web applications</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Mobile app development</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>API development and integration</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Technology stack expertise</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Agile development methodology</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
