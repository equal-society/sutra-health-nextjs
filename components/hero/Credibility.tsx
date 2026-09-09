import Container from "@/components/shared/Container";

const highlights = [
  { number: "15+", label: "Years of experience in healthcare and therapeutic yoga" },
  { number: "1200+", label: "People worked with directly" },
  { number: "Online", label: "Consultation available across India" },
];

export default function Credibility() {
  return (
    <section className="bg-[#FAF8F1]" aria-labelledby="credibility-heading">
      <Container>
        <div className="border-y border-[#173F35]/10 py-10 sm:py-12 lg:py-14">
          <div className="grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">Why Sutra Health</p>
              <h2 id="credibility-heading" className="mt-3 max-w-[650px] font-serif text-[31px] leading-[1.08] tracking-[-0.03em] text-[#123F35] sm:text-[38px]">
                One coordinated plan for the way your health actually fits together.
              </h2>
              <p className="mt-4 max-w-[650px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
                We look at the everyday factors that shape health — food, movement, sleep, stress and routine — and bring the relevant pieces together instead of treating them as disconnected problems.
              </p>
            </div>
            <div className="grid grid-cols-3 border-t border-[#173F35]/10 pt-7 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
              {highlights.map((item, index) => (
                <div key={item.label} className={`px-3 ${index !== 0 ? "border-l border-[#173F35]/10" : ""}`}>
                  <p className="font-serif text-[28px] tracking-[-0.03em] text-[#173F35] sm:text-[34px]">{item.number}</p>
                  <p className="mt-1 max-w-[145px] text-[10px] leading-4 text-[#71817A] sm:text-[11px] sm:leading-5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
