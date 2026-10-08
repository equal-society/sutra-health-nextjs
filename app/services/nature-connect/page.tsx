import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "Could spending more time outdoors become part of your health routine?",
  title: "Nature & Outdoor Wellbeing | Sutra Health Faridabad",
  description: "Explore nature-based activities and everyday outdoor habits that can support movement, routine, connection and wellbeing.",
  heroDescription: "Simple contact with nature can create opportunities for movement, daylight, reflection and a change of pace within everyday life.",
  primaryCta: "Explore Nature Practices",
  secondaryCta: "Explore Health Guides",
  secondaryHref: "/resources/health-guides",
  related: [
      { label: "Explore health guides", href: "/resources/health-guides" },
      { label: "Explore all services", href: "/services" }
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "https://lifequality.org.in/services/nature-connect" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/nature-connect",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
