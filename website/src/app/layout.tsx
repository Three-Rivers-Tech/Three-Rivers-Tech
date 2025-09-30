import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import StructuredData from "@/components/StructuredData";
import { LazyAccessibilityChecker } from "@/lib/dynamic-imports";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import CacheInitializer from "@/components/CacheInitializer";
import CoreWebVitalsMonitor from "@/components/CoreWebVitalsMonitor";
import Analytics from "@/components/Analytics";
import ErrorMonitoring from "@/components/ErrorMonitoring";
import MonitoringDashboard from "@/components/MonitoringDashboard";
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://threeriverstech.com'),
  title: {
    default: "Three Rivers Tech - Professional Technology Solutions",
    template: "%s | Three Rivers Tech"
  },
  description: "Professional technology solutions for modern businesses. Expert software development, IT consulting, SaaS products, and computer repair services.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/company_logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/company_logo.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/company_logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/company_logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content link for keyboard users */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Skip to main content
        </a>
        
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <StructuredData data={[
          generateOrganizationSchema(),
          generateLocalBusinessSchema(),
          generateWebSiteSchema()
        ]} />
        <Suspense fallback={null}>
          <LazyAccessibilityChecker />
        </Suspense>
        <PerformanceMonitor />
        <ServiceWorkerRegistration />
        <CacheInitializer />
        <CoreWebVitalsMonitor />
        <Analytics />
        <ErrorMonitoring />
        <MonitoringDashboard />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"} />
    </html>
  );
}