import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "ABHA and Digital Health Records | Sutra Health",
  description: "Learn what an Ayushman Bharat Health Account (ABHA) is and find the official portal to create or manage an account.",
  alternates: { canonical: "https://lifequality.org.in/services/physician-consultation/abha" },
  robots: { index: true, follow: true },
  openGraph: { title: "ABHA and Digital Health Records | Sutra Health", description: "Learn what an Ayushman Bharat Health Account (ABHA) is and find the official portal to create or manage an account.", url: "https://lifequality.org.in/services/physician-consultation/abha", siteName: "Sutra Health", type: "article", locale: "en_IN" },
};

export default function ConsultationDetailPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-12 sm:py-16 lg:py-20">
            
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Digital health records</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">What is an ABHA account?</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">The earlier consultation page included information about the Ayushman Bharat Health Account (ABHA), a digital health identity used within India’s participating digital health ecosystem.</p>
          </div>
        </Container>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl space-y-12">
            <section aria-labelledby="section-682598">
              <h2 id="section-682598" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">What ABHA is for</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">An ABHA can help people identify themselves within participating digital health services and access or manage digital health records where supported. Its usefulness depends on the participating services and how records are linked or shared.</p>
            </section>
            <section aria-labelledby="section-79862">
              <h2 id="section-79862" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Create or manage an account</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Use the official ABHA portal for current instructions and account services. Review the official information carefully before entering personal details.</p>
            </section>
            <section aria-labelledby="section-558370">
              <h2 id="section-558370" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Important privacy note</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">A digital health identity is not the same as a medical consultation, diagnosis or health insurance benefit. Read the official terms and privacy information to understand how records may be accessed or shared.</p>
            </section>

            <section aria-labelledby="official-abha-link">
              <h2 id="official-abha-link" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Official ABHA portal</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Visit the official portal for current account creation and management information.</p>
              <a href="https://abha.abdm.gov.in/abha/v3" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[var(--sutra-teal)] underline-offset-4 hover:underline">Open the ABHA portal ↗</a>
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
