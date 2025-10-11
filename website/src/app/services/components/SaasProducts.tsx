import OptimizedImage from "@/components/OptimizedImage";

export default function SaasProducts() {
  return (
    <section className="py-16 border-b border-border">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-4 rounded-xl relative overflow-hidden">
            {/* Software/Database themed animated elements */}
            <div className="absolute top-5 left-5 w-7 h-8 bg-orange-200/40 rounded animate-pulse [animation-delay:1.5s]">
              <div className="w-full h-2 bg-orange-400/60 rounded-t"></div>
              <div className="w-5/6 h-1 bg-orange-300/40 mt-1 mx-auto"></div>
              <div className="w-4/6 h-1 bg-orange-300/40 mt-1 mx-auto"></div>
              <div className="w-3/6 h-1 bg-orange-300/40 mt-1 mx-auto"></div>
            </div>
            <div className="absolute bottom-5 right-4 w-8 h-6 bg-amber-300/30 rounded animate-bounce [animation-delay:0.8s] [animation-duration:3.2s]">
              <div className="grid grid-cols-3 gap-0.5 p-1 h-full">
                <div className="bg-amber-400/50 rounded-sm"></div>
                <div className="bg-amber-400/50 rounded-sm"></div>
                <div className="bg-amber-400/50 rounded-sm"></div>
                <div className="bg-amber-300/40 rounded-sm"></div>
                <div className="bg-amber-300/40 rounded-sm"></div>
                <div className="bg-amber-300/40 rounded-sm"></div>
              </div>
            </div>
            <div className="absolute top-2/3 left-6 w-6 h-6 bg-orange-300/50 rounded animate-ping [animation-delay:2.5s]">
              <div className="absolute inset-1 border border-orange-400/40 rounded"></div>
              <div className="absolute top-2 left-2 w-2 h-2 bg-orange-400/60 rounded"></div>
            </div>
            <OptimizedImage
              src="/saas_products.png"
              alt="Small Business Software Solutions - SaaS products and software implementation services"
              width={600}
              height={400}
              className="rounded-lg w-full h-64 md:h-80 object-contain relative z-10"
              priority={false}
              quality={90}
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Small Business Software Solutions</h2>
          <p className="text-foreground-secondary mb-6">
            Practical software solutions for local businesses. We help you choose and implement the right tools to manage customers, inventory, and day-to-day operations without breaking your budget.
          </p>
          <div className="bg-white border border-border p-6 rounded-lg shadow-sm">
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
      </div>
    </section>
  );
}
