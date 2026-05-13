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
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "img",
            type: "image",
            title: "Image",
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
            validation: (Rule: any) => [
                Rule.required(),
                Rule.max(3).min(1).warning("Position should be 1, 2 or 3"),
            ]
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
