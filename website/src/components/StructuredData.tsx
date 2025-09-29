import { structuredDataToJsonLd } from "@/lib/structured-data";

interface StructuredDataProps {
  data: unknown | unknown[];
  id?: string;
}

/**
 * Component for adding structured data (JSON-LD) to pages
 */
export default function StructuredData({ data, id }: StructuredDataProps) {
  // Handle both single schema and array of schemas
  const schemas = Array.isArray(data) ? data : [data];
  
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={id ? `${id}-${index}` : index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: structuredDataToJsonLd(schema)
          }}
        />
      ))}
    </>
  );
}

/**
 * Specialized component for organization structured data
 */
export function OrganizationStructuredData({ data }: { data: unknown }) {
  return <StructuredData data={data} id="organization" />;
}

/**
 * Specialized component for local business structured data
 */
export function LocalBusinessStructuredData({ data }: { data: unknown }) {
  return <StructuredData data={data} id="local-business" />;
}

/**
 * Specialized component for service structured data
 */
export function ServiceStructuredData({ data }: { data: unknown }) {
  return <StructuredData data={data} id="service" />;
}

/**
 * Specialized component for webpage structured data
 */
export function WebPageStructuredData({ data }: { data: unknown }) {
  return <StructuredData data={data} id="webpage" />;
}

/**
 * Specialized component for breadcrumb structured data
 */
export function BreadcrumbStructuredData({ data }: { data: unknown }) {
  return <StructuredData data={data} id="breadcrumb" />;
}