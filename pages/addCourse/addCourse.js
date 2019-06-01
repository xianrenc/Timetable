Page({

  /**
   * 页面的初始数据
   */
  data: {
    coursename:"",
    teacher:"",
    classroom:"",
    oddeven:"",
    kcstart:"",
    kccd:""
  },

  submit: function (e) {
    console.log(e.detail.value);

    var objData = e.detail.value;
    /*
      wx.setStorage({
        key: 'coursename',
        data: objData.coursename,
      })
      wx.setStorage({
        key: 'week',
        data: objData.week,
      })
      wx.setStorage({
        key: 'classroom',
        data: objData.classroom,
      })
      wx.setStorage({
        key: 'oddeven',
        data: objData.oddeven,
      })
      wx.setStorage({
        key: 'kcStart',
        data: objData.kcstart,
      })
      wx.setStorage({
        key: 'kccd',
        data: objData.kcend - objData.kcstart,
      })
  */

      var pages = getCurrentPages()
      var currentPage = pages[pages.length-1]
      var prevPage = pages[pages.length-2]
      var obj={}
      obj.week = objData.week;
      obj.skjc = objData.kcstart;
      obj.skcd = objData.kcend - objData.kcstart;
      obj.kcmc = objData.coursename;
      obj.oddeven = objData.oddeven;
      console.log(obj);
      console.log(prevPage.data);
      var that = prevPage;
      let wlist = that.data.wlist;
      wlist.push(obj)
      that.setData({ wlist });
      wx.navigateBack({
        delta: 1
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    var that = this
    wx.getStorage({
      key: 'coursename',
      success: function (res) {
        that.setData({ coursename: res.data })
      },
    })
    wx.getStorage({
      key: 'teacher',
      success: function (res) {
        that.setData({ teacher: res.data })
      },
    })
    wx.getStorage({
      key: 'classroom',
      success: function(res) {
        that.setData({classroom: res.data})
      },
    })
    wx.getStorage({
      key: 'oddeven',
      success: function(res) {
        this.setData({oddeven :res.data})
      },
    })
    wx.getStorage({
      key: 'kcstart',
      success: function(res) {
        this.setData({kcstart: res.data})
      },
    })
    wx.getStorage({
      key: 'kccd',
      success: function(res) {
        this.setData({kccd: res.kccd})
      },
    })
    */
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

 