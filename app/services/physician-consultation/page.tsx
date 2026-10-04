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
    "Discuss a health concern, medical history and available reports with a physician at Sutra Health in Faridabad. Review appointment options and prepare for your visit.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Physician Consultation in Faridabad | Sutra Health",
    description:
      "Understand what to expect from a physician consultation, what to bring and how to request an appointment at Sutra Health.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const consultationIncludes = [
  {
    title: "Your main concern",
    description:
      "Describe your symptoms, when they started and what you want addressed first.",
  },
  {
    title: "Relevant health history",
    description:
      "Cover relevant diagnoses, past treatment, medicines and supplements.",
  },
  {
    title: "Reports and questions",
    description:
      "Go through reports you already have and discuss whether further tests are needed.",
  },
  {
    title: "A plan for what comes next",
    description:
      "Discuss suitable treatment, further evaluation, referral or follow-up.",
  },
];

const preparation = [
  "Recent reports or test results, if you have them",
  "A list or photos of your current medicines and supplements",
  "Relevant prescriptions or discharge notes",
  "Two or three questions you want to make sure you ask",
];

const faqs = [
  {
    question: "Do I need to get tests done before the appointment?",
    answer:
      "No. Bring reports you already have. Please arrange additional tests only if a clinician has advised you to do so.",
  },
  {
    question: "Can I bring my current prescriptions?",
    answer:
      "Yes. Bring your prescriptions or a list of medicines and supplements so the clinician can understand your current care.",
  },
  {
    question: "Will the consultation include lifestyle advice?",
    answer:
      "When relevant, the discussion may include food, activity, sleep or other daily factors. Any advice depends on your individual assessment and does not replace indicated medical treatment.",
  },
  {
    question: "Are online appointments available?",
    answer:
      "An external appointment profile is linked on this page. Please check it for current availability, consultation mode and booking terms before confirming.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Physician Consultation | Sutra Health",
  url: PAGE_URL,
  description: String(metadata.description),
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
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mobile.webp')" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#10211E]/65" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12 lg:pb-20">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/85 sm:text-sm">
            Physician consultation · Faridabad
          </p>
          <h1
            id="consultation-title"
            className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.025em] text-white"
          >
            Talk through your health concerns. Understand your next step.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl sm:leading-8">
            Consultation brings medical care together with relevant discussion of nutrition, daily habits, Yoga therapy and Ayurveda, based on your health needs.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href={BOOKING_URL}
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#F7F5EF] px-5 text-base font-semibold text-[#17413D] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-6"
            >
              Request an appointment <span className="ml-3" aria-hidden="true">→</span>
            </Link>
            <a
              href={ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center border border-white/55 px-5 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-6"
            >
              Check online appointment options <span className="ml-3" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="consultation-includes-title" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)]">
              Consultation focus
            </p>
            <h2
              id="consultation-includes-title"
              className="mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl"
            >
              A clinical review with a wider perspective.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl sm:leading-8">
              The physician considers your medical history, current concerns and relevant lifestyle factors. Where appropriate, the discussion may include nutrition, physical activity, emotional wellbeing, Yoga or other integrative approaches alongside medical care.
            </p>
          </div>
          <div className="mt-8 grid gap-0 border-y border-[var(--sutra-border-strong)] sm:grid-cols-2 sm:gap-x-10">
            {consultationIncludes.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-[var(--sutra-border-strong)] py-6 last:border-b-0 sm:odd:pr-6 sm:even:pl-6 sm:nth-[n+3]:border-b-0"
              >
                <p className="text-sm font-semibold tracking-[0.1em] text-[var(--sutra-teal)]">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-snug">{item.title}</h3>
                <p className="mt-3 text-lg leading-8 text-[var(--sutra-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="prepare-title" className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)]">
              Before you visit
            </p>
            <h2 id="prepare-title" className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Bring what you already have.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--sutra-muted)]">
              Bring available information if convenient; a missing document should not delay necessary care.
            </p>
          </div>
          <ul className="divide-y divide-[var(--sutra-border)] border-y border-[var(--sutra-border)]">
            {preparation.map((item) => (
              <li key={item} className="flex gap-3 py-4 text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl">
                <span aria-hidden="true" className="mt-0.5 text-[var(--sutra-teal)]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="clinician-title" className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)]">
              Consultation
            </p>
            <h2 id="clinician-title" className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Dr. Rakesh Sarwal
            </h2>
            <p className="mt-2 text-base leading-7 text-[var(--sutra-muted)]">
              MBBS, MPH, DrPH
            </p>
          </div>
          <div className="max-w-3xl text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl sm:leading-8">
            <p>
              Dr. Rakesh Sarwal is listed on the Life Quality consultation page for physician consultations in Faridabad.
            </p>
            <p className="mt-4 text-base leading-7">
              Suggested donation listed by Life Quality: Rs. 100 per consultation. Online appointment options are linked through Dr. Rakesh Sarwal’s Lybrate profile.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="abha-title" className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)]">Digital health identity</p>
            <h2 id="abha-title" className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Get your ABHA</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--sutra-muted)]">An Ayushman Bharat Health Account (ABHA) provides a digital health identity that can be used to access and manage health records through participating digital health services.</p>
          </div>
          <a href="https://abha.abdm.gov.in/abha/v3" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-teal)] px-6 text-base font-semibold text-[var(--sutra-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sutra-teal)]">Create ABHA account <span className="ml-3" aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section aria-labelledby="health-tools-title" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)]">For awareness</p>
            <h2 id="health-tools-title" className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Useful self-assessment tools</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--sutra-muted)]">These resources offer general health information. They are not diagnostic tools and do not replace clinical assessment.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="border border-[var(--sutra-border)] p-6 sm:p-7">
              <h3 className="font-serif text-2xl">Test your pulse</h3>
              <p className="mt-3 text-base leading-7 text-[var(--sutra-muted)]">EQUAL lists HeartBeat for exploring pulse measurements on Android. Phone-based readings are for awareness, not diagnosis.</p>
              <a className="mt-5 inline-flex min-h-11 items-center font-semibold text-[var(--sutra-teal)] underline underline-offset-4" href="https://f-droid.org/packages/eu.berdosi.app.heartbeat/" target="_blank" rel="noopener noreferrer">Get HeartBeat from F-Droid ↗</a>
            </article>
            <article className="border border-[var(--sutra-border)] p-6 sm:p-7">
              <h3 className="font-serif text-2xl">Understand HRV</h3>
              <p className="mt-3 text-base leading-7 text-[var(--sutra-muted)]">HRV measures variation in the time between heartbeats and is studied in relation to stress, recovery and autonomic function.</p>
              <a className="mt-5 inline-flex min-h-11 items-center font-semibold text-[var(--sutra-teal)] underline underline-offset-4" href="https://play.google.com/store/apps/details?id=com.kubioshrvapp" target="_blank" rel="noopener noreferrer">Get Kubios HRV ↗</a>
            </article>
            <article className="border border-[var(--sutra-border)] p-6 sm:p-7">
              <h3 className="font-serif text-2xl">Explore brain health</h3>
              <p className="mt-3 text-base leading-7 text-[var(--sutra-muted)]">The Think Brain Health Hub tool introduces factors associated with brain health. This self-assessment is for awareness and does not provide a medical diagnosis.</p>
              <a className="mt-5 inline-flex min-h-11 items-center font-semibold text-[var(--sutra-teal)] underline underline-offset-4" href="https://www.alzheimersresearchuk.org/brain-health-check-in/start-what-to-expect/" target="_blank" rel="noopener noreferrer">Check brain health ↗</a>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="consultation-faq-title" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)]">
              Before booking
            </p>
            <h2 id="consultation-faq-title" className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Common questions
            </h2>
          </div>
          <div className="mt-7 max-w-4xl divide-y divide-[var(--sutra-border)] border-y border-[var(--sutra-border)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-1 text-base font-semibold leading-7 text-[var(--sutra-ink)] marker:content-none sm:text-lg sm:leading-8">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="text-xl text-[var(--sutra-teal)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-3 pr-2 text-lg leading-8 text-[var(--sutra-muted)] sm:pr-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Explore appointment options
            </h2>
            <p className="mt-2 text-lg leading-8 text-white/90">
              Choose an appointment route to view current options.
            </p>
          </div>
          <Link
            href={BOOKING_URL}
            className="inline-flex min-h-12 w-full items-center justify-center bg-white px-6 text-base font-semibold text-[var(--sutra-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto lg:self-auto"
          >
            Request an appointment <span className="ml-3" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-4 py-5 text-base leading-7 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        This page is for general information and does not provide a diagnosis or
        emergency service. Treatment and investigation decisions depend on an
        individual clinical assessment. Continue prescribed care unless your
        treating clinician advises otherwise. For urgent symptoms, seek timely
        medical care through an appropriate local service.
      </p>
    </main>
  );
}
