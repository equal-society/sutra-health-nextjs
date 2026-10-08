import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "Can music, movement and connection make wellbeing feel more human?",
  title: "Singing, Kirtan & Dance for Wellbeing | Sutra Health",
  description: "Explore singing, Kirtan and dance as community wellbeing activities that can support connection, expression and enjoyable movement.",
  heroDescription: "Singing, Kirtan and dance bring movement, expression and social connection into wellbeing in a way that can feel practical, enjoyable and shared.",
  primaryCta: "Explore the Programme",
  secondaryCta: "Contact Us",
  secondaryHref: "/services",
  related: [
      { label: "Explore all services", href: "/services" },
      { label: "Contact Sutra Health", href: "/contact" }
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "https://lifequality.org.in/services/singing-kirtan-dance" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/singing-kirtan-dance",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
