import type { ServicePageConfig } from "./ServicePageTemplate";

/* Service content source: page-specific copy only. Shared layout lives in ServicePageTemplate.tsx. */

export const physicianConsultation: ServicePageConfig = {
  heroImage: "/images/mobile.webp",
  name: "Physician Consultation",
  slug: "physician-consultation",
  title: "Physician Consultation in Faridabad & Online | Sutra Health",
  description:
    "Discuss health concerns, medical history, existing treatment and appropriate next steps with Sutra Health's physician in Faridabad or online across India.",
  heroDescription:
    "A physician-led consultation to discuss your concerns, review relevant health information and clarify appropriate next steps.",
  trust: ["Physician-led", "Faridabad & online across India"],
  introEyebrow: "Your Consultation",
  introTitle: "Clear guidance for your next healthcare decision.",
  introParagraphs: [
    "Discuss what brings you in, your relevant medical history, current treatment and questions.",
    "Where appropriate, the physician may review available reports and recommend further investigations or follow-up. Advice is based on your individual situation.",
  ],
  focusEyebrow: "What We Discuss",
  focusTitle: "A focused conversation about your health.",
  focusIntro:
    "The consultation centres on your concern and the information needed to guide care.",
  focusAreas: [
    { number: "01", title: "Your concern", description: "Symptoms, health questions or an existing diagnosis you want to discuss." },
    { number: "02", title: "Medical history and treatment", description: "Relevant history, current medicines, treatment and available reports." },
    { number: "03", title: "Evaluation and next steps", description: "Whether further investigations, treatment discussion or follow-up may be appropriate." },
  ],
  processTitle: "What to expect",
  processIntro:
    "The consultation is guided by your needs; not every person requires the same evaluation or follow-up.",
  process: [
    { number: "01", title: "Discuss", description: "Share your main concern, relevant history and questions with the physician." },
    { number: "02", title: "Review", description: "Discuss available health information and whether any investigations are needed." },
    { number: "03", title: "Plan", description: "Clarify appropriate care, recommendations and follow-up based on your circumstances." },
  ],
  contextEyebrow: "Care and Support",
  contextTitle: "Your existing medical care remains important.",
  contextParagraphs: [
    "Sutra Health's physician-led consultation can consider lifestyle or supportive services when relevant, but these do not replace appropriate medical diagnosis or treatment.",
    "Continue prescribed treatment and follow-up unless your treating clinician advises otherwise. Lifestyle Medicine, Nutrition and Therapeutic Yoga are available as separate services where suitable.",
  ],
  related: [
    { title: "Lifestyle Medicine", description: "Explore the six lifestyle pillars in a dedicated service overview.", href: "/services/lifestyle" },
    { title: "Nutrition", description: "Explore nutrition support as a separate service.", href: "/services/nutrition" },
  ],
  faq: [
    { question: "Can I discuss an existing condition or treatment?", answer: "Yes. Bring relevant medical history, available reports and details of current treatment. Do not stop or change prescribed treatment without discussing it with your treating clinician." },
    { question: "Will I need investigations?", answer: "Further investigations may be suggested when clinically appropriate. The need depends on your concern and the information available." },
    { question: "Are online consultations available?", answer: "The legacy LifeQuality page lists online consultation and in-person care in Faridabad. Confirm current booking availability and appointment arrangements before publishing this claim." },
  ],
  finalTitle: "Discuss your health with a physician.",
  finalDescription: "Bring your questions, relevant history and available reports to help make the consultation useful.",
  serviceType: "MedicalConsultation",
  medicalAbout: "Physician Consultation",
};

