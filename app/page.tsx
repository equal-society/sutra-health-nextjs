import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import Credibility from "@/components/hero/Credibility";
import Problem from "@/components/hero/Problem";
import Programs from "@/components/hero/Programs";
import Approach from "@/components/hero/Approach";
import HeroFramework from "@/components/hero/HeroFramework";
import Conditions from "@/components/hero/Conditions";
import Experts from "@/components/hero/Experts";
import Testimonials from "@/components/hero/Testimonials";
import FAQ from "@/components/shared/FAQ";
import BookingCTA from "@/components/hero/BookingCTA";

export const metadata: Metadata = {
  title: "Sutra Health | Integrative Lifestyle Healthcare",
  description:
    "Doctor-led integrative lifestyle healthcare combining lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour change.",
  alternates: { canonical: "https://lifequality.org.in/" },
  openGraph: {
    title: "Sutra Health | Integrative Lifestyle Healthcare",
    description:
      "Doctor-led integrative lifestyle healthcare combining lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour change.",
    url: "https://lifequality.org.in/",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutra Health | Integrative Lifestyle Healthcare",
    description:
      "Doctor-led integrative lifestyle healthcare combining lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour change.",
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lifequality.org.in/#organization",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
    },
    {
      "@type": "WebSite",
      "@id": "https://lifequality.org.in/#website",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
      publisher: { "@id": "https://lifequality.org.in/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://lifequality.org.in/#webpage",
      name: "Sutra Health | Integrative Lifestyle Healthcare",
      url: "https://lifequality.org.in/",
      isPartOf: { "@id": "https://lifequality.org.in/#website" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <Credibility />
        <Problem />
        <Programs />
        <Approach />
        <HeroFramework />
        <Conditions />
        <Experts />
        <Testimonials />
        <FAQ />
        <BookingCTA />
      </main>
    </>
  );
}
