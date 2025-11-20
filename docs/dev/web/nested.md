# 多级目录

## 多级目录(嵌套路由)

如果你的路由是多级目录，有三级路由嵌套的情况下，不要忘记还要手动在二级目录的根文件下添加一个router-view：

```vue
 <router-view />
```

router-view文件内容：

```vue
<template>
  <router-view />
</template>

<script>
export default {
  name: 'Menu2',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {
  }
}
</script>
```

原则上有多少级路由嵌套就需要多少个router-view：

```vue
 <router-view />
```

## 目录结构 router-view

![目录结构](/image/dev/nested-catelog.jpg)
![router-view](/image/dev/nested-routerview.jpg)

## 菜单管理

目录的组件路径填写 router-view 文件路径
![router-view文件路径](/image/dev/nested-routerfile.jpg)

## 效果预览

![效果预览](/image/dev/nested-preview.jpg)
