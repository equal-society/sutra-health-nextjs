import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

const behaviourStressMind: ServicePageConfig = {
  heroImage: "/images/service-hero.webp",
  name: "When changing your habits feels harder than knowing what to change.",
  slug: "behaviour-stress-mind",
  title: "Stress & Behaviour Support | Sutra Health Faridabad",
  description:
    "Explore practical support for stress, behaviour change, mindset and everyday habits as part of a broader lifestyle-focused health approach.",
  heroDescription:
    "Behaviour change is rarely just about knowing what to do. Explore practical support for stress, mindset, routines and the small decisions that shape everyday health.",
  trust: ["Practical, individual-focused support", "Faridabad & Delhi NCR"],
  introEyebrow: "The Service",
  introTitle: "Make sense of recurring stress and behaviour patterns.",
  introParagraphs: [
    "Stressful situations can shape responses, decisions and everyday routines. This service gives you a place to describe a pattern and consider what, if anything, you would like to change.",
    "The discussion centres on the situation you bring rather than a fixed programme. Confirm the practitioner, session format and methods currently available before booking.",
  ],
  focusEyebrow: "Areas for Discussion",
  focusTitle: "Start with the situation, not a prescribed programme.",
  focusIntro:
    "These are possible topics for discussion, not a fixed programme or a promise of a particular result.",
  focusAreas: [
    {
      number: "01",
      title: "Stressful situations",
      description:
        "Talk through situations that feel demanding and how you tend to respond to them.",
    },
    {
      number: "02",
      title: "Recurring reactions",
      description:
        "Notice patterns in thoughts, choices or responses that you would like to understand better.",
    },
    {
      number: "03",
      title: "Barriers to change",
      description:
        "Explore what makes a chosen change difficult to begin or maintain in your current circumstances.",
    },
    {
      number: "04",
      title: "A manageable next step",
      description:
        "Identify a realistic question or action to consider, where appropriate to the service and your needs.",
    },
  ],
  processTitle: "A conversation focused on one practical question",
  processIntro:
    "The actual appointment format, practitioner role and techniques available should be confirmed with the Sutra Health team before booking.",
  process: [
    {
      number: "01",
      title: "Describe what is happening",
      description:
        "Share the situation, response or change you would like to discuss.",
    },
    {
      number: "02",
      title: "Consider the context",
      description:
        "Explore relevant circumstances and recurring patterns without assuming that a health concern is caused by behaviour alone.",
    },
    {
      number: "03",
      title: "Clarify a practical direction",
      description:
        "Consider a manageable next step or whether another form of support may be more appropriate.",
    },
  ],
  contextEyebrow: "Scope and Care",
  contextTitle: "Know when another form of care is needed.",
  contextParagraphs: [
    "This service focuses on practical discussion around stress, behaviour and everyday patterns. It is not a substitute for diagnosis or treatment from a qualified mental-health professional.",
    "This support should not replace medical assessment or prescribed treatment. If distress is severe or persistent, or you feel unsafe or may harm yourself or someone else, seek timely help from a qualified mental-health professional or local emergency services.",
  ],
  related: [
    {
      title: "Physician Consultation",
      description:
        "For symptoms, medical review or questions about current treatment.",
      href: "/services/physician-consultation",
    },
    {
      title: "Lifestyle Medicine",
      description:
        "For a broader discussion of health habits and lifestyle-related priorities.",
      href: "/services/lifestyle",
    },
    {
      title: "Therapeutic Yoga",
      description:
        "For information about yoga-based practice and individual suitability.",
      href: "/services/therapeutic-yoga",
    },
  ],
  ctaLabel: "Explore Support",
  faq: [
    {
      question: "What can I discuss in this service?",
      answer:
        "You may wish to discuss a stressful situation, a recurring response or a behaviour-related barrier. Confirm the service scope and session format with the Sutra Health team before booking.",
    },
    {
      question: "Is this psychotherapy or psychiatric care?",
      answer:
        "This service is not presented as psychotherapy or psychiatric treatment. For mental-health diagnosis or treatment, contact a qualified mental-health professional.",
    },
    {
      question: "Will I receive a fixed technique or programme?",
      answer:
        "A fixed method or programme is not part of this general service description. Ask the team which approaches, if any, are currently offered.",
    },
    {
      question: "Can this support be considered alongside medical care?",
      answer:
        "Do not stop or change prescribed treatment on the basis of wellbeing support. Discuss medical concerns with your treating clinician and ask whether this service is suitable for your circumstances.",
    },
    {
      question: "What should I do if I need urgent help?",
      answer:
        "This service is not described as crisis care. If you or someone else is in immediate danger, contact local emergency services or seek urgent help from a qualified professional.",
    },
  ],
  finalTitle: "Start with the situation you want to understand.",
  finalDescription:
    "Ask about the practitioner, session format, suitability and current appointment options before you choose a time.",
};


export const metadata = createServiceMetadata(behaviourStressMind);

export default function BehaviourStressMindPage() {
  return <ServicePageTemplate config={behaviourStressMind} />;
}
