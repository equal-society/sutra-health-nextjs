import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import HeroVideo from "@/components/shared/RetreatHeroVideo";

export default function RetreatHeroSlider() {
  return (
    <section
      aria-labelledby="retreat-hero-title"
      className="bg-[#F7F5EF] text-[#203B35]"
    >
      {/* Mobile introduction */}
      <div className="mx-auto max-w-7xl px-5 pb-7 pt-10 sm:px-8 sm:pb-9 sm:pt-14 lg:hidden">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#68766F]">
          Sutra Health Retreat
        </p>

        <h1
          id="retreat-hero-title"
          className="mt-3 max-w-2xl font-[var(--font-serif)] text-[2.55rem] font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl"
        >
          Looking for a wellness retreat near Delhi?
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-[#596A63] sm:text-lg sm:leading-8">
          Take a slower approach to wellbeing with guided practices, nutrition,
          reflection and supportive health conversations in a Faridabad setting.
        </p>

        <Link
          href="/book-appointment"
          className="mt-6 inline-flex min-h-12 items-center bg-[#1D4941] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#153B35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4941]"
        >
          Ask about the retreat
          <ArrowUpRight size={16} className="ml-3" aria-hidden="true" />
        </Link>
      </div>

      {/* Desktop video hero */}
      <div className="relative hidden min-h-[min(820px,calc(100svh-80px))] overflow-hidden bg-[#18332F] lg:flex lg:items-end">
        {/* Poster always; video only on screens 1024px+ (never downloaded on phones) */}
        <HeroVideo
          src="/videos/retreat.mp4"
          minWidth={1024}
          priority={false}
        />

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

            <h2 className="mt-4 font-[var(--font-serif)] text-6xl font-medium leading-[1.04] tracking-[-0.035em] text-white xl:text-7xl">
              Looking for a wellness retreat near Delhi?
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">
              Take a slower approach to wellbeing with guided practices,
              nutrition, reflection and supportive health conversations in a
              Faridabad setting.
            </p>

           
            <Link
              href="https://bookretreats.com/r/6-day-rejuvenation-in-nature-moments-from-civilization-in-india"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 mr-2 inline-flex min-h-12 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Book Retreat Programs
              <ArrowUpRight size={16} className="ml-3" aria-hidden="true" />
            </Link>

          
          </div>
        </div>
      </div>
    </section>
  );
}