import OptimizedImage from "@/components/OptimizedImage";

export default function SoftwareDevelopment() {
  return (
    <section className="py-16 border-b border-border">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 rounded-xl relative overflow-hidden">
            {/* Web development themed animated elements */}
            <div className="absolute top-6 left-4 w-8 h-6 bg-purple-200/40 rounded animate-pulse [animation-delay:0.5s]">
              <div className="flex space-x-1 p-1">
                <div className="w-1 h-1 bg-purple-400/60 rounded-full"></div>
                <div className="w-1 h-1 bg-purple-400/60 rounded-full"></div>
                <div className="w-1 h-1 bg-purple-400/60 rounded-full"></div>
              </div>
              <div className="w-full h-1 bg-purple-300/40 mt-1"></div>
            </div>
            <div className="absolute bottom-4 right-6 w-6 h-8 bg-pink-300/30 rounded animate-bounce [animation-delay:1.5s] [animation-duration:2.5s]">
              <div className="w-full h-2 bg-pink-400/50"></div>
              <div className="w-3/4 h-1 bg-pink-300/40 mt-1"></div>
              <div className="w-1/2 h-1 bg-pink-300/40 mt-1"></div>
            </div>
            <div className="absolute top-1/3 left-8 w-6 h-6 bg-purple-300/50 rounded animate-ping [animation-delay:3s] border border-purple-400/30">
              <div className="absolute inset-2 border border-purple-400/40"></div>
            </div>
            <OptimizedImage 
              src="/simple-web-design.png"
              alt="Simple Website Design - Custom web design solution for local businesses"
              width={600}
              height={480}
              className="rounded-lg w-full h-64 md:h-80 object-contain relative z-10"
              quality={90}
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Simple Website Design</h2>
          <p className="text-foreground-secondary mb-6">
            Professional, affordable websites for local businesses and community organizations. We focus on simple, effective designs that help you reach more customers in Turtle Creek and the surrounding area.
          </p>
          <div className="bg-white border border-border p-6 rounded-lg shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                <span className="text-foreground">Custom websites for local businesses starting at $499</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                <span className="text-foreground">Local SEO to help customers find you online</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                <span className="text-foreground">Responsive design that works on all devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                <span className="text-foreground">Simple Content Management System so you can update your own site</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                <span className="text-foreground">Integration with social media and Google Business</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                <span className="text-foreground">Ongoing support and maintenance packages: $50/month</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
