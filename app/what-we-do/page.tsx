"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Doctor-led support that looks at food, yoga, sleep, stress and everyday habits as part of your overall health.",
    href: "/what-we-do/lifestyle",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Personalised guidance to make food choices clearer, practical and easier to sustain.",
    href: "/what-we-do/nutrition",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Yoga, breathing and relaxation practices adapted around your needs and health goals.",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    number: "04",
    title: "Behaviour & Mind Practices",
    description:
      "Practical support for habits, stress and routines that can make healthy changes easier to maintain.",
    href: "/what-we-do/behaviour-mind",
  },
];

const conditions = [
  {
    name: "Weight Management",
    href: "/conditions/weight-management",
  },
  {
    name: "Metabolic Health",
    href: "/conditions/metabolic-health",
  },
  {
    name: "High Blood Pressure",
    href: "/conditions/high-blood-pressure",
  },
  {
    name: "Arthritis & Joint Pain",
    href: "/conditions/arthritis-joint-pain",
  },
  {
    name: "Migraine & Headache",
    href: "/conditions/migraine-headache",
  },
  {
    name: "Digestive & Gut Health",
    href: "/conditions/digestive-gut-health",
  },
  {
    name: "Women's Health",
    href: "/conditions/womens-health",
  },
];

const approachPoints = [
  {
    number: "01",
    title: "Understand",
    description:
      "Look at your health, everyday life and priorities.",
  },
  {
    number: "02",
    title: "Personalise",
    description:
      "Build a practical plan around your needs and goals.",
  },
  {
    number: "03",
    title: "Practise",
    description:
      "Turn the plan into manageable everyday actions.",
  },
  {
    number: "04",
    title: "Sustain",
    description:
      "Build habits that are realistic enough to continue.",
  },
];

