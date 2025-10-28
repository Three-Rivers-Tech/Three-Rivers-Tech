import Link from "next/link";
import { LogoImage } from "@/components/OptimizedImage";
import MobileNavigation from "./MobileNavigation";
import { NavLink, PrimaryButton } from "@/components/ui";

/**
 * Main site header component with navigation and branding
 * 
 * Features:
 * - Sticky positioning for persistent access
 * - Responsive logo and navigation
 * - Mobile-friendly hamburger menu
 * - Prominent contact CTA button
 * - Hover effects and accessibility support
 * 
 * @returns JSX element containing the site header
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/50 py-4 px-4 sm:px-6 transition-all duration-300" role="banner">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link 
          href="/" 
          className="group flex items-center text-xl sm:text-2xl font-bold text-primary hover:text-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2 -m-2 transition-all duration-300 border border-transparent hover:border-primary/20"
          aria-label="Three Rivers Tech - Go to homepage"
        >
          <div className="relative">
            <LogoImage className="h-8 w-8 mr-3 group-hover:scale-110 transition-transform duration-300" priority={true} />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="hidden sm:inline text-foreground font-bold">
            Three Rivers Tech
          </span>
          <span className="sm:hidden text-foreground font-bold">
            TRT
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2" role="navigation" aria-label="Main navigation">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/community-involvement">Community</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* CTA Button (desktop) */}
          <PrimaryButton href="/contact" className="hidden sm:inline-flex min-h-[44px]">
            Contact
          </PrimaryButton>

          {/* Quick contact shortcut (mobile) */}
          <Link
            href="/contact"
            className="sm:hidden mr-1 inline-flex items-center justify-center rounded-lg border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:bg-background-secondary"
            aria-label="Contact Three Rivers Tech"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </Link>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </nav>
      </div>
    </header>
  );
}
