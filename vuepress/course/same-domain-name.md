---
icon: blog
title: yylAdmin前后端部署在同一域名下
---

### 设置前端环境接口地址
.env.production
<img :src="$withBase('/image/course/same-domain-name/1-env-prod.png')" alt="">

### 配置路径和打包目录、打包
.vue.config.js
<img :src="$withBase('/image/course/same-domain-name/2-vue-config-js.png')" alt="">

### 把打包后的目录复制到yylAdmin的public文件夹下
yylAdmin/public/admin
<img :src="$withBase('/image/course/same-domain-name/3-copy-yyladmin-public.png')" alt="">

### 在本地测试一下是否能访问
http://localhost:9526/admin/
<img :src="$withBase('/image/course/same-domain-name/4-localhost-open.png')" alt="">

### 把yylAdmin上传到服务器上、访问
你的域名/admin/

<img :src="$withBase('/image/course/same-domain-name/5-pro-open.png')" alt="">