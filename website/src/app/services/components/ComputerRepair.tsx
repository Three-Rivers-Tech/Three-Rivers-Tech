import { ServiceIcon } from "@/components/OptimizedImage";

export default function ComputerRepair() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Home & Personal Tech Support</h2>
          <p className="text-foreground-secondary mb-6">
            From slow laptops to smartphone setup, we provide friendly, local tech support right in your home or at our Turtle Creek location. No need to drive downtown - we're here to help the neighbors we see every day.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Computer repair and virus removal for home users: $75-200</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Wi-Fi optimization and setup in your home: $100</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Smartphone and tablet setup and training (especially for seniors): $60/hour</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Data backup and recovery services: $100-300</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>On-site visits available throughout Turtle Creek and surrounding areas: $25 travel fee</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Simple explanations of technical issues in plain English</span>
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
