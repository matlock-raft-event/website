import { eventQuery } from "~/lib/queries";
import { sanityClient } from "~/lib/sanity";
import type { EventQueryResult } from "~/lib/sanity.types";

/* Every page reads the event (the cancelled banner lives in the layout), so a
   build fetches it once and shares it. Dev refetches per request, so Studio
   edits show without a restart. Kept apart from ~/lib/event so the islands
   that use those helpers don't bundle the Sanity client. */
let cached: Promise<EventQueryResult> | undefined;

export const getEvent = (): Promise<EventQueryResult> => {
  if (!import.meta.env.PROD) return sanityClient.fetch<EventQueryResult>(eventQuery);
  cached ??= sanityClient.fetch<EventQueryResult>(eventQuery);
  return cached;
};
