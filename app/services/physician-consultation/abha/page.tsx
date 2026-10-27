import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/physician-consultation/abha`;
const BOOKING_URL = "/book-appointment";
const ABHA_URL = "https://abha.abdm.gov.in/abha/v3";
const TITLE = "What Is an ABHA Account? | Sutra Health";
const DESCRIPTION =
  "What an Ayushman Bharat Health Account (ABHA) is, what it is used for, and where to create or manage one on the official portal.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
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

            <section className="relative overflow-hidden border-b border-[var(--sutra-border)] bg-[#18332F] text-white">
  <video
    aria-hidden="true"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/images/abha.webp"
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/videos/services/hero.mp4" type="video/mp4" />
  </video>

  <div
    aria-hidden="true"
    className="absolute inset-0 bg-[#10201C]/55"
  />

  

  <Container>
    <div className="relative z-10 max-w-5xl py-20 sm:py-24 lg:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Digital health records</p>
      <h1 className="mt-4 max-w-5xl font-serif text-5xl leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
        What is an ABHA account?
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
        An Ayushman Bharat Health Account (ABHA) is a digital health ID used in India's participating digital health services. It is not a consultation, a diagnosis or health insurance.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/book-appointment"
          className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[#F7F5EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Book a consultation ↗
        </Link>

        <Link
          href="/services/physician-consultation"
          className="inline-flex min-h-12 items-center justify-center border border-white/75 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Back to Physician Consultation
        </Link>
      </div>
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
