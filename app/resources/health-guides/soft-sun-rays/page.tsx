import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefits of Soft Sun Rays | Morning Sunlight & Wellbeing | Sutra Health",
  description:
    "Explore morning daylight, outdoor routines, Vitamin D and sensible sun exposure as part of everyday wellbeing.",
  alternates: {
    canonical:
      "https://lifequality.org.in/resources/health-guides/soft-sun-rays",
  },
};

const benefits = [
  {
    number: "01",
    title: "Vitamin D",
    text:
      "Sunlight enables the body to produce Vitamin D. Appropriate sun exposure is one source of Vitamin D.",
  },
  {
    number: "02",
    title: "Heart health",
    text:
      "The original guide places daylight and time outdoors within healthy daily routines; it does not present sunlight as a treatment for heart conditions.",
  },
  {
    number: "03",
    title: "Mood & wellbeing",
    text:
      "Time outdoors and daylight can be part of a healthy daily routine and may support general wellbeing and mood.",
  },
  {
    number: "04",
    title: "Movement & comfort",
    text:
      "Outdoor time can create space for gentle movement, fresh air and time in nature. Pain has many causes, so sunlight should not be presented as a treatment.",
  },
];

const routine = [
  {
    number: "01",
    title: "Step outside",
    text: "When practical, spend a little time outdoors in morning daylight.",
  },
  {
    number: "02",
    title: "Let daylight into the day",
    text: "Use outdoor time as a short break from screens and a chance to connect with the natural environment.",
  },
  {
    number: "03",
    title: "Keep it realistic",
    text: "Keep the habit small enough to fit naturally into your everyday life.",
  },
];

const faqs = [
  {
    question: "Why is morning sunlight discussed in relation to wellbeing?",
    answer:
      "Morning daylight can be a simple way to spend time outdoors and make daylight part of a healthy daily routine.",
  },
  {
    question: "Does sunlight help the body produce Vitamin D?",
    answer:
      "Yes. Sunlight enables the body to produce Vitamin D. Appropriate sun exposure is one source of Vitamin D.",
  },
  {
    question: "Is more sunlight always better?",
    answer:
      "No. The aim is not unlimited sun exposure. Exposure should be appropriate to the individual and local conditions, with sensible protection from excessive ultraviolet exposure.",
  },
  {
    question: "Can morning sunlight improve mood?",
    answer:
      "Daylight and time outdoors can be part of a healthy routine and may support general wellbeing and mood.",
  },
];

