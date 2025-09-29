"use client";

import { useState } from "react";
import PortfolioGrid from "./PortfolioGrid";

// Static data for portfolio items
const portfolioItems = [
 {
    id: "1",
    title: "E-Commerce Platform",
    description: "Custom e-commerce solution for a retail client",
    category: "Software Development",
  },
  {
    id: "2",
    title: "Network Infrastructure",
    description: "Complete network overhaul for a financial firm",
    category: "IT Consulting",
  },
  {
    id: "3",
    title: "Task Management SaaS",
    description: "Productivity tool for remote teams",
    category: "SaaS Products",
  },
  {
    id: "4",
    title: "Data Recovery Service",
    description: "Critical data recovery for a healthcare provider",
    category: "Computer Repair",
  },
  {
    id: "5",
    title: "Mobile Banking App",
    description: "Secure mobile banking application",
    category: "Software Development",
  },
  {
    id: "6",
    title: "Cloud Migration",
    description: "Enterprise cloud migration project",
    category: "IT Consulting",
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
          Explore our featured projects and case studies
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
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