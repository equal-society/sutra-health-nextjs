import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Experts() {
  return (
    <section
      id="experts"
      aria-labelledby="experts-title"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* =====================================================
            SECTION INTRO
        ====================================================== */}
        <div className="grid gap-5 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298]"
              />

              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#4F5A54]">
                Our expert
              </span>
            </div>
          </div>

          <div className="max-w-[760px]">
            <h2
              id="experts-title"
              className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.025em] text-[#202522] sm:text-[44px] lg:text-[52px]"
            >
              Experienced care,
              <br className="hidden sm:block" />
              grounded in health science.
            </h2>
          </div>
        </div>

        {/* =====================================================
            EXPERT PROFILE
        ====================================================== */}
        <div className="mt-10 grid gap-8 border-t border-[#202522]/10 pt-8 sm:mt-12 sm:pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pt-12">
          {/* Image */}
          <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-[#E7EDE8]">
            <Image
              src="/images/doc.png"
              alt="Dr. Rakesh Sarwal"
              fill
              sizes="(max-width: 1023px) 100vw, 46vw"
              className="object-cover object-top"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
              Sutra Health
            </p>

            <h3 className="mt-4 font-serif text-[34px] font-medium leading-[1.1] tracking-[-0.025em] text-[#202522] sm:text-[40px] lg:text-[46px]">
              Dr. Rakesh Sarwal
            </h3>

            <p className="mt-3 font-sans text-[16px] font-medium text-[#17413D] sm:text-[17px]">
              MBBS, MPH, DrPH · Therapeutic Yoga Consultant
            </p>

            <p className="mt-6 max-w-[590px] font-sans text-[16px] leading-[1.72] text-[#4F5A54] sm:text-[17px]">
              Professor, Community Medicine · Head, Integrated Health Clinic,
              ESIC Medical College & Hospital, Faridabad.
            </p>

            {/* Expertise */}
            <div className="mt-7 border-t border-[#202522]/10 pt-6">
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#65736D]">
                Areas of expertise
              </p>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-sans text-[15px] font-medium text-[#202522] sm:text-[16px]">
                <span>Lifestyle Medicine</span>
                <span>Nutrition</span>
                <span>Yoga</span>
              </div>
            </div>

            {/* Profile link */}
            <Link
              href="https://academic.lifequality.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-2 font-sans text-[14px] font-medium text-[#17413D] transition-colors duration-300 hover:text-[#12332F]"
            >
              View full profile

              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}