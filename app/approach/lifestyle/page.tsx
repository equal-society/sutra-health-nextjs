import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";

export const metadata: Metadata = {
  title: "Lifestyle Medicine | Sutra Health",
  description:
    "Evidence-based lifestyle medicine for sleep, stress, and daily routine — reviewed by Dr. Rakesh Sarwal, MBBS, MPH, DrPH.",
  alternates: {
    canonical: "https://lifequality.org.in/approach/lifestyle",
  },
};

const factors = [
  {
    title: "Sleep",
    description:
      "Sleep consistency and quality, addressed as a lifestyle factor in its own right — not an afterthought to diet and exercise.",
  },
  {
    title: "Stress and routine",
    description:
      "How daily structure and stress patterns affect everything from blood pressure to digestion.",
  },
  {
    title: "Movement in daily life",
    description:
      "Everyday activity levels, separate from structured exercise or yoga practice specifically.",
  },
  {
    title: "Behaviour change",
    description:
      "How changes actually stick — the difference between a plan you follow for two weeks and one that becomes part of life.",
  },
];

const faqs = [
  {
    question: "What is lifestyle medicine?",
    answer:
      "Lifestyle medicine is an evidence-based approach that uses changes to sleep, stress management, physical activity, and daily routine — alongside nutrition — to prevent, manage, and sometimes reverse the impact of chronic conditions. It's a recognized medical specialty, not a wellness marketing term.",
  },
  {
    question: "Does lifestyle medicine actually have research behind it, or is it just common sense?",
    answer:
      "It has real trial evidence, and the effects aren't always what you'd assume from 'common sense.' A meta-analysis of 23 randomized controlled trials (2,534 participants) found multicomponent lifestyle medicine interventions significantly improved sleep quality, with the largest effect in people who had clinically disturbed sleep to begin with. A separate pilot RCT found a 6-week group lifestyle medicine program produced a significant reduction in depressive symptoms compared to usual care.",
  },
  {
    question: "How is sleep addressed as part of lifestyle medicine?",
    answer:
      "Sleep is treated as its own lifestyle factor with its own evidence base, not just a side effect of eating and exercising better. The research shows multicomponent interventions — addressing sleep alongside stress and activity together — produce better sleep quality than addressing sleep in isolation.",
  },
  {
    question: "Can lifestyle changes really affect stress and mental wellbeing?",
    answer:
      "Yes, with real effect sizes behind it. RCTs combining diet and physical activity changes have shown significant improvements in depressive symptoms and day-to-day functioning, and separate trials have shown meaningful reductions in anxiety and insomnia symptoms alongside the primary outcome being measured.",
  },
  {
    question: "How long does it take to see results from lifestyle changes?",
    answer:
      "The trials showing meaningful results generally ran 6 to 12 weeks of consistent intervention, with some showing effects sustained at follow-up beyond that. Individual results depend on your starting point and consistency — this isn't a one-week fix, and we won't promise it is.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Lifestyle Medicine | Sutra Health",
  description:
    "Evidence-based lifestyle medicine for sleep, stress, movement, and daily routine.",
  url: "https://lifequality.org.in/approach/lifestyle",
  about: { "@type": "MedicalSpecialty", name: "Lifestyle Medicine" },
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
    { "@type": "ListItem", position: 3, name: "Lifestyle Medicine", item: "https://lifequality.org.in/approach/lifestyle" },
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

export default function LifestylePage() {
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
              Our Approach → Lifestyle Medicine
            </p>

            <h1 className="mt-4 max-w-[780px] font-serif text-[42px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[56px] lg:text-[68px]">
              The habits doing the most damage{" "}
              <span className="italic text-[#65966F]">are usually the boring ones.</span>
            </h1>

            <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
              Lifestyle medicine looks at sleep, stress, and daily routine
              as health factors in their own right — with a real evidence
              base behind them, reviewed by Dr. Rakesh Sarwal, MBBS, MPH,
              DrPH.
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
                Not just common sense — <span className="italic text-[#65966F]">measured effects.</span>
              </h2>

              <div className="mt-6 space-y-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                <p>
                  A meta-analysis of 23 randomized controlled trials (2,534
                  participants) found multicomponent lifestyle medicine
                  interventions significantly improved sleep quality
                  compared to inactive controls, both immediately after the
                  intervention and at short-term follow-up — with the
                  largest effect seen in people who had clinically
                  disturbed sleep at the start.
                </p>
                <p>
                  A pilot randomized controlled trial testing a 6-week,
                  group-based lifestyle medicine program — covering diet,
                  exercise, mindfulness, and sleep management together —
                  found a significant reduction in depressive symptoms
                  compared to usual care, sustained at 12-week follow-up,
                  alongside improvements in anxiety and insomnia.
                </p>
                <p>
                  Separate trials combining diet and physical activity
                  changes have shown significant improvements in both
                  depressive symptoms and day-to-day functioning — evidence
                  that addressing these factors together, not one at a
                  time, produces better results than isolated changes.
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
                  Four factors, considered <span className="italic text-[#65966F]">together.</span>
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {factors.map((factor) => (
                  <article key={factor.title} className="grid gap-2 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-8">
                    <h3 className="font-serif text-[24px] tracking-[-0.02em] text-[#173F35]">{factor.title}</h3>
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
              Lifestyle change works alongside nutrition, movement, and breath.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/approach/therapeutic-yoga"
                className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[13px] font-semibold text-[#173F35] hover:bg-[#FAF8F1]"
              >
                Therapeutic Yoga & Movement →
              </Link>
              <Link
                href="/approach/nutrition"
                className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[13px] font-semibold text-[#173F35] hover:bg-[#FAF8F1]"
              >
                Nutrition →
              </Link>
              <Link
                href="/approach/breath-mindfulness"
                className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[13px] font-semibold text-[#173F35] hover:bg-[#FAF8F1]"
              >
                Breath & Mindfulness →
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
              Start with where your daily routine actually stands.
            </h2>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/score"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-white"
              >
                Take the 21-Point Assessment
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