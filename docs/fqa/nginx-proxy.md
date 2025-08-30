# nginx 反向代理

如果前后端分开部署出现跨域问题也可以在前端项目设置 nginx 反向代理，把接口请求转发到后端项目。

::: warning 注意
因为是先请求到前端项目，然后再从前端项目转发到后端项目，所以会加长接口请求路径，接口响应时间可能会有所增加。
:::

## 设置环境变量

在环境变量文件中接口地址，比如 VITE_APP_BASE_URL = '/prodapi'

.env.xxx.local

```txt
# 接口地址 baseURL
VITE_APP_BASE_URL = '/prodapi'
# 公共基础路径 base
VITE_APP_BASE = '/'
# 输出目录 outDir
VITE_APP_OUT_DIR = 'dist'
# 本地存储前缀 storePrefix
VITE_APP_STORE_PREFIX = 'admin_'
```

## 配置反向代理

```nginx
server {
    # 其它配置

    # 反向代理配置
    location /prodapi/ {
        # 将 https://api.yyladmin.top 替换为您的后端接口地址，并注意保留后面的斜杠 /
        proxy_pass https://api.yyladmin.top/;
    }
}
```
