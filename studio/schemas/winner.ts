// schemas/winner.ts

export default {
    name: "winner",
    type: "document",
    title: "Winner",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
            description: "The name of the winning raft / team, e.g. \"The Grinches\".",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "img",
            type: "image",
            title: "Image",
            description: "Set the hotspot on the raft — the podium card crops to a square around it.",
            options: { hotspot: true },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "year",
            type: "number",
            title: "Year",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "position",
            type: "number",
            title: "Position",
            validation: (Rule: any) => Rule.required().min(1).max(3).error("Position must be 1, 2 or 3")
        }
    ],
    preview: {
        select: { name: "name", position: "position", year: "year", media: "img" },
        prepare: ({ name, position, year, media }: any) => {
            const place = position === 1 ? "1st" : position === 2 ? "2nd" : position === 3 ? "3rd" : `#${position}`;
            return {
                title: name,
                subtitle: year ? `${place} place, ${year}` : place,
                media
            };
        }
    }
};
