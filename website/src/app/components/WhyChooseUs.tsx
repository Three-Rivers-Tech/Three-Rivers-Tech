"use client";

import { useState, useEffect } from "react";
import { FaBullseye, FaLaptopCode, FaTools, FaDollarSign } from "../components/icons";

export default function WhyChooseUs() {
  const [animatedValues, setAnimatedValues] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0
  });

  // Animation for statistics
  useEffect(() => {
    const targets = {
      projects: 75,
      clients: 30,
      satisfaction: 150,
      experience: 20
    };

    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // ~60fps
    const totalFrames = Math.round(duration / frameDuration);

    const counters = {
      projects: { value: 0, step: targets.projects / totalFrames },
      clients: { value: 0, step: targets.clients / totalFrames },
      satisfaction: { value: 0, step: targets.satisfaction / totalFrames },
      experience: { value: 0, step: targets.experience / totalFrames }
    };

    const timer = setInterval(() => {
      setAnimatedValues(prev => {
        const newValues = { ...prev };
        let updated = false;

        (Object.keys(counters) as Array<keyof typeof counters>).forEach(key => {
          if (counters[key].value < targets[key]) {
            counters[key].value += counters[key].step;
            newValues[key] = Math.min(Math.round(counters[key].value), targets[key]);
            updated = true;
          }
        });

        if (!updated) {
          clearInterval(timer);
        }

        return newValues;
      });
    }, frameDuration);

    return () => clearInterval(timer);
  }, []);

  // Features data
  const features = [
    {
      title: "Plain English",
      description: "No confusing tech jargon or complicated explanations. We talk like normal people and explain everything clearly.",
      icon: <FaBullseye className="w-12 h-12 text-primary" />
    },
    {
      title: "Simple Solutions",
      description: "We create websites and software that make your work less complicated. No more learning curves or steep barriers to entry.",
      icon: <FaLaptopCode className="w-12 h-12 text-primary" />
    },
    {
      title: "We Fix Problems Fast",
      description: "When something breaks, we fix it quickly. No waiting days or weeks for a response. We understand your business can't stop.",
      icon: <FaTools className="w-12 h-12 text-primary" />
    },
    {
      title: "Save You Money",
      description: "Our solutions help you work smarter, not harder. Less time wasted on manual tasks means more money in your pocket.",
      icon: <FaDollarSign className="w-12 h-12 text-primary" />
    }
  ];

  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Three Rivers Tech</h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            We combine technical expertise with a commitment to excellence to deliver outstanding results
          </p>
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border dark:border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              ${animatedValues.projects}k+
            </div>
            <div className="text-lg text-foreground-secondary">Saved Clients</div>
          </div>

          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-30 border border-border dark:border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {animatedValues.clients}+
            </div>
            <div className="text-lg text-foreground-secondary">Businesses Helped</div>
          </div>

          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-30 border border-border dark:border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {animatedValues.satisfaction}+
            </div>
            <div className="text-lg text-foreground-secondary">Problems Fixed</div>
          </div>

          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-30 border border-border dark:border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {animatedValues.experience}+
            </div>
            <div className="text-lg text-foreground-secondary">Hours Saved Weekly</div>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="why-choose-card bg-background-tertiary dark:bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
