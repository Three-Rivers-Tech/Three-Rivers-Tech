// Generate static params for all possible portfolio IDs
export async function generateStaticParams() {
  // Return an array of possible IDs for static generation
  return [
    { id: 'turtle-creek-hardware' },
    { id: 'wilmerding-bakery' },
    { id: 'mon-valley-tutoring' },
    { id: 'penn-ave-auto' },
    { id: 'community-center' },
    { id: 'senior-center' },
    { id: 'home-computer-repair' },
    { id: 'small-business-it' },
    // Legacy IDs for backward compatibility
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

import BackButton from './BackButton';

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  // Community-focused case studies with detailed project information
  interface CaseStudy {
    id: string;
    title: string;
    description: string;
    category: string;
    challenge: string;
    solution: string;
    outcome: string;
    technologies: string[];
    timeline?: string;
    clientSize?: string;
    client?: string;
    location?: string;
    year?: string;
  }

  const caseStudies: Record<string, CaseStudy> = {
    // Community-focused projects
    "turtle-creek-hardware": {
      id: "turtle-creek-hardware",
      title: "Turtle Creek Hardware Website",
      description: "Designed and developed a professional website for the local hardware store to help them reach more customers online.",
      category: "Website Design & Local SEO",
      challenge: "Turtle Creek Hardware was a well-established local business that relied entirely on foot traffic and word-of-mouth referrals. With younger customers increasingly searching online for local services and products, the store was missing opportunities to connect with new customers. They needed an online presence that would help them compete with big box stores while highlighting their personal service and local expertise.",
      solution: "We created a mobile-friendly website featuring their product categories, store hours, contact information, and local expertise. The site includes a simple product catalog, highlights their repair services, and emphasizes their community connection. We implemented local SEO optimization to help them appear in searches for 'hardware store near me' and similar local queries. The design reflects their friendly, neighborhood feel while maintaining professional credibility.",
      outcome: "Within six months, the hardware store saw a 40% increase in foot traffic from customers who found them online. Younger customers began visiting the store after discovering their services through Google searches. The owner reported that customers frequently mentioned finding them online, and phone calls for product availability increased significantly.",
      technologies: ["WordPress", "Local SEO optimization", "Google My Business integration", "Mobile-responsive design"],
      timeline: "3 weeks",
      clientSize: "Local hardware store (3 employees)",
      client: "Turtle Creek Hardware",
      location: "Turtle Creek, PA",
      year: "2024"
    },
    "wilmerding-bakery": {
      id: "wilmerding-bakery",
      title: "Wilmerding Bakery Online Presence",
      description: "Created a simple but effective website and social media strategy for a local family-owned bakery.",
      category: "Website Development & Social Media",
      challenge: "Wilmerding Bakery had been serving the community for over 20 years but relied entirely on walk-in customers. During the pandemic, they struggled to communicate daily specials and hours to customers. They wanted to expand their customer base beyond the immediate neighborhood and needed a way to showcase their custom cakes and daily fresh items to attract new customers.",
      solution: "We built a simple, appetizing website that showcases their daily specials, custom cake gallery, and family story. The site includes an easy-to-update daily specials section, online ordering for custom cakes, and integration with their Facebook page. We set up their social media presence and trained the family on posting daily specials and engaging with customers online.",
      outcome: "The bakery experienced a 25% increase in daily orders within the first month. Custom cake orders doubled as customers could easily browse their portfolio online. Their Facebook following grew from 50 to over 800 local followers, and they regularly receive orders from customers in neighboring communities who discovered them online.",
      technologies: ["WordPress", "WooCommerce for custom orders", "Facebook integration", "Photo gallery system"],
      timeline: "2 weeks",
      clientSize: "Family-owned bakery (4 family members)",
      client: "Wilmerding Bakery",
      location: "Wilmerding, PA",
      year: "2023"
    },
    "mon-valley-tutoring": {
      id: "mon-valley-tutoring",
      title: "Mon Valley Tutoring Platform",
      description: "Built an online platform for local tutors to connect with students in the Mon Valley area.",
      category: "Web Application Development",
      challenge: "A group of local teachers wanted to offer tutoring services but struggled with scheduling, payment processing, and student management. They were using phone calls, text messages, and cash payments, which made it difficult to track sessions, manage multiple students, and maintain professional records. Parents wanted easier ways to schedule sessions and track their children's progress.",
      solution: "We developed a custom web application that allows tutors to create profiles, set availability, and manage student schedules. Parents can browse tutor profiles, book sessions online, and make secure payments. The system includes automated reminders, session notes, and progress tracking. We designed it to be simple enough for both tech-savvy and less technical users.",
      outcome: "The platform now serves 15 local tutors and over 100 students across the Mon Valley. Administrative time was reduced by 50%, allowing tutors to focus on teaching. Parent satisfaction increased due to better communication and progress tracking. The platform has facilitated over 1,000 tutoring sessions and helped students improve their grades significantly.",
      technologies: ["React", "Node.js", "Stripe payment processing", "Google Calendar API", "Email notifications"],
      timeline: "6 weeks",
      clientSize: "Tutoring cooperative (15 tutors)",
      client: "Mon Valley Tutoring Cooperative",
      location: "Monroeville, PA",
      year: "2024"
    },
    "penn-ave-auto": {
      id: "penn-ave-auto",
      title: "Penn Ave Auto Repair System",
      description: "Developed a simple booking and inventory system for a local auto repair shop.",
      category: "Custom Software Solution",
      challenge: "Penn Ave Auto Repair was managing appointments with a paper calendar and tracking parts inventory manually. This led to double-bookings, forgotten appointments, and difficulty managing parts orders. The owner wanted to provide better customer service with appointment reminders and estimated completion times, but the manual system made this nearly impossible.",
      solution: "We created a simple booking system that allows customers to schedule appointments online or by phone. The system tracks vehicle information, service history, and parts inventory. It automatically sends appointment reminders via text message and updates customers when their vehicle is ready. The inventory system alerts when parts are running low and integrates with their preferred suppliers.",
      outcome: "Double-bookings were eliminated completely, and customer satisfaction improved significantly due to timely reminders and updates. Parts ordering became more efficient, reducing downtime when waiting for parts. The shop increased their daily capacity by 20% through better scheduling, and customer complaints about communication dropped to nearly zero.",
      technologies: ["PHP", "MySQL database", "SMS integration", "Inventory management system"],
      timeline: "4 weeks",
      clientSize: "Auto repair shop (5 mechanics)",
      client: "Penn Ave Auto Repair",
      location: "Turtle Creek, PA",
      year: "2023"
    },
    "community-center": {
      id: "community-center",
      title: "Turtle Creek Community Center Portal",
      description: "A web portal for community members to access event calendars, register for classes, and communicate with staff.",
      category: "Community Web Portal",
      challenge: "The Turtle Creek Community Center was struggling to communicate events and class schedules to residents. They relied on bulletin boards, phone calls, and word-of-mouth, which meant many residents missed out on programs. Class registration was done in person or by phone, making it difficult for working families to sign up. The staff spent significant time answering the same questions about schedules and availability.",
      solution: "We built a user-friendly community portal where residents can view upcoming events, register for classes online, and receive updates about community activities. The system includes an event calendar, online registration with payment processing, and a communication system for announcements. We made sure the interface is accessible for seniors and easy to navigate on mobile devices.",
      outcome: "Event participation increased by 60% as more residents became aware of available programs. Online registration reduced administrative workload and made it easier for working families to sign up for classes. The community center now reaches more residents with important announcements, and staff time is better spent on program development rather than administrative tasks.",
      technologies: ["WordPress", "Event management plugin", "Online payment processing", "User registration system"],
      timeline: "5 weeks",
      clientSize: "Community center (8 staff members)",
      client: "Turtle Creek Community Center",
      location: "Turtle Creek, PA",
      year: "2024"
    },
    "senior-center": {
      id: "senior-center",
      title: "Turtle Creek Senior Center Resources",
      description: "Digital resources hub for local seniors with information on services, activities, and technology training.",
      category: "Accessible Web Design",
      challenge: "The Turtle Creek Senior Center wanted to better serve seniors and their families by providing easy access to information about services, activities, and resources. Many seniors' adult children lived out of town and wanted to stay informed about their parents' activities. The center also wanted to offer basic technology training but needed materials that seniors could access and review at their own pace.",
      solution: "We designed a highly accessible website with large fonts, high contrast colors, and simple navigation. The site includes information about daily activities, meal programs, transportation services, and health resources. We created downloadable guides for basic computer skills and smartphone use, specifically written for seniors. The site also allows family members to stay updated on their loved ones' activities.",
      outcome: "The website became a valuable resource for both seniors and their families. Adult children frequently use the site to stay informed about their parents' activities and available services. The technology training materials have been downloaded over 500 times, and several seniors have reported feeling more confident using computers and smartphones after using the guides.",
      technologies: ["WordPress", "Accessibility optimization plugins", "Large font design", "PDF generation for guides"],
      timeline: "3 weeks",
      clientSize: "Senior center (6 staff members)",
      client: "Turtle Creek Senior Center",
      location: "Turtle Creek, PA",
      year: "2023"
    },
    "home-computer-repair": {
      id: "home-computer-repair",
      title: "Residential Computer Repair Services",
      description: "On-site computer repair and setup services for Turtle Creek families and seniors.",
      category: "Technical Support Services",
      challenge: "Many Turtle Creek residents, especially seniors and busy families, struggled with computer problems but had no local options for help. Taking computers to distant repair shops was inconvenient and expensive. Seniors often needed patient, one-on-one help with basic computer tasks and smartphone setup, but most tech support services weren't designed for their needs.",
      solution: "We established a door-to-door computer repair service specifically for local residents. Services include virus removal, computer tune-ups, Wi-Fi setup, smartphone training for seniors, and basic computer education. We focus on patient, friendly service and take time to explain things in non-technical terms. We also provide follow-up support and maintain relationships with regular customers.",
      outcome: "We've helped over 50 local families with computer issues, from simple virus removal to complete system setups. Many seniors now feel confident using email, video calling with family, and basic internet browsing. Several customers have become regular clients for ongoing tech support, and word-of-mouth referrals have been our primary source of new business.",
      technologies: ["Hardware diagnostics tools", "Antivirus software", "Windows and Mac support", "Mobile device setup"],
      timeline: "Ongoing service since 2023",
      clientSize: "Individual residents and families",
      client: "Local Residents",
      location: "Turtle Creek Area",
      year: "2023-2024"
    },
    "small-business-it": {
      id: "small-business-it",
      title: "Small Business IT Support Package",
      description: "Affordable IT support and setup services for local shops and small businesses.",
      category: "IT Infrastructure & Support",
      challenge: "Small businesses in Turtle Creek and surrounding areas needed reliable IT support but couldn't afford expensive corporate IT services. Many were using outdated equipment, had no backup systems, and struggled with basic networking issues. They needed someone who understood their budget constraints and could provide practical, affordable solutions.",
      solution: "We created affordable monthly support packages tailored for small businesses. Services include network setup and maintenance, POS system integration, basic cybersecurity, and help desk support. We focus on practical solutions that fit small business budgets and provide training so business owners can handle basic issues themselves. Our approach emphasizes prevention and education rather than expensive emergency repairs.",
      outcome: "We now provide IT support to 15+ local businesses, including restaurants, retail shops, and service providers. These businesses have experienced fewer technology-related disruptions, improved efficiency, and better security. Several clients have expanded their operations with confidence, knowing they have reliable IT support. Our preventive approach has reduced emergency service calls by 70%.",
      technologies: ["Network hardware setup", "POS system integration", "Remote support tools", "Backup solutions"],
      timeline: "Ongoing service packages",
      clientSize: "Small businesses (1-10 employees each)",
      client: "Various Local Businesses",
      location: "Turtle Creek & Mon Valley",
      year: "2023-2024"
    },
    // Legacy enterprise projects for backward compatibility
    "1": {
      id: "1",
      title: "Manufacturing ERP Integration",
      description: "Streamlined operations for a mid-size manufacturing company through custom ERP integration, reducing processing time by 40% and improving inventory accuracy.",
      category: "Enterprise Software Solutions",
      challenge: "The client faced significant operational inefficiencies due to legacy systems that created data silos across departments. Manual processes for order management, inventory tracking, and production scheduling were causing delays, errors, and increased operational costs. The lack of real-time data visibility made it difficult to make informed business decisions.",
      solution: "We developed a comprehensive ERP integration solution that connected their existing manufacturing systems with a modern cloud-based ERP platform. Our custom API middleware enabled seamless data flow between systems while maintaining data integrity. We implemented automated workflows for order processing, inventory management, and production scheduling.",
      outcome: "40% reduction in order processing time, 95% improvement in inventory accuracy, elimination of manual data entry errors, and real-time visibility into all business operations.",
      technologies: ["React", "Node.js", "PostgreSQL", "REST APIs", "Docker", "AWS"],
      timeline: "4 months",
      clientSize: "Mid-size manufacturing company (200+ employees)"
    },
    "2": {
      id: "2", 
      title: "Financial Services Network Modernization",
      description: "Upgraded network infrastructure for a regional credit union, enhancing security protocols and improving system reliability by 99.8%.",
      category: "IT Infrastructure & Support",
      challenge: "The credit union's aging network infrastructure was causing frequent system outages, slow transaction processing, and security vulnerabilities. Their legacy equipment couldn't support modern security protocols, putting customer data at risk and limiting their ability to offer digital banking services.",
      solution: "We implemented a phased network modernization approach, upgrading core networking equipment while maintaining business continuity. The solution included next-generation firewalls, redundant internet connections, network segmentation for enhanced security, and comprehensive monitoring systems.",
      outcome: "Achieved 99.8% network uptime, eliminated security vulnerabilities, reduced transaction processing time by 60%, and enabled secure remote work capabilities for all staff.",
      technologies: ["Cisco Catalyst switches", "Fortinet FortiGate firewalls", "VMware vSphere", "SolarWinds monitoring"],
      timeline: "6 months",
      clientSize: "Regional credit union (50+ employees, 10,000+ members)"
    },
    "3": {
      id: "3",
      title: "Healthcare Practice Management Integration",
      description: "Integrated multiple SaaS platforms for a healthcare practice, creating unified patient data management and reducing administrative overhead by 30%.",
      category: "SaaS Solutions & Integration",
      challenge: "The healthcare practice was using separate systems for patient scheduling, electronic health records, billing, and patient communication. This created inefficient workflows, data inconsistencies, and increased administrative burden on staff. Patient information was scattered across multiple platforms, making it difficult to provide coordinated care.",
      solution: "We designed and implemented a comprehensive integration solution using custom APIs and middleware to connect their practice management system, EHR, billing platform, and patient portal. The solution included automated data synchronization, unified patient records, and streamlined workflows.",
      outcome: "30% reduction in administrative time, improved patient data accuracy, enhanced care coordination, and better patient satisfaction through unified communication channels.",
      technologies: ["HL7 FHIR APIs", "Zapier automation", "Custom middleware", "HIPAA-compliant integrations"],
      timeline: "3 months",
      clientSize: "Multi-location healthcare practice (25+ staff, 5,000+ patients)"
    },
    "4": {
      id: "4",
      title: "Law Firm Data Recovery & Backup System",
      description: "Implemented comprehensive backup solution and recovered critical case files for a law firm after hardware failure, ensuring business continuity.",
      category: "Hardware Support & Maintenance",
      challenge: "The law firm experienced a catastrophic server failure that threatened to destroy 5 years of critical case documentation, client files, and legal research. Their existing backup system had failed silently, leaving them vulnerable to complete data loss. The firm faced potential malpractice claims and significant business disruption.",
      solution: "We immediately deployed emergency data recovery techniques using specialized hardware and software tools. Simultaneously, we designed and implemented a robust backup and disaster recovery system with multiple redundancy layers, including local backups, cloud storage, and automated testing procedures.",
      outcome: "Successfully recovered 100% of critical data, implemented automated daily backups with 99.9% reliability, established disaster recovery procedures, and provided staff training on data protection best practices.",
      technologies: ["Professional data recovery tools", "Veeam Backup & Replication", "AWS S3 storage", "RAID systems"],
      timeline: "2 weeks emergency recovery + 1 month system implementation",
      clientSize: "Regional law firm (15+ attorneys, 30+ staff)"
    },
    "5": {
      id: "5",
      title: "Retail Chain Inventory Management System",
      description: "Developed custom inventory tracking system for multi-location retail chain, improving stock accuracy and reducing shrinkage by 25%.",
      category: "Enterprise Software Solutions",
      challenge: "The retail chain was struggling with manual inventory tracking across 8 locations, leading to stock discrepancies, overstocking, understocking, and significant inventory shrinkage. The lack of real-time inventory visibility made it impossible to optimize purchasing decisions and transfer stock between locations efficiently.",
      solution: "We developed a comprehensive inventory management system with real-time tracking capabilities, barcode scanning integration, automated reorder points, and inter-location transfer management. The system included mobile apps for staff, management dashboards, and integration with their existing POS systems.",
      outcome: "25% reduction in inventory shrinkage, 50% faster stock audits, improved cash flow through optimized purchasing, and enhanced customer satisfaction through better product availability.",
      technologies: ["Vue.js", "Python Django", "MySQL", "Barcode scanning APIs", "Mobile PWA"],
      timeline: "5 months",
      clientSize: "Regional retail chain (8 locations, 100+ employees)"
    },
    "6": {
      id: "6",
      title: "Professional Services Cloud Migration",
      description: "Migrated accounting firm's infrastructure to cloud-based solutions, reducing IT costs by 35% while improving remote work capabilities.",
      category: "IT Infrastructure & Support",
      challenge: "The accounting firm's on-premise infrastructure was limiting their ability to support remote work, required high maintenance costs, and lacked the scalability needed for business growth. Their aging servers were becoming unreliable, and software licensing costs were escalating.",
      solution: "We executed a comprehensive cloud migration strategy, moving their infrastructure to Microsoft 365 and Azure. The solution included email migration, file server replacement with SharePoint, implementation of Teams for collaboration, and setup of cloud-based accounting software access.",
      outcome: "35% reduction in IT infrastructure costs, 100% remote work capability for all staff, improved collaboration and productivity, enhanced data security, and automatic software updates.",
      technologies: ["Microsoft 365", "Azure Active Directory", "SharePoint Online", "Microsoft Teams", "Azure Virtual Desktop"],
      timeline: "3 months",
      clientSize: "Accounting firm (30+ employees, 500+ clients)"
    }
  };

  const caseStudy = caseStudies[params.id] || {
    id: params.id,
    title: "Case Study Not Found",
    description: "The requested case study could not be found.",
    category: "Unknown",
    challenge: "Case study not available",
    solution: "Case study not available", 
    outcome: "Case study not available",
    technologies: [],
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mb-8">
        <BackButton />
      </div>

      <div className="bg-background-secondary rounded-lg p-8 border border-border">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">{caseStudy.title}</h1>
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full">
            {caseStudy.category}
          </span>
        </div>

        {/* Project details for community projects */}
        {(caseStudy.client || caseStudy.location || caseStudy.year) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-background rounded-lg border border-border">
            {caseStudy.client && (
              <div>
                <h3 className="text-sm font-semibold text-foreground-secondary mb-1">Client</h3>
                <p className="text-foreground">{caseStudy.client}</p>
              </div>
            )}
            {caseStudy.location && (
              <div>
                <h3 className="text-sm font-semibold text-foreground-secondary mb-1">Location</h3>
                <p className="text-foreground">{caseStudy.location}</p>
              </div>
            )}
            {caseStudy.year && (
              <div>
                <h3 className="text-sm font-semibold text-foreground-secondary mb-1">Year</h3>
                <p className="text-foreground">{caseStudy.year}</p>
              </div>
            )}
          </div>
        )}

        <div className="bg-gray-200 border-2 border-dashed w-full h-64 mb-8 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Project Screenshot Coming Soon</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-foreground-secondary leading-relaxed">{caseStudy.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-foreground-secondary leading-relaxed">{caseStudy.solution}</p>
          </div>
        </div>

        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Results & Community Impact</h2>
          <p className="text-green-700 leading-relaxed">{caseStudy.outcome}</p>
        </div>

        {caseStudy.timeline && caseStudy.clientSize && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Timeline</h3>
              <p className="text-foreground-secondary">{caseStudy.timeline}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Client Profile</h3>
              <p className="text-foreground-secondary">{caseStudy.clientSize}</p>
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold mb-4">Technologies & Tools Used</h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-background text-foreground border border-border rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
