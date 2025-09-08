# nginx 反向代理

如果前后端分开部署出现跨域问题也可以设置 nginx 反向代理，把接口请求转发到后端项目。

## 设置环境变量

在正式环境变量文件中设置 nginx 反向代理。

.env.production.local

```txt{18-19}
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

#### 设置后端项目 nginx

```nginx
# 后端项目 nginx 配置文件
server {
    listen 8080; # 增加监听端口8080
    server_name api.yyladmin.top 127.0.0.1; # 增加服务名称127.0.0.1
}
```

一些设置可能影响代理；比如宝塔面板在项目 SSl 中开启了强制 HTTPS，  
需要修改一下重定向逻辑：如果 host 是 127.0.0.1，则不重定向。

```nginx{10-13}
# 后端项目 nginx 配置文件
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

#### 设置前端项目 nginx

```nginx{3-9}
# 前端项目 nginx 配置文件
server {
    # 反向代理配置
    location /prodapi/ {
        # 将 http://127.0.0.1:8080 替换为您的后端服务名称和端口，并注意保留后面的斜杠 /
        proxy_pass http://127.0.0.1:8080/;
        # 设置 X-Real-IP 为客户端真实 IP
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

#### 设置后端环境变量文件

```txt{5-8}
# .env 后端项目环境变量文件
[APP]
# 默认时区：Asia/Shanghai（东八区北京时间）
DEFAULT_TIMEZONE = Asia/Shanghai
# 代理服务器IP
PROXY_SERVER_IP = 127.0.0.1
# 代理接口地址：替换为您的后端接口地址
PROXY_API_URL = https://api.yyladmin.top
```

### 前后端不同机器部署

如果前后端部署在不同机器上，转发请求到后端接口地址。

#### 设置前端项目 nginx

```nginx
# 前端项目 nginx 配置文件
server {
    # 反向代理配置
    location /prodapi/ {
        # 将 https://api.yyladmin.top 替换为您的后端接口地址，并注意保留后面的斜杠 /
        proxy_pass https://api.yyladmin.top/;
        # 设置 X-Real-IP 为客户端真实 IP
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

#### 设置后端环境变量文件

```txt{5-8}
# .env 后端项目环境变量文件
[APP]
# 默认时区：Asia/Shanghai（东八区北京时间）
DEFAULT_TIMEZONE = Asia/Shanghai
# 代理服务器IP：替换为您的后端接口IP
PROXY_SERVER_IP = 115.190.86.236
# 代理接口地址：替换为您的后端接口地址
PROXY_API_URL = https://api.yyladmin.top
```

## 注意

::: warning
设置 nginx 反向代理配置后，需要重载配置使其生效。  
代理转发后，会加长接口请求路径，接口响应时间可能会有所增加。  
代理转发后，可能无法获取客户端的一些真实请求信息，可能会引发其它问题。  
所以不建议使用 nginx 代理。
:::
