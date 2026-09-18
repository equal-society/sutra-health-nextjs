"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Amazing consultation experience. The doctors patiently listened to my concerns and provided practical Natural solutions.",
    name: "Rahul Sharma",
  },
  {
    quote:
      "Yoga therapy helped reduce my back pain significantly. Professional staff and peaceful environment.",
    name: "Priya Verma",
  },
  {
    quote:
      "Highly recommend Sutra Health. The holistic treatment approach actually delivers long-term benefits.",
    name: "Ankit Mehta",
  },
  {
    quote:
      "Meditation sessions transformed my daily routine. Stress levels are much lower now.",
    name: "Neha Kapoor",
  },
  {
    quote:
      "I had the pleasure of getting guidance from Dr. Rakesh, a humble therapeutic Yoga consultant who is an MBBS doctor as well. He guided me and my son through our Yoga journey with a smile on his face.",
    name: "Puneet Kulshrestha",
  },
  {
    quote:
      "I stayed at Sutra Health with my family and it was the best decision we made. Every morning you can join yoga with Dr. Rakesh on the rooftop terrace as the sun rises.",
    name: "Adheer Dixit",
  },
  {
    quote:
      "Very good service at Sutra Health, full care given to patients — bahut accha laga. Thank you Sutra Health!",
    name: "Sumit Kashyap",
  },
  {
    quote: "Excellent experience.",
    name: "Anil Passi",
  },
  {
    quote: "Mind blowing experience.",
    name: "Arpit Krishan",
  },
  {
    quote:
      "I'm from Argentina and had the privilege of staying at Dr. Rakesh's place, sharing yoga classes with him every morning on his terrace. A wonderful way to start the day.",
    name: "Flor Riboldi",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) => Math.max(0, current - 3));
  };

  const next = () => {
    setActive((current) =>
      Math.min(testimonials.length - 3, current + 3),
    );
  };

  const visibleTestimonials = testimonials.slice(active, active + 3);

  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-px w-8 bg-[#91A298]"
              />

              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#4F5A54]">
                Patient stories
              </p>
            </div>

            <h2
              id="testimonials-title"
              className="
                mt-5
                font-serif text-[36px] font-medium leading-[1.1]
                tracking-[-0.025em] text-[#202522]
                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Experiences from people
              <br className="hidden sm:block" />
              who chose a different approach.
            </h2>

            <p className="mt-5 max-w-[600px] font-sans text-[16px] leading-[1.7] text-[#4F5A54] sm:text-[17px]">
              Real experiences shared by people who have visited Sutra Health.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              disabled={active === 0}
              aria-label="Previous testimonials"
              className="
                flex h-11 w-11 items-center justify-center
                border border-[#202522]/15
                text-[#17413D]
                transition-all duration-300
                hover:border-[#17413D]/40
                hover:bg-[#E7EDE8]
                disabled:cursor-not-allowed
                disabled:opacity-35
              "
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={next}
              disabled={active >= testimonials.length - 3}
              aria-label="Next testimonials"
              className="
                flex h-11 w-11 items-center justify-center
                border border-[#202522]/15
                text-[#17413D]
                transition-all duration-300
                hover:border-[#17413D]/40
                hover:bg-[#E7EDE8]
                disabled:cursor-not-allowed
                disabled:opacity-35
              "
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* 3 Testimonials */}
        <div className="mt-12 grid border-t border-[#202522]/10 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${active}-${index}`}
              className="
                border-b border-[#202522]/10
                px-0 py-8
                sm:px-6 sm:py-9
                md:[&:nth-child(2)]:border-r-0
                lg:border-r
                lg:px-8 lg:py-10
                lg:[&:nth-child(2)]:border-r
                lg:last:border-r-0
                first:lg:pl-0
              "
            >
              <Quote
                aria-hidden
                size={20}
                strokeWidth={1.5}
                className="text-[#17413D]"
              />

              <blockquote className="mt-5 font-sans text-[16px] leading-[1.75] text-[#4F5A54] sm:text-[17px]">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-7">
                <p className="font-sans text-[14px] font-medium text-[#202522]">
                  {testimonial.name}
                </p>

                <p className="mt-1 font-sans text-[12px] text-[#65736D]">
                  Patient experience
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Position */}
        <div className="mt-6 flex items-center justify-between">
          <p className="font-sans text-[12px] text-[#65736D]">
            {active + 1}–{Math.min(active + 3, testimonials.length)} of{" "}
            {testimonials.length}
          </p>

          <div
            aria-hidden
            className="h-px w-20 bg-[#91A298]"
          />
        </div>
      </div>
    </section>
  );
}