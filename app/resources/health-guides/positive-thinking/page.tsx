import Image from "next/image";
import Link from "next/link";
import ContextualBookingCTA from "@/components/shared/ContextualBookingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Positive Thinking: Healthier Mindset",
  description:
    "Understand positive thinking, how it differs from forced positivity, and simple ways to practise a more constructive response to everyday situations.",
  alternates: {
    canonical:
      "https://lifequality.org.in/resources/health-guides/positive-thinking",
  },
  
  openGraph: {
    title: "Positive Thinking: Healthier Mindset | Sutra Health",
    description: "Practical ways to notice thought patterns and practise a more constructive mindset.",
    url: "https://lifequality.org.in/resources/health-guides/positive-thinking",
    siteName: "Sutra Health",
    type: "article",
    locale: "en_IN",
    images: [{ url: "https://lifequality.org.in/images/og-image.webp", width: 1200, height: 630, alt: "Positive thinking health guide" }],
  },
  twitter: { card: "summary_large_image", title: "Positive Thinking: Healthier Mindset | Sutra Health", description: "Practical ways to practise a more constructive mindset.", images: ["https://lifequality.org.in/images/og-image.webp"] },
};

const practices = [
  {
    number: "01",
    title: "Notice the thought pattern",
    text:
      "Pause long enough to notice the thought, assumption or reaction before deciding how to respond.",
  },
  {
    number: "02",
    title: "Use gratitude deliberately",
    text:
      "Name one thing you value or appreciate. Keep it specific and genuine rather than using gratitude to dismiss a difficult experience.",
  },
  {
    number: "03",
    title: "Acknowledge what is happening",
    text:
      "Recognise the situation as it is before deciding what, if anything, you can change. Acceptance does not mean approval or giving up.",
  },
  {
    number: "04",
    title: "Come back to the present",
    text:
      "Bring attention back to the task, conversation or experience in front of you when your attention becomes caught in past events or future worries.",
  },
  {
    number: "05",
    title: "Focus on what you can influence",
    text:
      "Separate what you can influence from what you cannot control directly, then identify one useful next response.",
  },
];

const dailyHabits = [
  "Begin the day by identifying one thing you genuinely appreciate.",
  "Pause briefly before responding when a situation feels difficult.",
  "Notice recurring thoughts without immediately treating them as facts.",
  "Bring your attention back to the task or conversation in front of you.",
  "At the end of the day, note one thing that went well and one response you would reconsider.",
];

const faqs = [
  {
    question: "What does positive thinking mean?",
    answer:
      "It means noticing your thoughts and considering a constructive response to everyday situations. It does not require ignoring difficult emotions or pretending that problems are not there.",
  },
  {
    question: "Does positive thinking mean ignoring difficult emotions?",
    answer:
      "No. Difficult emotions are part of ordinary life. The focus is on recognising them, understanding the situation and responding as constructively as possible.",
  },
  {
    question: "What is a simple way to practise it?",
    answer:
      "Choose one small practice, such as noticing a recurring thought, pausing before reacting, writing one thing you appreciate or returning your attention to the present.",
  },
  {
    question: "How long does it take to build the habit?",
    answer:
      "There is no fixed timeline. The habit develops differently for different people and can change with circumstances, consistency and the type of practice used.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lifequality.org.in" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://lifequality.org.in/resources" },
    { "@type": "ListItem", position: 3, name: "Health Guides", item: "https://lifequality.org.in/resources/health-guides" },
    { "@type": "ListItem", position: 4, name: "Positive Thinking: Healthier Mindset", item: "https://lifequality.org.in/resources/health-guides/positive-thinking" },
  ],
};

export default function PositiveThinkingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-[#F7F5EF] text-[#202522]">
      <header className="relative isolate overflow-hidden border-b border-[var(--sutra-border)] bg-[var(--sutra-ink)]">

  {/* Background image */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/nature.webp')",
    }}
  />

  {/* Sutra Health overlay */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 bg-[var(--sutra-ink)]/60"
  />

  {/* Readability gradient */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--sutra-ink)]/90 via-[var(--sutra-ink)]/60 to-[var(--sutra-ink)]/25"
  />

  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--sutra-ink)]/65 via-transparent to-[var(--sutra-ink)]/15"
  />

  <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-14 pt-15 sm:px-8 sm:pb-18 lg:px-12 lg:pb-24">

    <div className="mt-6 items-center gap-12 lg:gap-20">

      <div>
        <div className="mb-7 flex items-center gap-3">
          <span
            className="h-px w-10 bg-[var(--sutra-sage)]"
            aria-hidden="true"
          />

          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-sage)]">
            Health Guide · Mind &amp; Wellbeing
          </p>
        </div>

        <h1 className="max-w-4xl font-[var(--font-serif)] text-[48px] leading-[0.98] tracking-[-0.035em] text-[var(--sutra-white)] sm:text-[64px] lg:text-[70px]">
          Positive Thinking:
          <br />
          A More Constructive Mindset
        </h1>

        <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[var(--sutra-white)]/85 sm:text-[18px]">
          A practical guide to noticing thought patterns, making space for
          difficult emotions, and choosing constructive responses in everyday
          life.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--sutra-white)]/70">
          <span>Health Guide</span>

          <span
            className="text-[var(--sutra-sage)]"
            aria-hidden="true"
          >
            •
          </span>

          <span>Mind &amp; wellbeing</span>
        </div>
      </div>

     

    </div>
  </div>
