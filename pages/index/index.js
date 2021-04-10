
import {
  IndexModel
} from "../../models/index.js"

import {
  random
} from "../../utils/randomStr.js"

const indexModel = new IndexModel();

Page({
  data: {
    articleList:[],
    markList:[],
    recommend:{},
    getMore:'',
    magazineId:0,
    loading:true
  },
  onLoad: function () {
    this.getData()
    // wx.showLoading();
  },

  onReachBottom(){
    this.setData({
      getMore:random(20)
    })
  },
  onCatalog(){
    wx.switchTab({
      url: '../catalog/catalog',
    });
  },
  hideLoading(){
    this.setData({
      loading:false
    })
  },
  onNav(e){
    const magazineId = e.detail.index;
   this.setMagazineId(magazineId);
   this.resetData();
   this.scrollPageToTop();

    this.getData(magazineId);
  },


  getData(magazineId){
    const articleList = indexModel.getArticleList(magazineId);
    const markList = indexModel.getMarkList(magazineId);
    const recommend = indexModel.getRecommendInfo(magazineId);


    Promise.all([articleList,markList,recommend]).then((res)=>{
      this.setData({
        articleList:res[0],
        markList:res[1],
        recommend:res[2]
      })
      // wx.hideLoading();
      this.hideLoading()
    })
  },

  resetData(){
    this.setData({
      articleList:[],
      markList:[],
      recommend:{},
    })
  },

  scrollPageToTop(){
    wx.pageScrollTo({
      scrollTop:0,
      duration:0
    })
  },

  setMagazineId(magazineId){
    this.setData({
      magazineId
    })
  }
})