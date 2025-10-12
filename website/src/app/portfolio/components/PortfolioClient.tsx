"use client";

import { useState } from "react";
import PortfolioGrid from "./PortfolioGrid";

// Professional case studies with detailed project information
const portfolioItems = [
  {
    id: "1",
    title: "Manufacturing ERP Integration",
    description: "Streamlined operations for a mid-size manufacturing company through custom ERP integration, reducing processing time by 40% and improving inventory accuracy.",
    category: "Enterprise Software Solutions",
    challenge: "Legacy systems causing data silos and manual processes",
    solution: "Custom API integration connecting existing systems with modern ERP platform",
    outcome: "40% reduction in order processing time, 95% inventory accuracy improvement",
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    timeline: "4 months",
    clientSize: "Mid-size manufacturing (200+ employees)"
  },
  {
    id: "2", 
    title: "Financial Services Network Modernization",
    description: "Upgraded network infrastructure for a regional credit union, enhancing security protocols and improving system reliability by 99.8%.",
    category: "IT Infrastructure & Support",
    challenge: "Outdated network equipment causing frequent downtime and security vulnerabilities",
    solution: "Phased network upgrade with enhanced security protocols and redundancy systems",
    outcome: "99.8% uptime improvement, zero security incidents in 12 months",
    technologies: ["Cisco networking", "Fortinet firewalls", "VMware virtualization"],
    timeline: "6 months",
    clientSize: "Regional financial institution (50+ employees)"
  },
  {
    id: "3",
    title: "Healthcare Practice Management Integration",
    description: "Integrated multiple SaaS platforms for a healthcare practice, creating unified patient data management and reducing administrative overhead by 30%.",
    category: "SaaS Solutions & Integration",
    challenge: "Multiple disconnected systems creating inefficient workflows and data inconsistencies",
    solution: "Custom middleware connecting practice management, billing, and patient portal systems",
    outcome: "30% reduction in administrative time, improved patient data accuracy",
    technologies: ["Zapier", "Custom APIs", "HIPAA-compliant integrations"],
    timeline: "3 months",
    clientSize: "Multi-location healthcare practice (25+ staff)"
  },
  {
    id: "4",
    title: "Law Firm Data Recovery & Backup System",
    description: "Implemented comprehensive backup solution and recovered critical case files for a law firm after hardware failure, ensuring business continuity.",
    category: "Hardware Support & Maintenance",
    challenge: "Server failure resulted in potential loss of 5 years of case documentation",
    solution: "Emergency data recovery combined with robust backup system implementation",
    outcome: "100% data recovery, automated daily backups preventing future data loss",
    technologies: ["RAID recovery", "Veeam backup", "Cloud storage integration"],
    timeline: "2 weeks emergency + 1 month implementation",
    clientSize: "Regional law firm (15+ attorneys)"
  },
  {
    id: "5",
    title: "Retail Chain Inventory Management System",
    description: "Developed custom inventory tracking system for multi-location retail chain, improving stock accuracy and reducing shrinkage by 25%.",
    category: "Enterprise Software Solutions",
    challenge: "Manual inventory tracking across 8 locations causing stock discrepancies and losses",
    solution: "Real-time inventory management system with barcode scanning and automated reordering",
    outcome: "25% reduction in inventory shrinkage, 50% faster stock audits",
    technologies: ["Vue.js", "Python", "MySQL", "Barcode scanning APIs"],
    timeline: "5 months",
    clientSize: "Regional retail chain (8 locations, 100+ employees)"
  },
  {
    id: "6",
    title: "Professional Services Cloud Migration",
    description: "Migrated accounting firm's infrastructure to cloud-based solutions, reducing IT costs by 35% while improving remote work capabilities.",
    category: "IT Infrastructure & Support",
    challenge: "On-premise servers limiting remote work and requiring high maintenance costs",
    solution: "Comprehensive cloud migration with Microsoft 365 and Azure integration",
    outcome: "35% reduction in IT costs, 100% remote work capability, improved collaboration",
    technologies: ["Microsoft 365", "Azure", "SharePoint", "Teams integration"],
    timeline: "3 months",
    clientSize: "Accounting firm (30+ employees)"
  },
];

export default function PortfolioClient() {
 const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];

  // Filter items based on selected category
  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
        <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
          Discover how we&apos;ve helped businesses transform their technology infrastructure and operations through proven solutions and measurable results.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-background-secondary text-foreground hover:bg-border"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <PortfolioGrid items={filteredItems} />
    </div>
  );
}