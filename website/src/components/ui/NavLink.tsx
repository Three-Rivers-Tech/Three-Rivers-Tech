import Link from "next/link";

export interface NavLinkProps {
  /**
   * URL to navigate to
   */
  href: string;
  
  /**
   * Link text
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Accessibility label (optional, defaults to children text)
   */
  'aria-label'?: string;
}

/**
 * Reusable navigation link component with consistent hover effects and accessibility
 * 
 * Features:
 * - Consistent styling across all navigation links
 * - Hover effects with background and border transitions
 * - Focus ring for keyboard navigation
 * - Responsive text sizing
 */
export default function NavLink({ 
  href, 
  children, 
  className = '',
  'aria-label': ariaLabel 
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-foreground hover:text-primary-dark transition-colors text-base font-medium rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 nav-link bg-transparent hover:bg-background-secondary border border-transparent hover:border-border ${className}`}
      aria-label={ariaLabel}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
}
