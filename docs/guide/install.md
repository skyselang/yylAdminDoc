# 安装

## 环境要求

- PHP >= 8.2  
  安装 fileinfo、redis 扩展  
  开启 putenv、proc_open 函数
- Composer >= 2.5  
- MySQL >= 5.5
- Redis >= 5.0
- Node >= 20.0
- Pnpm >= 10.0
- Git >= 2.0

::: warning
Node 版本过低或过高可能无法安装，你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/creationix/nvm) 进行 Node 版本切换。  
后端项目 runtime、public/storage 文件夹需要读写权限，否则无法运行和上传文件。
:::

## 安装后端

### 克隆项目
```bash
git clone https://gitee.com/skyselang/yylAdmin.git
```
### 进入项目目录
```bash
cd yylAdmin
```
### 安装依赖
```bash
composer install
```
### 导入数据库
```bash
数据库文件：private/database/yyladmin.sql
数据库字符集：utf8mb4
数据库排序规则：utf8mb4_general_ci
```
### 修改配置
```bash
复制.env.example后重命名成.env环境变量文件修改里面配置
```
### 环境配置（phpStudy）
```bash
根据你的实际环境软件配置
域名：localhost
端口：9526
根目录：yylAdmin/public
PHP版本：8.2.9
```
### 设置伪静态
#### Nginx
```bash
location / {
    if (!-e $request_filename){
        rewrite  ^(.*)$  /index.php?s=$1  last;  break;
    }
}
```
#### Apache
- httpd.conf 配置文件中加载 mod_rewrite.so 模块
- AllowOverride None 将 None 改为 All
```bash
<IfModule mod_rewrite.c>
  Options +FollowSymlinks -Multiviews
  RewriteEngine On

  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]
</IfModule>
```
::: warning
不设置伪静态接口文档无法访问。  
:::

## 安装前端

### 克隆项目
```bash
git clone https://gitee.com/skyselang/yylAdminWeb.git
```
### 进入项目目录
```bash
cd yylAdminWeb
```
### 设置 pnpm 镜像
```bash
pnpm config set registry https://registry.npmmirror.com
```
### 安装依赖
```bash
pnpm install
```
> 也可以使用 npm、cnpm、yarn
### 修改配置
```bash
复制.env.xxx后重命名成.env.xxx.local环境变量文件修改里面配置
```
### 本地开发 启动项目
```bash
pnpm run dev
```
### 检查代码错误 eslint
```bash
pnpm run lint
```
### 修复代码错误 prettier
```bash
pnpm run format
```
### 打包测试环境
```bash
pnpm run build:stage
```
### 打包正式环境
```bash
pnpm run build:prod
```
### 打包测试后预览
```bash
pnpm run preview:stage
```
### 打包正式后预览
```bash
pnpm run preview:prod
```

## 访问后台

地址：[http://localhost:9527](http://localhost:9527){target="_self"}  
账号：yyladmin  
密码：123456  
超管：skyselang  
密码：123456
