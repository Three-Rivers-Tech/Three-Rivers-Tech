"use client";

import { useState } from "react";

interface PortfolioFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PortfolioFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: PortfolioFilterProps) {
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'all':
        return 'All Projects';
      case 'website':
        return 'Websites';
      case 'software':
        return 'Software Solutions';
      case 'support':
        return 'Tech Support';
      case 'community':
        return 'Community Projects';
      default:
        return category;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            selectedCategory === category
              ? "bg-primary text-white"
              : "bg-background-secondary text-foreground hover:bg-border"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {getCategoryLabel(category)}
        </button>
      ))}
    </div>
  );
}