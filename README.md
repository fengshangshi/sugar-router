# sugar-router
## 如何使用
### 引用

```
const Router = require('sugar-router');
```

### 实例化
实例化时，必须传入路径参数。

```
const router = new Router('/path/to');
```

### 属性

* name - 跟进传入的path参数的签名，方便后续查询，16位。
* rawPath - 保存原始路径
* preProcessor - 前置处理器列表，设置和读取请使用下面对应的API
* postProcessor - 后置处理器列表，设置和读取请使用下面对应的API

## API
### setPreProcessor(processor)
保存前置处理器。参数说明：
* processor 为Function时，直接保存到前置处理器列表
* processor 为Array时，批量完成保存

### setPostProcessor(processor)
保存后置处理器。参数说明参考setPreProcessor方法。

### setProcessor(processor)
同时设置前置/后置处理器，参数说明参考setPreProcessor方法。

### getPreProcessor()
返回前置处理器列表

### getPostProcessor()
返回后置处理器列表

### getProcessor()
同时返回前置/后置处理器。

```
let processor = router.getProcessor();

/*
{
	preProcessor: [前置处理器列表],
	postProcessor: [后置处理器列表],
}
*/
```
