import { Metadata } from "next";

export const contactMetadata: Metadata = {
  title: "Contact Us - Get in Touch with Our Technology Team",
  description: "Contact Three Rivers Tech for technology solutions. Reach out to our expert team for software development, IT consulting, SaaS products, or computer repair services. We're here to help.",
  keywords: "contact us, get in touch, technology solutions, software development, IT consulting, SaaS products, computer repair, tech support",
  alternates: {
    canonical: "https://threeriverstech.com/contact",
  },
  openGraph: {
    title: "Contact Three Rivers Tech - Get in Touch",
    description: "Contact Three Rivers Tech for technology solutions.",
    url: "https://threeriverstech.com/contact",
    siteName: "Three Rivers Tech",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "Three Rivers Tech - Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
