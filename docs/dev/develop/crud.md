# 接口生成器crud

## 生成接口代码

::: warning 注意
确保站点目录有写入权限
:::

后台接口代码可以通过接口生成器直接生成。  

功能由系统配置+模板+可视化页面配置来实现。  
为了灵活适应各种项目结构与实现方式，需做好系统配置与模板编写。  
接口生成器功能使用的是 [Apidoc](https://gitee.com/hg-code/apidoc-php)。文档 [接口生成器](https://docs.apidoc.icu/use/function/generator.html)。

## 开启接口生成器配置  

.env

```txt
# 是否开启接口生成器
GENERATOR_ENABLE = true
```

## 填写接口生成参数

![接口生成参数截图1](/image/dev/fastcrud1.png)
![接口生成参数截图2](/image/dev/fastcrud2.png)

## 添加接口菜单信息

![添加接口菜单截图](/image/dev/fastcrud3.png)

## 刷新接口文档调试接口

![刷新接口文档截图](/image/dev/fastcrud4.png)

## 接口代码和数据表已生成

![生成的接口代码截图](/image/dev/fastcrud5.png)
![生成的数据表截图](/image/dev/fastcrud6.png)

然后根据自己的业务逻辑修改接口代码和数据表等。
