import ServicePageTemplate, { createServiceMetadata } from "@/components/services/ServicePageTemplate";
import { behaviourStressMind } from "@/components/services/service-pages";

export const metadata = createServiceMetadata(behaviourStressMind);

export default function BehaviourStressMindPage() {
  return <ServicePageTemplate config={behaviourStressMind} />;
}
