//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  onLoad: function () {
    
  },
  navToQunYun() {
    console.log(1111)
        wx.navigateTo({
          url: 'plugin://live-plugin/list-page'
          // url: 'plugin://live-plugin-yunqin/details-page?id=80'
        })
  },
})
