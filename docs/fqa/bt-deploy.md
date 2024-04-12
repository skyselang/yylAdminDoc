# 宝塔面板部署

强烈正式环境推荐使用宝塔面板部署项目，让部署更方便，减少部署出现问题。

## 环境安装

### 安装软件
点击【软件商店】-【运行环境】，安装Nginx(>=1.20)、MySQL(>=5.7)、PHP(>=8.0)、node(>=18.12)、npm(>=8.19)。
>安装软件的时候，使用极速安装，避免出现一些环境引起的问题。 

<img src="/image/fqa/bt-deploy/bt-env-1.png" alt="">
<img src="/image/fqa/bt-deploy/bt-env-2.png" alt="">

### 安装扩展
点击【软件商店】-【已安装】，找到PHP，然后点击【设置】-【安装扩展】，【安装】fileinfo扩展，【安装】redis扩展。  
<img src="/image/fqa/bt-deploy/bt-env-3.png" alt="">

### 开启函数
点击【软件商店】-【已安装】，找到PHP，然后点击【设置】-【禁用函数】，【删除】 putenv、proc_open。  
<img src="/image/fqa/bt-deploy/bt-env-4.png" alt="">

## 站点部署
### 上传代码
上传（git、ftp）代码到宝塔面板/www/wwwroot目录。
<img src="/image/fqa/bt-deploy/bt-dep-upload-code.jpg" alt="">

### 安装依赖
安装php依赖（如果未上传依赖vendor文件夹）。
<img src="/image/fqa/bt-deploy/bt-dep-composer-install.jpg" alt="">

### 网站设置
设置网站运行目录和伪静态。
<img src="/image/fqa/bt-deploy/bt-dep-set-run-cate.jpg" alt="">
<img src="/image/fqa/bt-deploy/bt-dep-set-pseudo-static.jpg" alt="">

### 目录权限
设置网站runtime和storage目录读写权限。
<img src="/image/fqa/bt-deploy/bt-dep-set-runtime.jpg" alt="">
<img src="/image/fqa/bt-deploy/bt-dep-set-storage.jpg" alt="">

### 导入数据库
数据库文件：private/yyladmin.sql

### 修改配置
把.env.example复制后重命名成.env环境变量文件修改里面配置  

<img src="/image/fqa/bt-deploy/bt-dep-edit-config.jpg" alt="">

### 部署成功
出现下图提示说明已部署成功。
<img src="/image/fqa/bt-deploy/bt-dep-deploy-success.jpg" alt="">
