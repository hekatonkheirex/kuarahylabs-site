import { absoluteUrl, siteConfig } from "./site";

export type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: absoluteUrl("/logo.png"), email: siteConfig.supportEmail };
}

export function websiteSchema(): JsonLd {
  return { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: siteConfig.url };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })) };
}

export function pawRecordSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PawRecord",
    applicationCategory: "HealthApplication",
    operatingSystem: "Android",
    downloadUrl: siteConfig.pawRecordGooglePlayUrl,
    image: absoluteUrl("/pawrecord-icon.svg"),
    description: "An app for organizing pet health records related to veterinary visits, vaccinations, medications, and weight.",
    author: { "@type": "Organization", name: siteConfig.name },
  };
}

// Reserved for Phase 4 article and FAQ content. Do not emit until facts are verified.
export function articleSchema(data: JsonLd): JsonLd { return { "@context": "https://schema.org", "@type": "Article", ...data }; }
export function faqSchema(questions: { question: string; answer: string }[]): JsonLd { return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }; }
