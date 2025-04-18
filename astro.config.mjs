// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  output: "server",
  site: "https://www.shafiqlawchamber.com",
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
  security: {
    checkOrigin: true,
  },
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
  vite: {
    optimizeDeps: {
      include: ["react-icons/fa"],
    },
  },
});
