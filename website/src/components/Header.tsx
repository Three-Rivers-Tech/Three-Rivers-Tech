"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { LogoImage } from "@/components/OptimizedImage";
import Search from "@/app/components/Search";
import { HiSun, HiMoon, HiMenu } from "react-icons/hi";

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
    <header className="bg-background-secondary border-b border-border py-4 px-6 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-2xl font-bold text-primary">
          <LogoImage className="h-8 w-8 mr-2" priority={true} />
          Three Rivers Tech
        </Link>

        {/* Navigation Controls */}
        <div className="flex items-center">
          <Search />
          <button
            onClick={toggleDarkMode}
            className="p-3 ml-2 rounded-full bg-background-secondary text-foreground hover:bg-border transition-colors shadow-md border border-border"
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
            className="p-3 ml-2 rounded-md bg-background-secondary text-foreground hover:bg-border transition-colors shadow-md border border-border"
            aria-label="Toggle mobile menu"
          >
            {/* Hamburger Icon */}
            <HiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-full right-6 mt-2 w-64 bg-background border border-border rounded-lg shadow-xl z-50 opacity-100"
        >
          <nav className="py-1">
            <ul>
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block px-4 py-2 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/software-development"
                  className="block px-4 py-2 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="block px-4 py-2 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="block px-4 py-2 text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Search
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
