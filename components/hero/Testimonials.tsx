"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import Container from "@/components/shared/Container";

const testimonials = [
  {
    name: "Rahul Sharma",
    quote:
      "Amazing consultation experience. The doctors patiently listened to my concerns and provided practical Natural solutions.",
  },
  {
    name: "Priya Verma",
    quote:
      "Yoga therapy helped reduce my back pain significantly. Professional staff and peaceful environment.",
  },
  {
    name: "Ankit Mehta",
    quote:
      "Highly recommend Sutra Health. The holistic treatment approach actually delivers long-term benefits.",
  },
  {
    name: "Neha Kapoor",
    quote:
      "Meditation sessions transformed my daily routine. Stress levels are much lower now.",
  },
  {
    name: "Puneet Kulshrestha",
    quote:
      "I had the pleasure of getting guidance from Dr. Rakesh, a humble therapeutic Yoga consultant who is an MBBS doctor as well. He guided me and my son through our Yoga journey with a smile on his face.",
  },
  {
    name: "Adheer Dixit",
    quote:
      "I stayed at Sutra Health with my family and it was the best decision we made. Every morning you can join yoga with Dr. Rakesh on the rooftop terrace as the sun rises.",
  },
  {
    name: "Sumit Kashyap",
    quote:
      "Very good service at Sutra Health, full care given to patients — bahut accha laga. Thank you Sutra Health!",
  },
  {
    name: "Anil Passi",
    quote: "Excellent experience.",
  },
  {
    name: "Arpit Krishan",
    quote: "Mind blowing experience.",
  },
  {
    name: "Flor Riboldi",
    quote:
      "I'm from Argentina and had the privilege of staying at Dr. Rakesh's place, sharing yoga classes with him every morning on his terrace. A wonderful way to start the day.",
  },
];

const desktopStarts = [0, 3, 6, 7];

export default function Testimonials() {
  const [mobileActive, setMobileActive] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);

  const desktopStart = desktopStarts[desktopPage];

  const desktopTestimonials = testimonials.slice(
    desktopStart,
    desktopStart + 3,
  );

  const previousMobile = () => {
    setMobileActive((current) => Math.max(0, current - 1));
  };

  const nextMobile = () => {
    setMobileActive((current) =>
      Math.min(testimonials.length - 1, current + 1),
    );
  };

  const previousDesktop = () => {
    setDesktopPage((current) => Math.max(0, current - 1));
  };

  const nextDesktop = () => {
    setDesktopPage((current) =>
      Math.min(desktopStarts.length - 1, current + 1),
    );
  };

  const activeTestimonial = testimonials[mobileActive];

  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-[#FFFFFF]"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[720px]">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-px w-8 bg-[#C8BDA7]"
                />

                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#65736D]">
                  Patient experiences
                </p>
              </div>

              <h2
                id="testimonials-title"
                className="mt-5 font-serif text-[36px] font-medium leading-[1.12] tracking-[-0.025em] text-[#202522] sm:text-[44px] lg:text-[52px]"
              >
                What people say about
                <br className="hidden sm:block" /> their experience.
              </h2>

              <p className="mt-5 max-w-[620px] font-sans text-[16px] leading-[1.75] text-[#4F5A54] sm:text-[17px]">
                Experiences shared by people who have connected with
                Sutra Health.
              </p>
            </div>

            {/* Desktop navigation */}
            <div className="hidden shrink-0 items-center gap-3 sm:flex">
              <button
                type="button"
                onClick={previousDesktop}
                disabled={desktopPage === 0}
                aria-label="Previous testimonials"
                className="flex h-11 w-11 items-center justify-center border border-[#202522]/15 text-[#202522] transition-colors duration-300 hover:bg-[#E7EDE8] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft
                  size={17}
                  strokeWidth={1.5}
                />
              </button>

              <button
                type="button"
                onClick={nextDesktop}
                disabled={
                  desktopPage === desktopStarts.length - 1
                }
                aria-label="Next testimonials"
                className="flex h-11 w-11 items-center justify-center border border-[#202522]/15 text-[#202522] transition-colors duration-300 hover:bg-[#E7EDE8] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowRight
                  size={17}
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>

          {/* Desktop testimonials */}
          <div className="mt-12 hidden sm:grid sm:grid-cols-3 sm:gap-x-6 lg:mt-14 lg:gap-x-8">
            {desktopTestimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex min-h-[430px] flex-col border-t border-[#202522]/10"
              >
                <div className="flex h-full flex-col py-7">
                  <Quote
                    aria-hidden
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#17413D]"
                  />

                  <blockquote className="mt-5 font-sans text-[16px] leading-[1.8] text-[#4F5A54] lg:text-[17px]">
                    “{testimonial.quote}”
                  </blockquote>

                  <div className="mt-auto pt-10">
                    <div className="border-t border-[#202522]/10 pt-5">
                      <p className="font-sans text-[14px] font-medium text-[#202522]">
                        {testimonial.name}
                      </p>

                      <p className="mt-1 font-sans text-[12px] text-[#65736D]">
                        Patient experience
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop page indicator */}
          <div className="mt-8 hidden items-center justify-between border-t border-[#202522]/10 pt-5 sm:flex">
            <p className="font-sans text-[12px] text-[#65736D]">
              {desktopStart + 1}–
              {Math.min(
                desktopStart + 3,
                testimonials.length,
              )}{" "}
              of {testimonials.length}
            </p>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-sans text-[13px] font-medium text-[#17413D]"
            >
              <span>More patient experiences</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile testimonial */}
          <div className="mt-10 sm:hidden">
            <article className="border-t border-[#202522]/10">
              {/*
                Fixed/minimum height keeps the navigation in exactly
                the same vertical position for short and long quotes.
              */}
              <div className="flex min-h-[430px] flex-col py-7">
                <Quote
                  aria-hidden
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#17413D]"
                />

                <blockquote className="mt-5 font-sans text-[17px] leading-[1.75] text-[#4F5A54]">
                  “{activeTestimonial.quote}”
                </blockquote>

                <div className="mt-7">
                  <p className="font-sans text-[14px] font-medium text-[#202522]">
                    {activeTestimonial.name}
                  </p>

                  <p className="mt-1 font-sans text-[12px] text-[#65736D]">
                    Patient experience
                  </p>
                </div>

                {/*
                  mt-auto pushes this navigation to the bottom
                  of the fixed-height testimonial area.
                */}
                <div className="mt-auto border-t border-[#202522]/10 pt-4">
                  <div className="flex items-center justify-between">
                    <p className="font-sans text-[12px] text-[#65736D]">
                      {mobileActive + 1} of {testimonials.length}
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={previousMobile}
                        disabled={mobileActive === 0}
                        aria-label="Previous testimonial"
                        className="flex h-10 w-10 items-center justify-center border border-[#202522]/15 text-[#202522] transition-colors duration-300 hover:bg-[#E7EDE8] disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <ArrowLeft
                          size={16}
                          strokeWidth={1.5}
                        />
                      </button>

                      <button
                        type="button"
                        onClick={nextMobile}
                        disabled={
                          mobileActive ===
                          testimonials.length - 1
                        }
                        aria-label="Next testimonial"
                        className="flex h-10 w-10 items-center justify-center border border-[#202522]/15 text-[#202522] transition-colors duration-300 hover:bg-[#E7EDE8] disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <ArrowRight
                          size={16}
                          strokeWidth={1.5}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Mobile link */}
          <div className="mt-7 border-t border-[#202522]/10 pt-5 sm:hidden">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-sans text-[13px] font-medium text-[#17413D]"
            >
              <span>More patient experiences</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}