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
