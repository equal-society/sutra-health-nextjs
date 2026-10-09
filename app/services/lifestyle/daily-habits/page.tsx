import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/lifestyle/daily-habits`;

export const metadata: Metadata = {
  title: "Daily Habits for Better Health | Sutra Health",
  description:
    "Explore practical daily habits for food, movement, sleep, stress and routines. Start with small changes that fit your everyday life.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Daily Habits for Better Health | Sutra Health",
    description:
      "Simple, practical ways to build healthier everyday routines, one manageable step at a time.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "article",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

const habits = [
  {
    number: "01",
    title: "Make everyday food choices more balanced",
    text: "Build regular meals around a variety of nourishing foods. Notice your usual patterns and choose one realistic improvement instead of changing everything at once.",
    try: "Plan one balanced meal for tomorrow.",
  },
  {
    number: "02",
    title: "Make movement part of your day",
    text: "Look for opportunities to move in ways that suit your ability and routine. Short walks, movement breaks or suitable exercises can be easier to maintain than an ambitious plan.",
    try: "Add a short movement break to a part of the day when you usually sit for long periods.",
  },
  {
    number: "03",
    title: "Keep a regular sleep routine",
    text: "A consistent sleep and wake schedule can help create a steadier routine. Make time to wind down and consider which evening habits may be getting in the way of rest.",
    try: "Choose a realistic time to begin winding down tonight.",
  },
  {
    number: "04",
    title: "Make room for pauses and stress relief",
    text: "Brief pauses, slow breathing or meditation may help you respond to everyday stress. Choose a practice that feels comfortable and fits your circumstances.",
    try: "Take a few quiet minutes between two tasks today.",
  },
  {
    number: "05",
    title: "Build routines that are easy to repeat",
    text: "Connect a new habit to something you already do, such as stretching after getting up or preparing for the next day after dinner. Keep the first step small enough to repeat.",
    try: "Attach one small new habit to an established part of your day.",
  },
  {
    number: "06",
    title: "Stay connected and ask for support",
    text: "Make time for supportive relationships and speak with a suitable health professional when you need help understanding a health concern or making a change safely.",
    try: "Reach out to someone supportive or write down one question for your next health appointment.",
  },
];

const faqs = [
  {
    q: "Which daily habit should I start with?",
    a: "Start with one change that feels useful and realistic for your routine. Choose something specific, then review how it fits before adding another change.",
  },
  {
    q: "Do I need to change all my habits at once?",
    a: "No. Small, manageable changes are often easier to practise consistently. Adjust the plan to your circumstances and build gradually.",
  },
  {
    q: "How can I keep track of a new habit?",
    a: "Use a simple note or tick list to record whether you practised it. Review what helped and what made it difficult, without treating an occasional missed day as failure.",
  },
  {
    q: "Can daily habits replace medical treatment?",
    a: "No. Healthy routines can support wellbeing but do not replace medical assessment or prescribed treatment. Speak with your treating clinician before making changes that could affect a health condition or medication.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Daily Habits for Better Health",
      url: PAGE_URL,
      description: String(metadata.description),
      isPartOf: { "@type": "WebSite", name: "Sutra Health", url: SITE_URL },
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
           
            <p className="text-sm font-semibold uppercase tracking-[0.17em] text-[var(--sutra-teal)]">Everyday wellbeing</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Small daily habits. A steadier approach to health.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl sm:leading-9">
              Practical ideas for food, movement, sleep and stress—starting with changes that fit your life.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/book-appointment" className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-6 py-3 text-base font-semibold text-white hover:opacity-90">
                Book a consultation ↗
              </Link>
              <Link href="/services/lifestyle/six-pillar" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-6 py-3 text-base font-semibold text-[var(--sutra-teal)] hover:bg-[var(--sutra-porcelain)]">
                Explore the six pillars
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 lg:py-16" aria-labelledby="start-title">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Start where you are</p>
              <h2 id="start-title" className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
                Choose one change you can repeat.
              </h2>
            </div>
            <div className="space-y-3 text-lg leading-8 text-[var(--sutra-muted)]">
              <p>Healthy routines do not need to begin with a complete lifestyle overhaul. Pick one action, make it specific and practise it in a way that suits your day.</p>
              <p>Use the ideas below as starting points, not strict rules. Your needs, abilities and health circumstances may call for a different approach.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14 lg:py-16" aria-labelledby="habits-title">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Everyday ideas</p>
            <h2 id="habits-title" className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
              Six places to begin
            </h2>
          </div>
          <div className="mt-7 border-t border-[var(--sutra-border-strong)]">
            {habits.map((habit) => (
              <article key={habit.number} className="grid gap-3 border-b border-[var(--sutra-border-strong)] py-6 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-5 sm:py-7">
                <span className="text-sm font-semibold tracking-[0.12em] text-[var(--sutra-teal)]">{habit.number}</span>
                <div>
                  <h3 className="font-serif text-xl leading-snug sm:text-2xl">{habit.title}</h3>
                  <p className="mt-2 max-w-3xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{habit.text}</p>
                  <p className="mt-3 text-base leading-7 sm:text-lg"><span className="font-semibold">Try this: </span><span className="text-[var(--sutra-muted)]">{habit.try}</span></p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 lg:py-16" aria-labelledby="keep-going-title">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Keep it manageable</p>
            <h2 id="keep-going-title" className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">A simple way to keep going</h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Pick one action", text: "Decide exactly what you will do and when." },
              { title: "Make it easy", text: "Fit the action into a routine you already have." },
              { title: "Review and adjust", text: "Notice what worked and make the next step realistic." },
            ].map((item, index) => (
              <article key={item.title} className="border-t border-[var(--sutra-border-strong)] py-5">
                <span className="text-sm font-semibold tracking-[0.12em] text-[var(--sutra-teal)]">0{index + 1}</span>
                <h3 className="mt-2 font-serif text-xl sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14 lg:py-16" aria-labelledby="faq-title">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">FAQs</p>
            <h2 id="faq-title" className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Daily habits, answered</h2>
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
            These suggestions are general information, not individual medical advice. Seek guidance from a qualified healthcare professional when a health condition affects which changes are suitable for you.
          </p>
        </Container>
      </section>

       <section className="py-8 sm:py-10">
        <Container>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-base font-semibold text-[var(--sutra-teal)]">
            <Link href="/services/lifestyle" className="underline-offset-4 hover:underline">← Lifestyle Medicine</Link>
            <Link href="/services/lifestyle/six-pillar" className="underline-offset-4 hover:underline">Explore the six pillars →</Link>
            <Link href="/services/lifestyle/healthy-lifestyle-coaching" className="underline-offset-4 hover:underline">Healthy Lifestyle Coaching →</Link>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--sutra-teal)] py-10 text-white sm:py-14">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Need help choosing your next step?</h2>
              <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">Discuss your priorities and suitable lifestyle support with the team.</p>
            </div>
            <Link href="/book-appointment" className="inline-flex min-h-12 shrink-0 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[var(--sutra-teal)]">
              Book a consultation ↗
            </Link>
          </div>
        </Container>
      </section>

     
    </main>
  );
}
