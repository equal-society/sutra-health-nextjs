import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Physician Consultation FAQs | Sutra Health",
  description: "Answers to common questions about preparation, existing health concerns, online appointments, donation information and medical care at Sutra Health.",
  alternates: { canonical: "https://lifequality.org.in/services/physician-consultation/faqs" },
  robots: { index: true, follow: true },
  openGraph: { title: "Physician Consultation FAQs | Sutra Health", description: "Answers to common questions about preparation, existing health concerns, online appointments, donation information and medical care at Sutra Health.", url: "https://lifequality.org.in/services/physician-consultation/faqs", siteName: "Sutra Health", type: "article", locale: "en_IN" },
};

export default function ConsultationDetailPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-12 sm:py-16 lg:py-20">

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Frequently asked questions</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Physician consultation: frequently asked questions</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">These answers provide general information. Confirm current booking arrangements, fees and service availability directly with Sutra Health or the appointment provider.</p>
          </div>
        </Container>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl space-y-12">
            <section aria-labelledby="section-431117">
              <h2 id="section-431117" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">What should I bring?</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Bring relevant medical reports, a list of current medicines and notes about your main concerns or questions. Check whether the appointment provider has any additional preparation instructions.</p>
            </section>
            <section aria-labelledby="section-766443">
              <h2 id="section-766443" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Can I discuss an existing condition?</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">You can explain your concerns and medical history. The clinician will determine what can be assessed during the appointment and whether additional evaluation or referral is appropriate.</p>
            </section>
            <section aria-labelledby="section-479552">
              <h2 id="section-479552" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Is online consultation available?</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">The previous page linked to a Lybrate profile for Dr. Rakesh Sarwal. Check that profile for current availability and appointment terms.</p>
            </section>
            <section aria-labelledby="section-818037">
              <h2 id="section-818037" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">What is the consultation donation?</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">The legacy page listed a suggested donation of ₹100 per consultation. Confirm the current amount and arrangement before booking.</p>
            </section>
            <section aria-labelledby="section-183727">
              <h2 id="section-183727" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Can lifestyle approaches replace prescribed medicine?</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">No. Lifestyle practices may complement appropriate care, but they should not replace prescribed treatment. Speak with your treating clinician before stopping or changing any medicine.</p>
            </section>
            <section aria-labelledby="section-176062">
              <h2 id="section-176062" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Will I receive a diagnosis at every appointment?</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Not necessarily. The next steps depend on the concern, available information and clinical assessment. Further tests, examination or referral may be needed.</p>
            </section>
            <section aria-labelledby="section-45089">
              <h2 id="section-45089" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Are the self-assessment tools diagnostic?</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">No. The tools linked from the legacy page are for awareness or measurement exploration and do not provide a diagnosis.</p>
            </section>
            <section aria-labelledby="section-313718">
              <h2 id="section-313718" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Can I use ABHA instead of booking a consultation?</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">No. ABHA is a digital health identity used in participating digital health services. It is not a physician appointment or a diagnosis.</p>
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
