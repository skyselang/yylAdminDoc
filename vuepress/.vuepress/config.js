const { config } = require("vuepress-theme-hope");

module.exports = config({
  base: "/yylAdminDoc/",
  title: "yylAdmin",
  description: "基于ThinkPHP6和Vue2的极简后台管理系统，只有登录退出、权限管理、日志管理、接口文档与调试等前后台基础功能，前后分离，简单轻量，免费开源，开箱即用",

  dest: "./docs",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" },
    ],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }
    ],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://skyselang.github.io/yylAdminDoc/",

    author: "skyselang",
    repo: "https://github.com/skyselang/yylAdmin.git",

    nav: [
      { text: "指南", link: "/guide/", icon: "creative" },
      { text: "配置", link: "/config/", icon: "config" },
      { text: "使用", link: "/use/", icon: "edit" },
      { text: "教程", link: "/course/", icon: "blog" },
      { text: "演示", link: "/guide/#演示", icon: "computer" },
      { text: "问题", link: "/fqa/", icon: "question" },
      { text: "Gitee", link: "https://gitee.com/skyselang/yylAdmin.git", icon: "gitee" },
    ],

    sidebarIcon: false,
    sidebar: {
      "/guide/": ["", "base", "install", "catalog", "thank"],
      "/config/": [""],
      "/use/": ["", "adminapi", "adminpage", "adminrule", "indexapi", "apidoc", "fastcrud"],
      "/course/": [""],
      "/fqa/": [""],
    },

    locales: {
      "/": {
        lang: "zh-CN",
      },
    },

    blog: false,

    footer: {
      display: true,
      content: `<div>感谢每一位支持的coder | 点个Star吧 <a href="https://gitee.com/skyselang/yylAdmin" target="_blank"><i class="iconfont icon-gitee"></i>Gitee</a><a href="https://github.com/skyselang/yylAdmin" target="_blank"><i class="iconfont icon-github"></i>GitHub</a></div>`,
    },

    pageInfo: ['author', "visitor", 'time', "category", "tag", "word", "reading-time"],

    comment: {
      type: "disable",
      appId: "rekhopoCCAaMbKjGplamwMmR-gzGzoHsz",
      appKey: "kO8f1kV1ibDg81rrDBkWTHbR",
    },

    copyright: true,

    lastUpdate: {
      timezone: "Asia/Shanghai",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: false
  },
});
