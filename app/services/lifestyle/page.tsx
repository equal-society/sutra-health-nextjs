import ServicePageTemplate, {
  createServiceMetadata,
} from "@/components/services/ServicePageTemplate";
import { lifestyle } from "@/components/services/service-pages";

export const metadata = createServiceMetadata(lifestyle);

export default function LifestylePage() {
  return <ServicePageTemplate config={lifestyle} />;
}
