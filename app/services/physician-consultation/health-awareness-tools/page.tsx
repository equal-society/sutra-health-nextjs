import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Health-Awareness Tools Mentioned by Sutra Health | Sutra Health",
  description: "Explore the pulse, heart-rate variability and brain-health tools referenced on the previous physician consultation page, with limitations for self-assessment.",
  alternates: { canonical: "https://lifequality.org.in/services/physician-consultation/health-awareness-tools" },
  robots: { index: true, follow: true },
  openGraph: { title: "Health-Awareness Tools Mentioned by Sutra Health | Sutra Health", description: "Explore the pulse, heart-rate variability and brain-health tools referenced on the previous physician consultation page, with limitations for self-assessment.", url: "https://lifequality.org.in/services/physician-consultation/health-awareness-tools", siteName: "Sutra Health", type: "article", locale: "en_IN" },
};

export default function ConsultationDetailPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-12 sm:py-16 lg:py-20">
         
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Health-awareness tools</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Tools for health awareness</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">The previous consultation page linked to selected third-party tools for exploring pulse measurements, heart-rate variability (HRV) and brain-health information. These tools are for awareness and do not replace professional assessment.</p>
          </div>
        </Container>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl space-y-12">
            <section aria-labelledby="section-863340">
              <h2 id="section-863340" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Pulse measurement: HeartBeat</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">The legacy page recommended the HeartBeat app as one option for exploring pulse and health-related measurements using an Android phone. Read the app details and understand its limitations before relying on any measurement.</p>
              
            </section>
            <section aria-labelledby="section-811474">
              <h2 id="section-811474" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Heart-rate variability: Kubios HRV</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Heart-rate variability describes variation in the time between heartbeats. HRV can be explored in relation to physiological function, but an app reading alone does not diagnose stress, disease or overall health.</p>
            </section>
            <section aria-labelledby="section-286754">
              <h2 id="section-286754" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Brain-health awareness: Think Brain Health Hub</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">The previous page linked to the Think Brain Health Hub tool from Alzheimer’s Research UK. It is an educational awareness tool, not a medical diagnosis or substitute for professional assessment.</p>
            </section>
            <section aria-labelledby="section-830682">
              <h2 id="section-830682" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Use tools carefully</h2>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)]">Consumer apps may vary in accuracy and may not be suitable for everyone. Do not use these tools to delay medical care or to make medication decisions. Discuss concerning readings or symptoms with a qualified healthcare professional.</p>
            </section>

            <section aria-labelledby="tool-links">
              <h2 id="tool-links" className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">Links from the previous consultation page</h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-8 text-[var(--sutra-muted)]">
                <li><a className="underline underline-offset-4" href="https://f-droid.org/packages/eu.berdosi.app.heartbeat/" target="_blank" rel="noopener noreferrer">HeartBeat app on F-Droid ↗</a></li>
                <li><a className="underline underline-offset-4" href="https://play.google.com/store/apps/details?id=com.kubioshrvapp" target="_blank" rel="noopener noreferrer">Kubios HRV app on Google Play ↗</a></li>
                <li><a className="underline underline-offset-4" href="https://www.alzheimersresearchuk.org/brain-health-check-in/start-what-to-expect/" target="_blank" rel="noopener noreferrer">Think Brain Health Hub ↗</a></li>
              </ul>
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
