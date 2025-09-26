import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  category,
  id
}: {
  title: string;
  description: string;
  category: string;
  id?: string;
}) {
  // Map categories to image filenames
  const categoryImages: Record<string, string> = {
    "Software Development": "portfolio-ecommerce.jpg",
    "IT Consulting": "portfolio-network.jpg",
    "SaaS Products": "portfolio-saas.jpg",
    "Computer Repair": "portfolio-repair.jpg"
  };

  // Map categories to alt text
  const categoryAltText: Record<string, string> = {
    "Software Development": "E-commerce platform development project",
    "IT Consulting": "Network infrastructure consulting project",
    "SaaS Products": "SaaS product development project",
    "Computer Repair": "Computer repair and data recovery project"
  };

  const imageSrc = categoryImages[category] || "portfolio-ecommerce.jpg";
  const altText = categoryAltText[category] || `${category} project`;

  return (
    <div className="bg-background-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-border">
      <Image
        src={`/${imageSrc}`}
        alt={altText}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground-secondary mb-4">{description}</p>
        {id ? (
          <Link href={`/portfolio/${id}`} className="text-primary hover:text-primary-hover font-medium flex items-center">
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
          <button className="text-primary hover:text-primary-hover font-medium flex items-center">
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
