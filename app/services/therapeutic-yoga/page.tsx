import ServicePageTemplate, {
  createServiceMetadata,
} from "@/components/services/ServicePageTemplate";
import { therapeuticYoga } from "@/components/services/service-pages";

export const metadata = createServiceMetadata(therapeuticYoga);

export default function TherapeuticYogaPage() {
  return <ServicePageTemplate config={therapeuticYoga} />;
}
