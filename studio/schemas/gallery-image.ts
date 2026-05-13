// schemas/gallery-image.js
export default {
    name: 'galleryImage',
    type: 'document',
    title: 'Gallery Image',
    fields: [
        {
            name: 'year',
            type: 'number',
            title: 'Year'
        },
        {
            name: 'img',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author'
        },
    ],
    preview: {
        select: { author: "author", year: "year", media: "img" },
        prepare: ({ author, year, media }: any) => ({
            title: author ? `Photo by ${author}` : "Untitled photo",
            subtitle: year ? `${year}` : undefined,
            media
        })
    }
}
