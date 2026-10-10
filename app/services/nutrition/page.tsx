import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/nutrition`;

export const metadata: Metadata = {
  title: "Nutrition Counselling in Faridabad | Sutra Health",
  description: "Explore practical nutrition counselling and guidance on food choices, foods to limit, meal routines and hydration at Sutra Health.",
  alternates: { canonical: PAGE_URL }, robots: { index: true, follow: true },
  openGraph: { title: "Nutrition Counselling | Sutra Health", description: "Practical guidance on everyday food choices and routines, shaped around individual needs.", url: PAGE_URL, siteName: "Sutra Health", type: "website", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
};
const pageSchema = { "@context": "https://schema.org", "@graph": [ { "@type": "WebPage", url: PAGE_URL, name: "Nutrition Counselling | Sutra Health", description: String(metadata.description), inLanguage: "en-IN" }, { "@type": "Service", name: "Nutrition Counselling", serviceType: "Nutrition counselling", url: PAGE_URL, areaServed: { "@type": "City", name: "Faridabad" }, provider: { "@type": "Organization", name: "Sutra Health", url: `${SITE_URL}/` } }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` }, { "@type": "ListItem", position: 3, name: "Nutrition", item: PAGE_URL }] } ] };
const topics = [
 { number: "01", title: "What to eat", text: "Explore a varied selection of familiar foods, including seasonal produce, pulses, grains and suitable protein sources.", href: "/services/nutrition/what-to-eat", link: "Read what to eat" },
 { number: "02", title: "What to limit", text: "Review the old site's guidance on added sugar, excess salt, deep-fried foods and highly processed snacks—with practical context.", href: "/services/nutrition/what-to-avoid", link: "Read what to limit" },
 { number: "03", title: "Meal routines and hydration", text: "Learn how meal timing, daily routines and fluid needs can vary from person to person.", href: "/services/nutrition/meal-routine-hydration", link: "Read about routines and hydration" },
];
export default function NutritionPage() {
 return <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
  
{/* Hero */}
      <section
        aria-labelledby="consultation-title"
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/diet.webp')" }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#10211E]/65"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12 lg:pb-20">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/85">
            Physician consultation · Faridabad
          </p>

          <h1
            id="consultation-title"
            className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.025em] text-white"
          >
            Not sure what is affecting your health or where to begin?
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
          A physician consultation gives you space to discuss your concerns, history and next steps. 
          </p>

           <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/assessment"
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#F7F5EF] px-6 text-base font-semibold text-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Book a Consultation →
            </Link>

           
          </div>

        </div>
      </section>
  
  <section className="py-10 sm:py-14 lg:py-16"><Container><div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14"><div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">A practical starting point</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Nutrition is more than one food.</h2></div><div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg"><p>Your usual meals, schedule, food preferences and health needs are useful starting points for a nutrition conversation.</p><p>Explore the focused guides below for the old site's key topics. They offer general information, not a fixed diet plan for everyone.</p></div></div></Container></section>
  <section id="nutrition-guides" className="scroll-mt-20 border-y border-[var(--sutra-border)] bg-white/70 py-10 sm:py-14 lg:py-16"><Container><div className="max-w-3xl"><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Explore the guides</p><h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Choose what you want to learn about.</h2></div><div className="mt-7 divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">{topics.map(topic => <article key={topic.number} className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-7"><span className="text-sm font-semibold tracking-[0.12em] text-[var(--sutra-teal)]">{topic.number}</span><div><h3 className="font-serif text-2xl sm:text-3xl">{topic.title}</h3><p className="mt-3 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{topic.text}</p><Link href={topic.href} className="mt-3 inline-flex font-semibold text-[var(--sutra-teal)] underline underline-offset-4">{topic.link} ↗</Link></div></article>)}</div><p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--sutra-muted)]">General guidance may not suit every medical condition. Follow any prescribed diet or fluid restriction and seek individualized advice when needed.</p></Container></section>
  <section className="bg-[#173B36] py-10 text-white sm:py-14"><Container><div className="max-w-3xl"><h2 className="font-serif text-3xl sm:text-4xl">Have questions about your own diet?</h2><p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">A consultation can help put nutrition questions in the context of your health and routine.</p><Link href="/book-appointment" className="mt-6 inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[#173B36]">Book a physician consultation ↗</Link></div></Container></section>
 </main>;
}
