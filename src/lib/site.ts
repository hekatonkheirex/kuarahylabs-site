export const siteConfig = {
  name: "Kuarahy Labs",
  url: import.meta.env.PUBLIC_SITE_URL || "https://kuarahylabs.vercel.app",
  supportEmail: import.meta.env.PUBLIC_CONTACT_EMAIL || "kuarahylabs@gmail.com",
  pawRecordGooglePlayUrl: "https://play.google.com/store/apps/details?id=com.pawrecord.app",
  defaultTitle: "Kuarahy Labs — Focused, privacy-first apps for everyday life",
  defaultDescription: "Kuarahy Labs creates focused, privacy-first apps that help people organize important parts of everyday life.",
  defaultSocialImage: "/logo.png",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
