// pages/player/player.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    IP: 'http://172.20.10.2:3333',
    index:0,
    CurListID: '',
    CurList: [],
    zyip: 'http://172.20.10.2:3000'
  },
  nextSong(){
   this.setData({
      index: this.data.index + 1
    }); 
   this.play()
   console.log(this.data.index)    
  },
  preSong() {
   this.setData({
      index: this.data.index -1
    }); 
    this.play()
    console.log(this.data.index)
  },




  play(){
       let Curlist=  this.data.CurList;
       let index = this.data.index;
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.epname = Curlist[index].album
    backgroundAudioManager.title = Curlist[index].songName
    backgroundAudioManager.singer = Curlist[index].singer
    backgroundAudioManager.coverImgUrl = this.data.zyip + Curlist[index].songImg
    backgroundAudioManager.src = this.data.zyip + Curlist[index].songUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.data.index=options.index
    var that = this;
    wx.request({
      url: that.data.IP + '/musicList/find', //仅为示例，并非真实的接口地址
      data: {
        _id: options.CurListID,
        submitType: "findJoin",
        ref: ['songList']
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          CurList: res.data.songList,
        });
        that.play()
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