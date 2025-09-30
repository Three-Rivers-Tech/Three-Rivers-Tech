"use client";

import Link from "next/link";
import { useEffect, useState, useRef, Suspense } from "react";
import { LogoImage } from "@/components/OptimizedImage";
import { LazySearch, preloadSearch } from "@/lib/dynamic-imports";
import { HiSun, HiMoon, HiMenu } from "react-icons/hi";
import { trapFocus, handleMenuNavigation } from "@/lib/focus-management";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Check system preference and saved preference on initial load
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(systemPrefersDark);
    }
  }, []);

  // Apply dark mode class to document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        setCurrentMenuIndex(0);
        // Return focus to the menu button
        if (menuButtonRef.current) {
          menuButtonRef.current.focus();
        }
        return;
      }
      
      // Handle keyboard navigation in mobile menu
      if (mobileMenuOpen && mobileMenuRef.current) {
        const menuItems = Array.from(mobileMenuRef.current.querySelectorAll('a')) as HTMLElement[];
        if (menuItems.length > 0) {
          const currentIndex = Array.from(menuItems).findIndex(item => item === document.activeElement);
          const validIndex = currentIndex >= 0 ? currentIndex : currentMenuIndex;
          
          const newIndex = handleMenuNavigation(event, menuItems, validIndex, {
            orientation: 'vertical',
            loop: true,
            onSelect: (index) => {
              // Click the menu item
              menuItems[index]?.click();
            },
            onEscape: () => {
              setMobileMenuOpen(false);
              setCurrentMenuIndex(0);
              if (menuButtonRef.current) {
                menuButtonRef.current.focus();
              }
            }
          });
          
          if (newIndex !== validIndex) {
            setCurrentMenuIndex(newIndex);
          }
        }
        
        // Trap focus within the mobile menu
        if (event.key === 'Tab') {
          trapFocus(mobileMenuRef.current, event);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen, currentMenuIndex]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    setCurrentMenuIndex(0);
    
    // Focus first menu item when opening
    if (newState) {
      setTimeout(() => {
        const firstMenuItem = mobileMenuRef.current?.querySelector('a') as HTMLElement;
        if (firstMenuItem) {
          firstMenuItem.focus();
        }
      }, 0);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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

        {/* Navigation Controls */}
        <nav className="flex items-center gap-2 sm:gap-3" role="navigation" aria-label="Main navigation">
          <div 
            className="hidden md:block"
            onMouseEnter={preloadSearch}
            onFocus={preloadSearch}
          >
            <Suspense fallback={<div className="w-8 h-8 animate-pulse bg-border rounded" />}>
              <LazySearch />
            </Suspense>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-background-secondary text-foreground hover:bg-border transition-colors shadow-md border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={darkMode}
            type="button"
          >
            {darkMode ? (
              <HiSun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <HiMoon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            ref={menuButtonRef}
            onClick={toggleMobileMenu}
            className="p-3 rounded-md bg-background-secondary text-foreground hover:bg-border transition-colors shadow-md border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
            type="button"
          >
            <HiMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="absolute top-full right-4 sm:right-6 mt-2 w-80 sm:w-72 md:w-64 bg-background border border-border rounded-lg shadow-xl z-50 opacity-100"
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <div className="py-2">
            <ul>
              <li>
                <Link
                  href="/"
                  className="block px-4 py-3 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md mx-2"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block px-4 py-3 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md mx-2"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/software-development"
                  className="block px-4 py-3 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md mx-2"
                  onClick={closeMobileMenu}
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="block px-4 py-3 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md mx-2"
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-3 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md mx-2"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md mx-2"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="md:hidden border-t border-border mt-2 pt-2">
                <Link
                  href="/search"
                  className="block px-4 py-3 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md mx-2"
                  onClick={closeMobileMenu}
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
