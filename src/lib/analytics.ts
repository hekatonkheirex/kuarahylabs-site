export const analyticsEvents = ["google_play_click", "pawrecord_page_view", "blog_article_view", "article_to_pawrecord_click"] as const;
export type AnalyticsEvent = (typeof analyticsEvents)[number];

// Client dispatch lives in Layout. With no configured provider it returns immediately and sends no request.
export function analyticsEnabled(provider?: string) {
  return provider === "vercel" || provider === "umami";
}
