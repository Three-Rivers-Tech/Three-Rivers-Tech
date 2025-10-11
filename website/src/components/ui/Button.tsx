import Link from "next/link";
import { forwardRef } from "react";

export interface ButtonProps {
  /**
   * Visual style variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  
  /**
   * Size of the button
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Button content
   */
  children: React.ReactNode;
  
  /**
   * If provided, renders as Link component
   */
  href?: string;
  
  /**
   * Click handler for button element
   */
  onClick?: () => void;
  
  /**
   * Whether button is disabled
   */
  disabled?: boolean;
  
  /**
   * Button type for form submission
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Accessibility label
   */
  'aria-label'?: string;
  
  /**
   * Whether to show loading state
   */
  loading?: boolean;
  
  /**
   * Icon to display before text
   */
  icon?: React.ReactNode;
  
  /**
   * Icon to display after text
   */
  iconAfter?: React.ReactNode;
}

/** Button – styled, accessible button or link. */
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    children,
    href,
    onClick,
    disabled = false,
    type = 'button',
    className = '',
    'aria-label': ariaLabel,
    loading = false,
    icon,
    iconAfter,
    ...props
  }, ref) => {
    
    // Base classes that apply to all buttons
    const baseClasses = [
      'inline-flex',
      'items-center',
      'justify-center',
      'font-semibold',
      'transition-all',
      'duration-300',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'disabled:transform-none'
    ];

    // Size-specific classes
    const sizeClasses = {
      sm: [
        'px-4',
        'py-2',
        'text-sm',
        'rounded-lg',
        'min-h-[36px]'
      ],
      md: [
        'px-6',
        'py-3',
        'text-base',
        'rounded-xl',
        'min-h-[48px]'
      ],
      lg: [
        'px-8',
        'py-4',
        'text-lg',
        'rounded-xl',
        'min-h-[52px]'
      ]
    };

    // Variant-specific classes
    const variantClasses = {
      primary: [
        'bg-primary',
        'text-white',
        'border-2',
        'border-primary',
        'hover:bg-primary-hover',
        'hover:border-primary-hover',
        'hover:shadow-glow',
        'hover:scale-105',
        'focus:ring-primary'
      ],
      secondary: [
        'bg-secondary',
        'text-white',
        'border-2',
        'border-secondary',
        'hover:bg-secondary-hover',
        'hover:border-secondary-hover',
        'hover:shadow-lg',
        'hover:scale-105',
        'focus:ring-secondary'
      ],
      outline: [
        'bg-transparent',
        'text-primary',
        'border-2',
        'border-primary',
        'hover:bg-primary',
        'hover:text-white',
        'hover:shadow-lg',
        'hover:scale-105',
        'focus:ring-primary'
      ],
      ghost: [
        'bg-transparent',
        'text-foreground',
        'border-2',
        'border-transparent',
        'hover:bg-background-secondary',
        'hover:border-border',
        'focus:ring-primary'
      ]
    };

    // Combine all classes
    const allClasses = [
      ...baseClasses,
      ...sizeClasses[size],
      ...variantClasses[variant],
      className
    ].join(' ');

    // Content with icons and loading state
    const content = (
      <>
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && icon && (
          <span className="mr-2" aria-hidden="true">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {!loading && iconAfter && (
          <span className="ml-2" aria-hidden="true">
            {iconAfter}
          </span>
        )}
      </>
    );

    // Render as Link if href is provided
    if (href) {
      return (
        <Link
          href={href}
          className={allClasses}
          aria-label={ariaLabel}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...props}
        >
          {content}
        </Link>
      );
    }

    // Render as button element
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={allClasses}
        aria-label={ariaLabel}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;