export default function SoftSunRaysPage() {
  return (
    <main className="bg-[#F7F5EF] text-[#202522]">
      <header className="relative isolate overflow-hidden border-b border-[var(--sutra-border)] bg-[var(--sutra-ink)]">

  {/* Background image */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/rooftop1.jpg')",
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

  <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-14 pt-15 sm:px-8 lg:px-12 lg:pb-24">

    <div className=" items-center gap-12  lg:gap-20">

      <div>
        <div className="mb-7 flex items-center gap-3">
          <span
            className="h-px w-10 bg-[var(--sutra-sage)]"
            aria-hidden="true"
          />

          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-sage)]">
            Health Guide · Lifestyle &amp; Wellbeing
          </p>
        </div>

        <h1 className="max-w-4xl font-[var(--font-serif)] text-[50px] leading-[0.96] tracking-[-0.035em] text-[var(--sutra-white)] sm:text-[66px] lg:text-[82px]">
          Benefits of
          <br />
          Soft Sun Rays
        </h1>

        <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[var(--sutra-white)]/85 sm:text-[18px]">
          Explore information about soft morning sunlight, daylight,
          outdoor habits and general wellbeing.
        </p>

        <div className="mt-8 flex flex-wrap gap-5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--sutra-white)]/70">
          <span>Health Guide</span>

          <span
            className="text-[var(--sutra-sage)]"
            aria-hidden="true"
          >
            •
          </span>

          <span>Outdoor wellbeing</span>
        </div>
      </div>

   

    </div>
  </div>
</header>

      <section className="border-b border-[rgba(32,37,34,0.10)] bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-9 px-5 py-14 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-16 lg:px-12 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
            A simple habit
          </p>
          <div>
            <p className="max-w-4xl font-serif text-[30px] leading-[1.2] tracking-[-0.02em] sm:text-[42px]">
              Make a little room for daylight and the outdoors.
            </p>
            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-[#65736D]">
              This guide looks at soft morning sunlight through four themes: Vitamin D,
              outdoor routine, mood and wellbeing, and everyday comfort.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(32,37,34,0.10)] bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] overflow-x-auto px-5 sm:px-8 lg:px-12">
          <nav className="flex min-w-max gap-8 py-5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#65736D]">
            <a href="#benefits" className="hover:text-[#17413D]">Benefits</a>
            <a href="#routine" className="hover:text-[#17413D]">Everyday routine</a>
            <a href="#safety" className="hover:text-[#17413D]">Staying sensible</a>
            <a href="#questions" className="hover:text-[#17413D]">Questions</a>
          </nav>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
            What the guide explores
          </p>
          <h2 className="max-w-4xl font-serif text-[39px] leading-[1.05] tracking-[-0.025em] sm:text-[54px]">
            What soft sunlight can contribute to a healthy routine.
          </h2>
        </div>

        <div className="border-t border-[rgba(32,37,34,0.10)]">
          {benefits.map((item) => (
            <article
              key={item.number}
              className="grid gap-5 border-b border-[rgba(32,37,34,0.10)] py-8 sm:grid-cols-[72px_0.75fr_1.25fr] sm:gap-8 sm:py-10"
            >
              <span className="font-serif text-3xl text-[#17413D]">{item.number}</span>
              <h3 className="font-serif text-[27px] leading-tight sm:text-[32px]">{item.title}</h3>
              <p className="max-w-2xl text-[16px] leading-7 text-[#65736D]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[30px] bg-[#E7EDE8]">
          <div className="grid items-center lg:grid-cols-[1.15fr_0.85fr]">
            <div className="px-7 py-12 sm:px-12 lg:px-16 lg:py-20">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
                A slower start
              </p>
              <p className="mt-5 max-w-2xl font-serif text-[32px] leading-[1.15] tracking-[-0.025em] sm:text-[44px]">
                “Morning daylight can be a small, repeatable part of your day.”
              </p>
              <p className="mt-6 max-w-xl text-[16px] leading-7 text-[#65736D]">
                The aim is not to add another complicated health routine. Make room for
                simple outdoor habits when they fit your circumstances.
              </p>
            </div>

            <div className="relative min-h-[280px] bg-[#C8BDA7] lg:min-h-[390px]">
              <Image
                src="/images/rooftop.avif"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="routine" className="border-y border-[rgba(32,37,34,0.10)] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
                Everyday practice
              </p>
              <h2 className="mt-5 max-w-md font-serif text-[40px] leading-[1.04] sm:text-[54px]">
                Keep it simple.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-7 text-[#65736D]">
                The most useful routine is one that you can realistically repeat.
              </p>
            </div>

            <div className="border-t border-[rgba(32,37,34,0.10)]">
              {routine.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-4 border-b border-[rgba(32,37,34,0.10)] py-7 sm:grid-cols-[70px_1fr] sm:gap-8 sm:py-9"
                >
                  <span className="text-[12px] font-semibold tracking-[0.12em] text-[#91A298]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-[25px] sm:text-[30px]">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-[16px] leading-7 text-[#65736D]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
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
              Common questions about morning sunlight
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
            This health guide is adapted from existing Life Quality educational
            material on soft sun rays. It is provided for general education and
            does not replace individual medical advice. Sun exposure should be
            approached sensibly, and individual needs can vary.
          </p>
        </div>
      </section>

     
    </main>
  );
}
