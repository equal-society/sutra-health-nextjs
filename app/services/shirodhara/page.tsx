import type { Metadata } from "next";
import StaticServicePage, { type StaticServicePageConfig } from "@/components/services/StaticServicePage";

const config: StaticServicePageConfig = {
  h1: "Looking for a traditional wellness experience focused on relaxation?",
  title: "Shirodhara Therapy in Faridabad | Sutra Health",
  description: "Explore Shirodhara as a traditional wellness experience at Sutra Health in Faridabad, with information about what the session involves and what to expect.",
  heroDescription: "Shirodhara offers a traditional wellness experience centred on relaxation.",
  primaryCta: "Enquire About Shirodhara",
  secondaryCta: "Contact Us",
  secondaryHref: "/services",
  related: [
      { label: "Explore all services", href: "/services" },
      { label: "Book a consultation", href: "/book-appointment" }
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "https://lifequality.org.in/services/shirodhara" },
  robots: { index: true, follow: true },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "https://lifequality.org.in/services/shirodhara",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

export default function Page() {
  return <StaticServicePage config={config} />;
}
