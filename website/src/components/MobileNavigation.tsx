"use client";

import { useState, useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Link from "next/link";
import { LogoImage } from "@/components/OptimizedImage";
import { trapFocus, announceToScreenReader } from "@/lib/focus-management";

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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
        announceToScreenReader("Mobile menu closed", "polite");
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (isOpen && menuRef.current) {
      trapFocus(menuRef.current, event.nativeEvent);
    }
  };

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    announceToScreenReader(newState ? "Mobile menu opened" : "Mobile menu closed", "polite");
  };

  const closeMenu = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
    announceToScreenReader("Mobile menu closed", "polite");
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleMenu}
        className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background shadow-soft transition-colors duration-200 hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-foreground"
        aria-label={`${isOpen ? "Close" : "Open"} mobile menu`}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-haspopup="true"
      >
        <div className="relative h-6 w-6">
          <span
            className={`absolute block h-0.5 w-6 transform bg-current transition-all duration-300 ${
              isOpen ? "top-3 rotate-45" : "top-1"
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 transform bg-current transition-all duration-300 ${
              isOpen ? "top-3 opacity-0" : "top-3 opacity-100"
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 transform bg-current transition-all duration-300 ${
              isOpen ? "top-3 -rotate-45" : "top-5"
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" onClick={closeMenu} />

          <div
            ref={menuRef}
            id="mobile-menu"
            className="relative flex h-full w-full max-w-[22rem] translate-x-0 flex-col bg-background dark:bg-background-secondary border-l border-border shadow-2xl transition-transform duration-300 ease-out"
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div className="flex items-center gap-3">
                <LogoImage className="h-8 w-8" priority={false} />
                <h2 id="mobile-menu-title" className="text-lg font-bold text-foreground">
                  Three Rivers Tech
                </h2>
              </div>
              <button
                onClick={closeMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background-secondary text-foreground-secondary transition-colors duration-200 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Close mobile menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-6" role="navigation" aria-label="Mobile navigation">
              <ul className="space-y-2" role="list">
                {navigationItems.map((item, index) => (
                  <li key={item.href} role="listitem">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex flex-col justify-center rounded-xl border border-transparent bg-background-secondary/40 px-4 py-4 transition-all duration-200 hover:border-primary/30 hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-describedby={item.description ? `nav-desc-${index}` : undefined}
                    >
                      <span className="text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                        {item.label}
                      </span>
                      {item.description && (
                        <span id={`nav-desc-${index}`} className="mt-1 text-sm text-foreground-secondary">
                          {item.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-border px-6 py-6">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-secondary">
                    Contact us
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:Shop Number Coming Soon!"
                      className="flex items-center gap-3 rounded-xl border border-border bg-background-secondary/60 px-4 py-3 transition-colors duration-200 hover:border-primary/30 hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-foreground">(412) 403-5559</div>
                        <div className="text-sm text-foreground-secondary">Call for free consultation</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 rounded-xl border border-border bg-background-secondary/60 px-4 py-3">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-foreground">124 Grant Street</div>
                        <div className="text-sm text-foreground-secondary">Turtle Creek, PA 15145</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-center text-base font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
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
