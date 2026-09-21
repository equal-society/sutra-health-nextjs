import ServicePageTemplate, { createServiceMetadata } from "@/components/what-we-do/ServicePageTemplate";
import { physicianConsultation } from "@/components/what-we-do/service-pages";

export const metadata = createServiceMetadata(physicianConsultation);

export default function PhysicianConsultationPage() {
  return <ServicePageTemplate config={physicianConsultation} />;
}
