import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

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
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-circle-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-circle-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-circle-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-circle-192x192.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Three Rivers Tech",
              "url": "https://threeriverstech.com",
              "logo": "https://threeriverstech.com/company_logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/three-rivers-tech",
                "https://twitter.com/three_rivers_tech",
                "https://www.facebook.com/threeriverstech"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "Customer Service",
                "email": "info@threeriverstech.com"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Three Rivers Tech",
              "image": "https://threeriverstech.com/company_logo.png",
              "telephone": "+1-555-123-4567",
              "email": "info@threeriverstech.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Technology Drive",
                "addressLocality": "Pittsburgh",
                "addressRegion": "PA",
                "postalCode": "15203",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "$$",
              "sameAs": [
                "https://www.linkedin.com/company/three-rivers-tech",
                "https://twitter.com/three_rivers_tech",
                "https://www.facebook.com/threeriverstech"
              ]
            })
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
