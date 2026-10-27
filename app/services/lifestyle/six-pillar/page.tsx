import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import ContextualBookingCTA from "@/components/shared/ContextualBookingCTA";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/lifestyle/six-pillar`;

export const metadata: Metadata = {
  title: { absolute: "The Six Pillars of Lifestyle Medicine | Sutra Health" },
  description:
    "The six areas lifestyle medicine covers: eating, activity, sleep, social connection, risky substances and stress. What each means and where to start.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "The Six Pillars of Lifestyle Medicine | Sutra Health",
    description:
      "What the six pillars of lifestyle medicine are, how they relate to everyday health and where to begin.",
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
    summary: "What and how you eat",
    content:
      "Food is shaped by culture, budget, access, preferences and health needs. There is no single diet that suits everyone. The aim is to eat a good variety of foods and to adjust your usual meals in ways you can keep up.",
    startingPoint: "Look at a typical day of meals and pick one realistic way to add variety.",
    service: { label: "Nutrition", href: "/services/nutrition" },
  },
  {
    number: "02",
    title: "Physical activity",
    summary: "Movement that fits your day",
    content:
      "Movement can be walking, daily chores, mobility work or structured exercise. The right type and amount depend on your health, mobility and routine. Doing a little regularly usually beats an ambitious plan you drop.",
    startingPoint: "Notice where movement already fits into your day and choose one manageable addition.",
    service: { label: "Therapeutic Yoga", href: "/services/therapeutic-yoga" },
  },
  {
    number: "03",
    title: "Restorative sleep",
    summary: "Routines that make room for rest",
    content:
      "Regular sleep and wake times and a calm wind-down can help. Work, caring duties, pain and other factors also affect sleep. Sleep problems that last or affect your day need a medical review.",
    startingPoint: "Note your usual sleep and wake times and what interrupts rest.",
    service: { label: "Physician Consultation", href: "/services/physician-consultation" },
  },
  {
    number: "04",
    title: "Positive social connection",
    summary: "Supportive relationships",
    content:
      "Support can come from family, friends, peers or a community. People need different amounts of company. The useful question is whether you have the support you value.",
    startingPoint: "Think about who you can turn to, or one activity where you would like to meet people.",
  },
  {
    number: "05",
    title: "Avoiding risky substances",
    summary: "Tobacco, alcohol and other substances",
    content:
      "Tobacco, alcohol and other substances can harm health. The right support depends on the substance, how much and how often it is used, and your health. Stopping suddenly can be unsafe for some people.",
    startingPoint:
      "If you are worried about your use, talk to a healthcare professional in confidence before making changes, especially if you may be dependent.",
  },
  {
    number: "06",
    title: "Stress management",
    summary: "Understanding stress and getting support",
    content:
      "Stress affects routines, attention and how we handle demands. No single method suits everyone. Options include breathing practices, meditation, talking to someone, changing routines, or professional care.",
    startingPoint:
      "Pick one situation that regularly stresses you and note how you respond. Severe or lasting distress needs professional support.",
    service: { label: "Behaviour, Stress & Mind Support", href: "/services/behaviour-stress-mind" },
  },
];

const faqs = [
  {
    question: "Do I have to change all six areas at once?",
    answer: "No. Pick one or two to discuss first and keep the changes realistic for your health and routine.",
  },
  {
    question: "Does lifestyle medicine replace medication?",
    answer:
      "No. It works alongside medical care. Do not stop or change prescribed treatment without speaking to your treating clinician.",
  },
  {
    question: "Do these areas matter if I already have a medical condition?",
    answer:
      "Yes, they can be discussed in the context of your condition and treatment. Any advice should fit your situation and stay in step with your treating clinician.",
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
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "Sutra Health", url: `${SITE_URL}/` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Lifestyle Medicine", item: `${SITE_URL}/services/lifestyle` },
        { "@type": "ListItem", position: 4, name: "The Six Pillars", item: PAGE_URL },
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

export default function SixPillarLifestylePage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

             <section className="relative overflow-hidden border-b border-[var(--sutra-border)] bg-[#18332F] text-white">
  <video
    aria-hidden="true"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/images/six-pillars.webp"
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/videos/services/hero.mp4" type="video/mp4" />
  </video>

  <div
    aria-hidden="true"
    className="absolute inset-0 bg-[#10201C]/45"
  />



  <Container>
    <div className="relative z-10 max-w-5xl py-20 sm:py-24 lg:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Lifestyle Medicine framework</p>
      <h1 className="mt-4 max-w-5xl font-serif text-5xl leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
        The six pillars of lifestyle medicine
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
        Lifestyle medicine looks at six everyday areas that can affect health. They are a guide for a conversation, not a checklist to finish. Your priorities depend on your needs, and the work sits alongside medical care.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/book-appointment"
          className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[#F7F5EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Book a consultation ↗
        </Link>

        <Link
          href="/services/lifestyle"
          className="inline-flex min-h-12 items-center justify-center border border-white/75 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Back to Lifestyle
        </Link>
      </div>
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
                  <p className="mt-4 text-base leading-8 sm:text-lg"><span className="font-semibold">Where to start: </span><span className="text-[var(--sutra-muted)]">{pillar.startingPoint}</span></p>
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

      <section aria-labelledby="pillars-next-title" className="bg-[var(--sutra-porcelain)]">
        <Container>
          <div className="py-12 sm:py-14">
            <h2 id="pillars-next-title" className="font-serif text-2xl leading-tight sm:text-3xl">Ready to act on one of these?</h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <Link href="/services/lifestyle/daily-habits" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">See daily habit ideas</Link> for small first steps, or{" "}
              <Link href="/services/lifestyle/healthy-lifestyle-coaching" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">learn about lifestyle coaching</Link> for ongoing support.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="pillars-faq-title" className="bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Common questions</p>
              <h2 id="pillars-faq-title" className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">About the six pillars</h2>
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
        eyebrow="Choose a place to begin"
        title="Discuss which area matters most for you."
        description="You do not need to work on all six. A consultation can help you choose where to start."
        label="Book an appointment"
      />

      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        This page is general information, not medical advice, diagnosis or treatment. Do not change prescribed treatment without speaking to your treating clinician.
      </p>
    </main>
  );
}
