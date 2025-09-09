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
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      >
        &#9733;
      </span>
    ));
  };

  return (
    <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-border">
      <div className="flex mb-4">
        {renderStars()}
      </div>
      <p className="text-foreground-secondary italic mb-6">&quot;{content}&quot;</p>
      <div className="flex items-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-foreground-secondary text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
