"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "@/components/shared/Container";

const testimonials = [
  {
    quote:
      "Amazing consultation experience. The doctors patiently listened to my concerns and provided practical Natural solutions.",
    name: "Rahul Sharma",
    source: "Google Review",
  },
  {
    quote:
      "Yoga therapy helped reduce my back pain significantly. Professional staff and peaceful environment.",
    name: "Priya Verma",
    source: "Google Review",
  },
  {
    quote:
      "Highly recommend Sutra Health. The holistic treatment approach actually delivers long-term benefits.",
    name: "Ankit Mehta",
    source: "Google Review",
  },
  {
    quote:
      "Meditation sessions transformed my daily routine. Stress levels are much lower now.",
    name: "Neha Kapoor",
    source: "Google Review",
  },
  {
    quote:
      "I had the pleasure of getting guidance from Dr. Rakesh, a humble therapeutic Yoga consultant who is an MBBS doctor as well. He guided me and my son through our Yoga journey with a smile on his face, and my 14-year-old son became an instant fan. Sessions are held on a terrace facing the Aravallis with cold, fresh breeze even today. Will come back again and again.",
    name: "Puneet Kulshrestha",
    source: "Google Review",
  },
  {
    quote:
      "I stayed at Sutra Health with my family and it was the best decision we made. Every morning you can join yoga with Dr. Rakesh on the rooftop terrace as the sun rises. When my father needed a wheelchair, Dr. Rakesh personally arranged it within one phone call. A beautifully decorated stay with thoughtful little details everywhere.",
    name: "Adheer Dixit",
    source: "Google Review",
  },
  {
    quote:
      "Very good service at Sutra Health, full care given to patients — bahut accha laga. Thank you Sutra Health!",
    name: "Sumit Kashyap",
    source: "Google Review",
  },
  {
    quote: "Excellent experience.",
    name: "Anil Passi",
    source: "Google Review",
  },
  {
    quote: "Mind blowing experience.",
    name: "Arpit Krishan",
    source: "Google Review",
  },
  {
    quote:
      "I'm from Argentina and had the privilege of staying at Dr. Rakesh's place, sharing yoga classes with him every morning on his terrace. A wonderful way to start the day — the terrace is spectacular and so are the classes. Highly recommend it!",
    name: "Flor Riboldi",
    source: "Google Review · Translated from Spanish",
  },
];

const DESKTOP_PER_SLIDE = 3;
const desktopSlides = Math.ceil(testimonials.length / DESKTOP_PER_SLIDE);

export default function Testimonials() {
  const [desktopSlide, setDesktopSlide] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);

  const desktopGroups = useMemo(() => {
    return Array.from({ length: desktopSlides }, (_, index) =>
      testimonials.slice(
        index * DESKTOP_PER_SLIDE,
        index * DESKTOP_PER_SLIDE + DESKTOP_PER_SLIDE,
      ),
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDesktopSlide((current) => (current + 1) % desktopSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileSlide((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const previousMobile = () => {
    setMobileSlide((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const nextMobile = () => {
    setMobileSlide((current) => (current + 1) % testimonials.length);
  };

  const previousDesktop = () => {
    setDesktopSlide((current) =>
      current === 0 ? desktopSlides - 1 : current - 1,
    );
  };

  const nextDesktop = () => {
    setDesktopSlide((current) => (current + 1) % desktopSlides);
  };

  return (
    <section className="bg-[#F0F4ED] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B9573]">
            Patient experiences
          </p>

          <h2 className="font-serif text-[40px] leading-[1.08] tracking-[-0.035em] text-[#173F35] sm:text-[48px]">
            What patients remember
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#687A73]">
            A selection of experiences shared by people who have spent time with
            Sutra Health.
          </p>
        </div>

        {/* Desktop */}
        <div className="relative mt-12 hidden md:block lg:mt-14">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${desktopSlide * 100}%)` }}
            >
              {desktopGroups.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="grid w-full shrink-0 grid-cols-3 gap-5"
                >
                  {group.map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.name}
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <CarouselButton
            direction="previous"
            onClick={previousDesktop}
            className="absolute -left-5 top-1/2 hidden -translate-y-1/2 lg:flex"
          />
          <CarouselButton
            direction="next"
            onClick={nextDesktop}
            className="absolute -right-5 top-1/2 hidden -translate-y-1/2 lg:flex"
          />

          <div className="mt-8 flex items-center justify-center gap-2">
            {desktopGroups.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show testimonial group ${index + 1}`}
                aria-current={desktopSlide === index}
                onClick={() => setDesktopSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  desktopSlide === index
                    ? "w-7 bg-[#173F35]"
                    : "w-1.5 bg-[#B9C8BA]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-10 md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="w-full shrink-0 px-0.5">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CarouselButton direction="previous" onClick={previousMobile} />
              <CarouselButton direction="next" onClick={nextMobile} />
            </div>

            <p className="text-[11px] font-medium tracking-[0.12em] text-[#687A73]">
              {String(mobileSlide + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CarouselButton({
  direction,
  onClick,
  className = "",
}: {
  direction: "previous" | "next";
  onClick: () => void;
  className?: string;
}) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "previous" ? "Previous testimonials" : "Next testimonials"}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#173F35]/12 bg-[#FAF8F1] text-[#173F35] transition-colors duration-200 hover:border-[#173F35]/25 hover:bg-white ${className}`}
    >
      <Icon size={16} strokeWidth={1.6} />
    </button>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: {
    quote: string;
    name: string;
    source: string;
  };
}) {
  return (
    <article className="flex min-h-[300px] flex-col border border-[#173F35]/10 bg-[#FAF8F1] p-7 sm:p-8">
      <Quote size={19} strokeWidth={1.35} className="text-[#65966F]" aria-hidden="true" />

      <p className="mt-6 text-[15px] leading-7 text-[#52645D]">
        {testimonial.quote}
      </p>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#173F35]/10 pt-6">
        <div>
          <p className="text-[13px] font-semibold text-[#173F35]">
            {testimonial.name}
          </p>
          <p className="mt-1 text-[11px] text-[#7A8983]">
            {testimonial.source}
          </p>
        </div>

        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#65966F]"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
