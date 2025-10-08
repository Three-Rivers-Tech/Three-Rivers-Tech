import { FaBullseye, FaLaptopCode, FaTools, FaDollarSign } from "../components/icons";

export default function WhyChooseUs() {
  // Static values instead of animated ones
  const stats = {
    projects: 75,
    clients: 30,
    satisfaction: 150,
    experience: 20
  };

  // Features data
  const features = [
    {
      title: "Plain English",
      description: "No confusing tech jargon or complicated explanations. We talk like normal people and explain everything clearly.",
      icon: <FaBullseye className="w-12 h-12 text-primary" suppressHydrationWarning={true} />
    },
    {
      title: "Simple Solutions",
      description: "We create websites and software that make your work less complicated. No more learning curves or steep barriers to entry.",
      icon: <FaLaptopCode className="w-12 h-12 text-primary" suppressHydrationWarning={true} />
    },
    {
      title: "We Fix Problems Fast",
      description: "When something breaks, we fix it quickly. No waiting days or weeks for a response. We understand your business can't stop.",
      icon: <FaTools className="w-12 h-12 text-primary" suppressHydrationWarning={true} />
    },
    {
      title: "Save You Money",
      description: "Our solutions help you work smarter, not harder. Less time wasted on manual tasks means more money in your pocket.",
      icon: <FaDollarSign className="w-12 h-12 text-primary" suppressHydrationWarning={true} />
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Why Choose Three Rivers Tech</h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            We combine technical expertise with a commitment to excellence to deliver outstanding results
          </p>
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-4 sm:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border dark:border-border">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
              ${stats.projects}k+
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-foreground-secondary">Saved Clients</div>
          </div>

          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-4 sm:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border dark:border-border">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {stats.clients}+
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-foreground-secondary">Businesses Helped</div>
          </div>

          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-4 sm:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border dark:border-border">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {stats.satisfaction}+
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-foreground-secondary">Problems Fixed</div>
          </div>

          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-4 sm:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border dark:border-border">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {stats.experience}+
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-foreground-secondary">Hours Saved Weekly</div>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="why-choose-card bg-background-tertiary dark:bg-background p-5 sm:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-center sm:text-left leading-tight">{feature.title}</h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary leading-relaxed text-center sm:text-left">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
