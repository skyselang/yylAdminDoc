import{_ as a,c as e,o as t,a4 as r,as as o,at as i,au as s,av as l,aw as h,ax as n,ay as d,az as p,aA as c,aB as _,aC as m,aD as u}from"./chunks/framework.DCU59OQD.js";const T=JSON.parse('{"title":"宝塔面板部署","description":"","frontmatter":{},"headers":[],"relativePath":"fqa/bt-deploy.md","filePath":"fqa/bt-deploy.md","lastUpdated":1712923570000}'),b={name:"fqa/bt-deploy.md"},q=r('<h1 id="宝塔面板部署" tabindex="-1">宝塔面板部署 <a class="header-anchor" href="#宝塔面板部署" aria-label="Permalink to &quot;宝塔面板部署&quot;">​</a></h1><p>强烈正式环境推荐使用宝塔面板部署项目，让部署更方便，减少部署出现问题。</p><h2 id="环境安装" tabindex="-1">环境安装 <a class="header-anchor" href="#环境安装" aria-label="Permalink to &quot;环境安装&quot;">​</a></h2><h3 id="安装软件" tabindex="-1">安装软件 <a class="header-anchor" href="#安装软件" aria-label="Permalink to &quot;安装软件&quot;">​</a></h3><p>点击【软件商店】-【运行环境】，安装Nginx(&gt;=1.20)、MySQL(&gt;=5.7)、PHP(&gt;=8.0)、node(&gt;=18.12)、npm(&gt;=8.19)。</p><blockquote><p>安装软件的时候，使用极速安装，避免出现一些环境引起的问题。</p></blockquote><img src="'+o+'" alt=""><img src="'+i+'" alt=""><h3 id="安装扩展" tabindex="-1">安装扩展 <a class="header-anchor" href="#安装扩展" aria-label="Permalink to &quot;安装扩展&quot;">​</a></h3><p>点击【软件商店】-【已安装】，找到PHP，然后点击【设置】-【安装扩展】，【安装】fileinfo扩展，【安装】redis扩展。<br><img src="'+s+'" alt=""></p><h3 id="开启函数" tabindex="-1">开启函数 <a class="header-anchor" href="#开启函数" aria-label="Permalink to &quot;开启函数&quot;">​</a></h3><p>点击【软件商店】-【已安装】，找到PHP，然后点击【设置】-【禁用函数】，【删除】 putenv、proc_open。<br><img src="'+l+'" alt=""></p><h2 id="站点部署" tabindex="-1">站点部署 <a class="header-anchor" href="#站点部署" aria-label="Permalink to &quot;站点部署&quot;">​</a></h2><h3 id="上传代码" tabindex="-1">上传代码 <a class="header-anchor" href="#上传代码" aria-label="Permalink to &quot;上传代码&quot;">​</a></h3><p>上传（git、ftp）代码到宝塔面板/www/wwwroot目录。 <img src="'+h+'" alt=""></p><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><p>安装php依赖（如果未上传依赖vendor文件夹）。 <img src="'+n+'" alt=""></p><h3 id="网站设置" tabindex="-1">网站设置 <a class="header-anchor" href="#网站设置" aria-label="Permalink to &quot;网站设置&quot;">​</a></h3><p>设置网站运行目录和伪静态。 <img src="'+d+'" alt=""><img src="'+p+'" alt=""></p><h3 id="目录权限" tabindex="-1">目录权限 <a class="header-anchor" href="#目录权限" aria-label="Permalink to &quot;目录权限&quot;">​</a></h3><p>设置网站runtime和storage目录读写权限。 <img src="'+c+'" alt=""><img src="'+_+'" alt=""></p><h3 id="导入数据库" tabindex="-1">导入数据库 <a class="header-anchor" href="#导入数据库" aria-label="Permalink to &quot;导入数据库&quot;">​</a></h3><p>数据库文件：private/yyladmin.sql</p><h3 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to &quot;修改配置&quot;">​</a></h3><p>把.env.example复制后重命名成.env环境变量文件修改里面配置</p><img src="'+m+'" alt=""><h3 id="部署成功" tabindex="-1">部署成功 <a class="header-anchor" href="#部署成功" aria-label="Permalink to &quot;部署成功&quot;">​</a></h3><p>出现下图提示说明已部署成功。 <img src="'+u+'" alt=""></p>',28),f=[q];function P(g,x,k,v,y,w){return t(),e("div",null,f)}const A=a(b,[["render",P]]);export{T as __pageData,A as default};
