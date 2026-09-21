import type { ServicePageConfig } from "./ServicePageTemplate";

export const physicianConsultation: ServicePageConfig = {
  name: "Physician Consultation",
  slug: "physician-consultation",
  title: "Physician Consultation in Faridabad | Sutra Health",
  description:
    "Meet with a physician in Faridabad to discuss your health concerns, medical history and next steps through a doctor-led, whole-person approach to care.",
  heroDescription:
    "A doctor-led conversation about what is happening with your health, what may be contributing to it and what to consider next.",
  trust: ["Doctor-led", "Whole-person care", "Faridabad & online"],
  introEyebrow: "Start With What Matters",
  introTitle: "Healthcare begins with understanding the person, not just the problem.",
  introParagraphs: [
    "A consultation gives you space to explain what brings you in, discuss your health history and look at the wider context around your concerns.",
    "The aim is to create a clearer picture before deciding what the next step should be.",
    "Where relevant, your medical care can be considered alongside nutrition, movement, sleep, stress and other everyday factors that influence health.",
  ],
  focusEyebrow: "The Consultation",
  focusTitle: "A conversation, not a checklist.",
  focusIntro:
    "The discussion is guided by your concerns and the information needed to understand them properly.",
  focusAreas: [
    { number: "01", title: "Tell us what brings you here", description: "Start with your symptoms, concerns, questions or changes in health that you want to understand." },
    { number: "02", title: "Understand the bigger picture", description: "Consider your medical history and relevant lifestyle factors in the context of your current health." },
    { number: "03", title: "Discuss what comes next", description: "Talk through appropriate next steps, which may include further evaluation, treatment or lifestyle support." },
    { number: "04", title: "Review when needed", description: "Follow-up can help assess how things are progressing and whether the approach needs to change." },
  ],
  processTitle: "Understand → Personalise → Practise → Review",
  processIntro:
    "The consultation is the starting point for a more connected approach to care.",
  process: [
    { number: "01", title: "Understand", description: "Clarify your concerns, history and current health picture." },
    { number: "02", title: "Personalise", description: "Consider what is relevant to you rather than applying a generic plan." },
    { number: "03", title: "Practise", description: "Put agreed recommendations or next steps into everyday life." },
    { number: "04", title: "Review", description: "Return to the conversation when your health or needs require reassessment." },
  ],
  contextEyebrow: "Clinical Team",
  contextTitle: "Medical care with the wider picture in view.",
  contextParagraphs: [
    "Sutra Health's clinical approach is led by Dr. Rakesh Sarwal, MBBS, MPH, DrPH, with an emphasis on public health and whole-person care.",
    "The consultation can also connect with Sutra Health's wider services where appropriate, including Lifestyle Medicine, Nutrition and Therapeutic Yoga.",
  ],
  related: [
    { title: "Lifestyle Medicine", description: "Explore nutrition, movement, sleep, stress and everyday health behaviours.", href: "/what-we-do/lifestyle" },
    { title: "Nutrition", description: "Discuss food and eating patterns in the context of your health and daily life.", href: "/what-we-do/nutrition" },
    { title: "Therapeutic Yoga", description: "Explore guided Yoga practices connected to movement and wellbeing.", href: "/what-we-do/therapeutic-yoga" },
  ],
  faq: [
    { question: "What happens during a physician consultation?", answer: "You can discuss what brings you to the consultation, your relevant medical history and the questions or concerns you want to address. The conversation can then move towards appropriate next steps." },
    { question: "Is the consultation only for a specific condition?", answer: "No. A consultation can begin with a general health concern, a symptom, an existing condition or a need for clearer guidance about your health." },
    { question: "Can lifestyle factors be discussed during the consultation?", answer: "Yes. Where relevant, factors such as nutrition, physical activity, sleep and stress can form part of the wider health discussion." },
    { question: "Can I continue seeing my existing doctor?", answer: "A Sutra Health consultation does not automatically replace your existing healthcare team. The appropriate approach depends on your individual circumstances and care needs." },
    { question: "Is online consultation available?", answer: "Online access may be available depending on the service and your needs. Booking information can provide the current options." },
  ],
  finalTitle: "Start with a conversation about your health.",
  finalDescription: "Bring your questions, concerns and health history. The first step is understanding what matters to you.",
  serviceType: "MedicalConsultation",
  medicalAbout: "Physician Consultation",
};

