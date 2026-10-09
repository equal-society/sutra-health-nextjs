import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/nutrition/what-to-eat`;
const BOOKING_URL = "/book-appointment";
const TITLE = "What to Eat for a Healthy Diet | Sutra Health";
const DESCRIPTION =
  "Everyday foods to include in a healthy diet, grouped by type: fruit, vegetables, pulses and dals, millets, protein foods, fats and drinks. Includes notes on individual needs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: "Sutra Health", type: "website", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/images/og-image.webp`] },
};

const groups = [
  {
    title: "Fruit and vegetables",
    foods: "Seasonal fruit, vegetables and salads.",
    note: "Eat a mix of colours and types through the week. Whole fruit is usually simpler than juice, because juice makes it easy to take in more sugar. If you have diabetes, ask how much fruit suits you.",
  },
  {
    title: "Pulses and dals",
    foods: "Dals, beans and other pulses.",
    note: "A familiar source of protein and fibre. Some people find certain pulses cause gas or bloating, so portion size and preparation matter.",
  },
  {
    title: "Millets and whole grains",
    foods: "Millets such as jowar and ragi.",
    note: "These can add variety to the grains you already eat. Introduce them gradually if they are new to you.",
  },
  {
    title: "Protein foods",
    foods: "Eggs, fish, pulses and dals.",
    note: "Choose what suits your preferences, culture and diet. Vegetarian diets can meet protein needs with pulses, dals and dairy. People with kidney disease may need to limit protein and should follow their clinician's advice.",
  },
  {
    title: "Dairy and fermented foods",
    foods: "Buttermilk.",
    note: "A common, light drink. Choose it unsweetened and plain.",
  },
  {
    title: "Cooking fats",
    foods: "Desi ghee and olive oil.",
    note: "Both are high in energy, so the amount matters more than the type. Ask your clinician about fats if you have heart disease, high cholesterol or are trying to manage your weight.",
  },
  {
    title: "Drinks",
    foods: "Water, buttermilk and green tea.",
    note: "Have tea and other drinks without sugar where you can. See the hydration guide for more on fluids.",
  },
];

const faqs = [
  {
    q: "Should I eat everything on this list?",
    a: "No. These are examples, not a checklist. Choose what suits your taste, budget, culture and health.",
  },
  {
    q: "Are these foods safe for everyone?",
    a: "No. Allergies, medical conditions and prescribed diets can change what is suitable. Follow your clinician's advice if you have any of these.",
  },
  {
    q: "Can these foods treat a medical condition?",
    a: "No. Food supports health but is not a treatment on its own. Follow your clinician's advice for any diagnosed condition.",
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
        { "@type": "ListItem", position: 4, name: "What to Eat", item: PAGE_URL },
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

export default function WhatToEatPage() {
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
              <span aria-current="page">What to Eat</span>
            </nav>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8C99F] sm:text-xs">Nutrition guide</p>
            <h1 id="page-title" className="mt-5 max-w-4xl font-serif text-[clamp(2.6rem,5.8vw,4.8rem)] leading-[1.04] tracking-[-0.04em] text-white">
              What to eat for a healthy diet
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
              Build variety around familiar foods: fruit, vegetables, pulses, millets and a sensible mix of protein. Use these groups as ideas, not as a fixed meal plan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={BOOKING_URL} className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[#173B36] hover:opacity-90">Book a consultation about your diet ↗</Link>
              <Link href="/services/nutrition" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 text-base font-semibold text-white hover:bg-white/10">Nutrition overview</Link>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="how-to-use-title" className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <h2 id="how-to-use-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">How to use this list</h2>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>You do not need every food here. Pick the ones that suit your preferences, budget, culture and health, and aim for variety across the week.</p>
              <p>Needs differ. Allergies, diabetes, kidney disease, heart conditions and prescribed diets can all change what is right for you. No single food, oil or traditional ingredient guarantees good health.</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="groups-title" className="border-y border-[var(--sutra-border)] bg-white/70 py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 id="groups-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Foods to include, by type</h2>
          </div>
          <div className="mt-7 divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
            {groups.map((group) => (
              <article key={group.title} className="grid gap-3 py-6 md:grid-cols-[0.6fr_1.4fr] md:gap-10 sm:py-7">
                <div>
                  <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{group.title}</h3>
                  <p className="mt-2 text-base font-medium text-[var(--sutra-muted)]">{group.foods}</p>
                </div>
                <p className="max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{group.note}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)]">
            Looking for sweeteners such as gur and khandsari? They are covered in{" "}
            <Link href="/services/nutrition/what-to-avoid" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">foods to limit</Link>.
          </p>
        </Container>
      </section>

      <section aria-labelledby="resources-title" className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <h2 id="resources-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Further reading</h2>
            <div className="max-w-3xl space-y-3 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>
                <a href="https://www.youtube.com/watch?v=1sISguPDlhY" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">A TED talk on gut health ↗</a>
              </p>
              <p>
                <a href="https://zenodo.org/records/15814357" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">A 21-point healthy lifestyle framework on Zenodo ↗</a>
              </p>
              <p className="text-sm leading-7">These are general resources. They do not replace advice for your own health.</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-title" className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 id="faq-title" className="font-serif text-3xl leading-tight sm:text-4xl">What to eat: common questions</h2>
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

      <section aria-labelledby="related-title" className="py-10 sm:py-14">
        <Container>
          <h2 id="related-title" className="font-serif text-3xl leading-tight sm:text-4xl">Related nutrition guides</h2>
          <ul className="mt-6 max-w-4xl">
            <li className="border-t border-[var(--sutra-border-strong)] py-5">
              <Link href="/services/nutrition/what-to-avoid" className="font-serif text-2xl underline-offset-4 hover:underline">What to limit ↗</Link>
              <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Added sugar, salt, fried and highly processed foods.</p>
            </li>
            <li className="border-t border-[var(--sutra-border-strong)] py-5">
              <Link href="/services/nutrition/meal-routine-hydration" className="font-serif text-2xl underline-offset-4 hover:underline">Meal routines and hydration ↗</Link>
              <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Meal timing, daily routine and fluids.</p>
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
            <h2 className="font-serif text-3xl sm:text-4xl">Want advice that fits your own health?</h2>
            <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">Book an appointment to talk through your meals and any health conditions.</p>
            <Link href={BOOKING_URL} className="mt-6 inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[#173B36]">Book an appointment ↗</Link>
          </div>
        </Container>
      </section>

      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        This page is general education, not a personal diet plan. If you have a medical condition, a food allergy or a prescribed diet, follow your clinician's advice.
      </p>
    </main>
  );
}
