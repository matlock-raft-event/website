import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = "6m6e8mul";
const dataset = "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  // Fresh reads, not the API CDN: a build triggered by a publish must see it.
  useCdn: false
});

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: unknown) => builder.image(source as never);
