import Link from "next/link";
import { LogoImage } from "@/components/OptimizedImage";

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
            <Link
              href="/services"
              className="relative px-4 py-2 text-foreground hover:text-primary-dark transition-colors text-base font-medium rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 nav-link bg-transparent hover:bg-background-secondary border border-transparent hover:border-border"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/portfolio"
              className="relative px-4 py-2 text-foreground hover:text-primary-dark transition-colors text-base font-medium rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 nav-link bg-transparent hover:bg-background-secondary border border-transparent hover:border-border"
            >
              <span className="relative z-10">Portfolio</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/community-involvement"
              className="relative px-4 py-2 text-foreground hover:text-primary-dark transition-colors text-base font-medium rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 nav-link bg-transparent hover:bg-background-secondary border border-transparent hover:border-border"
            >
              <span className="relative z-10">Community</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/about"
              className="relative px-4 py-2 text-foreground hover:text-primary-dark transition-colors text-base font-medium rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 nav-link bg-transparent hover:bg-background-secondary border border-transparent hover:border-border"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:from-primary-hover hover:to-primary dark:hover:from-primary dark:hover:to-primary-hover shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[44px] text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span className="relative z-10">Contact</span>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 rounded-xl"></div>
          </Link>

          {/* Mobile Menu Button (for future implementation) */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Open mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
