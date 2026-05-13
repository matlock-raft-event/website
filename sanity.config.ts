import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./studio/schemas";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set([
  "about",
  "cookiesInfo",
  "contactInstructions",
  "summary",
  "volunteerPage",
]);

export default defineConfig({
  name: "default",
  title: "Matlock Raft Event",

  projectId: "6m6e8mul",
  dataset: "production",
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Summary")
              .id("summary")
              .child(
                S.document().schemaType("summary").documentId("summary")
              ),
            S.listItem()
              .title("About")
              .id("about")
              .child(S.document().schemaType("about").documentId("about")),
            S.listItem()
              .title("Volunteer Page")
              .id("volunteerPage")
              .child(
                S.document()
                  .schemaType("volunteerPage")
                  .documentId("volunteerPage")
              ),
            S.listItem()
              .title("Contact Instructions")
              .id("contactInstructions")
              .child(
                S.document()
                  .schemaType("contactInstructions")
                  .documentId("contactInstructions")
              ),
            S.listItem()
              .title("Cookies Information")
              .id("cookiesInfo")
              .child(
                S.document()
                  .schemaType("cookiesInfo")
                  .documentId("cookiesInfo")
              ),
            ...schemaTypes
              .filter((s) => s.type === "document" && !singletonTypes.has(s.name))
              .map((s) =>
                S.documentTypeListItem(s.name).title(s.title)
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
