(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{475:function(t,s,n){"use strict";n.r(s);var a=n(29),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"后端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[t._v("#")]),t._v(" 后端")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("├── app                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用（核心目录）")]),t._v("\n│   │── admin                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后台接口")]),t._v("\n│   │   │── controller         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 控制器（请求参数）")]),t._v("\n│   │   │── middleware         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中间件（拦截或过滤请求）")]),t._v("\n│   │── api                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 前台接口")]),t._v("\n│   │   │── controller         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 控制器（请求参数）")]),t._v("\n│   │   │── middleware         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中间件（拦截或过滤请求）")]),t._v("\n│   │   │── "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v("            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 业务逻辑")]),t._v("\n│   │── common                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 公共（核心）")]),t._v("\n│   │   │── cache              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存")]),t._v("\n│   │   │── controller         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 控制器")]),t._v("\n│   │   │── middleware         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中间件")]),t._v("\n│   │   │── model              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模型")]),t._v("\n│   │   │── "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v("            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 业务逻辑")]),t._v("\n│   │   │── utils              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工具类")]),t._v("\n│   │   │── validate           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证器（验证参数）")]),t._v("\n│   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n├── config                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置目录")]),t._v("\n│   │── admin                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后台配置  ")]),t._v("\n│   │── api                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 前台配置 ")]),t._v("\n│   │── apidoc                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接口文档配置 ")]),t._v("\n│   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其它tp配置 ")]),t._v("\n├── extend                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 扩展类库")]),t._v("\n├── private                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# private目录")]),t._v("\n│   │── apidoc                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接口文档和模板")]),t._v("\n│   │── captcha                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证码背景图和字体")]),t._v("\n│   │── yyladmin.sql           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库文件")]),t._v("\n│   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n├── public                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对外访问目录")]),t._v("\n│   │── admin                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后台前端")]),t._v("\n│   │── apidoc                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接口文档前端")]),t._v("\n│   │── storage                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传目录（读写权限）")]),t._v("\n│   │── .htaccess              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apache重写文件（伪静态）")]),t._v("\n│   │── index.php              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口文件")]),t._v("\n│   │── nginx.htaccess         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx重写文件（伪静态）")]),t._v("\n│   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                 \n├── route                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由（没有用到路由）")]),t._v("\n├── runtime                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行时目录（读写权限）")]),t._v("\n├── vendor                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Composer类库目录")]),t._v("\n├── .env.example               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 环境变量示例文件，重命名成.env后使用")]),t._v("\n├── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更多请参考thinkphp6目录结构")]),t._v("\n")])])]),n("h2",{attrs:{id:"前端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("├── build                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建相关")]),t._v("\n├── public                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 静态资源")]),t._v("\n│   │── favicon.ico            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# favicon图标")]),t._v("\n│   │── index.html             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# html模板")]),t._v("\n│   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n├── src                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 源代码")]),t._v("\n│   ├── api                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有请求接口")]),t._v("\n│   ├── assets                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主题字体等静态资源")]),t._v("\n│   ├── components             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局公用组件")]),t._v("\n│   ├── directive              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局指令")]),t._v("\n│   ├── filters                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局filter")]),t._v("\n│   ├── layout                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局layout")]),t._v("\n│   ├── router                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由")]),t._v("\n│   ├── store                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局store管理")]),t._v("\n│   ├── styles                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局样式")]),t._v("\n│   ├── utils                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局公用方法")]),t._v("\n│   ├── views                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有页面")]),t._v("\n│   ├── App.vue                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口页面")]),t._v("\n│   ├── main.js                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口文件加载组件初始化等")]),t._v("\n│   ├── permission.js          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 权限管理")]),t._v("\n│   ├── setting.js             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置（系统名称、页面标题等）")]),t._v("\n│   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n├── .env.xxx                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 环境变量配置")]),t._v("\n├── .eslintrc.js               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eslint配置")]),t._v("\n├── package.json               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# package.json")]),t._v("\n├── postcss.config.js          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# postcss配置")]),t._v("\n├── vue.config.js              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vue-cli配置")]),t._v("\n├── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);