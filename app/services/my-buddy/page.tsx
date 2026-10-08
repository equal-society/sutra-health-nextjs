import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "Sometimes having someone to talk to can make a difference.",
  title: "My Buddy Peer Support Programme | Sutra Health",
  description: "Learn about My Buddy, a peer-support programme designed around companionship, positive routines and community wellbeing.",
  heroDescription: "My Buddy is built around human connection and peer support\u2014creating space for conversation, encouragement and healthier everyday routines.",
  primaryCta: "Learn About My Buddy",
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
  alternates: { canonical: "https://lifequality.org.in/services/my-buddy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/my-buddy",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
