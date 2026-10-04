
import type { Metadata } from "next";
import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

const therapeuticYoga: ServicePageConfig = {
  name: "Therapeutic Yoga",
  slug: "therapeutic-yoga",

  title: "Therapeutic Yoga in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Explore guided Therapeutic Yoga in Faridabad, with practices selected around your movement abilities, experience and individual needs.",

  heroDescription:
    "A guided approach to Yoga that considers your physical abilities, health context and experience before selecting suitable practices.",

  trust: [
    "Guided practice",
    "Adapted to individual needs",
    "Faridabad, Delhi NCR & online",
  ],

  introEyebrow: "A Considered Practice",
  introTitle: "Start with what your body can do.",
  introParagraphs: [
    "Therapeutic Yoga uses selected Yoga-based practices according to a person's health, movement abilities and experience. Rather than asking everyone to follow the same sequence, the approach considers which practices may be appropriate for the individual.",
    "It can be considered alongside suitable medical care and other health services, according to individual circumstances.",
  ],

  focusEyebrow: "Practice Areas",
  focusTitle: "Four parts of a guided session.",
  focusIntro:
    "The emphasis may differ between individuals. These are areas that can be considered when selecting a practice.",

  focusAreas: [
    {
      number: "01",
      title: "Movement",
      description:
        "Explore suitable Yoga-based movements in accordance with your mobility and physical abilities.",
    },
    {
      number: "02",
      title: "Breathing",
      description:
        "Learn selected breathing techniques with guidance on how to practise them appropriately.",
    },
    {
      number: "03",
      title: "Body awareness",
      description:
        "Pay attention to posture, movement and breathing during practice.",
    },
    {
      number: "04",
      title: "Personal goals",
      description:
        "Choose practices in relation to the areas of wellbeing you want to work on.",
    },
  ],

  processTitle: "How your practice takes shape",
  processIntro:
    "The session begins with your experience and circumstances, not a predetermined routine.",

  process: [
    {
      number: "01",
      title: "Discuss your background",
      description:
        "Share relevant health information, previous Yoga experience and any movement limitations.",
    },
    {
      number: "02",
      title: "Choose an appropriate starting point",
      description:
        "Identify suitable movement, breathing or awareness practices for your circumstances.",
    },
    {
      number: "03",
      title: "Learn under guidance",
      description:
        "Understand the selected techniques and how they are intended to be practised.",
    },
    {
      number: "04",
      title: "Revisit the approach",
      description:
        "Review the practice when your abilities, experience or needs change.",
    },
  ],

  contextEyebrow: "Care and Suitability",
  contextTitle: "Know when to seek clinical advice.",
  contextParagraphs: [
    "If you have an existing medical condition, injury, pain or physical limitation, discuss your suitability for practice with a qualified healthcare professional before beginning.",
    "Therapeutic Yoga is a complementary practice. It does not provide a medical diagnosis or replace prescribed treatment.",
  ],

  related: [
    {
      title: "Physician Consultation",
      description:
        "Discuss symptoms, medical history or concerns that may affect your practice.",
      href: "/services/physician-consultation",
    },
    {
      title: "Lifestyle Medicine",
      description:
        "Explore the wider role of movement, sleep, nutrition and other daily health factors.",
      href: "/services/lifestyle",
    },
    {
      title: "Behaviour, Stress & Mind",
      description:
        "Find out about support related to stress and everyday behavioural patterns.",
      href: "/services/behaviour-stress-mind",
    },
  ],

  faq: [
    {
      question: "What should I expect from Therapeutic Yoga?",
      answer:
        "The approach involves selected Yoga-based practices considered in relation to your health, experience and physical abilities.",
    },
    {
      question: "Is it the same as a regular Yoga class?",
      answer:
        "The emphasis is on individual suitability and adapting practices rather than expecting everyone to complete an identical sequence.",
    },
    {
      question: "Can I begin without previous Yoga experience?",
      answer:
        "Previous experience is not necessarily required. The starting point can be considered according to your familiarity with Yoga and physical abilities.",
    },
    {
      question: "Should I consult a physician before starting?",
      answer:
        "If you have a medical condition, injury, pain or movement limitation, seek appropriate clinical advice before beginning. Therapeutic Yoga does not replace medical treatment.",
    },
  ],

  finalTitle: "Find a suitable starting point for your practice.",
  finalDescription:
    "Discuss your experience, physical abilities and questions before deciding how to proceed.",
};

export const metadata: Metadata =
  createServiceMetadata(therapeuticYoga);

export default function TherapeuticYogaPage() {
  return <ServicePageTemplate config={therapeuticYoga} />;
}
