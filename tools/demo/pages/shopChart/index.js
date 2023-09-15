// pages/shopChart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [
      {
        shopId: '1',
        goods: [
          {
            id: '1',
            name: '1'
          },
          {
            id: '2',
            name: '2'
          }
        ]
      },
      {
        shopId: '2',
        goods: [
          {
            id: '3',
            name: '3'
          },
          {
            id: '4',
            name: '4'
          }
        ]
      }
    ],
    activation: [
      [],
      []
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {activation, goods} = {...this.data}
    goods.forEach(val => {
      activation[0] = []
      activation[1].push([])
    })
    this.setData({
      activation
    })
  },

  // 选择商品
  handleGoods(e) {
    const {id, index} = e.currentTarget.dataset
    const {activation, goods} = {...this.data}
    // 勾选商品
    const newIndex = activation[1][index].indexOf(id)
    if (newIndex >= 0) {
      activation[1][index].splice(newIndex, 1)
    } else {
      activation[1][index].push(id)
    }
    // 计算门店
    const shopStatus = goods[index].goods.length === activation[1][index].length
    const newShop = goods[index]
    if (shopStatus) {
      // 勾选
      if (!(activation[0].indexOf(newShop.shopId) >= 0)) {
        // 添加
        activation[0].push(newShop.shopId)
      }
    } else {
      // 不勾选
      const newShopIndex = activation[0].indexOf(newShop.shopId)
      if (newShopIndex >= 0) {
        // 删除
        activation[0].splice(newShopIndex, 1)
      }
    }
    this.setData({
      activation
    })
  },

  // 删除商品
  handleDeleteGoods(e) {
    const {id, index} = e.currentTarget.dataset
    const {activation, goods} = {...this.data}
    const newGoodsIndex = goods[index].goods.map(val => val.id).indexOf(id)
    // 删除数据
    goods[index].goods.splice(newGoodsIndex, 1)
    // 判断是否勾选
    const newActivationIndex = activation[1][index].indexOf(id)
    // 删除
    if (newActivationIndex >= 0) {
      activation[1][index].splice(newActivationIndex, 1)
    }
    // 判断门店是否还有数据
    if (goods[index].goods.length === 0) {
      goods.splice(index, 1)
      // 删除
      activation[1].splice(index, 1)
    }
    this.setData({
      activation,
      goods
    })
  },

  // 选择门店
  handleShops(e) {
    const {id, index} = e.currentTarget.dataset
    const {activation, goods} = {...this.data}
    const shopIndex = activation[0].indexOf(id)
    if (shopIndex >= 0) {
      // 存在 取消
      activation[0].splice(shopIndex, 1)
      // 商品
      activation[1][index] = []
    } else {
      // 不存在添加
      activation[0].push(id)
      // 商品
      activation[1][index] = goods[index].goods.map(val => val.id)
    }
    this.setData({
      activation
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
