import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import StructuredData from "@/components/StructuredData";
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
        <Header />
        {children}
        <Footer />
        <StructuredData data={[
          generateOrganizationSchema(),
          generateLocalBusinessSchema(),
          generateWebSiteSchema()
        ]} />
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}