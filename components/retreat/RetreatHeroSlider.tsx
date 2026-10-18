import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import HeroVideo from "@/components/shared/RetreatHeroVideo";

export default function RetreatHeroSlider() {
  return (
    <section
      aria-labelledby="retreat-hero-title"
      className="bg-[#F7F5EF] text-[#203B35]"
    >
      {/* Responsive video hero */}
      <div className="relative flex overflow-hidden bg-[#18332F] items-end  lg:min-h-[min(820px,calc(100svh-80px))]">
        {/* Background video */}
        <HeroVideo
      src="/videos/retreat.mp4"
          priority={false}
        />

        {/* Overall dark overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#10201C]/25"
        />

       

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-20  sm:px-8 sm:pb-16 sm:pt-10  ">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              Sutra Health Retreat
            </p>

            {/* Heading */}
            <h1
              id="retreat-hero-title"
              className="mt-3 font-[var(--font-serif)] text-[2.55rem] font-medium leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:mt-4 lg:text-6xl xl:text-7xl"
            >
              Looking for a wellness retreat near Delhi?
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base leading-7 text-white/85 sm:mt-5 sm:text-lg sm:leading-8">
              Take a slower approach to wellbeing with guided practices,
              nutrition, reflection and supportive health conversations in a
              Faridabad setting.
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
              <Link
                href="https://bookretreats.com/r/6-day-rejuvenation-in-nature-moments-from-civilization-in-india"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center bg-[#F7F5EF] px-5 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6"
              >
                Book Retreat Programs

                <ArrowUpRight
                  size={16}
                  className="ml-3"
                  aria-hidden="true"
                />
              </Link>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}