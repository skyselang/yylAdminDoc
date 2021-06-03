(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{700:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"环境要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[s._v("#")]),s._v(" 环境要求")]),s._v(" "),a("ul",[a("li",[s._v("PHP >= 7.2.5"),a("br"),s._v("\n安装 fileinfo、redis 扩展"),a("br"),s._v("\n开启 putenv、proc_open 函数")]),s._v(" "),a("li",[s._v("MySQL >= 5.5")]),s._v(" "),a("li",[s._v("Redis")]),s._v(" "),a("li",[s._v("node >= 10.15.0")]),s._v(" "),a("li",[s._v("npm >= 5.6.0")])]),s._v(" "),a("h2",{attrs:{id:"安装后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装后端"}},[s._v("#")]),s._v(" 安装后端")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆项目")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/skyselang/yylAdmin.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入项目目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" yylAdmin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置composer")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" config -g repo.packagist "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" https://mirrors.aliyun.com/composer/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入数据库")]),s._v("\n数据库文件：private/yyladmin.sql\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置")]),s._v("\n重命名.env.example成.env环境变量文件修改里面配置（或修改config文件夹里面的配置）\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 环境配置（phpStudy）")]),s._v("\n根据你的实际环境软件配置\n域名：localhost\n端口：9526\n根目录：yylAdmin/public\nPHP版本：7.3.9\n伪静态Nginx：\nlocation / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-e "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        rewrite  ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$  /index.php?s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("  last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h2",{attrs:{id:"安装前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装前端"}},[s._v("#")]),s._v(" 安装前端")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆项目")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/skyselang/yylAdminWeb.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入项目目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" yylAdminWeb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用cnpm")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cnpm --registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\ncnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置")]),s._v("\n在.env.xxx环境变量文件里面修改接口地址（后端环境配置域名端口）\nVUE_APP_BASE_API "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:9526'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地开发 启动项目")]),s._v("\ncnpm run dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开发完打包正式环境")]),s._v("\ncnpm run build:prod\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开发完打包测试环境")]),s._v("\ncnpm run build:stage\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"访问后台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问后台"}},[s._v("#")]),s._v(" 访问后台")]),s._v(" "),a("p",[s._v("地址："),a("a",{attrs:{href:"http://localhost:9527",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:9527"),a("OutboundLink")],1),a("br"),s._v("\n账号：yyladmin"),a("br"),s._v("\n密码：123456"),a("br"),s._v("\n超管：skyselang"),a("br"),s._v("\n密码：123456")])])}),[],!1,null,null,null);n.default=e.exports}}]);