import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";

export const metadata = generateLocalSeoMetadata(generateStaticPageMetadata("learning-center"));

export default function LearningCenterPage() {
  const workshops = [
    {
      id: "basic-computer-skills",
      title: "Basic Computer Skills for Beginners",
      description: "Learn the essentials of using a computer, including navigating the internet, using email, and basic file management.",
      schedule: "First Saturday of each month, 10:00 AM - 12:00 PM",
      location: "Turtle Creek Senior Center",
      level: "Beginner"
    },
    {
      id: "online-safety",
      title: "Online Safety & Security",
      description: "Protect yourself and your family from online threats and scams. Learn about strong passwords and safe browsing.",
      schedule: "Second Saturday of each month, 10:00 AM - 12:00 PM",
      location: "Turtle Creek Senior Center",
      level: "All Levels"
    },
    {
      id: "social-media-basics",
      title: "Social Media for Small Businesses",
      description: "Learn how to effectively use Facebook, Instagram, and other platforms to promote your local business.",
      schedule: "Third Saturday of each month, 10:00 AM - 12:00 PM",
      location: "Turtle Creek Senior Center",
      level: "All Levels"
    },
    {
      id: "smartphone-training",
      title: "Smartphone Training for Seniors",
      description: "Learn how to use your smartphone for calls, texts, photos, video chats, and basic apps.",
      schedule: "Every Tuesday, 2:00 PM - 3:30 PM",
      location: "Turtle Creek Library",
      level: "Beginner"
    }
  ];

  const resources = [
    {
      id: "computer-tips",
      title: "Essential Computer Tips",
      description: "Download our helpful guide to common computer tasks and troubleshooting steps.",
      link: "/resources/computer-tips.pdf"
    },
    {
      id: "online-safety-checklist",
      title: "Online Safety Checklist",
      description: "A printable checklist to help you secure your accounts and protect your personal information.",
      link: "/resources/online-safety-checklist.pdf"
    },
    {
      id: "senior-tech-guide",
      title: "Technology Guide for Seniors",
      description: "A comprehensive guide with simple explanations of common technology concepts and tasks.",
      link: "/resources/senior-tech-guide.pdf"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Learning Center - Tech Workshops and Resources",
            "description": "Free workshops and educational resources for Turtle Creek residents and local small businesses. Learn about computer skills, online safety, and digital marketing.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Three Rivers Tech",
              "address": "124 Grant Street, Turtle Creek, PA 15145"
            }
          })
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Learning Center</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            Free workshops and educational resources for Turtle Creek residents and local small businesses
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Workshop Schedule */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">Free Community Workshops</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {workshops.map((workshop) => (
                <div key={workshop.id} className="border border-border rounded-lg p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{workshop.title}</h3>
                  <p className="text-foreground-secondary mb-4">{workshop.description}</p>
                  
                  <div className="text-sm">
                    <p className="mb-1 flex items-center"><span className="w-24 inline-block">Schedule:</span> {workshop.schedule}</p>
                    <p className="mb-1 flex items-center"><span className="w-24 inline-block">Location:</span> {workshop.location}</p>
                    <p className="flex items-center"><span className="w-24 inline-block">Level:</span> {workshop.level}</p>
                  </div>
                  
                  <div className="mt-4">
                    <a 
                      href="/contact?service=community-education" 
                      className="inline-block bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable Resources */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">Downloadable Resources</h2>
            
            <div className="space-y-4">
              {resources.map((resource) => (
                <div key={resource.id} className="flex justify-between items-center border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{resource.title}</h3>
                    <p className="text-foreground-secondary text-sm">{resource.description}</p>
                  </div>
                  <a 
                    href={resource.link} 
                    className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors"
                    download
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* About Our Education Program */}
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">Making Technology Accessible</h2>
            <p className="text-foreground-secondary text-center mb-6 max-w-3xl mx-auto">
              At Three Rivers Tech, we believe everyone in our community should have access to the technology skills they need to thrive. 
              That's why we offer free workshops and resources to help residents and local businesses make the most of technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Free Workshops</h3>
                <p className="text-sm text-foreground-secondary">
                  Monthly workshops on essential technology skills for all ages and experience levels
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Community Focused</h3>
                <p className="text-sm text-foreground-secondary">
                  Programs designed specifically for Turtle Creek residents and local businesses
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Patient Instruction</h3>
                <p className="text-sm text-foreground-secondary">
                  Patient, supportive instructors who take the time to help you understand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}