export const lifestyle: ServicePageConfig = {
  name: "Lifestyle Medicine",
  slug: "lifestyle",
  title: "Lifestyle Medicine in Faridabad | Sutra Health",
  description:
    "Lifestyle Medicine at Sutra Health connects nutrition, movement, sleep, stress and everyday habits with personalised healthcare.",
  heroDescription:
    "A practical, evidence-informed approach to the everyday factors that shape your health — including nutrition, movement, sleep, stress and behaviour.",
  trust: ["Evidence-informed", "Whole-person care", "Faridabad & online"],
  introEyebrow: "A Practical Approach",
  introTitle: "Your everyday life is part of your health.",
  introParagraphs: [
    "Lifestyle Medicine looks at the behaviours and conditions around you that can influence health over time.",
    "Rather than treating lifestyle as a separate add-on, the approach connects nutrition, movement, sleep, stress and behaviour with your broader health needs.",
    "The focus is on practical changes that can fit your circumstances and be reviewed over time.",
  ],
  focusEyebrow: "What We Look At",
  focusTitle: "The factors that shape health every day.",
  focusIntro:
    "The balance between these areas is different for every person. The starting point depends on your health and priorities.",
  focusAreas: [
    { number: "01", title: "Nutrition", description: "Understand eating patterns and identify realistic changes that fit your health and routine." },
    { number: "02", title: "Movement", description: "Consider physical activity and movement in a way that is appropriate for your abilities and circumstances." },
    { number: "03", title: "Sleep & stress", description: "Explore everyday patterns that may be affecting recovery, energy, concentration and wellbeing." },
    { number: "04", title: "Behaviour", description: "Understand habits and routines that influence how you care for yourself over time." },
  ],
  processTitle: "Understand → Personalise → Practise → Review",
  processIntro:
    "The aim is to turn broad health advice into a practical approach that can work in real life.",
  process: [
    { number: "01", title: "Understand", description: "Look at your health, routines, habits and the factors that may be relevant." },
    { number: "02", title: "Personalise", description: "Prioritise changes according to your needs, preferences and circumstances." },
    { number: "03", title: "Practise", description: "Introduce manageable changes and build them into everyday life." },
    { number: "04", title: "Review", description: "See what is working and adapt the approach as your needs change." },
  ],
  contextEyebrow: "Whole-Person Care",
  contextTitle: "Lifestyle is part of healthcare, not separate from it.",
  contextParagraphs: [
    "Lifestyle factors can interact with medical conditions, symptoms, treatment and overall wellbeing. Considering them together can create a clearer picture of what support may be useful.",
    "At Sutra Health, Lifestyle Medicine can connect with physician care, Nutrition, Therapeutic Yoga and Behaviour, Stress & Mind support where appropriate.",
  ],
  related: [
    { title: "Physician Consultation", description: "Begin with a doctor-led conversation about your health and medical history.", href: "/what-we-do/physician-consultation" },
    { title: "Nutrition", description: "Explore food and eating patterns as part of your wider health approach.", href: "/what-we-do/nutrition" },
    { title: "Behaviour, Stress & Mind", description: "Understand habits, stress and behavioural patterns that influence everyday health.", href: "/what-we-do/behaviour-stress-mind" },
  ],
  faq: [
    { question: "What is Lifestyle Medicine?", answer: "Lifestyle Medicine is an approach that considers everyday factors such as nutrition, physical activity, sleep, stress and behaviour alongside appropriate medical care." },
    { question: "Is Lifestyle Medicine only for people with a health condition?", answer: "No. It can also be relevant to people who want to improve everyday health, build healthier routines or better understand factors that may affect their wellbeing." },
    { question: "Will I have to change everything at once?", answer: "No. A personalised approach can focus on practical priorities rather than trying to change every part of your lifestyle at the same time." },
    { question: "Can Lifestyle Medicine work with medical treatment?", answer: "Yes. Lifestyle support can be considered alongside appropriate medical care. It should not be used as a replacement for necessary diagnosis or treatment." },
    { question: "Is Lifestyle Medicine available in Faridabad?", answer: "Sutra Health is based in Faridabad. Current in-person and online options depend on the service and your needs." },
  ],
  finalTitle: "Make your everyday health easier to understand.",
  finalDescription: "Start with the areas of daily life that matter most to your health and explore practical next steps.",
};

