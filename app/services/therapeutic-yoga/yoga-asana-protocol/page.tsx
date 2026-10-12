import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import YogaPracticeGallery from "./YogaPracticeGallery";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/yoga-asana-protocol`;
const TITLE = "Yoga Asana Practice Guide | Sutra Health";
const DESCRIPTION = "Explore the Yoga Asana Protocol with posture thumbnails and links to the available video demonstrations.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "article",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

const eyebrow = "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]";

export default function YogaAsanaProtocolPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-[#173B36] sm:min-h-[580px]">
        {/* Background Video */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Sutra Health lifestyle healthcare introduction"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/videos/hero-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Base Overlay */}
        <div className="absolute inset-0 bg-[#101C19]/40" />

        {/* Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101C19]/90 via-[#101C19]/65 to-[#101C19]/25" />

        {/* Bottom Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101C19]/55 via-transparent to-[#101C19]/10" />
      </div>
        <Container><div className="relative z-10 max-w-3xl py-20 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">Traditional Yoga Practice</p>
          <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] tracking-[-0.035em] text-white">Yoga Asana Protocol</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">Browse the sequence by thumbnail. Select any available card to open its video or reference in a new tab.</p>
          <div className="mt-8"><Link href="#practice" className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[var(--sutra-teal)]">Start the sequence ↓</Link></div>
        </div></Container>
      </section>

    


<section className="border-y border-[var(--sutra-border)] py-12 sm:py-16">
  <Container>
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Left column: Mantra */}
      <div>
        <p className={eyebrow}>01 / Begin with intention</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
          Arrive before you begin.
        </h2>
        <p className="mt-4 text-base leading-8 text-[#3F4B46]">
          Take a quiet moment to recite the traditional invocation or sit
          in silence and notice your natural breath.
        </p>

        <blockquote className="relative mt-6 border-y border-[var(--sutra-border)] py-6 pl-5 sm:pl-8">
          <span
            aria-hidden="true"
            className="absolute left-0 top-6 h-12 w-1 bg-[var(--sutra-teal)]"
          />
          <p className="font-serif text-lg leading-[1.9] sm:text-xl">
            ॐ सह नाववतु ।<br />
            सह नौ भुनक्तु ।<br />
            सह वीर्यं करवावहै ।<br />
            तेजस्वि नावधीतमस्तु मा विद्विषावहै ।<br />
            ॐ शान्तिः शान्तिः शान्तिः ॥
          </p>
        </blockquote>
      </div>

      {/* Right column: Preparation */}
      <div className="lg:border-l lg:border-[var(--sutra-border)] lg:pl-10">
        <p className={eyebrow}>02 / Set yourself up</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
          Prepare with care.
        </h2>
        <p className="mt-4 text-base leading-8 text-[#3F4B46]">
          Choose a quiet space, a non-slip mat and comfortable clothing.
          Begin gently, breathe naturally, and rest or skip any posture
          that feels unsuitable.
        </p>

        <div className="mt-6 border-y border-[var(--sutra-border)]">
          {[
            "Move gently before deeper postures.",
            "Keep breathing comfortable; do not force it.",
            "Use support and seek guidance when needed.",
          ].map((item, i) => (
            <div
              key={item}
              className="flex gap-4 border-b border-[var(--sutra-border)] py-4 last:border-b-0"
            >
              <span className="font-serif text-lg text-[var(--sutra-teal)]">
                0{i + 1}
              </span>
              <p className="text-base leading-7 text-[#27352F]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
</section>




      <section id="practice" className="scroll-mt-20 py-14 sm:py-20"><Container>
        <div className="flex flex-col justify-between gap-5 border-b border-[var(--sutra-border-strong)] pb-7 sm:flex-row sm:items-end sm:pb-9"><div><p className={eyebrow}>03 / Follow in order</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">The Yoga asana sequence</h2><p className="mt-4 max-w-2xl text-base leading-7 text-[#3F4B46]">Warm-up comes first, followed by all 20 practices in your requested order. Select a thumbnail to open its supplied video or reference.</p></div><p className="shrink-0 text-sm text-[#3F4B46]">01 warm-up <span className="px-2 text-[var(--sutra-border-strong)]">/</span> 20 practices</p></div>
        <div className="mt-8"><YogaPracticeGallery /></div>
      </Container></section>

<section className="bg-[#17413D] py-10 text-white sm:py-12">
  <Container>
    <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-7">
      <span
        aria-hidden="true"
        className="flex h-12 w-12 items-center justify-center border border-white/25 font-serif text-xl text-[#D6E0CC]"
      >
        ↗
      </span>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D6E0CC]">
          Continue your practice
        </p>

        <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
          Explore the Yoga Video Collection
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-7 text-white/90">
          Find more yoga demonstrations in the Sutra Health video archive and
          on YouTube.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#17413D] transition-colors hover:bg-[#D6E0CC]"
          >
            Browse Yoga Archive
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.youtube.com/@sutra-health"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Visit YouTube Channel
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="mt-6 border-t border-white/20 pt-4 text-sm leading-7 text-white/80">
          <strong className="font-semibold text-white">
            Practise within your limits.
          </strong>{" "}
          Seek qualified guidance before attempting advanced poses.{" "}
          <a
            className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            href="https://www.nccih.nih.gov/health/yoga-effectiveness-and-safety"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read yoga safety guidance ↗
          </a>
        </p>
      </div>
    </div>
  </Container>
</section>
   </main>
  );
}
