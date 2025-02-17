// import { CollectionConfig, FieldHook } from 'payload/types'
import type { CollectionConfig, FieldHook } from 'payload'

const generateSlug: FieldHook = ({ value, originalDoc, data }) => {
  if (typeof value === 'string' && value.trim() !== '') {
    return value.toLowerCase().replace(/\s+/g, '-');
  }

  if (data?.name) {
    return data.name.toLowerCase().replace(/\s+/g, '-');
  }

  return originalDoc?.slug || '';
};

const Celebrities: CollectionConfig = {
  slug: 'celebrities',
  admin: {
    useAsTitle: 'name',
    group: "Content",
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: false,
      unique: true,
      hooks: {
        beforeChange: [generateSlug],
      },
    },
    {
      name: 'votes',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'media',
      type: 'text',
      required: true,
    },
    {
      name: 'celebrityType',
      type: 'relationship',
      label: 'Type',
      relationTo: 'taxanomies',
      required: true,
    },
  ],
}

export default Celebrities