// components/header-part/header-part.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toXishiduo(){
      wx.redirectTo({
        url: '../../pages/cstore/cstore',
      })
    },
    toDQ(){
      wx.redirectTo({
        url: '../../pages/card/card',
      })
    },
    toKFC(){
      wx.redirectTo({
        url: '../../pages/eatto/eatto',
      })
    },
    toPizza(){
      wx.redirectTo({
        url: '../../pages/pizza/pizza',
      })
    },
    toQuanjia(){
      wx.redirectTo({
        url: '../../pages/giftCard/giftCard',
      })
    },
    toTianfu(){
      wx.redirectTo({
        url: '../../pages/page_5/page_5',
      })
    }
  }
})
