import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/physician-consultation/what-to-expect`;
const BOOKING_URL = "/book-appointment";
const TITLE = "What to Expect at a Physician Consultation | Sutra Health";
const DESCRIPTION =
  "How to prepare for a physician consultation, what you can discuss, what happens during the appointment and what may come next.";

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
        { "@type": "ListItem", position: 4, name: "What to Expect", item: PAGE_URL },
      ],
    },
  ],
};

export default function WhatToExpectPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-12 sm:py-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--sutra-muted)]">
              <Link href="/services/physician-consultation" className="underline underline-offset-4">Physician Consultation</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page">What to Expect</span>
            </nav>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Appointment guide</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              What to expect at a physician consultation
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
              A consultation is a structured conversation about your health concerns, history and questions. What happens depends on why you are coming and the information available.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl space-y-12">
            <section aria-labelledby="before-title">
              <h2 id="before-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Before your appointment</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Think about the main reason you want advice. A short written list helps you use the time well. It is useful to bring:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-[var(--sutra-muted)]">
                <li>Reports or test results related to your concern</li>
                <li>A list of current medicines and supplements, with doses if you know them</li>
                <li>Notes on your symptoms: when they began and what makes them better or worse</li>
                <li>Questions you want to ask</li>
              </ul>
            </section>

            <section aria-labelledby="discuss-title">
              <h2 id="discuss-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">What you can discuss</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Not every topic applies to every person. The conversation follows your concerns.</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-[var(--sutra-muted)]">
                <li><span className="font-semibold text-[var(--sutra-ink)]">Medical history:</span> current symptoms, existing conditions, past tests, medicines and relevant family history.</li>
                <li><span className="font-semibold text-[var(--sutra-ink)]">Lifestyle:</span> where relevant, food, physical activity, sleep, stress and daily routines, considered alongside medical care and not instead of it.</li>
              </ul>
            </section>

            <section aria-labelledby="during-title">
              <h2 id="during-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">During the consultation</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">You explain your concerns and give background. The physician may ask follow-up questions about your history, medicines and routines.</p>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">The physician may suggest next steps. Depending on your situation, these could include an examination, tests, a referral or a follow-up appointment. This page cannot say which of these you will need.</p>
            </section>

            <section aria-labelledby="after-title">
              <h2 id="after-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">After the appointment</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Make sure you understand the recommendations and how to follow them. Ask who to contact if you have questions about the plan. Do not change prescribed medicines without speaking to the clinician who prescribed them.</p>
            </section>

            <section aria-labelledby="urgent-title">
              <h2 id="urgent-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">If your symptoms are urgent</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">A booked consultation is not an emergency service. If your symptoms are severe or getting worse quickly, get urgent medical care instead of waiting for an appointment.</p>
            </section>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-[var(--sutra-border)] pt-8 sm:flex-row sm:flex-wrap">
            <Link href="/services/physician-consultation" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-5 py-3 text-sm font-bold text-[var(--sutra-teal)] hover:bg-white">← Back to Physician Consultation</Link>
            <Link href="/services/physician-consultation/appointment-options" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-5 py-3 text-sm font-bold text-[var(--sutra-teal)] hover:bg-white">Booking and online options</Link>
            <Link href={BOOKING_URL} className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-5 py-3 text-sm font-bold text-white hover:opacity-90">Book an appointment ↗</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