export const lifestyle: ServicePageConfig = {
  heroImage: "/images/lifestyle-home.webp",
  name: "Lifestyle Medicine",
  slug: "lifestyle",
  title: "Lifestyle Medicine in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Lifestyle Medicine at Sutra Health connects nutrition, movement, sleep, stress and everyday habits with personalised healthcare.",
 
  heroDescription:
    "A practical, evidence-informed approach to nutrition, movement, sleep, stress and behaviour — the daily habits that shape long-term health.",
  trust: ["Evidence-informed", "Whole-person care", "Faridabad, Delhi NCR & online"],
  introEyebrow: "A Practical Approach",
  introTitle: "Your everyday life is part of your health.",
  introParagraphs: [
    "Lifestyle Medicine looks at the behaviours and conditions around you that can influence health over time.",
    "Rather than treating lifestyle as a separate add-on, the approach connects nutrition, movement, sleep, stress and behaviour with your broader health needs.",
    "The focus is on practical changes that can fit your circumstances and be reviewed over time.",
  ],
  focusEyebrow: "What We Look At",
  /*
    CHANGED: previously "The factors that shape health every day." — near
    duplicate of the heroDescription phrase above. Now says something
    different: what makes the four areas connected, not just a restated
    headline.
  */
  focusTitle: "Four areas that work together, not in isolation.",
  focusIntro:
    "The balance between these areas is different for every person. The starting point depends on your health and priorities.",
  focusAreas: [
    { number: "01", title: "Nutrition", description: "Eating patterns, food choices and routines relevant to your health." },
    { number: "02", title: "Movement", description: "Physical activity and movement considered alongside your abilities and circumstances." },
    { number: "03", title: "Sleep & stress", description: "Recovery, rest and stress patterns that may be relevant to your health." },
    { number: "04", title: "Behaviour", description: "Habits and routines that may make healthy changes easier or harder to sustain." },
  ],
  processTitle: "What Lifestyle Medicine support can involve",
  processIntro:
    "The focus starts with the areas of everyday life that are most relevant to your health and circumstances.",
  process: [
    { number: "01", title: "Review your routine", description: "Look at nutrition, movement, sleep, stress and habits in the context of your everyday life." },
    { number: "02", title: "Choose priorities", description: "Identify practical areas where a change may be useful and realistic for you." },
    { number: "03", title: "Put changes into practice", description: "Build manageable habits into your routine rather than trying to change everything at once." },
    { number: "04", title: "Review what is working", description: "Reflect on progress and adjust the plan as your health, routine or priorities change." },
  ],
  contextEyebrow: "Whole-Person Care",
  contextTitle: "Lifestyle is part of healthcare, not separate from it.",
  contextParagraphs: [
    "Lifestyle factors can interact with medical conditions, symptoms, treatment and overall wellbeing. Considering them together can create a clearer picture of what support may be useful.",
    "At Sutra Health, Lifestyle Medicine can connect with physician care, Nutrition, Therapeutic Yoga and Behaviour, Stress & Mind support where appropriate.",
  ],
  related: [
    { title: "Physician Consultation", description: "Begin with a doctor-led conversation about your health and medical history.", href: "/services/physician-consultation" },
    { title: "Nutrition", description: "Explore food and eating patterns as part of your wider health approach.", href: "/services/nutrition" },
    { title: "Behaviour, Stress & Mind", description: "Understand habits, stress and behavioural patterns that influence everyday health.", href: "/services/behaviour-stress-mind" },
  ],
  faq: [
    { question: "What is Lifestyle Medicine?", answer: "Lifestyle Medicine is an approach that considers everyday factors such as nutrition, physical activity, sleep, stress and behaviour alongside appropriate medical care." },
    { question: "Is Lifestyle Medicine only for people with a health condition?", answer: "No. It can also be relevant to people who want to improve everyday health, build healthier routines or better understand factors that may affect their wellbeing." },
    { question: "Will I have to change everything at once?", answer: "No. A personalised approach can focus on practical priorities rather than trying to change every part of your lifestyle at the same time." },
    { question: "Can Lifestyle Medicine work with medical treatment?", answer: "Yes. Lifestyle support can be considered alongside appropriate medical care. It should not be used as a replacement for necessary diagnosis or treatment." },
    /*
      FIXED: previously "Sutra Health is based in Faridabad. Current
      in-person and online options depend on the service and your needs."
      — same hedge on the same online-availability fact. Now direct.
    */
    { question: "Is Lifestyle Medicine available in Faridabad?", answer: "Yes. Online consultations are available across India, and in-person sessions are available in Faridabad, Delhi NCR." }
  ],
  finalTitle: "Make your everyday health easier to understand.",
  finalDescription: "Start with the areas of daily life that matter most to your health and explore practical next steps.",
};

