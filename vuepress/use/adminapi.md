---
icon: edit
title: 添加后台接口
---

yylAdmin

### 添加接口代码

```bash
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
```

![添加接口代码](https://images.gitee.com/uploads/images/2021/0119/154801_d0c15bdc_1051221.png)
> 这一步不是必须的，如果是仅仅用来设置权限控制前端显示可直接下一步，参考系统管理->地图坐标拾取，没有接口代码，只有菜单信息

### 添加菜单信息

![添加菜单信息](https://images.gitee.com/uploads/images/2021/0119/153318_c8e9efd7_1051221.png)
> 如果有对应的接口，菜单链接必须严格按照 应用/控制器/操作 格式填写，区分大小写

### 分配相应权限

![分配相应权限](https://images.gitee.com/uploads/images/2021/0119/150220_43634569_1051221.png)
> 如果是系统管理员则拥有所有权限，无需分配
