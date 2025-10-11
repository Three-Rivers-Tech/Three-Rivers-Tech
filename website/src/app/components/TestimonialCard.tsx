export default function TestimonialCard({
  name,
  role,
  content,
  rating
}: {
  name: string;
  role: string;
  content: string;
  rating: number;
}) {
  // Create star rating display
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`text-lg transition-colors duration-300 ${
          index < rating 
            ? "text-blue-400 group-hover:text-blue-300" 
            : "text-gray-300 dark:text-gray-600"
        }`}
        aria-hidden="true"
      >
        ★
      </span>
    ));
  };

  return (
    <article className="group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 hover:border-primary/20 p-6 sm:p-8 h-full flex flex-col">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"></div>
      
      <div className="relative flex flex-col h-full">
        {/* Star Rating */}
        <div className="flex items-center justify-center sm:justify-start mb-6 space-x-1" role="img" aria-label={`${rating} out of 5 stars`}>
          {renderStars()}
        </div>

        {/* Quote Content */}
        <div className="flex-grow mb-8">
          <blockquote className="text-foreground-secondary dark:text-foreground-tertiary text-base sm:text-lg leading-relaxed text-center sm:text-left">
            <span className="text-primary text-2xl font-serif leading-none">&ldquo;</span>
            {content}
            <span className="text-primary text-2xl font-serif leading-none">&rdquo;</span>
          </blockquote>
        </div>

        {/* Author Info */}
        <footer className="mt-auto">
          <div className="flex items-center justify-center sm:justify-start">
            {/* Avatar Placeholder */}
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                <span className="text-primary font-semibold text-lg sm:text-xl">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              {/* Glow effect for avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
            </div>
            
            <div className="ml-4 text-center sm:text-left">
              <h4 className="font-bold text-foreground text-base sm:text-lg group-hover:text-primary transition-colors duration-300">
                {name}
              </h4>
              <p className="text-foreground-secondary text-sm sm:text-base font-medium">
                {role}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
