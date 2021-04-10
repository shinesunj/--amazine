// components/article/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus:false
  },

  attached(){
    const articleDetail = this.data.articleDetail;
    const artId = articleDetail.artId;
    const likeList = wx.getStorageSync('likeList') || [];
    let likeStatus = false;
    likeList.forEach((item,index) => {
      if(item.artId === artId){
        likeStatus = true
      }
    })
    this.setData({
      likeStatus
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e){
      console.log(e.detail);
      const like = e.detail.like;
     
      if(like) {
        // 缓存文章
        likeList.unshift(articleDetail)
        wx.setStorageSync("likeList",likeList);
      }else{
        // 将文章从缓存当中移出
        let myIndex = 0;
        likeList.forEach((item,index) => {
          if(item.artId === artId){
            myIndex = index;
          }
        })
        likeList.splice(myIndex,1)
        ws.setStorageSync('likeList',likeList)
        // wx.removeStorageSync("like");
      }
    }
  }
})
