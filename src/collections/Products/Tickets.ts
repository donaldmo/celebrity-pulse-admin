import { CollectionConfig } from 'payload/types';

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
  ],
};

export default Tickets;
