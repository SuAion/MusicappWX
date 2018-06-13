// pages/songlist/songlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    IP: 'http://172.20.10.2:3333',
    CurListID:'',
    CurList: [],
    CurSong:{},
    zyip: 'http://172.20.10.2:3000'
  },
  PlaysongReady(event){
     let index = event.currentTarget.dataset.index //当前播放歌曲的下标
     this.data.CurSong  =  this.data.CurList[index]
     console.log(this.data.CurListID)
    // //跳转到播放页面
     wx.navigateTo({
       url: '../player/player?index=' + index + '&CurListID=' + this.data.CurListID
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.data.CurListID=options.id
      var that = this;
      wx.request({
        url: that.data.IP + '/musicList/find', //仅为示例，并非真实的接口地址
        data: {
          _id:options.id,
          submitType: "findJoin",
          ref: ['songList']
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            CurList: res.data.songList,
          });
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})