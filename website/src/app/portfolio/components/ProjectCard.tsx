import Link from "next/link";
import { PortfolioImage } from "@/components/OptimizedImage";

export default function ProjectCard({
  title,
  description,
  category,
  id,
  outcome,
  technologies,
  timeline,
  clientSize,
}: {
  title: string;
  description: string;
  category: string;
  id?: string;
  outcome?: string;
  technologies?: string[];
  timeline?: string;
  clientSize?: string;
}) {
  // Map categories to portfolio image types
  const categoryImageMap: Record<
    string,
    "banking" | "cloud" | "ecommerce" | "network" | "repair" | "saas"
  > = {
    "Enterprise Software Solutions": "ecommerce",
    "IT Infrastructure & Support": "network", 
    "SaaS Solutions & Integration": "saas",
    "Hardware Support & Maintenance": "repair",
    // Legacy mappings for backward compatibility
    "Software Development": "ecommerce",
    "IT Consulting": "network",
    "SaaS Products": "saas",
    "Computer Repair": "repair",
  };

  const imageCategory = categoryImageMap[category] || "ecommerce";

  return (
    <div className="bg-background-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-border">
      <PortfolioImage
        category={imageCategory}
        size="card"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full">
            {category}
          </span>
          {timeline && (
            <span className="text-sm text-foreground-secondary">
              {timeline}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground-secondary mb-4">{description}</p>
        
        {outcome && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm font-medium text-green-800">Key Result:</p>
            <p className="text-sm text-green-700">{outcome}</p>
          </div>
        )}
        
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-2">Technologies:</p>
            <div className="flex flex-wrap gap-1">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-background border border-border rounded text-foreground-secondary"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2 py-1 text-xs text-foreground-secondary">
                  +{technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        {clientSize && (
          <p className="text-sm text-foreground-secondary mb-4">
            Client: {clientSize}
          </p>
        )}
        
        {id ? (
          <Link
            href={`/portfolio/${id}`}
            className="text-primary hover:text-primary-hover font-medium flex items-center"
          >
            View Case Study
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ) : (
          <button
            type="button"
            className="text-primary hover:text-primary-hover font-medium flex items-center"
          >
            View Case Study
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
