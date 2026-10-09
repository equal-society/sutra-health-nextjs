import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/nutrition/what-to-eat`;

export const metadata: Metadata = {
  title: "What to Eat | Healthy Food Choices | Sutra Health",
  description: "Explore the original Life Quality dietary guide’s food suggestions, including seasonal produce, pulses, dals, millets and suitable protein sources.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: "What to Eat | Healthy Food Choices | Sutra Health", description: "Explore the original Life Quality dietary guide’s food suggestions, including seasonal produce, pulses, dals, millets and suitable protein sources.", url: PAGE_URL, siteName: "Sutra Health", type: "website", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
  twitter: { card: "summary_large_image", title: "What to Eat | Healthy Food Choices | Sutra Health", description: "Explore the original Life Quality dietary guide’s food suggestions, including seasonal produce, pulses, dals, millets and suitable protein sources.", images: [`${SITE_URL}/images/og-image.webp`] },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: "What to Eat | Healthy Food Choices | Sutra Health", description: String(metadata.description), inLanguage: "en-IN", isPartOf: { "@type": "WebSite", "name": "Sutra Health", url: `${SITE_URL}/` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Nutrition", item: `${SITE_URL}/services/nutrition` },
      { "@type": "ListItem", position: 4, name: "What to Eat", item: PAGE_URL }
    ] }
  ]
};

export default function WhattoEatPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section aria-labelledby="page-title" className="border-b border-[var(--sutra-border)] bg-[#173B36]">
        <Container><div className="max-w-4xl py-14 sm:py-18 lg:py-24">
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-white/70"><Link href="/" className="underline-offset-4 hover:underline">Home</Link><span aria-hidden="true"> / </span><Link href="/services" className="underline-offset-4 hover:underline">Services</Link><span aria-hidden="true"> / </span><Link href="/services/nutrition" className="underline-offset-4 hover:underline">Nutrition</Link><span aria-hidden="true"> / </span><span aria-current="page">What to Eat</span></nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8C99F] sm:text-xs">Nutrition · Food choices</p>
          <h1 id="page-title" className="mt-5 max-w-4xl font-serif text-[clamp(2.6rem,5.8vw,4.8rem)] leading-[1.04] tracking-[-0.04em] text-white">Build variety with familiar foods.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">The old Life Quality guide recommended a varied selection of foods, including fruit, vegetables, pulses, dals, millets and different protein sources. Use these as ideas to discuss—not as a universal meal plan.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/book-appointment" className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[#173B36] hover:opacity-90">Book a consultation ↗</Link><Link href="/services/nutrition" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 text-base font-semibold text-white hover:bg-white/10">Nutrition overview</Link></div>
        </div></Container>
      </section>

      <section className=" py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Nutrition guidance</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Food groups named in the original guide</h2></div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>The source listed fruits and natural juices, vegetables and salads, green tea, desi ghee and olive oil, gur and khandsari, pulses and dals, millets such as jowar and ragi, buttermilk, eggs and fish.</p>
              <p>You do not need to include every item. Choose foods that suit your preferences, access, culture and health needs, and aim for variety across meals where appropriate.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white/70 py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Nutrition guidance</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Make food choices personal</h2></div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>The original page noted that guidance may depend on a person’s Prakriti and health needs. In practice, recommendations can also depend on medical history, allergies, prescribed dietary requirements, budget and usual routine.</p>
              <p>No single food, oil or traditional ingredient guarantees better health. For example, ghee, olive oil, jaggery and khandsari still need to be considered in the context of the overall diet and individual requirements.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className=" py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Nutrition guidance</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Use the list as a starting point</h2></div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>Review the foods you already eat and consider whether your routine includes a suitable range of vegetables, fruit, grains, pulses and protein sources. Ask for personalized guidance if you have a condition that affects what or how much you should eat.</p>
              <p>The old site also linked to further reading: a <a href="https://www.youtube.com/watch?v=1sISguPDlhY" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">TED Talk on gut health ↗</a> and a <a href="https://zenodo.org/records/15814357" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">21-point healthy lifestyle framework on Zenodo ↗</a>. These are additional resources, not substitutes for individualized healthcare advice.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] py-10 sm:py-14"><Container><div className="max-w-3xl"><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Explore more</p><h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Related nutrition guidance</h2></div><ul className="mt-6 max-w-4xl">
            <li className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6"><Link href="/services/nutrition/what-to-avoid" className="font-serif text-2xl underline-offset-4 hover:underline">What to limit ↗</Link><p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Read the original guide’s list of foods to limit, with context.</p></li>
            <li className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6"><Link href="/services/nutrition/meal-routine-hydration" className="font-serif text-2xl underline-offset-4 hover:underline">Meal routines and hydration ↗</Link><p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Learn about meal timing, frequency and hydration.</p></li>
            <li className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6"><Link href="/services/nutrition" className="font-serif text-2xl underline-offset-4 hover:underline">Nutrition overview ↗</Link><p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Return to the main nutrition counselling page.</p></li>
          </ul><p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--sutra-muted)]">This information is general education, not a personal diet prescription. If you have a medical condition, food allergy or prescribed dietary restriction, follow advice from your qualified healthcare professional.</p></Container></section>

      <section className="py-10 sm:py-14"><Container><div className="max-w-3xl"><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Common questions</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl">Frequently asked questions</h2></div><div className="mt-6 max-w-4xl border-t border-[var(--sutra-border)]">
            <details className="border-b border-[var(--sutra-border)] py-5"><summary className="cursor-pointer list-none pr-6 font-semibold text-lg">Are these foods suitable for everyone?</summary><p className="mt-3 max-w-3xl text-base leading-7 text-[var(--sutra-muted)]">No. Suitability depends on preferences, allergies, health circumstances and prescribed dietary requirements.</p></details>
            <details className="border-b border-[var(--sutra-border)] py-5"><summary className="cursor-pointer list-none pr-6 font-semibold text-lg">Should I eat every food listed here?</summary><p className="mt-3 max-w-3xl text-base leading-7 text-[var(--sutra-muted)]">No. The list offers examples from the old site, not a required checklist or a personalized diet plan.</p></details>
            <details className="border-b border-[var(--sutra-border)] py-5"><summary className="cursor-pointer list-none pr-6 font-semibold text-lg">Can these foods treat a medical condition?</summary><p className="mt-3 max-w-3xl text-base leading-7 text-[var(--sutra-muted)]">No food list on this page is a treatment plan. Follow your clinician’s advice for any diagnosed condition or prescribed diet.</p></details>
      </div></Container></section>

      <section className="bg-[#173B36] py-10 text-white sm:py-14"><Container><div className="max-w-3xl"><h2 className="font-serif text-3xl sm:text-4xl">Need guidance for your own circumstances?</h2><p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">Discuss your food choices and health-related questions with a qualified healthcare professional.</p><Link href="/book-appointment" className="mt-6 inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[#173B36]">Book a physician consultation ↗</Link></div></Container></section>
    </main>
  );
}
