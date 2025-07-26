# 多语言、国际化

## 后端

php：[ThinkPHP8 多语言](https://doc.thinkphp.cn/v8_0/lang.html)

### 语言包

app/lang/zh-cn.php

```php
'会员管理' => '会员管理'
```

app/lang/en.php

```php
'会员管理' => 'Member'
```

### 使用

```php
lang('会员管理');
```

### 配置

.env

```txt
[LANG]
# 默认语言：
default_lang = zh-cn
```

## 前端

vue：[Vue I18n](https://vue-i18n.intlify.dev/)

### 语言包

src/lang/package/zh-cn.json

```json
  会员管理: "会员管理"
```

src/lang/package/en.json

```json
  会员管理: "Member"
```

### 使用

```js
import i18n from "@/lang/index";
i18n.global.t("会员管理");
```

```vue
<template>
  <el-text>{{ $t("会员管理") }}</el-text>
  <el-form-item :label="$t("会员管理")">
    <el-input v-model="input" />
  </el-form-item>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      input: "",
    };
  },
  created() {
    this.name = this.$t("会员管理");
  },
};
</script>
```

### 配置

src/settings.js

```js
language: 'zh-cn',
```

### 切换

后端会根据前端请求参数或请求头部的语言变量自动侦测切换语言  
src/utils/request.js

```js
// 设置语言
if (tokenType === "header") {
  config.headers["think-lang"] = language;
} else {
  config.params.lang = language;
}
```
