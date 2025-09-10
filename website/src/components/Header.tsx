"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Search from "@/app/components/Search";
import { HiSun, HiMoon } from "react-icons/hi";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

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
              <HiSun className="h-5 w-5" />
            ) : (
              // Moon icon for dark mode
              <HiMoon className="h-5 w-5" />
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
              <HiSun className="h-5 w-5" />
            ) : (
              // Moon icon for dark mode
              <HiMoon className="h-5 w-5" />
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
