import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/nutrition/what-to-avoid`;

export const metadata: Metadata = {
  title: "Foods to Limit | Nutrition Guidance | Sutra Health",
  description: "Explore practical guidance on limiting added sugar, excess salt, deep-fried foods and highly processed snacks as part of an overall eating pattern.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: "Foods to Limit | Nutrition Guidance | Sutra Health", description: "Explore practical guidance on limiting added sugar, excess salt, deep-fried foods and highly processed snacks as part of an overall eating pattern.", url: PAGE_URL, siteName: "Sutra Health", type: "website", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
  twitter: { card: "summary_large_image", title: "Foods to Limit | Nutrition Guidance | Sutra Health", description: "Explore practical guidance on limiting added sugar, excess salt, deep-fried foods and highly processed snacks as part of an overall eating pattern.", images: [`${SITE_URL}/images/og-image.webp`] },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: "Foods to Limit | Nutrition Guidance | Sutra Health", description: String(metadata.description), inLanguage: "en-IN", isPartOf: { "@type": "WebSite", "name": "Sutra Health", url: `${SITE_URL}/` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Nutrition", item: `${SITE_URL}/services/nutrition` },
      { "@type": "ListItem", position: 4, name: "What to Limit", item: PAGE_URL }
    ] }
  ]
};

export default function WhattoLimitPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
     

          <section className="border-b border-[var(--sutra-border)] bg-white">
                    <Container>
                      <div className="max-w-4xl py-12 sm:py-16 lg:py-20">
                      
                        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Nutrition · Food choices</p>
                        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                          Foods to limit, without rigid rules.
                        </h1>
                        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
                            The Sutra Health dietary guidance highlighted refined white sugar, excess salt, deep-fried snacks, highly processed foods, commercial bread and highly sweetened tea. Consider these points in the context of your overall diet, preferences and health needs.
                        </p>
                      </div>
                    </Container>
                  </section>

      <section className=" py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Nutrition guidance</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Foods the old guide advised limiting</h2></div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>The source page listed refined white sugar, excess salt, deep-fried foods such as samosa and pakoda, ultra-processed snacks such as chips and packaged junk foods, commercial bread, and highly sweetened tea. These are the examples retained from the old Life Quality page.</p>
              <p>This list is a starting point for reviewing how often these foods appear in your routine—not a claim that every listed food must be completely avoided by every person.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white/70 py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Nutrition guidance</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Think about the overall pattern</h2></div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>The original page referred to a hospital-based study published in Cell Metabolism that examined an ultra-processed diet under specific study conditions. A study like this should be understood in context; it does not mean that one food alone determines health outcomes. <a href="https://www.cell.com/cell-metabolism/fulltext/S1550-4131(19)30248-7" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Read the Cell Metabolism study ↗</a></p>
              <p>A practical approach is to notice frequency, portion sizes and how often highly processed options replace more varied meals. Avoid turning general guidance into strict rules unless your healthcare professional has advised a specific restriction.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className=" py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Nutrition guidance</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Sweeteners and familiar foods</h2></div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>The old page also listed gur and khandsari among its recommended foods. These are still sweeteners and contribute sugars to the diet; they should not be treated as unlimited or as a treatment for a health condition.</p>
              <p>Food choices may need to be adjusted for individual circumstances, including diabetes, allergies or a prescribed diet. Discuss specific restrictions with a qualified healthcare professional.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] py-10 sm:py-14"><Container><div className="max-w-3xl"><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Explore more</p><h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Related nutrition guidance</h2></div><ul className="mt-6 max-w-4xl">
            <li className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6"><Link href="/services/nutrition/what-to-eat" className="font-serif text-2xl underline-offset-4 hover:underline">What to eat ↗</Link><p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Explore the food groups and familiar foods listed in the original dietary guidance.</p></li>
            <li className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6"><Link href="/services/nutrition/meal-routine-hydration" className="font-serif text-2xl underline-offset-4 hover:underline">Meal routines and hydration ↗</Link><p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Review meal frequency, routine and individual fluid needs.</p></li>
            <li className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6"><Link href="/services/nutrition" className="font-serif text-2xl underline-offset-4 hover:underline">Nutrition overview ↗</Link><p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Return to the main nutrition counselling page.</p></li>
          </ul><p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--sutra-muted)]">This information is general education, not a personal diet prescription. If you have a medical condition, food allergy or prescribed dietary restriction, follow advice from your qualified healthcare professional.</p></Container></section>

      <section className="py-10 sm:py-14"><Container><div className="max-w-3xl"><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Common questions</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl">Frequently asked questions</h2></div><div className="mt-6 max-w-4xl border-t border-[var(--sutra-border)]">
            <details className="border-b border-[var(--sutra-border)] py-5"><summary className="cursor-pointer list-none pr-6 font-semibold text-lg">Do I need to avoid all these foods?</summary><p className="mt-3 max-w-3xl text-base leading-7 text-[var(--sutra-muted)]">Not necessarily. The source lists foods to limit, but individual needs differ. Focus on your overall eating pattern and follow any personalized advice you have received.</p></details>
            <details className="border-b border-[var(--sutra-border)] py-5"><summary className="cursor-pointer list-none pr-6 font-semibold text-lg">Is jaggery better than white sugar?</summary><p className="mt-3 max-w-3xl text-base leading-7 text-[var(--sutra-muted)]">Jaggery and other sweeteners still contribute sugars. The amount and your individual health needs matter.</p></details>
            <details className="border-b border-[var(--sutra-border)] py-5"><summary className="cursor-pointer list-none pr-6 font-semibold text-lg">Can I follow this list for a medical condition?</summary><p className="mt-3 max-w-3xl text-base leading-7 text-[var(--sutra-muted)]">General guidance may not be appropriate for every condition. Ask your clinician or qualified nutrition professional about restrictions relevant to your health.</p></details>
      </div></Container></section>

      <section className="bg-[var(--sutra-teal)] py-10 text-white sm:py-14"><Container><div className="max-w-3xl"><h2 className="font-serif text-3xl sm:text-4xl">Need guidance for your own circumstances?</h2><p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">Discuss your food choices and health-related questions with a qualified healthcare professional.</p><Link href="/book-appointment" className="mt-6 inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[#173B36]">Book a physician consultation ↗</Link></div></Container></section>
    </main>
  );
}
