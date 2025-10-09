import OptimizedImage from "@/components/OptimizedImage";

export default function SoftwareDevelopment() {
  return (
    <section className="py-16 border-b border-border">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <OptimizedImage 
            src="/simple-web-design.png"
            alt="Simple Website Design - Custom web design solution for local businesses"
            width={600}
            height={480}
            className="rounded-xl w-full h-64 md:h-80 object-cover"
            quality={90}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Simple Website Design</h2>
          <p className="text-foreground-secondary mb-6">
            Professional, affordable websites for local businesses and community organizations. We focus on simple, effective designs that help you reach more customers in Turtle Creek and the surrounding area.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Custom websites for local businesses starting at $499</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Local SEO to help customers find you online</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Responsive design that works on all devices</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Simple Content Management System so you can update your own site</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Integration with social media and Google Business</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Ongoing support and maintenance packages: $50/month</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
