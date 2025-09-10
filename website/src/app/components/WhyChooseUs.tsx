"use client";

import { useState, useEffect } from "react";

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
      projects: 150,
      clients: 85,
      satisfaction: 98,
      experience: 10
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
      title: "Expert Team",
      description: "Our certified professionals bring years of industry experience to every project.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.28 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Cutting-Edge Solutions",
      description: "We leverage the latest technologies to deliver innovative solutions that drive results.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is always available to ensure your systems run smoothly.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      title: "Proven Results",
      description: "We measure our success by the tangible results we deliver to our clients.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0118 0z" />
        </svg>
      )
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
              {animatedValues.projects}+
            </div>
            <div className="text-lg text-foreground-secondary">Projects Completed</div>
          </div>

          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-30 border border-border dark:border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {animatedValues.clients}%
            </div>
            <div className="text-lg text-foreground-secondary">Client Retention</div>
          </div>

          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-30 border border-border dark:border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {animatedValues.satisfaction}%
            </div>
            <div className="text-lg text-foreground-secondary">Satisfaction Rate</div>
          </div>

          <div className="stats-card text-center bg-background-tertiary dark:bg-background-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-30 border border-border dark:border-border">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {animatedValues.experience}+
            </div>
            <div className="text-lg text-foreground-secondary">Years Experience</div>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`why-choose-card bg-background-tertiary dark:bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                (feature.title === "Expert Team" ||
                 feature.title === "Cutting-Edge Solutions" ||
                 feature.title === "24/7 Support" ||
                 feature.title === "Proven Results")
                ? "highlight-card" : ""
              }`}
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
