# 宝塔面板部署

强烈正式环境推荐使用宝塔面板部署项目，让部署更方便，减少部署出现问题。

## 环境安装

### 安装软件

点击【软件商店】-【运行环境】，安装Nginx(>=1.20)、MySQL(>=5.5)、PHP(>=8.0)、node(>=18.18)、npm(>=8.19)。
>安装软件的时候，使用极速安装，避免出现一些环境引起的问题。

![宝塔安装软件-界面1](/image/fqa/bt-deploy/bt-env-1.png)
![宝塔安装软件-界面2](/image/fqa/bt-deploy/bt-env-2.png)

### 安装扩展

点击【软件商店】-【已安装】，找到PHP，然后点击【设置】-【安装扩展】，【安装】fileinfo扩展，【安装】redis扩展。  
![安装PHP扩展界面](/image/fqa/bt-deploy/bt-env-3.png)

### 开启函数

点击【软件商店】-【已安装】，找到PHP，然后点击【设置】-【禁用函数】，【删除】 putenv、proc_open。  
![PHP 禁用函数设置界面](/image/fqa/bt-deploy/bt-env-4.png)

## 站点部署

### 上传代码

上传（git、ftp）代码到宝塔面板/www/wwwroot目录。
![上传代码到宝塔 wwwroot](/image/fqa/bt-deploy/bt-dep-upload-code.jpg)

### 安装依赖

安装php依赖（如果未上传依赖vendor文件夹）。
![Composer 安装依赖截图](/image/fqa/bt-deploy/bt-dep-composer-install.jpg)

### 网站设置

设置网站运行目录和伪静态。
![设置站点运行目录截图](/image/fqa/bt-deploy/bt-dep-set-run-cate.jpg)
![设置伪静态规则截图](/image/fqa/bt-deploy/bt-dep-set-pseudo-static.jpg)

### 目录权限

设置网站runtime和public/storage目录读写权限。
![设置 runtime 目录权限截图](/image/fqa/bt-deploy/bt-dep-set-runtime.jpg)
![设置 public/storage 权限截图](/image/fqa/bt-deploy/bt-dep-set-storage.jpg)

### 导入数据库

数据库文件：private/yyladmin.sql

### 修改配置

把.env.example复制后重命名成.env环境变量文件修改里面配置  

![编辑 .env 配置截图](/image/fqa/bt-deploy/bt-dep-edit-config.jpg)

### 部署成功

出现下图提示说明已部署成功。
![部署成功提示截图](/image/fqa/bt-deploy/bt-dep-deploy-success.jpg)
