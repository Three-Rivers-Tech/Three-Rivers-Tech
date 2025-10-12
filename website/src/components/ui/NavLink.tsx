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
 * Uses pure Tailwind classes for modern styling
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
      className={`px-4 py-2.5 text-foreground font-medium rounded-lg transition-colors duration-200 hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 no-underline ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