export const nutrition: ServicePageConfig = {
  name: "Nutrition",
  shortName: "Nutrition",
  slug: "nutrition",
  title: "Nutrition Support in Faridabad | Sutra Health",
  description:
    "Nutrition support at Sutra Health connects food, health and everyday routines through practical, personalised guidance for sustainable change.",
  heroDescription:
    "Practical, personalised nutrition guidance that connects what you eat with your health, routines and everyday life.",
  trust: ["Personalised guidance", "Whole-person care", "Faridabad & online"],
  introEyebrow: "A Practical View of Nutrition",
  introTitle: "Food is part of everyday healthcare.",
  introParagraphs: [
    "Nutrition is not only about individual foods. How we eat is shaped by routines, preferences, culture, work, family life and many other parts of everyday living.",
    "A useful nutrition conversation starts by understanding that context. From there, the focus can move towards practical changes that are appropriate for your health and realistic for your life.",
    "At Sutra Health, nutrition is considered as part of a broader approach to whole-person healthcare.",
  ],
  focusEyebrow: "What We Focus On",
  focusTitle: "Nutrition that fits the bigger picture.",
  focusIntro:
    "The focus depends on your individual needs. There is no single nutrition plan that works for everyone.",
  focusAreas: [
    { number: "01", title: "Everyday eating", description: "Understand your existing food patterns and identify changes that feel practical rather than restrictive." },
    { number: "02", title: "Health & nutrition", description: "Consider nutrition in the context of your broader health concerns and individual needs." },
    { number: "03", title: "Food choices", description: "Build a clearer understanding of food choices, portions, meals and routines that work for your circumstances." },
    { number: "04", title: "Sustainable habits", description: "Focus on changes that can become part of everyday life rather than short-term dietary rules." },
  ],
  processTitle: "Understand → Personalise → Practise → Review",
  processIntro:
    "The aim is not to create another set of rules. It is to understand your needs and build an approach that can work in everyday life.",
  process: [
    { number: "01", title: "Understand", description: "Look at your current eating patterns, routines, preferences and health concerns." },
    { number: "02", title: "Personalise", description: "Connect nutrition guidance with your individual health needs and circumstances." },
    { number: "03", title: "Practise", description: "Turn recommendations into realistic food choices and habits." },
    { number: "04", title: "Review", description: "Reflect on what is working and where your approach may need to change." },
  ],
  contextEyebrow: "Beyond the Diet",
  contextTitle: "The best nutrition advice has to work in real life.",
  contextParagraphs: [
    "Eating patterns do not exist separately from the rest of life. Sleep, activity, stress, work schedules, family routines and personal preferences can all influence how people eat.",
    "That is why nutrition support at Sutra Health considers the wider context rather than treating food choices in isolation.",
  ],
  related: [
    { title: "Physician Consultation", description: "Begin with a doctor-led conversation about your health concerns and medical history.", href: "/what-we-do/physician-consultation" },
    { title: "Lifestyle Medicine", description: "Explore nutrition alongside movement, sleep, stress and other lifestyle factors.", href: "/what-we-do/lifestyle" },
    { title: "Therapeutic Yoga", description: "Explore guided Yoga as part of a broader approach to movement and wellbeing.", href: "/what-we-do/therapeutic-yoga" },
  ],
  faq: [
    { question: "What does nutrition support at Sutra Health involve?", answer: "Nutrition support focuses on understanding your current eating patterns, health needs, routines and goals, and identifying practical changes that can fit into everyday life." },
    { question: "Is nutrition support only for weight management?", answer: "No. Nutrition can be relevant to many aspects of health. The focus of a consultation depends on your individual concerns, health needs and goals." },
    { question: "Will I be given a fixed diet plan?", answer: "Nutrition guidance is intended to be personalised. Recommendations can take into account your health, preferences, routines and circumstances rather than relying on a single approach for everyone." },
    { question: "Can nutrition support work alongside medical care?", answer: "Yes. Nutrition support can form part of a broader healthcare approach and, where relevant, nutritional considerations can be discussed alongside medical care and other lifestyle factors." },
    { question: "Can I discuss my existing eating habits during a consultation?", answer: "Yes. Understanding what you currently eat, how you structure meals and what challenges you experience can help create a more useful and realistic nutrition conversation." },
  ],
  finalTitle: "Start a more useful conversation about food and health.",
  finalDescription: "Begin with where you are now and explore what practical nutrition changes may make sense for you.",
};

