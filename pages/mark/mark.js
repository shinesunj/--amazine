// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    authorized:false,
    likeList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userAuthorized()

    // 从缓存中取值
   
    console.log('load')
  },


  onShow(){
   this.getMyLike9
  },


  onGetUserInfo(e){
    // 
    const userInfo = e.detail.userInfo;

    if(userInfo) {
      this.setData({
        userInfo,
        authorized:true
      })
      this.getMyLike();
    }
  },
  getMyLike(){
    const likeList = wx.getStorageSync('likeList') || [];
    this.setData({
      likeList
    })
  },
  userAuthorized(){
    var that = this;
    wx.getSetting({
      success:function(res){
        if(res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success:res => {
              that.setData({
                userInfo:res.userInfo,
                authorized:true
              })
              that.getMyLike()
            }
          })
        }
      }
    })
  }
 
})