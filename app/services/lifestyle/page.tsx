import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import ContextualBookingCTA from "@/components/shared/ContextualBookingCTA";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/lifestyle`;

export const metadata: Metadata = {
  title: "Lifestyle Medicine in Faridabad | Sutra Health",
  description:
    "Explore lifestyle medicine at Sutra Health in Faridabad and learn how everyday habits can be considered alongside appropriate medical care.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lifestyle Medicine in Faridabad | Sutra Health",
    description:
      "A concise introduction to lifestyle medicine, the six-pillar framework and related Sutra Health services.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

const readingLinks = [
  {
    number: "01",
    title: "The Six Pillars of Lifestyle Medicine",
    description:
      "Explore six areas often considered in lifestyle medicine, from food and movement to sleep, connection, substance-related risks and stress.",
    href: "/services/lifestyle/six-pillar",
    linkLabel: "Explore the six pillars",
  },
  {
    number: "02",
    title: "Healthy Lifestyle Coaching",
    description:
      "Learn about practical goal-setting and support for working on everyday habits, subject to the current programme format.",
    href: "/services/lifestyle/healthy-lifestyle-coaching",
    linkLabel: "Read about lifestyle coaching",
  },
  {
    number: "03",
    title: "Daily Health Habits",
    description:
      "Consider small, realistic changes to routines without trying to change everything at once.",
    href: "/services/lifestyle/daily-habits",
    linkLabel: "Explore daily habits",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Lifestyle Medicine in Faridabad | Sutra Health",
  description: String(metadata.description),
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", name: "Sutra Health", url: `${SITE_URL}/` },
};

export default function LifestyleMedicinePage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

     {/* Hero */}
      <section
        aria-labelledby="lifestyle-title"
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/services/lifestyle.webp')",
          }}
        />

        <div aria-hidden="true" className="absolute inset-0 bg-[#101C19]/65" />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#101C19]/80 via-[#101C19]/45 to-[#101C19]/10"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/85">
            Lifestyle Medicine
          </p>

          <h1
            id="lifestyle-title"
            className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.03em] text-white"
          >
          Your everyday habits are part of your health.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
          Food, movement, sleep and daily routines all play a role in your health.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/assessment"
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#F7F5EF] px-6 text-base font-semibold text-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Book a Consultation →
            </Link>

            <a
              href="#explore-lifestyle"
              className="inline-flex min-h-12 w-full items-center justify-center border border-white/70 px-6 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Explore the Lifestyle Approach
            </a>
          </div>
        </div>
      </section>

      <section id="explore-lifestyle" aria-labelledby="overview-title" className="bg-white">
        <Container>
          <div className="grid gap-6 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">The approach</p>
              <h2 id="overview-title" className="mt-4 max-w-lg font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">A practical view of everyday health.</h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
                Lifestyle medicine looks at everyday patterns that may influence health and wellbeing. The useful starting point is different for everyone and may involve one manageable change, a conversation with a clinician or support from an appropriate service.
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
                Explore the related topics below to learn more. Each page has a distinct focus, so this overview can stay brief and easy to navigate.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="lifestyle-reading-title" className="bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Explore further</p>
              <h2 id="lifestyle-reading-title" className="mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">Read more about lifestyle support.</h2>
            </div>
            <div className="mt-8 divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
              {readingLinks.map((item) => (
                <article key={item.number} className="grid gap-4 py-7 sm:py-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-8">
                  <span className="text-sm font-semibold tracking-[0.14em] text-[var(--sutra-teal)]">{item.number}</span>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{item.description}</p>
                  </div>
                  <Link href={item.href} className="inline-flex min-h-11 items-center self-start font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{item.linkLabel} <span className="ml-2" aria-hidden="true">↗</span></Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContextualBookingCTA eyebrow="A place to begin" title="Choose a starting point that fits your circumstances." description="Bring your questions to a consultation and discuss which health priorities may be appropriate for you." label="Choose an appointment time" />

      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        Lifestyle medicine complements appropriate medical care. This information is educational and does not replace individual medical advice, diagnosis or treatment. Do not change prescribed treatment without discussing it with your treating healthcare professional.
      </p>
    </main>
  );
}
