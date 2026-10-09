import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/lifestyle/healthy-lifestyle-coaching`;

export const metadata: Metadata = {
  title: "Healthy Lifestyle Coaching | Sutra Health, Faridabad",
  description:
    "Explore practical support for building healthier daily habits through nutrition, movement, Yoga and meditation.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Healthy Lifestyle Coaching | Sutra Health",
    description:
      "Learn about lifestyle coaching and enquire about current programme options.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "article",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

const steps = [
  { title: "Understand your starting point", text: "Review your routines, priorities and relevant health needs." },
  { title: "Choose practical goals", text: "Choose a few realistic changes that fit your daily life." },
  { title: "Build routines you can maintain", text: "Build routines around food, movement, Yoga, breathing and meditation that suit your needs." },
  { title: "Review and adjust", text: "Review progress, identify barriers and adjust your goals." },
];

const supportAreas = [
  { title: "Food and nutrition", text: "Discuss food habits and nutrition needs." },
  { title: "Yoga and movement", text: "Explore suitable movement and Yoga practices." },
  { title: "Breathing and meditation", text: "Explore breathing, meditation and relaxation practices." },
  { title: "Habits and follow-through", text: "Set manageable goals and review your habits." },
  { title: "Health conversations", text: "Discuss health concerns with a qualified professional when needed." },
];

const faqs = [
  { q: "What is included in the Healthy Lifestyle Coaching Program?", a: "The earlier Life Quality page lists diet guidance, Yoga, Pranayam, meditation, habit support and health consultations. Ask Sutra Health which options are currently available." },
  { q: "Do I need to change every part of my routine at once?", a: "No. Start with one realistic change that suits your needs and circumstances." },
  { q: "Is personalised nutrition guidance included?", a: "The earlier programme description mentions personalised diet guidance. Confirm current availability with the team." },
  { q: "Does the programme include Yoga, Pranayam and meditation?", a: "The earlier page mentions these practices. Ask the team about current availability and suitability." },
  { q: "Can lifestyle coaching replace my medicines or medical treatment?", a: "No. Lifestyle coaching should complement appropriate medical care, not replace diagnosis or prescribed treatment. Do not stop or change medicines without speaking to your treating clinician." },
  { q: "Is the programme suitable if I already have a health condition?", a: "Ask the team whether coaching is suitable for your health needs. Some concerns may require clinical assessment first." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", name: "Healthy Lifestyle Coaching", url: PAGE_URL, description: String(metadata.description), provider: { "@type": "Organization", name: "Sutra Health", url: SITE_URL } },
    { "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) },
  ],
};

export default function HealthyLifestyleCoachingPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-10 sm:py-14 lg:py-16">
           
            <p className="text-sm font-semibold uppercase tracking-[0.17em] text-[var(--sutra-teal)]">Lifestyle coaching</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Turn health intentions into everyday habits.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl sm:leading-9">Practical guidance for healthier routines around food, movement and everyday life.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/book-appointment" className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-6 py-3 text-base font-semibold text-white hover:opacity-90">Enquire about coaching ↗</Link>
              <Link href="/services/lifestyle" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-6 py-3 text-base font-semibold text-[var(--sutra-teal)] hover:bg-white">Lifestyle Medicine overview</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">The purpose</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Support that focuses on what you can practise.</h2>
            </div>
            <div className="space-y-4 text-lg leading-8 text-[var(--sutra-muted)]">
              <p>Lifestyle coaching helps you choose realistic health goals, build daily routines and review what supports or gets in the way of progress.</p>
              <p>The earlier programme description includes diet guidance, Yoga, Pranayam, meditation and habit support. Confirm current services before booking.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14 lg:py-16" aria-labelledby="process-title">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">How it may work</p>
            <h2 id="process-title" className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">A practical process, not an overnight overhaul.</h2>
          </div>
          <div className="mt-7 border-t border-[var(--sutra-border-strong)]">
            {steps.map((step, i) => <article key={step.title} className="grid gap-2 border-b border-[var(--sutra-border-strong)] py-5 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-5 sm:py-6"><span className="text-sm font-semibold tracking-[0.12em] text-[var(--sutra-teal)]">{String(i + 1).padStart(2, "0")}</span><div><h3 className="font-serif text-xl leading-snug sm:text-2xl">{step.title}</h3><p className="mt-2 max-w-3xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{step.text}</p></div></article>)}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 lg:py-16" aria-labelledby="support-title">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Areas of support</p>
            <h2 id="support-title" className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">What the coaching conversation may cover</h2>
            <p className="mt-3 text-lg leading-8 text-[var(--sutra-muted)]">Support depends on your needs and current programme availability.</p>
          </div>
          <div className="mt-7 grid gap-x-10 sm:grid-cols-2">
            {supportAreas.map((area, i) => <article key={area.title} className="border-t border-[var(--sutra-border-strong)] py-5"><span className="text-sm font-semibold tracking-[0.12em] text-[var(--sutra-teal)]">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-2 font-serif text-xl sm:text-2xl">{area.title}</h3><p className="mt-2 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{area.text}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14 lg:py-16" aria-labelledby="faq-title">
        <Container>
          <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">FAQs</p><h2 id="faq-title" className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Before you enquire</h2></div>
          <div className="mt-6 max-w-4xl border-t border-[var(--sutra-border-strong)]">
            {faqs.map((item) => <details key={item.q} className="group border-b border-[var(--sutra-border-strong)]"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left marker:hidden [&::-webkit-details-marker]:hidden"><span className="font-serif text-xl leading-snug sm:text-2xl">{item.q}</span><span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--sutra-border-strong)] text-xl text-[var(--sutra-teal)] group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-6 pr-10 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{item.a}</p></details>)}
          </div>
          <p className="mt-6 max-w-4xl text-base leading-7 text-[var(--sutra-muted)]">Lifestyle coaching complements medical care; it does not replace diagnosis or treatment. Do not change prescribed medicines without medical advice.</p>
        </Container>
      </section>

     

      <section className="py-8 sm:py-10"><Container><div className="flex flex-wrap gap-x-6 gap-y-3 text-base font-semibold text-[var(--sutra-teal)]"><Link href="/services/lifestyle" className="underline-offset-4 hover:underline">← Lifestyle Medicine</Link><Link href="/services/lifestyle/daily-habits" className="underline-offset-4 hover:underline">Practical daily habits →</Link></div></Container></section>
       <section className="bg-[var(--sutra-teal)] py-10 text-white sm:py-14">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl"><h2 className="font-serif text-3xl leading-tight sm:text-4xl">Want to discuss the right next step?</h2><p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">Ask about available coaching options.</p></div>
            <Link href="/book-appointment" className="inline-flex min-h-12 shrink-0 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[var(--sutra-teal)]">Book a consultation ↗</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