export const nutrition: ServicePageConfig = {
  heroImage: "/images/diet.webp",
  name: "Nutrition",
  shortName: "Nutrition",
  slug: "nutrition",
  title: "Nutrition Support in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Personalised nutrition support connecting balanced eating, food choices, hydration and daily routines with your health needs and lifestyle.",
  heroDescription:
    "Practical nutrition guidance for balanced meals, everyday food choices and routines that fit your health needs and real life.",
  trust: ["Personalised guidance", "Whole-person care", "Faridabad, Delhi NCR & online"],
  introEyebrow: "A Practical View of Nutrition",
  introTitle: "Food is part of everyday healthcare.",
  introParagraphs: [
    "Nutrition is shaped by more than individual foods. Meal timing, family and work routines, culture, preferences, activity and health needs all influence how people eat.",
    "A useful nutrition conversation starts with your current pattern, then explores realistic ways to build variety, balance and consistency without relying on a one-size-fits-all diet.",
    "At Sutra Health, nutrition guidance can consider familiar foods and eating patterns alongside appropriate medical care. Advice is adapted to individual needs rather than treating general food suggestions as rules for everyone.",
  ],
  focusEyebrow: "What We Focus On",
  focusTitle: "Balanced choices that fit your life.",
  focusIntro:
    "Nutrition needs differ. Guidance can be shaped around your health, food preferences, routine, access to food and advice from your healthcare professional.",
  focusAreas: [
    { number: "01", title: "Balanced everyday meals", description: "Explore a varied pattern that can include vegetables, fruits, pulses, grains and suitable protein sources according to your needs and preferences." },
    { number: "02", title: "Food choices", description: "Understand portions and how to make room for more minimally processed foods while considering highly processed snacks, excess salt and added sugars in context." },
    { number: "03", title: "Meal timing & routine", description: "Review meal frequency and timing in relation to your schedule, appetite, nutritional needs and any relevant medical advice." },
    { number: "04", title: "Hydration & sustainable habits", description: "Consider suitable fluids and practical habits that can be maintained across work, home and daily activities." },
  ],
  processTitle: "What nutrition support can involve",
  processIntro:
    "The discussion is based on your current eating patterns, health needs and the practical realities of your daily life.",
  process: [
    { number: "01", title: "Understand your eating pattern", description: "Review meals, timing, portions, food preferences, fluids and the challenges that affect how you eat." },
    { number: "02", title: "Connect food with your needs", description: "Consider nutrition alongside your health concerns, routine, activity and goals, including any dietary guidance already provided by your clinician." },
    { number: "03", title: "Identify practical adjustments", description: "Explore realistic meal and food choices, such as adding variety or planning suitable options around your day." },
    { number: "04", title: "Review and adapt", description: "Discuss what is manageable and refine the approach as your needs, routine or circumstances change." },
  ],
  contextEyebrow: "Beyond the Diet",
  contextTitle: "Nutrition advice should work in real life.",
  contextParagraphs: [
    "Everyday eating is influenced by sleep, activity, stress, work schedules, family routines, food culture, budget and personal preferences. Hydration needs can also vary with activity, climate and health circumstances.",
    "A varied eating pattern may include seasonal vegetables and fruits, dals and other pulses, grains such as millets, and protein sources suited to individual preferences. No single food, beverage or meal schedule is required for everyone.",
    "General guidance is not a substitute for individual clinical advice. If you have a medical condition, specific dietary restrictions or prescribed nutrition needs, recommendations should be coordinated with a qualified healthcare professional.",
  ],
  related: [
    { title: "Physician Consultation", description: "Begin with a doctor-led conversation about your health concerns and medical history.", href: "/services/physician-consultation" },
    { title: "Lifestyle Medicine", description: "Explore nutrition alongside movement, sleep, stress and other lifestyle factors.", href: "/services/lifestyle" },
    { title: "Therapeutic Yoga", description: "Explore guided Yoga as part of a broader approach to movement and wellbeing.", href: "/services/therapeutic-yoga" },
  ],
  faq: [
    { question: "What does nutrition support at Sutra Health involve?", answer: "It begins with your current meals, timing, portions, preferences and routine. Together, practical changes can be identified and reviewed rather than starting with a generic diet plan." },
    { question: "Is nutrition support only for weight management?", answer: "No. Nutrition can be relevant to many aspects of health. The focus depends on your individual concerns, health needs and goals." },
    { question: "Will I be given a fixed diet plan?", answer: "Guidance is intended to be personalised and may account for your health, preferences, food culture, schedule and circumstances. A fixed plan is not suitable for everyone." },
    { question: "Which foods should I include?", answer: "A varied pattern may include vegetables, fruits, pulses, grains and suitable protein sources. The mix and portions depend on your needs, preferences and any medical advice." },
    { question: "How often should I eat, and how much water should I drink?", answer: "Meal frequency and fluid needs vary with individual routine, activity, climate and health circumstances. Discuss specific requirements with a qualified healthcare professional when needed." },
    { question: "Can nutrition support work alongside medical care?", answer: "Yes. Nutrition guidance can complement appropriate medical care. If you have a diagnosed condition or prescribed diet, recommendations should be coordinated with your treating clinician." },
  ],
  finalTitle: "Start with your everyday food and health.",
  finalDescription: "Discuss your current eating pattern and explore practical nutrition steps that may fit your needs and daily life.",
};

