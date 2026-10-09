import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import ContextualBookingCTA from "@/components/shared/ContextualBookingCTA";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/lifestyle/six-pillar`;

export const metadata: Metadata = {
  title: "The Six Pillars of Lifestyle Medicine | Sutra Health",
  description:
    "Explore six areas commonly considered in lifestyle medicine: healthy eating, physical activity, restorative sleep, social connection, substance-related risks and stress management.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "The Six Pillars of Lifestyle Medicine | Sutra Health",
    description:
      "Learn how six everyday health areas may be considered as part of a whole-person approach alongside appropriate medical care.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

const pillars = [
  {
    number: "01",
    title: "Healthy eating",
    summary: "Food choices and meal patterns",
    content:
      "Everyday meals are shaped by food access, culture, budget, preferences and health needs. Rather than following one universal diet, review the variety of foods you usually eat and identify practical changes that suit your circumstances.",
    startingPoint:
      "Look at a typical day of meals. Is there one realistic way to add variety or make a meal work better for you?",
    service: { label: "Nutrition counselling", href: "/services/nutrition" },
  },
  {
    number: "02",
    title: "Physical activity",
    summary: "Movement that fits your day",
    content:
      "Movement can include walking, everyday tasks, mobility work and structured exercise. The right type and amount depend on your current ability, health, mobility and preferences. Consistency matters more than choosing an activity that does not fit your life.",
    startingPoint:
      "Notice where movement already fits into your day and what tends to get in the way. Choose a manageable option that is appropriate for you.",
    service: { label: "Therapeutic Yoga", href: "/services/therapeutic-yoga" },
  },
  {
    number: "03",
    title: "Restorative sleep",
    summary: "Routines that make room for rest",
    content:
      "Sleep timing, regularity and the routines around bedtime are useful areas to review. Work, caring responsibilities, discomfort and other factors can affect sleep, so advice should reflect the person's circumstances. Persistent sleep problems may need clinical assessment.",
    startingPoint:
      "Notice your usual sleep and wake times and what interrupts rest. If difficulties persist or affect daily functioning, discuss them with a qualified healthcare professional.",
    service: { label: "Physician consultation", href: "/services/physician-consultation" },
  },
  {
    number: "04",
    title: "Positive social connection",
    summary: "The role of supportive relationships",
    content:
      "Connection may come from family, friends, peers or community. People's circumstances and preferences differ; this is not about expecting everyone to have the same social life. The useful question is whether the support and connection a person values are available to them.",
    startingPoint:
      "Consider who you feel comfortable turning to, or whether there is a community or activity where you would like to build connection at your own pace.",
  },
  {
    number: "05",
    title: "Minimising risky substances",
    summary: "Understanding substance-related health risks",
    content:
      "Tobacco, alcohol and other substances can affect health. Conversations about use should be respectful and practical, without blame. The right support depends on the substance, pattern of use, health circumstances and whether stopping suddenly could be unsafe.",
    startingPoint:
      "If you have concerns about substance use, consider discussing them confidentially with a qualified healthcare professional before making changes, particularly if you may be dependent on a substance.",
  },
  {
    number: "06",
    title: "Stress management",
    summary: "Understanding stress patterns and support",
    content:
      "Stress can affect routines, attention and how people respond to demanding situations. There is no single method that suits everyone. Depending on the person and situation, options may include breathing practices, meditation, supportive conversation, changes to routines or professional care.",
    startingPoint:
      "Identify one recurring stressful situation, how you tend to respond and what kind of support might be appropriate. Severe or persistent distress deserves professional support.",
    service: { label: "Behaviour, Stress & Mind Support", href: "/services/behaviour-stress-mind" },
  },
];

const faqs = [
  {
    question: "Do I have to change all six areas at once?",
    answer:
      "No. You can identify one or two priorities to discuss first. Any changes should be realistic for your health, preferences and daily routine.",
  },
  {
    question: "Does lifestyle medicine replace medication?",
    answer:
      "No. Lifestyle support complements appropriate medical care. Do not stop or change prescribed treatment without discussing it with your treating clinician.",
  },
  {
    question: "Can these areas be relevant if I already have a medical condition?",
    answer:
      "Lifestyle questions can be discussed in the context of your condition and current treatment. Advice should reflect your circumstances and remain coordinated with your treating healthcare professional.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      name: "The Six Pillars of Lifestyle Medicine | Sutra Health",
      url: PAGE_URL,
      description: String(metadata.description),
      isPartOf: { "@type": "WebSite", name: "Sutra Health", url: `${SITE_URL}/` },
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

export default function SixPillarLifestylePage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section aria-labelledby="pillars-title" className="bg-[#173B36] text-white">
        <Container>
          <div className="py-14 sm:py-18 lg:py-24">
            <nav aria-label="Breadcrumb" className="text-sm text-white/70">
              <Link href="/services/lifestyle" className="underline underline-offset-4">Lifestyle Medicine</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page">The Six Pillars</span>
            </nav>
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8C99F] sm:text-xs">A whole-person framework</p>
            <h1 id="pillars-title" className="mt-4 max-w-4xl font-serif text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.06] tracking-[-0.04em]">
              Six areas that can shape everyday health.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
              Lifestyle medicine considers habits and circumstances that may influence health. These six areas offer a framework for discussion—not a checklist you must complete all at once. The right priorities depend on your needs and should complement appropriate medical care.
            </p>
            <Link href="/services/lifestyle" className="mt-7 inline-flex min-h-11 items-center font-semibold text-white underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">← Back to Lifestyle Medicine</Link>
          </div>
        </Container>
      </section>

      <section aria-label="The six pillars" className="bg-white">
        <Container>
          <div className="divide-y divide-[var(--sutra-border-strong)]">
            {pillars.map((pillar) => (
              <article key={pillar.number} className="grid gap-4 py-8 sm:py-10 md:grid-cols-[0.7fr_1.3fr] md:gap-10 lg:gap-16">
                <div>
                  <span className="text-sm font-semibold tracking-[0.14em] text-[var(--sutra-teal)]">{pillar.number}</span>
                  <h2 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">{pillar.title}</h2>
                  <p className="mt-2 text-base font-medium text-[var(--sutra-muted)]">{pillar.summary}</p>
                </div>
                <div>
                  <p className="text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{pillar.content}</p>
                  <p className="mt-4 text-base leading-8 sm:text-lg"><span className="font-semibold">A practical starting point: </span><span className="text-[var(--sutra-muted)]">{pillar.startingPoint}</span></p>
                  {pillar.service && (
                    <Link href={pillar.service.href} className="mt-4 inline-flex min-h-11 items-center font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                      Explore {pillar.service.label} <span className="ml-2" aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="pillars-faq-title" className="bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Common questions</p>
              <h2 id="pillars-faq-title" className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Understanding the six pillars</h2>
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

      <ContextualBookingCTA eyebrow="Choose a place to begin" title="Discuss the health priorities that matter to you." description="You do not need to work on every area at once. A consultation can help you discuss your circumstances and appropriate next steps." label="Choose an appointment time" />

      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        This information is educational and does not replace individual medical advice, diagnosis or treatment. Lifestyle changes should be considered alongside appropriate healthcare. Do not change prescribed treatment without consulting your treating healthcare professional.
      </p>
    </main>
  );
}
