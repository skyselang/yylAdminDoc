# 目录

因为代码更新原因，目录会有所调整。

## 后端

::: warning
runtime运行目录、public/storage上传目录需要读写权限，否则无法运行和上传文件！！！  
:::

```bash
├── app                        # 应用（核心目录）
│   │── admin                  # 后台接口
│   │   │── controller         # 控制器（请求参数）
│   │   │── middleware         # 中间件（拦截或过滤请求）
│   │── api                    # 前台接口
│   │   │── controller         # 控制器（请求参数）
│   │   │── middleware         # 中间件（拦截或过滤请求）
│   │   │── service            # 业务逻辑
│   │── command                # 命令行
│   │── common                 # 公共（核心）
│   │   │── cache              # 缓存
│   │   │── controller         # 控制器
│   │   │── middleware         # 中间件
│   │   │── model              # 模型
│   │   │── service            # 业务逻辑
│   │   │── utils              # 工具类
│   │   │── validate           # 验证器（验证参数）
│   │── event                  # 事件
│   │── job                    # 队列
│   │── lang                   # 语言包
│   ...
├── config                     # 配置目录
│   │── admin                  # 后台配置  
│   │── api                    # 前台配置 
│   │── apidoc                 # 接口文档配置 
│   ...                        # 其它配置 
├── extend                     # 扩展类库
├── private                    # private目录
│   │── apidoc                 # 接口文档模板
│   │── captcha                # 验证码背景图和字体
│   │── database               # 数据库文件
│   ...
├── public                     # 对外访问目录
│   │── apidoc                 # 接口文档前端
│   │── storage                # 上传目录（读写权限）
│   │── .htaccess              # apache重写文件（伪静态）
│   │── index.php              # 入口文件
│   │── nginx.htaccess         # nginx重写文件（伪静态）
│   ...                 
├── route                      # 路由
├── runtime                    # 运行时目录（读写权限）
├── vendor                     # Composer类库目录
├── .env.example               # 环境变量示例文件，复制后重命名成.env后使用
├── ...
# 更多请参考thinkphp目录结构
```

## 前端

```bash
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   ...
├── src                        # 源代码
│   ├── api                    # 所有请求接口
│   ├── assets                 # 静态资源
│   ├── components             # 全局公用组件
│   ├── lang                   # 语言包
│   ├── layout                 # 全局layout
│   ├── router                 # 路由
│   ├── store                  # 全局状态管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件
│   ├── permission.js          # 权限管理
│   ├── setting.js             # 系统设置
│   ...
├── .env.xxx                   # 环境变量配置
├── .gitignore                 # git忽略配置
├── .prettierignore            # prettier忽略配置
├── .prettierrc.json           # prettier配置
├── eslint.config.mjs          # eslint配置
├── index.html                 # html模板
├── jsconfig.json              # jsconfig配置
├── package.json               # 依赖配置
├── uno.config.js              # unocss配置
├── vite.config.js             # vite配置
│   ...
```
