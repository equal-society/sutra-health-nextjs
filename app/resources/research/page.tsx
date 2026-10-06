import type { Metadata } from "next";
import ResearchClient from "@/components/resources/ResearchClient";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Research & Evidence",
  description:
    "Explore research, publications, teaching and evidence related to lifestyle medicine, nutrition, Yoga and preventive health from Sutra Health and EQUAL Society.",
  alternates: { canonical: `${SITE_URL}/resources/research` },
  openGraph: {
    title: "Research & Evidence | Sutra Health",
    description:
      "Explore the research and academic work behind Sutra Health's lifestyle medicine and health education approach.",
    url: `${SITE_URL}/resources/research`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health research and evidence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Evidence | Sutra Health",
    description:
      "Research, publications, teaching and evidence behind Sutra Health's health education approach.",
    images: [`${SITE_URL}/images/og-image.webp`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
    { "@type": "ListItem", position: 3, name: "Research & Evidence", item: `${SITE_URL}/resources/research` },
  ],
};

export default function ResearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ResearchClient />
    </>
  );
}
