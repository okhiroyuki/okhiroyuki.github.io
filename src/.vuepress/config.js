module.exports = {
  title: 'okhiroyuki.com',
  dest: 'docs/',
  theme: 'blog-vuetify',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
  ],
  markdown: {
    lineNumbers: true,
    linkify: true,
    config: md => {
      md.use(require('markdown-it-video'))
    }
  },
  theme: 'blog-vuetify',
  themeConfig: {
    globalPagination: {
      lengthPerPage: 3,
    },
    titleIcon: 'pencil-box-outline',
    sidebar: {
      profile: {
        avatarUrl: 'https://avatars2.githubusercontent.com/u/23309?s=100',
        name: 'Hiroyuki Okada',
        subTitle: 'Programmer',
        descriptionHtml: 'Focus on Robots, Android, IoT.<br>Loves sake and books.',
      },
      additionalBlocks: [
        {
          title: 'Pages',
          links: [
            { label: 'PROFILE', path: '/profile' },
          ],
        },
      ],
    },
    footer: {
      links: [
        { label: 'PROFILE', path: '/profile' },
      ],
    },
    sns: {
      github: 'https://github.com/okhiroyuki/',
      feed: '',
    },
    ga: 'G-NPEHXJKD62',
    summary: 300,
    dateFormat: 'YYYY/MM/DD',
  },
}
