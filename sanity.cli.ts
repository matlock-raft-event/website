import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  project: {
    basePath: "/studio",
  },
  api: {
    projectId: "6m6e8mul",
    dataset: "production",
  },
});
