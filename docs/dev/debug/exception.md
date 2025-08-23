# 异常处理

## 抛出异常

通过公共方法 exception() 抛出异常

```php
exception($msg, $code);
```

此方法抛出异常，系统不会记录错误日志，主要用于业务逻辑错误，接口请求后有错误立即返回。  
定时任务等异步执行需要记录错误日志请使用 ThinkPHP 自带异常类抛出异常。

```php
throw new \think\Exception('异常消息', 10006);
```

## 错误返回

调试的时候使用  
通过公共方法 error_e($data = [], $msg = '', $code = 400) 返回错误信息

```php
error_e($data);
```

如果是在控制器返回可以使用公共方法 error($msg = '', $data = [], $code = 400)

```php
return error('验证码错误');
```
