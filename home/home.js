// home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "name" : '我是home.js中的name',
    "age" : 16,
    "say" : '你好',
    student : [
      {id : 1 , name : 'jack' , sex : 'nan' , school : 'ah'},
      {id : 2 , name : 'jecy' , sex : 'nv' , school : 'ah'},
      {id : 3 , name : 'jk' , sex : 'nan' , school : 'bj'},
      {id : 4 , name : 'lc' , sex : 'nv' , school : 'hf'}
    ]
  },
  sayHi : function() {
    console.log(this.data)

  },
  bindipt : function(event) {
    console.log(event);
    console.log(event.detail.value);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
   
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
  onPullDownRefresh: function (res) {
    console.log(res);
    console.log('用户下拉了');
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