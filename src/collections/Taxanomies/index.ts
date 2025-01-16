import type { CollectionConfig } from 'payload'

const Taxanomies: CollectionConfig = {
  slug: 'taxanomies',
  admin: {
    useAsTitle: 'title',
    group: 'Taxanomy'
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