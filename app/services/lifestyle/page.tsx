import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import ContextualBookingCTA from "@/components/shared/ContextualBookingCTA";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/lifestyle`;
const BOOKING_URL = "/book-appointment";

export const metadata: Metadata = {
  title: "Lifestyle Medicine in Faridabad | Sutra Health",
  description:
    "Lifestyle medicine looks at food, movement, sleep, stress and daily routines alongside medical care. Learn how Sutra Health in Faridabad approaches it.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lifestyle Medicine in Faridabad | Sutra Health",
    description:
      "How everyday habits can be considered alongside medical care, with links to the six pillars, daily habits and lifestyle coaching.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

const steps = [
  { title: "Talk it through", text: "You describe your concerns, health history and what you want to change." },
  { title: "Check if tests are needed", text: "The physician decides whether an examination or investigations make sense before any lifestyle plan." },
  { title: "Agree a few practical changes", text: "Changes are chosen to fit your health, routine and preferences, not a fixed programme." },
  { title: "Review and adjust", text: "Progress is reviewed and the plan changes if something is not working." },
];

const readingLinks = [
  {
    number: "01",
    title: "The six pillars of lifestyle medicine",
    description:
      "Food, movement, sleep, connection, risky substances and stress: what each area covers and where to start.",
    href: "/services/lifestyle/six-pillar",
    linkLabel: "Read about the six pillars",
  },
  {
    number: "02",
    title: "Daily habits",
    description: "Six small actions you can try this week, without changing everything at once.",
    href: "/services/lifestyle/daily-habits",
    linkLabel: "See daily habit ideas",
  },
  {
    number: "03",
    title: "Healthy lifestyle coaching",
    description: "Ongoing support to set goals, build routines and review how they are working.",
    href: "/services/lifestyle/healthy-lifestyle-coaching",
    linkLabel: "Learn about coaching",
  },
];

const faqs = [
  {
    question: "Does lifestyle medicine replace my medicines?",
    answer:
      "No. It works alongside medical care. Do not stop or change prescribed medicines without speaking to the clinician who prescribed them.",
  },
  {
    question: "Do I have to change everything at once?",
    answer:
      "No. Most people start with one or two changes that are realistic for their routine and health, then build from there.",
  },
  {
    question: "Where should I start if I have a health condition or symptoms?",
    answer:
      "Start with a physician consultation. It helps check whether your symptoms need assessment before you change your routine.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Lifestyle Medicine in Faridabad | Sutra Health",
      description: String(metadata.description),
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "Sutra Health", url: `${SITE_URL}/` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Lifestyle Medicine", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function LifestyleMedicinePage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero (approved copy and layout unchanged; only the booking link was corrected) */}
      <section
        aria-labelledby="lifestyle-title"
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/lifestyle.webp')" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#101C19]/65" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#101C19]/80 via-[#101C19]/45 to-[#101C19]/10"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/85">Lifestyle Medicine</p>

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
              href={BOOKING_URL}
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#F7F5EF] px-6 text-base font-semibold text-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Book a consultation →
            </Link>
            <a
              href="#explore-lifestyle"
              className="inline-flex min-h-12 w-full items-center justify-center border border-white/70 px-6 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Explore the lifestyle approach
            </a>
          </div>
        </div>
      </section>

      <section id="explore-lifestyle" aria-labelledby="overview-title" className="bg-white">
        <Container>
          <div className="grid gap-6 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">The approach</p>
              <h2 id="overview-title" className="mt-4 max-w-lg font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                What lifestyle medicine means here.
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
                Lifestyle medicine looks at the everyday patterns that can affect your health: what you eat, how much you move, how you sleep, how you cope with stress and who supports you. It sits alongside medical care and does not replace it.
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
                There is no single starting point. For some people it is one small change. For others it starts with a physician reviewing symptoms or a long-term condition.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="process-title" className="bg-[var(--sutra-porcelain)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">How it works</p>
              <h2 id="process-title" className="mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                From first conversation to review.
              </h2>
            </div>
            <ol className="mt-8 divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
              {steps.map((step, i) => (
                <li key={step.title} className="grid gap-2 py-6 md:grid-cols-[auto_1fr] md:gap-8">
                  <span className="text-sm font-semibold tracking-[0.14em] text-[var(--sutra-teal)]">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-xl leading-tight sm:text-2xl">{step.title}</h3>
                    <p className="mt-2 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--sutra-muted)]">
              Not everyone needs tests, and not everyone gets the same plan. The steps depend on your concern.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="lifestyle-reading-title" className="bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Explore further</p>
              <h2 id="lifestyle-reading-title" className="mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Go deeper on lifestyle support.
              </h2>
            </div>
            <div className="mt-8 divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
              {readingLinks.map((item) => (
                <article key={item.number} className="grid gap-4 py-7 sm:py-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-8">
                  <span className="text-sm font-semibold tracking-[0.14em] text-[var(--sutra-teal)]">{item.number}</span>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{item.description}</p>
                  </div>
                  <Link href={item.href} className="inline-flex min-h-11 items-center self-start font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                    {item.linkLabel} <span className="ml-2" aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)]">
              Related services:{" "}
              <Link href="/services/nutrition" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">Nutrition</Link> and{" "}
              <Link href="/services/physician-consultation" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">Physician Consultation</Link>.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="lifestyle-faq-title" className="bg-white">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Common questions</p>
              <h2 id="lifestyle-faq-title" className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Before you start</h2>
            </div>
            <div className="mt-7 max-w-4xl divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold leading-7 marker:content-none sm:text-lg">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="text-xl text-[var(--sutra-teal)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-3 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContextualBookingCTA
        eyebrow="A place to begin"
        title="Not sure which change to start with?"
        description="Bring your questions to a consultation. The physician can help you pick a sensible first step for your health."
        label="Book an appointment"
      />

      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        This page is general information, not medical advice, diagnosis or treatment. Do not change prescribed treatment without speaking to your treating clinician.
      </p>
    </main>
  );
}
