import ServicePageTemplate, {
  createServiceMetadata,
} from "@/components/services/ServicePageTemplate";

import { traditionalTherapies } from "@/components/services/service-pages";

export const metadata = createServiceMetadata(traditionalTherapies);

export default function TraditionalTherapiesPage() {
  return <ServicePageTemplate config={traditionalTherapies} />;
}