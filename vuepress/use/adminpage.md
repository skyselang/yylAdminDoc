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

### 重新登录刷新权限

<img :src="$withBase('/image/use/adminweblogout.jpg')" alt="重新登录刷新权限">

> 侧边栏不会实时更新，需要重新登录拉取最新权限才会显示出来，
> 如果没显示出来请检前面步骤查看是否已分配权限，roles和菜单链接是否一致等
