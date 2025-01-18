import { CollectionConfig } from 'payload';


const Tickets: CollectionConfig = {
  slug: 'tickets',
  admin: {
    useAsTitle: 'amount',
    group: 'Products',
  },
  fields: [
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'currency',
      type: 'text',
      required: true,
    },
    {
      name: 'sortOrder',
      type: 'number',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Use this field to manually order the tickets. Lower numbers appear first.',
      },
      min: 1,
      max: 100
    }
  ],
};

export default Tickets;
