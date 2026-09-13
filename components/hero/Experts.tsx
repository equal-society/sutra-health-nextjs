import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const credentials = ["MBBS", "MPH", "DrPH"];

const focusAreas = [
  "Lifestyle Medicine",
  "Preventive Healthcare",
  "Nutrition",
  "Therapeutic Yoga",
];

export default function Doctor() {
  return (
    <section
      aria-labelledby="doctor-title"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="relative">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-[#82978C]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5E7168] sm:text-[11px]">
              Meet the doctor
            </p>
          </div>

          {/* Main editorial layout */}
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
            {/* Portrait */}
            <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#E4E9E2]">
                <Image
                  src="/images/doctor.webp"
                  alt="Dr. Rakesh Sarwal"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover object-top"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#173F35]/20 to-transparent"
                />
              </div>

              <div className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-[#F7F5EF]/90 px-4 py-2 backdrop-blur-md sm:bottom-5 sm:left-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">
                  Doctor-led care
                </p>
              </div>
            </div>

            {/* Doctor introduction */}
            <div className="lg:pb-1">
              <h2
                id="doctor-title"
                className="max-w-[720px] font-serif text-[43px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[54px] lg:text-[64px]"
              >
                Meet
                <br />
                <span className="italic font-normal text-[#17413D]">
                  Dr. Rakesh Sarwal.
                </span>
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {credentials.map((credential) => (
                  <span
                    key={credential}
                    className="rounded-full border border-[#17413D]/12 bg-[#EEF2EC] px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-[#17413D]"
                  >
                    {credential}
                  </span>
                ))}
              </div>

              <p className="mt-7 max-w-[650px] text-[14px] leading-7 text-[#53605B] sm:text-[15px] sm:leading-8">
                Dr. Rakesh Sarwal is a Public Health physician, Professor of
                Community Medicine and Head of the Integrated Health Clinic at
                ESIC Medical College &amp; Hospital, Faridabad. His academic
                work spans lifestyle medicine, nutrition, yoga, health systems
                for universal health coverage and public health policy.
              </p>

              <p className="mt-4 max-w-[610px] text-[12px] leading-6 text-[#71817B] sm:text-[13px] sm:leading-7">
                His work brings together public-health thinking and practical
                lifestyle approaches — supporting Sutra Health's doctor-led,
                whole-person model.
              </p>

              <Link
                href="/doctors"
                className="group mt-7 inline-flex items-center gap-3 text-[12px] font-semibold text-[#17413D] sm:text-[13px]"
              >
                Meet Dr. Sarwal
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Focus areas */}
          <div className="mt-12 border-t border-[#202522]/10 pt-7 sm:mt-16 sm:pt-8 lg:mt-20">
            <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736D]">
                  Areas of focus
                </p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
                {focusAreas.map((area, index) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-[12px] text-[#53605B] sm:text-[13px]"
                  >
                    <span className="font-serif text-[15px] text-[#91A298]">
                      0{index + 1}
                    </span>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
