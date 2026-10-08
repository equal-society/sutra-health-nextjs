import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "What happens during a physician consultation?",
  title: "What to Expect in a Physician Consultation | Sutra Health",
  description: "Understand what happens during a Sutra Health physician consultation, what information to bring and how the conversation may unfold.",
  heroDescription: "The first step is a conversation about your health concerns, history, lifestyle and needs, followed by discussion of appropriate next steps.",
  primaryCta: "Book a Consultation",
  secondaryCta: "Contact Us",
  secondaryHref: "/services/physician-consultation",
  related: [
      { label: "Physician Consultation", href: "/services/physician-consultation" },
      { label: "Book a consultation", href: "/book-appointment" }
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "https://lifequality.org.in/services/physician-consultation/what-to-expect" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/physician-consultation/what-to-expect",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
