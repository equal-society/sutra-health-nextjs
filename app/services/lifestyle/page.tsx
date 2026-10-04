import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Lifestyle Medicine | Sutra Health",
  description:
    "Lifestyle Medicine at Sutra Health combines medical guidance with practical support for everyday health habits.",
  alternates: { canonical: `${SITE_URL}/services/lifestyle` },
  openGraph: {
    title: "Lifestyle Medicine | Sutra Health",
    description:
      "Explore lifestyle-focused support alongside appropriate medical care at Sutra Health.",
    url: `${SITE_URL}/services/lifestyle`,
    siteName: "Sutra Health",
    type: "website",
  },
};

const pillars = [
  ["01", "Healthy eating", "Practical guidance for balanced meals and everyday food choices."],
  ["02", "Physical activity", "Find safe, regular movement suited to your abilities and health needs."],
  ["03", "Restorative sleep", "Build routines that support regular, adequate rest."],
  ["04", "Positive social connections", "Consider how supportive relationships contribute to wellbeing."],
  ["05", "Minimising risky substances", "Address health risks related to tobacco, harmful alcohol use and other substances."],
  ["06", "Stress management", "Explore suitable approaches such as relaxation, breathing or mindfulness."],
];

const faqs = [
  ["Do I need to change all six areas at once?", "No. Start with one or two realistic changes based on your needs and routine."],
  ["Can Lifestyle Medicine replace medication?", "No. It complements appropriate medical care. Do not change prescribed treatment without your clinician's advice."],
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

      <section className="relative isolate flex items-end overflow-hidden bg-[#173B36]">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/lifestyle-home.webp')" }} />
        <div aria-hidden="true" className="absolute inset-0 bg-[#101C19]/55" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#101C19]/85 via-[#101C19]/55 to-[#101C19]/15" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/75">Lifestyle Medicine</p>
          <h1 className="mt-4 max-w-3xl font-serif text-[42px] leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl">
            Practical changes for better everyday health.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Medical guidance and realistic lifestyle steps, shaped around your health and routine.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/book-appointment" className="inline-flex min-h-12 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D]">Book a consultation <span className="ml-3" aria-hidden="true">→</span></Link>
            <a href="#six-pillars" className="inline-flex min-h-12 items-center border border-white/60 px-6 text-sm font-semibold text-white">Explore the six pillars</a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_0.82fr] lg:gap-14 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Our framework</p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">Six areas to guide your health plan.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--sutra-muted)]">
              The six pillars help identify useful priorities. You can begin with the changes most relevant to you.
            </p>
          </div>
          <figure className="mx-auto w-full max-w-[440px]">
            <Image src="/images/six-pillars.png" alt="Six pillars of Lifestyle Medicine: healthy eating, exercise, restorative sleep, positive social connections, minimising risky substances and stress management." width={474} height={355} sizes="(max-width: 1024px) 100vw, 40vw" className="h-auto w-full" priority />
          </figure>
        </div>
      </section>

      <section id="six-pillars" className="scroll-mt-24 border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(([number, title, description]) => (
              <article key={number} className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6">
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--sutra-sage)]">{number}</span>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{title}</h3>
                <p className="mt-2 text-base leading-7 text-[var(--sutra-muted)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Lifestyle support at Sutra Health</h2>
          <div className="max-w-3xl space-y-3 text-base leading-7 text-[var(--sutra-muted)]">
            <p>We discuss your health concerns, history and goals, and identify any necessary investigations.</p>
            <p>Based on your needs, support may include nutrition counselling, Therapeutic Yoga and a practical routine to work on and review.</p>
            <p>These services complement medical care; they do not replace diagnosis or prescribed treatment.</p>
            <Link href="/services/physician-consultation" className="inline-flex text-sm font-medium text-[var(--sutra-teal)] underline underline-offset-4">Physician consultation →</Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-pale-sage)]">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Common questions</h2>
          <div className="mt-5 border-t border-[var(--sutra-border-strong)]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-[var(--sutra-border-strong)]">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-xl leading-snug sm:text-2xl">{question}</span>
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center border border-[var(--sutra-border-strong)] text-xl text-[var(--sutra-teal)] group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pb-5 pr-10 text-base leading-7 text-[var(--sutra-muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Begin with a consultation.</h2>
            <p className="mt-2 text-base leading-7 text-white/80">Discuss a practical next step for your health.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/book-appointment" className="inline-flex min-h-12 items-center bg-white px-5 text-sm font-semibold text-[var(--sutra-teal)]">Book consultation</Link>
            <Link href="/assessment" className="inline-flex min-h-12 items-center border border-white/60 px-5 text-sm font-semibold text-white">21-Point Assessment</Link>
          </div>
        </div>
      </section>
      <p className="mx-auto max-w-7xl px-5 py-4 text-xs leading-5 text-[var(--sutra-muted)] sm:px-8 lg:px-12">General information only; not a substitute for individual medical advice, diagnosis or treatment.</p>
    </main>
  );
}
