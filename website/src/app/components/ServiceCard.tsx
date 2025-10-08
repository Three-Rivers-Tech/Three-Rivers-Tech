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
    <article className="service-card bg-background dark:bg-background-secondary p-5 sm:p-6 lg:p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border dark:border-border hover:transform hover:-translate-y-2 h-full flex flex-col">
      <div className="mb-4 sm:mb-5 flex justify-center sm:justify-start" aria-hidden="true">
        <Icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary" aria-hidden={true} />
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-center sm:text-left leading-tight">{title}</h3>
      <p className="text-foreground-secondary mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-center sm:text-left flex-grow">{description}</p>
      {link ? (
        <a 
          href={link} 
          className="text-primary hover:text-primary-hover font-medium flex items-center justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-3 -m-3 transition-colors min-h-[48px] text-base sm:text-lg"
          aria-label={`Learn more about ${title} service`}
        >
          Learn more
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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
          className="text-primary hover:text-primary-hover font-medium flex items-center justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-3 -m-3 transition-colors min-h-[48px] text-base sm:text-lg"
          aria-label={`Learn more about ${title} service`}
        >
          Learn more
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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
    </article>
  );
}
