import Link from "next/link";
import Container from "@/components/shared/Container";

const levels = [
  ["Green", "Continue", "Areas that are already supporting your health."],
  ["Yellow", "Adjust", "Areas where a practical change may be useful."],
  ["Red", "Prioritise", "Areas where change may deserve more attention."],
];

export default function HeroFramework() {
  return (
    <section className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-[20px] border border-[#173F35]/10 bg-[#F0F4ED] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">A useful place to start</p>
              <h2 className="mt-3 font-serif text-[35px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[43px] lg:text-[50px]">
                See where your everyday health habits stand.
              </h2>
              <p className="mt-4 max-w-[570px] text-[13px] leading-6 text-[#61736B] sm:text-[14px] sm:leading-7">
                The 21-Point Lifestyle Assessment asks about key areas such as sleep, food, movement, digestion and stress, then gives you a simple starting picture.
              </p>
              <Link href="/score" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#173F35] px-5 py-3 text-[12px] font-semibold text-white hover:bg-[#12352D]">Take the free assessment <span aria-hidden="true">→</span></Link>
            </div>

            <div className="divide-y border-y border-[#173F35]/10">
              {levels.map(([title, label, description], index) => (
                <div key={title} className="grid grid-cols-[86px_1fr] items-center gap-4 py-5 sm:grid-cols-[110px_1fr] sm:gap-7">
                  <div className="flex items-center gap-2">
                    <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-[#6B9573]" : index === 1 ? "bg-[#D6B65A]" : "bg-[#C86B62]"}`} />
                    <span className="font-serif text-[22px] text-[#173F35]">{title}</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#71817A]">{label}</p>
                    <p className="mt-1 text-[12px] leading-5 text-[#687A73]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