const faqs = [
  {
    question: "What services does Sutra Health provide?",
    answer:
      "Sutra Health provides lifestyle medicine, nutrition counselling, therapeutic yoga, and behaviour and mind practices.",
  },
  {
    question: "Who are these services for?",
    answer:
      "These services are for people looking for practical, lifestyle-focused support alongside appropriate healthcare.",
  },
  {
    question: "Which service should I start with?",
    answer:
      "It depends on your health concerns, priorities and goals. A consultation can help you understand where to begin.",
  },
  {
    question: "Can different services be combined?",
    answer:
      "Yes. Different areas can be brought together when they are relevant to your needs and goals.",
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#202522]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        aria-labelledby="what-we-do-heading"
        className="border-b border-[#202522]/10"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-[920px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                What we do
              </p>
            </div>

            {/* Heading */}
            <h1
              id="what-we-do-heading"
              className="mt-6 max-w-[850px] font-serif text-[43px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[55px] lg:text-[70px]"
            >
              Healthcare that looks at the{" "}
              <span className="font-normal italic text-[#17413D]">
                whole picture.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[720px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
              Sutra Health brings medical care and practical lifestyle support
              together. Our services cover lifestyle medicine, nutrition,
              therapeutic yoga, and behaviour and mind practices, with guidance
              shaped around your health, needs, and daily life.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/book-appointment"
                className="group inline-flex min-h-[50px] w-full items-center justify-center gap-4 rounded-full bg-[#17413D] px-7 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#12332F] sm:w-auto sm:text-[13px]"
              >
                Book a Consultation

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="/approach"
                className="group inline-flex items-center gap-2 py-2 text-[12px] font-semibold text-[#202522] transition-colors duration-300 hover:text-[#17413D] sm:text-[13px]"
              >
                Understand our approach

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            {/* Trust line */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#202522]/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#65736D] sm:mt-11">
              <span>Doctor-led</span>
              <span>Personalised</span>
              <span>Whole-person care</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        aria-labelledby="services-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          {/* Section intro */}
          <div className="max-w-[720px]">

            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                Our services
              </p>
            </div>

            <h2
              id="services-heading"
              className="mt-5 font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.04em] text-[#202522] sm:text-[48px]"
            >
              Support that fits around your health.
            </h2>

            <p className="mt-5 max-w-[700px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
              Each service focuses on a different part of everyday health.
              Together, they can form a more connected approach to care.
            </p>
          </div>

          {/* Service list */}
          <div className="mt-12 max-w-[1080px] border-y border-[#202522]/10">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group block border-b border-[#202522]/10 py-8 transition-colors duration-300 last:border-b-0 hover:bg-[#F7F5EF] sm:px-5 sm:py-9"
              >
                <div className="grid gap-5 sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-center sm:gap-8">

                  {/* Number */}
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-[#91A298] sm:text-[12px]">
                    {service.number}
                  </span>

                  {/* Content */}
                  <div className="max-w-[700px]">
                    <h3 className="font-serif text-[25px] font-medium leading-tight tracking-[-0.025em] text-[#202522] sm:text-[30px]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-[#4E5B56] sm:text-[17px] sm:leading-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Explore */}
                  <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#17413D] sm:text-[13px]">
                    Explore

                    <ArrowRight
                      size={16}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}
      <section
        aria-labelledby="approach-heading"
        className="bg-[#F7F5EF]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

            {/* Intro */}
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#91A298]"
                />

                <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                  Our approach
                </p>
              </div>

              <h2
                id="approach-heading"
                className="mt-5 max-w-[480px] font-serif text-[38px] font-medium leading-[1.04] tracking-[-0.04em] text-[#202522] sm:text-[48px]"
              >
                A more connected way to care.
              </h2>

              <p className="mt-5 max-w-[480px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
                Your health is shaped by more than one habit or symptom. We
                look at the wider picture and help you focus on changes that
                can work in everyday life.
              </p>

              <Link
                href="/approach"
                className="group mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-[#17413D] transition-colors duration-300 hover:text-[#12332F] sm:text-[13px]"
              >
                Learn about our approach

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Approach steps */}
            <div className="border-y border-[#202522]/10">
              {approachPoints.map((point) => (
                <div
                  key={point.number}
                  className="grid grid-cols-[42px_1fr] gap-5 border-b border-[#202522]/10 py-7 last:border-b-0 sm:grid-cols-[56px_1fr] sm:gap-7 sm:py-8"
                >
                  <span className="pt-1 text-[11px] font-semibold tracking-[0.12em] text-[#91A298]">
                    {point.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-[24px] font-medium tracking-[-0.02em] text-[#202522] sm:text-[28px]">
                      {point.title}
                    </h3>

                    <p className="mt-2 max-w-[650px] text-[15px] leading-7 text-[#4E5B56] sm:text-[17px] sm:leading-8">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONDITIONS
      ========================================================= */}
      <section
        aria-labelledby="conditions-heading"
        className="bg-[#E7EDE8]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="max-w-[760px]">

            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                Where we can help
              </p>
            </div>

            <h2
              id="conditions-heading"
              className="mt-5 max-w-[720px] font-serif text-[38px] font-medium leading-[1.04] tracking-[-0.04em] text-[#202522] sm:text-[48px]"
            >
              Health concerns where lifestyle can play a role.
            </h2>

            <p className="mt-5 max-w-[700px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
              Explore some of the health concerns people come to Sutra Health
              with, and learn how lifestyle-focused support may fit into their
              care.
            </p>
          </div>

          {/* Conditions */}
          <div className="mt-12 max-w-[1080px] border-y border-[#202522]/10">
            {conditions.map((condition, index) => (
              <Link
                key={condition.name}
                href={condition.href}
                className="group flex min-h-[70px] items-center justify-between gap-6 border-b border-[#202522]/10 py-5 last:border-b-0"
              >
                <div className="flex items-center gap-5 sm:gap-8">

                  <span className="text-[11px] font-semibold tracking-[0.12em] text-[#91A298]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-serif text-[19px] font-medium tracking-[-0.015em] text-[#202522] sm:text-[23px]">
                    {condition.name}
                  </span>
                </div>

                <ArrowRight
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#17413D] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>

          {/* Conditions CTA */}
          <Link
            href="/conditions"
            className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-[#17413D]/20 px-6 text-[12px] font-semibold text-[#17413D] transition-colors duration-300 hover:bg-white sm:text-[13px]"
          >
            View all conditions

            <ArrowRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section
        aria-labelledby="faq-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="max-w-[720px]">

            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                Questions
              </p>
            </div>

            <h2
              id="faq-heading"
              className="mt-5 font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.04em] text-[#202522] sm:text-[48px]"
            >
              Common questions
            </h2>

            <p className="mt-5 max-w-[650px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
              A few simple answers to help you understand how Sutra Health
              works.
            </p>
          </div>

          {/* FAQ list */}
          <div className="mt-12 max-w-[1000px] border-y border-[#202522]/10">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[#202522]/10 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-[16px] font-medium leading-7 text-[#202522] marker:hidden sm:py-7 sm:text-[19px]">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E7EDE8] text-[21px] font-light leading-none text-[#17413D] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="max-w-[850px] pb-7 pr-8 text-[15px] leading-7 text-[#4E5B56] sm:text-[17px] sm:leading-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">

          <div className="overflow-hidden rounded-[28px] bg-[#17413D] px-7 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

            <div className="max-w-[850px]">

              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-[#91A298]"
                />

                <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#E7EDE8] sm:text-[11px]">
                  Start here
                </p>
              </div>

              <h2 className="mt-5 max-w-[800px] font-serif text-[36px] font-medium leading-[1.04] tracking-[-0.04em] text-[#F7F5EF] sm:text-[48px]">
                Start with a conversation about your health.
              </h2>

              <p className="mt-6 max-w-[720px] text-[16px] leading-7 text-[#E7EDE8] sm:text-[18px] sm:leading-8">
                Tell us what you are dealing with, what you have tried and
                what you would like to change.
              </p>

              {/* Inverted CTA — matching approved design */}
              <Link
                href="/book-appointment"
                className="group mt-8 inline-flex min-h-[50px] items-center justify-center gap-4 rounded-full bg-[#F7F5EF] px-7 py-3 text-[12px] font-semibold text-[#17413D] transition-colors duration-300 hover:bg-[#E7EDE8] sm:text-[13px]"
              >
                Book a Consultation

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================= */}
      <section className="bg-[#F7F5EF] pb-8">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <p className="max-w-[900px] text-[12px] leading-6 text-[#65736D]">
            Sutra Health provides integrative and lifestyle-focused support
            alongside appropriate medical care. It does not replace diagnosis,
            treatment or advice from your doctor.
          </p>
        </div>
      </section>
    </main>
  );
}