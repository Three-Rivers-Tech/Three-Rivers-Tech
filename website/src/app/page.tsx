import EnhancedHero from "@/app/components/EnhancedHero";
import Services from "@/app/components/Services";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import ExperienceSection from "@/app/components/ExperienceSection";
import CallToAction from "@/app/components/CallToAction";
import PortfolioSection from "@/app/components/PortfolioSection";
import StructuredData from "@/components/StructuredData";
import { generatePageStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData data={generatePageStructuredData("home")} />
      <EnhancedHero />
      <Services />
      <WhyChooseUs />
      <PortfolioSection />
      <ExperienceSection />
      <CallToAction />
    </>
  );
}
