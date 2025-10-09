import Link from "next/link";

const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "Three Rivers Tech helped us set up a new point-of-sale system that's increased our efficiency by 40%. Their team was patient and thorough.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Senior Citizen",
    content: "I was struggling with my computer, and they explained everything in terms I could understand. Now I'm video-calling my grandchildren with confidence!",
    rating: 5,
  },
  {
    id: "3",
    name: "Jennifer Thompson",
    role: "Non-Profit Director",
    content: "We needed a reliable IT partner on a tight budget. They delivered professional services while staying within our constraints.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background-secondary" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <header className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Don't just take our word for it - hear from real people in our community who have experienced our honest, straightforward tech services.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-foreground-secondary mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground-secondary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:from-primary-hover hover:to-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px] text-base"
          >
            Join Our Satisfied Clients
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}