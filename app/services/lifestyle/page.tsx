import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Lifestyle Medicine | Sutra Health",
  description:
    "Explore lifestyle medicine at Sutra Health: practical support for food, movement, sleep, stress and everyday habits alongside appropriate healthcare.",
  alternates: { canonical: `${SITE_URL}/services/lifestyle` },
  openGraph: {
    title: "Lifestyle Medicine | Sutra Health",
    description:
      "Practical support for everyday health habits, guided by individual needs.",
    url: `${SITE_URL}/services/lifestyle`,
    siteName: "Sutra Health",
    type: "website",
  },
};

const pillars = [
  ["01", "Healthy eating", "Food choices and meal patterns that suit your needs and circumstances."],
  ["02", "Physical activity", "Suitable movement, walking or guided practice, adapted to your abilities."],
  ["03", "Restorative sleep", "Sleep patterns and routines around rest."],
  ["04", "Positive social connections", "Supportive relationships and connection with others."],
  ["05", "Minimising risky substances", "Awareness and appropriate support around tobacco, harmful alcohol use and other substances."],
  ["06", "Stress management", "Suitable breathing, meditation or relaxation practices."],
];

const faqs = [
  [
    "Do I need to work on all six areas?",
    "No. Priorities can be chosen gradually according to your health needs, preferences and daily circumstances.",
  ],
  [
    "Does lifestyle medicine replace medical treatment?",
    "No. Lifestyle support is complementary to appropriate medical care. Do not stop or change prescribed treatment without speaking with your treating clinician.",
  ],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      name: "Lifestyle Medicine",
      url: `${SITE_URL}/services/lifestyle`,
      description: metadata.description,
      isPartOf: { "@type": "WebSite", name: "Sutra Health", url: SITE_URL },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function LifestyleMedicinePage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/lifestyle-home.webp')" }} />
        <div aria-hidden="true" className="absolute inset-0 bg-[#101C19]/60" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#101C19]/80 via-[#101C19]/45 to-[#101C19]/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/80">Lifestyle Medicine</p>
          <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.03em] text-white">
            Practical changes for better everyday health.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Build practical health routines through personalised guidance on food, Yoga, Pranayam, Meditation and everyday habits.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/book-appointment" className="inline-flex min-h-12 w-full items-center justify-center bg-[#F7F5EF] px-6 text-base font-semibold text-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto">
              Request an appointment <span className="ml-3" aria-hidden="true">→</span>
            </Link>
            <a href="#six-pillars" className="inline-flex min-h-12 w-full items-center justify-center border border-white/70 px-6 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto">
              View the six pillars
            </a>
          </div>
        </div>
      </section>

      <section id="six-pillars" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-12">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.72fr] lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">A practical framework</p>
              <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">Six pillars of lifestyle medicine</h2>
            </div>
            <figure className="mx-auto w-full max-w-[400px]">
              <Image src="/images/six-pillars.png" alt="Six lifestyle medicine pillars: healthy eating, physical activity, restorative sleep, social connection, minimising risky substances and stress management." width={474} height={355} sizes="(max-width: 1024px) 100vw, 36vw" className="h-auto w-full" />
            </figure>
          </div>
          <div className="mt-7 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(([number, title, description]) => (
              <article key={number} className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6">
                <span className="text-sm font-semibold tracking-[0.14em] text-[var(--sutra-sage)]">{number}</span>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{title}</h3>
                <p className="mt-2 text-lg leading-8 text-[var(--sutra-muted)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Lifestyle support at Life Quality</h2>
          <div className="max-w-3xl text-lg leading-8 text-[var(--sutra-muted)]">
            <p>
              The Healthy Lifestyle Coaching Program brings together personalised food guidance, Yoga, Pranayam, Meditation, habit-tracking tools and health consultations. Start with realistic goals, build routines that fit daily life, and review selected habits over time.
            </p>
            <nav aria-label="Related services" className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/services/physician-consultation" className="inline-flex min-h-11 items-center text-base font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Physician consultation →</Link>
              <Link href="/services/nutrition" className="inline-flex min-h-11 items-center text-base font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Nutrition →</Link>
              <Link href="/services/therapeutic-yoga" className="inline-flex min-h-11 items-center text-base font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Therapeutic Yoga →</Link>
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-pale-sage)]">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-12">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Common questions</h2>
          <div className="mt-5 border-t border-[var(--sutra-border-strong)]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-[var(--sutra-border-strong)]">
                <summary className="flex min-h-12 cursor-pointer list-none items-start justify-between gap-4 py-5 marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-xl leading-snug sm:text-2xl">{question}</span>
                  <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center border border-[var(--sutra-border-strong)] text-xl text-[var(--sutra-teal)] group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pb-5 pr-2 text-lg leading-8 text-[var(--sutra-muted)] sm:pr-10">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Start with your everyday health habits</h2>
            <p className="mt-2 text-lg leading-8 text-white/90">The 21-Point Assessment can help you prepare for a conversation about your health and lifestyle priorities.</p>
          </div>
          <div className="w-full sm:w-auto">
            <Link href="/assessment" className="inline-flex min-h-12 w-full items-center justify-center border border-white/70 px-5 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto">Explore the assessment</Link>
          </div>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-4 py-4 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        General information only; not a substitute for individual medical advice, diagnosis or treatment.
      </p>
    </main>
  );
}
