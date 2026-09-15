import Container from "@/components/shared/Container";

export default function Credibility() {
  return (
    <section className="border-y border-[#202522]/10 bg-[#F7F5EF]">
      <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:items-end lg:gap-20">
          {/* Intro */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#80958A]">
              Why Sutra Health
            </p>

            <h2 className="max-w-[360px] font-serif text-[34px] font-medium leading-[1.05] tracking-[-0.035em] text-[#202522] sm:text-[40px]">
              Care that sees the whole person.
            </h2>
          </div>

          {/* Main content */}
          <div>
            <p className="max-w-[700px] text-[17px] leading-8 text-[#4E5B56] sm:text-[18px] sm:leading-9">
              Sutra Health is a doctor-led integrative healthcare service in
              India. We bring appropriate medical care together with
              evidence-informed lifestyle practices to help people understand
              the factors influencing their health and make practical changes
              that can last.
            </p>

            <p className="mt-4 max-w-[700px] text-[13px] leading-6 text-[#68746F] sm:text-[14px] sm:leading-7">
              Our approach supports people looking for practical guidance with
              lifestyle medicine, nutrition counselling, therapeutic yoga,
              movement, sleep, stress, and sustainable behaviour change —
              alongside the medical care they may already be receiving.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#202522]/10 pt-5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#68746F]">
              <span>Doctor-led</span>
              <span>Evidence-informed</span>
              <span>Personalised</span>
              <span>Whole-person care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}