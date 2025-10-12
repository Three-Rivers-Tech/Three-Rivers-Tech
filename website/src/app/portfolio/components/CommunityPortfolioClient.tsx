"use client";

import { useState } from "react";
import PortfolioFilter from "./PortfolioFilter";
import CommunityProjectCard from "./CommunityProjectCard";

interface CommunityProject {
  id: string;
  title: string;
  description: string;
  services: string[];
  image: string;
  client: string;
  location: string;
  year: string;
  category: 'website' | 'software' | 'support' | 'community';
  challenge?: string;
  solution?: string;
  outcome?: string;
  technologies?: string[];
  clientType: 'local-business' | 'community-org' | 'resident';
}

interface CommunityPortfolioClientProps {
  projects: CommunityProject[];
}

export default function CommunityPortfolioClient({ projects }: CommunityPortfolioClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories from projects
  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <PortfolioFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {filteredProjects.map((project) => (
          <CommunityProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* No projects message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground-secondary text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </>
  );
}