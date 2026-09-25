import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";



export default function AssessmentSection() {
  return (
  <section
  className="overflow-hidden bg-[#17413D] text-white"
  aria-labelledby="assessment-heading"
>
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-15 lg:px-12 lg:py-15">
    <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.01fr] lg:gap-20">

      {/* Content */}
      <div>
        <div className="flex items-center gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E7EDE8] sm:text-[11px]">
            03 · Free self-assessment
          </p>
          <span className="h-px w-8 bg-[#91A298]" aria-hidden="true" />
        </div>

        <h2
          id="assessment-heading"
          className="mt-4 max-w-[650px] font-serif text-[38px] leading-[1.03] tracking-[-0.035em] sm:mt-5 sm:text-[54px] lg:text-[64px]"
        >
          How healthy is your current lifestyle?
        </h2>

        <p className="mt-5 max-w-[570px] text-[15px] leading-7 text-white/75 sm:mt-6 sm:text-[18px] sm:leading-[1.8]">
          Start with a free 21-point self-assessment. Reflect on everyday
          habits, see where you are doing well and identify areas you may want
          to explore.
        </p>

        <div className="mt-7 sm:mt-8">
          <Link
            href="/assessment"
            className="group inline-flex min-h-12 w-full items-center justify-center bg-white px-6 py-3.5 text-[13px] font-semibold text-[#17413D] transition-colors hover:bg-[#E7EDE8] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17413D] sm:w-fit sm:px-7 sm:text-[14px]"
          >
            Start the 21-Point Assessment
            <ArrowUpRight
              size={16}
              className="ml-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <p className="mt-4 max-w-[500px] text-[10px] leading-4.5 text-white/50 sm:mt-5 sm:text-[11px] sm:leading-5">
          For reflection and discussion only. It is not a medical diagnosis or
          clinical risk score.
        </p>
      </div>

      {/* Traffic Light System visual */}
      <div className="relative">
        <div className="relative overflow-hidden bg-[#F7F5EF] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <div className="relative aspect-[1.4/1] sm:aspect-[1.4/1]">
            <Image
              src="/images/traffic-light-system.webp"
              alt="Traffic Light System showing good, needs attention and high risk lifestyle areas"
              fill
              priority={false}
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>

       
      </div>
    </div>
  </div>
</section>

  );
}