import ServicePageTemplate, { createServiceMetadata } from "@/components/what-we-do/ServicePageTemplate";
import { lifestyle } from "@/components/what-we-do/service-pages";

export const metadata = createServiceMetadata(lifestyle);

export default function LifestylePage() {
  return <ServicePageTemplate config={lifestyle} />;
}
