export default function HealthBridge() {
  return (
    <section
      aria-labelledby="health-bridge-title"
      className="bg-[#F7F5EF]"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="max-w-[820px]">
          {/* Eyebrow */}
          <p className="mb-5 font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
            A different way to look at health
          </p>

          {/* Main statement */}
          <h2
            id="health-bridge-title"
            className="
              max-w-[780px]
              font-serif
              text-[32px]
              font-medium
              leading-[1.15]
              tracking-[-0.02em]
              text-[#202522]
              sm:text-[40px]
              lg:text-[48px]
            "
          >
            Health is shaped by the choices we make every day.
          </h2>

          {/* Supporting copy */}
          <p
            className="
              mt-5
              max-w-[650px]
              font-sans
              text-[16px]
              leading-[1.7]
              text-[#4F5A54]
              sm:text-[17px]
            "
          >
            We help you understand those choices and turn them into
            practical, sustainable habits.
          </p>
        </div>
      </div>
    </section>
  );
}