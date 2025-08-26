# 定时任务

定时任务分为 Timer 和 Crontab

## Timer

秒级定时器，按时间间隔执行任务，可以精确到 0.001，即精确到毫秒级别。

### 添加定时操作

app\command\Timer.php  
在 execute 方法中添加需要定时执行的操作，可以直接复制已有的定时器代码，然后定义好名称和执行间隔，以及需要具体执行的操作

```php
// app\command\Timer.php
public function execute()
{
    $worker2 = new Worker();
    $worker2->onWorkerStart = function () {
        $timer_name     = ''; // 名称，用于调试输出显示
        $timer_interval = 10; // 多长时间执行一次，单位秒
        $timer_msg      = $timer_interval . ' ' . $timer_name;
        $this->output($timer_msg, 'start');
        $this->timer[] = WTimer::add($timer_interval, function () use ($timer_msg) {
            $this->output($timer_msg, 'run');
            // 这里执行具体的任务
        });
    };
}
```

### 开启定时任务

#### 调试方式开启

```bash
php think timer
```

> debug 模式，开发调试使用

#### 守护进程方式开启

```bash
php think timer -m d
```

> daemon 模式，正式部署使用

#### 查看定时任务参数

```bash
php think timer --help
```

```bash
Usage:
  timer [options] [--] [<action>]

Arguments:
  action                     start|stop|restart|reload|status|connections [default: "start"]

Options:
  -m, --mode[=MODE]          守护进程方式启动（-m d）
  -h, --help                 Display this help message
  -V, --version              Display this console version
  -q, --quiet                Do not output any message
      --ansi                 Force ANSI output
      --no-ansi              Disable ANSI output
  -n, --no-interaction       Do not ask any interactive question
  -v|vv|vvv, --verbose       Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
```

## Crontab

类似 linux 的 crontab，按照 cron 表达式执行任务，支持秒级别定时

### 添加定时操作

app\command\Crontab.php  
在 execute 方法中添加需要定时执行的操作，可以直接复制已有的定时器代码，然后定义好名称和 cron 表达式，以及需要具体执行的操作

```php
// app\command\Crontab.php
public function execute()
{
    $worker2 = new Worker();
    $worker2->onWorkerStart = function () {
        $crontab_name = ''; // 名称，用于调试输出显示
        $crontab_rule = '0 1 * * *'; // cron表达式：每天凌晨1点整执行
        $crontab_msg  = $crontab_rule . ' ' . $crontab_name;
        $this->output($crontab_msg, 'start');
        $this->crontab[] = new WCrontab($crontab_rule, function () use ($crontab_msg) {
            $this->output($crontab_msg, 'run');
            // 这里执行具体的任务
        });
    };
}
```

### cron 时间说明

```txt
0   1   2   3   4   5
|   |   |   |   |   |
|   |   |   |   |   +------ day of week (0 - 6) (Sunday=0)
|   |   |   |   +------ month (1 - 12)
|   |   |   +-------- day of month (1 - 31)
|   |   +---------- hour (0 - 23)
|   +------------ min (0 - 59)
+-------------- sec (0-59)[可省略，如果没有0位,则最小时间粒度是分钟]
```

### 开启定时任务

#### 调试方式开启

```bash
php think crontab
```

> debug 模式，开发调试使用

#### 守护进程方式开启

```bash
php think crontab -m d
```

> daemon 模式，正式部署使用

#### 查看定时任务参数

```bash
php think crontab --help
```

```bash
Usage:
  crontab [options] [--] [<action>]

Arguments:
  action                     start|stop|restart|reload|status|connections [default: "start"]

Options:
  -m, --mode[=MODE]          守护进程方式启动（-m d）
  -h, --help                 Display this help message
  -V, --version              Display this console version
  -q, --quiet                Do not output any message
      --ansi                 Force ANSI output
      --no-ansi              Disable ANSI output
  -n, --no-interaction       Do not ask any interactive question
  -v|vv|vvv, --verbose       Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
```

## 注意

::: warning
确保执行命令的用户有足够权限或添加 sudo  
任务比较耗时和占用内存大的请配置 PHP 运行内存大小、数据库断线重连、Redis 长连接等
:::