export const therapeuticYoga: ServicePageConfig = {
  name: "Therapeutic Yoga",
  slug: "therapeutic-yoga",
  title: "Therapeutic Yoga in Faridabad | Sutra Health",
  description:
    "Therapeutic Yoga at Sutra Health uses guided Yoga practices adapted to individual needs as part of a broader approach to movement and wellbeing.",
  heroDescription:
    "Guided Yoga practices adapted to the individual, bringing movement, breathing and awareness into a broader approach to health and wellbeing.",
  trust: ["Guided practice", "Individualised approach", "Faridabad & online"],
  introEyebrow: "A Different Way to Practise",
  introTitle: "Yoga can be part of healthcare without becoming a separate world.",
  introParagraphs: [
    "Therapeutic Yoga uses selected Yoga-based practices with attention to the individual's health, physical abilities, experience and goals.",
    "The focus is not simply on performing a set sequence. It is on understanding which practices may be appropriate and how they can be integrated into a person's wider approach to health.",
    "At Sutra Health, Therapeutic Yoga sits alongside medical and lifestyle support rather than replacing appropriate healthcare.",
  ],
  focusEyebrow: "What We Focus On",
  focusTitle: "Practice with purpose.",
  focusIntro:
    "Different practices can serve different purposes. What is appropriate depends on the individual and their circumstances.",
  focusAreas: [
    { number: "01", title: "Movement", description: "Explore appropriate Yoga-based movement and practices according to your physical abilities and needs." },
    { number: "02", title: "Breath", description: "Use appropriate breathing practices as part of a considered approach to physical and mental wellbeing." },
    { number: "03", title: "Awareness", description: "Develop greater awareness of movement, breathing and everyday patterns through guided practice." },
    { number: "04", title: "Wellbeing", description: "Connect regular practice with broader goals around health, stress management and everyday wellbeing." },
  ],
  processTitle: "Understand → Adapt → Practise → Review",
  processIntro:
    "The approach begins with the individual and builds towards a practice that can be understood, adapted and maintained.",
  process: [
    { number: "01", title: "Understand", description: "Begin by understanding your health, movement experience, concerns and what you want from the practice." },
    { number: "02", title: "Adapt", description: "Choose practices that are appropriate for your abilities, circumstances and individual needs." },
    { number: "03", title: "Practise", description: "Build a regular practice with guidance that helps you understand how and why the practices are being used." },
    { number: "04", title: "Review", description: "Reflect on your experience and adjust the practice as your needs, abilities or goals change." },
  ],
  contextEyebrow: "Part of a Wider Approach",
  contextTitle: "Therapeutic Yoga can sit alongside medical and lifestyle care.",
  contextParagraphs: [
    "Health concerns rarely exist in isolation. Where appropriate, Therapeutic Yoga can be considered alongside physician care, Lifestyle Medicine, Nutrition and other forms of support.",
    "The purpose is to create a more connected approach to health rather than treating each part separately.",
  ],
  related: [
    { title: "Physician Consultation", description: "Begin with a doctor-led conversation about your health concerns and medical history.", href: "/what-we-do/physician-consultation" },
    { title: "Lifestyle Medicine", description: "Explore movement alongside nutrition, sleep, stress and other lifestyle factors.", href: "/what-we-do/lifestyle" },
    { title: "Behaviour, Stress & Mind", description: "Explore practical support for stress, behaviour and the mind.", href: "/what-we-do/behaviour-stress-mind" },
  ],
  faq: [
    { question: "What is Therapeutic Yoga?", answer: "Therapeutic Yoga uses appropriate Yoga-based practices as part of a broader approach to health and wellbeing. The practice can be adapted to an individual's needs, abilities and circumstances." },
    { question: "How is Therapeutic Yoga different from a regular Yoga class?", answer: "Therapeutic Yoga places greater emphasis on the individual's health needs, physical abilities and goals. Practices can be selected and adapted rather than following a single routine for everyone." },
    { question: "Who can benefit from Therapeutic Yoga?", answer: "It may be useful for people looking to support movement, physical wellbeing, stress management or other health goals. Suitability depends on the individual's circumstances and health needs." },
    { question: "Can Therapeutic Yoga be used alongside medical care?", answer: "Yes. Therapeutic Yoga may form part of a broader healthcare approach. It should not be considered a replacement for appropriate medical diagnosis or treatment." },
    { question: "Do I need previous Yoga experience?", answer: "Previous Yoga experience is not necessarily required. Practices can be adapted according to your experience, abilities and individual needs." },
  ],
  finalTitle: "Find a practice that fits your health and your life.",
  finalDescription: "Start with a conversation about your health, movement and what you would like your practice to support.",
};

