# vite 代理

如果本地开发出现跨域问题也可以设置 vite 代理，把接口请求转发到后端项目。

## 设置环境变量

在开发环境变量文件中设置 vite 代理即可。

.env.development.local

```txt{14-15}
# 开发环境
NODE_ENV = 'development'

# 接口地址 baseURL
VITE_APP_BASE_URL = 'http://localhost:9526'
# 公共基础路径 base
VITE_APP_BASE = '/'
# 输出目录 outDir
VITE_APP_OUT_DIR = 'dist'
# 本地存储前缀 storePrefix
VITE_APP_STORE_PREFIX = 'admin_'

# vite 代理
VITE_APP_BASE_URL = '/devapi'
VITE_APP_VITE_TARGET = 'http://localhost:9526'
```
