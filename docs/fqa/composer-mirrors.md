# Composer 镜像

Composer 镜像是指在国内设置的镜像服务器，仓库镜像主要用于缓存和加速 Composer 依赖包（libraries 和 packages）的下载。

## Composer 镜像

### 阿里云

官方地址：[https://mirrors.aliyun.com/composer/](https://mirrors.aliyun.com/composer/)  
配置命令：

```bash
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

### 腾讯云

官方地址：[https://mirrors.cloud.tencent.com/composer/](https://mirrors.cloud.tencent.com/composer/)  
配置命令：

```bash
composer config -g repos.packagist composer https://mirrors.tencent.com/composer/
```

### 华为云

官方地址：[https://mirrors.huaweicloud.com/composer/](https://mirrors.huaweicloud.com/mirrorDetail/5ea0f1e03fdb11a72fd319b3?mirrorName=php&catalog=language)  
配置命令：

```bash
composer config -g repo.packagist composer https://mirrors.huaweicloud.com/repository/php/
```

### 上海交通大学

官方地址：[https://mirrors.sjtug.sjtu.edu.cn/packagist/](https://mirrors.sjtug.sjtu.edu.cn/packagist/)  
配置命令：

```bash
composer config -g repos.packagist composer https://packagist.mirrors.sjtug.sjtu.edu.cn
```

### 中国全量镜像

官方地址：[https://www.phpcomposer.com/](https://www.phpcomposer.com/)  
配置命令：

```bash
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

## 配置方法

### 全局配置

使用命令 `composer config -g repo.packagist composer` `镜像地址`，例如：

```bash
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

### 项目配置

进入你的项目的根目录（也就是 composer.json 文件所在目录），执行如下命令：

```bash
composer config repo.packagist composer https://mirrors.aliyun.com/composer/
```

上述命令将会在当前项目中的 composer.json 文件的末尾自动添加镜像的配置信息（你也可以自己手工添加）：

```bash
"repositories": {
    "packagist": {
        "type": "composer",
        "url": "https://mirrors.aliyun.com/composer/"
    }
}
```

## 注意事项

加速下载：Composer 官方仓库位于国外，国内开发者在下载依赖时可能会遇到速度慢或被网络限制的问题。使用国内镜像服务器可以提高下载速度，从而提升开发效率。

增强稳定性：使用镜像服务可以避免因网络问题导致的依赖包下载失败，安装报错等问题，保证项目的正常开发。

镜像同步：但镜像站不是 100% 同步的，更新速度也滞后官方，在需要下载最新版本的依赖包时，可以切换其它镜像站或官方源。

Composer 国内镜像可以显著提高国内开发者在使用 Composer 时的下载速度和开发效率。建议根据实际情况选择合适的镜像源，并按照正确的配置方法进行配置。

网络条件允许，请优先使用官方源。

## 官方源

官方地址：[https://getcomposer.org/](https://getcomposer.org/)  
官方仓库：[https://repo.packagist.org](https://repo.packagist.org)

如果需要解除镜像并恢复到 packagist 官方源，请执行以下命令：  

```bash
composer config -g --unset repos.packagist
```
