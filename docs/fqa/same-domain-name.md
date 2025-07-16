# 前后端部署到同一域名

前端和后端部署在同一个域名下，可以解决跨域问题，节省域名服务器，不用单独部署前端项目等；可以通过下面方法设置。
>当然前后端分开部署正常情况下也不会有跨域问题，yylAdmin已经做了跨域处理

演示：[admin](https://apiv4.yyladmin.top/admin)  

## 设置环境变量文件
/.env.production  
把 .env.production 复制后重命名为 .env.production.local  

## 设置环境变量参数
/.env.production.local  
baseURL 设置为空;  
base 设置为 /admin/ ；  
outDir 设置为 admin ;  
```
# baseURL
VITE_APP_BASE_URL = ''
# base
VITE_APP_BASE = '/admin/'
# outDir
VITE_APP_OUT_DIR = 'admin'  
```
> base、outDir 路径名称可以自定义，但是名称必须一样。  
> 比如 shop，即 base = '/shop/'，outDir = 'shop'。

## 运行打包命令 
```
pnpm run build:prod
```

## 复制打包目录
/admin  
把前面打包后生成的目录 admin 复制到后端 public 文件下
>就是把yylAdminWeb/admin文件夹复制到yylAdmin/public文件夹下：yylAdmin/public/admin

## 本地访问测试
[http://localhost:9526/admin/](http://localhost:9526/admin/){target="_self"}  
>http://localhost:9526是后端地址，/admin/ 是前面设置的 base 路径  

## 部署到服务器
把打包后的 admin 文件夹部署到服务器上后端项目的 public 文件夹下。  
输入部署后端域名，再加上 base 路径就可以访问了：你的域名/admin/。  
演示：[admin](https://apiv4.yyladmin.top/admin)  

## 测试环境  
可以根据打包环境修改对应文件，如果打包测试环境，  
就复制 .env.staging 后重命名成 .env.staging.local， 然后按照上面步骤修改  

## 其它前端
同样，可以把前端（pc、h5）等 与 后端（yylAdmin）放到同一个域名下。  

Vue Router history 设为 createWebHashHistory：[不同的历史模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)。  
本地储存（localStorage等）的键名（key）不要与其它项目冲突。  
伪静态设置。
