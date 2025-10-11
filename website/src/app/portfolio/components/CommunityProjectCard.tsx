import Link from "next/link";

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

interface CommunityProjectCardProps {
  project: CommunityProject;
}

export default function CommunityProjectCard({ project }: CommunityProjectCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'website':
        return 'bg-blue-100 text-blue-800';
      case 'software':
        return 'bg-green-100 text-green-800';
      case 'support':
        return 'bg-orange-100 text-orange-800';
      case 'community':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'website':
        return 'Website';
      case 'software':
        return 'Software';
      case 'support':
        return 'Support';
      case 'community':
        return 'Community';
      default:
        return 'Project';
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
          <span className="text-gray-500 text-sm">Project Screenshot</span>
        </div>
      </div>
      
      <div className="p-6">
        {/* Header with title and badges */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <div className="flex flex-col items-end gap-1">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {project.year}
            </span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCategoryColor(project.category)}`}>
              {getCategoryLabel(project.category)}
            </span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-foreground-secondary mb-4">{project.description}</p>
        
        {/* Outcome highlight */}
        {project.outcome && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm font-medium text-green-800 mb-1">Key Result:</p>
            <p className="text-sm text-green-700">{project.outcome}</p>
          </div>
        )}
        
        {/* Client and location info */}
        <div className="mb-4">
          <div className="flex items-center text-sm text-foreground-secondary mb-1">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {project.location}
          </div>
          <div className="text-sm font-medium text-foreground">{project.client}</div>
        </div>
        
        {/* Services tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.services.map((service, index) => (
            <span 
              key={index} 
              className="bg-background-secondary text-foreground text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {service}
            </span>
          ))}
        </div>

        {/* View details link */}
        <Link
          href={`/portfolio/${project.id}`}
          className="text-primary hover:text-primary-hover font-medium flex items-center text-sm transition-colors"
        >
          View Project Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}