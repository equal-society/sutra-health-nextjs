import ServicePageTemplate, { createServiceMetadata } from "@/components/what-we-do/ServicePageTemplate";
import { therapeuticYoga } from "@/components/what-we-do/service-pages";

export const metadata = createServiceMetadata(therapeuticYoga);

export default function TherapeuticYogaPage() {
  return <ServicePageTemplate config={therapeuticYoga} />;
}
