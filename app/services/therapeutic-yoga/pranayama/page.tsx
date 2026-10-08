import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "Can breathing practices become part of your health routine?",
  title: "Pranayama & Yogic Breathing | Sutra Health",
  description: "Explore traditional Pranayama breathing practices with practical guidance on what they are, how they are practised and when to seek guidance.",
  heroDescription: "Explore traditional breathing practices and learn how guided practice can fit into a broader routine for movement, awareness and wellbeing.",
  primaryCta: "Explore Pranayama",
  secondaryCta: "Book a Consultation",
  secondaryHref: "/services/therapeutic-yoga",
  related: [
      { label: "Therapeutic Yoga", href: "/services/therapeutic-yoga" },
      { label: "Meditation", href: "/services/therapeutic-yoga/meditation" },
      { label: "Yoga Asana Protocol", href: "/services/therapeutic-yoga/yoga-asana-protocol" }
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "https://lifequality.org.in/services/therapeutic-yoga/pranayama" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/therapeutic-yoga/pranayama",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
