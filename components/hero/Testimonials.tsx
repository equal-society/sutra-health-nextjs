"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/*
  CHANGED: Removed two testimonials that were single generic lines
  ("Excellent experience." / "Mind blowing experience.") with no
  specific detail — they read as filler next to the detailed ones
  and drag down trust in the whole set.

  STILL NEEDED (not done here, needs real data from you):
  - Add a city to each name if you can verify it (e.g. "Rahul Sharma,
    Faridabad") — do not guess or add a placeholder city, only add
    what you can confirm is accurate.
  - If any of these came from Google Business or another public
    review platform, link out to that platform, or add a "Read more
    reviews" link. Only add Review/AggregateRating schema once you
    have a verifiable source — do not add that schema without one.
*/

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
      className="bg-[var(--sutra-porcelain)] py-8 sm:py-10 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Patient Stories
            </p>

            <h2
              id="patient-stories-heading"
              className="mt-3 font-[var(--font-serif)] text-3xl leading-[1.05] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-4xl lg:text-5xl"
            >
              What people have shared.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--sutra-muted)] sm:text-base sm:leading-7">
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
                flex h-10 w-10 items-center justify-center
                border border-[var(--sutra-border-strong)]
                text-[var(--sutra-teal)]
                transition-all duration-200
                hover:border-[var(--sutra-teal)]
                hover:bg-[var(--sutra-teal)]
                hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--sutra-teal)]
              "
            >
              <ArrowLeft size={17} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => scrollReviews("right")}
              aria-label="Next reviews"
              className="
                flex h-10 w-10 items-center justify-center
                border border-[var(--sutra-border-strong)]
                text-[var(--sutra-teal)]
                transition-all duration-200
                hover:border-[var(--sutra-teal)]
                hover:bg-[var(--sutra-teal)]
                hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--sutra-teal)]
              "
            >
              <ArrowRight size={17} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Reviews slider */}
       <div
          ref={sliderRef}
          className="
            mt-6
            flex
            snap-x
            snap-mandatory
            gap-5
            overflow-x-auto
            scroll-smooth
            pb-1
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:mt-7
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
                p-5
                sm:min-w-[calc((100%-20px)/2)]
                sm:p-6
                lg:min-w-[calc((100%-40px)/3)]
                lg:p-7
              "
            >
              {/* Quote */}
              <div
                aria-hidden="true"
                className="font-[var(--font-serif)] text-4xl leading-none text-[var(--sutra-sage)]"
              >
                "
              </div>

              <blockquote className="mt-3 flex flex-1 flex-col">
                <p className="font-[var(--font-serif)] text-lg leading-[1.35] tracking-[-0.01em] text-[var(--sutra-ink)] sm:text-xl">
                  {testimonial.quote}
                </p>

                <footer className="mt-6 border-t border-[var(--sutra-border)] pt-4">
                  <cite className="not-italic text-sm font-semibold text-[var(--sutra-teal)]">
                    {testimonial.name}
                  </cite>

                  <p className="mt-1 text-[11px] text-[var(--sutra-muted)]">
                    Patient experience
                  </p>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="mt-3 flex items-center justify-between sm:hidden">
          <p className="text-[11px] text-[var(--sutra-muted)]">
            Swipe to explore reviews
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollReviews("left")}
              aria-label="Previous review"
              className="
                flex h-9 w-9 items-center justify-center
                border border-[var(--sutra-border-strong)]
                text-[var(--sutra-teal)]
              "
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => scrollReviews("right")}
              aria-label="Next review"
              className="
                flex h-9 w-9 items-center justify-center
                border border-[var(--sutra-border-strong)]
                text-[var(--sutra-teal)]
              "
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}