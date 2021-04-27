---
icon: edit
title: 添加后台接口
---

yylAdmin

### 添加接口代码

控制器  
app/admin/controller/Member.php  

验证器  
app/common/validate/MemberValidate.php

模型  
app/common/model/MemberModel.php

业务逻辑  
app/common/service/MemberService.php

缓存  
app/common/cache/MemberCache.php

<img :src="$withBase('/image/use/adminapi.jpg')" alt="添加接口代码">

> 这一步不是必须的，如果是仅仅用来设置权限控制前端显示可直接下一步，参考系统管理->地图坐标拾取，没有接口代码，只有菜单信息

### 添加菜单信息

<img :src="$withBase('/image/use/adminmenu.jpg')" alt="添加菜单信息">

> 如果有对应的接口，菜单链接必须严格按照 应用/控制器/操作 格式填写，区分大小写

### 分配相应权限

<img :src="$withBase('/image/use/adminrole.jpg')" alt="分配相应权限">

> 如果是系统管理员则拥有所有权限，无需分配
