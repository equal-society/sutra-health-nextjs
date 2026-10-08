import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "What does healthy eating look like in real life?",
  title: "Healthy Eating Guidance | Nutrition | Sutra Health",
  description: "Learn practical healthy eating principles around balanced meals, food choices, meal routines and hydration.",
  heroDescription: "Healthy eating is less about a perfect menu and more about building balanced, workable food routines that fit your needs and everyday life.",
  primaryCta: "Explore Nutrition Guidance",
  secondaryCta: "Book a Consultation",
  secondaryHref: "/services/nutrition",
  related: [
      { label: "Nutrition Counselling", href: "/services/nutrition" },
      { label: "Health Articles", href: "/resources/articles" }
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "https://lifequality.org.in/services/nutrition/healthy-eating" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/nutrition/healthy-eating",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
