"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

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
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollReviews = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector<HTMLElement>(
      "[data-testimonial-card]"
    );

    if (!card) return;

    const gap = 20;
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
      className="bg-[var(--sutra-porcelain)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Patient Stories
            </p>

            <h2
              id="patient-stories-heading"
              className="mt-4 font-[var(--font-serif)] text-4xl leading-[1.05] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-5xl lg:text-6xl"
            >
              What people have shared.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
              Experiences shared by people who have interacted with Sutra
              Health and its practitioners.
            </p>
          </div>

          {/* Desktop / tablet arrows */}
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollReviews("left")}
              aria-label="Previous reviews"
              className="
                flex h-11 w-11 items-center justify-center
                border border-[var(--sutra-border-strong)]
                text-[var(--sutra-teal)]
                transition-all duration-200
                hover:border-[var(--sutra-teal)]
                hover:bg-[var(--sutra-teal)]
                hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--sutra-teal)]
                focus-visible:ring-offset-2
              "
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => scrollReviews("right")}
              aria-label="Next reviews"
              className="
                flex h-11 w-11 items-center justify-center
                border border-[var(--sutra-border-strong)]
                text-[var(--sutra-teal)]
                transition-all duration-200
                hover:border-[var(--sutra-teal)]
                hover:bg-[var(--sutra-teal)]
                hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--sutra-teal)]
                focus-visible:ring-offset-2
              "
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Reviews slider */}
        <div
          ref={sliderRef}
          className="
            mt-10
            flex
            snap-x
            snap-mandatory
            gap-5
            overflow-x-auto
            scroll-smooth
            pb-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:mt-12
          "
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              data-testimonial-card
              className="
                flex
                min-w-[88%]
                snap-start
                flex-col
                border
                border-[var(--sutra-border-strong)]
                bg-[var(--sutra-white)]
                p-6
                sm:min-w-[calc((100%-20px)/2)]
                sm:p-7
                lg:min-w-[calc((100%-40px)/3)]
                lg:p-8
              "
            >
              {/* Quote mark */}
              <div
                aria-hidden="true"
                className="font-[var(--font-serif)] text-5xl leading-none text-[var(--sutra-sage)]"
              >
                “
              </div>

              <blockquote className="mt-5 flex flex-1 flex-col">
                <p className="font-[var(--font-serif)] text-xl leading-[1.35] tracking-[-0.01em] text-[var(--sutra-ink)] sm:text-2xl">
                  {testimonial.quote}
                </p>

                <footer className="mt-8 border-t border-[var(--sutra-border)] pt-5">
                  <cite className="not-italic text-sm font-semibold text-[var(--sutra-teal)]">
                    {testimonial.name}
                  </cite>

                  <p className="mt-1 text-xs text-[var(--sutra-muted)]">
                    Patient experience
                  </p>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="mt-4 flex items-center justify-between sm:hidden">
          <div className="text-xs text-[var(--sutra-muted)]">
            Swipe to explore reviews
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollReviews("left")}
              aria-label="Previous review"
              className="
                flex h-10 w-10 items-center justify-center
                border border-[var(--sutra-border-strong)]
                text-[var(--sutra-teal)]
                transition-colors
                hover:border-[var(--sutra-teal)]
              "
            >
              <ArrowLeft size={17} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => scrollReviews("right")}
              aria-label="Next review"
              className="
                flex h-10 w-10 items-center justify-center
                border border-[var(--sutra-border-strong)]
                text-[var(--sutra-teal)]
                transition-colors
                hover:border-[var(--sutra-teal)]
              "
            >
              <ArrowRight size={17} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}