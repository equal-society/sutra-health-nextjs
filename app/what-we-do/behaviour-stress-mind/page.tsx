import ServicePageTemplate, { createServiceMetadata } from "@/components/what-we-do/ServicePageTemplate";
import { behaviourStressMind } from "@/components/what-we-do/service-pages";

export const metadata = createServiceMetadata(behaviourStressMind);

export default function BehaviourStressMindPage() {
  return <ServicePageTemplate config={behaviourStressMind} />;
}
