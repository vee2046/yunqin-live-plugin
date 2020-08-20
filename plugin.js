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
      title:'分享设置'+id,

    }
  },
  config:() => {
    // 插件参数配置
    return {
      isDev:false//true 开发环境，false 生产环境
    }
  }
}