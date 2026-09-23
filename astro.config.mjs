import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.matlockraftevent.co.uk",

  redirects: {
      "/plan-your-visit": "/info/getting-here",
      "/results": "/hall-of-fame",
      "/about": "/info/history",
  },

  integrations: [
      react(),
      mdx(),
      sitemap({
          filter: (page) => !page.includes("/studio"),
      }),
      sanity({
          projectId: "6m6e8mul",
          dataset: "production",
          studioBasePath: "/studio",
          useCdn: true,
      }),
  ],

  vite: {
      plugins: [tailwindcss()],
      resolve: {
          alias: {
              "~": new URL("./src", import.meta.url).pathname,
          },
      },
  },

  adapter: cloudflare({
      // Optimize images at build time into static /_astro/*.webp files.
      // The default ("cloudflare") serves images via a runtime /_image endpoint
      // backed by Cloudflare Images, which 404s unless that feature is enabled
      // on the account — breaking the hero image on this static site.
      imageService: "compile",
  }),
});
