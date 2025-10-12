import { Metadata } from "next";

export const searchMetadata: Metadata = {
  title: "Search Results - Technology Solutions & Services",
  description: "Search results for technology solutions, projects, and services from Three Rivers Tech. Find the IT services and solutions that meet your business needs.",
  keywords: "search, technology solutions, projects, services, Three Rivers Tech, IT services, business solutions",
  alternates: {
    canonical: "https://threeriverstech.com/search",
  },
  openGraph: {
    title: "Search Results - Three Rivers Tech",
    description: "Search results for technology solutions, projects, and services.",
    url: "https://threeriverstech.com/search",
    siteName: "Three Rivers Tech",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "Three Rivers Tech - Search Results",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
