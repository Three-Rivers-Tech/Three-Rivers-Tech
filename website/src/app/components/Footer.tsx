import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">Three Rivers Tech</h3>
            <p className="text-foreground-secondary mb-4">
              Comprehensive technology solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              {/* Social media links would go here */}
              <Link href="#" className="text-foreground-secondary hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
              </Link>
              <Link href="#" className="text-foreground-secondary hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
              </Link>
              <Link href="#" className="text-foreground-secondary hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground-secondary hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground-secondary hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-foreground-secondary hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground-secondary hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground-secondary hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-foreground-secondary">
              <p className="mb-2">123 Tech Street</p>
              <p className="mb-2">Pittsburgh, PA 15222</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
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
