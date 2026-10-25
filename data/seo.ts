/**
 * Search-result titles and descriptions for data-driven pages.
 * Titles include the brand and are used with `title: { absolute }`.
 * Keep titles under 60 characters and descriptions under 160.
 * If a slug is missing here, the page falls back to its old behaviour.
 */
export type SeoEntry = { title: string; description: string };

const B = " | Sutra Health";

export const conditionSeo: Record<string, SeoEntry> = {
  "weight-management": {
    title: "Weight Management Support in Faridabad" + B,
    description:
      "Doctor-led weight management in Faridabad: eating patterns, activity, sleep and stress, built around habits you can sustain. Book a consultation.",
  },
  "diabetes-blood-sugar": {
    title: "Diabetes & Blood Sugar Care in Faridabad" + B,
    description:
      "Lifestyle support for diabetes and blood sugar in Faridabad: nutrition, activity and yoga, used alongside your medical treatment. Book a consultation.",
  },
  "high-blood-pressure": {
    title: "High Blood Pressure Care in Faridabad" + B,
    description:
      "Lifestyle support for high blood pressure in Faridabad: diet, activity, sleep, stress and yoga, alongside your medical treatment. Book a consultation.",
  },
  "arthritis-joint-pain": {
    title: "Arthritis & Joint Pain Care in Faridabad" + B,
    description:
      "Lifestyle support for arthritis and joint pain in Faridabad: movement, strength and yoga, after a proper diagnosis. Book a consultation.",
  },
  "migraine-headache": {
    title: "Migraine & Headache Care in Faridabad" + B,
    description:
      "Lifestyle support for migraine in Faridabad: sleep, regular meals, hydration, stress and gentle yoga, alongside treatment. Book a consultation.",
  },
  "digestive-gut-health": {
    title: "Digestive & Gut Health Care in Faridabad" + B,
    description:
      "Lifestyle support for digestive and gut health in Faridabad: eating patterns, routine, stress and yoga. Book a consultation.",
  },
  "womens-health": {
    title: "PCOS & Menopause Support in Faridabad" + B,
    description:
      "Lifestyle support for PCOS and menopause symptoms in Faridabad, alongside medical care. Other women's health needs are not covered here. Book a consultation.",
  },
};

