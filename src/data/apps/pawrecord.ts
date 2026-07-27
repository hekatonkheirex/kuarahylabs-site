import { siteConfig } from "../../lib/site";

export type PawRecordFeature = "visits" | "vaccinations" | "medications" | "weight";

export type ProductScreenshot = {
  src?: string;
  alt: string;
  caption: string;
  feature: "overview" | PawRecordFeature;
};

export type ProductFaq = { question: string; answer: string };

export const pawRecord = {
  name: "PawRecord",
  privacyPolicyUrl: "https://pawrecord-privacy.netlify.app/",
  termsOfUseUrl: "https://pawrecord-privacy.netlify.app/terms-of-use.html",
  metadata: {
    title: "PawRecord – Pet Health Records for Android | Kuarahy Labs",
    description: "Organize your pet’s veterinary visits, vaccinations, medications, and weight records with PawRecord for Android.",
  },
  hero: {
    eyebrow: "PawRecord for Android",
    title: "Keep your pet’s health history organized.",
    description: "Record veterinary visits, vaccinations, medications, and weight in one dedicated place.",
    trustStatement: "Available for Android on Google Play.",
  },
  value: {
    eyebrow: "One dedicated record",
    title: "The information you need, kept together.",
    description: "PawRecord brings key pet health record categories into one focused place, so they are easier to review when you need them.",
    points: ["Keep veterinary visit information together.", "Organize vaccination history.", "Record medication information.", "Add weight records over time."],
  },
  features: [
    { id: "visits", eyebrow: "Veterinary visits", title: "Keep visit information in your record.", description: "Record information related to veterinary visits alongside the rest of your pet’s health history." },
    { id: "vaccinations", eyebrow: "Vaccinations", title: "Organize vaccination records.", description: "Keep vaccination information in one dedicated record for easier reference." },
    { id: "medications", eyebrow: "Medications", title: "Store medication records.", description: "Add medication information to the same place as other important health records." },
    { id: "weight", eyebrow: "Weight", title: "Record weight information over time.", description: "Keep weight entries as part of your pet’s organized health history." },
  ] satisfies { id: PawRecordFeature; eyebrow: string; title: string; description: string }[],
  screenshots: [
    { feature: "overview", src: "/pawrecord/overview.webp", alt: "PawRecord overview screen showing a pet profile and health record categories", caption: "PawRecord overview" },
    { feature: "visits", src: "/pawrecord/veterinary-visits.webp", alt: "PawRecord veterinary visits screen showing a list of visit records", caption: "Veterinary visits" },
    { feature: "vaccinations", alt: "Placeholder for an official PawRecord vaccinations screenshot", caption: "Vaccinations" },
    { feature: "medications", src: "/pawrecord/medications.webp", alt: "PawRecord medications screen showing medication records", caption: "Medications" },
    { feature: "weight", src: "/pawrecord/weight.webp", alt: "PawRecord weight screen showing weight records", caption: "Weight" },
  ] satisfies ProductScreenshot[],
  howItWorks: [
    { title: "Install PawRecord", description: "Download PawRecord for Android from Google Play." },
    { title: "Add health information", description: "Record health information as needed." },
    { title: "Keep records organized", description: "Keep veterinary visits, vaccinations, medications, and weight records together." },
  ],
  faq: [
    { question: "What is PawRecord?", answer: "PawRecord is an Android app for organizing pet health records." },
    { question: "Where is PawRecord available?", answer: "PawRecord is available for Android on Google Play." },
    { question: "What information can I organize in PawRecord?", answer: "PawRecord supports records related to veterinary visits, vaccinations, medications, and weight." },
  ] satisfies ProductFaq[],
  finalCta: { title: "Keep your pet’s health records in one place.", description: "Download PawRecord for Android from Google Play." },
  googlePlayUrl: siteConfig.pawRecordGooglePlayUrl,
} as const;

// TODO(product): Replace placeholders with verified PawRecord screenshots and concise, accurate alt text.
// TODO(product): Confirm subscription, pricing, data-storage, and account behavior before publishing related copy or FAQ entries.
