export default function ExperienceSection() {
  const expertise = [
    {
      title: "Cybersecurity Education",
      description: "Penn State Greater Allegheny graduate with specialized training in Cybersecurity Analytics & Operations, providing enterprise-level security knowledge to protect your business and personal data.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      skills: ["Network Security", "Vulnerability Assessment", "Risk Management", "Security Policies"]
    },
    {
      title: "Help Desk Experience",
      description: "Daily hands-on experience solving real technical problems for users. I know how to explain complex issues in plain English and get your technology working quickly.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      skills: ["Windows/Mac Support", "Network Troubleshooting", "User Training", "Remote Support"]
    },
    {
      title: "Web Development",
      description: "Modern web development skills with React, Next.js, and Tailwind CSS. I build fast, accessible websites that work on all devices and rank well in search engines.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["React/Next.js", "Responsive Design", "SEO Optimization", "Accessibility"]
    },
    {
      title: "Local Community Focus",
      description: "Born and raised in the Mon Valley, I understand our community's needs. My background from Braddock Hills and commitment to Turtle Creek means I'm invested in our area's success.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ["Community Workshops", "Affordable Pricing", "Patient Teaching", "Local Business Support"]
    }
  ];

  return (
    <section className="section-padding bg-background-secondary" aria-labelledby="experience-heading">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <header className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Real Experience, Real Results
          </div>
          
          <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What I Bring to Our Community
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            With formal cybersecurity education, professional help desk experience, and a commitment to Turtle Creek, 
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I combine technical expertise with a genuine understanding of our community's needs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {expertise.map((item, index) => (
            <article 
              key={index}
              className="group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 hover:border-primary/20 p-6 sm:p-8"
              role="article"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-foreground-secondary mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-background-secondary dark:bg-background text-foreground-secondary text-xs font-medium rounded-full border border-border group-hover:border-primary/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-10 border border-primary/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Growing Three Rivers Tech Full-Time
          </h3>
          <p className="text-lg text-foreground-secondary mb-6 max-w-3xl mx-auto leading-relaxed">
            Currently working as a Help Desk Technician by day while building Three Rivers Tech as my side business, 
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            my goal is to make this a full-time operation serving our community's technology needs. Every client helps 
            me get closer to that dream of being your dedicated local tech partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow hover:scale-105 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span>Learn More About My Story</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white hover:shadow-glow hover:scale-105 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
