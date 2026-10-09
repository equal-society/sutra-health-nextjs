import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/lifestyle/daily-habits`;
const BOOKING_URL = "/book-appointment";

export const metadata: Metadata = {
  title: "Daily Health Habits: Small Changes to Try | Sutra Health",
  description:
    "Six small daily habits for food, movement, sleep, stress and support. Pick one, make it specific and build from there.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Daily Health Habits: Small Changes to Try | Sutra Health",
    description: "Six small actions for healthier everyday routines, one step at a time.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "article",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

const habits = [
  {
    title: "Plan one balanced meal",
    text: "Build a meal around a mix of vegetables, a pulse or other protein and a grain you already enjoy.",
    try: "Decide tomorrow's lunch tonight.",
  },
  {
    title: "Add a movement break",
    text: "Short walks or stretches are easier to keep than a big exercise plan.",
    try: "Stand up and move for a few minutes after sitting for an hour.",
  },
  {
    title: "Set a sleep anchor",
    text: "A regular wake-up time gives your body a steadier rhythm.",
    try: "Choose a wake-up time you can keep most days, including weekends.",
  },
  {
    title: "Take a short pause",
    text: "A few slow breaths between tasks can take the edge off a busy day.",
    try: "Breathe slowly for one minute before your next task.",
  },
  {
    title: "Attach a new habit to an old one",
    text: "A habit tied to something you already do is easier to remember.",
    try: "Stretch after brushing your teeth, or prepare tomorrow's bag after dinner.",
  },
  {
    title: "Reach out",
    text: "Support helps, whether from a person you trust or a health professional.",
    try: "Message someone you trust, or write down one question for your next appointment.",
  },
];

const keepGoing = [
  { title: "Pick one action", text: "Decide exactly what you will do and when." },
  { title: "Make it easy", text: "Fit it into a routine you already have." },
  { title: "Review and adjust", text: "After a week, keep it, shrink it or swap it." },
];

const faqs = [
  {
    q: "Which habit should I start with?",
    a: "Choose the one that feels most useful and easiest to repeat. Practise it for a week or two before adding another.",
  },
  {
    q: "How do I track a new habit?",
    a: "A simple tick list is enough. Note what helped and what got in the way. A missed day is information, not failure.",
  },
  {
    q: "Can daily habits replace medical treatment?",
    a: "No. Good routines support health but do not replace assessment or prescribed treatment. Speak to your clinician before changes that could affect a condition or medicine.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      name: "Daily Health Habits: Small Changes to Try | Sutra Health",
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
        { "@type": "ListItem", position: 4, name: "Daily Habits", item: PAGE_URL },
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

export default function DailyHabitsPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-10 sm:py-14 lg:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--sutra-muted)]">
              <Link href="/services/lifestyle" className="underline underline-offset-4">Lifestyle Medicine</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page">Daily Habits</span>
            </nav>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.17em] text-[var(--sutra-teal)]">Everyday wellbeing</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Daily health habits: six small changes to try
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl sm:leading-9">
              Pick one, make it specific and repeat it. You do not need to overhaul your routine.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={BOOKING_URL} className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-6 py-3 text-base font-semibold text-white hover:opacity-90">
                Book a consultation ↗
              </Link>
              <Link href="/services/lifestyle/six-pillar" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-6 py-3 text-base font-semibold text-[var(--sutra-teal)] hover:bg-[var(--sutra-porcelain)]">
                Why these areas matter
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 lg:py-16" aria-labelledby="habits-title">
        <Container>
          <div className="max-w-3xl">
            <h2 id="habits-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Six places to begin</h2>
            <p className="mt-3 text-lg leading-8 text-[var(--sutra-muted)]">
              These are starting points, not rules. Your health and circumstances may call for something different.
            </p>
          </div>
          <div className="mt-7 border-t border-[var(--sutra-border-strong)]">
            {habits.map((habit) => (
              <article key={habit.title} className="border-b border-[var(--sutra-border-strong)] py-6 sm:py-7">
                <h3 className="font-serif text-xl leading-snug sm:text-2xl">{habit.title}</h3>
                <p className="mt-2 max-w-3xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{habit.text}</p>
                <p className="mt-3 text-base leading-7 sm:text-lg"><span className="font-semibold">Try this: </span><span className="text-[var(--sutra-muted)]">{habit.try}</span></p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14 lg:py-16" aria-labelledby="keep-going-title">
        <Container>
          <div className="max-w-3xl">
            <h2 id="keep-going-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">How to keep going</h2>
          </div>
          <ol className="mt-6 grid gap-6 sm:grid-cols-3">
            {keepGoing.map((item, index) => (
              <li key={item.title} className="border-t border-[var(--sutra-border-strong)] py-5">
                <span className="text-sm font-semibold tracking-[0.12em] text-[var(--sutra-teal)]">0{index + 1}</span>
                <h3 className="mt-2 font-serif text-xl sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-10 sm:py-14 lg:py-16" aria-labelledby="faq-title">
        <Container>
          <div className="max-w-3xl">
            <h2 id="faq-title" className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Daily habits: common questions</h2>
          </div>
          <div className="mt-6 max-w-4xl border-t border-[var(--sutra-border-strong)]">
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-[var(--sutra-border-strong)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-xl leading-snug sm:text-2xl">{item.q}</span>
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--sutra-border-strong)] text-xl text-[var(--sutra-teal)] group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pb-6 pr-10 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-base leading-7 text-[var(--sutra-muted)]">
            This is general information, not individual medical advice. If you have a health condition, check with a qualified professional which changes suit you.
          </p>
        </Container>
      </section>

      <section className="border-t border-[var(--sutra-border)] bg-white py-8 sm:py-10">
        <Container>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-base font-semibold text-[var(--sutra-teal)]">
            <Link href="/services/lifestyle" className="underline-offset-4 hover:underline">← Lifestyle Medicine</Link>
            <Link href="/services/lifestyle/six-pillar" className="underline-offset-4 hover:underline">The six pillars →</Link>
            <Link href="/services/lifestyle/healthy-lifestyle-coaching" className="underline-offset-4 hover:underline">Healthy lifestyle coaching →</Link>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--sutra-teal)] py-10 text-white sm:py-14">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Want help choosing your first habit?</h2>
              <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">A consultation can help you pick a change that suits your health and routine.</p>
            </div>
            <Link href={BOOKING_URL} className="inline-flex min-h-12 shrink-0 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[var(--sutra-teal)]">
              Book an appointment ↗
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
