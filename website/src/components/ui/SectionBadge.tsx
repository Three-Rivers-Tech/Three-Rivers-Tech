export interface SectionBadgeProps {
  /**
   * Text content of the badge
   */
  text: string;
  
  /**
   * Color variant of the badge
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  
  /**
   * Size of the badge
   */
  size?: 'sm' | 'md';
  
  /**
   * Whether to show the indicator dot
   */
  showDot?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Custom icon to display instead of dot
   */
  icon?: React.ReactNode;
}

/** SectionBadge – compact badge for UI sections. */
export default function SectionBadge({
  text,
  variant = 'primary',
  size = 'md',
  showDot = true,
  className = '',
  icon
}: SectionBadgeProps) {
  
  // ...existing code...
  const baseClasses = [
    'inline-flex',
    'items-center',
    'rounded-full',
    'font-medium',
    'animate-fade-in'
  ];

  // Size-specific classes
  const sizeClasses = {
    sm: [
      'px-3',
      'py-1',
      'text-xs'
    ],
    md: [
      'px-4',
      'py-2',
      'text-sm'
    ]
  };

  // Variant-specific classes
  const variantClasses = {
    primary: [
      'bg-primary/10',
      'border',
      'border-primary/20',
      'text-primary'
    ],
    secondary: [
      'bg-secondary/10',
      'border',
      'border-secondary/20',
      'text-secondary'
    ],
    success: [
      'bg-green-50',
      'border',
      'border-green-200',
      'text-green-700'
    ],
    warning: [
      'bg-yellow-50',
      'border',
      'border-yellow-200',
      'text-yellow-700'
    ]
  };

  // Dot color classes
  const dotClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500'
  };

  // Combine all classes
  const allClasses = [
    ...baseClasses,
    ...sizeClasses[size],
    ...variantClasses[variant],
    className
  ].join(' ');

  return (
    <div className={allClasses}>
      {icon ? (
        <span className="mr-2" aria-hidden="true">
          {icon}
        </span>
      ) : showDot ? (
        <span 
          className={`w-2 h-2 ${dotClasses[variant]} rounded-full mr-2`}
          aria-hidden="true"
        />
      ) : null}
      <span>{text}</span>
    </div>
  );
}