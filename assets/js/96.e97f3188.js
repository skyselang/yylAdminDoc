(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{429:function(a,s,t){"use strict";t.r(s);var e=t(8),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"环境要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[a._v("#")]),a._v(" 环境要求")]),a._v(" "),s("ul",[s("li",[a._v("PHP >= 7.3.0"),s("br"),a._v("\n安装 fileinfo、redis 扩展"),s("br"),a._v("\n开启 putenv、proc_open 函数")]),a._v(" "),s("li",[a._v("MySQL >= 5.5")]),a._v(" "),s("li",[a._v("Redis")]),a._v(" "),s("li",[a._v("Node = 12、14、16")]),a._v(" "),s("li",[a._v("NPM >= 6.2.0")])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("Node 版本过低或过高可能无法安装，你可以使用 "),s("a",{attrs:{href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"}},[a._v("n"),s("OutboundLink")],1),a._v("，"),s("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nvm"),s("OutboundLink")],1),a._v(" 或 "),s("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nvm-windows"),s("OutboundLink")],1),a._v(" 在同一台电脑中管理多个 Node 版本。")])]),a._v(" "),s("h2",{attrs:{id:"安装后端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装后端"}},[a._v("#")]),a._v(" 安装后端")]),a._v(" "),s("h3",{attrs:{id:"克隆项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#克隆项目"}},[a._v("#")]),a._v(" 克隆项目")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" v3 https://gitee.com/skyselang/yylAdmin.git\n")])])]),s("h3",{attrs:{id:"进入项目目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入项目目录"}},[a._v("#")]),a._v(" 进入项目目录")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" yylAdmin\n")])])]),s("h3",{attrs:{id:"设置-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-composer"}},[a._v("#")]),a._v(" 设置 composer")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" repo.packagist "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" https://mirrors.aliyun.com/composer/\n")])])]),s("h3",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[a._v("#")]),a._v(" 安装依赖")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("h3",{attrs:{id:"导入数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入数据库"}},[a._v("#")]),a._v(" 导入数据库")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("数据库文件：private/yyladmin.sql\n")])])]),s("h3",{attrs:{id:"修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[a._v("#")]),a._v(" 修改配置")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("复制.env.example后重命名成.env环境变量文件修改里面配置\n")])])]),s("h3",{attrs:{id:"环境配置-phpstudy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境配置-phpstudy"}},[a._v("#")]),a._v(" 环境配置（phpStudy）")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("根据你的实际环境软件配置\n域名：localhost\n端口：9526\n根目录：yylAdmin/public\nPHP版本：7.3.9\n")])])]),s("h3",{attrs:{id:"设置伪静态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置伪静态"}},[a._v("#")]),a._v(" 设置伪静态")]),a._v(" "),s("h4",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("-e "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$request_filename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        rewrite  ^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(".*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("$  /index.php?s"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v("  last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"apache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[a._v("#")]),a._v(" Apache")]),a._v(" "),s("ul",[s("li",[a._v("httpd.conf 配置文件中加载 mod_rewrite.so 模块")]),a._v(" "),s("li",[a._v("AllowOverride None 将 None 改为 All")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("IfModule mod_rewrite.c"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  Options +FollowSymlinks "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Multiviews")]),a._v("\n  RewriteEngine On\n\n  RewriteCond %"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("REQUEST_FILENAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("-d\n  RewriteCond %"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("REQUEST_FILENAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("-f\n  RewriteRule ^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(".*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("$ index.php/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("QSA,PT,L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/IfModule"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("不设置伪静态接口文档无法访问")])]),a._v(" "),s("h2",{attrs:{id:"安装前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装前端"}},[a._v("#")]),a._v(" 安装前端")]),a._v(" "),s("h3",{attrs:{id:"克隆项目-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#克隆项目-2"}},[a._v("#")]),a._v(" 克隆项目")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" v3 https://gitee.com/skyselang/yylAdminWeb.git\n")])])]),s("h3",{attrs:{id:"进入项目目录-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入项目目录-2"}},[a._v("#")]),a._v(" 进入项目目录")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" yylAdminWeb\n")])])]),s("h3",{attrs:{id:"使用-cnpm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-cnpm"}},[a._v("#")]),a._v(" 使用 cnpm")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" cnpm@6.2.0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--registry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://registry.npmmirror.com\n")])])]),s("blockquote",[s("p",[a._v("也可以使用  npm、pnpm、yarn")])]),a._v(" "),s("h3",{attrs:{id:"安装依赖-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖-2"}},[a._v("#")]),a._v(" 安装依赖")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cnpm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("h3",{attrs:{id:"修改配置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置-2"}},[a._v("#")]),a._v(" 修改配置")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("复制.env.xxx后重命名成.env.xxx.local环境变量文件修改里面配置\n")])])]),s("h3",{attrs:{id:"本地开发-启动项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地开发-启动项目"}},[a._v("#")]),a._v(" 本地开发 启动项目")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cnpm run dev\n")])])]),s("h3",{attrs:{id:"开发完打包正式环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发完打包正式环境"}},[a._v("#")]),a._v(" 开发完打包正式环境")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cnpm run build:prod\n")])])]),s("h3",{attrs:{id:"开发完打包测试环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发完打包测试环境"}},[a._v("#")]),a._v(" 开发完打包测试环境")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cnpm run build:stage\n")])])]),s("h2",{attrs:{id:"访问后台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问后台"}},[a._v("#")]),a._v(" 访问后台")]),a._v(" "),s("p",[a._v("地址："),s("a",{attrs:{href:"http://localhost:9527",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:9527"),s("OutboundLink")],1),s("br"),a._v("\n账号：yyladmin"),s("br"),a._v("\n密码：123456"),s("br"),a._v("\n超管：skyselang"),s("br"),a._v("\n密码：123456")])])}),[],!1,null,null,null);s.default=r.exports}}]);