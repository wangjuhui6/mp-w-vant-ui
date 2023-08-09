const {wxmls, style} = require('./demo.js')

Page({
  data: {
    src: ''
  },

  onLoad() {
    this.widget = this.selectComponent('.widget')
    // 必须要用定时器延迟，不然会报错
    setTimeout(() => {
      this.renderToCanvas()
    }, 1000)
  },
  // 生成海报
  renderToCanvas() {
    const p1 = this.widget.renderToCanvas({wxml: wxmls(), style})
    p1.then((res) => {
      this.container = res
      this.extraImage()
    })
  },
  extraImage() {
    const p2 = this.widget.canvasToTempFilePath()
    p2.then(res => {
      this.setData({
        src: res.tempFilePath,
        width: this.container.layoutBox.width,
        height: this.container.layoutBox.height
      })
    })
  }
})
