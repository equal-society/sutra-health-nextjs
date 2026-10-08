import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "Which everyday habits are worth changing first?",
  title: "Daily Health Habits | Lifestyle Support | Sutra Health",
  description: "Explore practical everyday habits around food, movement, sleep, stress and routines that can support healthier living.",
  heroDescription: "Start with the habits that are realistic to change. Look at food, movement, sleep, stress and routines one step at a time.",
  primaryCta: "Explore Healthy Habits",
  secondaryCta: "Book a Consultation",
  secondaryHref: "/services/lifestyle",
  related: [
      { label: "Lifestyle Medicine", href: "/services/lifestyle" },
      { label: "Healthy Lifestyle Coaching", href: "/services/lifestyle/healthy-lifestyle-coaching" }
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "https://lifequality.org.in/services/lifestyle/daily-habits" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/lifestyle/daily-habits",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
