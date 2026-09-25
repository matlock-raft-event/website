import type { EventQueryResult } from "~/lib/sanity.types";

type HasDate = { date?: string | null } | null | undefined;

/* The next Boxing Day at 11am, worked out from today. A hardcoded year would
   quietly start counting down to a date in the past, and the fallback is
   exactly what runs when the CMS has no date to correct it. */
export const nextBoxingDay = () => {
  const now = new Date();
  const thisYear = new Date(now.getFullYear(), 11, 26, 11, 0, 0, 0);

  return now.getTime() <= thisYear.getTime()
    ? thisYear
    : new Date(now.getFullYear() + 1, 11, 26, 11, 0, 0, 0);
};

/** When the rafts set off: the Studio's date, or next Boxing Day without one. */
export const eventStart = (event: HasDate): Date => {
  const fromCms = event?.date ? new Date(event.date) : null;
  return fromCms && !Number.isNaN(fromCms.getTime()) ? fromCms : nextBoxingDay();
};

/** The event's year, taken from its date so the two can't disagree. */
export const eventYear = (event: HasDate) => eventStart(event).getFullYear();

export const isCancelled = (event: EventQueryResult) => event?.status === "cancelled";

/* The organisers post an Update when they cancel, so wherever the site says
   the event is off it links to the newest Update for the details. */
export const cancellationUpdateLink = (event: EventQueryResult) => {
  const update = event?.latestUpdate;
  return update
    ? { href: `/updates/${update.slug}`, label: update.title ? `Read the update: ${update.title}` : "Read the update" }
    : { href: "/updates", label: "Read our latest update" };
};

/* What the Take Part and race pages print when a field is empty in the Studio:
   the values the site carried before they were editable. */
export const eventFacts = (event: EventQueryResult) => ({
  meetingPoint: event?.meetingPoint || "Cawdor Quarry (near Sainsbury’s) in Matlock",
  arrivalTime: event?.arrivalTime || "9:00am",
  entryFee: event?.entryFee || "£15 each"
});

export type EventFacts = ReturnType<typeof eventFacts>;
