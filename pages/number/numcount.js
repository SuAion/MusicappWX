// pages/number/numcount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    IP:'http://172.20.10.2:3333',
    usersList:[],
    zyip: 'http://172.20.10.2:3000',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //-1
  clickpop(){
    this.setData({
      count:this.data.count - 1
    })
  },
  //+1
  clickadd() {
    that.setData({
      count: this.data.count + 1
    })
  },
  //跳转
  goSonglist(event){
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../songlist/songlist?id='+id
    })
  },
//
  getMusicList(){
    var that = this;
    wx.request({
      url: that.data.IP+'/musicList/find', //仅为示例，并非真实的接口地址
      data: {
        submitType: "findJoin",
        ref: ['songList']
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          usersList: res.data,
        }); 
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              // console(res.userInfo)
            }
          })
        }
      }
    });
    // 授权拍照
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.camera']) {
          wx.authorize({
            scope: 'scope.camera',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
            }
          })
        }
      }
    });
    //授权地理位置
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.getLocation(), wx.chooseLocation()
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getMusicList()

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