const path = require('path');
module.exports = {
  title: 'JayMo的博客',
  description: '构建自己的知识体系',
  base: '/VuePress/',
  themeConfig: {
    serviceWorker: true,
    nav: [
      { text: '首页', link: '/' },
      {
        text: '分类',
        ariaLabel: '分类',
        items: [
          { text: '前端', link: '/pages/front/index.md' },
          { text: '后端', link: '/pages/back-end/index.md' },
        ]
      },
      { text: 'Github', link: 'https://github.com/JayMo666' },
    ],
    sidebar: {
      sidebar: 'auto'
      // '/pages/front/': [
      //   {
      //     title: '测试菜单1',   // 必要的
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1,    // 可选的, 默认值是 1
      //     children: [
      //       ['test1.md', '子菜单1'],
      //       ['test3.md', '子菜单2']
      //     ]
      //   },
      //   {
      //     title: '测试菜单2',
      //     collapsable: false, // 可选的, 默认值是 true,
      //     children: [
      //       ['test2.md', '子菜单1']
      //     ]
      //   }
      // ],
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@img': path.join(__dirname, './public/images'),
      }
    }
  }
}