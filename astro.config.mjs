import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  compressHTML: true,
  site: process.env.PUBLIC_SITE_URL || "https://kuarahylabs.vercel.app",
});
