// pages/student/student.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentId:"",
    password:""

  },
  
  submit:function(e){
    console.log(e.detail.value);

    var objData = e.detail.value;
    if(objData.studentId && objData.password){
      wx.setStorage({
        key: 'studentId',
        data: objData.studentId,
      })
      wx.setStorage({
        key: 'password',
        data: objData.password,
      })
      wx.redirectTo({
        url: '../timetable/timetable',
      })

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'studentId',
      success: function(res) {
        that.setData({studentId: res.data})
      },
    })
    wx.getStorage({
      key: 'password',
      success: function(res) {
        that.setData({password: res.data})
      },
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