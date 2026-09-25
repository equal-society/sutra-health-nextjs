type LifestyleArea = [string, string, string];

const lifestyleAreas: LifestyleArea[] = [
  ["01", "Diet", "What you eat regularly can influence energy, metabolic health and long-term wellbeing."],
  ["02", "Exercise & movement", "Regular movement supports strength, mobility, cardiovascular health and everyday function."],
  ["03", "Sleep", "Sleep gives the body and mind time to recover, regulate and function well."],
  ["04", "Stress-free living", "Learning practical ways to manage stress can support both emotional and physical health."],
  ["05", "Social networks", "Supportive relationships and meaningful connection are important parts of wellbeing."],
  ["06", "Being addiction-free", "Reducing harmful dependencies can make healthier choices more achievable and sustainable."],
];

export default function LifestyleHealthSection() {
  return (
    <section className="border-b border-[#202522]/10 bg-white" aria-labelledby="lifestyle-heading">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-15 lg:px-12 lg:py-15">
        <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
            01 · Lifestyle &amp; health
          </p>
          <h2
            id="lifestyle-heading"
            className="mt-5 max-w-[1120px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.025em] text-[#202522] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px]"
          >
          Do you know how your lifestyle shapes your current and future health?
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:max-w-[1180px]">
          <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
            <p className="max-w-[650px] font-sans text-[16px] leading-[1.7] text-[#65736D] sm:text-[17px]">
            Diet, movement, sleep, stress, social connection and harmful habits can all influence health over time. Many common chronic conditions are influenced by these everyday factors, alongside genetics, environment and access to care.
            </p>

            <p className="mt-5 max-w-[650px] font-sans text-[14px] leading-7 text-[#65736D] sm:text-[15px] sm:leading-8">
              The useful question is not whether lifestyle matters. It is which changes are relevant to you, and how you can make them realistic enough to last.
            </p>
          </div>

          <div className="lg:pl-12 xl:pl-16">
            <div className="grid sm:grid-cols-2 gap-2">
              {lifestyleAreas.map(([number, title, description]) => (
                <div
                  key={number}
                  className="border-b border-[#202522]/10 py-5 sm:min-h-[132px] lg:min-h-[140px]"
                >
                  <span className="font-sans text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                    {number}
                  </span>
                  <h3 className="mt-3 font-serif text-[22px] font-medium leading-[1.08] tracking-[-0.02em] text-[#202522] sm:text-[24px]">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-[300px] font-sans text-[13px] leading-6 text-[#65736D] sm:text-[14px]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}