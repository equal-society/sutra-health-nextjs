import type { Metadata } from "next";

import AssessmentSection from "@/components/hero/AssessmentSection";
import BookingCTA from "@/components/hero/BookingCTA";
import Hero from "@/components/hero/Hero";
import HowWeHelpSection from "@/components/hero/HowWeHelpSection";
import LifestyleHealthSection from "@/components/hero/LifestyleHealthSection";
import ScienceSection from "@/components/hero/ScienceSection";
import SutraHealthModelSection from "@/components/hero/SutraHealthModelSection";
import Testimonials from "@/components/hero/Testimonials";
import FAQ from "@/components/shared/FAQ";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Integrative Lifestyle Healthcare | Sutra Health",
  description:
    "Sutra Health combines lifestyle medicine, nutrition, therapeutic yoga and behaviour support to help you build healthier habits alongside medical care.",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Integrative Lifestyle Healthcare | Sutra Health",
    description:
      "Lifestyle medicine, nutrition, therapeutic yoga and practical health support designed around everyday life.",
    url: SITE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/images/hero-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Sutra Health",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Sutra Health",
  url: SITE_URL,
  founder: {
    "@type": "Person",
    name: "Dr. Rakesh Sarwal",
    honorificSuffix: "MBBS, MPH, DrPH",
    url: "https://academic.lifequality.org.in/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [organizationSchema],
          }),
        }}
      />

      <main className="bg-[#F7F5EF] text-[#202522]">
        <Hero />
        <LifestyleHealthSection />
        <ScienceSection />
        <AssessmentSection />
        <HowWeHelpSection />
        <SutraHealthModelSection />
        <Testimonials />
        <FAQ />
        <BookingCTA />
      </main>
    </>
  );
}
