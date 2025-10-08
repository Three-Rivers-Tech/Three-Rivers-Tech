import { ServiceIcon } from "@/components/OptimizedImage";

export default function ComputerRepair() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Hardware Support & Maintenance</h2>
          <p className="text-foreground-secondary mb-6">
            Minimize business disruption and maximize technology ROI through professional hardware support services that extend equipment lifecycle, prevent costly downtime, and ensure optimal performance.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Comprehensive hardware diagnostics and professional repair services</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Enterprise software troubleshooting and system optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Critical data recovery with industry-standard security protocols</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Proactive maintenance programs to prevent system failures</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Remote monitoring and support with rapid response times</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Hardware lifecycle management and upgrade planning</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <ServiceIcon 
            service="repair"
            size="large"
            className="rounded-xl w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
