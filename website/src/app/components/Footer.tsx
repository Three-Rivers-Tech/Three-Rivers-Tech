"use client";

import Link from "next/link";
import { LogoImage } from "@/components/OptimizedImage";
import { TwitterIcon, FacebookIcon, LinkedInIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <section className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-4 mb-6">
              {/* Logo and Company Name */}
              <div className="flex items-center gap-3">
                <LogoImage 
                  className="h-12 w-12 opacity-80 hover:opacity-100 transition-opacity select-none flex-shrink-0"
                  priority={false}
                />
                <h3 className="text-xl font-bold text-foreground tracking-tight">Three Rivers Tech</h3>
              </div>
            </div>
            <p className="text-base text-foreground-secondary mb-6 max-w-sm leading-relaxed mx-auto md:mx-0">
              Serving Turtle Creek and the Mon Valley since 2025.
            </p>
            <nav>
              <ul className="flex justify-center md:justify-start space-x-4">
                <li>
                  <Link
                    href="#"
                    className="group text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-2"
                    aria-label="Follow us on Twitter"
                  >
                    <TwitterIcon className="h-6 w-6" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="group text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-2"
                    aria-label="Follow us on Facebook"
                  >
                    <FacebookIcon className="h-6 w-6" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="group text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-2"
                    aria-label="Follow us on LinkedIn"
                  >
                    <LinkedInIcon className="h-6 w-6" />
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          {/* Quick Links */}
          <section className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 no-underline block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 no-underline block"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 no-underline block"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 no-underline block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 no-underline block"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community-involvement"
                    className="text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 no-underline block"
                  >
                    Community Involvement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learning-center"
                    className="text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 no-underline block"
                  >
                    Learning Center
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          {/* Contact Info */}
          <section className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6 text-foreground">Contact Us</h4>
            <address className="not-italic text-foreground-secondary text-base space-y-2">
              <p>124 Grant Street</p>
              <p>Turtle Creek, PA 15145</p>

              <p>
                <a 
                  href="mailto:info@threeriverstech.com" 
                  className="text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 no-underline block"
                >
                  Email: info@threeriverstech.com
                </a>
              </p>
            </address>
          </section>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-foreground-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} Three Rivers Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
