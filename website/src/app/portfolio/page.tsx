import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";

export const metadata = generateLocalSeoMetadata(generateStaticPageMetadata("portfolio"));

export default function PortfolioPage() {
  const projects = [
    {
      id: "turtle-creek-hardware",
      title: "Turtle Creek Hardware Website",
      description: "Designed and developed a professional website for the local hardware store to help them reach more customers online.",
      services: ["Website Design", "Local SEO", "Ongoing Support"],
      image: "/images/projects/turtle-creek-hardware.jpg",
      client: "Turtle Creek Hardware",
      location: "Turtle Creek, PA",
      year: "2024"
    },
    {
      id: "wilmerding-bakery",
      title: "Wilmerding Bakery Online Presence",
      description: "Created a simple but effective website and social media strategy for a local family-owned bakery.",
      services: ["Website Development", "Social Media Setup", "Email Marketing"],
      image: "/images/projects/wilmerding-bakery.jpg",
      client: "Wilmerding Bakery",
      location: "Wilmerding, PA",
      year: "2023"
    },
    {
      id: "mon-valley-tutoring",
      title: "Mon Valley Tutoring Platform",
      description: "Built an online platform for local tutors to connect with students in the Mon Valley area.",
      services: ["Web Application", "Database Design", "User Management"],
      image: "/images/projects/mon-valley-tutoring.jpg",
      client: "Mon Valley Tutoring",
      location: "Monroeville, PA",
      year: "2024"
    },
    {
      id: "penn-ave-auto",
      title: "Penn Ave Auto Repair System",
      description: "Developed a simple booking and inventory system for a local auto repair shop.",
      services: ["Custom Software", "Database Integration", "Mobile Solution"],
      image: "/images/projects/penn-ave-auto.jpg",
      client: "Penn Ave Auto Repair",
      location: "Turtle Creek, PA",
      year: "2023"
    },
    {
      id: "community-center",
      title: "Turtle Creek Community Center Portal",
      description: "A web portal for community members to access event calendars, register for classes, and communicate with staff.",
      services: ["Web Portal", "User Authentication", "Event Management"],
      image: "/images/projects/community-center.jpg",
      client: "Turtle Creek Community Center",
      location: "Turtle Creek, PA",
      year: "2024"
    },
    {
      id: "senior-center",
      title: "Turtle Creek Senior Center Resources",
      description: "Digital resources hub for local seniors with information on services, activities, and technology training.",
      services: ["Web Design", "Accessibility Optimization", "Content Management"],
      image: "/images/projects/senior-center.jpg",
      client: "Turtle Creek Senior Center",
      location: "Turtle Creek, PA",
      year: "2023"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Our Portfolio - Local Projects & Community Impact",
            "description": "Explore our featured technology projects and case studies for businesses and organizations in Turtle Creek and the Mon Valley area.",
            "url": "https://threeriverstech.com/portfolio",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://threeriverstech.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Portfolio",
                  "item": "https://threeriverstech.com/portfolio"
                }
              ]
            }
          })
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Local Impact</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            Projects we've completed for businesses and organizations right here in Turtle Creek and the Mon Valley
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-foreground-secondary mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm text-foreground-secondary mb-1">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </div>
                  <div className="text-sm font-medium text-foreground">{project.client}</div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span 
                      key={index} 
                      className="bg-background-secondary text-foreground text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <p className="text-foreground-secondary mb-6 text-lg max-w-2xl mx-auto">
            Interested in working with us? We'd love to discuss your project and how we can help your business or organization succeed in our community.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px]"
          >
            <span>Start Your Project</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}