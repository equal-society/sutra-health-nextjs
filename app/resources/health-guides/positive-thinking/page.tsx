import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Positive Thinking: Benefits, Practices & Positive Mindset | Sutra Health",
  description:
    "Learn practical positive thinking practices through gratitude, acceptance, self-awareness and present-moment awareness.",
  alternates: {
    canonical:
      "https://lifequality.org.in/resources/health-guides/positive-thinking",
  },
};

const practices = [
  {
    number: "01",
    title: "Notice your thoughts",
    text:
      "Begin by becoming more aware of how you respond to everyday situations. Awareness can create space between a thought and your response.",
  },
  {
    number: "02",
    title: "Practise gratitude",
    text:
      "Bring attention to things you value or appreciate. Gratitude can become a simple reflective practice rather than a demand to feel positive all the time.",
  },
  {
    number: "03",
    title: "Make space for acceptance",
    text:
      "Acceptance does not mean ignoring a difficult situation. It means recognising what is happening and responding as constructively as possible.",
  },
  {
    number: "04",
    title: "Return to the present",
    text:
      "Practise noticing what is happening now instead of repeatedly dwelling on what has already happened or worrying about what might happen next.",
  },
  {
    number: "05",
    title: "Choose a constructive response",
    text:
      "When difficulties arise, consider what is within your control and what practical response may be helpful.",
  },
];

const dailyHabits = [
  "Start the day by noticing one thing you are grateful for.",
  "Pause before reacting to a difficult situation.",
  "Spend a few minutes observing your thoughts without judging them.",
  "Return your attention to the activity in front of you.",
  "Reflect on what went well and what you would approach differently.",
];

const faqs = [
  {
    question: "What is positive thinking?",
    answer:
      "Positive thinking is an approach that encourages awareness of thoughts and a more constructive response to everyday experiences. It does not require ignoring difficult emotions or problems.",
  },
  {
    question: "Does positive thinking mean ignoring negative emotions?",
    answer:
      "No. Positive thinking is not about pretending that difficult experiences do not exist. The focus is on awareness, acceptance and choosing a constructive response where possible.",
  },
  {
    question: "How can I practise positive thinking every day?",
    answer:
      "Simple practices can include gratitude, observing your thoughts, accepting situations as they are, returning attention to the present and reflecting on practical responses.",
  },
  {
    question: "How long does it take to develop a positive mindset?",
    answer:
      "There is no single timeline. Building habits of reflection, gratitude and present-moment awareness is an individual process that can change with circumstances and consistency.",
  },
];

export default function PositiveThinkingPage() {
  return (
    <main className="bg-[#F7F5EF] text-[#202522]">
      <header className="border-b border-[rgba(32,37,34,0.10)]">
        <div className="mx-auto max-w-[1280px] px-5 pb-14 pt-15 sm:px-8 sm:pb-18 lg:px-12 lg:pb-24">
          {/* <nav
            aria-label="Breadcrumb"
            className="mb-14 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#65736D] sm:mb-18"
          >
            <ol className="flex flex-wrap items-center gap-3">
              <li><Link href="/" className="hover:text-[#17413D]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/resources" className="hover:text-[#17413D]">Resources</Link></li>
              <li aria-hidden="true">/</li>
              <li>Health Guides</li>
            </ol>
          </nav> */}

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#91A298]" aria-hidden="true" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
                  Health Guide · Mind & Wellbeing
                </p>
              </div>

              <h1 className="max-w-4xl font-serif text-[48px] leading-[0.98] tracking-[-0.035em] sm:text-[64px] lg:text-[70px]">
                Positive Thinking:
                <br />
                A Healthier Mindset
              </h1>

              <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[#65736D] sm:text-[18px]">
                Practical ways to develop a more constructive mindset through
                gratitude, acceptance, self-awareness and present-moment
                awareness.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#65736D]">
                <span>Health Guide</span>
                <span className="text-[#91A298]">•</span>
                <span>Mind & wellbeing</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E7EDE8]">
                <Image
                  src="/images/about-us.webp"
                  alt="A calm meditation scene representing reflection and wellbeing"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
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
              Positive thinking is not about ignoring difficult experiences.
            </p>
            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-[#65736D]">
              It is about developing greater awareness of your thoughts,
              responding constructively and making space for gratitude,
              acceptance and present-moment awareness.
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
              A constructive way of responding to everyday life.
            </h2>
            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-[#65736D]">
              Positive thinking can encourage reflection, gratitude,
              acceptance and a constructive outlook. Individual experiences
              vary, and it should not be presented as a guaranteed treatment
              for a health condition.
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
              Five practices for a more positive mindset.
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
                Small moments count.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-7 text-[#65736D]">
                The aim is not to stay positive every moment. It is to develop
                simple habits of awareness and constructive response.
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

      <section className="bg-[#C8BDA7]">
        <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <p className="max-w-4xl font-serif text-[31px] leading-[1.18] tracking-[-0.02em] sm:text-[44px]">
            “Acceptance can encourage a calmer and more constructive response.”
          </p>
        </div>
      </section>

      <section id="questions" className="bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-10 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
              Questions
            </p>
            <h2 className="mt-5 font-serif text-[38px] leading-[1.05] sm:text-[52px]">
              Common questions about positive thinking
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

      <section className="border-t border-[rgba(32,37,34,0.10)] bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <p className="max-w-3xl text-[13px] leading-6 text-[#65736D]">
            This guide is for general education. Positive thinking should not
            be presented as a guaranteed treatment for a health condition.
            Individual experiences vary.
          </p>
        </div>
      </section>

      <section className="bg-[#17413D]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#91A298]">
              Sutra Health
            </p>
            <h2 className="mt-2 font-serif text-[30px] text-white sm:text-[38px]">
              Want to explore your wellbeing?
            </h2>
          </div>
          <Link
            href="/book-appointment"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#91A298] px-6 text-sm font-semibold text-[#202522] hover:bg-[#A7B4AC]"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