</header>

      <section className="border-b border-[rgba(32,37,34,0.10)] bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-9 px-5 py-14 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-16 lg:px-12 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
            Start here
          </p>
          <div>
            <p className="max-w-4xl font-serif text-[30px] leading-[1.2] tracking-[-0.02em] sm:text-[42px]">
              A constructive mindset can make room for difficult experiences.
            </p>
            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-[#65736D]">
              Notice what you are thinking, recognise what you can influence, and choose a response that fits the situation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(32,37,34,0.10)] bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] overflow-x-auto px-5 sm:px-8 lg:px-12">
          <nav className="flex min-w-max gap-8 py-5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#65736D]">
            <a href="#meaning" className="hover:text-[#17413D]">What it means</a>
            <a href="#practices" className="hover:text-[#17413D]">Five practices</a>
            <a href="#daily" className="hover:text-[#17413D]">Everyday practice</a>
            <a href="#questions" className="hover:text-[#17413D]">Questions</a>
          </nav>
        </div>
      </section>

      <section id="meaning" className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
              What it means
            </p>
            <div className="mt-6 h-px w-16 bg-[#91A298]" />
          </div>
          <div>
            <h2 className="max-w-3xl font-serif text-[38px] leading-[1.05] tracking-[-0.025em] sm:text-[54px]">
              A practical way to work with everyday thoughts and reactions.
            </h2>
            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-[#65736D]">
              Positive thinking can involve noticing unhelpful patterns, considering another perspective and responding without denying what is difficult. It is a self-reflection practice, not a treatment for a health condition.
            </p>
          </div>
        </div>
      </section>

      <section id="practices" className="bg-[#E7EDE8]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
              Five steps
            </p>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.025em] sm:text-[56px]">
              Five practices to try in everyday situations.
            </h2>
          </div>

          <div className="border-t border-[rgba(32,37,34,0.16)]">
            {practices.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 border-b border-[rgba(32,37,34,0.16)] py-8 sm:grid-cols-[72px_0.75fr_1.25fr] sm:gap-8 sm:py-10"
              >
                <span className="font-serif text-3xl text-[#17413D]">{item.number}</span>
                <h3 className="font-serif text-[27px] leading-tight sm:text-[32px]">{item.title}</h3>
                <p className="max-w-2xl text-[16px] leading-7 text-[#65736D]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="daily" className="border-b border-[rgba(32,37,34,0.10)] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
                Everyday practice
              </p>
              <h2 className="mt-5 max-w-md font-serif text-[40px] leading-[1.04] sm:text-[54px]">
                Keep the practice realistic.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-7 text-[#65736D]">
                The aim is not to feel positive all the time. A useful practice is one you can return to without turning it into another demand on yourself.
              </p>
            </div>

            <ol className="border-t border-[rgba(32,37,34,0.10)]">
              {dailyHabits.map((habit, index) => (
                <li
                  key={habit}
                  className="grid grid-cols-[42px_1fr] gap-5 border-b border-[rgba(32,37,34,0.10)] py-6 text-[16px] leading-7"
                >
                  <span className="font-semibold text-[#91A298]">
                    0{index + 1}
                  </span>
                  <span>{habit}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      

      <section id="questions" className="bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-10 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
              Questions
            </p>
            <h2 className="mt-5 font-serif text-[38px] leading-[1.05] sm:text-[52px]">
              Questions people often have about positive thinking
            </h2>
          </div>

          <div className="border-t border-[rgba(32,37,34,0.10)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-[rgba(32,37,34,0.10)] py-6">
                <summary className="flex cursor-pointer list-none justify-between gap-8 font-serif text-[21px] sm:text-[25px]">
                  <span>{faq.question}</span>
                  <span className="text-2xl text-[#17413D] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 text-[16px] leading-7 text-[#65736D]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContextualBookingCTA
        eyebrow="A useful next step"
        title="Want to discuss stress or wellbeing beyond general advice?"
        description="Use the guide as a starting point. A consultation can help you explain the situation and identify an appropriate next step."
        label="See appointment options"
      />

      <section className="border-t border-[rgba(32,37,34,0.10)] bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <p className="max-w-3xl text-[13px] leading-6 text-[#65736D]">
            This guide is for general education. Positive-thinking practices are not a substitute for professional mental-health care or other appropriate medical care. Individual experiences vary.
          </p>
        </div>
      </section>

   
      </main>
    </>
  );
}