export const behaviourStressMind: ServicePageConfig = {
  name: "Behaviour, Stress & Mind",
  slug: "behaviour-stress-mind",
  title: "Behaviour, Stress & Mind in Faridabad | Sutra Health",
  description:
    "Support for stress, behaviour and the mind at Sutra Health through practical approaches connected to everyday health and wellbeing.",
  heroDescription:
    "Practical support for understanding stress, behaviour and the mind as part of everyday health and wellbeing.",
  trust: ["Practical support", "Whole-person care", "Faridabad & online"],
  introEyebrow: "Understanding the Bigger Picture",
  introTitle: "How we think and behave can shape everyday health.",
  introParagraphs: [
    "Stress, habits, emotions and everyday routines are closely connected. They can influence how we sleep, eat, move, work and respond to the demands of daily life.",
    "Understanding these patterns can be an important part of understanding health as a whole. The aim is not to reduce every health concern to stress or behaviour, but to consider these factors where they are relevant.",
    "At Sutra Health, behaviour and stress support sits within a wider approach that can include medical care, Lifestyle Medicine, Nutrition and Therapeutic Yoga.",
  ],
  focusEyebrow: "What We Focus On",
  focusTitle: "Understand the patterns behind everyday life.",
  focusIntro:
    "Different people experience stress and behavioural challenges in different ways. The focus depends on what is relevant to you.",
  focusAreas: [
    { number: "01", title: "Stress", description: "Understand the sources and patterns of stress that may be affecting your everyday health and routines." },
    { number: "02", title: "Behaviour", description: "Look at habits and behavioural patterns that influence how you eat, move, sleep and care for yourself." },
    { number: "03", title: "Mind", description: "Develop greater awareness of thoughts, emotions and responses that may influence everyday wellbeing." },
    { number: "04", title: "Daily life", description: "Turn understanding into practical changes that fit your routines, responsibilities and circumstances." },
  ],
  processTitle: "Understand → Identify → Practise → Review",
  processIntro:
    "Change becomes more useful when it begins with understanding rather than simply trying harder.",
  process: [
    { number: "01", title: "Understand", description: "Start with what is happening in your life, your routines, your concerns and the patterns you want to understand." },
    { number: "02", title: "Identify", description: "Explore the habits, stressors and behavioural patterns that may be relevant to your health and wellbeing." },
    { number: "03", title: "Practise", description: "Work towards practical changes that can be introduced gradually and used in everyday situations." },
    { number: "04", title: "Review", description: "Reflect on what is helping, what remains difficult and where your approach may need to adapt." },
  ],
  contextEyebrow: "Part of a Wider Approach",
  contextTitle: "Behaviour, stress and mind do not exist separately from physical health.",
  contextParagraphs: [
    "Everyday health is shaped by many connected factors. Where relevant, behaviour and stress can be considered alongside medical care, Nutrition, movement and other forms of support.",
    "This wider perspective helps keep the focus on the person rather than treating one part of their health in isolation.",
  ],
  related: [
    { title: "Physician Consultation", description: "Begin with a doctor-led conversation about your health concerns and medical history.", href: "/what-we-do/physician-consultation" },
    { title: "Lifestyle Medicine", description: "Explore stress and behaviour alongside nutrition, movement, sleep and other lifestyle factors.", href: "/what-we-do/lifestyle" },
    { title: "Therapeutic Yoga", description: "Explore guided Yoga practices connected to movement, awareness and wellbeing.", href: "/what-we-do/therapeutic-yoga" },
  ],
  faq: [
    { question: "What does Behaviour, Stress & Mind support involve?", answer: "It focuses on understanding stress, habits, behaviour and mental wellbeing in the context of everyday life, with practical approaches that can support healthier routines." },
    { question: "Is this service only for people experiencing high stress?", answer: "No. It may also be useful for people who want to understand their habits, improve everyday routines, develop healthier responses to stress or support their overall wellbeing." },
    { question: "How can stress affect everyday health?", answer: "Stress can influence sleep, activity, eating patterns, concentration, mood and other everyday behaviours. Understanding these connections can help identify practical areas for support." },
    { question: "Can behaviour support be combined with medical care?", answer: "Yes. Behaviour and stress support can form part of a broader healthcare approach and may be considered alongside appropriate medical and lifestyle care." },
    { question: "Will I be given a fixed routine to follow?", answer: "The approach is intended to be practical and individualised. The focus is on understanding your circumstances and identifying changes that can realistically fit into your life." },
  ],
  finalTitle: "Start with a conversation about what is affecting your health.",
  finalDescription: "Explore the patterns that matter to you and identify practical next steps.",
};
