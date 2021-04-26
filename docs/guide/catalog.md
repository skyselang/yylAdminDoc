---
icon: creative
title: 目录
---

## yylAdmin

```bash
yylAdmin
├── app                        # 应用（核心目录）
│   │── admin                  # 后台接口
│   |   │── controller         # 控制器（请求参数）
│   |   │── middleware         # 中间件（拦截或过滤请求）
│   │── common                 # 公共（核心）
│   |   │── cache              # 缓存
│   |   │── controller         # 控制器
│   |   │── middleware         # 中间件
│   |   │── model              # 模型
│   |   │── service            # 业务逻辑
│   |   │── utils              # 工具类
│   |   │── validate           # 验证器（验证参数）
│   └── index                  # 前台接口
│   |   │── controller         # 控制器（请求参数）
│   |   │── middleware         # 中间件（拦截或过滤请求）
│   |   │── service            # 业务逻辑
│   ...
├── config                     # 配置目录（admin、index，其它为tp配置）
├── extend                     # 扩展类库
├── public                     # 对外访问目录
│   │── private                # 数据库文件在里面
│   │── static                 # 静态资源目录
│   │── storage                # 上传目录（读写权限）
│   │── .htaccess              # apache重写文件
│   │── index.php              # 入口文件
│   └── nginx.htaccess         # nginx重写文件
│   ...                 
├── route                      # 路由（没有用到路由）
├── runtime                    # 运行时目录（读写权限）
├── vendor                     # Composer类库目录
├── .env.example               # 环境变量示例文件，重命名.env后使用
...
# 更多请参考thinkphp6目录结构
```

## yylAdminWeb

```bash
yylAdminWeb
├── build                      # 构建相关
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求接口
│   ├── assets                 # 主题字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局filter
│   ├── layout                 # 全局layout
│   ├── router                 # 路由
│   ├── store                  # 全局store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件加载组件初始化等
│   ├── permission.js          # 权限管理
│   └── setting.js             # 基础设置
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint配置项
├── package.json               # package.json
├── postcss.config.js          # postcss配置
└── vue.config.js              # vue-cli配置
...
```