export const therapeuticYoga: ServicePageConfig = {
  heroImage: "/images/what-we-do/yoga.jpg",
  name: "Therapeutic Yoga",
  slug: "therapeutic-yoga",
  title: "Therapeutic Yoga in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Therapeutic Yoga at Sutra Health uses guided Yoga practices adapted to individual needs as part of a broader approach to movement and wellbeing.",
  heroDescription:
    "Guided Yoga practices adapted to the individual, bringing movement, breathing and awareness into a broader approach to health and wellbeing.",
  trust: ["Guided practice", "Individualised approach", "Faridabad, Delhi NCR & online"],
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
  processTitle: "What a Therapeutic Yoga session can involve",
  processIntro:
    "Practices are selected and adapted according to your health, physical abilities, experience and goals.",
  process: [
    { number: "01", title: "Understand your needs", description: "Discuss your health, movement experience, concerns and what you want from the practice." },
    { number: "02", title: "Select appropriate practices", description: "Choose Yoga-based movement, breathing or awareness practices that fit your circumstances." },
    { number: "03", title: "Practise with guidance", description: "Learn and practise the selected movements or techniques in a guided setting." },
    { number: "04", title: "Adapt your practice", description: "Review your experience and adjust the practice as your needs, abilities or goals change." },
  ],
  /*
    CHANGED: previously "Part of a Wider Approach" — same eyebrow used
    verbatim on the Behaviour, Stress & Mind page below. Changed here so
    the two pages don't read as copy-pasted from each other.
  */
  contextEyebrow: "Complementary, Not Standalone",
  contextTitle: "Therapeutic Yoga can sit alongside medical and lifestyle care.",
  contextParagraphs: [
    "Health concerns rarely exist in isolation. Where appropriate, Therapeutic Yoga can be considered alongside physician care, Lifestyle Medicine, Nutrition and other forms of support.",
    "The purpose is to create a more connected approach to health rather than treating each part separately.",
  ],
  related: [
    { title: "Physician Consultation", description: "Begin with a doctor-led conversation about your health concerns and medical history.", href: "/services/physician-consultation" },
    { title: "Lifestyle Medicine", description: "Explore movement alongside nutrition, sleep, stress and other lifestyle factors.", href: "/services/lifestyle" },
    { title: "Behaviour, Stress & Mind", description: "Explore practical support for stress, behaviour and the mind.", href: "/services/behaviour-stress-mind" },
  ],
  faq: [
    { question: "What is Therapeutic Yoga?", answer: "Therapeutic Yoga uses appropriate Yoga-based practices as part of a broader approach to health and wellbeing. The practice can be adapted to an individual's needs, abilities and circumstances." },
    { question: "How is Therapeutic Yoga different from a regular Yoga class?", answer: "Therapeutic Yoga places greater emphasis on the individual's health needs, physical abilities and goals. Practices can be selected and adapted rather than following a single routine for everyone." },
    /*
      SHARPENED: previously "It may be useful for people looking to
      support movement, physical wellbeing, stress management or other
      health goals. Suitability depends on the individual's circumstances
      and health needs." — this could describe any wellness offering.
      Now names actual, specific use cases while keeping the outcome
      appropriately hedged.
    */
    { question: "Who can benefit from Therapeutic Yoga?", answer: "It's often used alongside care for joint pain, high stress, poor sleep, or as movement support during recovery from illness or injury. Dr. Sarwal assesses your specific situation before recommending it — it isn't assigned by default to everyone who books." },
    { question: "Can Therapeutic Yoga be used alongside medical care?", answer: "Yes. Therapeutic Yoga may form part of a broader healthcare approach. It should not be considered a replacement for appropriate medical diagnosis or treatment." },
    { question: "Do I need previous Yoga experience?", answer: "Previous Yoga experience is not necessarily required. Practices can be adapted according to your experience, abilities and individual needs." }
  ],
  finalTitle: "Find a practice that fits your health and your life.",
  finalDescription: "Start with a conversation about your health, movement and what you would like your practice to support.",
};

