---
icon: edit
title: 添加后台页面
---

yylAdminWeb

### 新建接口文件

src/api/member.js
![](https://images.gitee.com/uploads/images/2021/0119/155256_a80c5e34_1051221.png)
> 注意接口函数的url参数值：/菜单链接

### 新建页面文件

src/views/member/member.vue
![](https://images.gitee.com/uploads/images/2021/0119/155356_ff92fc06_1051221.png)

### 添加路由信息

src/router/index.js
![](https://images.gitee.com/uploads/images/2021/0119/155501_58083487_1051221.png)
> 路由配置的roles要与菜单链接一致

### 重新登录刷新权限

![](https://images.gitee.com/uploads/images/2021/0119/155659_f0b8ef56_1051221.png)
![](https://images.gitee.com/uploads/images/2021/0119/155737_4b8f1ae8_1051221.png)
> 侧边栏不会实时更新，需要重新登录拉取最新权限才会显示出来，
> 如果没显示出来请检前面步骤查看是否已分配权限，roles和菜单链接是否一致等
