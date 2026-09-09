import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const services = [
  { title: "Lifestyle Medicine", description: "Understand the daily patterns that may be affecting your health and build practical changes alongside appropriate medical care.", image: "/images/services/lifestyle-medicine.webp", href: "/approach/lifestyle" },
  { title: "Nutrition Counselling", description: "Practical food guidance shaped around your preferences, health goals and real routine.", image: "/images/services/nutrition-counselling.webp", href: "/approach/nutrition" },
  { title: "Therapeutic Yoga", description: "Adapted movement and yoga practices designed around your body, needs and capacity.", image: "/images/services/therapeutic-yoga.webp", href: "/approach/therapeutic-yoga" },
  { title: "Breath & Mindfulness", description: "Simple practices that can support awareness, breathing and the ability to work with everyday stress.", image: "/images/services/meditation-stress-support.webp", href: "/approach/breath-mindfulness" },
];

export default function Programs() {
  return (
    <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 border-b border-[#173F35]/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">What we do</p>
            <h2 className="mt-3 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-[48px]">
              Four practices. One coordinated approach.
            </h2>
          </div>
          <p className="max-w-[390px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
            We choose the combination that makes sense for you rather than asking you to fit into a fixed program.
          </p>
        </div>

        {/* Mobile: horizontal swipe only. Desktop/tablet layout remains unchanged. */}
        <div className="mt-10 overflow-x-auto pb-2 sm:overflow-visible sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group w-[88vw] shrink-0 snap-start overflow-hidden rounded-[16px] border border-[#173F35]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(23,63,53,0.08)] sm:w-auto">
                <div className="relative aspect-[1.2] overflow-hidden bg-[#EAF0E7]">
                  <Image src={service.image} alt={`${service.title} at Sutra Health`} fill sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-[22px] leading-tight tracking-[-0.02em] text-[#173F35]">{service.title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-[#6B7C75]">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[#4F8060]">Explore <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-3 text-center text-[11px] font-medium tracking-[0.14em] text-[#687A73] sm:hidden">
          Swipe to explore →
        </p>
      </Container>
    </section>
  );
}
