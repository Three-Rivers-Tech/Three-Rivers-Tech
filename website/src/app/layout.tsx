import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import StructuredData from "@/components/StructuredData";
import AccessibilityControls from "@/components/AccessibilityControls";
import AccessibilityInitializer from "@/components/AccessibilityInitializer";
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/structured-data";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/company_logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/company_logo.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/company_logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/company_logo.png" />
        <link rel="preload" href="/company_logo.webp" as="image" type="image/webp" />
        <link rel="preload" href="/company_logo.png" as="image" type="image/png" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">Skip to main content</a>
        <AccessibilityInitializer />
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
        <AccessibilityControls />
        <StructuredData data={[generateOrganizationSchema(), generateLocalBusinessSchema(), generateWebSiteSchema()]} />
      </body>
    </html>
  );
}