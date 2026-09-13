 "use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section
      aria-labelledby="stories-title"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="relative">
          {/* Header */}
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#82978C]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5E7168] sm:text-[11px]">
                  Patient stories
                </p>
              </div>

              <h2
                id="stories-title"
                className="mt-5 max-w-[590px] font-serif text-[42px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[52px] lg:text-[62px]"
              >
                What people
                <br />
                <span className="italic font-normal text-[#17413D]">
                  have shared.
                </span>
              </h2>
            </div>

            <div className="max-w-[620px]">
              <p className="text-[14px] leading-7 text-[#53605B] sm:text-[15px] sm:leading-8">
                Real experiences from people who have spent time with Sutra
                Health and its practitioners.
              </p>
              <p className="mt-3 text-[11px] leading-5.5 text-[#71817B] sm:text-[12px] sm:leading-6">
                Shared publicly as Google reviews. Individual experiences are
                personal and should not be interpreted as a guarantee of
                outcomes.
              </p>
            </div>
          </div>

          {/* Featured testimonial */}
          <div className="mt-10 sm:mt-14 lg:mt-16">
            <div className="relative min-h-[360px] overflow-hidden rounded-[26px] bg-[#E9EDE6] px-6 py-8 sm:min-h-[390px] sm:px-10 sm:py-10 lg:min-h-[420px] lg:px-16 lg:py-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 font-serif text-[300px] leading-none text-[#17413D]/[0.045] sm:text-[360px]"
              >
                “
              </div>

              <div className="relative flex h-full min-h-[300px] flex-col justify-between sm:min-h-[310px]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736D]">
                    Google review
                  </span>

                  <div className="flex gap-1" aria-label="5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        aria-hidden="true"
                        className="text-[13px] text-[#17413D]"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <div className="max-w-[930px]">
                  <blockquote
                    key={active}
                    className="font-serif text-[25px] leading-[1.25] tracking-[-0.025em] text-[#17413D] sm:text-[32px] sm:leading-[1.22] lg:text-[42px]"
                  >
                    “{testimonial.quote}”
                  </blockquote>

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#65736D]">
                    — {testimonial.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show review from ${item.name}`}
                    aria-current={active === index}
                    onClick={() => setActive(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === index
                        ? "w-8 bg-[#17413D]"
                        : "w-1.5 bg-[#17413D]/20"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() =>
                    setActive(
                      (current) =>
                        (current - 1 + testimonials.length) %
                        testimonials.length,
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17413D]/12 text-[#17413D] transition-colors hover:bg-[#EEF2EC]"
                >
                  ←
                </button>

                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() =>
                    setActive((current) => (current + 1) % testimonials.length)
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17413D]/12 text-[#17413D] transition-colors hover:bg-[#EEF2EC]"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Mobile swipeable review strip */}
          <div className="mt-8 sm:hidden">
            <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="w-[78vw] max-w-[300px] shrink-0 snap-start rounded-[18px] border border-[#17413D]/10 bg-[#EEF2EC] p-5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71817B]">
                    Google review
                  </p>
                  <p className="mt-5 font-serif text-[20px] leading-[1.3] tracking-[-0.02em] text-[#17413D]">
                    “{item.quote}”
                  </p>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#65736D]">
                    — {item.name}
                  </p>
                </article>
              ))}
            </div>
          </div>

         
        </div>
      </Container>
    </section>
  );
}
