export default {
    name: "volunteerRole",
    type: "object",
    title: "Volunteer Role",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "image",
            type: "image",
            title: "Image",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "body",
            type: "array",
            of: [{ type: "block" }],
            title: "Body",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "contactInstructions",
            type: "array",
            of: [{ type: "block" }],
            title: "Contact Instructions",
            validation: (Rule: any) => Rule.required()
        }
    ],
    preview: {
        select: { title: "title", media: "image" }
    }
};
