# 小程序直播插件-使用者小程序demo

## ！！重要：使用步骤

1. 使用者小程序导出功能

[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html#%E5%AF%BC%E5%87%BA%E5%88%B0%E6%8F%92%E4%BB%B6)

```
// 插件初始化
var plugin = requirePlugin("live-plugin");
plugin.init({
  login() {
    return 'userID';//用户唯一标识
  },
  config:() => {
    // 插件参数配置
    return {
      isDev:true//true 开发环境，false 生产环境
    }
  },
  //页面跳转配置
  pages:{
    //首页
    home  :{
        url:'/pages/index/index',
        openType:'reLaunch'//"navigate" | "redirect" | "switchTab" | "reLaunch"
    },
    //直播详情页
    details  :{
        url:'/pages/details/details',
        openType:'navigate'//"navigate" | "redirect" | "switchTab" | "reLaunch"
    },
  },
  shareInDetails:(id) => {//分享直播间
    return {
      //分享配置
    }
  },
  createGoodDetailsPath(dockingCode,liveId){
    /*
    商品详情跳转url
    渲染时调用，不建议函数体内包含网络请求
    1.2.1+
    */
    return '/pages/good/details?a=1&b=2&liveId='+liveId+'&dockingCode='+dockingCode;
  },
  /**
   * 广告点击跳转链接
   * @param {*} adId 广告id
   * @param {*} liveId 直播间id
   * 渲染时调用，不建议函数体内包含网络请求
   * 1.2.0+
   */
  createADPath(adId,liveId){
    console.log('广告牌跳转url in wxplugin',{adId,liveId});
    return '/pages/good/details';
  },
  //1.1.5+
  saveImageToPhotosAlbum(src){
    const saveImg = (src) => {
      wx.downloadFile({
        url: src,
        success(res){
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(){
              wx.showToast({
                title: '成功保存到相册',
              })
            }
          })
        }
      })
    };
    wx.getSetting({
      success(res) {
          if (res.authSetting['scope.writePhotosAlbum']) {
              saveImg(src);
          } else if (res.authSetting['scope.writePhotosAlbum'] === undefined) {
              wx.authorize({
                  scope: 'scope.writePhotosAlbum',
                  success() {
                      saveImg(src);
                  },
                  fail(){
                      wx.showToast({
                          title: '您没有授权，无法保存到相册',
                          icon: 'none'
                      })
                  }
              })
          }else {
              wx.openSetting({
                  success(res) {
                      if (res.authSetting['scope.writePhotosAlbum']) {
                          saveImg(src);
                      }else{
                          wx.showToast({
                              title:'您没有授权，无法保存到相册',
                              icon:'none'
                          })
                      }
                  }
              })
          }
      }
  })
  }
});
```

- [开发版小程序引用开发版插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/development.html)

```
//开发版1.2.15
"plugins": {
    "myPlugin": {
      "version": "dev-9565bfc2365e4f795db82bc1dd652e59",
      "provider": "wx0ed3aa828dd719ef"
    }
}
```

### 跳转页面时附带的参数

#### 商品详情

```
dockingCode//商品对接编码
liveId//直播间id，1.1.3+
...自定义参数（来自添加商品时的跳转参数配置）
```

#### 直播详情页

```
liveId//直播间id
...自定义参数（来自添加商品时的跳转参数配置）
```

**注意**

- 开发者工具某些版本不支持使用者小程序配置export，如果报错，用真机调试
- 调试登录相关功能时，调试需要清除全部缓存

## 开放功能

见上面使用者小程序export js示例

### 可用页面
- 直播间：`details-page`

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



