export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5fc76a978cb005656627a186',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ozafobmt',
                  apiId: '79f3207d-d9f2-4441-a825-da6671fe4899'
                },
                {
                  buildHookId: '5fc76a98f041f94b36020dd6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5m9a6tgh',
                  apiId: '2153ac30-3aaa-4d06-b013-28bd6f57cd33'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Hex-Zero/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5m9a6tgh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
