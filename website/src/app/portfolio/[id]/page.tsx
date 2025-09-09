export default function CaseStudyPage({ params }: { params: { id: string } }) {
  // In a real implementation, you would fetch the case study data based on the ID
 // For now, we'll use static data
 const caseStudy = {
    id: params.id,
    title: "Sample Case Study",
    description: "Detailed case study of a project",
    category: "Software Development",
    challenges: "Description of challenges faced",
    solutions: "Description of solutions implemented",
    results: "Description of results achieved",
    technologies: ["React", "Node.js", "MongoDB"],
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mb-8">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-primary hover:text-primary-hover"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </button>
      </div>

      <div className="bg-background-secondary rounded-lg p-8 border border-border">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">{caseStudy.title}</h1>
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full">
            {caseStudy.category}
          </span>
        </div>

        <div className="bg-gray-200 border-2 border-dashed w-full h-64 mb-8 rounded-lg" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
            <p className="text-foreground-secondary">{caseStudy.challenges}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
            <p className="text-foreground-secondary">{caseStudy.solutions}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <p className="text-foreground-secondary">{caseStudy.results}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-background text-foreground border border-border rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
