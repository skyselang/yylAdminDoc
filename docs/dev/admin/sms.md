# 短信

## Easy SMS

[Easy SMS 文档](https://gitee.com/skyselang/easy-sms)

一款满足你的多种发送需求的短信发送组件

1.支持目前市面多家服务商  
2.一套写法兼容所有平台  
3.简单配置即可灵活增减服务商  
4.内置多种服务商轮询策略、支持自定义轮询策略  
5.统一的返回值格式，便于日志与监控  
6.自动轮询选择可用的服务商  
7.更多等你去发现与改进

## 配置文件

config/easysms.php

相应的账号签名模板等需要到服务商申请，然后根据文档在配置文件配置

## 发送短信

app\common\utils\SmsUtils

根据模板变量等信息添加发送短信方法，比如验证码

```php
/**
 * 发送手机验证码
 * @param string $phone 手机
 */
public static function captcha($phone)
{
    $cache   = new CaptchaSmsCache();
    $captcha = $cache->get($phone);
    if (empty($captcha)) {
        $captcha  = mt_rand(100000, 999999);
        $content  = lang('您的验证码为') . '：<b>' . $captcha . '</b>。';
        $template = ''; //模板
        $data     = ['code' => $captcha];
        self::send($phone, $content, $template, $data);
        $cache->set($phone, $captcha);
    }
}
```
