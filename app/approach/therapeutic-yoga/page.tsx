import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";

export const metadata: Metadata = {
  title: "Therapeutic Yoga & Movement | Sutra Health",
  description:
    "Clinically-studied therapeutic yoga for blood pressure, blood sugar, arthritis, and migraine — reviewed by Dr. Rakesh Sarwal, MBBS, MPH, DrPH.",
  alternates: {
    canonical: "https://lifequality.org.in/approach/therapeutic-yoga",
  },
};

// Evidence summary reused from the condition-level research already
// completed — this page is the discipline-level entity hub; the full
// citation detail lives on each condition's evidence section and
// subpages. Repeating it in full here would be duplicate content;
// summarizing it with a link down is the correct structure.
const evidenceSummary = [
  {
    condition: "High Blood Pressure",
    finding:
      "Randomized trials show yoga added to standard care reduces systolic blood pressure by roughly 4–10 mmHg, depending on practice frequency.",
    href: "/conditions/high-blood-pressure",
  },
  {
    condition: "Metabolic Health & Diabetes",
    finding:
      "A large India-wide trial found a yoga-based lifestyle protocol reduced progression from prediabetes to diabetes by roughly 64% relative to standard care.",
    href: "/conditions/metabolic-health",
  },
  {
    condition: "Arthritis & Joint Pain",
    finding:
      "A randomized trial found yoga performed comparably to standard strengthening exercise for knee osteoarthritis pain — though the evidence differs for rheumatoid arthritis specifically.",
    href: "/conditions/arthritis-joint-pain",
  },
  {
    condition: "Migraine & Headache",
    finding:
      "A 160-patient trial conducted in New Delhi (published in Neurology) found yoga added to medical therapy significantly reduced migraine frequency and intensity.",
    href: "/conditions/migraine-headache",
  },
];

