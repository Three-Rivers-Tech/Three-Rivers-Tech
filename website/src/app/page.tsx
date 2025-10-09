import EnhancedHero from "@/app/components/EnhancedHero";
import Services from "@/app/components/Services";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import Testimonials from "@/app/components/Testimonials";
import CallToAction from "@/app/components/CallToAction";
import PortfolioSection from "@/app/components/PortfolioSection";
import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";
import StructuredData from "@/components/StructuredData";
import { generatePageStructuredData } from "@/lib/structured-data";

export const metadata = generateLocalSeoMetadata(generateStaticPageMetadata("home"));

export default function Home() {
  return (
    <>
      <StructuredData data={generatePageStructuredData("home")} />
      <div>
        <EnhancedHero />
        <Services />
        <WhyChooseUs />
        <PortfolioSection />
        <Testimonials />
        <CallToAction />
      </div>
    </>
  );
}
