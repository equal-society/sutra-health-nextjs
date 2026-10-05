// data/conditions/arthritis-joint-pain.ts
import type { Condition } from "./types";

export const arthritisJointPain: Condition = {
  slug: "arthritis-joint-pain",
  title: "Arthritis & Joint Pain",

  shortDescription:
    "A condition guide to joint pain and arthritis, with attention to diagnosis, appropriate movement, strength, function and the evidence on yoga.",

  introduction:
    "Arthritis is not one condition, and joint pain can have different causes. This guide separates the need for appropriate diagnosis from the lifestyle questions that may be useful after the clinical picture is understood.",

  concerns: [
    "Osteoarthritis-related pain or reduced function",
    "Rheumatoid arthritis and questions about activity",
    "Stiffness or reduced mobility affecting everyday tasks",
    "Uncertainty about which movement is appropriate",
    "Wanting lifestyle support alongside medical treatment",
  ],

  lifestyleFactors: [
    {
      title: "Joint-appropriate movement",
      description: "Movement should be adapted to the affected joint, symptoms, fitness and diagnosis rather than following a generic routine.",
    },
    {
      title: "Strength and function",
      description: "Maintaining useful strength and physical function can support everyday activity. The appropriate exercises depend on the person and condition.",
    },
    {
      title: "Weight-related load",
      description: "For some people with weight-bearing joint problems, weight management may be one relevant part of a broader plan.",
    },
    {
      title: "Pain and stress",
      description: "Pain, sleep and stress can influence how manageable activity feels. These factors may need to be considered without assuming they explain the underlying joint condition.",
    },
  ],

  sections: [
    {
      title: "Start with the diagnosis",
      content: [
        "Osteoarthritis and rheumatoid arthritis have different disease processes and treatment needs. Joint pain can also have other causes, so persistent or unexplained symptoms should be assessed appropriately.",
        "Lifestyle support should therefore follow the clinical picture rather than assuming that one exercise or yoga sequence is suitable for everyone.",
      ],
    },
    {
      title: "What the evidence says about movement and yoga",
      content: [
        "The selected research includes trials in knee osteoarthritis and rheumatoid arthritis. Overall, the evidence supports studying yoga as a form of adapted movement, while not suggesting that it replaces disease-specific medical treatment.",
        "The evidence section keeps the specific trial findings and sources in one place so this overview does not duplicate the detailed question pages.",
      ],
    },
    {
      title: "Make movement fit the joint",
      content: [
        "A useful starting point is the movement you can perform safely and consistently. Range of motion, strength, balance, pain response and daily function can all matter when choosing activity.",
        "If a movement increases pain substantially, causes new symptoms or conflicts with medical restrictions, stop and seek appropriate professional advice.",
      ],
    },
  ],

  approach: [
    "Clarify the type of arthritis or joint problem before choosing a routine",
    "Use movement that matches current mobility, strength and symptoms",
    "Consider strength and functional activity alongside flexibility",
    "Use yoga as adapted movement rather than a generic sequence",
  ],

  support: [
    "Therapeutic yoga and movement adapted to the person",
    "Lifestyle support around activity and daily routines",
    "Nutrition support where weight or diet is relevant to the broader plan",
    "Physician involvement for diagnosis, medication or disease-specific treatment",
  ],

  evidence: [
    {
      claim:
        "In a randomized clinical trial of 117 participants, yoga was noninferior to a strengthening exercise program for knee osteoarthritis pain over 12 weeks, with modestly greater improvements in pain, function and quality of life by 24 weeks.",
      source: "JAMA Network Open, RCT",
      url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2832290",
    },
    {
      claim:
        "A meta-analysis of 10 trials (840 rheumatoid arthritis patients) found yoga improved physical function, disease activity, and grip strength, but found no significant effect on pain or inflammatory markers.",
      source: "Frontiers in Medicine, systematic review and meta-analysis",
      url: "https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2020.586665/full",
    },
    {
      claim:
        "People with arthritis practicing yoga three times weekly showed improved pain, energy, mood and physical health, with benefits still evident nine months later.",
      source: "Journal of Rheumatology, RCT",
      url: "https://time.com/4037157/yoga-arthritis-joint-pain/",
    },
    {
      claim:
        "A yoga-based lifestyle intervention (IAYT) improved mobility, grip strength, and flexibility measures in a randomized controlled trial for knee osteoarthritis.",
      source: "PMC, RCT (CTRI/2017/10/010141)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5952125/",
    },
  ],

  faqs: [
    {
      question: "Is yoga suitable for arthritis?",
      answer: "Research supports yoga as one possible form of adapted movement for some people with arthritis, but the appropriate practice depends on the diagnosis, joint involved, symptoms and medical advice.",
    },
    {
      question: "Should arthritis pain be assessed before starting exercise?",
      answer: "Persistent, severe, new or unexplained joint pain should be assessed. A diagnosis helps determine which movements are appropriate.",
    },
    {
      question: "Can yoga replace arthritis treatment?",
      answer: "No. Yoga may be used as complementary movement support, but it does not replace disease-specific medical treatment or prescribed medication.",
    },
  ],

  relatedConditions: ["weight-management", "diabetes-blood-sugar", "migraine-headache"],

  internalLinks: [
    { label: "Therapeutic Yoga & Movement", href: "/services/therapeutic-yoga" },
    { label: "Lifestyle Medicine", href: "/services/lifestyle" },
    { label: "Weight Management", href: "/conditions/weight-management" },
  ],
};
