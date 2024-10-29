# npm 镜像

npm（Node Package Manager）国内镜像是指在国内设置的 npm 仓库镜像，用于加速 npm 在国内的依赖包下载速度，提高开发效率。

## npm 镜像

### 阿里云

官方地址：[http://www.npmmirror.com](http://www.npmmirror.com)  
配置命令：

```
npm config set registry https://registry.npmmirror.com
```

### 腾讯云

官方地址：[https://mirrors.cloud.tencent.com](https://mirrors.cloud.tencent.com/help/npm.html)  
配置命令：

```
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

### 华为云

官方地址：[https://mirrors.huaweicloud.com](https://mirrors.huaweicloud.com/mirrorDetail/5ea0f1e03fdb11a72fd319b2?mirrorName=npm&catalog=language)  
配置命令：

```
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
```

## 配置方法

### 全局配置

使用 npm config set registry 命令来全局配置 npm 镜像源，例如：

```
npm config set registry https://registry.npmmirror.com/
```

这种配置方式会改变全局的 npm 配置，影响所有 npm 命令的执行。

### 临时配置

可以在命令行中通过添加--registry 参数来临时指定使用的镜像源，例如：

```
npm install package-name --registry=https://registry.npmmirror.com/
```

这种配置方式只会在本次命令执行时生效，不会改变全局配置。

### nrm 配置

[nrm](https://github.com/Pana/nrm)（npm Registry Manager）是一个 npm 源管理器，允许开发者快速地在不同的 npm 源之间切换。  
可以通过安装 nrm 并使用其提供的命令来查看、切换和测试 npm 源。

安装 nrm：

```bash
npm install -g nrm
```

查看可用的 npm 源：

```bash
nrm ls
```

切换到某个 npm 源：（例如 taobao）

```bash
nrm use taobao
```

测试 npm 源的速度：

```bash
nrm test
```

## 注意事项

镜像源的稳定性：不同镜像源的稳定性和同步速度可能有所不同，建议根据实际情况选择。

依赖包的更新：由于镜像服务会缓存依赖包数据，因此可能存在一定的延迟。在需要下载最新版本的依赖包时，可能需要切换到 npm 官方源。

配置命令的正确性：在配置镜像时，需要确保命令的正确性，特别是镜像地址和配置参数的正确性。

npm 国内镜像可以显著提高国内开发者在使用 npm 时的下载速度和开发效率。建议根据实际情况选择合适的镜像源，并按照正确的配置方法进行配置。

## 官方源

官方地址：[https://www.npmjs.com](https://www.npmjs.com)  
官方仓库：[https://registry.npmjs.org](https://registry.npmjs.org)

要将 npm 恢复到默认的镜像源，你可以使用以下命令：

```bash
npm config set registry https://registry.npmjs.org/
```
