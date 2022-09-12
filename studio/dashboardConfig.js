export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '631f84210a9a8b6370186edf',
                  title: 'Sanity Studio',
                  name: 'mxthaiusdev-studio',
                  apiId: '8edf0544-8603-45de-a504-47bd7b8b913a'
                },
                {
                  buildHookId: '631f8421dc53d1619f1ba3f0',
                  title: 'Blog Website',
                  name: 'mxthaiusdev',
                  apiId: 'e34a1acb-9d46-437b-b3fc-358d085bcd9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mxthaiusdev/mxthaiusdev',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mxthaiusdev.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
