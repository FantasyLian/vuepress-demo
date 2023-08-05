module.exports = {
  title: 'Mr.cat 的博客',
  description: '前端开发|HTML5|CSS3|Javascript|Vue|React|Nodejs|MacOS',
  head: [
    ['link', { rel: 'icon', href: '/avatar.jpg' }],
    ['link', { rel: 'stylesheet', href: '/style/index.css' }]
  ],
  port: '9527',
  themeConfig: {
    logo: '/avatar.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '技术文档', link: '/tech/interview/' },
      { text: '简书主页', link: 'https://www.jianshu.com/u/bde26da4e53a' },
      { text: 'GitHub', link: 'https://github.com/FantasyLian' }
    ],
    sidebar: 'auto'
  }
}