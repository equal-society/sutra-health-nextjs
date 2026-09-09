import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Experts() {
  return (
    <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[350px_1fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[14px]">
            <Image src="/images/doctor.webp" alt="Dr. Rakesh Sarwal" fill sizes="(max-width: 1024px) 90vw, 350px" className="object-cover" />
          </div>
          <div className="max-w-[700px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">Doctor-led care</p>
            <h2 className="mt-4 max-w-[650px] font-serif text-[39px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px] lg:text-[54px]">Care informed by <span className="italic text-[#65966F]">medicine, public health and yoga.</span></h2>
            <div className="mt-7 border-t border-[#173F35]/10 pt-6">
              <h3 className="font-serif text-[31px] tracking-[-0.025em] text-[#173F35] sm:text-[35px]">Dr. Rakesh Sarwal</h3>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#65966F] sm:text-[11px]">MBBS, MPH, DrPH (Johns Hopkins)</p>
              <p className="mt-3 text-[13px] font-medium leading-6 text-[#173F35] sm:text-[14px]">Therapeutic Yoga Consultant</p>
              <p className="mt-2 max-w-[650px] text-[12px] leading-6 text-[#687A73] sm:text-[13px] sm:leading-7">Professor, Community Medicine · Head, Integrated Health Clinic, ESIC Medical College & Hospital, Faridabad</p>
              <p className="mt-4 max-w-[600px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">Dr. Rakesh Sarwal brings public-health, academic and therapeutic-yoga experience to Sutra Health, with a focus on lifestyle medicine, nutrition and healthier everyday practices.</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                <Link href="/doctors" className="text-[13px] font-semibold text-[#173F35] hover:text-[#65966F]">Meet the doctors →</Link>
                <Link href="https://academic.lifequality.org.in/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-[#173F35] hover:text-[#65966F]">Academic profile ↗</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