export const behaviourStressMind: ServicePageConfig = {
  heroImage: "/images/what-we-do/mindl.png",
  name: "Behaviour, Stress & Mind",
  slug: "behaviour-stress-mind",
  title: "Behaviour, Stress & Mind Support in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Support for stress, behaviour and the mind at Sutra Health through practical approaches connected to everyday health and wellbeing.",
  heroDescription:
    "Practical support for understanding stress, behaviour and the mind as part of everyday health and wellbeing.",
  trust: ["Practical support", "Whole-person care", "Faridabad, Delhi NCR & online"],
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
  processTitle: "What Behaviour, Stress & Mind support can involve",
  processIntro:
    "The focus depends on the patterns, stressors and everyday situations that are most relevant to you.",
  process: [
    { number: "01", title: "Understand what is happening", description: "Start with your routines, concerns, stressors and the situations you want to understand better." },
    { number: "02", title: "Identify useful patterns", description: "Explore habits, responses and behavioural patterns that may be relevant to your everyday health." },
    { number: "03", title: "Practise practical changes", description: "Work with manageable changes that can be used in real situations and routines." },
    { number: "04", title: "Review the experience", description: "Reflect on what is helping and what may need to be adapted or supported further." },
  ],
  contextEyebrow: "Part of a Wider Approach",
  contextTitle: "Behaviour, stress and mind do not exist separately from physical health.",
  contextParagraphs: [
    "Everyday health is shaped by many connected factors. Where relevant, behaviour and stress can be considered alongside medical care, Nutrition, movement and other forms of support.",
    "This wider perspective helps keep the focus on the person rather than treating one part of their health in isolation.",
  ],
  related: [
    { title: "Physician Consultation", description: "Begin with a doctor-led conversation about your health concerns and medical history.", href: "/services/physician-consultation" },
    { title: "Lifestyle Medicine", description: "Explore stress and behaviour alongside nutrition, movement, sleep and other lifestyle factors.", href: "/services/lifestyle" },
    { title: "Therapeutic Yoga", description: "Explore guided Yoga practices connected to movement, awareness and wellbeing.", href: "/services/therapeutic-yoga" },
  ],
  faq: [
    { question: "What does Behaviour, Stress & Mind support involve?", answer: "It focuses on understanding stress, habits, behaviour and mental wellbeing in the context of everyday life, with practical approaches that can support healthier routines." },
    { question: "Is this service only for people experiencing high stress?", answer: "No. It may also be useful for people who want to understand their habits, improve everyday routines, develop healthier responses to stress or support their overall wellbeing." },
    { question: "How can stress affect everyday health?", answer: "Stress can influence sleep, activity, eating patterns, concentration, mood and other everyday behaviours. Understanding these connections can help identify practical areas for support." },
    { question: "Can behaviour support be combined with medical care?", answer: "Yes. Behaviour and stress support can form part of a broader healthcare approach and may be considered alongside appropriate medical and lifestyle care." },
    { question: "Will I be given a fixed routine to follow?", answer: "The approach is intended to be practical and individualised. The focus is on understanding your circumstances and identifying changes that can realistically fit into your life." }
  ],
  finalTitle: "Start with a conversation about what is affecting your health.",
  finalDescription: "Explore the patterns that matter to you and identify practical next steps.",
};

