import EnhancedHero from "@/app/components/EnhancedHero";
import Services from "@/app/components/Services";
import Features from "@/app/components/Features";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import CallToAction from "@/app/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Technology Solutions for Modern Businesses",
  description: "Three Rivers Tech provides expert software development, IT consulting, SaaS products, and computer repair services. Transform your business with our innovative technology solutions.",
  keywords: "technology solutions, software development, IT consulting, SaaS products, computer repair, business technology, digital transformation",
  alternates: {
    canonical: "https://threeriverstech.com",
  },
  openGraph: {
    title: "Three Rivers Tech - Professional Technology Solutions",
    description: "Leading technology company offering software development, IT consulting, SaaS products, and computer repair services.",
    url: "https://threeriverstech.com",
    siteName: "Three Rivers Tech",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "Three Rivers Tech - Professional Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Three Rivers Tech - Professional Technology Solutions for Modern Businesses",
            "description": "Leading technology company offering software development, IT consulting, SaaS products, and computer repair services. Transform your business with our innovative solutions.",
            "url": "https://threeriverstech.com",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://threeriverstech.com"
              }]
            }
          })
        }}
      />
      <div>
        <EnhancedHero />
        <Services />
        <Features />
        <WhyChooseUs />
        <CallToAction />
      </div>
    </>
  );
}
