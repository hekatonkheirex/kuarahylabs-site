import type { APIRoute } from "astro";
import { absoluteUrl } from "../lib/site";
import { getCollection } from "astro:content";
import { postUrl, publicPosts } from "../lib/blog";

const paths = ["/", "/apps", "/apps/pawrecord", "/blog", "/privacy", "/about"];

export const GET: APIRoute = async () => {
  const posts = publicPosts(await getCollection("blog"));
  const urls = [...paths, ...posts.map(postUrl)].map((path) => `<url><loc>${absoluteUrl(path)}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "Content-Type": "application/xml" } });
};
