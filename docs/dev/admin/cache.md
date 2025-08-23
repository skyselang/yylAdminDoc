# 缓存

系统缓存分为：业务缓存类，通用缓存类，ThinkPHP 缓存类。

## 业务缓存类

业务：根据业务功能添加缓存类。  
例子：内容管理 app\common\cache\content\ContentCache，内容缓存操作调用此类。  
系统提供了缓存基类 app\common\cache\BaseCache，业务缓存类继承基类即可。

```php
<?php
namespace app\common\cache\content;
use app\common\cache\BaseCache;
/**
 * 内容管理缓存
 */
class ContentCache extends BaseCache
{
    // 缓存标签
    public $tag = 'content';

    // 缓存前缀
    protected $prefix = 'content:';

    // 缓存有效时间（秒，0永久）
    protected $expire = 43200;

    // 构造函数
    function __construct()
    {
        $this->tag($this->tag);
        $this->prefix($this->prefix);
        $this->expire($this->expire);
    }
}
```

## 通用缓存类

app\common\cache\Cache; 用法和 ThinkPHP 缓存一致。

## ThinkPHP 缓存类

think\facade\Cache。

## 允许清除缓存

清除缓存分为：允许清除缓存和不允许清除缓存。  
允许清除缓存是指业务缓存类和通用缓存类 allowClear 属性设置为 true；  
不允许清除缓存是指业务缓存类和通用缓存类 allowClear 属性设置为 false，和 ThinkPHP 缓存；  
调用清除缓存接口只会清除允许清除的缓存，不允许被清除和 ThinkPHP 缓存不会被清除。

最终都是调用 ThinkPHP 缓存，只不过是用了缓存标签 tag 来区分是否允许清除缓存。

缓存基类的 allowClear 属性默认是开启的，如果希望调用清除缓存接口时不被清除，可以在继承缓存基类时将此属性设置为 false。

```php
<?php
namespace app\common\cache\utils;
use app\common\cache\BaseCache;
/**
 * 验证码缓存
 */
class CaptchaCache extends BaseCache
{
    /**
     * 缓存标签
     * @var string
     */
    public $tag = 'captcha';
    /**
     * 缓存前缀
     * @var string
     */
    protected $prefix = 'captcha:';
    /**
     * 缓存有效时间（秒，0永久）
     * @var int
     */
    protected $expire = 180;
    /**
     * 是否允许清除缓存（调用系统清除缓存方法时）
     * @var bool
     */
    public $allowClear = false;
    /**
     * 构造函数
     * @return void
     */
    function __construct()
    {
        $this->tag($this->tag);
        $this->prefix($this->prefix);
        $this->expire($this->expire);
        $this->allowClear($this->allowClear);
    }
```

通用缓存类可以在实例化时 allowClear 参数设置为 false

```php
use app\common\cache\Cache;

$cache = new Cache(false);
```

## 清除所有缓存

```php
use think\facade\Cache;
// 清空缓存
Cache::clear();
```

## 注意

如果缓存类型和队列驱动类型都使用了 redis，请不要使用相同 db。否则清除缓存可能使队列丢失。
