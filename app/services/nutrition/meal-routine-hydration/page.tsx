import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/nutrition/meal-routine-hydration`;

export const metadata: Metadata = {
  title: "Meal Routine and Hydration | Sutra Health",
  description: "Learn how meal frequency, daily routines and hydration needs can vary according to preferences, activity, climate, age and health circumstances.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: "Meal Routine and Hydration | Sutra Health", description: "Learn how meal frequency, daily routines and hydration needs can vary according to preferences, activity, climate, age and health circumstances.", url: PAGE_URL, siteName: "Sutra Health", type: "website", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
  twitter: { card: "summary_large_image", title: "Meal Routine and Hydration | Sutra Health", description: "Learn how meal frequency, daily routines and hydration needs can vary according to preferences, activity, climate, age and health circumstances.", images: [`${SITE_URL}/images/og-image.webp`] },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: "Meal Routine and Hydration | Sutra Health", description: String(metadata.description), inLanguage: "en-IN", isPartOf: { "@type": "WebSite", "name": "Sutra Health", url: `${SITE_URL}/` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Nutrition", item: `${SITE_URL}/services/nutrition` },
      { "@type": "ListItem", position: 4, name: "Meal Routines & Hydration", item: PAGE_URL }
    ] }
  ]
};

export default function MealRoutinesAndHydrationPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section aria-labelledby="page-title" className="border-b border-[var(--sutra-border)] bg-[#173B36]">
        <Container><div className="max-w-4xl py-14 sm:py-18 lg:py-24">
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-white/70"><Link href="/" className="underline-offset-4 hover:underline">Home</Link><span aria-hidden="true"> / </span><Link href="/services" className="underline-offset-4 hover:underline">Services</Link><span aria-hidden="true"> / </span><Link href="/services/nutrition" className="underline-offset-4 hover:underline">Nutrition</Link><span aria-hidden="true"> / </span><span aria-current="page">Meal Routines & Hydration</span></nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8C99F] sm:text-xs">Nutrition · Everyday routines</p>
          <h1 id="page-title" className="mt-5 max-w-4xl font-serif text-[clamp(2.6rem,5.8vw,4.8rem)] leading-[1.04] tracking-[-0.04em] text-white">Find a routine that fits your day.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">The original Life Quality page recommended regular routines for sleep, waking, meals and physical activity, while noting that meal frequency and fluid needs vary by person.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/book-appointment" className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[#173B36] hover:opacity-90">Book a consultation ↗</Link><Link href="/services/nutrition" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 text-base font-semibold text-white hover:bg-white/10">Nutrition overview</Link></div>
        </div></Container>
      </section>

      <section className=" py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Nutrition guidance</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Meal timing and frequency</h2></div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>The source recommends considering consistent sleep, waking and meal timings. It also says meal frequency can be adjusted according to individual preferences, routine, nutritional needs and medical advice.</p>
              <p>There is no single meal schedule that works for everyone. Work hours, appetite, activity and health needs may influence what is practical for you.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white/70 py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Nutrition guidance</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Hydration and fluids</h2></div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>The old guide recommends drinking water and suitable non-alcoholic fluids throughout the day. It notes that fluid requirements can vary with activity, climate, age and health circumstances.</p>
              <p>Traditional beverages such as kaada were mentioned as options according to preference and suitability. They are not necessary for everyone and should not replace prescribed treatment or specific medical advice.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className=" py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Nutrition guidance</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Keep the advice relevant to your health</h2></div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>If you have been advised to restrict fluids, or have a condition affecting fluid balance, follow your healthcare professional’s instructions rather than general hydration guidance.</p>
              <p>For a nutrition conversation, note your usual meal times, daily schedule, fluid habits and any dietary instructions you already follow.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] py-10 sm:py-14"><Container><div className="max-w-3xl"><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Explore more</p><h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Related nutrition guidance</h2></div><ul className="mt-6 max-w-4xl">
            <li className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6"><Link href="/services/nutrition/what-to-eat" className="font-serif text-2xl underline-offset-4 hover:underline">What to eat ↗</Link><p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Explore the food groups and examples in the original guide.</p></li>
            <li className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6"><Link href="/services/nutrition/what-to-avoid" className="font-serif text-2xl underline-offset-4 hover:underline">What to limit ↗</Link><p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Review foods the old guide advised limiting.</p></li>
            <li className="border-t border-[var(--sutra-border-strong)] py-5 sm:py-6"><Link href="/services/nutrition" className="font-serif text-2xl underline-offset-4 hover:underline">Nutrition overview ↗</Link><p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Return to the main nutrition counselling page.</p></li>
          </ul><p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--sutra-muted)]">This information is general education, not a personal diet prescription. If you have a medical condition, food allergy or prescribed dietary restriction, follow advice from your qualified healthcare professional.</p></Container></section>

      <section className="py-10 sm:py-14"><Container><div className="max-w-3xl"><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Common questions</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl">Frequently asked questions</h2></div><div className="mt-6 max-w-4xl border-t border-[var(--sutra-border)]">
            <details className="border-b border-[var(--sutra-border)] py-5"><summary className="cursor-pointer list-none pr-6 font-semibold text-lg">How much water should I drink?</summary><p className="mt-3 max-w-3xl text-base leading-7 text-[var(--sutra-muted)]">Fluid needs vary with weather, activity and health. Follow personalized advice if you have a condition or have been told to restrict fluids.</p></details>
            <details className="border-b border-[var(--sutra-border)] py-5"><summary className="cursor-pointer list-none pr-6 font-semibold text-lg">Do I need to eat at fixed times?</summary><p className="mt-3 max-w-3xl text-base leading-7 text-[var(--sutra-muted)]">A consistent routine may help some people, but meal timing and frequency should fit your schedule, preferences and health needs.</p></details>
            <details className="border-b border-[var(--sutra-border)] py-5"><summary className="cursor-pointer list-none pr-6 font-semibold text-lg">Is kaada required for healthy hydration?</summary><p className="mt-3 max-w-3xl text-base leading-7 text-[var(--sutra-muted)]">No. The old guide mentioned traditional beverages as an option when suitable, not as a requirement.</p></details>
      </div></Container></section>

      <section className="bg-[#173B36] py-10 text-white sm:py-14"><Container><div className="max-w-3xl"><h2 className="font-serif text-3xl sm:text-4xl">Need guidance for your own circumstances?</h2><p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">Discuss your food choices and health-related questions with a qualified healthcare professional.</p><Link href="/book-appointment" className="mt-6 inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[#173B36]">Book a physician consultation ↗</Link></div></Container></section>
    </main>
  );
}
