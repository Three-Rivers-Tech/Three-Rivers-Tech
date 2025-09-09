export default function ITConsulting() {
  return (
    <section className="py-16 border-b border-border">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">IT Consulting</h2>
          <p className="text-foreground-secondary mb-6">
            Optimize your technology infrastructure with our expert consulting services.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Infrastructure assessment</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Cloud migration services</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Security consulting</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Network optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>IT strategy development</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src="/service-icon-consulting.png"
            alt="IT consulting services including infrastructure assessment and cloud migration"
            className="rounded-xl w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
