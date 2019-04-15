// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    subtitle: '加载中...',
    type: '正在热映',
    hasMore: true,
    page: 1,
    size: 20,
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(params) {
    let pages = getCurrentPages()
    let prevPage = pages[pages.length - 2]

    if (params.type === '正在热映')
      this.setData({
        type: '正在热映',
        movies: prevPage.data.boards[0].movies,
        hasMore:false
      })
    else
      this.setData({
        type: '即将上映',
        movies: prevPage.data.boards[1].movies,
        hasMore:false
      })
      console.log(this.data)
    // this.loadMore()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.title + ' « 电影'
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
  },

  onReachBottom() {
  }
})