export const traditionalTherapies: ServicePageConfig = {
  heroImage: "/images/retreat/Shirodhara.webp",
  name: "Traditional Therapies",
  shortName: "Traditional Therapies",
  slug: "traditional-therapies",
  title: "Traditional Therapies in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Traditional wellness practices at Sutra Health, including Shirodhara and Abhyanga, offered as part of a broader approach to relaxation, wellbeing and personalised care.",
  heroDescription:
    "Traditional practices including Shirodhara and Abhyanga, offered as part of a considered approach to rest, relaxation and wellbeing.",
  eyebrow: "Traditional Therapies",
  trust: ["Shirodhara", "Abhyanga", "Faridabad / Delhi NCR"],

  introEyebrow: "A Traditional Practice",
  introTitle: "A quiet, guided session with clear expectations.",
  introParagraphs: [
    "Sutra Health offers Shirodhara and Abhyanga for people seeking a traditional, guided relaxation practice. Before booking, you can discuss what the session involves and whether it is suitable for you.",
    "These therapies are complementary wellbeing practices. They do not diagnose or treat medical conditions and should not replace care recommended by your healthcare professional.",
  ],

  focusEyebrow: "What We Offer",
  focusTitle: "Choose the practice you want to know about.",
  focusIntro:
    "Each practice is different. The team can explain the session and answer practical questions before you decide.",

  focusAreas: [
    {
      number: "01",
      title: "Shirodhara",
      description:
        "A traditional practice in which a steady stream of liquid is gently directed over the forehead while you remain comfortably positioned. The session is approached as a calming and restorative experience.",
    },
    {
      number: "02",
      title: "Abhyanga",
      description:
        "A traditional oil-based body massage practice. The session can provide time for relaxation and body awareness within a calm, guided setting.",
    },
    {
      number: "03",
      title: "A considered session",
      description:
        "Before a session, the relevant practice, your expectations and any circumstances that may affect suitability can be discussed.",
    },
    {
      number: "04",
      title: "Part of wider care",
      description:
        "Traditional therapies can sit alongside appropriate medical, lifestyle, nutrition or movement support rather than replacing necessary healthcare.",
    },
  ],

  processTitle: "What a Traditional Therapy session can involve",
  processIntro:
    "The session begins by discussing the selected practice, your expectations and any circumstances relevant to suitability.",
  process: [
    { number: "01", title: "Discuss suitability", description: "Talk about what you are looking for and any relevant circumstances before selecting a practice." },
    { number: "02", title: "Prepare for the session", description: "Understand what the selected traditional practice involves and how the session will be conducted." },
    { number: "03", title: "Experience the practice", description: "Take part in the selected practice in a calm, guided setting with attention to comfort." },
    { number: "04", title: "Review the experience", description: "Discuss how you experienced the session and whether any further support or follow-up is appropriate." },
  ],

  contextEyebrow: "Complementary, Not Standalone",
  contextTitle:
    "Traditional therapies can be part of a wider approach to wellbeing.",
  contextParagraphs: [
    "Shirodhara and Abhyanga are traditional practices rather than replacements for medical diagnosis or treatment.",
    "Where appropriate, Traditional Therapies can connect with physician consultation, Lifestyle Medicine, Nutrition and Therapeutic Yoga as part of a broader approach to care.",
  ],

  related: [
    {
      title: "Physician Consultation",
      description:
        "Begin with a doctor-led conversation about your health concerns and medical history.",
      href: "/services/physician-consultation",
    },
    {
      title: "Lifestyle Medicine",
      description:
        "Explore nutrition, movement, sleep, stress and everyday health behaviours.",
      href: "/services/lifestyle",
    },
    {
      title: "Therapeutic Yoga",
      description:
        "Explore guided Yoga practices connected to movement and wellbeing.",
      href: "/services/therapeutic-yoga",
    },
  ],

  faq: [
    {
      question: "What are Traditional Therapies at Sutra Health?",
      answer:
        "Traditional Therapies at Sutra Health include practices such as Shirodhara and Abhyanga, offered as part of a broader approach to relaxation and wellbeing.",
    },
    {
      question: "What is Shirodhara?",
      answer:
        "Shirodhara is a traditional practice in which a steady stream of liquid is gently directed over the forehead while the person remains comfortably positioned.",
    },
    {
      question: "What is Abhyanga?",
      answer:
        "Abhyanga is a traditional oil-based body massage practice that can be experienced as a relaxing and restorative session.",
    },
    {
      question: "Are Traditional Therapies a replacement for medical treatment?",
      answer:
        "No. Traditional Therapies should not replace appropriate medical diagnosis or treatment. They may be considered as complementary support where appropriate.",
    },
    {
      question: "Can I discuss my health before booking a session?",
      answer:
        "Yes. A consultation can help clarify what you are looking for and whether the selected practice is appropriate for your circumstances.",
    },
  ],

  finalTitle: "Explore a traditional practice with the wider picture in view.",
  finalDescription:
    "Start with a conversation about what you are looking for and whether Traditional Therapies are appropriate for you.",
};
