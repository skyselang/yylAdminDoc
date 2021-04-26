---
icon: creative
title: 安装
---

## 环境要求

- PHP >= 7.2.5  
  安装 fileinfo、redis 扩展  
  开启 putenv、proc_open 函数
- MySQL >= 5.5
- Redis
- node >= 10.15.0
- npm >= 5.6.0

## 安装后端

```bash
# 克隆项目
git clone https://gitee.com/skyselang/yylAdmin.git

# 进入项目目录
cd yylAdmin

# 设置composer
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

# 安装依赖
composer install

# 导入数据库
数据库文件：public/private/yyladmin.sql

# 修改配置
重命名.env.example成.env环境变量文件修改里面配置（或修改config文件夹里面的配置）

# 环境配置（phpStudy）
根据你的实际情况配置
域名：localhost
端口：9526
根目录：yylAdmin/public
PHP版本：7.3
伪静态Nginx：
location / {
    if (!-e $request_filename){
        rewrite  ^(.*)$  /index.php?s=$1  last;   break;
    }
}
```

## 安装前端

```bash
# 克隆项目
git clone https://gitee.com/skyselang/yylAdminWeb.git

# 进入项目目录
cd yylAdminWeb

# 使用cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装依赖
cnpm install

# 修改配置
在.env.xxx环境变量文件里面修改接口地址（后端环境配置域名端口）
VUE_APP_BASE_API = 'http://localhost:9526'

# 本地开发 启动项目
cnpm run dev

# 开发完打包正式环境
cnpm run build:prod

# 开发完打包测试环境
cnpm run build:stage
```

## 访问后台

地址：http://localhost:9527  
账号：yyladmin  
密码：123456  
管理员：skyselang  
密码：123456
