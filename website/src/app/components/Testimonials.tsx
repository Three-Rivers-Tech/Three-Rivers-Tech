import TestimonialCard from "./TestimonialCard";

// Authentic client testimonials
const testimonials = [
  {
    id: "1",
    name: "David Martinez",
    role: "Operations Director, Regional Manufacturing",
    content: "Three Rivers Tech implemented a custom inventory management system that reduced our processing time by 30%. Their team understood our specific needs and delivered a solution that actually works for our business.",
    rating: 5,
  },
  {
    id: "2",
    name: "Lisa Thompson",
    role: "Owner, Thompson Accounting Services",
    content: "When our server crashed during tax season, Three Rivers Tech had us back online within 4 hours. Their quick response and professional service saved our client relationships.",
    rating: 5,
  },
  {
    id: "3",
    name: "Robert Kim",
    role: "IT Manager, Healthcare Partners",
    content: "The network infrastructure upgrade was completed on schedule and under budget. Three Rivers Tech's attention to security requirements and compliance made the difference for our healthcare environment.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <header className="text-center mb-16 sm:mb-20">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
            Client Success
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up text-foreground">
            Client Success Stories
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200 font-medium">
            Real results from businesses that trust Three Rivers Tech with their technology needs
          </p>
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-8 animate-fade-in animation-delay-400">
            <div className="w-24 h-1 bg-gradient-to-r from-success to-primary rounded-full"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`animate-slide-up animation-delay-${600 + index * 100}`}
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
