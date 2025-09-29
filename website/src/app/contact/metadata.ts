import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";

export const contactMetadata = generateLocalSeoMetadata(generateStaticPageMetadata("contact"));
