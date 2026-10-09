import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/physician-consultation/appointment-options`;
const BOOKING_URL = "/book-appointment";
const ONLINE_URL =
  "https://www.lybrate.com/faridabad/doctor/dr-rakesh-sarwal-preventive-medicine-specialist";
const TITLE = "Book a Physician Consultation: Booking and Online Options | Sutra Health";
const DESCRIPTION =
  "How to book a physician consultation at Sutra Health in Faridabad, and where to check online appointment availability.";

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
        { "@type": "ListItem", position: 4, name: "Booking and Online Options", item: PAGE_URL },
      ],
    },
  ],
};

export default function AppointmentOptionsPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-12 sm:py-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--sutra-muted)]">
              <Link href="/services/physician-consultation" className="underline underline-offset-4">Physician Consultation</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page">Booking and Online Options</span>
            </nav>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Appointments</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              How to book a physician consultation
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
              You can book through Sutra Health, or check a Lybrate profile for online appointment options.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl space-y-12">
            <section aria-labelledby="book-title">
              <h2 id="book-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Book through Sutra Health</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Use the booking page to see available dates and choose a time. Fees, eligibility and any booking requirements are confirmed when you book.</p>
              <div className="mt-4">
                <Link href={BOOKING_URL} className="inline-flex min-h-11 items-center justify-center bg-[var(--sutra-teal)] px-5 py-3 text-sm font-bold text-white hover:opacity-90">Book an appointment ↗</Link>
              </div>
            </section>

            <section aria-labelledby="online-title">
              <h2 id="online-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Online consultation</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Online appointment options are listed on a Lybrate profile. Check the profile to see whether online appointments are available now and what the terms are.</p>
              <div className="mt-4">
                <a href={ONLINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center border border-[var(--sutra-border-strong)] px-5 py-3 text-sm font-bold text-[var(--sutra-teal)] hover:bg-white">View online appointment options ↗</a>
              </div>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">If a link does not work, contact Sutra Health to confirm how to book.</p>
            </section>

            <section aria-labelledby="prepare-title">
              <h2 id="prepare-title" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Before you book</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Read <Link href="/services/physician-consultation/what-to-expect" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">what to expect</Link> to see how to prepare and what you can discuss.</p>
            </section>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-[var(--sutra-border)] pt-8 sm:flex-row sm:flex-wrap">
            <Link href="/services/physician-consultation" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-5 py-3 text-sm font-bold text-[var(--sutra-teal)] hover:bg-white">← Back to Physician Consultation</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
