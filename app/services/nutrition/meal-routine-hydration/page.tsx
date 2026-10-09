import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/nutrition/meal-routine-hydration`;
const BOOKING_URL = "/book-appointment";
const TITLE = "Meal Routines and Hydration | Sutra Health";
const DESCRIPTION =
  "How regular routines, meal timing and fluids fit into healthy eating, and why the right amount differs from person to person.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: "Sutra Health", type: "website", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/images/og-image.webp`] },
};

const factors = [
  { title: "Meals", text: "How many meals and snacks suit you depends on appetite, work hours, activity and health. There is no schedule that works for everyone." },
  { title: "Fluids", text: "Water and other non-alcoholic drinks through the day. How much you need changes with activity, weather, age and health." },
  { title: "Rest and activity", text: "Regular sleep, wake-up and activity times make meal timing easier to keep steady." },
];

const faqs = [
  {
    q: "How much water should I drink?",
    a: "It varies with weather, activity, age and health, so there is no single number for everyone. Drink regularly through the day, and follow your clinician's advice if you have been told to limit fluids.",
  },
  {
    q: "Do I need to eat at fixed times?",
    a: "Not exactly. A regular routine helps many people, but meal timing and frequency should fit your schedule, preferences and health.",
  },
  {
    q: "Do I need to drink kaada?",
    a: "No. Kaada is a traditional drink some people enjoy. It is optional and does not replace water or prescribed treatment.",
  },
];

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
        { "@type": "ListItem", position: 3, name: "Nutrition", item: `${SITE_URL}/services/nutrition` },
        { "@type": "ListItem", position: 4, name: "Meal Routines and Hydration", item: PAGE_URL },
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

export default function MealRoutineHydrationPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section aria-labelledby="page-title" className="border-b border-[var(--sutra-border)] bg-[#173B36]">
        <Container>
          <div className="max-w-4xl py-14 sm:py-18 lg:py-24">
            <nav aria-label="Breadcrumb" className="mb-7 text-sm text-white/70">
              <Link href="/" className="underline-offset-4 hover:underline">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/services" className="underline-offset-4 hover:underline">Services</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/services/nutrition" className="underline-offset-4 hover:underline">Nutrition</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">Meal Routines and Hydration</span>
            </nav>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8C99F] sm:text-xs">Nutrition guide</p>
            <h1 id="page-title" className="mt-5 max-w-4xl font-serif text-[clamp(2.6rem,5.8vw,4.8rem)] leading-[1.04] tracking-[-0.04em] text-white">
              Meal routines and hydration
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
              When you eat and drink matters alongside what you eat. A steady daily routine helps, but the right pattern differs from person to person.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={BOOKING_URL} className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[#173B36] hover:opacity-90">Book a consultation about your diet ↗</Link>
              <Link href="/services/nutrition" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 text-base font-semibold text-white hover:bg-white/10">Nutrition overview</Link>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="routine-title" className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <h2 id="routine-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">A regular routine helps</h2>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>Keeping similar times for waking, sleeping, meals and physical activity can make healthy eating easier to sustain. The routine does not need to be strict. It needs to be one you can follow most days.</p>
              <p>Meal frequency can change with your preferences, daily schedule, nutritional needs and medical advice. Some people do well with three meals, others with smaller, more frequent ones.</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="factors-title" className="border-y border-[var(--sutra-border)] bg-white/70 py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 id="factors-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">What shapes your own pattern</h2>
          </div>
          <div className="mt-7 divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
            {factors.map((factor) => (
              <article key={factor.title} className="grid gap-3 py-6 md:grid-cols-[0.6fr_1.4fr] md:gap-10">
                <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{factor.title}</h3>
                <p className="max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{factor.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="hydration-title" className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <h2 id="hydration-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Water and other drinks</h2>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>Drink water and other non-alcoholic fluids through the day rather than all at once. You may need more in hot weather or when you are active.</p>
              <p>Kaada, a traditional herbal drink, is one option if you like it. It is optional and does not replace water, prescribed treatment or specific medical advice.</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="conditions-title" className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <h2 id="conditions-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">When general advice does not apply</h2>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>If a clinician has told you to limit fluids, or you have a condition that affects fluid balance, follow that advice instead of the general guidance here. Heart, kidney and liver conditions are examples.</p>
              <p>For a nutrition consultation, it helps to note your usual meal times, daily schedule, how much you drink and any diet instructions you already follow.</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-title" className="py-10 sm:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 id="faq-title" className="font-serif text-3xl leading-tight sm:text-4xl">Routines and hydration: common questions</h2>
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

      <section aria-labelledby="related-title" className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14">
        <Container>
          <h2 id="related-title" className="font-serif text-3xl leading-tight sm:text-4xl">Related nutrition guides</h2>
          <ul className="mt-6 max-w-4xl">
            <li className="border-t border-[var(--sutra-border-strong)] py-5">
              <Link href="/services/nutrition/what-to-eat" className="font-serif text-2xl underline-offset-4 hover:underline">What to eat ↗</Link>
              <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Everyday foods grouped by type.</p>
            </li>
            <li className="border-t border-[var(--sutra-border-strong)] py-5">
              <Link href="/services/nutrition/what-to-avoid" className="font-serif text-2xl underline-offset-4 hover:underline">What to limit ↗</Link>
              <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Added sugar, salt, fried and highly processed foods.</p>
            </li>
            <li className="border-y border-[var(--sutra-border-strong)] py-5">
              <Link href="/services/nutrition" className="font-serif text-2xl underline-offset-4 hover:underline">Nutrition overview ↗</Link>
              <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Back to the main nutrition page.</p>
            </li>
          </ul>
        </Container>
      </section>

      <section className="bg-[#173B36] py-10 text-white sm:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl sm:text-4xl">Want a routine that fits your health?</h2>
            <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">Book an appointment to talk about your meals, drinks and daily schedule.</p>
            <Link href={BOOKING_URL} className="mt-6 inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[#173B36]">Book an appointment ↗</Link>
          </div>
        </Container>
      </section>

      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        This page is general education, not a personal diet plan. If you have a medical condition or a prescribed diet or fluid limit, follow your clinician's advice.
      </p>
    </main>
  );
}
