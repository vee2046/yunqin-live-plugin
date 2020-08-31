module.exports = {
  login: function() {
    return 470
  },
  pages:{
    home  :{
        url:'/pages/index/index',
        openType:'reLaunch'//"navigate" | "redirect" | "switchTab" | "reLaunch"
    },details  :{
        url:'/pages/details/details',
        openType:'redirect'//"navigate" | "redirect" | "switchTab" | "reLaunch"
    },goodDetails:{
    	url:'/pages/good/details'
    }
  },
  // gotoHome:()=>{
  //   console.log('gotoHome in export js file')
  // 	wx.navigateTo({
  //     url: 'pages/index/index',
  //   })
  // },//跳转到首页
	// gotoProductDetail:(params)=>{
  //   console.log('in gotoProductDetail',params)
  // },//跳转的商品详情页，参数
  // goDetails(id){
  //   console.log('goDetails in export 11111')
  //   wx.navigateTo({
  //     url: 'pages/details/details',
  //   });
  // },
  shareInDetails(id){
    return {
      title:'分享设置 in demo'+id,

    }
  },
  config:() => {
    // 插件参数配置
    return {
      isDev:true//true 开发环境，false 生产环境
    }
  },
  shareCoupon(conpon){
    // 得到优惠券信息，继续逻辑
    console.log('触发优惠券分享 in demo',conpon);
    return {
      title:'分享优惠券 in demo couponId='+conpon.couponId
    }
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
}