// schemas/event.ts
export default {
    name: "event",
    type: "document",
    title: "Event details",
    description: "Core facts about this year's event. Editing these updates the countdown, schedule and Take Part page across the site.",
    fields: [
        {
            name: "year",
            type: "number",
            title: "Event year",
            description: "The year this event takes place, e.g. 2026.",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "date",
            type: "datetime",
            title: "Date & start time",
            description: "The day and time the rafts set off. This powers the homepage countdown — keep it accurate.",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "meetingPoint",
            type: "string",
            title: "Meeting point",
            description: "Where rafters gather, e.g. \"Cawdor Quarry (near Sainsbury's), Matlock\"."
        },
        {
            name: "arrivalTime",
            type: "string",
            title: "Rafter arrival time",
            description: "When participants should arrive to register, e.g. \"around 7am\"."
        },
        {
            name: "entryFee",
            type: "string",
            title: "Entry fee (per person)",
            description: "Shown on the Take Part page, e.g. \"£15 each\"."
        },
        {
            name: "distance",
            type: "string",
            title: "Course distance",
            description: "Approximate length of the course, e.g. \"3 miles\"."
        },
        {
            name: "weirDescent",
            type: "string",
            title: "Weir descent",
            description: "Description of the weir, e.g. \"around 30 metres of rapid white water\"."
        },
        {
            name: "beneficiary",
            type: "string",
            title: "Charity beneficiary",
            description: "The charity the event raises money for.",
            initialValue: "RNLI"
        },
        {
            name: "donationUrl",
            type: "url",
            title: "Online donation link",
            description: "This year's online fundraiser (Facebook, JustGiving…). Paste it once the fundraiser is live and the Donate page gets a \"Donate online now\" button. Leave it empty until then: the page says online giving opens nearer Boxing Day and points people to Facebook instead of a dead link.",
            validation: (Rule: any) => Rule.uri({ scheme: ["https"] })
        },
        {
            name: "status",
            type: "string",
            title: "Event status",
            description: "Set to \"Cancelled\" if the event can't go ahead (e.g. flooding).",
            options: {
                list: [
                    { title: "Scheduled", value: "scheduled" },
                    { title: "Cancelled", value: "cancelled" }
                ],
                layout: "radio"
            },
            initialValue: "scheduled",
            validation: (Rule: any) => Rule.required()
        }
    ],
    preview: {
        prepare: () => ({ title: "Event details" })
    }
};
