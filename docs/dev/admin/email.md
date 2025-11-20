# 邮件

## PHPMailer

[PHPMailer 文档](https://gitee.com/skyselang/PHPMailer)

PHP 的经典邮件发送库  
一个功能齐全的 PHP 电子邮件创建和传输类

## 邮件服务

可以使用邮件服务商，也可以自行搭建邮件服务

### 邮件服务商

#### 个人邮件服务

QQ 邮箱，网易邮箱，新浪邮箱 等；免费使用，可用性差，容易被拦截，不支持大量发送，安全保障低。

#### 企业邮件服务

腾讯企业邮，阿里企业邮，网易企业邮 等，付费使用，专业形象、统一管理、保障数据安全和高可用性。

### 搭建邮件服务

### 宝塔邮局

可以使用宝塔面板的宝塔邮局管理器软件，免费发送邮件；演示就是使用了宝塔邮局发送邮件。

![宝塔邮局](/image/dev/email-baota.png)

## 配置账号

获取账号信息后在后台 系统设置->邮件设置 配置

![邮件设置界面](/image/dev/email-config.png)

## 发送邮件

app\common\utils\EmailUtils

根据邮件内容等信息添加发送邮件方法，比如验证码

```php
/**
 * 发送邮件验证码
 * @param string $address 收件人邮箱
 */
public static function captcha($address)
{
    $cache   = new CaptchaEmailCache();
    $captcha = $cache->get($address);
    if (empty($captcha)) {
        $captcha = mt_rand(100000, 999999);
        $subject = lang('邮箱验证码');
        $body    = lang('您的验证码为') . '：<b>' . $captcha . '</b>。';
        self::send($address, $subject, $body);
        $cache->set($address, $captcha);
    }
}
```
