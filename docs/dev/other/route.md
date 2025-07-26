# 路由

## 路由方式

系统支持两种路由方式，后端动态路由和前端静态路由。  
后端动态路由：路由配置由后端返回动态生成；路由在后台菜单管理维护。  
前端静态路由：路由配置由前端配置文件生成；适用于前端完全掌控路由配置的场景，尤其是权限固定的管理后台，无需依赖后端动态路由。

## 前端静态路由

### 开启路由

src/settings.js

```js
frontRouter: true; // 是否开启前端路由，true前端静态路由，false后端动态路由
```

### 路由配置

在 src/router/modules/ 下根据路由配置项配置路由文件。  
在 src/router/front.js 引入配置路由文件。

```js
/**
 * 前端路由
 * 在 src/settings 开启前端路由配置 frontRouter:true，开启后由前端维护路由
 * 在 src/router/modules/ 下根据路由配置项配置路由文件
 * 在此引入配置路由文件
 */
import member from '@/router/modules/member'
import content from '@/router/modules/content'
import file from '@/router/modules/file'
import log from '@/router/modules/log'
import setting from '@/router/modules/setting'
import system from '@/router/modules/system'

const frontRoutes = [member, content, file, log, setting, system]

export default frontRoutes
```

### 菜单管理

开启前端静态路由后，菜单仅是用作权限验证，所以添加菜单的时候只需填写菜单名称和菜单链接（权限标识）。
