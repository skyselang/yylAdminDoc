# 多语言

## 多语言

### 后端
php：[ThinkPHP8多语言](https://doc.thinkphp.cn/v8_0/lang.html)  
语言文件：/app/lang/

### 前端
vue：[Vue I18n](https://vue-i18n.intlify.dev/)  
语言文件：/src/lang/

### 后端语言切换  
后端会根据前端请求参数或请求头部的语言变量自动侦测切换语言  
/src/utils/request.js  
```js
// 设置语言
if (tokenType === 'header') {
    config.headers['think-lang'] = language
} else {
    config.params.lang = language
}
```

### 注意
::: warning  
后端环境变量文件.env语言设置lang.default_lang需设置为空，不然后端语言切换无法生效  
:::  
.env
```txt
[LANG]
# 默认语言：
default_lang = 
```