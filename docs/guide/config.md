# 配置

::: warning 
因为代码更新原因，配置会有增减，请查看具体配置文件。
:::

## 后端

## admin

config/admin.php

### token_type
- 类型：string  
token方式：header、param

### token_name
- 类型：string  
token名称，前后端必须一致

### super_ids
- 类型：array  
超管用户ID，所有权限

### super_hide
- 类型：boolean 
系统超管用户是否隐藏

### super_upload_limit
- 类型：boolean  
系统超管用户上传文件大小是否不受限制

### super_api_rate
- 类型：boolean  
系统超管用户接口请求速率是否不受限制

### menu_is_unlogin
- 类型：array  
无需登录菜单url，不用登录就可以访问

### menu_is_unauth
- 类型：array  
无需权限菜单url，登录后不用分配权限也可以访问

### menu_is_unrate
- 类型：array  
无需限率菜单url，不受接口设置的接口速率限制

### log_param_without
- 类型：array  
日志记录请求参数排除字段（敏感、内容多等信息）

### region_level
- integer  
地区级别：1省2市3区县4街道乡镇

## api  

config/api.php

### token_type
- 类型：string  
token方式：header、param

### token_name
- 类型：string  
token名称，前后端必须一致

### super_ids
- 类型：array  
超级会员ID，所有权限

### api_is_unlogin
- 类型：array  
无需登录接口url，不用登录就可以访问

### api_is_unrate
- 类型：array  
无需限率接口url，不受接口设置的接口速率限制

### log_param_without
- 类型：array  
日志记录请求参数排除字段（敏感、内容多等信息）

## Apidoc
config/apidoc.php  
[接口文档配置](https://docs.apidoc.icu/config/)

## ThinkPHP
config/*.php，tp配置文件  
[ThinkPHP8配置](https://doc.thinkphp.cn/v8_0/preface.html)

## 前端

src/settings.js

### systemName
- 类型：string  
默认系统名称

### pageTitle
- 类型：string  
默认页面标题

### faviconUrl
- 类型：string  
默认favicon图标

### logoUrl
- 类型：string  
默认logo图片

### sidebarLogo
- 类型：boolean  
是否在侧边栏中显示logo

### sidebarName
- 类型：boolean  
是否在侧边栏中显示系统名称

### fixedHeader
- 类型：boolean  
是否固定头部

### tagsView
- 类型：boolean  
是否显示标签栏

### layout
- 类型：string  
布局：left、top、mix

### theme
- 类型：string  
主题模式：light明亮，dark暗黑

### themeColor
- 类型：string  
主题颜色

### tokenType
- 类型：string  
token方式：header、param

### tokenName
- 类型：string  
token名称，前后端必须一致

### pageLimit
- 类型：number  
分页每页默认数量

### size
- 类型：string  
element-plus 默认 size

### language
- 类型：string  
语言：zh-cn中文，en英文

### storePrefix
- 类型：string  
本地存储前缀

### addEditDialog
- 类型：boolean  
添加修改是否弹窗方式，true对话框弹窗，false新标签页面

### frontRouter
- 类型：boolean  
是否开启前端路由，true前端静态路由，false后端动态路由
