"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";

// Publish only testimonials that Sutra Health can verify, has permission to use,
// and has reviewed for medical outcome claims and patient privacy.
const testimonials = [
  {
    quote: "Amazing consultation experience. The doctors patiently listened to my concerns and provided practical Natural solutions.",
    name: "Rahul Sharma",
  },
  {
    quote: "Yoga therapy helped reduce my back pain significantly. Professional staff and peaceful environment.",
    name: "Priya Verma",
  },
  {
    quote: "Highly recommend Sutra Health. The holistic treatment approach actually delivers long-term benefits.",
    name: "Ankit Mehta",
  },
  {
    quote: "Meditation sessions transformed my daily routine. Stress levels are much lower now.",
    name: "Neha Kapoor",
  },
  {
    quote: "I had the pleasure of getting guidance from Dr. Rakesh, a humble therapeutic Yoga consultant who is an MBBS doctor as well. He guided me and my son through our Yoga journey with a smile on his face.",
    name: "Puneet Kulshrestha",
  },
  {
    quote: "I stayed at Sutra Health with my family and it was the best decision we made. Every morning you can join yoga with Dr. Rakesh on the rooftop terrace as the sun rises.",
    name: "Adheer Dixit",
  },
  {
    quote: "Very good service at Sutra Health, full care given to patients — bahut accha laga. Thank you Sutra Health!",
    name: "Sumit Kashyap",
  },
  {
    quote: "I'm from Argentina and had the privilege of staying at Dr. Rakesh's place, sharing yoga classes with him every morning on his terrace. A wonderful way to start the day.",
    name: "Flor Riboldi",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollReviews = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector<HTMLElement>("[data-testimonial-card]");
    if (!card) return;

    sliderRef.current.scrollBy({
      left: direction === "right" ? card.offsetWidth + 20 : -(card.offsetWidth + 20),
      behavior: "smooth",
    });
  };

  return (
    <section id="patient-stories" aria-labelledby="patient-stories-heading" className="overflow-hidden bg-[var(--sutra-white)]">
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          <div className="flex flex-col gap-8 border-b border-[var(--sutra-border)] pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-9 bg-[var(--sutra-sage)]" />
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">
                  Patient experiences
                </p>
              </div>
              <h2 id="patient-stories-heading" className="mt-5 max-w-[700px] font-serif text-[40px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[52px] lg:text-[62px]">
                What people have shared.
              </h2>
              <p className="mt-5 max-w-[650px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-8">
                Experiences shared by people who have interacted with Sutra Health and its practitioners.
              </p>
            </div>

            <div className="hidden shrink-0 gap-2 sm:flex">
              {(["left", "right"] as const).map((direction) => (
                <button key={direction} type="button" onClick={() => scrollReviews(direction)} aria-label={direction === "left" ? "Previous experiences" : "Next experiences"} className="flex h-11 w-11 items-center justify-center border border-[var(--sutra-border-strong)] text-[var(--sutra-ink)] transition-colors duration-300 hover:border-[var(--sutra-sage)] hover:bg-[var(--sutra-sage)] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-sage)] focus-visible:ring-offset-2">
                  {direction === "left" ? <ArrowLeft size={16} strokeWidth={1.5} /> : <ArrowRight size={16} strokeWidth={1.5} />}
                </button>
              ))}
            </div>
          </div>

          <div ref={sliderRef} className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-14" style={{ overscrollBehaviorX: "contain" }}>
            {testimonials.map((testimonial, index) => (
              <article key={`${testimonial.name}-${index}`} data-testimonial-card className="flex min-w-[88%] snap-start flex-col border border-[var(--sutra-border)] bg-[var(--sutra-porcelain)] p-6 sm:min-w-[calc((100%-20px)/2)] sm:p-8 lg:min-w-[calc((100%-40px)/3)]">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-medium tracking-[0.14em] text-[var(--sutra-sage)]">{String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="h-px w-8 bg-[var(--sutra-sage)]" />
                </div>
                <blockquote className="mt-8 flex flex-1 flex-col">
                  <p className="font-serif text-[20px] leading-[1.4] tracking-[-0.015em] text-[var(--sutra-ink)] sm:text-[22px]">“{testimonial.quote}”</p>
                  <footer className="mt-8 border-t border-[var(--sutra-border)] pt-5">
                    <cite className="font-sans text-[13px] font-semibold not-italic text-[var(--sutra-ink)] sm:text-[14px]">{testimonial.name}</cite>
                    <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.12em] text-[var(--sutra-muted)]">Individual experience</p>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between sm:hidden">
            <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-[var(--sutra-muted)]">Swipe to explore</p>
            <div className="flex gap-2">
              <button type="button" onClick={() => scrollReviews("left")} aria-label="Previous experience" className="flex h-10 w-10 items-center justify-center border border-[var(--sutra-border-strong)] text-[var(--sutra-ink)]"><ArrowLeft size={15} strokeWidth={1.5} /></button>
              <button type="button" onClick={() => scrollReviews("right")} aria-label="Next experience" className="flex h-10 w-10 items-center justify-center border border-[var(--sutra-border-strong)] text-[var(--sutra-ink)]"><ArrowRight size={15} strokeWidth={1.5} /></button>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--sutra-border)] pt-5 sm:mt-10">
            <p className="max-w-[760px] font-sans text-[11px] leading-5 text-[var(--sutra-muted)] sm:text-[12px]">
              These are individual accounts, not typical or guaranteed results. Testimonials should not replace advice from a qualified healthcare professional.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
