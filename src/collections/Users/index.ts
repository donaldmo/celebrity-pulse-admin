import { CollectionConfig } from 'payload'

const Users: CollectionConfig = {
  slug: 'users',
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

export default Users
