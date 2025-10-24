import { FaBullseye, FaLaptopCode, FaTools, FaDollarSign } from "../components/icons";

export default function WhyChooseUs() {
  // Honest business approach
  const approach = [
    { value: "New", label: "Startup Focus", icon: "🚀" },
    { value: "Honest", label: "Transparent Pricing", icon: "💰" },
    { value: "Local", label: "Community Focused", icon: "🏘️" },
    { value: "Dedicated", label: "Hard Working", icon: "💪" }
  ];

  // Features data
  const features = [
    {
      title: "Upfront Pricing",
      description: "No hidden fees or surprise charges. We provide clear, honest pricing estimates before starting any work.",
      icon: <FaBullseye className="w-8 h-8 text-primary" suppressHydrationWarning={true} />
    },
    {
      title: "Honest Assessment",
      description: "We'll tell you what you actually need, not try to sell you unnecessary services. No pressure, just practical solutions.",
      icon: <FaLaptopCode className="w-8 h-8 text-primary" suppressHydrationWarning={true} />
    },
    {
      title: "Reliable Service",
      description: "As a startup, we're committed to building our reputation through reliable, dependable service to our neighbors.",
      icon: <FaTools className="w-8 h-8 text-primary" suppressHydrationWarning={true} />
    },
    {
      title: "Community Focused",
      description: "We're invested in our community's success, not just our bottom line. Supporting Turtle Creek residents and businesses.",
      icon: <FaDollarSign className="w-8 h-8 text-primary" suppressHydrationWarning={true} />
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-16 sm:mb-20">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
            Our Approach
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up text-foreground">
            Why Choose Three Rivers Tech
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200 font-medium">
            We&apos;re a startup focused on providing honest, straightforward tech services to our community
          </p>
        </div>

        {/* Honest approach section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 sm:mb-24">
          {approach.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 hover:border-primary/20 p-6 sm:p-8 text-center animate-slide-up animation-delay-${400 + index * 100}`}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                {/* Value */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:text-primary-hover transition-colors duration-300">
                  {item.value}
                </div>
                
                {/* Label */}
                <div className="text-sm sm:text-base lg:text-lg text-foreground-secondary font-medium">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 hover:border-primary/20 p-6 sm:p-8 animate-slide-up animation-delay-${800 + index * 100}`}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex justify-center sm:justify-start">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center sm:text-left leading-tight group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed text-center sm:text-left">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
