import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

// Route note: the URL slug stays "what-to-avoid" to protect existing links and rankings.
// The page title and H1 say "limit" because that matches the advice.
const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/nutrition/what-to-avoid`;
const BOOKING_URL = "/book-appointment";
const TITLE = "Foods to Limit for a Healthier Diet | Sutra Health";
const DESCRIPTION =
  "Which foods to eat less often and why: added sugar, salt, deep-fried and highly processed foods. Learn the difference between limiting and avoiding.";

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
    title: "Added sugar",
    foods: "Refined white sugar, sweetened tea and other sweetened drinks, gur and khandsari.",
    note: "Gur (jaggery) and khandsari are less refined, but they are still sugar. Treat them like any other sweetener: use small amounts, not as a free swap or a remedy. People with diabetes should ask their clinician how much sweetener is suitable.",
  },
  {
    title: "Salt",
    foods: "Added salt, and salty snacks and pickles.",
    note: "Salt comes from cooking, the table and packaged foods. If you have high blood pressure, heart or kidney disease, follow the salt advice you have been given.",
  },
  {
    title: "Deep-fried foods",
    foods: "Samosa, pakoda and similar fried snacks.",
    note: "Fine now and then. The aim is to make them an occasional food rather than a daily habit. Baked, roasted or steamed versions are options.",
  },
  {
    title: "Highly processed foods",
    foods: "Chips and packaged snacks.",
    note: "These are made mainly from refined ingredients and additives. Check how often they replace meals made from simpler foods.",
  },
];

const faqs = [
  {
    q: "Do I have to avoid all of these foods?",
    a: "No. For most people the goal is to eat them less often, not to cut them out. Follow specific restrictions only if a clinician has advised them.",
  },
  {
    q: "Is jaggery better than white sugar?",
    a: "Jaggery is less refined but still adds sugar to your diet. The amount you eat matters, particularly if you have diabetes.",
  },
  {
    q: "Can I use this list if I have a medical condition?",
    a: "Use it as general information only. Conditions such as diabetes, high blood pressure and kidney disease need individual advice from your clinician.",
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
        { "@type": "ListItem", position: 4, name: "Foods to Limit", item: PAGE_URL },
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

export default function FoodsToLimitPage() {
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
              <span aria-current="page">Foods to Limit</span>
            </nav>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8C99F] sm:text-xs">Nutrition guide</p>
            <h1 id="page-title" className="mt-5 max-w-4xl font-serif text-[clamp(2.6rem,5.8vw,4.8rem)] leading-[1.04] tracking-[-0.04em] text-white">
              Foods to limit for a healthier diet
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
              Sugar, salt, fried foods and highly processed snacks are worth eating less often. This guide explains which foods and how to think about them, without strict rules.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={BOOKING_URL} className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[#173B36] hover:opacity-90">Book a consultation about your diet ↗</Link>
              <Link href="/services/nutrition" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 text-base font-semibold text-white hover:bg-white/10">Nutrition overview</Link>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="limit-vs-avoid-title" className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <h2 id="limit-vs-avoid-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Limiting is not the same as avoiding</h2>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>To limit a food is to eat it less often or in smaller amounts. To avoid it is to cut it out completely. For most people and most foods on this list, limiting is enough.</p>
              <p>Complete avoidance is usually only needed for an allergy or when a clinician has told you to. What matters most is your overall eating pattern, not one meal.</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="groups-title" className="border-y border-[var(--sutra-border)] bg-white/70 py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 id="groups-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Foods to eat less often</h2>
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
        </Container>
      </section>

      <section aria-labelledby="study-title" className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <h2 id="study-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">What research says about processed food</h2>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>
                A 2019 study in <em>Cell Metabolism</em> kept 20 adults in a research hospital for four weeks. Each person ate an ultra-processed diet for two weeks and an unprocessed diet for two weeks, in random order. On the ultra-processed diet people ate about 500 more calories a day and gained about 0.9 kg. On the unprocessed diet they lost about the same.
              </p>
              <p>
                This was a small, short study in healthy adults under controlled conditions, so it does not show what happens to every person over years. It suggests that a diet built on ultra-processed foods can lead people to eat more.{" "}
                <a href="https://www.cell.com/cell-metabolism/fulltext/S1550-4131(19)30248-7" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--sutra-teal)] underline underline-offset-4">Read the study ↗</a>
              </p>
              <p>A practical step is to notice how often packaged snacks replace meals made from simpler foods, and change that one habit first.</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-title" className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 id="faq-title" className="font-serif text-3xl leading-tight sm:text-4xl">Foods to limit: common questions</h2>
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
              <Link href="/services/nutrition/what-to-eat" className="font-serif text-2xl underline-offset-4 hover:underline">What to eat ↗</Link>
              <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Everyday foods grouped by type.</p>
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
            <h2 className="font-serif text-3xl sm:text-4xl">Need advice for your own health?</h2>
            <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">Book an appointment to talk about which changes matter most for you.</p>
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
