import type { Metadata } from "next";
import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

// Concise Therapeutic Yoga copy. Shared service-page UI remains unchanged.
const therapeuticYoga: ServicePageConfig = {
  name: "Therapeutic Yoga",
  slug: "therapeutic-yoga",
  title: "Therapeutic Yoga in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Guided Therapeutic Yoga practices adapted to individual needs, abilities and goals at Sutra Health.",
  heroDescription:
    "Guided Yoga practices adapted to your health, abilities and goals, with attention to movement, breathing and awareness.",
  trust: ["Guided practice", "Individualised approach", "Faridabad, Delhi NCR & online"],
  introEyebrow: "Therapeutic Yoga",
  introTitle: "Yoga practice shaped around the individual.",
  introParagraphs: [
    "Therapeutic Yoga uses selected Yoga-based practices with attention to your health, physical abilities, experience and goals.",
    "Practices are adapted to the person rather than following one fixed sequence. Therapeutic Yoga can complement appropriate medical and lifestyle care.",
  ],
  focusEyebrow: "What We Focus On",
  focusTitle: "Guided practice with purpose.",
  focusIntro:
    "The practices selected depend on your needs, abilities and circumstances.",
  focusAreas: [
    {
      number: "01",
      title: "Movement",
      description: "Explore suitable Yoga-based movements according to your physical abilities and needs.",
    },
    {
      number: "02",
      title: "Breathing",
      description: "Learn appropriate breathing practices as part of guided practice.",
    },
    {
      number: "03",
      title: "Awareness",
      description: "Develop awareness of movement, breathing and everyday patterns.",
    },
    {
      number: "04",
      title: "Wellbeing",
      description: "Connect regular practice with personal health and wellbeing goals.",
    },
  ],
  processTitle: "What a session can involve",
  processIntro:
    "Practice is selected and adapted around your health, experience and goals.",
  process: [
    {
      number: "01",
      title: "Discuss your needs",
      description: "Share your health context, movement experience and what you want from practice.",
    },
    {
      number: "02",
      title: "Select practices",
      description: "Choose suitable movement, breathing or awareness practices.",
    },
    {
      number: "03",
      title: "Practise with guidance",
      description: "Learn and practise selected techniques in a guided setting.",
    },
    {
      number: "04",
      title: "Review and adapt",
      description: "Adjust the practice as your needs, abilities or goals change.",
    },
  ],
  contextEyebrow: "Complementary Care",
  contextTitle: "Part of a wider approach to health.",
  contextParagraphs: [
    "Where appropriate, Therapeutic Yoga can be considered alongside physician care, Lifestyle Medicine and Nutrition.",
    "It does not replace medical diagnosis or prescribed treatment. Discuss relevant health concerns with a qualified healthcare professional before beginning practice.",
  ],
  related: [
    {
      title: "Physician Consultation",
      description: "Discuss health concerns and medical history with a physician.",
      href: "/services/physician-consultation",
    },
    {
      title: "Lifestyle Medicine",
      description: "Explore movement alongside other everyday health factors.",
      href: "/services/lifestyle",
    },
    {
      title: "Behaviour, Stress & Mind",
      description: "Explore practical support for stress and everyday habits.",
      href: "/services/behaviour-stress-mind",
    },
  ],
  faq: [
    {
      question: "What is Therapeutic Yoga?",
      answer:
        "It uses selected Yoga-based practices adapted to an individual's health, abilities and circumstances as part of a broader approach to wellbeing.",
    },
    {
      question: "How is it different from a regular Yoga class?",
      answer:
        "Therapeutic Yoga places greater emphasis on individual needs and adapting practices rather than following the same routine for everyone.",
    },
    {
      question: "Do I need previous Yoga experience?",
      answer:
        "Previous experience is not necessarily required. Practices can be considered according to your experience and abilities.",
    },
    {
      question: "Can it be used alongside medical care?",
      answer:
        "It may complement appropriate healthcare, but should not replace medical diagnosis or treatment.",
    },
  ],
  finalTitle: "Begin with a guided conversation.",
  finalDescription:
    "Discuss your health, movement and what you would like your practice to support.",
};

export const metadata: Metadata = createServiceMetadata(therapeuticYoga);

export default function TherapeuticYogaPage() {
  return <ServicePageTemplate config={therapeuticYoga} />;
}
