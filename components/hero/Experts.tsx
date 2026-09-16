
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const credentials = ["MBBS", "MPH", "DrPH"];

export default function Doctor() {
  return (
    <section
      aria-labelledby="doctor-title"
      className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E7EDE8]">
              <Image
                src="/images/doctor.webp"
                alt="Dr. Rakesh Sarwal"
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Doctor introduction */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                Meet the doctor
              </p>
            </div>

            <h2
              id="doctor-title"
              className="mt-6 max-w-[650px] font-serif text-[43px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[54px] lg:text-[64px]"
            >
              Meet{" "}
              <span className="font-normal italic text-[#17413D]">
                Dr. Rakesh Sarwal.
              </span>
            </h2>

            {/* Credentials */}
            <div className="mt-6 flex items-center gap-4 border-y border-[#202522]/10 py-4">
              {credentials.map((credential, index) => (
                <span
                  key={credential}
                  className="text-[11px] font-semibold tracking-[0.1em] text-[#17413D] sm:text-[12px]"
                >
                  {credential}
                  {index < credentials.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="ml-4 text-[#91A298]"
                    >
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>

            <p className="mt-7 max-w-[650px] text-[16px] leading-7 text-[#65736D] sm:text-[18px] sm:leading-8">
              Dr. Rakesh Sarwal is a Public Health physician, Professor of
              Community Medicine and Head of the Integrated Health Clinic at
              ESIC Medical College &amp; Hospital, Faridabad. His academic work
              spans lifestyle medicine, nutrition, yoga, health systems for
              universal health coverage and public health policy.
            </p>

            <p className="mt-5 max-w-[610px] text-[15px] leading-7 text-[#65736D]">
              His work brings together public-health thinking and practical
              lifestyle approaches, supporting Sutra Health&apos;s doctor-led,
              whole-person model.
            </p>

            <Link
              href="/doctors"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#17413D]/25 pb-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#17413D] transition-colors duration-300 hover:border-[#17413D] sm:text-[13px]"
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
      </Container>
    </section>
  );
}

