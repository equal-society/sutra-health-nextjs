import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/physician-consultation`;
const BOOKING_URL = "/book-appointment";
const ONLINE_URL =
  "https://www.lybrate.com/faridabad/doctor/dr-rakesh-sarwal-preventive-medicine-specialist";

export const metadata: Metadata = {
  title: "Physician Consultation in Faridabad | Sutra Health",
  description:
    "Consult Dr. Rakesh Sarwal at Sutra Health in Faridabad or explore online appointment options. Discuss health concerns, medical history, relevant investigations and a practical care plan.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Physician Consultation in Faridabad | Sutra Health",
    description:
      "A physician-led discussion of your health concerns, relevant investigations and practical next steps, with appropriate medical care at the centre.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const consultationSteps = [
  {
    number: "01",
    title: "Tell us what is concerning you",
    description:
      "We begin with your main health concern, medical history, current care and what you want help understanding.",
  },
  {
    number: "02",
    title: "Review the relevant picture",
    description:
      "Available reports and everyday factors—such as food, activity, sleep and stress—can be considered where they relate to your concern.",
  },
  {
    number: "03",
    title: "Discuss what may be needed",
    description:
      "The physician discusses whether investigations, treatment review, referral or follow-up are appropriate. Do not arrange new tests in advance unless advised.",
  },
  {
    number: "04",
    title: "Agree on realistic next steps",
    description:
      "You leave with guidance on the next steps discussed for your situation, alongside appropriate medical care.",
  },
];

const bringList = [
  "Recent test reports or investigation results, if available",
  "Current medicines and supplements",
  "Relevant prescriptions or discharge summaries",
  "Your main questions and health priorities",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Physician Consultation | Sutra Health",
  url: PAGE_URL,
  description:
    "Physician consultation information for patients in Faridabad and those exploring online appointments.",
  isPartOf: {
    "@type": "WebSite",
    name: "Sutra Health",
    url: SITE_URL,
  },
  about: {
    "@type": "MedicalProcedure",
    name: "Physician consultation",
    procedureType: "https://schema.org/NoninvasiveProcedure",
  },
};

export default function PhysicianConsultationPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section
        aria-labelledby="consultation-title"
        className="relative isolate flex items-end overflow-hidden bg-[#173B36]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mobile.webp')" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#10211E]/65" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/75">
            Physician consultation · Faridabad
          </p>
          <h1
            id="consultation-title"
            className="mt-4 max-w-3xl font-serif text-[42px] leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl"
          >
            Make sense of your health concerns. Know what to do next.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Speak with a physician about your symptoms, health history and
            questions. Review relevant reports and discuss a considered way
            forward, including medical care and further assessment when needed.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={BOOKING_URL}
              className="inline-flex min-h-12 items-center justify-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white"
            >
              Request an appointment <span className="ml-3" aria-hidden="true">→</span>
            </Link>
            <a
              href={ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-white/45 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View online consultation <span className="ml-3" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
              Your consultation
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-5xl">
              Care starts by listening to your story.
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
            <p>
              A consultation is a chance to explain what has changed, what you
              have already tried and what remains unclear. The physician
              considers your medical information and the context of your daily
              life to help determine which questions need attention.
            </p>
            <p>
              Where suitable, discussion may include lifestyle factors or
              supportive approaches such as nutrition or Yoga therapy. These
              complement—not replace—medical assessment and indicated
              treatment.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
              How the appointment works
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-5xl">
              From your concern to a considered next step.
            </h2>
          </div>
          <div className="mt-8 grid gap-0 border-y border-[var(--sutra-border-strong)] sm:grid-cols-2 sm:gap-x-10">
            {consultationSteps.map((step) => (
              <article
                key={step.number}
                className="border-b border-[var(--sutra-border-strong)] py-6 last:border-b-0 sm:odd:pr-6 sm:even:pl-6 sm:nth-[n+3]:border-b-0"
              >
                <p className="text-xs font-semibold tracking-[0.12em] text-[var(--sutra-teal)]">
                  {step.number}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--sutra-muted)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
              Prepare if you can
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Bring the information you already have.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--sutra-muted)]">
              You do not need to complete a new set of tests before booking
              unless a clinician has specifically asked you to.
            </p>
          </div>
          <ul className="divide-y divide-[var(--sutra-border)] border-y border-[var(--sutra-border)]">
            {bringList.map((item) => (
              <li key={item} className="py-4 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
              Consultation information
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              With Dr. Rakesh Sarwal
            </h2>
          </div>
          <div className="max-w-3xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
            <p>
              The legacy Life Quality consultation page identifies Dr. Rakesh
              Sarwal (MBBS, MPH, DrPH) and lists in-person consultation in
              Faridabad alongside an online profile. Confirm current clinician
              availability, appointment mode and applicable contribution with
              the booking team before visiting.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={BOOKING_URL}
                className="inline-flex min-h-11 items-center justify-center bg-[var(--sutra-teal)] px-5 text-sm font-semibold text-white"
              >
                Check appointment options <span className="ml-2" aria-hidden="true">→</span>
              </Link>
              <a
                href={ONLINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-[var(--sutra-border-strong)] px-5 text-sm font-semibold text-[var(--sutra-teal)]"
              >
                Online profile <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Take the first step with your questions.
            </h2>
            <p className="mt-2 text-base leading-7 text-white/80">
              Request an appointment to discuss your health concerns and
              appropriate care options.
            </p>
          </div>
          <Link
            href={BOOKING_URL}
            className="inline-flex min-h-12 items-center self-start bg-white px-6 text-sm font-semibold text-[var(--sutra-teal)] lg:self-auto"
          >
            Request an appointment <span className="ml-3" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-5 py-4 text-xs leading-5 text-[var(--sutra-muted)] sm:px-8 lg:px-12">
        This page is informational and does not provide a diagnosis. Decisions
        about investigations, referrals and treatment depend on individual
        clinical assessment. Continue prescribed care unless your treating
        clinician advises otherwise.
      </p>
    </main>
  );
}
