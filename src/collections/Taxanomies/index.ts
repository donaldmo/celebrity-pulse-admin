import type { CollectionConfig } from 'payload'

const Taxanomies: CollectionConfig = {
  slug: 'taxonomies',
  admin: {
    useAsTitle: 'title',
    group: 'Taxonomy'
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}

export default Taxanomies