"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";

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

const desktopVisible = 3;

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const maxDesktopIndex = testimonials.length - desktopVisible;

  const previous = () => {
    setActive((current) => {
      if (current <= 0) return maxDesktopIndex;
      return current - 1;
    });
  };

  const next = () => {
    setActive((current) => {
      if (current >= maxDesktopIndex) return 0;
      return current + 1;
    });
  };

  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                Patient stories
              </p>
            </div>

            <h2
              id="testimonials-title"
              className="mt-5 max-w-[620px] font-serif text-[42px] font-medium leading-[1.02] tracking-[-0.045em] text-[#202522] sm:text-[52px] lg:text-[62px]"
            >
              What people have{" "}
              <span className="font-normal italic text-[#17413D]">
                shared.
              </span>
            </h2>
          </div>

          <div className="max-w-[570px]">
            <p className="text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
              Real experiences from people who have spent time with Sutra
              Health and its practitioners.
            </p>

            <p className="mt-3 text-[11px] leading-5 text-[#71817B] sm:text-[12px] sm:leading-6">
              Shared publicly as Google reviews. Individual experiences are
              personal and should not be interpreted as a guarantee of
              outcomes.
            </p>
          </div>
        </div>

        {/* Desktop reviews */}
        <div className="mt-14 hidden sm:block lg:mt-16">
          <div className="grid grid-cols-3 gap-4">
            {testimonials
              .slice(active, active + desktopVisible)
              .map((item) => (
                <article
                  key={item.name}
                  className="flex min-h-[310px] flex-col border border-[#202522]/10 bg-white p-6 transition-opacity duration-300 lg:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65736D]">
                      Google review
                    </span>

                    <span
                      aria-label="5 stars"
                      className="text-[12px] tracking-[0.08em] text-[#17413D]"
                    >
                      ★★★★★
                    </span>
                  </div>

                  <p className="mt-6 text-[15px] leading-7 text-[#65736D] lg:text-[16px]">
                    {item.quote}
                  </p>

                  <div className="mt-auto border-t border-[#202522]/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#202522]">
                      {item.name}
                    </p>
                  </div>
                </article>
              ))}
          </div>

          {/* Desktop controls */}
          <div className="mt-5 flex items-center justify-between">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
              {active + 1}–{Math.min(active + desktopVisible, testimonials.length)}{" "}
              of {testimonials.length} reviews
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous reviews"
                onClick={previous}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#17413D]/15 text-[16px] text-[#17413D] transition-colors duration-300 hover:bg-[#E7EDE8] focus:outline-none focus:ring-2 focus:ring-[#17413D]/20"
              >
                ←
              </button>

              <button
                type="button"
                aria-label="Next reviews"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#17413D]/15 text-[16px] text-[#17413D] transition-colors duration-300 hover:bg-[#E7EDE8] focus:outline-none focus:ring-2 focus:ring-[#17413D]/20"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile reviews */}
        <div className="mt-10 sm:hidden">
          <div
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Patient reviews"
          >
            {testimonials.map((item, index) => (
              <article
                key={item.name}
                className="flex min-h-[320px] w-[86vw] max-w-[360px] shrink-0 snap-center flex-col border border-[#202522]/10 bg-white p-6"
                onFocus={() => setActive(index)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65736D]">
                    Google review
                  </span>

                  <span
                    aria-label="5 stars"
                    className="text-[12px] tracking-[0.08em] text-[#17413D]"
                  >
                    ★★★★★
                  </span>
                </div>

                <p className="mt-7 text-[17px] leading-7 text-[#4E5B56]">
                  {item.quote}
                </p>

                <div className="mt-auto border-t border-[#202522]/10 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#202522]">
                    {item.name}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile controls */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to review from ${item.name}`}
                  aria-current={active === index}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-7 bg-[#17413D]"
                      : "w-1.5 bg-[#91A298]/60 hover:bg-[#17413D]/40"
                  }`}
                />
              ))}
            </div>

            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
              Swipe
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
