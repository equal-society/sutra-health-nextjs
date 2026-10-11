import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/therapeutic-yoga/yoga-asana-protocol/backbends`;
const TITLE = "Backbends | Yoga Asana Protocol | Sutra Health";
const DESCRIPTION = "Explore backbends from the traditional Life Quality Yoga Asana Protocol, with descriptions, available video references and safety notes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: "Sutra Health", type: "article", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
};


const base = "/services/therapeutic-yoga/yoga-asana-protocol";
const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs";
const textLink = "font-semibold text-[var(--sutra-teal)] underline underline-offset-4";

const category = {
  "slug": "backbends",
  "title": "Backbends",
  "eyebrow": "Mobility and control",
  "desc": "Traditional backbend postures, from prone extensions to deeper kneeling and wheel variations.",
  "note": "Move within a comfortable range, avoid compressing the lower back, and do not force the neck, shoulders or wrists into position."
};
const poses = [
  {
    "n": 7,
    "name": "Matsyasana",
    "kind": "Backbend",
    "text": "A traditional backbend involving the chest and upper spine. Use a comfortable range and avoid putting pressure through the head or neck.",
    "video": "https://youtu.be/ZTuH72ekcfQ?si=GNfWTyB0luJGuXDa",
    "id": "ZTuH72ekcfQ",
    "caution": false
  },
  {
    "n": 12,
    "name": "Bhujang / Sarpasana",
    "kind": "Backbend",
    "text": "A prone backbend traditionally focused on the chest and spine. Keep the lift gentle, use the arms lightly and stop if you feel pinching or pain in the lower back.",
    "video": "https://youtu.be/1LZcfo461S4?si=t0MWwiuL4Zzp1H7P",
    "id": "1LZcfo461S4",
    "caution": false
  },
  {
    "n": 13,
    "name": "Shalabhasana",
    "kind": "Backbend",
    "text": "The locust pose involves lifting parts of the body while lying face down. A small lift or lifting one limb at a time can be an easier variation.",
    "video": "https://youtu.be/5Z76Y85KZCk?si=Kg0umbaDXBI7a6TQ",
    "id": "5Z76Y85KZCk",
    "caution": false
  },
  {
    "n": 14,
    "name": "Dhanurasana",
    "kind": "Backbend",
    "text": "The bow pose combines a backbend with holding the ankles. It requires shoulder, back and knee mobility; do not force the reach or lift.",
    "video": "https://youtu.be/xOQMTnV6ZUM?si=JGLRrIXX0ZwDO9Qi",
    "id": "xOQMTnV6ZUM",
    "caution": false
  },
  {
    "n": 15,
    "name": "Chakrasana",
    "kind": "Wheel pose / backbend",
    "text": "A demanding backbend requiring shoulder and wrist mobility, strength and controlled technique. Use only under appropriate instruction and consider preparatory poses first.",
    "video": "https://youtu.be/VAguqIn6Kog?si=nsXlXnx3Hp_cGPvE",
    "id": "VAguqIn6Kog",
    "caution": true
  },
  {
    "n": 17,
    "name": "Ustrasana",
    "kind": "Camel pose / backbend",
    "text": "The camel pose is a kneeling backbend that opens the front of the body in traditional practice. Keep hands on the pelvis or use blocks rather than reaching for the heels.",
    "video": "https://in.pinterest.com/pin/yoga-in-harmony--1137158974682061121/",
    "id": null,
    "caution": false
  }
];

export default function AsanaCategoryPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-10 sm:py-14 lg:py-16">
           
            <p className={"mt-7 " + eyebrow}>{category.eyebrow} · Yoga Asana Protocol</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">{category.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl sm:leading-9">{category.desc}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="#poses" className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-6 py-3 font-semibold text-white">Explore the postures ↓</Link>
              <Link href="/services/therapeutic-yoga/yoga-asana-protocol" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-6 py-3 font-semibold text-[var(--sutra-teal)]">All asana categories</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-4 border-l-4 border-[var(--sutra-teal)] bg-white p-5 sm:grid-cols-[180px_1fr] sm:gap-8 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Practice note</p>
            <div>
              <h2 className="font-serif text-2xl">Adapt the posture to the person.</h2>
              <p className="mt-2 text-base leading-7 text-[var(--sutra-muted)]">{category.note}</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="poses" className="pb-12 sm:pb-16 lg:pb-20">
        <Container>
          <div className="max-w-3xl">
            <p className={eyebrow}>Asana guide</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Postures in this category</h2>
            <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">Descriptions explain the traditional practice focus. They are not promises of a medical benefit or a substitute for instruction.</p>
          </div>

          <div className="mt-8 border-t border-[var(--sutra-border-strong)]">
            {poses.map((pose) => (
              <article key={pose.n} className="grid gap-5 border-b border-[var(--sutra-border)] py-7 sm:py-8 lg:grid-cols-[minmax(220px,0.7fr)_1.3fr] lg:gap-10">
                <div className="max-w-sm">
                  {pose.id ? (
                    <a href={pose.video} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${pose.name} video on YouTube`} className="group block overflow-hidden bg-[#173B36]">
                      <img src={`https://img.youtube.com/vi/${encodeURIComponent(pose.id)}/hqdefault.jpg`} alt={`${pose.name} demonstration video thumbnail`} width={480} height={360} loading="lazy" className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
                    </a>
                  ) : (
                    <div className="flex aspect-video items-center justify-center border border-[var(--sutra-border)] bg-white p-5 text-center text-sm leading-6 text-[var(--sutra-muted)]">The original page provides a reference link rather than a verified YouTube demonstration.</div>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold tabular-nums text-[var(--sutra-teal)]">{String(pose.n).padStart(2, "0")}</span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">{pose.kind}</p>
                    {pose.caution && <span className="border border-[#D6A34A] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#805600]">Extra care</span>}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl leading-snug sm:text-3xl">{pose.name}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{pose.text}</p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                    <a href={pose.video} target="_blank" rel="noopener noreferrer" className={"inline-flex min-h-10 items-center " + textLink}>{pose.id ? "Watch demonstration" : "View original reference"} ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white py-10 sm:py-14">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <p className={eyebrow}>Safety first</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">When to get guidance</h2>
            </div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              <p>Tell your instructor about pain, recent surgery or injury, balance concerns, pregnancy, or any medical condition that may affect movement. Ask a qualified healthcare professional if you are unsure whether a posture is appropriate for you.</p>
              <p>Stop if you experience pain, dizziness, chest discomfort or unusual breathlessness. Do not force a pose to match a demonstration.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className={eyebrow}>Continue exploring</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Return to the full protocol</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Browse the other practice categories or return to the full overview.</p>
            </div>
            <Link href="/services/therapeutic-yoga/yoga-asana-protocol" className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-6 py-3 font-semibold text-white">All asana categories ↗</Link>
          </div>
        </Container>
      </section>

      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">Yoga is complementary to medical care and does not replace diagnosis, prescribed treatment or professional advice. Video links are learning references; technique and suitability vary by individual.</p>
    </main>
  );
}
