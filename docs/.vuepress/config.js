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
      {
        text: '前端技术',
        items: [
          { text: 'HTML/CSS', link: '/frontend/html/1' },
          { text: 'JavaScript', link: '/frontend/javascript/1' },
          { text: 'Vue', link: '/frontend/vue/1' },
        ]
      },
      { text: '其他技术', link: '/tech/interview/1' },
      { text: '简书', link: 'https://www.jianshu.com/u/bde26da4e53a' },
      { text: 'Github', link: 'https://github.com/FantasyLian' }
    ],
    sidebar: {
      '/tech/interview/': [{
        title: '其他技术',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          { title: 'MongoDB', path: '/tech/interview/1' },
          { title: 'Git', path: '/tech/interview/2' },
          { title: 'Markdown', path: '/tech/interview/3' }
        ]
      }],
      '/frontend/html/': [{
        title: 'HTML/CSS',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          { title: 'HTML5', path: '/frontend/html/1' },
          { title: 'CSS3', path: '/frontend/html/2' }
        ]
      }],
      '/frontend/javascript/': [{
        title: 'Javascript基础',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          { title: 'JS常用方法', path: '/frontend/javascript/1' }
          // { title: '', path: '/frontend/javascript/2' }
        ]
      }, {
        title: 'Javascript进阶',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          { title: 'ES6学习笔记', path: '/frontend/javascript/3' },
          { title: 'Node', path: '/frontend/javascript/4' }
        ]
      }],
      '/frontend/vue/': [{
        title: 'Vue',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          { title: 'Vue基础', path: '/frontend/vue/1' },
          { title: 'Vue进阶', path: '/frontend/vue/2' }
        ]
      }]
    }
  }
}