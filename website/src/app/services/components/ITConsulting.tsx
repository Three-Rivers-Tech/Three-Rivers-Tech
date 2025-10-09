import OptimizedImage from "@/components/OptimizedImage";

export default function ITConsulting() {
  return (
    <section className="py-16 border-b border-border">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Small Business IT Solutions</h2>
          <p className="text-foreground-secondary mb-6">
            Affordable IT solutions designed specifically for local small businesses. We understand that as a small business owner in Turtle Creek, you need reliable technology that fits your budget and serves your customers effectively.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Small office network setup: Starting at $200</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Secure data backup and recovery solutions: $100 setup + $25/month</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Cybersecurity solutions for small businesses: $300 initial + $75/month</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Point-of-sale systems and inventory management: $400 setup</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Website maintenance and local SEO services: $150/month</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Transparent pricing with no hidden fees</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <OptimizedImage
            src="/it_consult.png"
            alt="Small Business IT Consultation Services - Professional IT solutions for local businesses"
            width={600}
            height={400}
            className="rounded-xl w-full h-64 md:h-80 object-cover"
            priority={false}
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
