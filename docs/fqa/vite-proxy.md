# vite 代理

如果本地开发出现跨域问题也可以设置 vite 代理，把接口请求转发到后端项目。

## 设置环境变量

在环境变量文件中接口地址，比如：/devapi

.env.development.local

```txt
# 接口地址 baseURL
VITE_APP_BASE_URL = '/devapi'
# 公共基础路径 base
VITE_APP_BASE = '/'
# 输出目录 outDir
VITE_APP_OUT_DIR = 'dist'
# 本地存储前缀 storePrefix
VITE_APP_STORE_PREFIX = 'admin_'
```

## 配置代理

在 vite 配置文件中的 server 中增加 proxy。  
target 是后端项目的地址，changeOrigin 表示是否跨域，pathRewrite 是路径重写。

vite.config.js

```js
server: {
	host: '0.0.0.0',
	port: 9527,
	open: true,
	proxy: {
		'/devapi': {
			target: 'http://192.168.6.24:9526',
			changeOrigin: true,
			rewrite: (path) => path.replace(/^\/devapi/, '')
		}
	}
}
```
