import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "Need help turning healthy intentions into daily habits?",
  title: "Healthy Lifestyle Coaching | Sutra Health Faridabad",
  description: "Explore lifestyle coaching that connects daily Yoga, nutrition, routines and health conversations with practical habit change.",
  heroDescription: "Coaching can make healthy changes more manageable by connecting what you know with what you can realistically practise each day.",
  primaryCta: "Enquire About Coaching",
  secondaryCta: "Book a Consultation",
  secondaryHref: "/services/lifestyle",
  related: [
      { label: "Lifestyle Medicine", href: "/services/lifestyle" },
      { label: "Daily Health Habits", href: "/services/lifestyle/daily-habits" }
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "https://lifequality.org.in/services/lifestyle/healthy-lifestyle-coaching" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/lifestyle/healthy-lifestyle-coaching",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
