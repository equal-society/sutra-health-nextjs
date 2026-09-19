// app/what-we-do/page.tsx

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";

const practices = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Practical support around nutrition, sleep, stress and everyday habits.",
    image: "/images/what-we-do/lifestyle-medicine.webp",
    href: "/what-we-do/lifestyle",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Personalised guidance around food and eating habits that fits your daily life.",
    image: "/images/what-we-do/nutrition-counselling.webp",
    href: "/what-we-do/nutrition",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Adapted yoga practices shaped around your health, ability and comfort.",
    image: "/images/what-we-do/therapeutic-yoga.webp",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    number: "04",
    title: "Behaviour & Mind Practices",
    description:
      "Practical support for habits, stress and changes you can sustain.",
    image: "/images/what-we-do/behaviour-mind.webp",
    href: "/what-we-do/breath-mindfulness",
  },
];

const waysOfWorking = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with your health, concerns, goals and everyday routine.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "Look at lifestyle factors that may be relevant to your health.",
  },
  {
    number: "03",
    title: "Personalise",
    description:
      "Build practical recommendations around your needs and ability.",
  },
  {
    number: "04",
    title: "Practise",
    description:
      "Introduce changes through nutrition, yoga and lifestyle practices.",
  },
  {
    number: "05",
    title: "Sustain",
    description:
      "Focus on habits that can work in everyday life over time.",
  },
  {
    number: "06",
    title: "Adapt",
    description:
      "Adjust the approach as your needs and circumstances change.",
  },
];

