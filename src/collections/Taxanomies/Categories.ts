import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  slug: 'celebrity_types',
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