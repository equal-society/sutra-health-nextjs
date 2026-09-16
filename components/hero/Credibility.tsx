import Container from "@/components/shared/Container";

export default function Credibility() {
  return (
    <section className="border-y border-[#202522]/10 bg-[#F7F5EF]">
      <Container>
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.7fr] lg:items-end lg:gap-20 lg:py-24">
          {/* Intro */}
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#91A298]">
              Why Sutra Health
            </p>

            <h2 className="max-w-[420px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[44px] lg:text-[46px]">
              A different way to care for your health.
            </h2>
          </div>

          {/* Main content */}
          <div>
            <p className="max-w-[700px] text-[17px] leading-[1.8] text-[#4E5B56] sm:text-[18px] lg:text-[19px]">
              We look beyond a single symptom or habit to understand what may
              be affecting your health and what changes can realistically help.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#202522]/10 pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#65736D] sm:mt-9">
              <span>Doctor-led</span>
              <span>Evidence-informed</span>
              <span>Personalised</span>
              <span>Whole-person care</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}