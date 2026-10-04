"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/retreat/rooftop.avif",
    alt: "Rooftop space at Sutra Health Retreat",
    label: "Rooftop",
  },
  {
    src: "/images/retreat/living-room.avif",
    alt: "Living room at Sutra Health Retreat",
    label: "Living room",
  },
  {
    src: "/images/retreat/bedroom.avif",
    alt: "Bedroom at Sutra Health Retreat",
    label: "Bedroom",
  },
  {
    src: "/images/retreat/yoga.webp",
    alt: "Yoga practice space at Sutra Health Retreat",
    label: "Yoga practice space",
  },
  {
    src: "/images/retreat/kitchen.webp",
    alt: "Kitchen at Sutra Health Retreat",
    label: "Kitchen",
  },
];

export default function RetreatHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () =>
    setCurrent((index) => (index - 1 + slides.length) % slides.length);
  const next = () => setCurrent((index) => (index + 1) % slides.length);

  return (
    <section
      aria-labelledby="retreat-hero-title"
      className="bg-[#F7F5EF] text-[#203B35]"
    >
      {/* On mobile, visitors read the purpose before seeing the gallery. */}
      <div className="mx-auto max-w-7xl px-5 pb-7 pt-10 sm:px-8 sm:pb-9 sm:pt-14 lg:hidden">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#68766F]">
          Sutra Health Retreat
        </p>
        <h1
          id="retreat-hero-title"
          className="mt-3 max-w-2xl font-[var(--font-serif)] text-[2.55rem] font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl"
        >
          A wellness stay with room to pause.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#596A63] sm:text-lg sm:leading-8">
          See the spaces available for your stay and enquire about guided
          activities, rest and time away from your usual routine.
        </p>
        <Link
          href="/book-appointment"
          className="mt-6 inline-flex min-h-12 items-center bg-[#1D4941] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#153B35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4941]"
        >
          Ask about the retreat
          <ArrowUpRight size={16} className="ml-3" aria-hidden="true" />
        </Link>
        
      </div>

      {/* Desktop: immersive, full-view image slider with concise overlay copy. */}
      <div
        className="relative hidden min-h-[min(820px,calc(100svh-80px))] overflow-hidden bg-[#18332F] lg:flex lg:items-end"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== current}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={index === current ? slide.alt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div aria-hidden="true" className="absolute inset-0 bg-[#10201C]/35" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#10201C]/85 via-[#10201C]/45 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#10201C]/55 via-transparent to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-10 pb-24 pt-36">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              Sutra Health Retreat
            </p>
            <h1 className="mt-4 font-[var(--font-serif)] text-6xl font-medium leading-[1.04] tracking-[-0.035em] text-white xl:text-7xl">
              A wellness stay with room to pause.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">
              Explore the retreat spaces for rest, guided practice and time
              away from everyday distractions.
            </p>
            <Link
              href="/book-appointment"
              className="mt-7 mr-2 inline-flex min-h-12 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Ask about the retreat
              <ArrowUpRight size={16} className="ml-3" aria-hidden="true" />
            </Link>
            <Link
              href="https://bookretreats.com/r/6-day-rejuvenation-in-nature-moments-from-civilization-in-india"
              className="mt-7 inline-flex min-h-12 items-center  px-6 text-sm font-semibold text-[#FFFFFF] border transition-colors"
            >
              View retreat booking
              <ArrowUpRight size={16} className="ml-3" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-10 z-20 flex items-center gap-3">
          <span className="mr-2 text-xs font-medium text-white/90">
            {slides[current].label}
          </span>
          <button
            type="button"
            aria-label="Previous retreat image"
            onClick={previous}
            className="grid h-11 w-11 place-items-center border border-white/55 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronLeft size={19} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next retreat image"
            onClick={next}
            className="grid h-11 w-11 place-items-center border border-white/55 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronRight size={19} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile: full-width, tall image carousel follows the introduction. */}
      <div
        className="relative w-full overflow-hidden bg-[#18332F] lg:hidden"
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className="relative aspect-[4/5] min-h-[420px] max-h-[680px] w-full sm:aspect-[16/10] sm:min-h-[440px]">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              aria-hidden={index !== current}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={index === current ? slide.alt : ""}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-5 pt-16">
            <p className="text-sm font-semibold text-white">
              {slides[current].label}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous retreat image"
                onClick={previous}
                className="grid h-10 w-10 place-items-center border border-white/70 text-white"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next retreat image"
                onClick={next}
                className="grid h-10 w-10 place-items-center border border-white/70 text-white"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 py-4" aria-label="Choose retreat image">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show ${slide.label}`}
              aria-current={index === current}
              onClick={() => setCurrent(index)}
              className={`h-1.5 transition-all ${
                index === current ? "w-7 bg-[#1D4941]" : "w-2 bg-[#AAB5AE]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
