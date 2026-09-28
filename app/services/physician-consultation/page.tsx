import ServicePageTemplate, {
  createServiceMetadata,
} from "@/components/services/ServicePageTemplate";
import { physicianConsultation } from "@/components/services/service-pages";

export const metadata = createServiceMetadata(physicianConsultation);

export default function PhysicianConsultationPage() {
  return <ServicePageTemplate config={physicianConsultation} />;
}
