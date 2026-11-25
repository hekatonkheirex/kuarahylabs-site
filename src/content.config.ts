import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(), description: z.string(), publishedDate: z.coerce.date(), updatedDate: z.coerce.date().optional(), author: z.string(), category: z.string(), tags: z.array(z.string()).min(1), heroImage: z.string().optional(), heroImageAlt: z.string().optional(), featured: z.boolean().default(false), draft: z.boolean().default(false), canonicalUrl: z.url().optional(), socialImage: z.string().optional(), relatedSlugs: z.array(z.string()).default([]),
  }),
});
export const collections = { blog };
