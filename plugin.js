module.exports = {
  login: function() {
    console.log('Hello plugin!')
  },
  gotoHome:()=>{
  	wx.navigateTo({
      url: 'pages/index',
    })
  },//跳转到首页
	gotoProductDetail:(params)=>{
    console.log('in gotoProductDetail',params)
  },//跳转的商品详情页，参数
}