import Link from "next/link";

export interface PrimaryButtonProps {
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
   * Whether button should use gradient background
   */
  gradient?: boolean;
  
  /**
   * Button type (only used when onClick is provided)
   */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Primary CTA button with consistent styling across the site
 * 
 * Features:
 * - Gradient or solid background options
 * - Shine effect on hover
 * - Scale transform on hover
 * - Shadow effects
 * - Optional icon support
 * - Renders as Link or button element based on props
 */
export default function PrimaryButton({ 
  children, 
  href,
  onClick,
  className = '',
  icon,
  'aria-label': ariaLabel,
  gradient = true,
  type = 'button'
}: PrimaryButtonProps) {
  const baseClasses = "group relative inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[48px] text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  
  const backgroundClasses = gradient
    ? "bg-gradient-to-r from-primary to-primary-dark hover:from-primary-hover hover:to-primary dark:hover:from-primary dark:hover:to-primary-hover"
    : "bg-primary hover:bg-primary-hover";
  
  const allClasses = `${baseClasses} ${backgroundClasses} ${className}`;
  
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <span className="ml-2 relative z-10" aria-hidden="true">
          {icon}
        </span>
      )}
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 rounded-xl"></div>
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
