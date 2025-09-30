import { Suspense } from "react";
import EnhancedHero from "@/app/components/EnhancedHero";
import Services from "@/app/components/Services";
import { LazyWhyChooseUs } from "@/lib/dynamic-imports";
import CallToAction from "@/app/components/CallToAction";
import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";
import StructuredData from "@/components/StructuredData";
import { generatePageStructuredData } from "@/lib/structured-data";
import { ContentPlaceholder } from "@/components/LayoutShiftPrevention";

export const metadata = generateLocalSeoMetadata(generateStaticPageMetadata("home"));

export default function Home() {
  return (
    <>
      <StructuredData data={generatePageStructuredData("home")} />
      <div>
        <EnhancedHero />
        <Services />
        <Suspense fallback={
          <section className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
              <ContentPlaceholder type="hero" />
            </div>
          </section>
        }>
          <LazyWhyChooseUs />
        </Suspense>
        <CallToAction />
      </div>
    </>
  );
}
