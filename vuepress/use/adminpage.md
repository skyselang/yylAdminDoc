---
icon: edit
title: 添加后台页面
---

yylAdminWeb

### 新建接口文件

src/api/member.js

<img :src="$withBase('/image/use/adminwebapi.jpg')" alt="新建接口文件">

> 注意接口函数的url参数值：/菜单链接

### 新建页面文件

src/views/member/member.vue

<img :src="$withBase('/image/use/adminwebpage.jpg')" alt="新建页面文件">

### 添加路由信息

src/router/index.js

<img :src="$withBase('/image/use/adminwebrouter.jpg')" alt="添加路由信息">

> 路由配置的roles要与菜单链接一致
