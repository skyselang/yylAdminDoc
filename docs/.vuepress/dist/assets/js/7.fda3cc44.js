(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{473:function(t,n,s){"use strict";s.r(n);var a=s(29),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"环境要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[t._v("#")]),t._v(" 环境要求")]),t._v(" "),s("ul",[s("li",[t._v("PHP >= 7.2.5"),s("br"),t._v("\n安装 fileinfo、redis 扩展"),s("br"),t._v("\n开启 putenv、proc_open 函数")]),t._v(" "),s("li",[t._v("MySQL >= 5.5")]),t._v(" "),s("li",[t._v("Redis")]),t._v(" "),s("li",[t._v("Node >= 10.15.0")]),t._v(" "),s("li",[t._v("NPM >= 5.6.0")])]),t._v(" "),s("h2",{attrs:{id:"安装后端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装后端"}},[t._v("#")]),t._v(" 安装后端")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/skyselang/yylAdmin.git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" yylAdmin\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置composer")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" config -g repo.packagist "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" https://mirrors.aliyun.com/composer/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入数据库")]),t._v("\n数据库文件：private/yyladmin.sql\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改配置")]),t._v("\n重命名.env.example成.env环境变量文件修改里面配置（或修改config文件夹里面的配置）\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 环境配置（phpStudy）")]),t._v("\n根据你的实际环境软件配置\n域名：localhost\n端口：9526\n根目录：yylAdmin/public\nPHP版本：7.3.9\n伪静态Nginx：\nlocation / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-e "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rewrite  ^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$  /index.php?s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("  last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"安装前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装前端"}},[t._v("#")]),t._v(" 安装前端")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/skyselang/yylAdminWeb.git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" yylAdminWeb\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用cnpm")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g cnpm --registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\ncnpm "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改配置")]),t._v("\n在.env.xxx环境变量文件里面修改接口地址（后端环境配置域名端口）\nVUE_APP_BASE_API "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:9526'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地开发 启动项目")]),t._v("\ncnpm run dev\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发完打包正式环境")]),t._v("\ncnpm run build:prod\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发完打包测试环境")]),t._v("\ncnpm run build:stage\n")])])]),s("h2",{attrs:{id:"访问后台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问后台"}},[t._v("#")]),t._v(" 访问后台")]),t._v(" "),s("p",[t._v("地址："),s("a",{attrs:{href:"http://localhost:9527",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9527"),s("OutboundLink")],1),s("br"),t._v("\n账号：yyladmin"),s("br"),t._v("\n密码：123456"),s("br"),t._v("\n超管：skyselang"),s("br"),t._v("\n密码：123456")])])}),[],!1,null,null,null);n.default=e.exports}}]);