const healthAreas = [
  {
    title: "High Blood Pressure",
    href: "/conditions/high-blood-pressure",
  },
  {
    title: "Metabolic Health",
    href: "/conditions/metabolic-health",
  },
  {
    title: "Weight Management",
    href: "/conditions/weight-management",
  },
  {
    title: "Digestive & Gut Health",
    href: "/conditions/digestive-gut-health",
  },
  {
    title: "Arthritis & Joint Pain",
    href: "/conditions/arthritis-joint-pain",
  },
  {
    title: "Migraine & Headache",
    href: "/conditions/migraine-headache",
  },
  {
    title: "Women's Health & Wellbeing",
    href: "/conditions/womens-health",
  },
  {
    title: "Stress & Wellbeing",
    href: "/conditions/stress-wellbeing",
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="bg-[#F7F5EF] text-[#202522]">
      {/* HERO */}
      <section className="border-b border-[#202522]/10">
        <div className="mx-auto max-w-[1180px] px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-[850px]">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
              What we do
            </p>

            <h1 className="mt-5 max-w-[800px] font-serif text-[43px] font-medium leading-[1.08] tracking-[-0.025em] text-[#202522] sm:text-[54px] lg:text-[64px]">
              Care built around
              <br />
              the whole you.
            </h1>

            <p className="mt-6 max-w-[690px] font-sans text-[17px] leading-[1.75] text-[#4F5A54] sm:text-[18px]">
              Sutra Health brings together lifestyle medicine, nutrition,
              therapeutic yoga and mind practices to help you understand your
              health and build healthier habits around everyday life.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-sans text-[14px] text-[#65736D]">
              <span>Doctor-led</span>
              <span>Evidence-informed</span>
              <span>Whole-person care</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICES */}
      <section aria-labelledby="practices-title" className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-[700px]">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
              Our practices
            </p>

            <h2
              id="practices-title"
              className="mt-4 font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-[#202522] sm:text-[40px]"
            >
              Ways we can support you.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-10 lg:grid-cols-2 lg:gap-5">
            {practices.map((practice) => (
              <Link
                key={practice.number}
                href={practice.href}
                className="group border border-[#202522]/10 bg-[#F7F5EF] transition-colors duration-300 hover:border-[#17413D]/30"
              >
                <div className="flex gap-5 p-5 sm:gap-6 sm:p-6">
                  {/* IMAGE */}
                  <div className="h-[120px] w-[120px] shrink-0 overflow-hidden sm:h-[128px] sm:w-[128px]">
                    <img
                      src={practice.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-[#65736D]">
                      {practice.number}
                    </span>

                    <h3 className="mt-2 font-serif text-[23px] font-medium leading-[1.2] tracking-[-0.015em] text-[#202522] sm:text-[25px]">
                      {practice.title}
                    </h3>

                    <p className="mt-3 font-sans text-[16px] leading-[1.72] text-[#4F5A54]">
                      {practice.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 font-sans text-[14px] font-medium text-[#17413D]">
                      <span>Explore</span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section
        aria-labelledby="how-we-work-title"
        className="bg-[#F7F5EF]"
      >
        <div className="mx-auto max-w-[1180px] px-6 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                How we work
              </p>

              <h2
                id="how-we-work-title"
                className="mt-4 max-w-[480px] font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-[#202522] sm:text-[40px]"
              >
                Start where you are.
              </h2>

              <p className="mt-5 max-w-[450px] font-sans text-[16px] leading-[1.75] text-[#4F5A54] sm:text-[17px]">
                Your care begins with understanding your health, your routine
                and what matters to you. From there, we build practical steps
                that can fit into everyday life.
              </p>
            </div>

            <div className="border-t border-[#202522]/10">
              {waysOfWorking.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#202522]/10 py-5 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-6"
                >
                  <span className="pt-1 font-sans text-[11px] font-medium tracking-[0.1em] text-[#65736D]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-[21px] font-medium leading-[1.25] text-[#202522] sm:text-[23px]">
                      {step.title}
                    </h3>

                    <p className="mt-2 font-sans text-[16px] leading-[1.7] text-[#4F5A54]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH AREAS */}
      <section
        aria-labelledby="health-areas-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1180px] px-6 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                Health areas
              </p>

              <h2
                id="health-areas-title"
                className="mt-4 font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-[#202522] sm:text-[40px]"
              >
                Explore the areas we support.
              </h2>
            </div>

            <Link
              href="/conditions"
              className="inline-flex shrink-0 items-center gap-2 font-sans text-[14px] font-medium text-[#17413D]"
            >
              <span>All health areas</span>
              <ArrowUpRight size={15} strokeWidth={1.7} />
            </Link>
          </div>

          <div className="mt-9 grid border-t border-[#202522]/10 sm:mt-10 sm:grid-cols-2">
            {healthAreas.map((area, index) => (
              <Link
                key={area.title}
                href={area.href}
                className={`group flex items-center justify-between gap-5 border-b border-[#202522]/10 py-5 sm:py-6 ${
                  index % 2 === 0
                    ? "sm:border-r sm:pr-7 lg:pr-10"
                    : "sm:pl-7 lg:pl-10"
                }`}
              >
                <span className="font-serif text-[20px] font-medium leading-[1.3] text-[#202522] transition-colors duration-300 group-hover:text-[#17413D] sm:text-[22px]">
                  {area.title}
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#65736D] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#17413D]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ASSESSMENT */}
      <section className="bg-[#E7EDE8]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-20">
            <div>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                A simple place to start
              </p>

              <h2 className="mt-4 max-w-[650px] font-serif text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-[#202522] sm:text-[42px]">
                Understand your health before changing it.
              </h2>

              <p className="mt-5 max-w-[620px] font-sans text-[16px] leading-[1.75] text-[#4F5A54] sm:text-[17px]">
                The Sutra 21-Point Health Assessment looks at key lifestyle
                factors that can influence your everyday health and wellbeing.
              </p>

              <Link
                href="/assessment"
                className="mt-7 inline-flex h-[50px] items-center gap-2 bg-[#17413D] px-6 font-sans text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#12332F]"
              >
                Take the assessment
                <ArrowUpRight size={15} strokeWidth={1.7} />
              </Link>

              <p className="mt-4 font-sans text-[13px] leading-[1.6] text-[#65736D]">
                The assessment is for health and lifestyle awareness and is not
                a medical diagnosis.
              </p>
            </div>

            <div className="border border-[#202522]/10 bg-white p-6 sm:p-8">
              <div className="flex items-end gap-3 border-b border-[#202522]/10 pb-6">
                <span className="font-serif text-[64px] font-medium leading-none text-[#17413D] sm:text-[76px]">
                  21
                </span>

                <span className="pb-1 font-sans text-[13px] uppercase tracking-[0.12em] text-[#65736D]">
                  points
                </span>
              </div>

              <div className="grid gap-0 sm:grid-cols-2">
                {[
                  "Nutrition",
                  "Sleep",
                  "Digestion",
                  "Physical activity",
                  "Mental wellbeing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-[#202522]/10 py-4 last:border-b-0 sm:even:pl-5"
                  >
                    <Check
                      size={15}
                      strokeWidth={1.7}
                      className="shrink-0 text-[#17413D]"
                    />
                    <span className="font-sans text-[15px] leading-[1.5] text-[#4F5A54]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#17413D] text-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-[700px]">
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-white/60">
                Your next step
              </p>

              <h2 className="mt-4 font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[44px]">
                Start with a conversation.
              </h2>

              <p className="mt-5 max-w-[620px] font-sans text-[16px] leading-[1.75] text-white/75 sm:text-[17px]">
                Get practical, evidence-informed support to build healthier
                habits that fit your life.
              </p>

              <p className="mt-5 font-sans text-[13px] text-white/55">
                Doctor-led · Evidence-informed · Whole-person care
              </p>
            </div>

            <Link
              href="/book-appointment"
              className="inline-flex h-[52px] shrink-0 items-center justify-center gap-2 bg-white px-7 font-sans text-[14px] font-medium text-[#17413D] transition-colors duration-300 hover:bg-[#F7F5EF]"
            >
              Book a Consultation
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] px-6 py-5 sm:px-8 lg:px-10">
          <p className="font-sans text-[12px] leading-[1.6] text-[#65736D]">
            Sutra Health&apos;s lifestyle and wellness practices are
            complementary and are not a substitute for emergency care, medical
            diagnosis or treatment. Individual results may vary.
          </p>
        </div>
      </div>
    </main>
  );
}