export const subpageSeo: Record<string, SeoEntry> = {
  "can-yoga-prevent-prediabetes-progressing": {
    title: "Yoga and Prediabetes: What the Research Shows" + B,
    description:
      "A structured yoga-based lifestyle programme was linked to lower progression to diabetes in a large Indian trial. It is not a guarantee. See what it found.",
  },
  "can-yoga-replace-diabetes-medication": {
    title: "Can Yoga Replace Diabetes Medication?" + B,
    description:
      "No. Studies treat yoga as an addition to standard diabetes care. Better blood sugar is not a reason to stop medication without your doctor's review.",
  },
  "yoga-poses-for-blood-sugar": {
    title: "Yoga for Blood Sugar: Which Practices Help?" + B,
    description:
      "Studies used full programmes of postures, breathing and relaxation, not one pose. Regular practice over weeks matters more than any single asana.",
  },
  "can-yoga-replace-bp-medication": {
    title: "Can Yoga Replace Blood Pressure Medication?" + B,
    description:
      "No. Research treats yoga as an addition to standard care. Share any improved readings with your doctor before changing prescribed medication.",
  },
  "yoga-poses-for-blood-pressure": {
    title: "Which Yoga Poses Help Lower Blood Pressure?" + B,
    description:
      "Gentle movement, relaxation and slow breathing are used in yoga for blood pressure, such as Shavasana and Viparita Karani. See what is safe to try.",
  },
  "yoga-poses-to-avoid-with-hypertension": {
    title: "Yoga Poses to Avoid With High Blood Pressure" + B,
    description:
      "With high blood pressure, be careful with strong inversions, intense backbends and breath-holding. Start with gentle, supported practice instead.",
  },
  "how-long-yoga-lowers-blood-pressure": {
    title: "How Long Does Yoga Take to Lower BP?" + B,
    description:
      "There is no fixed timeline. Studies showing changes used regular practice over several weeks. Judge your progress by repeated blood-pressure readings.",
  },
  "yoga-poses-for-arthritis": {
    title: "Yoga for Arthritis: Poses That Help" + B,
    description:
      "Yoga for arthritis is adapted to the affected joint. Supported standing work, gentle seated moves and props can keep movement comfortable.",
  },
  "yoga-poses-to-avoid-with-arthritis": {
    title: "Yoga Poses to Avoid With Arthritis" + B,
    description:
      "No single avoid-list fits everyone. Deep joint bends, heavy weight-bearing and hard balances may need changes if they raise your symptoms.",
  },
  "yoga-for-osteoarthritis-vs-rheumatoid-arthritis": {
    title: "Yoga: Osteoarthritis vs Rheumatoid Arthritis" + B,
    description:
      "Yes, it differs. Studies report better function in rheumatoid arthritis and less pain or better function in osteoarthritis. It does not treat the disease.",
  },
  "can-yoga-replace-migraine-medication": {
    title: "Can Yoga Replace Migraine Medication?" + B,
    description:
      "No. The trial studied yoga alongside standard migraine treatment, not instead of it. Review any change in your headaches with your treating doctor.",
  },
  "yoga-poses-for-migraine-relief": {
    title: "Which Yoga Poses Help Migraine?" + B,
    description:
      "Gentle, restorative poses such as Child's Pose, Legs-Up-the-Wall and Cat-Cow, with slow breathing, may suit migraine better than hard sequences.",
  },
  "yoga-styles-to-avoid-with-migraine": {
    title: "Yoga Styles to Avoid With Migraine" + B,
    description:
      "Heated classes, fast vigorous practice and extreme poses can be poor choices if heat, dehydration or strain trigger your migraine. Start gentle.",
  },
  "yoga-for-ibs-what-evidence-says": {
    title: "Yoga for IBS: What Does the Research Say?" + B,
    description:
      "Evidence for yoga in IBS is promising but not settled, and reviews disagree on trial quality. It can be a supportive option, not a proven treatment.",
  },
  "yoga-poses-for-bloating-and-constipation": {
    title: "Yoga for Bloating and Constipation: Poses" + B,
    description:
      "Gentle abdominal and spinal moves such as Pawanmuktasana, Cat-Cow and Malasana are common for bloating. Adapt them to comfort; results are not guaranteed.",
  },
};

/** `title` is optional: when omitted the article title is used and the site template adds the brand. */
export const articleSeo: Record<string, { title?: string; description: string }> = {
  "how-to-manage-stress": {
    title: "How to Manage Stress: Practical Daily Steps" + B,
    description:
      "Understand everyday stress and practical ways to support calm, recovery and healthier routines. A guide from Sutra Health in Faridabad.",
  },
  "yoga-for-stress-relief": {
    title: "Yoga for Stress Relief: A Gentle Routine" + B,
    description:
      "How gentle yoga, comfortable breathing and mindful movement can fit into a practical routine for everyday stress. A guide from Sutra Health.",
  },
  "what-is-prediabetes-and-can-it-be-reversed": {
    description:
      "What prediabetes means, how it is found and which lifestyle changes can help prevent or delay type 2 diabetes. A Sutra Health guide.",
  },
  "how-to-lower-blood-pressure-naturally": {
    description:
      "Evidence-based lifestyle measures that can support healthy blood pressure alongside appropriate medical care. A Sutra Health guide.",
  },
  "what-is-a-healthy-balanced-diet": {
    description:
      "A practical guide to dietary variety, balance and moderation, and the everyday foods that make up a healthy eating pattern. By Sutra Health.",
  },
  "how-to-improve-gut-health-naturally": {
    description:
      "Practical ways to support digestive health through food choices, fibre, movement and everyday habits you can keep up. A Sutra Health guide.",
  },
  "how-does-sleep-affect-weight-loss": {
    description:
      "Sleep is one part of healthy weight management. See how it fits with eating patterns, activity and stress. A practical guide from Sutra Health.",
  },
  "can-walking-help-lower-blood-pressure": {
    description:
      "Walking adds regular moderate activity to your week and can be one part of a broader blood-pressure plan, if you can walk safely. Read the guide.",
  },
};
