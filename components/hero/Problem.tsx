import Container from "@/components/shared/Container";

const factors = [
  { number: "01", title: "Food & nutrition", text: "What you eat, how you eat, and what changes are realistic for your routine." },
  { number: "02", title: "Movement & sleep", text: "Daily movement, recovery and sleep patterns that influence how you feel and function." },
  { number: "03", title: "Stress & breathing", text: "The ways you respond to everyday pressure, including practical breath and mind practices." },
];

const audienceFit = [
  { fits: true, text: "You want practical lifestyle support alongside care you're already receiving from a doctor." },
  { fits: true, text: "You're dealing with a chronic, lifestyle-related concern — like blood pressure, blood sugar, weight, or stress." },
  { fits: true, text: "You want a plan built around your actual routine, not a generic template." },
  { fits: false, text: "You're looking for a replacement for medical diagnosis, medication, or emergency care — that always needs a doctor first." },
];

export default function Problem() {
  return (
    <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7CCB8] sm:text-[11px]">What brings you here?</p>
            <h2 className="mt-4 max-w-[540px] font-serif text-[40px] leading-[1.04] tracking-[-0.035em] text-[#FAF8F1] sm:text-[48px] lg:text-[54px]">
              What is integrative lifestyle medicine, and is it right for you?
            </h2>
            <p className="mt-6 max-w-[510px] text-[14px] leading-7 text-[#D0DAD4] sm:text-[15px] sm:leading-8">
              Integrative medicine means combining your existing medical care with complementary, evidence-based lifestyle approaches in a coordinated way — not replacing conventional treatment with an alternative to it. Your health is shaped by patterns that often overlap; understanding those patterns gives us a better place to begin than a diagnosis alone.
            </p>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8EAD95]">Is this a fit for you?</p>
              <ul className="space-y-2.5">
                {audienceFit.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-[13px] leading-6 text-[#D0DAD4] sm:text-[14px]">
                    <span aria-hidden="true" className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${item.fits ? "bg-[#65966F]/25 text-[#9DC1A3]" : "bg-white/10 text-[#D0DAD4]"}`}>
                      {item.fits ? "✓" : "!"}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
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