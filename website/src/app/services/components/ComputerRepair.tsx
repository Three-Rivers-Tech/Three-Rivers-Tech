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
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-primary">Our Home Tech Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Computer Repair & Virus Removal:</strong> Fix slow computers, remove malware, and restore performance - $75-200</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Wi-Fi Optimization & Setup:</strong> Get your home network running smoothly and securely - $100</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Smartphone Setup & Training for Seniors:</strong> Patient, step-by-step help with phones and tablets - $60/hour</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Data Backup & Recovery:</strong> Protect your photos, documents, and memories - $100-300</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Software Installation & Updates:</strong> Keep your programs current and secure</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Email Setup & Management:</strong> Get your email working on all your devices</span>
              </li>
            </ul>
          </div>

          <div className="bg-background-secondary p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-primary mb-2">On-Site Visits in Turtle Creek & Surrounding Areas</h4>
            <p className="text-sm text-foreground-secondary">
              We come to you! Serving Turtle Creek, Wilmerding, Monroeville, and the entire Mon Valley. 
              On-site service fee: $25 (waived for seniors 65+)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact?service=home-support"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Book Home Visit
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:4124035559"
              className="inline-flex items-center justify-center border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Call (412) 403-5559
            </a>
          </div>
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
