import { CollectionConfig } from 'payload/types';

const Fans: CollectionConfig = {
  slug: 'fans',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: "Admin",
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'image_url',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};

export default Fans;
