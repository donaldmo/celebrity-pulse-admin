import { CollectionConfig } from 'payload'

const Contests: CollectionConfig = {
  slug: 'contests',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'starting_date', 'ending_date', 'updatedAt'],
    group: "Content"
  },
  versions: {
    drafts: true,  // Enable drafts for contests
  },
  fields: [
    {
      type: 'tabs',  // Use tabs to organize fields
      tabs: [
        {
          label: 'Contest Details',  // First tab for contest info
          fields: [
            {
              name: 'name',
              type: 'text',
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
          ],
        },
        {
          label: 'Dates',  // Second tab for start and end dates
          fields: [
            {
              name: 'starting_date',
              type: 'date',
              required: true,
              admin: {
                position: 'sidebar',  // Positioning in sidebar
              },
            },
            {
              name: 'ending_date',
              type: 'date',
              required: true,
              admin: {
                position: 'sidebar',  // Positioning in sidebar
              },
            },
          ],
        },
        {
          label: 'Celebrities',  // Third tab for related celebrities
          fields: [
            {
              name: 'celebrities',
              type: 'relationship',
              relationTo: 'celebrities',
              hasMany: true,
              required: true,
              admin: {
                position: 'sidebar',  // Positioning in sidebar
              },
            },
          ],
        },
        {
          label: 'Votes',  // Fourth tab for votes
          fields: [
            {
              name: 'votes',
              type: 'array',  // Define it as a list/array
              fields: [
                {
                  name: 'voteCount',
                  type: 'number',
                  required: true,
                },
                {
                  name: 'celebrity',
                  type: 'relationship',
                  relationTo: 'celebrities',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default Contests
