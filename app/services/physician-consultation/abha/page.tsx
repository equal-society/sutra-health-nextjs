import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/physician-consultation/abha`;
const BOOKING_URL = "/book-appointment";
const ABHA_URL = "https://abha.abdm.gov.in/abha/v3";
const TITLE = "What Is an ABHA Account? Digital Health Records | Sutra Health";
const DESCRIPTION =
  "What an Ayushman Bharat Health Account (ABHA) is, what it is used for, and where to create or manage one on the official portal.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: "Sutra Health", type: "article", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
};

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
        { "@type": "ListItem", position: 4, name: "ABHA", item: PAGE_URL },
      ],
    },
  ],
};

export default function AbhaPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-12 sm:py-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--sutra-muted)]">
              <Link href="/services/physician-consultation" className="underline underline-offset-4">Physician Consultation</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page">ABHA</span>
            </nav>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Digital health records</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">What is an ABHA account?</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
              An Ayushman Bharat Health Account (ABHA) is a digital health ID used in India's participating digital health services. It is not a consultation, a diagnosis or health insurance.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl space-y-12">
            <section aria-labelledby="what-title">
              <h2 id="what-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">What ABHA is used for</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">An ABHA lets you identify yourself within participating digital health services and, where supported, access or manage digital health records. How useful it is depends on which services take part and how your records are linked or shared.</p>
            </section>

            <section aria-labelledby="create-title">
              <h2 id="create-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Create or manage an account</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Use the official ABHA portal for current steps and account services. Read the official information before entering personal details.</p>
              <a href={ABHA_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[var(--sutra-teal)] underline-offset-4 hover:underline">Open the official ABHA portal ↗</a>
            </section>

            <section aria-labelledby="privacy-title">
              <h2 id="privacy-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Privacy</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Read the official terms and privacy information to understand how your records can be accessed or shared, and decide what you are comfortable with.</p>
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
