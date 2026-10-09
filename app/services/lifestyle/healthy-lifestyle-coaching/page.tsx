import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/lifestyle/healthy-lifestyle-coaching`;
const BOOKING_URL = "/book-appointment";

export const metadata: Metadata = {
  title: "Healthy Lifestyle Coaching in Faridabad | Sutra Health",
  description:
    "Lifestyle coaching at Sutra Health: set realistic health goals and build routines around food, movement, Yoga, breathing and meditation, with regular review.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Healthy Lifestyle Coaching in Faridabad | Sutra Health",
    description: "Practical, ongoing support to build healthier daily routines.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

const steps = [
  { title: "Understand your starting point", text: "Review your routines, priorities and relevant health needs." },
  { title: "Set a few practical goals", text: "Choose small changes that fit your daily life." },
  { title: "Build routines you can keep", text: "Work on food, movement, Yoga, breathing and meditation as they suit you." },
  { title: "Review and adjust", text: "Look at what is working, what is not and what to change next." },
];

const supportAreas = [
  { title: "Food and nutrition", text: "Everyday eating habits and nutrition needs." },
  { title: "Yoga and movement", text: "Yoga and other movement that suits your ability." },
  { title: "Breathing and meditation", text: "Breathing (Pranayam), meditation and relaxation practices." },
  { title: "Habits and follow-through", text: "Setting manageable goals and reviewing them regularly." },
  { title: "Health consultations", text: "Seeing a physician when your concerns need a medical view." },
];

const faqs = [
  {
    q: "What does the coaching programme include?",
    a: "Support with diet, Yoga, Pranayam, meditation and building habits, along with health consultations when needed. The exact sessions and format are confirmed when you book.",
  },
  {
    q: "Is coaching suitable if I already have a health condition?",
    a: "Often yes, but some concerns need a medical assessment first. A physician consultation is a good first step if you are unsure.",
  },
  {
    q: "Can coaching replace my medicines or treatment?",
    a: "No. Coaching works alongside medical care. Do not stop or change medicines without speaking to your treating clinician.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Healthy Lifestyle Coaching in Faridabad | Sutra Health",
      description: String(metadata.description),
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "Sutra Health", url: `${SITE_URL}/` },
    },
    {
      "@type": "Service",
      name: "Healthy Lifestyle Coaching",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Faridabad" },
      provider: { "@type": "Organization", name: "Sutra Health", url: `${SITE_URL}/` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Lifestyle Medicine", item: `${SITE_URL}/services/lifestyle` },
        { "@type": "ListItem", position: 4, name: "Healthy Lifestyle Coaching", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function HealthyLifestyleCoachingPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-10 sm:py-14 lg:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--sutra-muted)]">
              <Link href="/services/lifestyle" className="underline underline-offset-4">Lifestyle Medicine</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page">Healthy Lifestyle Coaching</span>
            </nav>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.17em] text-[var(--sutra-teal)]">Lifestyle coaching</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Healthy lifestyle coaching: turn health intentions into daily habits
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl sm:leading-9">
              Regular, practical support to set goals, build routines and keep them going.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={BOOKING_URL} className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-6 py-3 text-base font-semibold text-white hover:opacity-90">Book a coaching consultation ↗</Link>
              <Link href="/services/lifestyle" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-6 py-3 text-base font-semibold text-[var(--sutra-teal)] hover:bg-white">About lifestyle medicine</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Support for what you can actually practise.</h2>
            </div>
            <div className="space-y-4 text-lg leading-8 text-[var(--sutra-muted)]">
              <p>Coaching is for people who know what they would like to change but find it hard to keep going. It helps you choose realistic goals, build daily routines and review what helps or gets in the way.</p>
              <p>It differs from <Link href="/services/lifestyle/daily-habits" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">self-help habit ideas</Link> because you get regular review and a plan that fits your health and routine.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14 lg:py-16" aria-labelledby="process-title">
        <Container>
          <div className="max-w-3xl">
            <h2 id="process-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">How coaching works</h2>
          </div>
          <ol className="mt-7 border-t border-[var(--sutra-border-strong)]">
            {steps.map((step, i) => (
              <li key={step.title} className="grid gap-2 border-b border-[var(--sutra-border-strong)] py-5 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-5 sm:py-6">
                <span className="text-sm font-semibold tracking-[0.12em] text-[var(--sutra-teal)]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-xl leading-snug sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-3xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-10 sm:py-14 lg:py-16" aria-labelledby="support-title">
        <Container>
          <div className="max-w-3xl">
            <h2 id="support-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">What coaching can cover</h2>
            <p className="mt-3 text-lg leading-8 text-[var(--sutra-muted)]">What you work on depends on your needs and priorities.</p>
          </div>
          <div className="mt-7 grid gap-x-10 sm:grid-cols-2">
            {supportAreas.map((area) => (
              <article key={area.title} className="border-t border-[var(--sutra-border-strong)] py-5">
                <h3 className="font-serif text-xl sm:text-2xl">{area.title}</h3>
                <p className="mt-2 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{area.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14 lg:py-16" aria-labelledby="faq-title">
        <Container>
          <div className="max-w-3xl">
            <h2 id="faq-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Before you book</h2>
          </div>
          <div className="mt-6 max-w-4xl border-t border-[var(--sutra-border-strong)]">
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-[var(--sutra-border-strong)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-xl leading-snug sm:text-2xl">{item.q}</span>
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--sutra-border-strong)] text-xl text-[var(--sutra-teal)] group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pb-6 pr-10 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10">
        <Container>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-base font-semibold text-[var(--sutra-teal)]">
            <Link href="/services/lifestyle" className="underline-offset-4 hover:underline">← Lifestyle Medicine</Link>
            <Link href="/services/lifestyle/six-pillar" className="underline-offset-4 hover:underline">The six pillars →</Link>
            <Link href="/services/lifestyle/daily-habits" className="underline-offset-4 hover:underline">Daily habits →</Link>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--sutra-teal)] py-10 text-white sm:py-14">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Ready to talk about coaching?</h2>
              <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">Book an appointment and tell us what you would like to work on.</p>
            </div>
            <Link href={BOOKING_URL} className="inline-flex min-h-12 shrink-0 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[var(--sutra-teal)]">Book an appointment ↗</Link>
          </div>
        </Container>
      </section>

      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        Coaching works alongside medical care and does not replace diagnosis or treatment. Do not change prescribed medicines without medical advice.
      </p>
    </main>
  );
}
