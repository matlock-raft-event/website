// schemas/event.ts
export default {
    name: "event",
    type: "document",
    title: "Event details",
    description: "This year's event. The date drives the homepage countdown and the year shown across the site; the meeting point, arrival time and entry fee appear on the Take Part and The Race pages.",
    fields: [
        {
            name: "date",
            type: "datetime",
            title: "Date & start time",
            description: "The day and time the rafts set off. This powers the homepage countdown and sets the year shown on the site, so keep it accurate.",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "meetingPoint",
            type: "string",
            title: "Meeting point",
            description: "Where rafters gather to register, e.g. \"Cawdor Quarry (near Sainsbury's) in Matlock\". It's used mid-sentence (\"Arrive at … at around 9:00am\"), so write it to read that way."
        },
        {
            name: "arrivalTime",
            type: "string",
            title: "Rafter arrival time",
            description: "When crews should arrive to register, written like \"9:00am\". The Take Part page adds \"around\" in front, and it heads The Race page's timings."
        },
        {
            name: "entryFee",
            type: "string",
            title: "Entry fee (per person)",
            description: "Shown on the Take Part page, e.g. \"£15 each\"."
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
            description: "If the event can't go ahead (e.g. flooding), first publish an Update saying so, then set this to Cancelled. Every page then shows a cancelled banner linking to that newest Update, the homepage countdown is replaced, and Google is told the event is cancelled.",
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
