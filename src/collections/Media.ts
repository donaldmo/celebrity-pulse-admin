// import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
// import type { CollectionConfig } from 'payload/types'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../media'),
  },
  access: {
    read: () => true,
  },
  admin: {
    group: "Admin"
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      // editor: slateEditor({
      //   admin: {
      //     elements: ['link'],
      //   },
      // }),
    },
  ],
}
