var wc = require('../../utils/wcache.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    text: null
  },
  onLoad: function () {
  }, get(e) {
    this.setData({
      text: null
    });
    switch (e.currentTarget.dataset.type) {
      case "def":
        this.setData({
          text: wc.get('k')
        });
        break;
      case "string":
        this.setData({
          text: wc.get('k', '你好')
        });
        break;
      case "json":
        this.setData({
          text: wc.get('k', { "a": "1" })
        });
        break;
    }

  }, put(e) {
    console.log(e);
    switch (e.currentTarget.dataset.type) {
      case "string":
        wc.put('k', 'string你好啊');
        break;
      case "json":
        wc.put('k', { "b": "3" }, 2);
        break;
      case "list":
        wc.put('k', [1, 2, 3]);
        break;
      case "boolean":
        wc.put('k', true);
        break;
    }





    wx.showToast({
      title: '存储成功',
      duration: 500,
    })
  }

})
