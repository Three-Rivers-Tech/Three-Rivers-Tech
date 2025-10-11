import Link from "next/link";
import { LogoImage } from "@/components/OptimizedImage";
import MobileNavigation from "./MobileNavigation";
import { NavLink, PrimaryButton } from "@/components/ui";

/**
 * Main site header component with navigation and branding
 * 
 * Features:
 * - Sticky positioning with backdrop blur
 * - Responsive logo and navigation
 * - Mobile-friendly hamburger menu
 * - Prominent contact CTA button
 * - Hover effects and accessibility support
 * 
 * @returns JSX element containing the site header
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 py-4 px-4 sm:px-6 transition-all duration-300" role="banner">
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

          {/* CTA Button */}
          <PrimaryButton href="/contact" className="min-h-[44px]">
            Contact
          </PrimaryButton>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </nav>
      </div>
    </header>
  );
}
