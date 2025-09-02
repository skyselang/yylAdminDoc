# nginx 反向代理

如果前后端分开部署出现跨域问题也可以设置 nginx 反向代理，把接口请求转发到后端项目。

## 设置环境变量

在正式环境变量文件中设置 nginx 反向代理。

.env.production.local

```txt{19}
# 正式环境


# 接口地址 baseURL
VITE_APP_BASE_URL = 'https://api.yyladmin.top'
# 公共基础路径 base
VITE_APP_BASE = '/'
# 输出目录 outDir
VITE_APP_OUT_DIR = 'dist'
# 本地存储前缀 storePrefix
VITE_APP_STORE_PREFIX = 'admin_'

# 前后端同域名部署
# VITE_APP_BASE_URL = ''
# VITE_APP_BASE = '/admin/'
# VITE_APP_OUT_DIR = 'admin'

# nginx 反向代理
VITE_APP_BASE_URL = '/prodapi'
```

## 配置反向代理

### 前后端同机器部署

如果是前后端部署在同一台机器上，可以在机器内部直接转发请求到后端服务。  
先在后端项目增加监听端口和服务名称，比如 127.0.0.1:8080，然后配置前端项目 proxy_pass。

```nginx
# 后端项目 nginx 配置文件
server {
    listen 8080; # 增加监听端口8080
    server_name api.yyladmin.top 127.0.0.1; # 增加服务名称127.0.0.1
}
```

```nginx
# 前端项目 nginx 配置文件
server {
    # 反向代理配置
    location /prodapi/ {
        # 将 http://127.0.0.1:8080 替换为您的后端服务名称和端口，并注意保留后面的斜杠 /
        proxy_pass http://127.0.0.1:8080/;
    }
}
```

其它的一些 nginx 配置可能会影响到 nginx 反向代理不生效，比如宝塔面板后端项目开启了强制 https

```nginx
# 强制 https
#HTTP_TO_HTTPS_START
set $isRedcert 1;
if ($server_port != 443) {
    set $isRedcert 2;
}
if ( $uri ~ /\.well-known/ ) {
    set $isRedcert 1;
}
if ($isRedcert != 1) {
    rewrite ^(/.*)$ https://$host$1 permanent;
}
#HTTP_TO_HTTPS_END
```

需求修改一下重定向逻辑：如果 host 是 127.0.0.1，则不重定向

```nginx{10-13}
# 强制 https
#HTTP_TO_HTTPS_START
set $isRedcert 1;
if ($server_port != 443) {
    set $isRedcert 2;
}
if ( $uri ~ /\.well-known/ ) {
    set $isRedcert 1;
}
# 如果host是127.0.0.1，则不重定向
if ($host = 127.0.0.1) {
    set $isRedcert 1;
}
if ($isRedcert != 1) {
    rewrite ^(/.*)$ https://$host$1 permanent;
}
#HTTP_TO_HTTPS_END
```

### 前后端不同机器部署

如果前后端部署在不同机器上，直接增加 proxy_pass 配置即可。

```nginx
# 前端项目 nginx 配置文件
server {
    # 反向代理配置
    location /prodapi/ {
        # 将 https://api.yyladmin.top 替换为您的后端接口地址，并注意保留后面的斜杠 /
        proxy_pass https://api.yyladmin.top/;
    }
}
```

## 注意

::: warning
因为是先请求到前端项目，然后再从前端项目转发到后端项目，所以会加长接口请求路径，接口响应时间可能会有所增加。
:::
