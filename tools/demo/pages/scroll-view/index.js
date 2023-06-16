Page({
  data: {
    list: []
  },

  onLoad() {
    const list = []
    for (let i = 0; i < 20; i++) {
      list.push({
        name: i + 1
      })
    }
    this.setData({
      list
    }, function () {
      this.setData({
        scrollIntoView: 'scrollId10'
      })
    })
  }
})
