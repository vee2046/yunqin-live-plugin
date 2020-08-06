module.exports = {
  login: function() {
    console.log('Hello plugin!')
  },
  gotoHome:()=>{
    console.log('gotoHome in export js file')
  	wx.navigateTo({
      url: 'pages/index/index',
    })
  },//跳转到首页
	gotoProductDetail:(params)=>{
    console.log('in gotoProductDetail',params)
  },//跳转的商品详情页，参数
  goDetails(id){
    console.log('goDetails in export 11111')
    wx.navigateTo({
      url: 'pages/details/details',
    });
  },
  shareInDetails(id){
    return {
      title:'分享设置'+id
    }
  },
}