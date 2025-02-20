// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config
export default defineConfig({
  output: "server",
  build: {
    format: "directory",
  },
  experimental: {
    svg: true,
  },
  markdown: {
    shikiConfig: {
      theme: "tokyo-night",
    },
  },

  site: "https://shafiqlawchamber.com",
  integrations: [
    mdx(),
    sitemap(),
    react({
      include: ["**/react/*"],
    }),
    tailwind(),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    maxDuration: 8,
  }),
});
