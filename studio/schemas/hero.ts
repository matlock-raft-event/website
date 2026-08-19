// schemas/hero.ts
export default {
    name: 'hero',
    type: 'document',
    title: 'Hero',
    fields: [
        {
            name: 'title',
            type: 'text',
            rows: 3,
            title: 'Title',
            description: "The big headline on the homepage. Press Enter to start a new line where you want the text to break. Use \"&nbsp;\" between two words to keep them together on the same line."
        },
        {
            name: 'titleAccent',
            type: 'text',
            rows: 2,
            title: 'Title accent lines',
            description: "The yellow lines of the headline, shown after the white title lines. Press Enter to control line breaks."
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle',
            description: "The small line above the headline, shown in capitals."
        },
        {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text',
            description: "Label for the main hero button, e.g. \"Enter a raft\"."
        },
        {
            name: 'buttonLink',
            type: 'url',
            title: 'Button Link',
            description: "Where the hero button goes. Leave blank to default to the Take Part page."
        },
        {
            name: 'secondaryButtonText',
            type: 'string',
            title: 'Secondary Button Text',
            description: "Optional second button, e.g. \"Watch the race\". Leave blank to show only the main button."
        },
        {
            name: 'secondaryButtonLink',
            type: 'url',
            title: 'Secondary Button Link',
            description: "Where the secondary button goes."
        },
        {
            name: 'video',
            type: 'file',
            title: 'Video',
            description: "Optional. Not currently shown on the site."
        },
    ],
    preview: {
        select: { title: "title", subtitle: "subtitle" }
    }
}
