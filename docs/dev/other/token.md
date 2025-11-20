# Token

::: warning
可以自定义 token 的方式和名称，但前后端必须一致，否则会导致 token 接收失败。
:::

## 后端配置

.env

```bash
# admin
[ADMIN]
# token方式：header、param
TOKEN_TYPE = header
# token名称：前后端必须一致
TOKEN_NAME = AdminToken
```

## 前端配置

src/settings.js

```js
tokenType: 'header' // token方式：header请求头部，param请求参数
tokenName: 'AdminToken' // token名称，前后端必须一致
```
