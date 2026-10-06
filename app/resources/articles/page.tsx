import type { Metadata } from "next";
import ArticlesClient from "@/components/resources/ArticlesClient";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Health Articles | Practical Guides",
  description:
    "Read practical, evidence-informed health articles about lifestyle, nutrition, movement, stress, sleep and healthy habits from Sutra Health.",
  alternates: { canonical: `${SITE_URL}/resources/articles` },
  openGraph: {
    title: "Health Articles | Practical Health Questions & Guides",
    description:
      "Clear, practical answers to everyday health questions, with evidence-aware guidance and appropriate medical boundaries.",
    url: `${SITE_URL}/resources/articles`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health health articles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Articles",
    description:
      "Practical, evidence-informed health articles about lifestyle, nutrition, movement, stress and sleep.",
    images: [`${SITE_URL}/images/og-image.webp`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
    { "@type": "ListItem", position: 3, name: "Health Articles", item: `${SITE_URL}/resources/articles` },
  ],
};

export default function ArticlesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ArticlesClient />
    </>
  );
}
