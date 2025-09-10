export default function ServiceCard({
  title,
  description,
  icon: Icon,
  link
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
 link?: string;
}) {
  return (
    <div className="service-card bg-background dark:bg-background-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border dark:border-border">
      <div className="mb-4">
        <Icon className="w-12 h-12 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground-secondary mb-4">{description}</p>
      {link ? (
        <a href={link} className="text-primary hover:text-primary-hover font-medium flex items-center">
          Learn more
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
        </a>
      ) : (
        <button className="text-primary hover:text-primary-hover font-medium flex items-center">
          Learn more
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
  );
}
