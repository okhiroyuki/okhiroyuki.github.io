module.exports = {
  title: 'okhiroyuki.com',
  dest: 'docs/.vuepress/dist/',
  head: [
    [
        'script',
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-NPEHXJKD62',
        },
    ],
    [
        'script',
        {},
        [
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-NPEHXJKD62');",
        ],
    ],
  ],
  plugins: ['redirect-frontmatter'],
}
