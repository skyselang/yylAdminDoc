import{_ as a,c as e,o as t,a4 as i,a5 as o,a6 as s,a7 as c}from"./chunks/framework.DCU59OQD.js";const g=JSON.parse('{"title":"接口文档","description":"","frontmatter":{},"headers":[],"relativePath":"dev/debug/apidoc.md","filePath":"dev/debug/apidoc.md","lastUpdated":1712923570000}'),l={name:"dev/debug/apidoc.md"},r=i('<h1 id="接口文档" tabindex="-1">接口文档 <a class="header-anchor" href="#接口文档" aria-label="Permalink to &quot;接口文档&quot;">​</a></h1><h2 id="查看错误" tabindex="-1">查看错误 <a class="header-anchor" href="#查看错误" aria-label="Permalink to &quot;查看错误&quot;">​</a></h2><p>接口文档有时候不会显示具体错误原因，可以通过浏览器的开发者工具查看。 <img src="'+o+'" alt="查看错误提示"></p><p>也可以右击 在新标签中打开 查看。 <img src="'+s+'" alt="在新标签中打开"><img src="'+c+'" alt="在新标签中打开"></p><h2 id="修复错误" tabindex="-1">修复错误 <a class="header-anchor" href="#修复错误" aria-label="Permalink to &quot;修复错误&quot;">​</a></h2><p>根据错误提示修复；</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>需要设置伪静态和开启tp路由，否则接口文档无法访问</p></div><p>一般错误：</p><ul><li>接口文档打不开404，一般是伪静态没有设置</li><li>没有引入 Apidoc，但又使用了 Apidoc 注释</li><li>Apidoc 语法错误，双引号、括号等，嵌套的时候要注意</li><li>Apidoc ref的方法不存在，注意方法是否存在、路径、大小写等</li><li>...</li></ul>',9),d=[r];function p(_,n,h,m,u,f){return t(),e("div",null,d)}const A=a(l,[["render",p]]);export{g as __pageData,A as default};
