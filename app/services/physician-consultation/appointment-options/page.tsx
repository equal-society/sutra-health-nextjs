import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Physician Consultation Appointment Options and Donation | Sutra Health",
  description: "Find the appointment links and donation information previously listed for Sutra Health physician consultation. Confirm current availability and fees before booking.",
  alternates: { canonical: "https://lifequality.org.in/services/physician-consultation/appointment-options" },
  robots: { index: true, follow: true },
  openGraph: { title: "Physician Consultation Appointment Options and Donation | Sutra Health", description: "Find the appointment links and donation information previously listed for Sutra Health physician consultation. Confirm current availability and fees before booking.", url: "https://lifequality.org.in/services/physician-consultation/appointment-options", siteName: "Sutra Health", type: "article", locale: "en_IN" },
};

export default function ConsultationDetailPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-12 sm:py-16 lg:py-20">
            
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Appointments</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Appointment options and donation information</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">The previous consultation page listed an appointment portal, an online consultation profile and a suggested donation. Because booking arrangements can change, confirm the current details directly with the provider.</p>
          </div>
        </Container>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl space-y-12">
            <section aria-labelledby="section-572806">
              <h2 id="section-572806" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Book through Sutra Health</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Use the appointment portal to review the current booking process and available options. The appointment provider is the source of truth for available dates, eligibility and any booking requirements.</p>
            </section>
            <section aria-labelledby="section-77922">
              <h2 id="section-77922" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Online consultation profile</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">The earlier page linked to Dr. Rakesh Sarwal’s profile on Lybrate for online consultation. Use the external profile to check whether online appointments are currently offered and to review the current terms.</p>
            </section>
            <section aria-labelledby="section-849720">
              <h2 id="section-849720" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Suggested donation shown on the previous page</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">The supplied legacy HTML stated: “Suggested donation: Rs. 100 per consultation.” This is historical page content, not a guarantee that the amount or arrangement remains current. Please confirm it with Sutra Health before booking.</p>
            </section>
            <section aria-labelledby="section-434945">
              <h2 id="section-434945" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Booking links</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Open the current appointment portal or check the external online consultation profile. If either link is unavailable, contact Sutra Health to confirm the correct booking route.</p>
            </section>

            <section aria-labelledby="booking-links">
              <h2 id="booking-links" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Appointment links</h2>
              <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <a href="https://appointment-sutrahealth.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center bg-[var(--sutra-teal)] px-5 py-3 text-sm font-bold text-white hover:opacity-90">Open appointment portal ↗</a>
                <a href="https://www.lybrate.com/faridabad/doctor/dr-rakesh-sarwal-preventive-medicine-specialist" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center border border-[var(--sutra-border-strong)] px-5 py-3 text-sm font-bold text-[var(--sutra-teal)] hover:bg-white">Check Lybrate profile ↗</a>
              </div>
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
