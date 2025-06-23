import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'musician',
  title: 'Musician',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Artist', value: 'artist'},
          {title: 'Producer/Writer', value: 'producer-writer'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
    {
      name: 'spotify',
      title: 'Spotify',
      type: 'url',
    },
    {
      name: 'tiktok',
      title: 'TikTok',
      type: 'url',
    },
    // Add more fields as needed, for example social media links or genres
    defineField({
      name: 'displayOrder', // You can call this whatever you like
      title: 'Display Order',
      type: 'number',
      description:
        'Enter a number to control the order this artist appears in lists. Lower numbers appear first.',
      validation: (Rule) => Rule.required().integer().positive(), // Optional validation
    }),
  ],
})
