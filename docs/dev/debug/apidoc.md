# 接口文档

## 查看错误

接口文档有时候不会显示具体错误原因，可以通过浏览器的开发者工具查看。
<img src="/image/dev/debug-apidoc1.jpg" alt="查看错误提示">

也可以右击 在新标签中打开 查看。
<img src="/image/dev/debug-apidoc2.jpg" alt="在新标签中打开">
<img src="/image/dev/debug-apidoc3.jpg" alt="在新标签中打开">

## 修复错误
根据错误提示修复；  
::: warning
需要设置伪静态和开启tp路由，否则接口文档无法访问  
:::

一般错误：
- 接口文档打不开404，一般是伪静态没有设置
- 没有引入 Apidoc，但又使用了 Apidoc 注释
- Apidoc 语法错误，双引号、括号等，嵌套的时候要注意
- Apidoc ref的方法不存在，注意方法是否存在、路径、大小写等
- ...
