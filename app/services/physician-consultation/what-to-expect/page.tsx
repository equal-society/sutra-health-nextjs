import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "What to Expect During a Physician Consultation | Sutra Health",
  description: "Learn how to prepare for a physician consultation, what information may be useful and how next steps are discussed.",
  alternates: { canonical: "https://lifequality.org.in/services/physician-consultation/what-to-expect" },
  robots: { index: true, follow: true },
  openGraph: { title: "What to Expect During a Physician Consultation | Sutra Health", description: "Learn how to prepare for a physician consultation, what information may be useful and how next steps are discussed.", url: "https://lifequality.org.in/services/physician-consultation/what-to-expect", siteName: "Sutra Health", type: "article", locale: "en_IN" },
};

export default function ConsultationDetailPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-12 sm:py-16 lg:py-20">
            
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Appointment guide</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">What to expect during a physician consultation</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">A consultation is a structured conversation about your health concerns, medical history and questions. The exact process depends on the reason for your appointment and the information available.</p>
          </div>
        </Container>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl space-y-12">
            <section aria-labelledby="section-164301">
              <h2 id="section-164301" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Before your appointment</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Think about the main reason you are seeking advice. A short written list can help you make the most of the appointment.</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-[var(--sutra-muted)]">
                <li>Previous medical reports or test results relevant to your concern</li>
                <li>A list of current medicines and supplements, including doses if known</li>
                <li>Notes about symptoms, when they began and what affects them</li>
                <li>Questions you would like to ask</li>
              </ul>
            </section>
            <section aria-labelledby="section-864750">
              <h2 id="section-864750" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">During the consultation</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">You can explain your concerns and provide relevant background. The clinician may ask follow-up questions and discuss medical history, current medicines and lifestyle factors when relevant.</p>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">The consultation may identify next steps, but additional examination, tests, referral or a follow-up appointment may be needed depending on your circumstances.</p>
            </section>
            <section aria-labelledby="section-129889">
              <h2 id="section-129889" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">After the appointment</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Make sure you understand any recommendations and how to follow them. Ask who to contact if you have questions about the plan. Do not change prescribed medicines without speaking with your treating clinician.</p>
            </section>
            <section aria-labelledby="section-222295">
              <h2 id="section-222295" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">A note about urgent symptoms</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">A scheduled consultation is not an emergency service. If you have severe or rapidly worsening symptoms, seek urgent medical care rather than waiting for an appointment.</p>
            </section>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-[var(--sutra-border)] pt-8 sm:flex-row sm:flex-wrap">
            <Link href="/services/physician-consultation" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-5 py-3 text-sm font-bold text-[var(--sutra-teal)] hover:bg-white">← Back to Physician Consultation</Link>
            <Link href="/book-appointment" className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-5 py-3 text-sm font-bold text-white hover:opacity-90">Book a Consultation ↗</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
