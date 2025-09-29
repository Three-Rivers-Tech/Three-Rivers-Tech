import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";
import PortfolioClient from "./components/PortfolioClient";

export const metadata = generateLocalSeoMetadata(generateStaticPageMetadata("portfolio"));

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Our Portfolio - Featured Projects & Case Studies",
            "description": "Explore our featured technology projects and case studies. See how Three Rivers Tech has helped businesses transform through innovative software solutions.",
            "url": "https://threeriverstech.com/portfolio",
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
                  "name": "Portfolio",
                  "item": "https://threeriverstech.com/portfolio"
                }
              ]
            }
          })
        }}
      />
      <PortfolioClient />
    </>
  );
}
