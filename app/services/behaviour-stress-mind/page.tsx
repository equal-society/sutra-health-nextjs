import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

const behaviourStressMind: ServicePageConfig = {
  heroImage: "/images/what-we-do/mindl.png",
  name: "Behaviour & Stress Support",
  slug: "behaviour-stress-mind",
  title: "Behaviour & Stress Support in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Learn about Behaviour & Stress Support at Sutra Health, with a focus on understanding personal responses, recurring patterns and practical next steps.",
  heroDescription:
    "A space to discuss stress-related challenges, recurring responses and changes you would like to approach differently, in the context of your circumstances.",
  trust: ["Practical, individual-focused support", "Faridabad & Delhi NCR"],
  introEyebrow: "The Service",
  introTitle: "Understand the patterns behind difficult moments.",
  introParagraphs: [
    "Stress can affect how people respond to situations, make decisions and manage everyday responsibilities. Sometimes, a useful starting point is to look more closely at what is happening and what feels difficult to change.",
    "This service is presented as a discussion of personal responses, recurring situations and behaviour-related barriers. The focus should be agreed with you and kept realistic; the available session format and methods must be confirmed with the Sutra Health team.",
  ],
  focusEyebrow: "Areas for Discussion",
  focusTitle: "Bring the situation you want to understand.",
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
  processTitle: "A conversation shaped around your concern",
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
  contextTitle: "Choose support that fits the concern.",
  contextParagraphs: [
    "The supplied project information does not confirm psychotherapy, psychiatric assessment, crisis intervention or a named evidence-based psychological treatment as part of this service. Do not present these as available unless the client verifies them.",
    "This service should not replace medical assessment or prescribed treatment. If distress is severe or persistent, or you feel unsafe or may harm yourself or someone else, seek timely help from a qualified mental-health professional or local emergency services. Do not wait for a wellness appointment in an emergency.",
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
  faq: [
    {
      question: "What can I discuss in this service?",
      answer:
        "You may wish to discuss a stressful situation, a recurring response or a behaviour-related barrier. Confirm the service scope and session format with the Sutra Health team before booking.",
    },
    {
      question: "Is this psychotherapy or psychiatric care?",
      answer:
        "The available project information does not establish that psychotherapy, psychiatric assessment or treatment is provided through this service. For mental-health diagnosis or treatment, contact a qualified mental-health professional.",
    },
    {
      question: "Will I receive a fixed technique or programme?",
      answer:
        "A fixed method or programme is not confirmed in the supplied service information. Ask the team which approaches, if any, are currently offered.",
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
  finalTitle: "Start with what you would like to discuss.",
  finalDescription:
    "Before booking, ask the Sutra Health team about the practitioner, session format, suitability and current appointment options.",
};


export const metadata = createServiceMetadata(behaviourStressMind);

export default function BehaviourStressMindPage() {
  return <ServicePageTemplate config={behaviourStressMind} />;
}
