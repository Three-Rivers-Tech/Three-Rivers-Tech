import SoftwareDevelopment from "./components/SoftwareDevelopment";
import ITConsulting from "./components/ITConsulting";
import SaasProducts from "./components/SaasProducts";
import ComputerRepair from "./components/ComputerRepair";
import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";
import StructuredData from "@/components/StructuredData";
import { generatePageStructuredData } from "@/lib/structured-data";

export const metadata = generateLocalSeoMetadata(generateStaticPageMetadata("services"));

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={generatePageStructuredData("services")} />
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:gap-20">
          <SoftwareDevelopment />
          <ITConsulting />
          <SaasProducts />
          <ComputerRepair />
        </div>
      </div>
    </>
  );
}
