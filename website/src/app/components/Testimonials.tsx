import TestimonialCard from "./TestimonialCard";

// Static data for testimonials
const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    content: "Three Rivers Tech transformed our digital infrastructure. Their team delivered beyond our expectations with exceptional attention to detail.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Owner, Chen's Bakery",
    content: "The computer repair service saved our business. Quick, reliable, and affordable - exactly what we needed.",
    rating: 5,
  },
  {
    id: "3",
    name: "Jennifer Williams",
    role: "Operations Manager, Global Solutions",
    content: "Their SaaS product streamlined our workflow processes and increased productivity by 40%. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
