import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://www.matlockraftevent.co.uk",
    integrations: [
        react(),
        mdx(),
        sitemap(),
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
});
