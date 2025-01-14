import type { CollectionConfig } from 'payload'

const Categories: CollectionConfig = {
  slug: 'taxanomies',
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

export default Categories