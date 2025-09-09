"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Search from "@/app/components/Search";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
 }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-background-secondary border-b border-border py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-2xl font-bold text-primary">
          <img src="/company_logo.png" alt="Three Rivers Tech Logo" className="h-8 w-8 mr-2" />
          Three Rivers Tech
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Search />
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-primary text-gray-400 hover:bg-primary-hover transition-colors shadow-lg border-2 border-gray-400"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
                <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
                <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
                <line x1="4.2" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              // Crescent moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
            {darkMode ? (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 0 018 0zm-.464 4.95l.707.707a1 1 0 01.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 0 00-1.414 1.414l.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 10.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Search />
          <button
            onClick={toggleDarkMode}
            className="p-3 ml-2 rounded-full bg-primary text-white hover:bg-primary-hover transition-colors shadow-lg border-2 border-white"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
                <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
                <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
                <line x1="4.2" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              // Crescent moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
            {darkMode ? (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 011 1v1a1 1 011-2 0V3a1 0 011-1zm4 8a4 4 0 11-8 0 4 0 018 0zm-.464 4.95l.707.707a1 1 0 01.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 0 00-1.414 1.414l.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 10.586 10.586z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-3 ml-2 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors shadow-lg border-2 border-white"
            aria-label="Toggle mobile menu"

          >
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full right-0 mt-2 w-full bg-background-secondary border border-border rounded-md shadow-lg z-50"
        >
          <nav className="py-2">
            <ul>
              <li>
                <Link
                  href="/"
                  className="block px-6 py-3 text-foreground-secondary hover:text-foreground hover:bg-border transition-colors"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block px-6 py-3 text-foreground-secondary hover:text-foreground hover:bg-border transition-colors"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-6 py-3 text-foreground-secondary hover:text-foreground hover:bg-border transition-colors"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-6 py-3 text-foreground-secondary hover:text-foreground hover:bg-border transition-colors"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
