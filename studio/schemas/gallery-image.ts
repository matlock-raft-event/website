// schemas/gallery-image.ts
export default {
    name: 'galleryImage',
    type: 'document',
    title: 'Gallery Image',
    fields: [
        {
            name: 'img',
            type: 'image',
            title: 'Image',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'year',
            type: 'number',
            title: 'Year',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author',
            description: "Who took the photo — credited on the site and used for image alt text."
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            description: "Optional short description of the photo."
        },
        {
            name: 'cover',
            type: 'boolean',
            title: 'Year cover',
            description: "Use this photo as the year's tile on the Gallery page. Tick one photo per year; without one, the tile uses the first photo of the year's page.",
            initialValue: false,
            // A warning, not an error: ticking the new cover before unticking
            // the old one is a normal way to swap them.
            validation: (Rule: any) => Rule.custom(async (value: boolean | undefined, context: any) => {
                const year = context.document?.year;
                if (!value || !year) return true;

                const id = String(context.document._id).replace(/^drafts\./, "");
                const others = await context
                    .getClient({ apiVersion: "2025-08-15" })
                    .fetch(
                        `count(*[_type == "galleryImage" && year == $year && cover == true && !(_id in [$id, "drafts." + $id])])`,
                        { year, id }
                    );

                return others
                    ? `Another ${year} photo is already the year cover. Untick that one, or the gallery will use whichever comes first.`
                    : true;
            }).warning()
        }
    ],
    orderings: [
        {
            title: "Year, newest first",
            name: "yearDesc",
            by: [{ field: "year", direction: "desc" }]
        },
        {
            title: "Year covers first",
            name: "coverFirst",
            by: [{ field: "cover", direction: "desc" }, { field: "year", direction: "desc" }]
        }
    ],
    preview: {
        select: { author: "author", year: "year", cover: "cover", media: "img" },
        prepare: ({ author, year, cover, media }: any) => ({
            title: author ? `Photo by ${author}` : "Untitled photo",
            subtitle: [year, cover ? "Year cover" : null].filter(Boolean).join(" · ") || undefined,
            media
        })
    }
}
