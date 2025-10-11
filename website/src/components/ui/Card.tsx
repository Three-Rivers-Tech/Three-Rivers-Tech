export interface CardProps {
  /**
   * Visual style variant of the card
   * - default: Standard card with border
   * - elevated: Card with soft shadow (most common)
   * - bordered: Card with 2px border
   * - glass: Semi-transparent with backdrop blur
   */
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
  
  /**
   * Padding size inside the card
   * Standard: lg (mobile: 1.5rem, desktop: 2rem)
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Card content
   */
  children: React.ReactNode;
  
  /**
   * Whether the card should have hover effects
   * Adds shadow, border color change, and lift animation
   */
  hoverable?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Click handler for interactive cards
   */
  onClick?: () => void;
  
  /**
   * Whether the card is clickable (affects cursor and accessibility)
   */
  clickable?: boolean;
  
  /**
   * Accessibility role
   */
  role?: string;
  
  /**
   * Accessibility label
   */
  'aria-label'?: string;
}

/**
 * Card – Standardized container component
 * 
 * Design Standards:
 * - Border radius: rounded-2xl (1.5rem) - ALWAYS
 * - Default padding: p-6 mobile, p-8 desktop
 * - Border: 1px solid with 50% opacity
 * - Hover: Lifts 4px with shadow-large
 * - Transition: 300ms cubic-bezier(0.4, 0, 0.2, 1)
 * 
 * @example
 * ```tsx
 * <Card variant="elevated" padding="lg" hoverable>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 * ```
 */
export default function Card({
  variant = 'elevated',
  padding = 'lg',
  children,
  hoverable = false,
  className = '',
  onClick,
  clickable = false,
  role,
  'aria-label': ariaLabel,
  ...props
}: CardProps) {
  
  // Base classes - STANDARDIZED to rounded-2xl
  const baseClasses = [
    'group',
    'relative',
    'rounded-2xl', // STANDARD: Always 1.5rem border radius
    'transition-all',
    'duration-300'
  ];

  // Padding classes - STANDARDIZED
  const paddingClasses = {
    none: [],
    sm: ['p-4'],
    md: ['p-6'],
    lg: ['p-6', 'sm:p-8'], // STANDARD: Most cards use this
    xl: ['p-6', 'sm:p-8', 'lg:p-10']
  };

  // Variant-specific classes - STANDARDIZED with dark mode support
  const variantClasses = {
    default: [
      'bg-background',
      'dark:bg-background-secondary',
      'border',
      'border-border/50',
      'dark:border-border'
    ],
    elevated: [
      'bg-background',
      'dark:bg-background-secondary',
      'shadow-soft',
      'border',
      'border-border/50',
      'dark:border-border'
    ],
    bordered: [
      'bg-background',
      'dark:bg-background-secondary',
      'border-2',
      'border-border',
      'dark:border-border'
    ],
    glass: [
      'bg-white/10',
      'dark:bg-black/20',
      'backdrop-blur-md',
      'border',
      'border-white/20',
      'dark:border-white/10'
    ]
  };

  // Hover effect classes - STANDARDIZED
  const hoverClasses = hoverable || clickable ? [
    'hover:shadow-large',
    'hover:border-primary/20',
    'dark:hover:border-primary/30',
    'hover:-translate-y-1', // STANDARD: 4px lift
    'cursor-pointer'
  ] : [];

  // Clickable classes
  const clickableClasses = clickable ? [
    'cursor-pointer',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-primary',
    'focus:ring-offset-2'
  ] : [];

  // Combine all classes
  const allClasses = [
    ...baseClasses,
    ...paddingClasses[padding],
    ...variantClasses[variant],
    ...hoverClasses,
    ...clickableClasses,
    className
  ].join(' ');

  // Determine the element type
  const Element = clickable ? 'button' : 'div';

  return (
    <Element
      className={allClasses}
      onClick={clickable ? onClick : undefined}
      role={role}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Element>
  );
}

/**
 * Card header component for consistent card titles and actions
 */
export interface CardHeaderProps {
  /**
   * Header title
   */
  title: string;
  
  /**
   * Optional subtitle
   */
  subtitle?: string;
  
  /**
   * Action element (button, link, etc.)
   */
  action?: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export function CardHeader({ 
  title, 
  subtitle, 
  action, 
  className = '' 
}: CardHeaderProps) {
  return (
    <div className={`flex items-start justify-between mb-4 ${className}`}>
      <div>
        <h3 className="text-xl font-bold text-foreground mb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-foreground-secondary">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <div className="ml-4 flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}

/**
 * Card content component for consistent spacing
 */
export interface CardContentProps {
  /**
   * Content
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`text-foreground-secondary leading-relaxed ${className}`}>
      {children}
    </div>
  );
}

/**
 * Card footer component for actions and metadata
 */
export interface CardFooterProps {
  /**
   * Footer content
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-6 pt-4 border-t border-border ${className}`}>
      {children}
    </div>
  );
}