import EnhancedHero from "@/app/components/EnhancedHero";
import Services from "@/app/components/Services";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import CallToAction from "@/app/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Tech Solutions That Actually Work | Three Rivers Tech",
  description: "Stop losing money to bad technology. We build websites that work, fix slow computers, and create software that saves you time. Plain English, real results.",
  keywords: "website design, computer repair, custom software, tech support, business automation, technology setup, Mon Valley tech services",
  alternates: {
    canonical: "https://threeriverstech.com",
  },
  openGraph: {
    title: "Three Rivers Tech - Technology That Works For Your Business",
    description: "We fix technology problems fast. Build websites that convert, automate boring tasks, and get your systems working reliably.",
    url: "https://threeriverstech.com",
    siteName: "Three Rivers Tech",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "Three Rivers Tech - Technology Solutions That Work",
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
            "name": "Three Rivers Tech - Simple Technology Solutions That Work",
            "description": "Stop losing money to bad technology. We build websites that work, fix slow computers, and create software that saves you time. Plain English, real results.",
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
        <WhyChooseUs />
        <CallToAction />
      </div>
    </>
  );
}
