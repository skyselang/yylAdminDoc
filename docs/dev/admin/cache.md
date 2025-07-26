# 缓存

系统缓存分为：业务缓存类，通用缓存类，ThinkPHP缓存类。  
这样调用清除缓存接口才不会清除用户、会员token缓存。  
最终都是调用 ThinkPHP 缓存。

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
通用：app\common\cache\Cache; 用法和 ThinkPHP 缓存使用一致。  
例子：app\common\service\utils\Utils。

## ThinkPHP缓存类
直接调用 ThinkPHP 缓存类 think\facade\Cache，调用清除缓存接口将不会被清除。  
调用 think\facade\Cache::clear() 方法将清空所有缓存; 

## 注意
如果缓存类型和队列驱动类型都使用了 redis，请不要使用相同 db。否则清除缓存可能使队列丢失。
