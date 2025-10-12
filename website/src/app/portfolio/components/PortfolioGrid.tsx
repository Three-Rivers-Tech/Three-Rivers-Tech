import ProjectCard from "./ProjectCard";

type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  technologies?: string[];
  timeline?: string;
  clientSize?: string;
};

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <ProjectCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          category={item.category}
          outcome={item.outcome}
          technologies={item.technologies}
          timeline={item.timeline}
          clientSize={item.clientSize}
        />
      ))}
    </div>
  );
}
