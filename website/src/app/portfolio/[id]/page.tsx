// Generate static params for all possible portfolio IDs
export async function generateStaticParams() {
  // Return an array of possible IDs for static generation
  return [
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
  // Professional case studies with detailed project information
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
  }

  const caseStudies: Record<string, CaseStudy> = {
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

        <div className="bg-gray-200 border-2 border-dashed w-full h-64 mb-8 rounded-lg" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Challenge</h2>
            <p className="text-foreground-secondary">{caseStudy.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Solution</h2>
            <p className="text-foreground-secondary">{caseStudy.solution}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
          <p className="text-foreground-secondary">{caseStudy.outcome}</p>
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
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-background text-foreground border border-border rounded-full"
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
