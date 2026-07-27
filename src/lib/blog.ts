import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;
const wordsPerMinute = 210;

export function readingTime(post: BlogPost) { return `${Math.max(1, Math.round(post.body.split(/\s+/).filter(Boolean).length / wordsPerMinute))} min read`; }
export function publicPosts(posts: BlogPost[]) { return posts.filter((post) => !post.data.draft).sort((a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime()); }
export function postUrl(post: BlogPost) { return `/blog/${post.id.replace(/\.md$/, "")}`; }
export function relatedPosts(current: BlogPost, posts: BlogPost[]) { const candidates = publicPosts(posts).filter((post) => post.id !== current.id); const explicit = current.data.relatedSlugs.map((slug) => candidates.find((post) => postUrl(post).endsWith(`/${slug}`))).filter((post): post is BlogPost => Boolean(post)); const fallback = candidates.filter((post) => post.data.category === current.data.category || post.data.tags.some((tag) => current.data.tags.includes(tag))); return [...explicit, ...fallback.filter((post) => !explicit.some((item) => item.id === post.id))].slice(0, 3); }
