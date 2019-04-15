const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    boards: [{
        key: '正在热映'
      },
      {
        key: '即将上映'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '拼命加载中...'
    })
    const task1 = app.Mtime.showTime()
      .then(res => {
        return {
          key: this.data.boards[0].key,
          movies: res.data.ms,
          total: res.data.ms.length
        }
      })
    const task2 = app.Mtime.coming()
      .then(res => {
        return {
          key: this.data.boards[1].key,
          movies: res.data.moviecomings,
          total: res.data.moviecomings.length
        }
      })

    Promise.all([task1, task2]).then(boards => {
      this.setData({
        boards: boards,
        loading: false
      })
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})