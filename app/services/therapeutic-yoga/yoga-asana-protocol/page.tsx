import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "Want to explore a structured Yoga Asana sequence step by step?",
  title: "Yoga Asana Protocol | Step-by-Step Practice | Sutra Health",
  description: "Explore the Yoga Asana Protocol step by step, with guidance on the sequence and individual practices.",
  heroDescription: "Follow the Yoga Asana Protocol at your own pace, with clear guidance on the sequence and individual practices.",
  primaryCta: "Explore the Protocol",
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
  alternates: { canonical: "https://lifequality.org.in/services/therapeutic-yoga/yoga-asana-protocol" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/therapeutic-yoga/yoga-asana-protocol",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
