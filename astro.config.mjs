// @ts-check
import {
    defineConfig
} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import dotenv from "dotenv"
import robotsTxt from "astro-robots-txt";
import yeskunallumami from "@yeskunall/astro-umami";
import playformCompress from "@playform/compress";
import markdownPrerender from 'astro-markdown-prerender';

dotenv.config();

export default defineConfig({
    output: "server",
    site: "https://www.shafiqlawchamber.com",
    build: {
        concurrency: 10,
        format: "directory",
    },
    markdown: {
        shikiConfig: {
            theme: "tokyo-night",
        },
    },
    prefetch: {
        prefetchAll: false,
    },
    experimental: {
        svgo: true,
    },
    security: {
        checkOrigin: true,
    },
    integrations: [mdx(), sitemap(),
        markdownPrerender({
            prerenderAll: true
        }),
        react({
            experimentalDisableStreaming: true,
            include: ["**/react/*"],
        }), tailwind(), robotsTxt({
            sitemap: true,
            policy: [{
                    userAgent: 'Googlebot',
                    allow: '/',
                    disallow: ['/search'],
                    crawlDelay: 2,
                },
                {
                    userAgent: 'OtherBot',
                    allow: ['/allow-for-all-bots', '/allow-only-for-other-bot'],
                    disallow: ['/admin', '/login'],
                    crawlDelay: 2,
                },
                {
                    userAgent: '*',
                    allow: '/',
                    disallow: '/search',
                    crawlDelay: 10,
                    cleanParam: 'ref /articles/',
                },
            ],

        }), yeskunallumami({
            id: "c75d1132-dfac-451b-b32d-0930c96056cd"
        }), playformCompress({
            CSS: true,
            HTML: {
                "html-minifier-terser": {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            },
            Image: true,
            JavaScript: true,
            JSON: true,
            SVG: true,
        })
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