import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";

export const metadata: Metadata = {
  title: "Breath & Mindfulness | Sutra Health",
  description:
    "Evidence-based breathing and mindfulness practices — including measured effects on stress hormones — reviewed by Dr. Rakesh Sarwal, MBBS, MPH, DrPH.",
  alternates: {
    canonical: "https://lifequality.org.in/approach/breath-mindfulness",
  },
};

const factors = [
  {
    title: "Pranayama (breathing practice)",
    description:
      "Slow, controlled breathing activates the parasympathetic nervous system — a specific, studied mechanism used in the blood pressure and migraine protocols on this site.",
  },
  {
    title: "Mindfulness-based stress reduction",
    description:
      "An 8-week structured program with a substantial trial base, including measured effects on stress hormones, not just self-reported calm.",
  },
  {
    title: "Applied to a specific condition",
    description:
      "Which practice we use depends on what you're addressing — a migraine protocol looks different from a general stress-management program.",
  },
  {
    title: "A skill, not a one-time relaxation session",
    description:
      "The trials showing measurable benefit involve consistent practice over weeks, the same pattern seen across yoga and lifestyle interventions on this site.",
  },
];

const faqs = [
  {
    question: "Does mindfulness meditation have measurable physical effects, or just a subjective feeling of calm?",
    answer:
      "It has measurable physical effects. A three-arm randomized controlled trial in health workers found Mindfulness-Based Stress Reduction (MBSR) was specifically associated with a 23% reduction in the cortisol awakening response — a physical stress-hormone marker — while a comparison psychoeducation program showed no such effect. A separate RCT during the COVID-19 pandemic found MBSR significantly reduced cortisol levels in healthcare workers under high occupational stress.",
  },
  {
    question: "What is MBSR (Mindfulness-Based Stress Reduction)?",
    answer:
      "MBSR is a structured 8-week program developed by Jon Kabat-Zinn, combining meditation, body awareness, and gentle movement. It's one of the most extensively studied mindfulness programs, with trial evidence across stress, anxiety, and — relevant to cardiac patients specifically — a pilot RCT that found significant improvements in depression and anxiety among people eligible for cardiac rehabilitation.",
  },
  {
    question: "How is pranayama (breathing practice) different from mindfulness meditation?",
    answer:
      "Pranayama is specifically about controlled breathing technique — used in the clinical protocols behind our blood pressure and migraine content on this site, where slow breathing is understood to activate the parasympathetic nervous system directly. Mindfulness meditation is broader, involving sustained attention and awareness practice, with its own separate evidence base, including measured effects on stress hormones. We use both, chosen based on what a person's specific concern calls for.",
  },
  {
    question: "How long before breath and mindfulness practices make a difference?",
    answer:
      "The trials showing measurable benefit generally involved 8-week structured programs with regular practice, not one-off sessions. Some physical markers (like cortisol) have shown change within that timeframe; other outcomes take longer and depend on consistency.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Breath & Mindfulness | Sutra Health",
  description:
    "Evidence-based breathing and mindfulness practices, including measured effects on stress hormones.",
  url: "https://lifequality.org.in/approach/breath-mindfulness",
  about: { "@type": "MedicalSpecialty", name: "Integrative Medicine" },
  author: {
    "@type": "Person",
    name: "Dr. Rakesh Sarwal",
    honorificSuffix: "MBBS, MPH, DrPH",
    url: "https://academic.lifequality.org.in/",
  },
  reviewedBy: {
    "@type": "Person",
    name: "Dr. Rakesh Sarwal",
    honorificSuffix: "MBBS, MPH, DrPH",
    url: "https://academic.lifequality.org.in/",
  },
  lastReviewed: "2026-09-08", // TODO: update on substantive revision
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lifequality.org.in/" },
    { "@type": "ListItem", position: 2, name: "Our Approach", item: "https://lifequality.org.in/approach" },
    { "@type": "ListItem", position: 3, name: "Breath & Mindfulness", item: "https://lifequality.org.in/approach/breath-mindfulness" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function BreathMindfulnessPage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ==================================================
          HERO
      ================================================== */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Our Approach → Breath & Mindfulness
            </p>

            <h1 className="mt-4 max-w-[780px] font-serif text-[42px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[56px] lg:text-[68px]">
              Calm you can{" "}
              <span className="italic text-[#65966F]">measure, not just feel.</span>
            </h1>

            <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
              Breathing and mindfulness practices have measurable effects
              on stress hormones and the nervous system — this isn&apos;t
              just a subjective sense of relaxation. Reviewed by Dr.
              Rakesh Sarwal, MBBS, MPH, DrPH.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D]"
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          WHAT THE RESEARCH SHOWS
      ================================================== */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="max-w-[720px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                What the research shows
              </p>
              <h2 className="mt-3 font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                A measurable effect on <span className="italic text-[#65966F]">stress hormones.</span>
              </h2>

              <div className="mt-6 space-y-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                <p>
                  A three-arm randomized controlled trial in health workers
                  found Mindfulness-Based Stress Reduction (MBSR) was
                  specifically associated with a 23% reduction in the
                  cortisol awakening response — a physical marker of
                  stress-hormone activity — while a comparison
                  psychoeducation program produced no such effect. A
                  separate randomized trial conducted among healthcare
                  workers during the COVID-19 pandemic found MBSR
                  significantly reduced cortisol levels under sustained
                  high-stress conditions.
                </p>
                <p>
                  In cardiac patients eligible for rehabilitation, a pilot
                  randomized controlled trial found an 8-week MBSR program
                  produced significant improvements in depression and
                  anxiety at 3 months, with better retention of
                  cardiovascular risk-factor improvements in patients who
                  started with higher depression scores.
                </p>
                <p>
                  Separately, pranayama (controlled breathing) is used
                  directly within the clinical protocols behind our{" "}
                  <Link href="/conditions/high-blood-pressure" className="font-semibold underline decoration-[#B7CCB8] underline-offset-2 hover:text-[#173F35]">
                    blood pressure
                  </Link>{" "}
                  and{" "}
                  <Link href="/conditions/migraine-headache" className="font-semibold underline decoration-[#B7CCB8] underline-offset-2 hover:text-[#173F35]">
                    migraine
                  </Link>{" "}
                  research — a distinct but related mechanism, targeting
                  the nervous system directly through breath control.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          WHAT WE LOOK AT
      ================================================== */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  What we look at
                </p>
                <h2 className="mt-3 max-w-[420px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                  Chosen for the <span className="italic text-[#65966F]">condition, not preference.</span>
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {factors.map((factor) => (
                  <article key={factor.title} className="grid gap-2 py-7 sm:grid-cols-[240px_1fr] sm:items-center sm:py-8">
                    <h3 className="font-serif text-[22px] tracking-[-0.02em] text-[#173F35]">{factor.title}</h3>
                    <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">{factor.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          RELATED APPROACHES
      ================================================== */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
              Part of the wider method
            </p>
            <h2 className="mt-3 max-w-[600px] font-serif text-[32px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[40px]">
              Breath works alongside movement, nutrition, and daily routine.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/approach/therapeutic-yoga"
                className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[13px] font-semibold text-[#173F35] hover:bg-[#FAF8F1]"
              >
                Therapeutic Yoga & Movement →
              </Link>
              <Link
                href="/approach/lifestyle"
                className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[13px] font-semibold text-[#173F35] hover:bg-[#FAF8F1]"
              >
                Lifestyle Medicine →
              </Link>
              <Link
                href="/approach/nutrition"
                className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[13px] font-semibold text-[#173F35] hover:bg-[#FAF8F1]"
              >
                Nutrition →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}
      <section className="bg-[#173F35]">
        <Container>
          <div className="mx-auto max-w-[720px] py-14 text-center sm:py-16 lg:py-20">
            <h2 className="font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[44px]">
              See the six-stage method these disciplines fit into.
            </h2>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/approach"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-white"
              >
                Back to Our Approach
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FAQ faqs={faqs} />
    </main>
  );
}