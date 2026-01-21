const LOGO_DESCRIPTIONS = {
  1: 'Primary logo - Used in header - black version',
  2: 'Primary logo - white version',
  3: 'Full Logo (small) - Compact version optimized for mobile devices and small spaces',
  4: 'Full logo (large) - Used as button on landing page',
  5: 'Wordmark logo black - Used on about page',
  6: 'Wordmark logo white - Used in footer',
}

const createLogoField = (number) => ({
  name: `logo${number}`,
  title: `Logo ${number}`,
  type: 'image',
  description: LOGO_DESCRIPTIONS[number],
  options: {
    hotspot: true,
  },
})

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    createLogoField(1),
    createLogoField(2),
    createLogoField(3),
    createLogoField(4),
    createLogoField(5),
    createLogoField(6),
    {
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'spotify',
      title: 'Spotify',
      type: 'string',
    },
  ],
}
