export default {
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Personal', value: 'personal' },
          { title: 'Client', value: 'client' },
          { title: 'School', value: 'school' },
        ],
      },
    },
    {
      name: 'link',
      type: 'url',
    },
  ],
}
