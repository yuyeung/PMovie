/**
 * 抓取时光网正在热映电影
 * https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=366
 * @param  {String} type   类型，例如：'coming_soon'
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
function showTime(locationId=366) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=${locationId}`,
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}

/**
 * 抓取时光网即将上映电影
 * @param  {String} type   类型，例如：'coming_soon'
 * @param  {Number} page   页码
 * @param  {Number} count  页条数
 * @param  {String} search 搜索关键词
 * @return {Promise}       包含抓取任务的Promise
 */
function coming(locationId = 366) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=${locationId}`,
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}

/**
 * 获取单条类型的数据
 * @param  {Number} id     电影ID
 * @return {Promise}       包含抓取任务的Promise
 */
function getDetail(movieId,locationId = 366) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://ticket-api-m.mtime.cn/movie/detail.api?locationId=${locationId}&movieId=${movieId}`,
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}

module.exports = { showTime,coming,getDetail }
