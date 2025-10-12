import Link from "next/link";

export interface SecondaryButtonProps {
  /**
   * Button text
   */
  children: React.ReactNode;
  
  /**
   * URL to navigate to (renders as Link)
   */
  href?: string;
  
  /**
   * Click handler (renders as button)
   */
  onClick?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Icon to display after text
   */
  icon?: React.ReactNode;
  
  /**
   * Accessibility label
   */
  'aria-label'?: string;
  
  /**
   * Visual style variant
   */
  variant?: 'outline' | 'outline-white';
  
  /**
   * Button type (only used when onClick is provided)
   */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Secondary/outline button with consistent styling
 * 
 * Features:
 * - Outline style with fill on hover
 * - Scale transform on hover
 * - Multiple color variants (primary outline, white outline)
 * - Optional icon support
 * - Renders as Link or button element based on props
 */
export default function SecondaryButton({ 
  children, 
  href,
  onClick,
  className = '',
  icon,
  'aria-label': ariaLabel,
  variant = 'outline',
  type = 'button'
}: SecondaryButtonProps) {
  const baseClasses = "group inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    'outline-white': "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary focus:ring-white focus:ring-offset-primary"
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={allClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={allClasses} 
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
