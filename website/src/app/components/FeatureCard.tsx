export default function FeatureCard({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="bg-background-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border text-center">
      <div className="mb-4 flex justify-center">
        <Icon className="w-12 h-12 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground-secondary">{description}</p>
    </div>
  );
}
