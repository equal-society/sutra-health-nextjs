import ServicePageTemplate, { createServiceMetadata } from "@/components/what-we-do/ServicePageTemplate";
import { nutrition } from "@/components/what-we-do/service-pages";

export const metadata = createServiceMetadata(nutrition);

export default function NutritionPage() {
  return <ServicePageTemplate config={nutrition} />;
}
