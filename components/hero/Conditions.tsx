import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const conditions = [
  ["Weight Management", "Support for healthier eating, movement and routines.", "/conditions/weight-management", "/images/conditions/weight-management.webp"],
  ["Metabolic Health", "Lifestyle-focused support alongside appropriate medical care.", "/conditions/metabolic-health", "/images/conditions/metabolic-health.webp"],
  ["High Blood Pressure", "Explore lifestyle factors that may support blood-pressure care.", "/conditions/high-blood-pressure", "/images/conditions/high-blood-pressure.webp"],
  ["Arthritis & Joint Pain", "Adapted movement and everyday practices for mobility.", "/conditions/arthritis-joint-pain", "/images/conditions/arthritis-joint-pain.webp"],
  ["Migraine & Headache", "Look at lifestyle patterns that may be relevant to your care.", "/conditions/migraine-headache", "/images/conditions/migraine-headache.webp"],
  ["Digestive & Gut Health", "Practical attention to food, routines and digestive wellbeing.", "/conditions/digestive-gut-health", "/images/conditions/digestive-gut-health.webp"],
];

export default function Conditions() {
  return (
    <section className="bg-[#F5F6F0] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">Health concerns</p>
            <h2 className="mt-3 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">Health concerns we support through lifestyle-focused care.</h2>
          </div>
          <p className="max-w-[390px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">These are selected areas of care. Lifestyle practices are considered as part of a broader, individual plan.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map(([title, description, href, image]) => (
            <Link key={href} href={href} className="group grid grid-cols-[104px_1fr] overflow-hidden rounded-[14px] border border-[#173F35]/10 bg-[#FCFCF8] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(23,63,53,0.07)] sm:grid-cols-[125px_1fr]">
              <div className="relative min-h-[125px] overflow-hidden">
                <Image src={image} alt={`${title} lifestyle healthcare`} fill sizes="125px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-4 sm:p-5">
                <h3 className="font-serif text-[19px] leading-[1.12] tracking-[-0.02em] text-[#173F35]">{title}</h3>
                <p className="mt-2 text-[11px] leading-5 text-[#71817A]">{description}</p>
                <span className="mt-3 text-[11px] font-semibold text-[#65966F]">Explore →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/conditions" className="text-[12px] font-semibold text-[#173F35] hover:text-[#65966F]">Explore all conditions →</Link>
        </div>
      </Container>
    </section>
  );
}
