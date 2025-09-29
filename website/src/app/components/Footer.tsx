import Link from "next/link";
import { LogoImage } from "@/components/OptimizedImage";

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border py-12 px-6">
      <div className="container mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* Using existing company logo from public folder */}
              <LogoImage 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity select-none"
                priority={false}
              />
              <h3 className="text-xl font-bold text-primary tracking-tight">Three Rivers Tech</h3>
            </div>
            <p className="text-foreground-secondary mb-4 max-w-md leading-relaxed">
              Comprehensive technology solutions for modern businesses.
            </p>
            <div className="flex space-x-4" aria-label="Social media links">
              {/* X (Twitter) icon */}
              <Link
                href="#"
                aria-label="X (Twitter)"
                className="group text-foreground-secondary hover:text-foreground transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true">
                  <path d="M17.53 3H21.5l-7.19 8.21L23 21h-7.5l-5.2-6.6L4.47 21H0.5l7.61-8.7L1 3h7.68l4.7 6 4.15-6zM16.3 19h2.13L7.82 5H5.56l10.74 14z" fill="currentColor"/>
                </svg>
              </Link>
              {/* Facebook icon */}
              <Link
                href="#"
                aria-label="Facebook"
                className="group text-foreground-secondary hover:text-foreground transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" fill="currentColor"/>
                </svg>
              </Link>
              {/* LinkedIn icon */}
              <Link
                href="#"
                aria-label="LinkedIn"
                className="group text-foreground-secondary hover:text-foreground transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.369 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07 0-1.143.926-2.07 2.07-2.07 1.143 0 2.07.927 2.07 2.07 0 1.144-.927 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.222 0z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
                  href="/portfolio"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Portfolio
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
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-foreground-secondary">
              <p className="mb-2">124 Grant Street</p>
              <p className="mb-2">Turtle Creek, PA 15145</p>
              <p className="mb-2">Phone: (412) 403-5559</p>
              <p className="mb-2">Email: info@threeriverstech.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-foreground-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} Three Rivers Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
