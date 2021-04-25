'use strict'

module.exports = {
  title: 'Mr.cat 的博客',
  head: [
    ['link', { rel: 'icon', href: '/avatar.jpg' }]
  ],
  themeConfig: {
    logo: '/avatar.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '技术文档', link: '/tech/interview/' },
      { text: '简书主页', link: 'https://www.jianshu.com/u/bde26da4e53a' },
      { text: 'GitHub', link: 'https://github.com/FantasyLian' }
    ],
    sidebar: 'auto',
  }
}