import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/nutrition`;
const BOOKING_URL = "/book-appointment";

export const metadata: Metadata = {
  title: "Nutrition Counselling in Faridabad | Sutra Health",
  description:
    "Nutrition counselling at Sutra Health in Faridabad: practical advice on what to eat, what to limit, meal routines and hydration, shaped around your health and daily life.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Nutrition Counselling in Faridabad | Sutra Health",
    description: "Practical guidance on everyday food choices and routines, shaped around your health.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

const steps = [
  { title: "Share your usual eating pattern", text: "Your meals, timings, food preferences and what you find hard." },
  { title: "Add your health context", text: "Any conditions, medicines, allergies or diet advice you already follow." },
  { title: "Agree small, practical changes", text: "Changes to foods and routines that you can keep up." },
  { title: "Review and adjust", text: "Check how it is going and change what is not working." },
];

const topics = [
  {
    title: "What to eat",
    text: "Everyday foods grouped by type: fruit and vegetables, pulses and dals, millets, protein foods and fats.",
    href: "/services/nutrition/what-to-eat",
    link: "Read what to eat",
  },
  {
    title: "What to limit",
    text: "Added sugar, salt, deep-fried and highly processed foods, and how limiting differs from avoiding.",
    href: "/services/nutrition/what-to-avoid",
    link: "Read what to limit",
  },
  {
    title: "Meal routines and hydration",
    text: "Meal timing, regular routines and why fluid needs differ from person to person.",
    href: "/services/nutrition/meal-routine-hydration",
    link: "Read about routines and hydration",
  },
];

const faqs = [
  {
    q: "Will I get a fixed diet plan?",
    a: "Not as a standard. Advice is based on your eating pattern, preferences and health, and is meant to be practical to follow.",
  },
  {
    q: "I have diabetes, kidney disease or another condition. Can I still use the guides?",
    a: "The guides are general. If you have a condition or a prescribed diet, follow your clinician's advice first and discuss any changes with them.",
  },
  {
    q: "Do I need a physician consultation first?",
    a: "Not always, but it helps if you have symptoms, a long-term condition or take regular medicines. It lets the physician check what needs attention before you change your diet.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Nutrition Counselling in Faridabad | Sutra Health",
      description: String(metadata.description),
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "Sutra Health", url: `${SITE_URL}/` },
    },
    {
      "@type": "Service",
      name: "Nutrition Counselling",
      serviceType: "Nutrition counselling",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Faridabad" },
      provider: { "@type": "Organization", name: "Sutra Health", url: `${SITE_URL}/` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Nutrition", item: PAGE_URL },
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

export default function NutritionPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* Hero: copy corrected. The previous hero was a duplicate of the Physician Consultation hero. */}
      <section
        aria-labelledby="nutrition-title"
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/diet.webp')" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#10211E]/65" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12 lg:pb-20">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/85">Nutrition counselling · Faridabad</p>

          <h1
            id="nutrition-title"
            className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.025em] text-white"
          >
            Eating well, in a way that fits your life and health.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Talk through what you eat, when you eat and what your health needs, and leave with advice you can follow.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={BOOKING_URL}
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#F7F5EF] px-6 text-base font-semibold text-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Book a consultation about your diet →
            </Link>
            <a
              href="#nutrition-guides"
              className="inline-flex min-h-12 w-full items-center justify-center border border-white/70 px-6 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Read the nutrition guides
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="nutrition-intro-title" className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div>
              <h2 id="nutrition-intro-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
                Nutrition advice starts with your own routine.
              </h2>
            </div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>Good eating is not one perfect food or one diet. It depends on what you already eat, your schedule, your preferences and your health. Nutrition counselling starts from there and aims for changes you can keep.</p>
              <p>If you have symptoms, a long-term condition or take regular medicines, a <Link href="/services/physician-consultation" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">physician consultation</Link> is a sensible first step.</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="nutrition-process-title" className="border-y border-[var(--sutra-border)] bg-white/70 py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 id="nutrition-process-title" className="font-serif text-3xl leading-tight sm:text-4xl">How a nutrition consultation works</h2>
          </div>
          <ol className="mt-7 divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
            {steps.map((step, i) => (
              <li key={step.title} className="grid gap-2 py-5 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-6">
                <span className="text-sm font-semibold tracking-[0.12em] text-[var(--sutra-teal)]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="nutrition-guides" aria-labelledby="nutrition-guides-title" className="scroll-mt-20 py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 id="nutrition-guides-title" className="font-serif text-3xl leading-tight sm:text-4xl">Nutrition guides</h2>
            <p className="mt-3 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">General information to read before or after a consultation.</p>
          </div>
          <div className="mt-7 divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
            {topics.map((topic) => (
              <article key={topic.title} className="py-6 sm:py-7">
                <h3 className="font-serif text-2xl sm:text-3xl">{topic.title}</h3>
                <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{topic.text}</p>
                <Link href={topic.href} className="mt-3 inline-flex min-h-11 items-center font-semibold text-[var(--sutra-teal)] underline underline-offset-4">
                  {topic.link} ↗
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--sutra-muted)]">
            General guidance may not suit every medical condition. Follow any prescribed diet or fluid restriction, and ask for individual advice when you need it.
          </p>
        </Container>
      </section>

      <section aria-labelledby="nutrition-faq-title" className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 id="nutrition-faq-title" className="font-serif text-3xl leading-tight sm:text-4xl">Nutrition: common questions</h2>
          </div>
          <div className="mt-6 max-w-4xl divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold leading-7 marker:content-none sm:text-lg">
                  <span>{item.q}</span>
                  <span aria-hidden="true" className="text-xl text-[var(--sutra-teal)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-3 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#173B36] py-10 text-white sm:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl sm:text-4xl">Questions about your own diet?</h2>
            <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">Book an appointment to discuss food in the context of your health and routine.</p>
            <Link href={BOOKING_URL} className="mt-6 inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[#173B36]">Book an appointment ↗</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
