// schemas/summary.ts
export default {
    name: "about",
    type: "document",
    title: "About",
    fields: [
        {
            name: "bio",
            type: 'array',
            of: [{type: 'block'}],
            title: "Biography",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "storyPhotos",
            type: "array",
            title: "Story photos",
            description: "Polaroid photos shown beside the story, in order: the first goes with the intro, the second with the first heading, and so on. Extra photos are ignored, and sections without a photo show text only.",
            of: [
                {
                    name: "storyPhoto",
                    type: "object",
                    title: "Story photo",
                    fields: [
                        {
                            name: "image",
                            type: "image",
                            title: "Image",
                            options: { hotspot: true },
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            name: "alt",
                            type: "string",
                            title: "Alt text",
                            description: "Describe what is in the photo, for people who can't see it.",
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            name: "caption",
                            type: "string",
                            title: "Caption",
                            description: "Optional. Short text on the polaroid's white strip."
                        }
                    ],
                    preview: {
                        select: { title: "alt", subtitle: "caption", media: "image" }
                    }
                }
            ]
        },
        {
            name: "rnliBio",
            type: 'array',
            of: [{type: 'block'}],
            title: "RNLI Bio",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "rnliLink",
            type: "url",
            title: "RNLI Link",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "dasacBio",
            type: 'array',
            of: [{type: 'block'}],
            title: "DASAC Bio",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "dasacLink",
            type: "url",
            title: "DASAC Link",
            validation: (Rule: any) => Rule.required()
        },
    ],
    preview: {
        prepare: () => ({ title: "About" })
    }
};
