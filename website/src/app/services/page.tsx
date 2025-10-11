import SoftwareDevelopment from "./components/SoftwareDevelopment";
import ITConsulting from "./components/ITConsulting";
import SaasProducts from "./components/SaasProducts";
import ComputerRepair from "./components/ComputerRepair";
import CommunityEducation from "./components/CommunityEducation";
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Serving Turtle Creek & Mon Valley Communities</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            Computer repair, IT support, and website design for Turtle Creek, Monroeville, Wilmerding, and surrounding Mon Valley communities
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:gap-20">
          <ComputerRepair />
          <ITConsulting />
          <SoftwareDevelopment />
          <SaasProducts />
          <CommunityEducation />
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <p className="text-foreground-secondary mb-6 text-lg max-w-2xl mx-auto">
            Can't find what you need? We offer custom solutions for your specific tech challenges. 
            Serving Turtle Creek PA 15145, Monroeville, Wilmerding, and the entire Mon Valley region. Call (412) 403-5559.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px]"
          >
            <span>Request a Free Assessment</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