const faqs = [
  {
    question: "What is therapeutic yoga?",
    answer:
      "Therapeutic yoga is yoga practice specifically adapted and sequenced to address a person's health condition — as distinct from a general fitness or flexibility class. It's studied in clinical trials for specific outcomes (blood pressure, blood sugar, joint pain, migraine frequency), and the poses, pace, and style used depend on the condition being addressed.",
  },
  {
    question: "How is therapeutic yoga different from a regular yoga class?",
    answer:
      "A regular yoga class is designed for general fitness and flexibility, with the same sequence for everyone in the room. Therapeutic yoga is built around a specific health condition — for example, migraine calls for gentle, non-heated practice since intense styles can trigger attacks, while osteoarthritis calls for strengthening poses that avoid deep knee flexion. The right practice depends on what you're addressing.",
  },
  {
    question: "Is yoga backed by real clinical evidence, or is this just tradition?",
    answer:
      "Both, depending on the condition. Blood pressure, prediabetes prevention, osteoarthritis, and migraine all have randomized controlled trial evidence — including large trials conducted in India specifically. Other areas, like IBS, have more mixed or contested evidence. We link the actual studies on each condition page rather than treating all claims as equally proven.",
  },
  {
    question: "Do I need to be flexible or experienced to start therapeutic yoga?",
    answer:
      "No. Therapeutic yoga is built around your current ability and condition, not a fitness standard you need to meet first. Poses are modified with props, reduced range of motion, or gentler variations as needed.",
  },
  {
    question: "Can therapeutic yoga replace my medication?",
    answer:
      "No. In every condition where yoga has been studied, it's studied as a complement to standard medical care, not a replacement. See the specific condition page for what the research says about medication specifically.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Therapeutic Yoga & Movement | Sutra Health",
  description:
    "Clinically-studied therapeutic yoga for blood pressure, blood sugar, arthritis, and migraine.",
  url: "https://lifequality.org.in/approach/therapeutic-yoga",
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

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "Therapeutic Yoga",
  description:
    "Yoga practice specifically adapted and sequenced to address a defined health condition, distinct from general fitness yoga, informed by clinical research relevant to that condition.",
  inDefinedTermSet: "https://lifequality.org.in/approach",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lifequality.org.in/" },
    { "@type": "ListItem", position: 2, name: "Our Approach", item: "https://lifequality.org.in/approach" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Therapeutic Yoga & Movement",
      item: "https://lifequality.org.in/approach/therapeutic-yoga",
    },
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

export default function TherapeuticYogaPage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ==================================================
          HERO
      ================================================== */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Our Approach → Therapeutic Yoga & Movement
            </p>

            <h1 className="mt-4 max-w-[820px] font-serif text-[42px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[56px] lg:text-[68px]">
              Yoga chosen for what the{" "}
              <span className="italic text-[#65966F]">research actually shows.</span>
            </h1>

            <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
              Therapeutic yoga is not one generic practice. Which poses,
              pace, and style we use depends on the condition we&apos;re
              addressing — and that depends on what the clinical research
              for that specific condition actually supports, reviewed by
              Dr. Rakesh Sarwal, MBBS, MPH, DrPH.
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
          WHAT THE EVIDENCE SHOWS, BY CONDITION
      ================================================== */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="max-w-[680px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                The evidence, by condition
              </p>
              <h2 className="mt-3 font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                Different conditions, <span className="italic text-[#65966F]">different evidence.</span>
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                We don&apos;t treat all yoga claims as equally proven.
                Here&apos;s a summary of what the actual clinical research
                shows for each condition — with the full citations on each
                condition page.
              </p>
            </div>

            <div className="mt-10 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {evidenceSummary.map((item) => (
                <article key={item.condition} className="grid gap-3 py-7 sm:grid-cols-[220px_1fr_auto] sm:items-center sm:gap-6 sm:py-8">
                  <h3 className="font-serif text-[22px] tracking-[-0.02em] text-[#173F35]">
                    {item.condition}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
                    {item.finding}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 whitespace-nowrap text-[12px] font-semibold text-[#173F35] hover:text-[#65966F]"
                  >
                    See the evidence
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>

            <p className="mt-8 max-w-[680px] text-[12px] leading-6 text-[#71817A]">
              We&apos;re equally direct where the evidence is weaker — see
              our{" "}
              <Link href="/conditions/digestive-gut-health" className="font-semibold underline decoration-[#B7CCB8] underline-offset-2 hover:text-[#173F35]">
                Digestive & Gut Health
              </Link>{" "}
              page for a case where the research is genuinely mixed, and we
              say so.
            </p>
          </div>
        </Container>
      </section>

      {/* ==================================================
          WHY THE RIGHT PRACTICE DEPENDS ON THE CONDITION
      ================================================== */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Why one size doesn&apos;t fit all
              </p>
              <h2 className="mt-3 max-w-[430px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                The right practice depends on the{" "}
                <span className="italic text-[#65966F]">condition, not preference.</span>
              </h2>
            </div>

            <div className="max-w-[720px] space-y-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
              <p>
                Migraine is the clearest example: heated styles like Bikram
                and vigorous styles like Ashtanga have been reported to
                trigger attacks in some people, while gentle, breath-focused
                practice is what the clinical evidence and specialist
                guidance both support instead.
              </p>
              <p>
                Arthritis is another: osteoarthritis responds well to
                strengthening poses, while some poses — deep knee bends,
                extended wrist-bearing postures, intense backbends — are
                specifically flagged as ones to avoid, regardless of which
                type of arthritis you have.
              </p>
              <p>
                This is why we don&apos;t hand out one standard sequence.
                The practice is built around your specific condition first.
              </p>
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
              Yoga works alongside, not instead of, the other disciplines.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/approach/breath-mindfulness"
                className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[13px] font-semibold text-[#173F35] hover:bg-[#FAF8F1]"
              >
                Breath & Mindfulness →
              </Link>
              <Link
                href="/approach/nutrition"
                className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[13px] font-semibold text-[#173F35] hover:bg-[#FAF8F1]"
              >
                Nutrition →
              </Link>
              <Link
                href="/approach/lifestyle"
                className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[13px] font-semibold text-[#173F35] hover:bg-[#FAF8F1]"
              >
                Lifestyle Medicine →
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
              Find the right practice for your condition.
            </h2>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-white"
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/conditions"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Health Conditions
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