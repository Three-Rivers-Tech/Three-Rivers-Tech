import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata, Viewport } from 'next';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import StructuredData from "@/components/StructuredData";
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/structured-data";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Base domain for absolute URLs (update if production domain differs)
const siteUrl = 'https://www.three-rivers-tech.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Three Rivers Tech — Honest Local IT & Web Services',
    template: '%s | Three Rivers Tech'
  },
  description: 'Straightforward, community-focused technology services: web design, IT support, repairs, and custom software for small business & neighbors.',
  applicationName: 'Three Rivers Tech',
  keywords: [
    'IT support','web design','software development','computer repair','Mon Valley','small business tech'
  ],
  authors: [{ name: 'Three Rivers Tech' }],
  creator: 'Three Rivers Tech',
  publisher: 'Three Rivers Tech',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Three Rivers Tech',
    title: 'Three Rivers Tech — Honest Local IT & Web Services',
    description: 'Straightforward, community-focused technology services built for trust and clarity.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Three Rivers Tech — Honest Local IT & Web Services',
    description: 'Straightforward, community-focused technology services built for trust and clarity.'
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  }
};

// Explicit viewport export for tests and performance expectations
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5,
  viewportFit: 'cover'
};

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
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
        <StructuredData data={[generateOrganizationSchema(), generateLocalBusinessSchema(), generateWebSiteSchema()]} />
      </body>
    </html>
  );
}