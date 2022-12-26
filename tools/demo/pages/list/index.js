Page({
  data: {
    loading: false,
    finished: false,
    list: []
  },

  onRefresh(e) {
    setTimeout(() => {
      this.setData({
        list: [],
        finished: false
      })
      e.detail()
      this.onLoadData()
    }, 1000)
  },

  onLoadData() {
    const that = this
    // 加载
    that.setData({
      loading: true
    })
    // 模拟加载
    setTimeout(() => {
      const {list} = that.data
      const data = list
      for (let i = 0; i < 10; i++) {
        data.push(data.length + 1)
      }
      that.setData({
        list: data,
        loading: false,
        finished: data.length >= 30
      })
      console.log(that.data)
    }, 1000)
  }
})
