# Kuarahy Labs

Static product-marketing site for Kuarahy Labs, built with Astro and TypeScript. It is designed for Vercel static deployment.

## Architecture

- Astro 5 static output and file-based routes
- Native Astro components in `src/components/marketing` and `src/components/seo`
- Shared metadata and JSON-LD helpers in `src/lib`
- Global Kuarahy visual tokens in `src/styles/global.css`
- Static public files in `public/`

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` runs `astro check` before creating `dist/`.

## Environment configuration

Copy `.env.example` to `.env` for local configuration. All listed variables are public configuration values, not secrets.

- `PUBLIC_SITE_URL`: canonical site URL. It defaults to `https://kuarahylabs.vercel.app`; set it in Vercel when a custom domain is connected.
- `PUBLIC_GOOGLE_SITE_VERIFICATION`: optional Google Search Console verification token.
- `PUBLIC_ANALYTICS_PROVIDER`: leave empty to disable analytics. `umami` and `vercel` are reserved adapters.
- `PUBLIC_ANALYTICS_SITE_ID` and `PUBLIC_ANALYTICS_HOST`: reserved for a future provider integration; no provider script is loaded yet.
- `PUBLIC_CONTACT_EMAIL`: support contact email.

## SEO and Search Console

The site emits canonical URLs, Open Graph/Twitter metadata, JSON-LD, `robots.txt`, and `/sitemap.xml` from `PUBLIC_SITE_URL`. After deployment, add the configured site URL in Google Search Console, configure `PUBLIC_GOOGLE_SITE_VERIFICATION` if using meta-tag verification, then submit `${PUBLIC_SITE_URL}/sitemap.xml`.

## Content workflow

Phase 4 will add typed local article content under `src/content/blog`. New articles should provide a slug, title, description, dates, author, category, tags, social image, and verified content. Do not publish medical claims, dosing guidance, or universal veterinary schedules.

## Adding an app

Add verified app data to the central site/content modules, create an Astro route under `src/pages/apps`, and reuse the shared metadata, breadcrumb, and CTA components. Do not add stores or feature claims that are not verified.

## Deployment

Vercel can deploy this as a static Astro project with `npm run build`; output is `dist/`. Configure the public environment variables in Vercel before deployment.

## Localization TODO

The homepage preserves its existing EN/ES switch only because complete Spanish homepage copy exists. New routes are canonical English pages and deliberately show no global language switch. When Spanish content is ready, add explicit localized routes such as `/es/`, `/es/apps/pawrecord`, and `/es/blog/[slug]`; give each localized page its own metadata, canonical/hreflang strategy, and translated source content. Do not use client-side or machine-translated content for SEO.

## PawRecord product content

PawRecord marketing copy, verified feature categories, screenshot slots, FAQ entries, and CTA copy live in `src/data/apps/pawrecord.ts`. To replace a screenshot placeholder, add a verified local asset under `public/`, set its `src` in the relevant screenshot entry, and update its alt text and caption. Keep dimensions stable when real images are added.

Google Play CTA clicks use the `google_play_click` event through the shared analytics abstraction. With `PUBLIC_ANALYTICS_PROVIDER` empty, the site sends no analytics request. Tracking never delays the Google Play link.

Only add FAQ entries and structured-data properties when their answers are publicly verified. The current product page intentionally omits claims about accounts, storage, subscriptions, pricing, reminders, backups, export, sharing, multiple pets, and supported species. Its published privacy policy is linked from the product page; do not summarize its practices here without review.

## Blog content

Blog posts are Markdown files in `src/content/blog/`, validated by the strict schema in `src/content.config.ts`. Filename determines the slug. Set `draft: true` to exclude an article from routes, the listing, related content, and the sitemap. Published posts are sorted newest first; the local reading-time helper uses 210 words per minute and can be re-enabled once articles have been expanded to their intended editorial depth; explicit `relatedSlugs` are used before shared categories or tags.

Use actual `updatedDate` values only after substantive revisions. Keep medical content organizational and non-prescriptive, include the reusable disclaimer, and use descriptive internal links where they help the reader. Article views use `blog_article_view`; article-to-PawRecord CTAs use `article_to_pawrecord_click` with a slug, while analytics remains disabled until a provider is configured. The sitemap includes published posts. RSS is intentionally not included to avoid an additional dependency at this stage.
