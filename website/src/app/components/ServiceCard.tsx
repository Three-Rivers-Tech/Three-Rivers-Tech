export default function ServiceCard({
  title,
  description,
  icon: Icon,
  link
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  link?: string;
}) {
  return (
    <article className="group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 dark:border-border hover:border-primary/20 dark:hover:border-primary/30 h-full flex flex-col overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
      
      <div className="relative p-6 sm:p-7 lg:p-8 flex flex-col h-full">
        {/* Icon Container */}
        <div className="mb-6 flex justify-center sm:justify-start" aria-hidden="true">
          <div className="relative">
            {/* Icon Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary group-hover:text-primary-hover transition-colors duration-300" aria-hidden={true} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center sm:text-left leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-foreground-secondary dark:text-foreground-tertiary mb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-center sm:text-left font-normal">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          {link ? (
            <a 
              href={link} 
              className="group/cta inline-flex items-center justify-center sm:justify-start text-primary hover:text-primary-hover font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-3 -m-3 transition-all duration-300 min-h-[48px] text-base sm:text-lg"
              aria-label={`Explore ${title} solutions`}
            >
              <span className="relative">
                Explore Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/cta:w-full transition-all duration-300"></span>
              </span>
              <svg
                className="w-5 h-5 ml-2 group-hover/cta:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                suppressHydrationWarning={true}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ) : (
            <button 
              type="button"
              className="group/cta inline-flex items-center justify-center sm:justify-start text-primary hover:text-primary-hover font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-3 -m-3 transition-all duration-300 min-h-[48px] text-base sm:text-lg"
              aria-label={`Explore ${title} solutions`}
            >
              <span className="relative">
                Explore Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/cta:w-full transition-all duration-300"></span>
              </span>
              <svg
                className="w-5 h-5 ml-2 group-hover/cta:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                suppressHydrationWarning={true}
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
    </article>
  );
}
