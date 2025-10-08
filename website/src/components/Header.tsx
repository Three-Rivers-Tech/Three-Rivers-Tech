import Link from "next/link";
import { LogoImage } from "@/components/OptimizedImage";

export default function Header() {

  return (
    <header className="bg-background-secondary border-b border-border py-3 sm:py-4 px-4 sm:px-6 relative" role="banner">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link 
          href="/" 
          className="flex items-center text-xl sm:text-2xl font-bold text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
          aria-label="Three Rivers Tech - Go to homepage"
        >
          <LogoImage className="h-8 w-8 mr-2" priority={true} />
          <span className="hidden sm:inline">Three Rivers Tech</span>
          <span className="sm:hidden">TRT</span>
        </Link>

        {/* Simple Navigation */}
        <nav className="flex items-center gap-2 sm:gap-4" role="navigation" aria-label="Main navigation">
          <Link
            href="/services"
            className="hidden md:block px-3 py-2 text-foreground-secondary hover:text-foreground transition-colors text-base font-medium"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="hidden md:block px-3 py-2 text-foreground-secondary hover:text-foreground transition-colors text-base font-medium"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="hidden md:block px-3 py-2 text-foreground-secondary hover:text-foreground transition-colors text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors text-base font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
