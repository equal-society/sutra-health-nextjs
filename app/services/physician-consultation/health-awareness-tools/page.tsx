import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/physician-consultation/health-awareness-tools`;
const BOOKING_URL = "/book-appointment";
const TITLE = "Health-Awareness Tools: Pulse, HRV and Brain Health | Sutra Health";
const DESCRIPTION =
  "Third-party tools for exploring pulse, heart-rate variability and brain health, and why none of them replaces a clinical assessment.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: "Sutra Health", type: "article", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
};

const tools = [
  {
    title: "Pulse: HeartBeat",
    text: "HeartBeat is an Android app for measuring your pulse. Read its description and limits before relying on a reading.",
    href: "https://f-droid.org/packages/eu.berdosi.app.heartbeat/",
    label: "HeartBeat on F-Droid",
  },
  {
    title: "Heart-rate variability: Kubios HRV",
    text: "Heart-rate variability (HRV) is the variation in time between heartbeats. An app reading on its own cannot diagnose stress, disease or overall health.",
    href: "https://play.google.com/store/apps/details?id=com.kubioshrvapp",
    label: "Kubios HRV on Google Play",
  },
  {
    title: "Brain health: Think Brain Health Hub",
    text: "An educational brain-health check-in from Alzheimer's Research UK. It raises awareness and is not a diagnosis.",
    href: "https://www.alzheimersresearchuk.org/brain-health-check-in/start-what-to-expect/",
    label: "Think Brain Health Hub",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "Sutra Health", url: `${SITE_URL}/` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Physician Consultation", item: `${SITE_URL}/services/physician-consultation` },
        { "@type": "ListItem", position: 4, name: "Health-Awareness Tools", item: PAGE_URL },
      ],
    },
  ],
};

export default function HealthAwarenessToolsPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-12 sm:py-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--sutra-muted)]">
              <Link href="/services/physician-consultation" className="underline underline-offset-4">Physician Consultation</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page">Health-Awareness Tools</span>
            </nav>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Health-awareness tools</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Health-awareness tools for pulse, HRV and brain health
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
              These third-party tools can help you notice and track some health signals. They are for awareness only and do not replace a professional assessment.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl space-y-12">
            {tools.map((tool) => (
              <section key={tool.title} aria-label={tool.title}>
                <h2 className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">{tool.title}</h2>
                <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">{tool.text}</p>
                <a href={tool.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center font-semibold text-[var(--sutra-teal)] underline underline-offset-4">{tool.label} ↗</a>
              </section>
            ))}

            <section aria-labelledby="careful-title">
              <h2 id="careful-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Use them with care</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Consumer apps vary in accuracy and may not suit everyone. Do not use them to delay medical care or to make decisions about medicines. If a reading worries you, or you have symptoms, speak to a qualified healthcare professional.</p>
            </section>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-[var(--sutra-border)] pt-8 sm:flex-row sm:flex-wrap">
            <Link href="/services/physician-consultation" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-5 py-3 text-sm font-bold text-[var(--sutra-teal)] hover:bg-white">← Back to Physician Consultation</Link>
            <Link href={BOOKING_URL} className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-5 py-3 text-sm font-bold text-white hover:opacity-90">Book an appointment ↗</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
