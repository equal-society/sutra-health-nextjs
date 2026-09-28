import ServicePageTemplate, {
  createServiceMetadata,
} from "@/components/services/ServicePageTemplate";
import { nutrition } from "@/components/services/service-pages";

export const metadata = createServiceMetadata(nutrition);

export default function NutritionPage() {
  return <ServicePageTemplate config={nutrition} />;
}
