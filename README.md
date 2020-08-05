# 小程序直播插件-使用者小程序demo

## ！！重要：使用步骤

1. 使用者小程序导出功能

[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html#%E5%AF%BC%E5%87%BA%E5%88%B0%E6%8F%92%E4%BB%B6)

```
// 使用者小程序
module.exports = {
  login() {
    return 'userID';//用户唯一标识
  },
  gotoHome:()=>{},//跳转到首页
  gotoProductDetail:(productId)=>{},//跳转到商品详情页
  goDetails:(id)=>{},//跳转到直播详情页
  shareInDetails:(id) => {//分享直播间
    return {
      //分享配置
    }
  },
}
```

- [开发版小程序引用开发版插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/development.html)

```
//开发版1.0.5
"plugins": {
    "myPlugin": {
      "version": "dev-c42dd8a2eb77f9db8366afc22a9871a1",
      "provider": "wx0ed3aa828dd719ef"
    }
}
```

**注意**

- 开发者工具某些版本不支持使用者小程序配置export，如果报错，用真机调试

## 开放功能

### 可用页面
- 直播列表：`list-page`
- 详情页：`details-page`

**参数**

```
{
  id:'',//id
}
```

### 可用组件

暂无

### 可用功能

暂无

### 基础库版本兼容

微信小程序：最低兼容版本为2.1.0

-------------------
![链接](./example.jpeg)



