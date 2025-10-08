import Link from "next/link";
import { PortfolioImage } from "@/components/OptimizedImage";

export default function ProjectCard({
  title,
  description,
  category,
  id,
}: {
  title: string;
  description: string;
  category: string;
  id?: string;
}) {
  // Map categories to portfolio image types
  const categoryImageMap: Record<
    string,
    "banking" | "cloud" | "ecommerce" | "network" | "repair" | "saas"
  > = {
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
        <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground-secondary mb-4">{description}</p>
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
          <button type="button" className="text-primary hover:text-primary-hover font-medium flex items-center">
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
