import Container from "@/components/shared/Container";

const factors = [
  { number: "01", title: "Food & nutrition", text: "What you eat, how you eat, and what changes are realistic for your routine." },
  { number: "02", title: "Movement & sleep", text: "Daily movement, recovery and sleep patterns that influence how you feel and function." },
  { number: "03", title: "Stress & breathing", text: "The ways you respond to everyday pressure, including practical breath and mind practices." },
];

export default function Problem() {
  return (
    <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7CCB8] sm:text-[11px]">What brings you here?</p>
            <h2 className="mt-4 max-w-[540px] font-serif text-[40px] leading-[1.04] tracking-[-0.035em] text-[#FAF8F1] sm:text-[48px] lg:text-[54px]">
              Start with what is happening in your life, not just a diagnosis.
            </h2>
            <p className="mt-6 max-w-[510px] text-[14px] leading-7 text-[#D0DAD4] sm:text-[15px] sm:leading-8">
              Your health is influenced by patterns that often overlap. Understanding those patterns gives us a better place to begin.
            </p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {factors.map((factor) => (
              <article key={factor.number} className="grid gap-4 py-7 sm:grid-cols-[60px_1fr] sm:gap-6 sm:py-8">
                <span className="pt-1 text-[11px] font-semibold tracking-[0.12em] text-[#8EAD95]">{factor.number}</span>
                <div>
                  <h3 className="font-serif text-[26px] leading-tight tracking-[-0.02em] text-[#FAF8F1] sm:text-[29px]">{factor.title}</h3>
                  <p className="mt-3 max-w-[620px] text-[13px] leading-6 text-[#B8C8C0] sm:text-[14px] sm:leading-7">{factor.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
