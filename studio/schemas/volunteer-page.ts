export default {
    name: "volunteerPage",
    type: "document",
    title: "Volunteer Page",
    fields: [
        {
            name: "intro",
            type: "array",
            of: [{ type: "block" }],
            title: "Intro",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "roles",
            type: "array",
            of: [{ type: "volunteerRole" }],
            title: "Volunteer Roles",
            validation: (Rule: any) => Rule.required().min(1)
        }
    ],
    preview: {
        prepare: () => ({ title: "Volunteer Page" })
    }
};
