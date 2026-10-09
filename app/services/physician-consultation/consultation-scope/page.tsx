import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "What Does a Physician Consultation Cover? | Sutra Health",
  description: "Understand the topics that may be discussed during a physician consultation at Sutra Health, including medical history and relevant lifestyle factors.",
  alternates: { canonical: "https://lifequality.org.in/services/physician-consultation/consultation-scope" },
  robots: { index: true, follow: true },
  openGraph: { title: "What Does a Physician Consultation Cover? | Sutra Health", description: "Understand the topics that may be discussed during a physician consultation at Sutra Health, including medical history and relevant lifestyle factors.", url: "https://lifequality.org.in/services/physician-consultation/consultation-scope", siteName: "Sutra Health", type: "article", locale: "en_IN" },
};

export default function ConsultationDetailPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-12 sm:py-16 lg:py-20">
            
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Consultation scope</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">What may be covered in a physician consultation?</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">The consultation is guided by your health concerns and the clinician’s assessment. Not every topic applies to every person, and the scope depends on the service booked.</p>
          </div>
        </Container>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl space-y-12">
            <section aria-labelledby="section-849630">
              <h2 id="section-849630" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Medical history and current concerns</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">You may discuss current symptoms, existing conditions, previous investigations, medicines and relevant family or personal medical history. Bring information that helps explain your concern.</p>
            </section>
            <section aria-labelledby="section-320114">
              <h2 id="section-320114" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Lifestyle and wellbeing</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Where relevant to the consultation, discussion may include nutrition, physical activity, sleep, stress and everyday routines. These factors are considered alongside appropriate medical care, not as a substitute for it.</p>
            </section>
            <section aria-labelledby="section-256604">
              <h2 id="section-256604" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Integrative approaches</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">The legacy consultation page described discussion of modern medical care alongside appropriate integrative approaches such as Yoga therapy and Ayurveda. Whether a particular approach is suitable depends on individual circumstances and the services actually available.</p>
            </section>
            <section aria-labelledby="section-192157">
              <h2 id="section-192157" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Assessment and next steps</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Recommendations depend on the clinician’s assessment. Further tests, an in-person examination, referral or follow-up may be needed. A website page cannot determine which investigations or treatments are appropriate for an individual.</p>
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
