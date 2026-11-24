import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  project: {
    basePath: "/studio",
  },
  api: {
    projectId: "6m6e8mul",
    dataset: "production",
  },
  typegen: {
    path: "./src/**/*.{ts,tsx,astro}",
    schema: "./schema.json",
    generates: "./src/lib/sanity.types.ts",
  },
});
