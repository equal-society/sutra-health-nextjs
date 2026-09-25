"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";

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
    quote:
      "I'm from Argentina and had the privilege of staying at Dr. Rakesh's place, sharing yoga classes with him every morning on his terrace. A wonderful way to start the day.",
    name: "Flor Riboldi",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollReviews = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const card =
      sliderRef.current.querySelector<HTMLElement>("[data-testimonial-card]");

    if (!card) return;

    const gap = 16;
    const scrollAmount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="patient-stories"
      aria-labelledby="patient-stories-heading"
      className="overflow-hidden bg-[#F7F5EF]"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-15 lg:px-12 lg:py-15">

        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-[#202522]/10 pb-8 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17413D] sm:text-[11px]">
                Experiences shared
              </p>
              <span
                className="h-px w-8 bg-[#C8BDA7] sm:w-10"
                aria-hidden="true"
              />
            </div>

            <h2
              id="patient-stories-heading"
              className="mt-4 max-w-[700px] font-serif text-[38px] leading-[1.03] tracking-[-0.035em] text-[#202522] sm:mt-5 sm:text-[52px] lg:text-[62px]"
            >
              What people have shared.
            </h2>

            <p className="mt-4 max-w-[650px] text-[14px] leading-6 text-[#65736D] sm:mt-5 sm:text-[16px] sm:leading-7">
              Experiences shared by people who have interacted with Sutra
              Health and its practitioners.
            </p>
          </div>

          {/* Desktop controls */}
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollReviews("left")}
              aria-label="Previous experiences"
              className="group flex h-11 w-11 items-center justify-center border border-[#17413D]/20 text-[#17413D] transition-all duration-200 hover:bg-[#17413D] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17413D] focus-visible:ring-offset-2"
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-x-0.5"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollReviews("right")}
              aria-label="Next experiences"
              className="group flex h-11 w-11 items-center justify-center border border-[#17413D]/20 text-[#17413D] transition-all duration-200 hover:bg-[#17413D] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17413D] focus-visible:ring-offset-2"
            >
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>

        {/* Testimonial rail */}
        <div
          ref={sliderRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-10"
          style={{ overscrollBehaviorX: "contain" }}
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              data-testimonial-card
              className="group flex min-w-[88%] snap-start flex-col border border-[#202522]/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1 sm:min-w-[calc((100%-16px)/2)] sm:p-7 lg:min-w-[calc((100%-32px)/3)] lg:p-8"
            >
              {/* Quote mark */}
              <div className="flex items-center justify-between">
                <div
                  className="flex h-10 w-10 items-center justify-center bg-[#E7EDE8] text-[#17413D]"
                  aria-hidden="true"
                >
                  <Quote size={17} strokeWidth={1.4} />
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#91A298]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <blockquote className="mt-7 flex flex-1 flex-col">
                <p className="font-serif text-[19px] leading-[1.35] tracking-[-0.015em] text-[#202522] sm:text-[21px]">
                  “{testimonial.quote}”
                </p>

                <footer className="mt-7 border-t border-[#202522]/10 pt-5">
                  <cite className="not-italic text-[13px] font-semibold text-[#17413D] sm:text-[14px]">
                    {testimonial.name}
                  </cite>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#65736D]">
                    Experience shared
                  </p>
                </footer>
              </blockquote>

              <div
                className="mt-5 h-px w-8 bg-[#C8BDA7] transition-all duration-300 group-hover:w-14"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="mt-4 flex items-center justify-between sm:hidden">
          <p className="text-[10px] uppercase tracking-[0.1em] text-[#65736D]">
            Swipe to explore
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollReviews("left")}
              aria-label="Previous experience"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#17413D]/20 text-[#17413D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17413D]"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => scrollReviews("right")}
              aria-label="Next experience"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#17413D]/20 text-[#17413D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17413D]"
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Trust note */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#202522]/10 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[680px] text-[11px] leading-5 text-[#65736D] sm:text-[12px]">
            Testimonials are shared experiences and may reflect individual
            circumstances. They should not be interpreted as a guarantee of
            health outcomes.
          </p>

          <span
            className="hidden h-px flex-1 bg-[#C8BDA7]/60 sm:ml-10 sm:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
