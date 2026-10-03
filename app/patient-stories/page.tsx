import Container from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-[12px] ${light ? "text-white/75" : "text-[#65736D]"}`}>
      {children}
    </p>
  );
}

const stories = [
  {
    quote:
      "Amazing consultation experience. The doctors patiently listened to my concerns and provided practical Natural solutions.",
    name: "Rahul Sharma",
  },
  {
    quote:
      "Yoga therapy helped reduce my back pain significantly. Professional staff and peaceful environment.",
    name: "Priya Verma",
  },
  {
    quote:
      "Highly recommend Sutra Health. The holistic treatment approach actually delivers long-term benefits.",
    name: "Ankit Mehta",
  },
  {
    quote:
      "Meditation sessions transformed my daily routine. Stress levels are much lower now.",
    name: "Neha Kapoor",
  },
  {
    quote:
      "I had the pleasure of getting guidance from Dr. Rakesh, a humble therapeutic Yoga consultant who is an MBBS doctor as well. He guided me and my son through our Yoga journey with a smile on his face.",
    name: "Puneet Kulshrestha",
  },
  {
    quote:
      "I stayed at Sutra Health with my family and it was the best decision we made. Every morning you can join yoga with Dr. Rakesh on the rooftop terrace as the sun rises.",
    name: "Adheer Dixit",
  },
  {
    quote:
      "Very good service at Sutra Health, full care given to patients — bahut accha laga. Thank you Sutra Health!",
    name: "Sumit Kashyap",
  },
  {
    quote:
      "I'm from Argentina and had the privilege of staying at Dr. Rakesh's place, sharing yoga classes with him every morning on his terrace. A wonderful way to start the day.",
    name: "Flor Riboldi",
  },
];

export default function PatientStoriesPage() {
  return (
    <main className="bg-white">
      <section aria-labelledby="stories-title">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <Eyebrow>Patient experiences</Eyebrow>

            <h1
              id="stories-title"
              className="mt-3 max-w-[800px] font-serif text-[40px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[60px]"
            >
              Stories from the Sutra Health community.
            </h1>

            <p className="mt-5 max-w-[650px] text-base leading-8 text-[#65736D] sm:text-lg">
              Hear from people who have shared their experiences with
              our consultations, yoga sessions and wellness approach.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {stories.map((story, index) => (
                <article
                  key={`${story.name}-${index}`}
                  className="flex flex-col border border-[#202522]/15 bg-[#FAF8F2] p-6 sm:p-7"
                >
                  <span className="text-xs tracking-wider text-[#65736D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-[#202522]">
                    “{story.quote}”
                  </blockquote>

                  <div className="mt-7 border-t border-[#202522]/15 pt-4">
                    <cite className="text-sm font-semibold not-italic text-[#202522]">
                      {story.name}
                    </cite>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-[#65736D]">
                      Individual experience
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 max-w-[760px] text-xs leading-5 text-[#65736D]">
              Individual accounts reflect personal experiences and do
              not guarantee similar outcomes. They do not replace
              advice from a qualified healthcare professional.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}