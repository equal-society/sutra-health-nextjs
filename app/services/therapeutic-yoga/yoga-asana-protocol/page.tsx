import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/yoga-asana-protocol`;
const TITLE = "Yoga Asana Practice Guide | Sutra Health";
const DESCRIPTION = "Explore Sutra Health's Sivananda-inspired Yoga Asana Protocol by practice group, with safety notes and links to the video demonstrations.";

export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: "Sutra Health", type: "article", locale: "en_IN", images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }] },
};

const warmup = { name: "Warm-up", description: "Begin with a few minutes of gentle movement, then notice your posture and natural breath.", url: "https://youtu.be/DKJMrGAiNxY?si=FjUJQirqRq4UTIpV" };
const poses = [
  { name: "Tadasana", focus: "Standing posture", description: "Practise a steady upright stance. Keep the feet grounded, shoulders relaxed and breath comfortable.", url: "https://youtube.com/shorts/o6QVnZSyByE?si=JYIaeF9p804pJuLP" },
  { name: "Vriksha Asana", focus: "Balance", description: "Use a wall or chair if needed. Keep the lifted foot at a comfortable height.", url: "https://youtube.com/shorts/DXcniub8Y7U?si=4cyX0tGuuZ5Mmg-O" },
  { name: "Surya Namaskar", focus: "Flow sequence", description: "Follow the demonstration at a manageable pace and modify movements as needed.", url: "https://youtu.be/wENVNl08M_k?si=VhJMHv0wSj2wphnw" },
  { name: "Shavasana", focus: "Rest", description: "Lie comfortably, allow the body to settle and return attention to the breath.", url: "https://youtu.be/41VVRSD9abk" },
  { name: "Pawan Mukt Asana", focus: "Floor-based posture", description: "Move gently and keep the neck and lower back comfortable.", url: "https://youtu.be/b4unFpb4HW8?si=NNGo0WrLn05CyUJT" },
  { name: "Sarvangasana", focus: "Advanced inversion", description: "Learn with qualified supervision; this posture is not suitable for every person.", url: "https://youtu.be/9IYbmekWcO8?si=saudw1P4p0E--ULu", caution: true },
  { name: "Matsyasana", focus: "Backbend", description: "Keep movement controlled and avoid forcing the neck.", url: "https://youtu.be/ZTuH72ekcfQ?si=GNfWTyB0luJGuXDa" },
  { name: "Halasana", focus: "Advanced fold / inversion", description: "Do not force the legs overhead or strain the neck; seek instruction.", url: "https://youtu.be/hvFsZCy5gWg?si=OpFAsA0GMnpYv-MZ", caution: true },
  { name: "Paschimottanasana", focus: "Seated forward fold", description: "Fold only as far as comfortable and avoid pulling yourself deeper.", url: "https://youtu.be/J4H-P1B6Z98?si=jnz_Lc88bPEr-RHH" },
  { name: "Shirshasana", focus: "Advanced headstand", description: "Do not attempt as a beginner or without trained supervision.", url: "https://youtube.com/shorts/-ZJ3Yhi8s_M?si=HA9yEGP8kdNdn9dX", caution: true },
  { name: "Sheshank Asana", focus: "Forward-folding rest pose", description: "Keep the position comfortable and use support where helpful.", url: "https://youtu.be/2yG97j9HgQw?si=01-okOJWrMpV06Xd" },
  { name: "Bhujang / Sarpasana", focus: "Backbend", description: "Lift within a comfortable range and avoid compressing the lower back.", url: "https://youtu.be/1LZcfo461S4?si=t0MWwiuL4Zzp1H7P" },
  { name: "Shalabhasana", focus: "Back-body activation", description: "Use a small controlled lift and keep the neck long.", url: "https://youtu.be/5Z76Y85KZCk?si=Kg0umbaDXBI7a6TQ" },
  { name: "Dhanurasana", focus: "Backbend", description: "Approach gradually; do not force the spine into a deeper arch.", url: "https://youtu.be/xOQMTnV6ZUM?si=JGLRrIXX0ZwDO9Qi" },
  { name: "Chakrasana", focus: "Advanced wheel pose", description: "Learn a suitable progression with an instructor; do not force the wrists, shoulders or back.", url: "https://youtu.be/VAguqIn6Kog?si=nsXlXnx3Hp_cGPvE", caution: true },
  { name: "Ardha Matsyendrasana", focus: "Seated twist", description: "Lengthen the spine first and rotate gently without pulling into the twist.", url: "https://in.pinterest.com/equal_society/" },
  { name: "Ustrasana", focus: "Camel pose / backbend", description: "Use a comfortable range and avoid forcing the hips, spine or neck.", url: "https://in.pinterest.com/pin/yoga-in-harmony--1137158974682061121/" },
  { name: "Simhasana", focus: "Breath and expression", description: "Follow the demonstration comfortably and relax the face between repetitions.", url: "https://youtu.be/RkvdfKefcDU?si=f67XBr1M-fDDH7dz" },
  { name: "Mayurasana", focus: "Advanced arm balance", description: "An advanced posture that requires strength and technique; learn under qualified supervision.", url: "https://youtu.be/aKdpdQyx-f4?si=blj7weEHogOCvAFf", caution: true },
  { name: "Pranayama", focus: "Breath practice", description: "Begin with gentle natural breathing. Do not force the breath or use intense techniques without guidance.", url: "https://youtu.be/R37-2JoGzmc?si=sajrRRW6pSBgKzrf" },
];
const eyebrow = "text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]";

export default function YogaAsanaProtocolPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-[#173B36] sm:min-h-[580px]">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/yoga-asana.webp')" }} />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#10211E]/90 via-[#10211E]/65 to-[#10211E]/20" />
        <Container>
          <div className="relative z-10 max-w-3xl py-20 sm:py-24 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">Traditional Yoga Practice</p>
            <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] tracking-[-0.035em] text-white">Yoga Asana Protocol: explore the sequence by practice group</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">Explore the traditional Life Quality sequence by category. Each guide explains the posture's role in practice, shares available video references and highlights when a posture needs extra care.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#practice" className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[var(--sutra-teal)]">Start the sequence ↓</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className={eyebrow}>01 / Begin with intention</p>
              <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">Arrive before you begin.</h2>
              <p className="mt-4 max-w-md text-base leading-8 text-[#3F4B46]">Take a quiet moment. You may recite the traditional invocation or sit in silence and notice your natural breath.</p>
            </div>
            <blockquote className="relative border-y border-[var(--sutra-border)] py-6 pl-5 sm:py-8 sm:pl-8">
              <span aria-hidden="true" className="absolute left-0 top-6 h-12 w-1 bg-[var(--sutra-teal)] sm:top-8" />
              <p className="font-serif text-xl leading-[1.9] sm:text-2xl sm:leading-[1.9]">ॐ सह नाववतु ।<br/>सह नौ भुनक्तु ।<br/>सह वीर्यं करवावहै ।<br/>तेजस्वि नावधीतमस्तु मा विद्विषावहै ।<br/>ॐ शान्तिः शान्तिः शान्तिः ॥</p>
            </blockquote>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-white py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div><p className={eyebrow}>02 / Set yourself up</p><h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Prepare with care.</h2></div>
            <div>
              <p className="max-w-3xl text-base leading-8 text-[#3F4B46]">Choose a quiet space, a non-slip mat and comfortable clothing. Begin gently and keep your breathing natural. The original source also lists Kapalbhati, A-U-M and Agnisar under Shodhan Kriya; these are distinct practices, not required warm-up steps.</p>
              <div className="mt-7 grid gap-0 border-y border-[var(--sutra-border)] sm:grid-cols-3 sm:divide-x sm:divide-[var(--sutra-border)]">
                {["Move gently before deeper postures.","Keep breathing comfortable; do not force it.","Rest or skip any posture that feels unsuitable."].map((item, i) => <div key={item} className="flex gap-4 border-b border-[var(--sutra-border)] py-4 last:border-b-0 sm:border-b-0 sm:px-4 sm:first:pl-0 sm:last:pr-0"><span className="font-serif text-lg text-[var(--sutra-teal)]">0{i+1}</span><p className="text-base leading-7 text-[#27352F]">{item}</p></div>)}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="practice" className="scroll-mt-20 py-14 sm:py-20">
        <Container>
          <div className="flex flex-col justify-between gap-5 border-b border-[var(--sutra-border-strong)] pb-7 sm:flex-row sm:items-end sm:pb-9">
            <div><p className={eyebrow}>03 / Follow in order</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">The asana sequence</h2><p className="mt-4 max-w-2xl text-base leading-7 text-[#3F4B46]">Start with the warm-up, then use each description and linked demonstration as a guide through the practice.</p></div>
            <p className="shrink-0 text-sm text-[#3F4B46]">01 warm-up <span className="px-2 text-[var(--sutra-border-strong)]">/</span> 20 practices</p>
          </div>
          <div className="mt-7 overflow-hidden border-y border-[var(--sutra-border-strong)] bg-white">
            <table className="w-full border-collapse text-left">
              <thead><tr className="bg-[var(--sutra-pale-sage)]"><th scope="col" className="w-[40%] px-4 py-5 text-sm font-bold uppercase tracking-[0.08em] text-[#173B36] sm:w-[35%] sm:px-7">Practice</th><th scope="col" className="px-4 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#173B36] sm:px-7">Description &amp; demonstration</th></tr></thead>
              <tbody>
                <tr className="bg-[#F0F3E9]">
                  <th scope="row" className="px-4 py-6 align-top sm:px-7 sm:py-7"><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Start here</span><span className="mt-2 block font-serif text-xl sm:text-2xl">Warm-up</span></th>
                  <td className="px-4 py-6 align-top sm:px-7 sm:py-7"><p className="max-w-2xl text-base leading-8 text-[#27352F] sm:text-lg">{warmup.description}</p><a href={warmup.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-base font-bold text-[#14564C] underline decoration-[var(--sutra-border-strong)] underline-offset-4 hover:text-[var(--sutra-ink)]"><span aria-hidden="true">▶</span> Watch warm-up video <span aria-hidden="true">↗</span></a></td>
                </tr>
                {poses.map((pose, index) => (
                  <tr key={pose.name} className="group border-t border-[var(--sutra-border)] transition-colors hover:bg-[#FAFBF7]">
                    <th scope="row" className="px-4 py-6 align-top sm:px-7 sm:py-7"><div className="flex items-start gap-3"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--sutra-border-strong)] font-serif text-sm text-[var(--sutra-teal)] transition-colors group-hover:border-[var(--sutra-teal)] group-hover:bg-[var(--sutra-teal)] group-hover:text-white">{String(index+1).padStart(2,"0")}</span><span><span className="block font-serif text-xl leading-snug sm:text-2xl">{pose.name}</span><span className="mt-2 block text-sm font-medium leading-6 text-[#3F4B46]">{pose.focus}</span>{pose.caution && <span className="mt-2 inline-block border border-[#E7D6C6] bg-[#FBF5EF] px-2 py-1 text-xs font-bold uppercase tracking-wide text-[#8B4C23]">Advanced · seek guidance</span>}</span></div></th>
                    <td className="px-4 py-6 align-top sm:px-7 sm:py-7"><p className="max-w-3xl text-base leading-8 text-[#27352F] sm:text-lg">{pose.description}</p><a href={pose.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-base font-bold text-[#14564C] underline decoration-[var(--sutra-border-strong)] underline-offset-4 hover:text-[var(--sutra-ink)]"><span aria-hidden="true">▶</span> Watch / view reference <span aria-hidden="true">↗</span></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#3F4B46]">This sequence is a reference, not a requirement to perform every pose in one session. Practise within your comfort level and skip any posture that feels unsuitable.</p>
          <a href="https://archive.org/details/surya-yoga-sequence" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-3 border-b border-[var(--sutra-teal)] pb-1 text-sm font-semibold text-[var(--sutra-teal)] hover:text-[var(--sutra-ink)]">Explore the complete video archive <span aria-hidden="true">→</span></a>
        </Container>
      </section>

      <section className="bg-[#17413D] py-12 text-white sm:py-16">
        <Container><div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-8"><span className="flex h-12 w-12 items-center justify-center border border-white/25 font-serif text-xl text-[#D6E0CC]">!</span><div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D6E0CC]">A note on safety</p><h2 className="mt-3 font-serif text-2xl sm:text-3xl">Let comfort set the limit.</h2><p className="mt-3 max-w-3xl text-base leading-8 text-white/90">Yoga should not be forced. Beginners should avoid advanced inversions and demanding poses without suitable instruction. If you are pregnant, have an injury or a health condition, ask a qualified professional about modifications. <a className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white" href="https://www.nccih.nih.gov/health/yoga-effectiveness-and-safety" target="_blank" rel="noopener noreferrer">Read yoga safety guidance ↗</a>.</p></div></div></Container>
      </section>
    </main>
  );
}
