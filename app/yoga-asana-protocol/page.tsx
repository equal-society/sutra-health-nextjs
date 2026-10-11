import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/yoga-asana-protocol`;
const TITLE = "Yoga Asana Protocol | Practices by Category | Sutra Health";
const DESCRIPTION = "Explore the traditional Life Quality Yoga Asana Protocol by practice category, with descriptions, safety notes and links to the available demonstrations.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: "Sutra Health", type: "article", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
};

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs";

const base = "/yoga-asana-protocol";

const categories = [
  {
    "slug": "foundations-and-balance",
    "title": "Foundations & Balance",
    "eyebrow": "Start here",
    "desc": "Standing alignment and balance practices that introduce steadiness, posture and body awareness.",
    "note": "Begin with a stable stance. Use a wall or chair when useful, and choose a version that lets you breathe comfortably.",
    "count": 2
  },
  {
    "slug": "flow-and-rest",
    "title": "Flow, Rest & Breath",
    "eyebrow": "Movement and recovery",
    "desc": "A sequence, gentle floor-based movements, rest and breath practices drawn from the original protocol.",
    "note": "A flowing sequence can be adapted or left out. Rest and breathing practices should feel comfortable rather than forced.",
    "count": 5
  },
  {
    "slug": "folds-and-inversions",
    "title": "Forward Folds & Inversions",
    "eyebrow": "Use extra care",
    "desc": "Forward-folding and inverted postures that call for attention to range of motion, technique and individual circumstances.",
    "note": "Shoulder stand, plough and headstand are demanding postures. Seek qualified instruction and discuss relevant health concerns with a clinician before attempting them.",
    "count": 4
  },
  {
    "slug": "backbends",
    "title": "Backbends",
    "eyebrow": "Mobility and control",
    "desc": "Traditional backbend postures, from prone extensions to deeper kneeling and wheel variations.",
    "note": "Move within a comfortable range, avoid compressing the lower back, and do not force the neck, shoulders or wrists into position.",
    "count": 6
  },
  {
    "slug": "twists-and-arm-balance",
    "title": "Twists, Expression & Arm Balance",
    "eyebrow": "Specific techniques",
    "desc": "A seated twist, a traditional facial-expression practice and an advanced arm balance from the original list.",
    "note": "Mayurasana is an advanced posture. Wrist or shoulder discomfort, pregnancy, recent injury or other health concerns may call for avoiding or adapting certain practices.",
    "count": 3
  }
];

const featured: { title: string; text: string; href?: string }[] = [
  { title: "Preparation", text: "The original page begins with awareness of surroundings and breath, and a gentle preparation before the sequence." },
  { title: "Shodhan Kriya", text: "The source names Kapalbhati, A-U-M and Agnisar. These are distinct practices and should be learned with suitable guidance rather than treated as required warm-up steps." },
  { title: "Video archive", text: "Open the Life Quality collection to browse the asana recordings in one place.", href: "https://archive.org/details/sutra_health_asana_movies_archive" },
];

export default function YogaAsanaProtocolPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
   

      {/* Hero */}
      <section
        aria-labelledby="consultation-title"
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/yoga-asana.webp')" }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#10211E]/65"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12 lg:pb-20">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/85">
            Yoga Practice library
          </p>

          <h1
            id="consultation-title"
            className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.025em] text-white"
          >
            Yoga Asana Protocol
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
          Explore the traditional Life Quality sequence by category. Each guide explains the posture’s role in practice, shares available video references and highlights when a posture needs extra care.          </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#categories" className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-6 py-3 font-semibold text-white">Explore categories ↓</Link>
                <a href="https://archive.org/details/sutra_health_asana_movies_archive" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-white px-6 py-3 font-semibold text-white">Watch video archive ↗</a>
              </div>

        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16"><Container><div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14"><div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">How to use this library</p><h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Choose a practice group, not a one-size-fits-all routine.</h2></div><div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg"><p>The Sutra Health describes a Sivananda-inspired sequence. It is a reference for learning, not a requirement to perform every posture in order.</p><p>Start with a posture suited to your experience. More demanding inversions and arm balances require qualified instruction.</p></div></div></Container></section>
      

      <section id="categories" className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className={eyebrow}>Browse the protocol</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">Explore by asana category</h2>
            <p className="mt-5 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">The categories make it easier to find a posture by its movement or practice focus. They are an editorial grouping of the original list, not a prescribed order.</p>
          </div>
          <div className="mt-8 border-t border-[var(--sutra-border-strong)]">
            {categories.map((cat, i) => (
              <article key={cat.slug} className="grid gap-4 border-b border-[var(--sutra-border)] py-6 sm:py-7 lg:grid-cols-[72px_0.85fr_1.15fr] lg:gap-8">
                <p className="font-serif text-2xl text-[var(--sutra-teal)]">{String(i + 1).padStart(2, "0")}</p>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">{cat.eyebrow}</p>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{cat.title}</h3>
                  <Link href={`${base}/${cat.slug}`} className={"mt-4 inline-flex min-h-10 items-center " + "font-semibold text-[var(--sutra-teal)] underline underline-offset-4"}>Explore category →</Link>
                </div>
                <div>
                  <p className="text-base leading-7 text-[var(--sutra-muted)] sm:text-lg">{cat.desc}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--sutra-muted)]">{cat.count} practices in this group · {cat.note}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className={eyebrow}>Before practising</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Preparation, cleansing practices and safety</h2>
            <p className="mt-5 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">The original Life Quality page mentions awareness of breath, prayer/AUM and Shodhan Kriya practices such as Kapalbhati and Agnisar. These are traditional practices, not mandatory steps for everyone. Learn unfamiliar techniques from a qualified instructor, especially if you have a medical condition.</p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {featured.map((item) => (
              <article key={item.title} className="border-t-2 border-[var(--sutra-teal)] pt-4">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--sutra-muted)]">{item.text}</p>
                {item.href && <a className={"mt-4 inline-flex " + "font-semibold text-[var(--sutra-teal)] underline underline-offset-4"} href={item.href} target="_blank" rel="noopener noreferrer">Browse recordings ↗</a>}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--sutra-teal)] py-12 text-white sm:py-14">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl">Not sure where to begin?</h2>
              <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">Discuss your experience, mobility and health context with a qualified instructor or healthcare professional before choosing demanding practices.</p>
            </div>
            <Link href="/book-appointment" className="inline-flex min-h-12 shrink-0 items-center justify-center bg-white px-6 py-3 font-semibold text-[var(--sutra-teal)]">Book an appointment ↗</Link>
          </div>
        </Container>
      </section>
      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">Yoga is a complementary practice and does not replace medical assessment or prescribed treatment. Stop if a practice causes pain, dizziness, chest discomfort or unusual breathlessness.</p>
    </main>
  );
}
