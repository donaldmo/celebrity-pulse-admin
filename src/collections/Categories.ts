import { CollectionConfig } from 'payload'

const Categories: CollectionConfig = {
    slug: 'categories',
    auth: true,
    admin: {
        useAsTitle: 'email',
        group: "Admin"
    },
    fields: [
        // Email added by default
        // Add more fields as needed
    ],
}

export default Categories