"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import ProjectCard from "@/app/portfolio/components/ProjectCard";

// Static data for portfolio items (in a real implementation, this would come from an API or database)
const portfolioData = [
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

type PortfolioItem = typeof portfolioData[number];

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    if (query) {
      const filteredResults = portfolioData.filter(
        (item: PortfolioItem) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Search Results for &ldquo;{query}&rdquo;
      </h1>

      {results.length > 0 ? (
        <div>
          <p className="text-foreground-secondary mb-8">
            Found {results.length} result{results.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((item) => (
              <ProjectCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-foreground-secondary text-xl">
            No results found for &ldquo;{query}&rdquo;
          </p>
          <p className="text-foreground-secondary mt-4">
            Try adjusting your search terms
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SearchResultsPage",
            "name": "Search Results - Three Rivers Tech",
            "description": "Search results for technology solutions, projects, and services from Three Rivers Tech.",
            "url": "https://threeriverstech.com/search",
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
                  "name": "Search",
                  "item": "https://threeriverstech.com/search"
                }
              ]
            }
          })
        }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchContent />
      </Suspense>
    </>
  );
}
