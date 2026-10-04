import type { Metadata } from "next";
import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

const therapeuticYoga: ServicePageConfig = {
  heroImage: "/images/what-we-do/yoga.jpg",
  name: "Therapeutic Yoga",
  slug: "therapeutic-yoga",

  title: "Therapeutic Yoga in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Explore guided Therapeutic Yoga in Faridabad, including traditional asana, breathing practices, preparation and participation considerations.",

  heroDescription:
    "A guided way to approach traditional Yoga practices, with the choice and level of each activity considered in relation to the participant.",

  trust: [
    "Traditional Yoga practices",
    "Guidance on modifications",
    "Faridabad, Delhi NCR & online — confirm current format",
  ],

  introEyebrow: "Traditional Practice, Considered Individually",
  introTitle: "A traditional sequence needs a suitable starting point.",
  introParagraphs: [
    "Life Quality’s earlier Yoga resource presents a 20-part sequence inspired by Swami Sivananda. It includes familiar practices such as Tadasana, Vriksha Asana, Surya Namaskar, Shavasana and Pranayama, alongside more demanding postures. These are examples from the legacy resource, not a prescribed routine for every participant.",
    "In a therapeutic setting, the choice to include, adapt or omit a practice should take account of experience, mobility and relevant health advice. Yoga is complementary to appropriate medical care, not a substitute for it.",
  ],

  focusEyebrow: "Practice Elements",
  focusTitle: "From foundational movement to breath and rest.",
  focusIntro:
    "The former Life Quality sequence offers a traditional reference point. A guided session may draw on selected elements rather than attempt the full sequence.",

  focusAreas: [
    {
      number: "01",
      title: "Foundational asana",
      description:
        "Standing and supported positions, including examples such as Tadasana, can introduce posture, alignment and balance. The range or position may be changed when needed.",
    },
    {
      number: "02",
      title: "Sequenced movement",
      description:
        "Surya Namaskar is described in the legacy resource as a coordinated sequence of twelve positions and breath. It is not suitable for everyone in its standard form and may be omitted or adapted.",
    },
    {
      number: "03",
      title: "Rest and recovery",
      description:
        "Shavasana appears in the earlier material as a closing relaxation posture. A comfortable resting position may be selected according to the participant’s needs.",
    },
    {
      number: "04",
      title: "Pranayama",
      description:
        "The legacy protocol includes traditional breathing practices. Instruction should specify the technique and pace; forceful breathwork or breath retention should not be assumed to be appropriate for all.",
    },
  ],

  processTitle: "Preparing for a guided session",
  processIntro:
    "The older resource emphasizes preparation and warm-up. Use these practical points as prompts, while confirming the current session format with the team.",

  process: [
    {
      number: "01",
      title: "Share relevant health context",
      description:
        "Mention injuries, symptoms, movement restrictions, balance concerns and any clinical advice that may affect participation.",
    },
    {
      number: "02",
      title: "Arrive ready to move comfortably",
      description:
        "Choose comfortable clothing and avoid beginning immediately after a heavy meal. Ask the instructor about any specific preparation guidance for your session.",
    },
    {
      number: "03",
      title: "Begin with a gentle warm-up",
      description:
        "Allow time to settle into the practice. Start with low-demand movements and follow the instructor’s directions rather than attempting advanced poses independently.",
    },
    {
      number: "04",
      title: "Review what was manageable",
      description:
        "Share which activities felt comfortable or difficult so the next practice can be discussed and adjusted where appropriate.",
    },
  ],

  contextEyebrow: "Safety and Suitability",
  contextTitle: "Some traditional postures need particular caution.",
  contextParagraphs: [
    "The legacy sequence includes inversions and advanced positions, including Sarvangasana, Halasana, Shirshasana and Mayurasana. Their presence in an educational sequence does not mean they are suitable for every person or should be attempted without qualified instruction. Seek clinical advice first if you have a medical condition, recent injury, pain, balance difficulty or movement restriction.",
    "Stop an activity if it causes pain, dizziness, breathlessness or other concerning symptoms. Therapeutic Yoga does not diagnose or treat disease and must not replace prescribed care.",
  ],

  related: [
    {
      title: "Physician Consultation",
      description:
        "Discuss a health concern or restriction that could affect participation.",
      href: "/services/physician-consultation",
    },
    {
      title: "Lifestyle Medicine",
      description:
        "Explore the wider health programme beyond a Yoga practice session.",
      href: "/services/lifestyle",
    },
    {
      title: "Behaviour, Stress & Mind",
      description:
        "See the separate service for behavioural and stress-related support.",
      href: "/services/behaviour-stress-mind",
    },
  ],

  faq: [
    {
      question: "Does Therapeutic Yoga follow the full 20-pose sequence?",
      answer:
        "Not necessarily. The earlier Life Quality page documents a Sivananda-inspired 20-part protocol as a traditional resource. A therapeutic session should select practices according to suitability rather than require every participant to complete the entire sequence.",
    },
    {
      question: "Are advanced poses such as headstand or shoulder stand required?",
      answer:
        "No. Shirshasana, Sarvangasana and other demanding postures are not prerequisites. They may be inappropriate for some people; do not attempt them without qualified instruction and suitable clinical guidance where needed.",
    },
    {
      question: "What should I do before practice?",
      answer:
        "Wear comfortable clothing, allow time for a gentle warm-up and avoid starting immediately after a heavy meal. Confirm any additional preparation instructions with the team.",
    },
    {
      question: "Can beginners participate?",
      answer:
        "Previous Yoga experience is not automatically required. Tell the instructor that you are new so the starting level and terminology can be explained clearly.",
    },
    {
      question: "Where and when are sessions held?",
      answer:
        "The earlier Life Quality material describes rooftop morning group practice. Current venue, schedule, group format and online availability should be confirmed with Sutra Health before planning a visit.",
    },
  ],

  finalTitle: "Ask which practice format is currently available.",
  finalDescription:
    "Confirm session timing, location and suitability before booking, particularly if you have a health concern or movement restriction.",
};

export const metadata: Metadata =
  createServiceMetadata(therapeuticYoga);

export default function TherapeuticYogaPage() {
  return <ServicePageTemplate config={therapeuticYoga} />;
}
