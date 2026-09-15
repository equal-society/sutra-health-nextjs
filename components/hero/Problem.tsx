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
    <section className="relative overflow-hidden bg-[#F7F5EF] py-20 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-20 h-[460px] w-[460px] rounded-full bg-[#DCE5DD]/35 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-[#E9E1D1]/30 blur-3xl" />

      <Container>
        <div className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.84fr_1.16fr] lg:items-start lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-9 bg-[#91A298]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                  What brings you here?
                </p>
              </div>

              <h2 className="mt-5 max-w-[560px] font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-[#202522] sm:text-[49px] lg:text-[57px]">
                What is integrative lifestyle medicine, and is it right for you?
              </h2>

              <p className="mt-7 max-w-[525px] text-[14px] leading-7 text-[#53605B] sm:text-[15px] sm:leading-8">
                Integrative medicine means combining your existing medical care with complementary, evidence-based lifestyle approaches in a coordinated way — not replacing conventional treatment with an alternative to it. Your health is shaped by patterns that often overlap; understanding those patterns gives us a better place to begin than a diagnosis alone.
              </p>
            </div>

            <div className="border-t border-[#202522]/12">
              {factors.map((factor) => (
                <article key={factor.number} className="group grid grid-cols-[40px_1fr] gap-5 border-b border-[#202522]/12 py-7 sm:grid-cols-[54px_1fr] sm:gap-7 sm:py-8">
                  <span className="pt-1 text-[10px] font-semibold tracking-[0.16em] text-[#80958A]">{factor.number}</span>
                  <div>
                    <div aria-hidden="true" className="mb-4 h-px w-8 bg-[#B9C5BD] transition-all duration-300 group-hover:w-12 group-hover:bg-[#17413D]" />
                    <h3 className="font-serif text-[28px] leading-tight tracking-[-0.025em] text-[#202522] sm:text-[31px]">{factor.title}</h3>
                    <p className="mt-3 max-w-[600px] text-[13px] leading-6 text-[#65736D] sm:text-[14px] sm:leading-7">{factor.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-[#202522]/12 pt-10 sm:mt-20 sm:pt-12 lg:mt-24 lg:grid lg:grid-cols-[0.84fr_1.16fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-9 bg-[#91A298]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">Is this a fit for you?</p>
              </div>
              <p className="mt-5 max-w-[360px] font-serif text-[27px] leading-[1.08] tracking-[-0.03em] text-[#17413D] sm:text-[31px]">
                Practical support, designed around real life.
              </p>
            </div>

            <ul className="mt-8 grid gap-0 sm:grid-cols-2 lg:mt-0">
              {audienceFit.map((item, index) => (
                <li key={item.text} className={`flex items-start gap-3 border-[#202522]/10 py-4 text-[13px] leading-6 text-[#53605B] sm:px-5 ${index < 2 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r" : ""}`}>
                  <span aria-hidden="true" className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${item.fits ? "bg-[#E1EAE3] text-[#17413D]" : "bg-[#ECE8DE] text-[#6C675D]"}`}>
                    {item.fits ? "✓" : "!"}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
      </Container>

      
    </section>

    
  );
}
