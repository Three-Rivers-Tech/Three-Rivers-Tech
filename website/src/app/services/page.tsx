import SoftwareDevelopment from "./components/SoftwareDevelopment";
import ITConsulting from "./components/ITConsulting";
import SaasProducts from "./components/SaasProducts";
import ComputerRepair from "./components/ComputerRepair";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Services - Software Development, IT Consulting, SaaS & Repair",
  description: "Comprehensive technology services including custom software development, IT consulting, SaaS products, and computer repair. Tailored solutions to meet your unique business requirements.",
  keywords: "software development, IT consulting, SaaS products, computer repair, technology services, custom solutions, business technology",
  alternates: {
    canonical: "https://threeriverstech.com/services",
  },
  openGraph: {
    title: "Our Technology Services - Three Rivers Tech",
    description: "Explore our comprehensive technology services including custom software development, IT consulting, SaaS products, and computer repair.",
    url: "https://threeriverstech.com/services",
    siteName: "Three Rivers Tech",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "Three Rivers Tech - Our Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ServicePage",
            "name": "Our Services - Software Development, IT Consulting, SaaS & Computer Repair",
            "description": "Explore our comprehensive technology services including custom software development, IT consulting, SaaS products, and computer repair. Tailored solutions for your business needs.",
            "url": "https://threeriverstech.com/services",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://threeriverstech.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://threeriverstech.com/services"
                }
              ]
            }
          })
        }}
      />
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          <SoftwareDevelopment />
          <ITConsulting />
          <SaasProducts />
          <ComputerRepair />
        </div>
      </div>
    </>
  );
}
