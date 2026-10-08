import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "Looking for a simple way to practise meditation?",
  title: "Meditation Practice & Guidance | Sutra Health",
  description: "Explore meditation guidance from Sutra Health, including what meditation is and how a simple practice can fit into everyday life.",
  heroDescription: "Start with a manageable practice. Learn the basics of meditation and how to make it part of an everyday routine.",
  primaryCta: "Explore Meditation",
  secondaryCta: "Book a Consultation",
  secondaryHref: "/services/therapeutic-yoga",
  related: [
      { label: "Therapeutic Yoga", href: "/services/therapeutic-yoga" },
      { label: "Pranayama", href: "/services/therapeutic-yoga/pranayama" }
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "https://lifequality.org.in/services/therapeutic-yoga/meditation" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/therapeutic-yoga/meditation",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
