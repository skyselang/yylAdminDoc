# 跨域问题

项目已经做了跨域处理，按照要求安装一般不会出现跨域问题  
如果出现跨域问题可以按以下步骤排除：

## 环境是否达到安装的环境要求
特别是 fileinfo、redis 扩展，必须安装  
Linux服务器必须开启PHP的 putenv、proc_open 函数，否则 安装依赖 composer install 的时候会报错

## 重启 WEB、PHP、MySQL 等服务
可以把Nginx、Apache、PHP、MySQL等服务重启

## 是否同为 http 或 https
前后端网站的协议需要同时为 http 或 https， 不能一个为 http，一个为 https

## token放在请求参数中
token方式  
src/settings.js
```js
tokenType: 'param' // token方式：header请求头部，param请求参数
```

## 前后端部署到同一域名
如果正式部署的时候出现跨域，可以把前后端部署到同一域名