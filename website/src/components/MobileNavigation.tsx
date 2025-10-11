"use client";

import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { LogoImage } from "@/components/OptimizedImage";
import { trapFocus, announceToScreenReader } from '@/lib/focus-management';

interface NavigationItem {
  href: string;
  label: string;
  description?: string;
}

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home", description: "Return to homepage" },
  { href: "/services", label: "Services", description: "View our tech services" },
  { href: "/portfolio", label: "Portfolio", description: "See our completed projects" },
  { href: "/community-involvement", label: "Community", description: "Our local involvement" },
  { href: "/about", label: "About", description: "Learn about our team" },
  { href: "/contact", label: "Contact", description: "Get in touch with us" },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle escape key and outside clicks
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
        announceToScreenReader('Mobile menu closed', 'polite');
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle focus trapping
  const handleKeyDown = (event: KeyboardEvent) => {
    if (isOpen && menuRef.current) {
      trapFocus(menuRef.current, event);
    }
  };

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    announceToScreenReader(
      newState ? 'Mobile menu opened' : 'Mobile menu closed',
      'polite'
    );
  };

  const closeMenu = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
    announceToScreenReader('Mobile menu closed', 'polite');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleMenu}
        className="md:hidden p-3 text-foreground hover:text-primary transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
        aria-label={`${isOpen ? 'Close' : 'Open'} mobile menu`}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-haspopup="true"
      >
        {/* Hamburger/Close Icon */}
        <div className="relative w-6 h-6">
          <span
            className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? 'rotate-45 top-3' : 'top-1'
            }`}
          />
          <span
            className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? '-rotate-45 top-3' : 'top-5'
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div
            ref={menuRef}
            id="mobile-menu"
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background dark:bg-background-secondary border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out"
            onKeyDown={handleKeyDown as any}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <LogoImage className="h-8 w-8" priority={false} />
                <h2 id="mobile-menu-title" className="text-lg font-bold text-foreground">
                  Three Rivers Tech
                </h2>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 text-foreground-secondary hover:text-foreground transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6" role="navigation" aria-label="Mobile navigation">
              <ul className="space-y-2" role="list">
                {navigationItems.map((item, index) => (
                  <li key={item.href} role="listitem">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex flex-col p-4 rounded-xl hover:bg-background-secondary focus:bg-background-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[56px] justify-center"
                      aria-describedby={item.description ? `nav-desc-${index}` : undefined}
                    >
                      <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                      {item.description && (
                        <span
                          id={`nav-desc-${index}`}
                          className="text-sm text-foreground-secondary mt-1"
                        >
                          {item.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Information */}
            <div className="p-6 border-t border-border mt-auto">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground-secondary uppercase tracking-wide mb-2">
                    Contact Us
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+14124035559"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-background-secondary focus:bg-background-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[48px]"
                    >
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="text-foreground font-medium">(412) 403-5559</div>
                        <div className="text-sm text-foreground-secondary">Call for free consultation</div>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-3 p-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="text-foreground font-medium">124 Grant Street</div>
                        <div className="text-sm text-foreground-secondary">Turtle Creek, PA 15145</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-primary text-white text-center font-semibold py-4 px-6 rounded-xl hover:bg-primary-hover focus:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary min-h-[52px] flex items-center justify-center"
                >
                  Book Your Home Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}