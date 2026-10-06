import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Health Resources | Articles, Guides & Research",
  description:
    "Explore practical health articles, guides, research and answers to common lifestyle and wellbeing questions from Sutra Health.",
  alternates: { canonical: `${SITE_URL}/resources` },
  openGraph: {
    title: "Health Resources",
    description:
      "Explore practical health articles, guides, research and frequently asked questions from Sutra Health.",
    url: `${SITE_URL}/resources`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health health resources" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Resources | Sutra Health",
    description:
      "Practical health articles, guides, research and FAQs from Sutra Health.",
    images: [`${SITE_URL}/images/og-image.webp`],
  },
};

const resources = [
  {
    title: "Health Articles",
    description: "Clear answers to everyday questions about lifestyle, nutrition, sleep, stress, movement and common health concerns.",
    href: "/resources/articles",
  },
  {
    title: "Health Guides",
    description: "Practical, easy-to-follow guides for building supportive habits around everyday health and wellbeing.",
    href: "/resources/health-guides",
  },
  {
    title: "Research & Evidence",
    description: "Explore research, teaching and academic material connected with lifestyle medicine, Yoga and preventive health.",
    href: "/resources/research",
  },
  {
    title: "Frequently Asked Questions",
    description: "Find answers about consultations, services, lifestyle support and getting started with Sutra Health.",
    href: "/faqs",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/resources#collection`,
  url: `${SITE_URL}/resources`,
  name: "Health Resources",
  description: String(metadata.description),
  isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Sutra Health", url: SITE_URL },
};

export default function ResourcesPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-ink)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Sutra Health resources</p>
            <h1 className="mt-5 font-[var(--font-serif)] text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Health Resources for Better Everyday Decisions</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-8">Explore practical health articles, guides, research and answers to common questions about lifestyle, nutrition, movement, sleep, stress and wellbeing.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="resources-list" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Explore by purpose</p>
          <h2 id="resources-list" className="mt-3 font-[var(--font-serif)] text-4xl leading-tight tracking-[-0.025em] sm:text-5xl">Find the right health information</h2>
          <p className="mt-4 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">Start with a practical health question, browse a guide, explore the evidence behind the work, or find answers before your consultation.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {resources.map((resource, index) => (
            <Link key={resource.href} href={resource.href} className="group flex min-h-56 flex-col border border-[var(--sutra-border)] bg-[var(--sutra-white)] p-6 transition-colors hover:border-[var(--sutra-teal)] sm:p-8">
              <span className="text-xs font-semibold tracking-[0.12em] text-[var(--sutra-sage)]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-[var(--font-serif)] text-2xl leading-tight sm:text-3xl">{resource.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--sutra-muted)]">{resource.description}</p>
              <span className="mt-auto pt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--sutra-teal)]">Explore resource <ArrowUpRight size={16} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Need personal guidance?</p>
            <h2 className="mt-3 font-[var(--font-serif)] text-3xl leading-tight sm:text-5xl">Information can help you prepare. A consultation can help you decide what fits your situation.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">Use the resources for general education, then speak with an appropriate healthcare professional when you need individual advice.</p>
            <Link href="/book-appointment" className="mt-7 inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--sutra-teal-hover)]">Explore appointment options <ArrowUpRight size={17} className="ml-3" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
